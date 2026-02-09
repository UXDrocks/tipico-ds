import React from 'react';

import './link.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link content */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'default' | 'muted';
}

/** Text link using design tokens */
export const Link = ({
  children,
  variant = 'default',
  className = '',
  ...props
}: LinkProps) => {
  return (
    <a
      className={`tipico-link tipico-link--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
};
