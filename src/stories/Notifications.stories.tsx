import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Card } from './Card';
import { List } from './List';
import { Alert } from './Alert';
import { BottomNavigation } from './BottomNavigation';
import { AlertCircleIcon } from './icons';
import { defaultBottomNavItems, screenMainStyles, screenRootStyles } from './screen-layout';

const meta: Meta = {
  title: 'Screens/6. Notifications',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Notifications preferences screen with toggles (simulated as list rows) and info alert.
Uses Header, Card, List, and Alert.
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
      <Header title="Notifications" showBackButton />

      <main style={mainStyles}>
        <Alert variant="info" title="Manage preferences">
          You can turn push and email notifications on or off for each category below.
        </Alert>

        <section>
          <Card variant="plain">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <List
                title="Bet settled"
                description="When your bet is settled"
                showDescription
                meta="On"
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
              <List
                title="Live match updates"
                description="Goals and key events"
                showDescription
                meta="On"
                filled
                bordered={false}
              />
              <List
                title="Promotions"
                description="Bonuses and offers"
                showDescription
                meta="Off"
                filled
                bordered={false}
              />
              <List
                title="Account security"
                description="Login and verification"
                showDescription
                meta="On"
                filled
                bordered={false}
              />
            </div>
          </Card>
        </section>

        <p
          style={{
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--text-sm--line-height)',
            color: 'rgb(var(--text-subtile))',
            margin: 0,
          }}
        >
          Push notifications require permission in your device settings.
        </p>
      </main>

      <BottomNavigation
        items={defaultBottomNavItems}
        activeId="alerts"
        onSelect={() => {}}
      />
    </div>
  ),
};
