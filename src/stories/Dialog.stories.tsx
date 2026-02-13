import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';
import { Button } from './Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Modal dialog with a blurred, semi-transparent overlay.

Features:

- Optional **icon** above the title.
- Optional **close button** in the top-right corner.
- One or two **action buttons** (primary + optional secondary).

Use this for confirmations, marketing messages, or important decisions that require focused attention.
        `.trim(),
      },
    },
  },
  argTypes: {
    showIcon: { control: 'boolean' },
    showClose: { control: 'boolean' },
    showSecondaryButton: { control: 'boolean' },
    primaryVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
    },
    secondaryVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Overview: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgb(var(--bg-surface))',
        }}
      >
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open dialog
        </Button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Title Header"
          description="We maximize spannung in the world of sport betting."
          showIcon
          showClose
          primaryLabel="Accept"
          primaryVariant="primary"
          secondaryLabel="Decline"
          secondaryVariant="secondary"
          showSecondaryButton
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    open: true,
    title: 'Title Header',
    description: 'We maximize spannung in the world of sport betting.',
    showIcon: true,
    showClose: true,
    primaryLabel: 'Accept',
    primaryVariant: 'primary',
    secondaryLabel: 'Decline',
    secondaryVariant: 'secondary',
    showSecondaryButton: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    return (
      <Dialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onPrimary={() => setOpen(false)}
        onSecondary={() => setOpen(false)}
      />
    );
  },
};

