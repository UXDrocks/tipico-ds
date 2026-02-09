/**
 * Example page – basic layout built from design system components.
 * Use this to see how Button, Alert, TextField, Link, and TabBar work together in a real layout.
 */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Alert } from './Alert';
import { TextField } from './TextField';
import { Link } from './Link';
import { TabBar } from './TabBar';
import { ToastProvider, useToast } from './ToastProvider';
import { Card } from './Card';
import { Article } from './Article';
import { InputField } from './InputField';
import { Header } from './Header';
import { Pill } from './Pill';
import { Label } from './Label';
import { List } from './List';
import { AlertCircleIcon } from './icons';

const meta: Meta = {
  title: 'Screens/Example Page',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A sample page that composes design system components so developers can see the UI in context: header with TabBar, alerts, form block with TextField and Buttons, and links.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const appTabs = [
  { id: 'bets', label: 'Bets' },
  { id: 'live', label: 'Live' },
  { id: 'sports', label: 'Sports' },
  { id: 'account', label: 'Account' },
];

function ExamplePageContent() {
  const [activeTab, setActiveTab] = useState('bets');
  const [search, setSearch] = useState('');
  const [alertOpen, setAlertOpen] = useState(true);
  const { addToast } = useToast();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'rgb(var(--bg))',
        color: 'rgb(var(--fg))',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Page header using shared Header component */}
      <Header title="Example page" />

      {/* Main: same max-width as other screens (28rem), shared padding */}
      <main
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: 'var(--space-6) max(var(--space-4), 1rem) var(--space-8)',
          minHeight: '50vh',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--font-size-2xl)',
            lineHeight: 'var(--leading-2xl)',
            fontWeight: 'var(--font-bold)',
            marginTop: 0,
            marginBottom: 'var(--space-2)',
            color: 'rgb(var(--fg))',
          }}
        >
          Example page
        </h1>
        <p
          style={{
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--leading-base)',
            color: 'rgb(var(--fg))',
            marginBottom: 'var(--space-6)',
            opacity: 0.85,
          }}
        >
          This layout uses Alert, TextField, Button, Link, and TabBar from the design system.
        </p>

        {/* Top navigation: TabBar preview */}
        <section style={{ marginBottom: 'var(--space-6)' }} aria-labelledby="tabs-heading">
          <h2
            id="tabs-heading"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--leading-lg)',
              fontWeight: 'var(--font-semibold)',
              marginTop: 0,
              marginBottom: 'var(--space-4)',
              color: 'rgb(var(--fg))',
            }}
          >
            Main navigation
          </h2>
          <div
            style={{
              maxWidth: '100%',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: 'var(--space-1)',
            }}
          >
            <TabBar
              tabs={appTabs}
              activeId={activeTab}
              onSelect={setActiveTab}
              aria-label="Main navigation"
            />
          </div>
        </section>

        {/* List items */}
        <section style={{ marginBottom: 'var(--space-6)' }} aria-labelledby="list-heading">
          <h2
            id="list-heading"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--leading-lg)',
              fontWeight: 'var(--font-semibold)',
              marginTop: 0,
              marginBottom: 'var(--space-4)',
              color: 'rgb(var(--fg))',
            }}
          >
            List items
          </h2>
          <Card variant="plain">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              <List
                title="Sports limits (optional)"
                description="Configure optional deposit limits for your sports account."
                meta="Info"
                leading={
                  <div className="tipico-list__leading-icons">
                    <span className="tipico-list__leading-icon tipico-list__leading-icon--primary">
                      <AlertCircleIcon size={24} />
                    </span>
                  </div>
                }
                filled
                bordered
              />
              <List
                title="Germany vs. Spain"
                description="Live betting and upcoming markets."
                meta="Details"
                leading={
                  <div className="tipico-list__leading-icons">
                    <span className="tipico-list__leading-icon tipico-list__leading-icon--primary">
                      <AlertCircleIcon size={24} />
                    </span>
                  </div>
                }
                filled={false}
                bordered
              />
            </div>
          </Card>
        </section>

        {/* Alert */}
        {alertOpen && (
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Alert
              variant="info"
              title="Your session is active"
              onClose={() => setAlertOpen(false)}
              link={{ href: '#', label: 'View account' }}
            >
              You can continue placing bets. Session expires in 30 minutes.
            </Alert>
          </div>
        )}

        {/* Card: search + actions – content card on bg-surface uses bg-card */}
        <section
          style={{
            padding: 'var(--space-6)',
            background: 'rgb(var(--bg-card))',
            borderRadius: 'var(--radius-card)',
            border: '1px solid rgb(var(--border-subtile))',
            marginBottom: 'var(--space-6)',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
          aria-labelledby="search-heading"
        >
          <h2
            id="search-heading"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--leading-lg)',
              fontWeight: 'var(--font-semibold)',
              marginTop: 0,
              marginBottom: 'var(--space-4)',
              color: 'rgb(var(--fg))',
            }}
          >
            Search & actions
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              minWidth: 0,
            }}
          >
            <TextField
              label="Search"
              placeholder="Search events…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
                minWidth: 0,
              }}
            >
              <Button variant="primary">Search</Button>
              <Button variant="secondary">Clear</Button>
              <Button variant="tertiary">Filters</Button>
            </div>
          </div>
        </section>

        {/* Alerts row */}
        <section style={{ marginBottom: 'var(--space-6)' }} aria-labelledby="alerts-heading">
          <h2
            id="alerts-heading"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--leading-lg)',
              fontWeight: 'var(--font-semibold)',
              marginTop: 0,
              marginBottom: 'var(--space-4)',
              color: 'rgb(var(--fg))',
            }}
          >
            Alert variants
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <Alert variant="success" title="Success" link={{ href: '#', label: 'Details' }}>
              Your bet has been placed.
            </Alert>
            <Alert variant="warning" title="Warning">
              Odds have changed. Please confirm your slip.
            </Alert>
            <Alert variant="error" title="Error" showIcon>
              Something went wrong. Please try again.
            </Alert>
          </div>
        </section>

        {/* Form card: Article + InputField + Button */}
        <section
          style={{ marginBottom: 'var(--space-6)' }}
          aria-labelledby="limits-heading"
        >
          <Card variant="bordered">
            <Article
              title="Sports limits (optional)"
              description="Configure optional deposit limits for your sports account."
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <InputField label="Monthly" placeholder="No limit" />
                <InputField label="Weekly" placeholder="No limit" />
              </div>
              <Button variant="primary" fullWidth>
                Save limits
              </Button>
            </Article>
          </Card>
        </section>

        {/* Status tags: Pill + Label */}
        <section style={{ marginBottom: 'var(--space-6)' }} aria-labelledby="tags-heading">
          <h2
            id="tags-heading"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--leading-lg)',
              fontWeight: 'var(--font-semibold)',
              marginTop: 0,
              marginBottom: 'var(--space-4)',
              color: 'rgb(var(--fg))',
            }}
          >
            Status tags
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-3)',
            }}
          >
            <Pill variant="neutral" active>
              Neutral
            </Pill>
            <Pill variant="positive" active>
              Positive
            </Pill>
            <Pill variant="info" active>
              Info
            </Pill>
            <Pill variant="negative" active>
              Negative
            </Pill>
            <Pill variant="warning" active>
              Warning
            </Pill>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-3)',
            }}
          >
            <Label variant="neutral" active>
              Neutral
            </Label>
            <Label variant="positive" active>
              Positive
            </Label>
            <Label variant="info" active>
              Info
            </Label>
            <Label variant="negative" active>
              Negative
            </Label>
            <Label variant="warning" active>
              Warning
            </Label>
          </div>
        </section>

        {/* Buttons + link */}
        <section aria-labelledby="buttons-heading">
          <h2
            id="buttons-heading"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--leading-lg)',
              fontWeight: 'var(--font-semibold)',
              marginTop: 0,
              marginBottom: 'var(--space-4)',
              color: 'rgb(var(--fg))',
            }}
          >
            Buttons & link
          </h2>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary" onClick={() => addToast({ variant: 'success', message: 'The action was successfully done.' })}>Show toast</Button>
            <span style={{ paddingLeft: 'var(--space-2)', borderLeft: '1px solid rgb(var(--border))', marginLeft: 'var(--space-1)' }}>
              <Link href="#" style={{ padding: 'var(--space-2) 0', display: 'inline-block' }}>
                Text link
              </Link>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ExamplePageContent />
    </ToastProvider>
  ),
};
