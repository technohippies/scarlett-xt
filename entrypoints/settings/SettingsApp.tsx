import { useState } from 'react';
import { 
  SettingsNavigationSidebar, 
  type SettingsSection 
} from '../../src/components/settings/SettingsNavigationSidebar';

// Placeholder components for each section
const OverviewSection = () => <div className="p-6"><h2 className="text-2xl font-semibold mb-4">Overview</h2><p>Statistics and general information.</p></div>;
const ModelsSection = () => <div className="p-6"><h2 className="text-2xl font-semibold mb-4">Models</h2><p>Configure LLM settings (Ollama, OpenRouter, etc.).</p></div>;
const BookmarksSection = () => <div className="p-6"><h2 className="text-2xl font-semibold mb-4">Bookmarks</h2><p>Search and manage saved bookmarks.</p></div>;
const FlashcardsSection = () => <div className="p-6"><h2 className="text-2xl font-semibold mb-4">Flashcards</h2><p>Review and manage created flashcards.</p></div>;
const ChatSection = () => <div className="p-6"><h2 className="text-2xl font-semibold mb-4">Chat Settings</h2><p>Configure chat behavior and history.</p></div>;

function SettingsApp() {
  // Default to 'overview' section
  const [activeSection, setActiveSection] = useState<SettingsSection>('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'models':
        return <ModelsSection />;
      case 'bookmarks':
        return <BookmarksSection />;
      case 'flashcards':
        return <FlashcardsSection />;
      case 'chat':
        return <ChatSection />;
      default:
        // Optional: handle unexpected section value
        const exhaustiveCheck: never = activeSection;
        console.warn(`Unhandled section: ${exhaustiveCheck}`);
        return <OverviewSection />; // Fallback to overview
    }
  };

  return (
    <div className="flex h-screen w-screen bg-background text-foreground">
      <SettingsNavigationSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="flex-1 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
}

export default SettingsApp; 