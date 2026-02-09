import React from 'react';

import './bonus-label.css';

export type BonusLabelVariant = 'default';

export interface BonusLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant (kept minimal for now) */
  variant?: BonusLabelVariant;
  /** Optional icon before the label */
  iconLeft?: React.ReactNode;
  /** Optional icon after the label */
  iconRight?: React.ReactNode;
  /** Bonus label text */
  children: React.ReactNode;
}

/**
 * Bonus label used for promotions (e.g. "20€ Risk Free Bet").
 * Uses semantic tokens so it works in both light and dark mode.
 */
export const BonusLabel = ({
  variant = 'default',
  iconLeft,
  iconRight,
  children,
  className = '',
  ...props
}: BonusLabelProps) => {
  return (
    <div
      className={[
        'tipico-bonus-label',
        `tipico-bonus-label--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {iconLeft && (
        <span className="tipico-bonus-label__icon tipico-bonus-label__icon--left">
          {iconLeft}
        </span>
      )}
      <span className="tipico-bonus-label__text">{children}</span>
      {iconRight && (
        <span className="tipico-bonus-label__icon tipico-bonus-label__icon--right">
          {iconRight}
        </span>
      )}
    </div>
  );
};

