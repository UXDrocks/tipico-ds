import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary, secondary, tertiary (outlined), and destructive button. Use primary for the main action, secondary/tertiary for less prominent actions, and destructive only for dangerous, irreversible operations.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Primary: Story = {
  args: { variant: 'primary', children: 'Text' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Text' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary', children: 'Text' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete' },
};

export const Loading: Story = {
  args: { loading: true, loadingLabel: 'Saving...', children: 'Save' },
};
