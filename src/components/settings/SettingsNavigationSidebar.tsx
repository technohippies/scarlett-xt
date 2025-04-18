import { Robot, BookmarkSimple, Cards, ChatCircle, ChartLine } from '@phosphor-icons/react';
import { cn } from '../../../lib/utils';

export type SettingsSection = 'overview' | 'models' | 'bookmarks' | 'flashcards' | 'chat';

export interface SettingsNavigationSidebarProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', Icon: ChartLine },
  { id: 'models', label: 'Models', Icon: Robot },
  { id: 'bookmarks', label: 'Bookmarks', Icon: BookmarkSimple },
  { id: 'flashcards', label: 'Flashcards', Icon: Cards },
  { id: 'chat', label: 'Chat', Icon: ChatCircle },
] as const; // Use 'as const' for stricter typing of ids

export function SettingsNavigationSidebar({
  activeSection,
  onSectionChange,
}: SettingsNavigationSidebarProps) {
  return (
    <nav className="flex flex-col h-full w-56 bg-background border-r border-border p-4 gap-2">
      {navItems.map((item) => {
        const isActive = item.id === activeSection;
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
              isActive
                ? 'bg-muted text-primary hover:bg-muted'
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            )}
          >
            <item.Icon 
              size={20} 
              weight="duotone" 
              className={cn(isActive ? 'text-primary' : 'text-muted-foreground')} 
            />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
} 