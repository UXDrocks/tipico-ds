import React from 'react';

/**
 * Wrapper for Storybook stories that need full width and consistent padding
 * (e.g. ProgressBar, full-width forms). Use in story render functions to avoid
 * repeating the same inline styles.
 */
export const StoryFullWidth: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      width: '100%',
      maxWidth: '100%',
      padding: 'var(--space-8)',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);
