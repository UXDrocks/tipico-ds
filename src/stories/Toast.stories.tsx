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
          'Toasts give real-time feedback for user actions. They appear in a stack at the bottom-center of the screen and slide up into view. Use with ToastStack and ToastProvider (or useToast) for action-based feedback.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

/** Single toast bar (neutral). Usually used inside ToastStack. */
export const Default: Story = {
  args: {
    variant: 'neutral',
    message: 'The action was successfully done',
    showIcon: true,
  },
};

/** All five variants in a static stack (no provider). */
export const AllVariants: StoryObj<typeof ToastStack> = {
  render: function AllVariantsStory() {
    const items = [
      { id: '1', variant: 'neutral' as const, message: 'The action was successfully done' },
      { id: '2', variant: 'info' as const, message: 'The action was successfully done' },
      { id: '3', variant: 'success' as const, message: 'The action was successfully done' },
      { id: '4', variant: 'error' as const, message: 'The action was successfully done' },
      { id: '5', variant: 'warning' as const, message: 'The action was successfully done' },
    ];
    const [toasts, setToasts] = useState(items);
    return (
      <ToastStack
        toasts={toasts}
        onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
        max={10}
      />
    );
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
