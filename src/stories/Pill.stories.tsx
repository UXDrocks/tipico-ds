import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './Pill';

/** Temporary icon placeholder so stories do not depend on a real icon set. */
const IconPlaceholder = () => (
  <span
    aria-hidden
    style={{
      display: 'inline-block',
      width: 14,
      height: 14,
      borderRadius: 999,
      background: 'rgb(var(--signals-bg-info))',
    }}
  />
);

const meta = {
  title: 'Components/Pill',
  component: Pill,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Compact pill component for statuses / tags.

### Variant overview

| Variant  | Description                      |
|---------|----------------------------------|
| neutral | Default / generic pill           |
| positive| Success / positive state         |
| info    | Informational status             |
| negative| Error / problematic state        |
| warning | Caution / needs user attention   |

Variants map to the design-system signal scales:
- neutral → base neutrals
- positive → signals-positive
- info → signals-info
- negative → signals-negative
- warning → signals-warning
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
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--space-4)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-4)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Pill variant="neutral" active>
          Active Pill
        </Pill>
        <Pill variant="positive" active>
          Active Pill
        </Pill>
        <Pill variant="info" active>
          Active Pill
        </Pill>
        <Pill variant="negative" active>
          Active Pill
        </Pill>
        <Pill variant="warning" active>
          Active Pill
        </Pill>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 'var(--space-4)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Pill variant="neutral" active={false}>
          Inactive Pill
        </Pill>
        <Pill variant="positive" active={false}>
          Inactive Pill
        </Pill>
        <Pill variant="info" active={false}>
          Inactive Pill
        </Pill>
        <Pill variant="negative" active={false}>
          Inactive Pill
        </Pill>
        <Pill variant="warning" active={false}>
          Inactive Pill
        </Pill>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'neutral',
    active: true,
    children: 'Pill',
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
        gap: 'var(--space-4)',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Pill
        variant="info"
        active
        iconLeft={showLeftIcon ? <IconPlaceholder /> : undefined}
        iconRight={showRightIcon ? <IconPlaceholder /> : undefined}
      >
        Pill with icons
      </Pill>
    </div>
  ),
};

