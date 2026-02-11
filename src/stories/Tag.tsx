import React from 'react';

import './tag.css';

export type TagVariant = 'brand' | 'neutral' | 'positive' | 'info';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual color variant matching the brand / signal scales */
  variant?: TagVariant;
  /** Tag label */
  children: React.ReactNode;
}

/**
 * Compact tag for short labels such as "NEW".
 *
 * Color mapping:
 * - brand   → red brand background with white text
 * - neutral → white background with black text
 * - positive → green background with white text
 * - info    → blue background with white text
 */
export const Tag: React.FC<TagProps> = ({
  variant = 'brand',
  className = '',
  children,
  ...rest
}) => {
  return (
    <span
      className={[
        'tipico-tag',
        `tipico-tag--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
};

