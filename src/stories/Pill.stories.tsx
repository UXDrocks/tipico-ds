import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './Pill';
import { ICON_OPTIONS, type IconOption, iconFromOption } from './icons';

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
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-4)',
          alignItems: 'center',
          flexWrap: 'wrap',
          minWidth: 0,
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
          minWidth: 0,
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

export const WithIcon: Story = {
  args: {
    variant: 'info',
    active: true,
    children: 'Pill with icons',
    showLeftIcon: true,
    leftIcon: 'XCircle',
    showRightIcon: true,
    rightIcon: 'XCircle',
  },
  argTypes: {
    showLeftIcon: { control: 'boolean' },
    leftIcon: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon links',
    },
    showRightIcon: { control: 'boolean' },
    rightIcon: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon rechts',
    },
  },
  render: (args) => {
    const {
      variant,
      active,
      children,
      showLeftIcon,
      leftIcon,
      showRightIcon,
      rightIcon,
    } = args as any;

    const left = iconFromOption(leftIcon, 14);
    const right = iconFromOption(rightIcon, 14);

    return (
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-4)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Pill
          variant={variant}
          active={active}
          iconLeft={showLeftIcon ? left : undefined}
          iconRight={showRightIcon ? right : undefined}
        >
          {children}
        </Pill>
      </div>
    );
  },
};

