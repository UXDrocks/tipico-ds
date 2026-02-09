import React from 'react';

export interface DSIconProps {
  size?: number;
}

// Base factory for all icons – SVG with currentColor.
type IconComponent = (props: DSIconProps) => JSX.Element;

const createIcon =
  (path: JSX.Element): IconComponent =>
  ({ size = 24 }) =>
    (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {path}
      </svg>
    );

// Individual icons (mirroring the set from Icons.stories).
export const AlertCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <circle cx="12" cy="16" r="1" />
  </>,
);

export const CheckCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <polyline points="9 12.5 11 14.5 15 9.5" />
  </>,
);

export const InfoIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="10" x2="12" y2="16" />
    <circle cx="12" cy="7" r="1" />
  </>,
);

export const XCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </>,
);

export const BellIcon = createIcon(
  <>
    <path d="M18 14a6 6 0 0 1-12 0c0-3 1-6 6-6s6 3 6 6Z" />
    <path d="M4 14h16" />
  </>,
);

export const StarIcon = createIcon(
  <>
    <polygon points="12 3 14.5 9 21 9 15.5 12.5 17.5 19 12 15.5 6.5 19 8.5 12.5 3 9 9.5 9 12 3" />
  </>,
);

export const HeartIcon = createIcon(
  <>
    <path d="M12 19s-5-3.2-7.5-6C2.2 11.3 2 8.5 4 6.8 5.8 5.3 8.2 5.7 9.5 7.3L12 10l2.5-2.7C15.8 5.7 18.2 5.3 20 6.8c2 1.7 1.8 4.5-.5 6.2-2.5 2.8-7.5 6-7.5 6Z" />
  </>,
);

export const HomeIcon = createIcon(
  <>
    <path d="M4 11.5 12 5l8 6.5" />
    <path d="M6 10.5V19h12v-8.5" />
  </>,
);

export const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="5" />
    <line x1="16" y1="16" x2="20" y2="20" />
  </>,
);

export const ICONS = {
  AlertCircle: AlertCircleIcon,
  CheckCircle: CheckCircleIcon,
  Info: InfoIcon,
  XCircle: XCircleIcon,
  Bell: BellIcon,
  Star: StarIcon,
  Heart: HeartIcon,
  Home: HomeIcon,
  Search: SearchIcon,
} as const;

export type IconId = keyof typeof ICONS;

export const ICON_OPTIONS = ['none', ...Object.keys(ICONS)] as const;
export type IconOption = (typeof ICON_OPTIONS)[number];

/** Helper for Storybook: returns an icon element for the selected option. */
export function iconFromOption(option: IconOption, size?: number): React.ReactNode {
  if (option === 'none') return undefined;
  const Icon = ICONS[option as IconId];
  if (!Icon) return undefined;
  return <Icon size={size} />;
}

