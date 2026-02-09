import React from 'react';

import './article.css';

export interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  /** Small label above the title (e.g. section name) */
  eyebrow?: string;
  /** Main title of the article/section */
  title: string;
  /** Optional description text below the title */
  description?: React.ReactNode;
  /** Optional content rendered below the text block (e.g. fields, actions) */
  children?: React.ReactNode;
}

/**
 * Re-usable article/section wrapper.
 * Normalises typography for headlines and body copy across screens.
 */
export const Article: React.FC<ArticleProps> = ({
  eyebrow,
  title,
  description,
  children,
  className = '',
  ...rest
}) => {
  return (
    <article
      className={['tipico-article', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <header className="tipico-article__header">
        {eyebrow && <div className="tipico-article__eyebrow">{eyebrow}</div>}
        <h2 className="tipico-article__title">{title}</h2>
        {description && <p className="tipico-article__description">{description}</p>}
      </header>
      {children && <div className="tipico-article__content">{children}</div>}
    </article>
  );
};

