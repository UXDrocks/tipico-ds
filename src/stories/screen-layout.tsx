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

/** Default bottom navigation items used across all screen stories. */
export const defaultBottomNavItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon size={22} /> },
  { id: 'search', label: 'Search', icon: <SearchIcon size={22} /> },
  { id: 'favorites', label: 'Favourites', icon: <StarIcon size={22} /> },
  { id: 'alerts', label: 'Alerts', icon: <BellIcon size={22} /> },
  { id: 'profile', label: 'Profile', icon: <UserIcon size={22} /> },
];

