import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomNavigation, type BottomNavigationItem } from './BottomNavigation';
import { HomeIcon, SearchIcon, StarIcon, BellIcon, UserIcon } from './icons';
import { screenMainStyles, screenRootStyles } from './screen-layout';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Mobile bottom navigation with five items.

Features:

- Sticky at the **bottom** on mobile viewports.
- Slightly **blurred**, translucent surface using \`bg-surface\`.
- Icon + label for each item, sized for touch.

Use this for the main navigation in mobile views (e.g. Home, Search, Favourites, Bets, Profile).
        `.trim(),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

const items: BottomNavigationItem[] = [
  { id: 'home', label: 'Home', icon: <HomeIcon size={22} /> },
  { id: 'search', label: 'Search', icon: <SearchIcon size={22} /> },
  { id: 'favorites', label: 'Favourites', icon: <StarIcon size={22} /> },
  { id: 'alerts', label: 'Alerts', icon: <BellIcon size={22} /> },
  { id: 'profile', label: 'Profile', icon: <UserIcon size={22} /> },
];

export const Overview: Story = {
  render: () => {
    const [activeId, setActiveId] = useState<string>('home');

    return (
      <div style={screenRootStyles}>
        <main style={{ ...screenMainStyles, flex: '1 1 auto' }}>
          <h1
            style={{
              fontSize: 'var(--font-size-xl)',
              lineHeight: 'var(--leading-xl)',
              fontWeight: 'var(--font-semibold)',
              marginTop: 0,
              marginBottom: 'var(--space-2)',
            }}
          >
            Bottom navigation
          </h1>
          <p
            style={{
              fontSize: 'var(--font-size-sm)',
              lineHeight: 'var(--leading-sm)',
              color: 'rgb(var(--text-subtile))',
              margin: 0,
              marginBottom: 'var(--space-6)',
            }}
          >
            Resize the viewport to mobile to see the sticky, blurred background behaviour.
          </p>
        </main>

        <BottomNavigation items={items} activeId={activeId} onSelect={setActiveId} />
      </div>
    );
  },
};

