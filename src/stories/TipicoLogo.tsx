import React from 'react';

export type TipicoLogoVariant = 'red' | 'white';

export interface TipicoLogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Color variant of the logo (wordmark color). */
  variant?: TipicoLogoVariant;
}

/**
 * Tipico wordmark logo, using the official SVG asset.
 *
 * The underlying asset is the red Tipico logo; use:
 * - `variant="red"` for use on light backgrounds
 * - `variant="white"` for use on red / dark backgrounds (adds a helper filter)
 */
export const TipicoLogo: React.FC<TipicoLogoProps> = ({
  variant = 'red',
  style,
  ...rest
}) => {
  const baseStyle: React.CSSProperties = {
    display: 'block',
    height: '2rem',
    width: 'auto',
  };

  // Helper: for the white variant we approximate an inverted logo via CSS filter.
  const variantStyle: React.CSSProperties =
    variant === 'white'
      ? {
          filter: 'invert(1)',
        }
      : {};

  return (
    <img
      src="https://sports.tipico.de/static/@tipico/sports-desktop/3.214.62-f3e87e424e8/images/logo_tipico.yC-pwJew.svg"
      alt="Tipico"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      {...rest}
    />
  );
};

