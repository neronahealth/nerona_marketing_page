import React from 'react';

export default function ButtonShowcase() {
  return (
    <div className="showcase">
      <section className="showcase-section">
        <h2>Button Variants</h2>
        
        {/* Default (Primary) */}
        <div className="showcase-group">
          <h3>Default (Primary)</h3>
          <button className="btn btn-primary">
            Primary Button
          </button>
          <p className="showcase-note">
            Solid primary background. Used for the most important actions.
          </p>
        </div>
        
        {/* Secondary */}
        <div className="showcase-group">
          <h3>Secondary</h3>
          <button className="btn btn-secondary">
            Secondary Button
          </button>
        </div>
        
        {/* Outline */}
        <div className="showcase-group">
          <h3>Outline</h3>
          <button className="btn btn-outline">
            Outline Button
          </button>
        </div>
        
        {/* Ghost */}
        <div className="showcase-group">
          <h3>Ghost</h3>
          <button className="btn btn-ghost">
            Ghost Button
          </button>
        </div>
        
        {/* Destructive */}
        <div className="showcase-group">
          <h3>Destructive</h3>
          <button className="btn btn-destructive">
            Delete Account
          </button>
        </div>
        
        {/* Link */}
        <div className="showcase-group">
          <h3>Link</h3>
          <button className="btn btn-link">
            Learn More
          </button>
        </div>
      </section>
      
      <section className="showcase-section">
        <h2>Button Sizes</h2>
        
        <div className="showcase-group">
          <h3>Size Variants</h3>
          <div className="showcase-row">
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary btn-lg">Large</button>
            <button className="btn btn-primary btn-xl">Extra Large</button>
          </div>
        </div>
        
        <div className="showcase-group">
          <h3>Icon Only</h3>
          <div className="showcase-row">
            <button className="btn btn-primary btn-icon" aria-label="Add item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn btn-secondary btn-icon" aria-label="Settings">
              <svg className="icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      <section className="showcase-section">
        <h2>Button States</h2>
        
        <div className="showcase-group">
          <h3>Default State</h3>
          <button className="btn btn-primary">Default</button>
        </div>
        
        <div className="showcase-group">
          <h3>Hover State</h3>
          <button className="btn btn-primary hover">Hover</button>
          <p className="showcase-note">
            Darker background, elevated shadow
          </p>
        </div>
        
        <div className="showcase-group">
          <h3>Focus State</h3>
          <button className="btn btn-primary focus-visible">Focus</button>
          <p className="showcase-note">
            Ring-2 ring-offset-2 ring-primary
          </p>
        </div>
        
        <div className="showcase-group">
          <h3>Active State</h3>
          <button className="btn btn-primary active">Active</button>
          <p className="showcase-note">
            Darker background, reduced shadow
          </p>
        </div>
        
        <div className="showcase-group">
          <h3>Disabled State</h3>
          <button className="btn btn-primary" disabled>Disabled</button>
        </div>
        
        <div className="showcase-group">
          <h3>Loading State</h3>
          <button className="btn btn-primary" disabled>
            <svg className="spinner" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.25"/>
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
            Loading...
          </button>
        </div>
      </section>
      
      <section className="showcase-section">
        <h2>Button with Icons</h2>
        
        <div className="showcase-group">
          <h3>Left Icon</h3>
          <button className="btn btn-primary">
            <svg className="icon icon-left" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add Item
          </button>
        </div>
        
        <div className="showcase-group">
          <h3>Right Icon</h3>
          <button className="btn btn-primary">
            Continue
            <svg className="icon icon-right" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="showcase-group">
          <h3>Both Icons</h3>
          <button className="btn btn-outline">
            <svg className="icon icon-left" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add
            <svg className="icon icon-right" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
      
      <section className="showcase-section">
        <h2>Button Group</h2>
        
        <div className="showcase-group">
          <div className="btn-group">
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-outline">Cancel</button>
          </div>
        </div>
        
        <div className="showcase-group">
          <div className="btn-group btn-group-segmented">
            <button className="btn btn-outline active">Day</button>
            <button className="btn btn-outline">Week</button>
            <button className="btn btn-outline">Month</button>
          </div>
        </div>
      </section>
      
      <section className="showcase-section">
        <h2>Full Width</h2>
        
        <button className="btn btn-primary btn-full">
          Full Width Button
        </button>
      </section>

      <style>{`
        .showcase {
          font-family: var(--font-body);
          padding: 2rem;
        }
        
        .showcase-section {
          margin-bottom: 3rem;
        }
        
        .showcase-section h2 {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: var(--font-semibold);
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgb(var(--color-border));
        }
        
        .showcase-group {
          margin-bottom: 1.5rem;
        }
        
        .showcase-group h3 {
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          color: rgb(var(--color-foreground-muted));
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: var(--tracking-wide);
        }
        
        .showcase-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .showcase-note {
          font-size: var(--text-xs);
          color: rgb(var(--color-foreground-subtle));
          margin-top: 0.5rem;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          border-radius: var(--radius-lg);
          font-weight: var(--font-medium);
          font-size: var(--text-base);
          transition: all 150ms ease-in-out;
          cursor: pointer;
          border: none;
          white-space: nowrap;
        }
        
        .btn:focus-visible {
          outline: 2px solid rgb(var(--color-primary));
          outline-offset: 2px;
        }
        
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-primary {
          background: rgb(var(--color-primary));
          color: rgb(var(--color-primary-foreground));
          box-shadow: var(--shadow-sm);
        }
        
        .btn-primary:hover {
          background: rgb(var(--color-primary-600));
          box-shadow: var(--shadow-md);
        }
        
        .btn-primary:active {
          transform: scale(0.98);
        }
        
        .btn-secondary {
          background: rgb(var(--color-background-muted));
          color: rgb(var(--color-foreground));
        }
        
        .btn-secondary:hover {
          background: rgb(var(--color-background-emphasis));
        }
        
        .btn-outline {
          background: transparent;
          color: rgb(var(--color-primary));
          border: 1px solid rgb(var(--color-primary));
        }
        
        .btn-outline:hover {
          background: rgb(var(--color-primary) / 0.1);
        }
        
        .btn-ghost {
          background: transparent;
          color: rgb(var(--color-foreground));
        }
        
        .btn-ghost:hover {
          background: rgb(var(--color-background-muted));
        }
        
        .btn-destructive {
          background: rgb(var(--color-error));
          color: rgb(var(--color-error-foreground));
        }
        
        .btn-destructive:hover {
          background: rgb(var(--color-error-700));
        }
        
        .btn-link {
          background: transparent;
          color: rgb(var(--color-primary));
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        
        .btn-link:hover {
          color: rgb(var(--color-primary-600));
        }
        
        .btn-sm {
          height: 32px;
          padding: 0 12px;
          font-size: var(--text-sm);
        }
        
        .btn-lg {
          height: 48px;
          padding: 0 24px;
          font-size: var(--text-lg);
        }
        
        .btn-xl {
          height: 56px;
          padding: 0 32px;
          font-size: var(--text-xl);
        }
        
        .btn-icon {
          width: 40px;
          height: 40px;
          padding: 0;
        }
        
        .btn-full {
          width: 100%;
        }
        
        .btn-group {
          display: inline-flex;
          gap: 0.5rem;
        }
        
        .btn-group-segmented .btn {
          border-radius: 0;
        }
        
        .btn-group-segmented .btn:first-child {
          border-radius: var(--radius-lg) 0 0 var(--radius-lg);
        }
        
        .btn-group-segmented .btn:last-child {
          border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
        }
        
        .icon {
          width: 1em;
          height: 1em;
        }
        
        .icon-left {
          margin-right: -0.25em;
        }
        
        .icon-right {
          margin-left: -0.25em;
        }
        
        .spinner {
          width: 1em;
          height: 1em;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}