import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Card } from './Card';
import { List } from './List';
import { Button } from './Button';
import { InputField } from './InputField';
import { Article } from './Article';
import { BottomNavigation } from './BottomNavigation';
import { AlertCircleIcon } from './icons';
import {
  defaultBottomNavItems,
  screenFootnoteStyles,
  screenIntroStyles,
  screenMainStyles,
  screenRootStyles,
  screenSectionGap,
} from './screen-layout';

const meta: Meta = {
  title: 'Screens/5. Deposit',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Deposit screen with payment method list and amount form.
Uses Header, Card, List, Button, InputField, and Article.
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
      <Header title="Deposit" showBackButton />

      <main style={mainStyles}>
        <section style={{ marginBottom: screenSectionGap }}>
          <p style={{ ...screenIntroStyles, marginBottom: 'var(--space-3)' }}>
            Choose a payment method and enter the amount.
          </p>
          <Card variant="plain">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <List
                title="Credit / Debit card"
                description="Visa, Mastercard"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
              <List
                title="PayPal"
                description="Link your PayPal account"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
              <List
                title="Bank transfer"
                description="SEPA, Giropay"
                showDescription
                meta=""
                showMeta={false}
                filled
                bordered={false}
              />
            </div>
          </Card>
        </section>

        <Card variant="bordered">
          <Article
            title="Amount"
            description="Enter the amount you want to deposit (min. 10 €)."
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)',
              }}
            >
              <InputField label="Amount (€)" placeholder="0.00" />
            </div>
            <Button variant="primary" fullWidth>
              Continue
            </Button>
          </Article>
        </Card>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            ...screenFootnoteStyles,
          }}
        >
          <AlertCircleIcon size={18} aria-hidden />
          <span>Deposits are processed within 24 hours. No fees for card payments.</span>
        </div>
      </main>

      <BottomNavigation
        items={defaultBottomNavItems}
        activeId="home"
        onSelect={() => {}}
      />
    </div>
  ),
};
