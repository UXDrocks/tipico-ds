import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Card } from './Card';
import { List } from './List';
import { Button } from './Button';
import { BottomNavigation } from './BottomNavigation';
import { AlertCircleIcon } from './icons';
import {
  defaultBottomNavItems,
  screenMainStyles,
  screenRootStyles,
  screenSectionGap,
} from './screen-layout';

const meta: Meta = {
  title: 'Screens/4. Profile',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Profile screen with avatar placeholder, key details, and edit actions.
Uses Header, Card, List, and Button.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const mainStyles: React.CSSProperties = {
  ...screenMainStyles,
};

export const Overview: Story = {
  render: () => (
    <div style={screenRootStyles}>
      <Header title="Profile" showBackButton />

      <main style={mainStyles}>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-4)',
            marginBottom: screenSectionGap,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 'var(--radius-2xl)',
              background: 'rgb(var(--bg-muted))',
              border: '2px solid rgb(var(--border-subtile))',
            }}
            aria-hidden
          />
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 'var(--text-xl--line-height)',
                fontWeight: 'var(--font-semibold)',
                color: 'rgb(var(--fg))',
                marginBottom: 'var(--space-1)',
              }}
            >
              Max Mustermann
            </div>
            <div
              style={{
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--text-sm--line-height)',
                color: 'rgb(var(--text-subtile))',
              }}
            >
              max.mustermann@example.com
            </div>
          </div>
          <Button variant="secondary">Edit profile</Button>
        </section>

        <Card variant="plain">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <List
              title="Date of birth"
              description="15.03.1990"
              showDescription
              showMeta={false}
              filled
              bordered={false}
            />
            <List
              title="Address"
              description="Musterstraße 1, 10115 Berlin"
              showDescription
              showMeta={false}
              filled
              bordered={false}
            />
            <List
              title="Phone"
              description="+49 170 1234567"
              showDescription
              showMeta={false}
              filled
              bordered={false}
            />
            <List
              title="Account status"
              description="Verified"
              showDescription
              meta="Info"
              leading={
                <div className="tipico-list__leading-icons">
                  <span className="tipico-list__leading-icon tipico-list__leading-icon--primary">
                    <AlertCircleIcon size={24} />
                  </span>
                </div>
              }
              filled
              bordered={false}
            />
          </div>
        </Card>
      </main>

      <BottomNavigation
        items={defaultBottomNavItems}
        activeId="profile"
        onSelect={() => {}}
      />
    </div>
  ),
};
