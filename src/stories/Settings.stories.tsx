import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Card } from './Card';
import { List } from './List';
import { Link } from './Link';
import { AlertCircleIcon } from './icons';
import { BottomNavigation } from './BottomNavigation';
import { defaultBottomNavItems, screenMainStyles, screenRootStyles } from './screen-layout';

const meta: Meta = {
  title: 'Screens/3. Settings',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Settings screen with grouped list sections: account, preferences, and support.
Uses Header, Card, List, and Link.
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

const sectionTitleStyles: React.CSSProperties = {
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

export const Overview: Story = {
  render: () => (
    <div style={screenRootStyles}>
      <Header title="Settings" showBackButton />

      <main style={mainStyles}>
        <section>
          <h2 style={sectionTitleStyles}>Account</h2>
          <Card variant="plain">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <List
                title="Personal details"
                description="Name, date of birth, address"
                showDescription
                meta="Edit"
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
                title="Password"
                description="Change your password"
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
                title="Account verification"
                description="Verify your identity"
                showDescription
                meta="Pending"
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
        </section>

        <section>
          <h2 style={sectionTitleStyles}>Preferences</h2>
          <Card variant="plain">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <List
                title="Language"
                description="Deutsch"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
              <List
                title="Currency"
                description="EUR"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
            </div>
          </Card>
        </section>

        <section>
          <h2 style={sectionTitleStyles}>Support</h2>
          <Card variant="plain">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <List
                title="Help centre"
                description="FAQs and guides"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
              <List
                title="Contact us"
                description="Chat, email, phone"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
            </div>
          </Card>
        </section>

        <p style={{ fontSize: 'var(--text-sm)', color: 'rgb(var(--text-subtile))', margin: 0 }}>
          <Link href="#" variant="muted">
            Log out
          </Link>
        </p>
      </main>

      <BottomNavigation
        items={defaultBottomNavItems}
        activeId="profile"
        onSelect={() => {}}
      />
    </div>
  ),
};
