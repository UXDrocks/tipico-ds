import React from 'react';

import './bottom-navigation.css';

export interface BottomNavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface BottomNavigationProps {
  /** Navigation items (5 recommended for this layout) */
  items: BottomNavigationItem[];
  /** ID of the active item */
  activeId: string;
  /** Called when a navigation item is selected */
  onSelect: (id: string) => void;
  /** Optional class name for the container */
  className?: string;
  /** Accessible label for the navigation landmark */
  'aria-label'?: string;
}

/**
 * Mobile bottom navigation with 5 items.
 * - Sticky at the bottom of the viewport
 * - Slightly blurred, translucent background
 * - Icons + labels, tap targets sized for touch
 */
export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  activeId,
  onSelect,
  className = '',
  'aria-label': ariaLabel = 'Bottom navigation',
}) => {
  return (
    <nav
      className={['tipico-bottomnav', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
    >
      <div className="tipico-bottomnav__inner">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              className={[
                'tipico-bottomnav__item',
                isActive ? 'tipico-bottomnav__item--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onSelect(item.id)}
            >
              <div className="tipico-bottomnav__icon" aria-hidden>
                {item.icon}
              </div>
              <span className="tipico-bottomnav__label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

