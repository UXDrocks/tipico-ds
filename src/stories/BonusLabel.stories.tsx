import type { Meta, StoryObj } from '@storybook/react';
import { BonusLabel } from './BonusLabel';
import { ICON_OPTIONS, type IconOption, iconFromOption } from './icons';

const meta = {
  title: 'Components/BonusLabel',
  component: BonusLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Promotional bonus label (e.g. "20€ Risk Free Bet"), styled as a pill.

### Variant overview

| Variant | Description                         |
|--------|-------------------------------------|
| default| Standard promotional bonus label    |

The component uses semantic tokens:
- Background: \`--bg-card\`
- Border: \`--border-subtile\`
- Text + icon: \`--branding-text-brand\`

This keeps the appearance consistent across light and dark themes.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
    },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
} satisfies Meta<typeof BonusLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--space-3)',
      }}
    >
      <BonusLabel>20€ Risk Free Bet</BonusLabel>
      <BonusLabel>10€ Free Bet</BonusLabel>
      <BonusLabel>10% Flash Boost</BonusLabel>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: '20€ Risk Free Bet',
    variant: 'default',
  },
};

type WithIconArgs = {
  showLeftIcon: boolean;
  leftIcon: IconOption;
  showRightIcon: boolean;
  rightIcon: IconOption;
};

export const WithIcon: Story<WithIconArgs> = {
  args: {
    showLeftIcon: true,
    leftIcon: 'XCircle',
    showRightIcon: false,
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
  render: ({ showLeftIcon, leftIcon, showRightIcon, rightIcon }) => {
    const left = iconFromOption(leftIcon, 18);
    const right = iconFromOption(rightIcon, 18);

    return (
      <div
        style={{
          display: 'grid',
          gap: 'var(--space-3)',
        }}
      >
        <BonusLabel
          iconLeft={showLeftIcon ? left : undefined}
          iconRight={showRightIcon ? right : undefined}
        >
          20€ Risk Free Bet
        </BonusLabel>
        <BonusLabel
          iconLeft={showLeftIcon ? left : undefined}
          iconRight={showRightIcon ? right : undefined}
        >
          10€ Free Bet
        </BonusLabel>
        <BonusLabel
          iconLeft={showLeftIcon ? left : undefined}
          iconRight={showRightIcon ? right : undefined}
        >
          10% Flash Boost
        </BonusLabel>
      </div>
    );
  },
};

