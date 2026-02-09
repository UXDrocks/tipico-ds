import React from 'react';

import { Link } from './Link';
import { AlertCircleIcon, CheckCircleIcon } from './icons';

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
  /** Optional custom icon; if provided it overrides the default icon for the given variant */
  icon?: React.ReactNode;
  /** When provided, shows a close button and calls this on click */
  onClose?: () => void;
  /** Optional link shown after the body */
  link?: { href: string; label: string };
  /** Optional aria-label for the close button */
  closeLabel?: string;
  /** Additional class name */
  className?: string;
}

const ICON_SIZE = 20;

const IconClose = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.798 4.798a.75.75 0 0 1 1.06 0L10 8.94l4.142-4.141a.75.75 0 1 1 1.06 1.06L11.06 10l4.142 4.142a.75.75 0 0 1-1.06 1.06L10 11.06l-4.142 4.142a.75.75 0 0 1-1.06-1.06L8.94 10 4.798 5.858a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

/** Alert banner with variant, optional icon, close, and link. Uses design tokens and shared icon set. */
export const Alert = ({
  variant = 'neutral',
  title,
  children,
  showIcon = true,
  icon,
  onClose,
  link,
  closeLabel = 'Close',
  className = '',
}: AlertProps) => {
  const iconByVariant: Record<AlertVariant, React.ReactNode> = {
    neutral: <AlertCircleIcon size={ICON_SIZE} />,
    info: <AlertCircleIcon size={ICON_SIZE} />,
    error: <AlertCircleIcon size={ICON_SIZE} />,
    success: <CheckCircleIcon size={ICON_SIZE} />,
    warning: <AlertCircleIcon size={ICON_SIZE} />,
  };

  const iconNode = icon ?? iconByVariant[variant];

  return (
    <div
      className={`tipico-alert tipico-alert--${variant} ${className}`.trim()}
      role="alert"
    >
      {showIcon && (
        <span className="tipico-alert__icon" aria-hidden>
          {iconNode}
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
