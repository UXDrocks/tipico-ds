import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Horizontal progress bar with semantic color variants (neutral, positive, info, negative, warning). The bar expands to full width of the preview by default.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: 'select',
      options: ['neutral', 'positive', 'info', 'negative', 'warning'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Overview: Story = {
  args: {
    value: 60,
    variant: 'positive',
  },
  render: (args) => (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: 'var(--space-8)',
        boxSizing: 'border-box',
      }}
    >
      <ProgressBar {...args} />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    value: 40,
    variant: 'info',
  },
  render: (args) => (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: 'var(--space-8)',
        boxSizing: 'border-box',
      }}
    >
      <ProgressBar {...args} />
    </div>
  ),
};

