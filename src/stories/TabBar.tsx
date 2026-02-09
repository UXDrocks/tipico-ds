import React from 'react';

import './tabbar.css';

export interface TabBarTab {
  id: string;
  label: string;
}

export interface TabBarProps {
  /** Tabs (2–5 recommended for readability) */
  tabs: TabBarTab[];
  /** ID of the active tab */
  activeId: string;
  /** Called when a tab is selected */
  onSelect: (id: string) => void;
  /** Optional class name for the container */
  className?: string;
  /** Accessible name for the tab list */
  'aria-label'?: string;
}

/** Segmented tab bar with active (raised) and inactive states. Uses design tokens. */
export const TabBar = ({
  tabs,
  activeId,
  onSelect,
  className = '',
  'aria-label': ariaLabel = 'Tabs',
}: TabBarProps) => {
  return (
    <div
      className={`tipico-tabbar ${className}`.trim()}
      role="tablist"
      aria-label={ariaLabel}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            id={`tab-${tab.id}`}
            aria-controls={`panel-${tab.id}`}
            className={`tipico-tabbar__tab ${isActive ? 'tipico-tabbar__tab--active' : ''}`}
            onClick={() => onSelect(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
