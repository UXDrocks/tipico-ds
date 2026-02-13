import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Single-line input field based on \`TextField\`, using the global design tokens for inputs.

### State overview

| State     | Description                             |
|----------|-----------------------------------------|
| default  | Empty field with placeholder            |
| filled   | Value entered                           |
| error    | Validation error and error message      |
| disabled | Non-interactive / greyed out            |

Use this component for standard form fields like the ones on the *Sports limits* screen.
        `.trim(),
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    hint: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel'],
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--space-4)',
        width: '100%',
      }}
    >
      <InputField label="Default" placeholder="Enter value" />
      <InputField label="Filled" defaultValue="100" />
      <InputField label="With hint" placeholder="Enter value" hint="This is an optional hint." />
      <InputField label="Error" placeholder="Enter value" error="Please enter a valid value." />
      <InputField label="Disabled" placeholder="No limit" disabled />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    hint: '',
    error: '',
    disabled: false,
  },
};

