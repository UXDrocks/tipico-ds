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

export const UserIcon = createIcon(
  <>
    <circle cx="12" cy="9" r="3" />
    <path d="M6 19c0-2.5 2.5-4 6-4s6 1.5 6 4" />
  </>,
);

export const SettingsIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1 1 0 0 0 .2-1l-1-1.7a6.8 6.8 0 0 0 0-2.6l1-1.7a1 1 0 0 0-.2-1l-1.4-1.4a1 1 0 0 0-1-.2l-1.7 1a6.8 6.8 0 0 0-2.6 0l-1.7-1a1 1 0 0 0-1 .2L5.4 7a1 1 0 0 0-.2 1l1 1.7a6.8 6.8 0 0 0 0 2.6l-1 1.7a1 1 0 0 0 .2 1l1.4 1.4a1 1 0 0 0 1 .2l1.7-1a6.8 6.8 0 0 0 2.6 0l1.7 1a1 1 0 0 0 1-.2Z" />
  </>,
);

export const ChevronRightIcon = createIcon(
  <>
    <polyline points="9 6 15 12 9 18" />
  </>,
);

export const ChevronLeftIcon = createIcon(
  <>
    <polyline points="15 6 9 12 15 18" />
  </>,
);

export const ArrowRightIcon = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>,
);

export const ArrowLeftIcon = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 5 12 12 19" />
  </>,
);

export const PlusIcon = createIcon(
  <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </>,
);

export const MinusIcon = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
  </>,
);

export const LockIcon = createIcon(
  <>
    <rect x="6" y="10" width="12" height="10" rx="2" />
    <path d="M9 10V7a3 3 0 0 1 6 0v3" />
  </>,
);

export const UnlockIcon = createIcon(
  <>
    <rect x="6" y="10" width="12" height="10" rx="2" />
    <path d="M9 10V7a3 3 0 0 1 5.5-1.5" />
  </>,
);

export const EyeIcon = createIcon(
  <>
    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.5" />
  </>,
);

export const EyeOffIcon = createIcon(
  <>
    <path d="M3 3l18 18" />
    <path d="M10.6 10.6A2.5 2.5 0 0 0 9.5 12.5 2.5 2.5 0 0 0 12 15a2.5 2.5 0 0 0 1.9-.9" />
    <path d="M9.9 5.2A9.4 9.4 0 0 1 12 5c6.5 0 10 6 10 6a17.5 17.5 0 0 1-2.1 3.1" />
    <path d="M6.2 6.2C3.4 7.7 2 11 2 11s3.5 6 10 6a9.8 9.8 0 0 0 2.8-.4" />
  </>,
);

export const MenuIcon = createIcon(
  <>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
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
  User: UserIcon,
  Settings: SettingsIcon,
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  ArrowRight: ArrowRightIcon,
  ArrowLeft: ArrowLeftIcon,
  Plus: PlusIcon,
  Minus: MinusIcon,
  Lock: LockIcon,
  Unlock: UnlockIcon,
  Eye: EyeIcon,
  EyeOff: EyeOffIcon,
  Menu: MenuIcon,
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

