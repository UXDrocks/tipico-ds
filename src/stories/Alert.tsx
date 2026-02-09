import React, { useState } from 'react';

import { Link } from './Link';

import './alert.css';

export type AlertVariant = 'neutral' | 'info' | 'error' | 'success' | 'warning';

export interface AlertProps {
  /** Semantic variant (color and icon) */
  variant?: AlertVariant;
  /** Bold headline */
  title: string;
  /** Body content */
  children: React.ReactNode;
  /** Show the status icon on the left (default true) */
  showIcon?: boolean;
  /** When provided, shows a close button and calls this on click */
  onClose?: () => void;
  /** Optional link shown after the body */
  link?: { href: string; label: string };
  /** Optional aria-label for the close button */
  closeLabel?: string;
  /** Additional class name */
  className?: string;
}

const IconInfo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5ZM10 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconExclamation = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9.25 5.25a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0v-5.5Zm.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.798 4.798a.75.75 0 0 1 1.06 0L10 8.94l4.142-4.141a.75.75 0 1 1 1.06 1.06L11.06 10l4.142 4.142a.75.75 0 0 1-1.06 1.06L10 11.06l-4.142 4.142a.75.75 0 0 1-1.06-1.06L8.94 10 4.798 5.858a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

/** Alert banner with variant, optional icon, close, and link. Uses design tokens. */
export const Alert = ({
  variant = 'neutral',
  title,
  children,
  showIcon = true,
  onClose,
  link,
  closeLabel = 'Close',
  className = '',
}: AlertProps) => {
  const iconByVariant: Record<AlertVariant, React.ReactNode> = {
    neutral: <IconInfo />,
    info: <IconInfo />,
    error: <IconExclamation />,
    success: <IconCheck />,
    warning: <IconExclamation />,
  };

  return (
    <div
      className={`tipico-alert tipico-alert--${variant} ${className}`.trim()}
      role="alert"
    >
      {showIcon && (
        <span className="tipico-alert__icon" aria-hidden>
          {iconByVariant[variant]}
        </span>
      )}
      <div className="tipico-alert__content">
        <p className="tipico-alert__title">{title}</p>
        <div className="tipico-alert__body">{children}</div>
        {link && (
          <p className="tipico-alert__link-wrap">
            <Link href={link.href}>{link.label}</Link>
          </p>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          className="tipico-alert__close"
          onClick={onClose}
          aria-label={closeLabel}
        >
          <IconClose />
        </button>
      )}
    </div>
  );
};
