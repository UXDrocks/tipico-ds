import React from 'react';

import './label.css';

export type LabelVariant = 'neutral' | 'positive' | 'info' | 'negative' | 'warning';

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual color variant */
  variant?: LabelVariant;
  /** Active vs. inactive appearance */
  active?: boolean;
  /** Optional icon before the label */
  iconLeft?: React.ReactNode;
  /** Optional icon after the label */
  iconRight?: React.ReactNode;
  /** Label text */
  children: React.ReactNode;
}

/**
 * Small semantic label for statuses / metadata.
 * Uses semantic tokens from `tokens.semantic.css` (text / background / signals).
 */
export const Label = ({
  variant = 'neutral',
  active = true,
  children,
  iconLeft,
  iconRight,
  className = '',
  ...props
}: LabelProps) => {
  return (
    <span
      className={[
        'tipico-label',
        `tipico-label--${variant}`,
        active ? 'tipico-label--active' : 'tipico-label--inactive',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {iconLeft && <span className="tipico-label__icon tipico-label__icon--left">{iconLeft}</span>}
      <span className="tipico-label__text">{children}</span>
      {iconRight && <span className="tipico-label__icon tipico-label__icon--right">{iconRight}</span>}
    </span>
  );
};

