import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { ICON_OPTIONS, type IconOption, iconFromOption } from './icons';

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

### Variant overview

| Variant  | Description                      |
|---------|----------------------------------|
| neutral | Default / generic label          |
| positive| Success / positive state         |
| info    | Informational status             |
| negative| Error / problematic state        |
| warning | Caution / needs user attention   |

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

export const Overview: Story = {
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

export const Playground: Story = {
  args: {
    variant: 'neutral',
    active: true,
    children: 'Label',
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
  render: ({ showLeftIcon, leftIcon, showRightIcon, rightIcon }) => {
    const left = iconFromOption(leftIcon, 12);
    const right = iconFromOption(rightIcon, 12);

    return (
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
          iconLeft={showLeftIcon ? left : undefined}
          iconRight={showRightIcon ? right : undefined}
        >
          Label with icons
        </Label>
      </div>
    );
  },
};

