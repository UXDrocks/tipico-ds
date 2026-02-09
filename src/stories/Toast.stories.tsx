import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Toast } from './Toast';
import { ToastStack } from './ToastStack';
import { ToastProvider, useToast } from './ToastProvider';

import { Button } from './Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          `
Toasts give real-time feedback for user actions. They appear in a stack at the bottom-center of the screen and slide up into view. Use with ToastStack and ToastProvider (or useToast) for action-based feedback.

### Variant overview

| Variant  | Description                      |
|---------|----------------------------------|
| neutral | Default notification             |
| info    | Informational toast              |
| success | Positive outcome / confirmation  |
| error   | Error or failure                 |
| warning | Caution or needs attention       |
          `.trim(),
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

/** Static preview of all variants without fixed positioning. */
export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        maxWidth: '48rem',
      }}
    >
      <Toast variant="neutral" message="The action was successfully done" showIcon />
      <Toast variant="info" message="The action was successfully done" showIcon />
      <Toast variant="success" message="The action was successfully done" showIcon />
      <Toast variant="error" message="The action was successfully done" showIcon />
      <Toast variant="warning" message="The action was successfully done" showIcon />
    </div>
  ),
};

export const Default: Story = {
  args: {
    variant: 'neutral',
    message: 'The action was successfully done',
    showIcon: true,
  },
};

/** Add toasts from button clicks for real-time feedback. */
function TriggerDemo() {
  const { addToast } = useToast();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Button
        variant="primary"
        onClick={() => addToast({ variant: 'success', message: 'Saved successfully.' })}
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() => addToast({ variant: 'error', message: 'Something went wrong.' })}
      >
        Error
      </Button>
      <Button
        variant="tertiary"
        onClick={() => addToast({ variant: 'info', message: 'New update available.' })}
      >
        Info
      </Button>
      <Button
        variant="tertiary"
        onClick={() => addToast({ variant: 'warning', message: 'Please review your input.' })}
      >
        Warning
      </Button>
      <Button
        variant="tertiary"
        onClick={() => addToast({ variant: 'neutral', message: 'The action was successfully done.' })}
      >
        Neutral
      </Button>
    </div>
  );
}

export const TriggerFromActions: StoryObj = {
  render: function TriggerFromActionsStory() {
    return (
      <ToastProvider>
        <TriggerDemo />
      </ToastProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use ToastProvider and useToast() to show toasts in response to actions. Each button adds a toast that slides up from the bottom.',
      },
    },
  },
};
