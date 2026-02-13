import React from 'react';

import './card.css';

export type CardVariant = 'plain' | 'shadow' | 'bordered' | 'promoted' | 'gradient';

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
  if (variant === 'promoted') {
    // Two-layer layout: striped shell + regular card inside
    return (
      <div
        className={['tipico-card-promoted-shell', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <div className="tipico-card tipico-card--plain tipico-card--promoted-inner">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={['tipico-card', `tipico-card--${variant}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
};


