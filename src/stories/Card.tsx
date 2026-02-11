import React from 'react';

import './card.css';

export type CardVariant = 'plain' | 'shadow' | 'bordered' | 'promoted';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style of the card */
  variant?: CardVariant;
}

/**
 * Generic content card using semantic tokens.
 * - Background: `--bg-card` (light/dark aware)
 * - Radius: `--radius-card`
 * - Optional subtle shadow or border (token-based)
 */
export const Card: React.FC<CardProps> = ({
  variant = 'plain',
  className = '',
  children,
  ...rest
}) => {
  return (
    <div
      className={[
        'tipico-card',
        `tipico-card--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
};

