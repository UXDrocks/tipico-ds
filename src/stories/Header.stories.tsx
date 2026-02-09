import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Compact header for pages and subpages, with optional back and close buttons.

### Variant overview

| Variant | Description             |
|---------|-------------------------|
| default | Standard page header    |

Use \`showBackButton\` and \`showCloseButton\` to control the left/right micro icons.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
    },
    showBackButton: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--space-3)',
        width: 393,
        border: '1px solid rgb(var(--border-subtile))',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      <Header title="Title" />
      <Header title="Title" showBackButton />
      <Header title="Title" showCloseButton />
      <Header title="Title" subtitle="Example subtitle" showBackButton showCloseButton />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    title: 'Title',
    subtitle: 'Optional subtitle',
    showBackButton: true,
    showCloseButton: true,
  },
};

