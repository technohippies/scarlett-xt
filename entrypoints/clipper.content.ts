import { defineContentScript } from 'wxt/sandbox';
import browser from 'webextension-polyfill';
import { sendMessage } from '~/utils/messaging'; // Assuming messaging util exists

export default defineContentScript({
  matches: ['<all_urls>'], // Run on all http/https pages
  // Exclude specific pages if needed, e.g., extension pages, internal pages
  excludeMatches: [
    '*://localhost:*/*',
    '*://127.0.0.1:*/*',
    'moz-extension://*/*',
    'chrome-extension://*/*'
  ],
  runAt: 'document_end', // Run after the DOM is mostly loaded

  main() {
    console.log('Web Clipper Content Script Loaded');

    // Create the clip button
    const clipButton = document.createElement('button');
    clipButton.textContent = 'Clip Page';
    // Basic styling - feel free to make this fancier!
    clipButton.style.position = 'fixed';
    clipButton.style.top = '10px';
    clipButton.style.right = '10px';
    clipButton.style.zIndex = '9999';
    clipButton.style.padding = '8px 12px';
    clipButton.style.backgroundColor = '#007bff';
    clipButton.style.color = 'white';
    clipButton.style.border = 'none';
    clipButton.style.borderRadius = '4px';
    clipButton.style.cursor = 'pointer';
    clipButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

    // Add click listener
    clipButton.addEventListener('click', async () => {
      console.log('Clip button clicked!');
      const pageTitle = document.title;
      const pageUrl = window.location.href;

      if (!pageUrl || pageUrl.startsWith('about:') || pageUrl.startsWith('moz-extension:') || pageUrl.startsWith('chrome-extension:') ) {
         console.log('Skipping clip for internal or extension page.');
         alert('Cannot clip this type of page.');
         return;
      }

      console.log(`Sending clip data: ${pageTitle} - ${pageUrl}`);
      clipButton.textContent = 'Clipping...';
      clipButton.disabled = true;

      try {
        // Send message to background script
        await sendMessage('clipPage', { title: pageTitle, url: pageUrl });
        console.log('Clip data sent successfully.');
        clipButton.textContent = 'Clipped!';
        // Optionally remove the button or change state after a delay
        setTimeout(() => {
          clipButton.textContent = 'Clip Page';
          clipButton.disabled = false;
        }, 1500);
      } catch (error) {
        console.error('Error sending clip data:', error);
        alert('Failed to clip page. See console for details.');
        clipButton.textContent = 'Error';
         setTimeout(() => {
          clipButton.textContent = 'Clip Page';
          clipButton.disabled = false;
        }, 2000);
      }
    });

    // Append button to the page body
    document.body.appendChild(clipButton);

    console.log('Clip button added to page.');
  },
}); 