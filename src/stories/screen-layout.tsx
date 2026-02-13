import React from 'react';
import type { CSSProperties } from 'react';

import { HomeIcon, SearchIcon, StarIcon, BellIcon, UserIcon } from './icons';

/** Shared outer wrapper for all screen stories (full-viewport column layout). */
export const screenRootStyles: CSSProperties = {
  minHeight: '100vh',
  background: 'rgb(var(--bg))',
  color: 'rgb(var(--fg))',
  fontFamily: 'var(--font-sans)',
  display: 'flex',
  flexDirection: 'column',
};

/**
 * Main content area for all screens. Use on <main> (or equivalent) so content
 * has the same max-width and padding as Example Page and Login.
 * Reference: Example Page, Login screen.
 */
export const screenMainStyles: CSSProperties = {
  width: '100%',
  maxWidth: '48rem',
  margin: '0 auto',
  padding: 'var(--space-6) max(var(--space-4), 1rem) var(--space-8)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-4)',
};

/** Page title (h1) – use tokens for light/dark. */
export const screenPageTitleStyles: CSSProperties = {
  fontSize: 'var(--text-2xl)',
  lineHeight: 'var(--text-2xl--line-height)',
  fontWeight: 'var(--font-bold)',
  marginTop: 0,
  marginBottom: 'var(--space-2)',
  color: 'rgb(var(--fg))',
};

/** Section heading (h2) – e.g. "List items", "Support organisations". */
export const screenSectionTitleStyles: CSSProperties = {
  fontSize: 'var(--text-lg)',
  lineHeight: 'var(--text-lg--line-height)',
  fontWeight: 'var(--font-semibold)',
  marginTop: 0,
  marginBottom: 'var(--space-4)',
  color: 'rgb(var(--fg))',
};

/** Small uppercase section label – e.g. "Account", "Preferences". */
export const screenSectionLabelStyles: CSSProperties = {
  fontSize: 'var(--text-xs)',
  lineHeight: 'var(--text-xs--line-height)',
  fontWeight: 'var(--font-semibold)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
  color: 'rgb(var(--text-subtile))',
  margin: 0,
  marginBottom: 'var(--space-2)',
  paddingLeft: 'var(--space-2)',
};

/** Intro/body paragraph – muted so title stands out. */
export const screenIntroStyles: CSSProperties = {
  fontSize: 'var(--text-sm)',
  lineHeight: 'var(--text-sm--line-height)',
  color: 'rgb(var(--text-subtile))',
  margin: 0,
};

/** Footnote / helper text at bottom of screen. */
export const screenFootnoteStyles: CSSProperties = {
  fontSize: 'var(--text-sm)',
  lineHeight: 'var(--text-sm--line-height)',
  color: 'rgb(var(--text-subtile))',
  margin: 0,
};

/** Spacing between major sections (e.g. marginBottom on a section). */
export const screenSectionGap = 'var(--space-6)';

/** Default bottom navigation items used across all screen stories. */
export const defaultBottomNavItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon size={22} /> },
  { id: 'search', label: 'Search', icon: <SearchIcon size={22} /> },
  { id: 'favorites', label: 'Favourites', icon: <StarIcon size={22} /> },
  { id: 'alerts', label: 'Alerts', icon: <BellIcon size={22} /> },
  { id: 'profile', label: 'Profile', icon: <UserIcon size={22} /> },
];

