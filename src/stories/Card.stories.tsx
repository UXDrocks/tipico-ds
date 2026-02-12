import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { InputField } from './InputField';
import { Button } from './Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Reusable content container built on the \`bg-card\` token.

### Variants

- **plain**: simple card surface (no shadow, transparent border).
- **shadow**: subtle elevation using alpha black tokens.
- **bordered**: flat card with \`border-standard\` outline.
- Use cards to group related content on \`bg-surface\` backgrounds (e.g. forms, summaries).
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['plain', 'shadow', 'bordered'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    variant: 'plain',
  },
  render: (args) => (
    <div
      style={{
        minWidth: 320,
        maxWidth: 480,
      }}
    >
      <Card {...args}>
        <h2
          style={{
            margin: 0,
            marginBottom: 'var(--space-2)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--text-lg--line-height)',
            fontWeight: 'var(--font-semibold)',
          }}
        >
          Deposit limits
        </h2>
        <p
          style={{
            margin: 0,
            marginBottom: 'var(--space-4)',
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--text-sm--line-height)',
            color: 'rgb(var(--text-subtile))',
          }}
        >
          Configure optional limits for your account. You can change these at any time.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-4)',
          }}
        >
          <InputField label="Monthly" placeholder="No limit" />
          <InputField label="Weekly" placeholder="No limit" />
        </div>
        <Button variant="primary" fullWidth>
          Save
        </Button>
      </Card>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'plain',
  },
};

