import React from 'react';

import './progressbar.css';

export type ProgressBarVariant = 'neutral' | 'positive' | 'info' | 'negative' | 'warning';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current progress value (0–100) */
  value: number;
  /** Color variant */
  variant?: ProgressBarVariant;
}

/**
 * Horizontal progress bar with semantic color variants.
 * - Full-width by default
 * - Uses signal tokens for color (info / positive / negative / warning / neutral)
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  variant = 'neutral',
  className = '',
  ...rest
}) => {
  const clamped = Math.max(0, Math.min(100, value ?? 0));

  return (
    <div
      className={['tipico-progress', `tipico-progress--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <div className="tipico-progress__track">
        <div
          className="tipico-progress__fill"
          style={{ width: `${clamped}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

