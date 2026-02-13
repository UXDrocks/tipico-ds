import React from 'react';

import './list.css';

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Main title text */
  title: string;
  /** Optional description below the title */
  description?: React.ReactNode;
  /** Optional right-aligned label (e.g. "Info") */
  meta?: React.ReactNode;
  /** Optional leading icon/avatar */
  leading?: React.ReactNode;
  /** Show/Hide leading icon */
  showLeading?: boolean;
  /** Show/Hide description */
  showDescription?: boolean;
  /** Show/Hide right meta label */
  showMeta?: boolean;
  /** Show/Hide chevron on the right */
  showChevron?: boolean;
  /** When true, use bg-list-default as background */
  filled?: boolean;
  /** When true, draw a standard border */
  bordered?: boolean;
}

/**
 * Single list row for settings / navigation.
 * Uses semantic list tokens: `bg-list-default`, `bg-list-hover`, `bg-list-active`, `--radius-list`.
 */
export const List: React.FC<ListProps> = ({
  title,
  description,
  meta,
  leading,
  showLeading = true,
  showDescription = false,
  showMeta = true,
  showChevron = true,
  filled = false,
  bordered = false,
  className = '',
  ...rest
}) => {
  const classes = [
    'tipico-list',
    filled ? 'tipico-list--filled' : '',
    bordered ? 'tipico-list--bordered' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {showLeading && (
        <div className="tipico-list__leading">
          {leading ?? <div className="tipico-list__avatar-placeholder" aria-hidden />}
        </div>
      )}

      <div className="tipico-list__main">
        <div className="tipico-list__title">{title}</div>
        {showDescription && description && (
          <div className="tipico-list__description">{description}</div>
        )}
      </div>

      {(showMeta || showChevron) && (
        <div className="tipico-list__trailing">
          {showMeta && meta && <div className="tipico-list__meta">{meta}</div>}
          {showChevron && <span className="tipico-list__chevron" aria-hidden />}
        </div>
      )}
    </div>
  );
};

