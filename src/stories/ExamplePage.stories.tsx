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
import { BottomNavigation } from './BottomNavigation';
import { AlertCircleIcon } from './icons';
import { Dialog } from './Dialog';
import {
  defaultBottomNavItems,
  screenMainStyles,
  screenPageTitleStyles,
  screenRootStyles,
  screenSectionTitleStyles,
} from './screen-layout';

const meta: Meta = {
  title: 'Screens/1. Example Page',
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeBottomNav, setActiveBottomNav] = useState('home');
  const { addToast } = useToast();

  return (
    <div style={screenRootStyles}>
      {/* Page header using shared Header component */}
      <Header title="Example page" />

      {/* Main content: full width until 640px, with fixed padding */}
      <main
        style={{
          ...screenMainStyles,
          minHeight: '50vh',
        }}
      >
        <h1 style={screenPageTitleStyles}>Example page</h1>
        <p
          style={{
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--text-base--line-height)',
            color: 'rgb(var(--text-subtile))',
            margin: 0,
            marginBottom: 'var(--space-6)',
          }}
        >
          This layout uses Alert, TextField, Button, Link, and TabBar from the design system.
        </p>

        {/* Top navigation: TabBar preview */}
        <section aria-labelledby="tabs-heading">
          <h2 id="tabs-heading" style={screenSectionTitleStyles}>
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
        <section aria-labelledby="list-heading">
          <h2 id="list-heading" style={screenSectionTitleStyles}>
            List items
          </h2>
          <Card variant="plain">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <List
                title="Sports limits (optional)"
                description="Configure optional deposit limits for your sports account."
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
              <List
                title="Germany vs. Spain"
                description="Live betting and upcoming markets."
                showDescription
                meta="Details"
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
                description="Verify your identity to unlock withdrawals."
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
              <List
                title="Responsible gaming"
                description="Set deposit limits and self-exclusion options."
                showDescription
                meta="Settings"
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

        {/* Alert */}
        {alertOpen && (
          <Alert
            variant="info"
            title="Your session is active"
            onClose={() => setAlertOpen(false)}
            link={{ href: '#', label: 'View account' }}
          >
            You can continue placing bets. Session expires in 30 minutes.
          </Alert>
        )}

        {/* Card: search + actions – content card on bg-surface uses bg-card */}
        <section aria-labelledby="search-heading">
          <Card
            variant="bordered"
            style={{
              padding: 'var(--space-6)',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
          <h2 id="search-heading" style={screenSectionTitleStyles}>
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
          </Card>
        </section>

        {/* Alerts row */}
        <section aria-labelledby="alerts-heading">
          <h2 id="alerts-heading" style={screenSectionTitleStyles}>
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
        <section aria-labelledby="limits-heading">
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
        <section aria-labelledby="tags-heading">
          <h2 id="tags-heading" style={screenSectionTitleStyles}>
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

        {/* Dialog demo */}
        <section aria-labelledby="dialog-heading">
          <h2 id="dialog-heading" style={screenSectionTitleStyles}>
            Dialog
          </h2>
          <Button variant="secondary" onClick={() => setDialogOpen(true)}>
            Open dialog
          </Button>
        </section>

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Title Header"
          description="We maximize spannung in the world of sport betting."
          showIcon
          showClose
          primaryLabel="Accept"
          primaryVariant="primary"
          secondaryLabel="Decline"
          secondaryVariant="secondary"
          showSecondaryButton
          onPrimary={() => setDialogOpen(false)}
          onSecondary={() => setDialogOpen(false)}
        />

        {/* Buttons + link */}
        <section aria-labelledby="buttons-heading">
          <h2 id="buttons-heading" style={screenSectionTitleStyles}>
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
            <span style={{ paddingLeft: 'var(--space-2)', borderLeft: '1px solid rgb(var(--border-subtile))', marginLeft: 'var(--space-1)' }}>
              <Link href="#" style={{ padding: 'var(--space-2) 0', display: 'inline-block' }}>
                Text link
              </Link>
            </span>
          </div>
        </section>
      </main>

      <BottomNavigation
        items={defaultBottomNavItems}
        activeId={activeBottomNav}
        onSelect={setActiveBottomNav}
      />
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
