import type { Meta, StoryObj } from '@storybook/react';
import { BonusLabel } from './BonusLabel';

/** Simple local icon placeholder for bonus labels. Uses currentColor. */
const BonusIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 2 7 22l5-4 5 4-5-20Z" />
  </svg>
);

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

export const Playground: Story = {
  args: {
    children: '20€ Risk Free Bet',
    variant: 'default',
  },
};

type WithIconArgs = {
  showLeftIcon: boolean;
  showRightIcon: boolean;
};

export const WithIcon: Story<WithIconArgs> = {
  args: {
    showLeftIcon: true,
    showRightIcon: false,
  },
  argTypes: {
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
  render: ({ showLeftIcon, showRightIcon }) => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--space-3)',
      }}
    >
      <BonusLabel
        iconLeft={showLeftIcon ? <BonusIcon /> : undefined}
        iconRight={showRightIcon ? <BonusIcon /> : undefined}
      >
        20€ Risk Free Bet
      </BonusLabel>
      <BonusLabel
        iconLeft={showLeftIcon ? <BonusIcon /> : undefined}
        iconRight={showRightIcon ? <BonusIcon /> : undefined}
      >
        10€ Free Bet
      </BonusLabel>
      <BonusLabel
        iconLeft={showLeftIcon ? <BonusIcon /> : undefined}
        iconRight={showRightIcon ? <BonusIcon /> : undefined}
      >
        10% Flash Boost
      </BonusLabel>
    </div>
  ),
};

