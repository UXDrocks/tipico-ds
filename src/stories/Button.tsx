import React from 'react';

import './button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Button content */
  children: React.ReactNode;
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Full width */
  fullWidth?: boolean;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Optional label when loading (e.g. "Saving…") */
  loadingLabel?: string;
  /** Icon or element before the label */
  iconLeft?: React.ReactNode;
  /** Icon or element after the label */
  iconRight?: React.ReactNode;
}

function Spinner() {
  return (
    <span className="tipico-btn__spinner" aria-hidden>
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="32"
          strokeDashoffset="12"
        />
      </svg>
    </span>
  );
}

/** Button with primary, secondary, tertiary, and destructive variants. Supports loading state and optional icons. */
export const Button = ({
  variant = 'primary',
  children,
  size = 'medium',
  fullWidth = false,
  loading = false,
  loadingLabel,
  iconLeft,
  iconRight,
  className = '',
  disabled,
  type = 'button',
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={[
        'tipico-btn',
        `tipico-btn--${variant}`,
        `tipico-btn--${size}`,
        fullWidth ? 'tipico-btn--full' : '',
        loading ? 'tipico-btn--loading' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled}
      aria-busy={loading}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          <span className="tipico-btn__text">
            {loadingLabel ?? (typeof children === 'string' ? children : 'Loading…')}
          </span>
        </>
      ) : (
        <>
          {iconLeft && <span className="tipico-btn__icon tipico-btn__icon--left">{iconLeft}</span>}
          <span className="tipico-btn__text">{children}</span>
          {iconRight && <span className="tipico-btn__icon tipico-btn__icon--right">{iconRight}</span>}
        </>
      )}
    </button>
  );
};
