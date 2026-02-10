import React from 'react';

import './header.css';
import { XCircleIcon } from './icons';

export type HeaderVariant = 'default';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual variant (reserved for future use) */
  variant?: HeaderVariant;
  /** Page title */
  title: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Show back button on the left */
  showBackButton?: boolean;
  /** Show close button on the right */
  showCloseButton?: boolean;
  /** Called when back button is clicked */
  onBackClick?: () => void;
  /** Called when close button is clicked */
  onCloseClick?: () => void;
}

/** Compact header with optional back and close buttons, using design tokens for layout and colors. */
export const Header: React.FC<HeaderProps> = ({
  variant = 'default',
  title,
  subtitle,
  showBackButton = false,
  showCloseButton = false,
  onBackClick,
  onCloseClick,
  className = '',
  ...rest
}) => {
  return (
    <header
      className={[
        'tipico-header',
        `tipico-header--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <div className="tipico-header__side tipico-header__side--left">
        {showBackButton && (
          <button
            type="button"
            className="tipico-header__icon-button"
            onClick={onBackClick}
            aria-label="Back"
          >
            <span className="tipico-header__icon-circle">
              <span className="tipico-header__icon" aria-hidden>
                <XCircleIcon size={32} />
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="tipico-header__title-group">
        <div className="tipico-header__title">{title}</div>
        {subtitle && <div className="tipico-header__subtitle">{subtitle}</div>}
      </div>

      <div className="tipico-header__side tipico-header__side--right">
        {showCloseButton && (
          <button
            type="button"
            className="tipico-header__icon-button"
            onClick={onCloseClick}
            aria-label="Close"
          >
            <span className="tipico-header__icon-circle">
              <span className="tipico-header__icon" aria-hidden>
                <XCircleIcon size={32} />
              </span>
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

