import React from 'react';

import './toast.css';

export type ToastVariant = 'neutral' | 'info' | 'success' | 'error' | 'warning';

export interface ToastProps {
  /** Semantic variant (color) */
  variant?: ToastVariant;
  /** Message text */
  message: string;
  /** Show status icon (default true) */
  showIcon?: boolean;
  /** Called when toast is dismissed (e.g. close button or auto) */
  onClose?: () => void;
  /** Accessible label for close button */
  closeLabel?: string;
  /** Optional id for list keys */
  id?: string;
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

/** Single toast for real-time feedback. Renders message + icon; use inside ToastStack for positioning and animation. */
export const Toast = ({
  variant = 'neutral',
  message,
  showIcon = true,
  onClose,
  closeLabel = 'Dismiss',
  className = '',
}: ToastProps) => {
  const iconByVariant: Record<ToastVariant, React.ReactNode> = {
    neutral: <IconInfo />,
    info: <IconInfo />,
    success: <IconCheck />,
    error: <IconExclamation />,
    warning: <IconExclamation />,
  };

  return (
    <div
      className={`tipico-toast tipico-toast--${variant} ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      {showIcon && (
        <span className="tipico-toast__icon" aria-hidden>
          {iconByVariant[variant]}
        </span>
      )}
      <span className="tipico-toast__message">{message}</span>
      {onClose && (
        <button
          type="button"
          className="tipico-toast__close"
          onClick={onClose}
          aria-label={closeLabel}
        >
          <IconClose />
        </button>
      )}
    </div>
  );
};
