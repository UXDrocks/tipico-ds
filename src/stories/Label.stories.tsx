import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

/** Temporary icon placeholder so stories do not depend on a real icon set. */
const IconPlaceholder = () => (
  <span
    aria-hidden
    style={{
      display: 'inline-block',
      width: 12,
      height: 12,
      borderRadius: 999,
      background: 'rgb(var(--signals-bg-info))',
    }}
  />
);

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Small semantic label component for statuses / metadata.

Variants are aligned with the design-system signal tokens and neutrals:
- neutral → signals-bg-neutral / text-standard
- positive → signals-*positive*
- info → signals-*info*
- negative → signals-*negative*
- warning → signals-*warning*
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'positive', 'info', 'negative', 'warning'],
    },
    active: {
      control: 'boolean',
    },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'neutral',
    active: true,
    children: 'Label',
  },
};

type WithIconArgs = {
  showLeftIcon: boolean;
  showRightIcon: boolean;
};

export const WithIcon: Story<WithIconArgs> = {
  args: {
    showLeftIcon: true,
    showRightIcon: true,
  },
  argTypes: {
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
  render: ({ showLeftIcon, showRightIcon }) => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Label
        variant="info"
        active
        iconLeft={showLeftIcon ? <IconPlaceholder /> : undefined}
        iconRight={showRightIcon ? <IconPlaceholder /> : undefined}
      >
        Label with icons
      </Label>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--space-3)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-3)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Label variant="neutral" active>
          Active
        </Label>
        <Label variant="positive" active>
          Active
        </Label>
        <Label variant="info" active>
          Active
        </Label>
        <Label variant="negative" active>
          Active
        </Label>
        <Label variant="warning" active>
          Active
        </Label>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 'var(--space-3)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Label variant="neutral" active={false}>
          Inactive
        </Label>
        <Label variant="positive" active={false}>
          Inactive
        </Label>
        <Label variant="info" active={false}>
          Inactive
        </Label>
        <Label variant="negative" active={false}>
          Inactive
        </Label>
        <Label variant="warning" active={false}>
          Inactive
        </Label>
      </div>
    </div>
  ),
};

