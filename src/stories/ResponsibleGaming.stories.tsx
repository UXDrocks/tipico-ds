import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Card } from './Card';
import { List } from './List';
import { Button } from './Button';
import { Article } from './Article';
import { Alert } from './Alert';
import { BottomNavigation } from './BottomNavigation';
import { AlertCircleIcon } from './icons';
import { defaultBottomNavItems, screenMainStyles, screenRootStyles } from './screen-layout';

const meta: Meta = {
  title: 'Screens/7. Responsible Gaming',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Responsible gaming screen with limits, self-exclusion, and support links.
Uses Header, Card, List, Button, Article, and Alert.
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
      <Header title="Responsible Gaming" showBackButton />

      <main style={mainStyles}>
        <Alert variant="info" title="Play responsibly">
          Set deposit limits, take a break, or self-exclude. We are here to help.
        </Alert>

        <Card variant="bordered">
          <Article
            title="Deposit limits"
            description="Set daily, weekly or monthly limits. Changes take effect immediately."
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 'var(--space-4)',
              }}
            >
              <List
                title="Daily limit"
                description="Currently 100 €"
                showDescription
                meta="Change"
                filled
                bordered={false}
              />
              <List
                title="Weekly limit"
                description="Currently 500 €"
                showDescription
                meta="Change"
                filled
                bordered={false}
              />
            </div>
            <Button variant="secondary" fullWidth>
              Edit limits
            </Button>
          </Article>
        </Card>

        <Card variant="plain">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <List
              title="Take a break"
              description="Pause your account for 24 hours to 6 months"
              showDescription
              meta=""
              showMeta={false}
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
              title="Self-exclusion"
              description="Exclude yourself from gambling for 6 months or longer"
              showDescription
              meta=""
              showMeta={false}
              filled
              bordered={false}
            />
          </div>
        </Card>

        <section>
          <h2
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-semibold)',
              margin: 0,
              marginBottom: 'var(--space-3)',
              color: 'rgb(var(--fg))',
            }}
          >
            Support organisations
          </h2>
          <Card variant="plain">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <List
                title="Gamblers Anonymous"
                description="Support and meetings"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
              <List
                title="GamCare"
                description="Free advice and support"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
            </div>
          </Card>
        </section>
      </main>

      <BottomNavigation
        items={defaultBottomNavItems}
        activeId="home"
        onSelect={() => {}}
      />
    </div>
  ),
};
