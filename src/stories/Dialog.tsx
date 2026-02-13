import React from 'react';

import { Button, type ButtonVariant } from './Button';
import { XCircleIcon } from './icons';

import './dialog.css';

export interface DialogProps {
  /** Controls visibility of the dialog */
  open: boolean;
  /** Called when the dialog requests to be closed (overlay or close button) */
  onClose?: () => void;
  /** Dialog title */
  title: string;
  /** Optional description / body text */
  description?: React.ReactNode;
  /** Show or hide the icon above the title */
  showIcon?: boolean;
  /** Optional custom icon; falls back to a default if not provided */
  icon?: React.ReactNode;
  /** Show or hide the close button in the top-right corner */
  showClose?: boolean;
  /** Label for the primary action button */
  primaryLabel?: string;
  /** Variant for the primary button */
  primaryVariant?: ButtonVariant;
  /** Called when the primary button is clicked */
  onPrimary?: () => void;
  /** Whether to show a secondary button below the primary one */
  showSecondaryButton?: boolean;
  /** Label for the secondary action button */
  secondaryLabel?: string;
  /** Variant for the secondary button */
  secondaryVariant?: ButtonVariant;
  /** Called when the secondary button is clicked */
  onSecondary?: () => void;
}

/** Modal dialog with blurred overlay, optional icon + close, and one or two actions. */
export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  description,
  showIcon = true,
  icon,
  showClose = true,
  primaryLabel = 'Accept',
  primaryVariant = 'primary',
  onPrimary,
  showSecondaryButton = true,
  secondaryLabel = 'Decline',
  secondaryVariant = 'secondary',
  onSecondary,
}) => {
  if (!open) return null;

  const handlePrimary = () => {
    onPrimary?.();
  };

  const handleSecondary = () => {
    onSecondary?.();
  };

  const handleClose = () => {
    onClose?.();
  };

  const defaultIcon = (
    <div className="tipico-dialog__icon">
      {/* simple grid placeholder icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <rect x="4" y="4" width="4" height="4" rx="0.5" />
        <rect x="10" y="4" width="4" height="4" rx="0.5" />
        <rect x="16" y="4" width="4" height="4" rx="0.5" />
        <rect x="4" y="10" width="4" height="4" rx="0.5" />
        <rect x="10" y="10" width="4" height="4" rx="0.5" />
        <rect x="16" y="10" width="4" height="4" rx="0.5" />
        <rect x="4" y="16" width="4" height="4" rx="0.5" />
        <rect x="10" y="16" width="4" height="4" rx="0.5" />
        <rect x="16" y="16" width="4" height="4" rx="0.5" />
      </svg>
    </div>
  );

  const titleId = 'tipico-dialog-title';
  const descriptionId = description ? 'tipico-dialog-description' : undefined;

  return (
    <div
      className="tipico-dialog-backdrop"
      role="presentation"
      onClick={handleClose}
    >
      <div
        className="tipico-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(e) => e.stopPropagation()}
      >
        {showClose && (
          <button
            type="button"
            className="tipico-dialog__close"
            onClick={handleClose}
            aria-label="Close dialog"
          >
            <XCircleIcon size={18} />
          </button>
        )}

        {showIcon && (icon ?? defaultIcon)}

        <h2 id={titleId} className="tipico-dialog__title">
          {title}
        </h2>

        {description && (
          <p id={descriptionId} className="tipico-dialog__body">
            {description}
          </p>
        )}

        <div className="tipico-dialog__actions">
          <Button
            variant={primaryVariant}
            fullWidth
            onClick={handlePrimary}
          >
            {primaryLabel}
          </Button>
          {showSecondaryButton && (
            <Button
              variant={secondaryVariant}
              fullWidth
              onClick={handleSecondary}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

