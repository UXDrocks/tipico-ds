import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/** Temporary icon placeholder so stories do not depend on a real icon set. */
const IconPlaceholder = () => (
  <span
    aria-hidden
    style={{
      display: 'inline-block',
      width: 16,
      height: 16,
      borderRadius: 999,
      background: 'rgb(var(--signals-bg-info))',
    }}
  />
);

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Primary, secondary, tertiary (outlined), and destructive button. Supports loading state and optional left/right icons.

## Usage

\`\`\`tsx
import { Button } from './Button';

<Button variant="primary">Submit</Button>
<Button variant="secondary" size="large">Cancel</Button>
<Button variant="tertiary" fullWidth>Text</Button>
<Button variant="destructive">Delete</Button>
<Button loading loadingLabel="Saving…">Save</Button>
<Button iconRight={<ChevronRight />}>Next</Button>
\`\`\`

**Props:** \`variant\` (primary | secondary | tertiary | destructive), \`size\`, \`fullWidth\`, \`loading\`, \`loadingLabel\`, \`iconLeft\`, \`iconRight\`, \`disabled\`, plus native button attributes.

## Rules

- Use **primary** for the single main action per view; **destructive** for irreversible actions (e.g. delete).
- Use **secondary** for alternative actions; **tertiary** for low emphasis.
- Use \`loading\` during async actions; set \`loadingLabel\` for screen readers and visible text.
- Prefer \`size="medium"\` unless layout demands otherwise.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, loadingLabel: 'Saving…', children: 'Save' },
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
    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" iconRight={showRightIcon ? <IconPlaceholder /> : undefined}>
        Next
      </Button>
      <Button
        variant="tertiary"
        iconLeft={
          showLeftIcon ? <IconPlaceholder /> : undefined
        }
      >
        Back
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { variant: 'primary', fullWidth: true, children: 'Full width' },
  parameters: { layout: 'padded' },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="tertiary" disabled>Tertiary</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  ),
};
