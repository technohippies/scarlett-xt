import browser from 'webextension-polyfill';
import { onMessage, sendMessage, setupCentralListener } from '../lib/messaging';

console.log('Background script loaded.');

// Define the structure of the data expected from the clipper content script
interface ClipData {
  title: string;
  url: string;
}

// defineBackground is globally available here thanks to WXT
export default defineBackground(() => {
  console.log('WXT Background defined');

  // --- Setup the central message listener --- 
  // This allows `onMessage` calls below to work.
  setupCentralListener();

  // --- Listener for clipping requests from content script ---
  onMessage<ClipData>('clipPage', async (message) => {
    console.log('Background: Received clipPage message', message.data);

    const { title, url } = message.data;

    if (!title || !url) {
      console.error('Background: Invalid clip data received.');
      return; // Or send an error response
    }

    // Prepare SQL to insert into the clips table
    // Using ON CONFLICT DO NOTHING because the URL is unique
    const sql = `
      INSERT INTO clips (title, url)
      VALUES ($1, $2)
      ON CONFLICT (url) DO NOTHING;
    `;
    const params = [title, url];

    console.log('Background: Sending exec command to offscreen for clipping...');
    try {
      // Send message to the offscreen document to execute the SQL
      const response = await sendMessage('exec', 
        {
           // Specify the target for the message (important if offscreen.ts checks it)
           target: 'offscreen', 
           sql: sql, 
           params: params 
        }
      );
      console.log('Background: Offscreen exec response:', response);
      
      // Optionally, notify the content script or update UI based on the response
      if (response?.status === 'success') {
        console.log(`Background: Successfully clipped ${url}`);
        // Maybe send a notification?
        browser.notifications.create(`clip-success-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'), // Ensure icon path is correct
          title: 'Page Clipped',
          message: `Saved: ${title}`,
          priority: 0
        });
      } else {
         console.error('Background: Offscreen document failed to execute clip SQL:', response?.error);
         // Handle error - maybe notify user?
         browser.notifications.create(`clip-error-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'),
          title: 'Clipping Failed',
          message: `Could not save ${title}. Error: ${response?.error || 'Unknown reason'}`,
          priority: 1
        });
      }

    } catch (error) {
      console.error('Background: Error sending message to offscreen document:', error);
       browser.notifications.create(`clip-comm-error-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'),
          title: 'Clipping Error',
          message: `Failed to communicate with the database service. Is the offscreen document running?`,
          priority: 1
        });
    }
  });

  // --- Add other background listeners here (e.g., alarms, other messages) ---

  console.log('Background script setup complete.');
}); 