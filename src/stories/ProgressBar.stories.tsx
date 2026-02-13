import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { StoryFullWidth } from './StoryLayout';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Horizontal progress bar with semantic color variants (neutral, positive, info, negative, warning). Use **appearance** `solid` for a plain filled background, or `gradient` (default) for a gradient fill. The bar expands to full width of the preview by default.',
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
    appearance: {
      control: 'radio',
      options: ['gradient', 'solid'],
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
    <StoryFullWidth>
      <ProgressBar {...args} />
    </StoryFullWidth>
  ),
};

export const Playground: Story = {
  args: {
    value: 40,
    variant: 'info',
  },
  render: (args) => (
    <StoryFullWidth>
      <ProgressBar {...args} />
    </StoryFullWidth>
  ),
};

export const SolidFill: Story = {
  args: {
    value: 65,
    variant: 'positive',
    appearance: 'solid',
  },
  render: (args) => (
    <StoryFullWidth>
      <ProgressBar {...args} />
    </StoryFullWidth>
  ),
};

