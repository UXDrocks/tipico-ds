import React from 'react';

import './text-field.css';

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label: string;
  /** Hide label visually (keep for a11y) */
  hideLabel?: boolean;
  /** Error message */
  error?: string;
  /** Optional hint below field */
  hint?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'tel';
}

/** Text input using design tokens */
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      hideLabel = false,
      error,
      hint,
      type = 'text',
      id: idProp,
      className = '',
      ...props
    },
    ref
  ) => {
    const id = idProp ?? `text-field-${React.useId()}`;
    const errorId = error ? `${id}-error` : undefined;
    const hintId = hint ? `${id}-hint` : undefined;

    return (
      <div className={`tipico-text-field ${error ? 'tipico-text-field--error' : ''} ${className}`.trim()}>
        <label
          htmlFor={id}
          className={hideLabel ? 'tipico-text-field__label tipico-text-field__label--hidden' : 'tipico-text-field__label'}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          type={type}
          className="tipico-text-field__input"
          aria-invalid={!!error}
          aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className="tipico-text-field__error" role="alert">
            {error}
          </span>
        )}
        {hint && !error && (
          <span id={hintId} className="tipico-text-field__hint">
            {hint}
          </span>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
