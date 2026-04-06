/* eslint-disable */

import React from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = React.useState<'light' | 'dark' | 'system'>('system');

  React.useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', isDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('healthbudi-theme', theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <div className="theme-switcher-options">
        <button
          className={`theme-option ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
          aria-label="Light theme"
        >
          <svg viewBox="0 0 24 24" className="icon">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Light</span>
        </button>
        
        <button
          className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
          aria-label="Dark theme"
        >
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          <span>Dark</span>
        </button>
        
        <button
          className={`theme-option ${theme === 'system' ? 'active' : ''}`}
          onClick={() => setTheme('system')}
          aria-label="System theme"
        >
          <svg viewBox="0 0 24 24" className="icon">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>System</span>
        </button>
      </div>
      
      <style>{`
        .theme-switcher {
          display: flex;
          justify-content: center;
          padding: 1rem;
        }
        
        .theme-switcher-options {
          display: inline-flex;
          background: rgb(var(--color-background-muted));
          border-radius: var(--radius-lg);
          padding: 4px;
        }
        
        .theme-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          color: rgb(var(--color-foreground-muted));
          transition: all 150ms ease-in-out;
        }
        
        .theme-option:hover {
          color: rgb(var(--color-foreground));
        }
        
        .theme-option.active {
          background: rgb(var(--color-background));
          color: rgb(var(--color-primary));
          box-shadow: var(--shadow-sm);
        }
        
        .theme-option .icon {
          width: 1.25rem;
          height: 1.25rem;
        }
        
        .theme-option:focus-visible {
          outline: 2px solid rgb(var(--color-primary));
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}