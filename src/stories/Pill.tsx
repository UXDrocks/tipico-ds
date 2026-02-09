import React from 'react';

import './pill.css';

export type PillVariant = 'neutral' | 'positive' | 'info' | 'negative' | 'warning';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual color variant */
  variant?: PillVariant;
  /** Active vs. inactive appearance */
  active?: boolean;
  /** Optional icon before the label */
  iconLeft?: React.ReactNode;
  /** Optional icon after the label */
  iconRight?: React.ReactNode;
  /** Label inside the pill */
  children: React.ReactNode;
}

/**
 * Compact pill for statuses / tags.
 * Variants map to the design-system signal colors.
 */
export const Pill = ({
  variant = 'neutral',
  active = true,
  children,
  iconLeft,
  iconRight,
  className = '',
  ...props
}: PillProps) => {
  return (
    <span
      className={[
        'tipico-pill',
        `tipico-pill--${variant}`,
        active ? 'tipico-pill--active' : 'tipico-pill--inactive',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {iconLeft && <span className="tipico-pill__icon tipico-pill__icon--left">{iconLeft}</span>}
      <span className="tipico-pill__text">{children}</span>
      {iconRight && <span className="tipico-pill__icon tipico-pill__icon--right">{iconRight}</span>}
    </span>
  );
};

