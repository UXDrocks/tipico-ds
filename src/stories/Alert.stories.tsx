import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Banner for inline feedback: info, success, warning, error, or neutral. Supports optional icon, close button, and link.

## Usage

\`\`\`tsx
import { Alert } from './Alert';

<Alert variant="info" title="Headline" onClose={() => {}}>Body text.</Alert>
<Alert variant="error" title="Error" link={{ href: '#', label: 'Retry' }}>Description.</Alert>
<Alert variant="success" title="Saved" showIcon={false}>No icon.</Alert>
\`\`\`

**Props:** \`variant\` (neutral | info | error | success | warning), \`title\`, \`children\` (body), \`showIcon\`, \`onClose\`, \`link\` (\`{ href, label }\`), \`closeLabel\`.

## Rules

- Use **neutral** or **info** for general notices; **error** / **success** / **warning** for outcome or risk.
- Always provide a short, scannable \`title\`; keep body text brief.
- Provide \`onClose\` only when the alert is dismissible; use \`closeLabel\` for accessibility.
- Use \`link\` for a single follow-up action (e.g. "View details", "Retry").
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'error', 'success', 'warning'],
    },
    showIcon: { control: 'boolean' },
    title: { control: 'text' },
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultBody = 'we maximize spannung in the world of sport betting';

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    title: 'Your ID is expiring soon',
    children: defaultBody,
    showIcon: false
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Headline',
    children: defaultBody,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Headline',
    children: defaultBody,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Headline',
    children: defaultBody,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Headline',
    children: defaultBody,
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    title: 'Headline',
    children: defaultBody,
    showIcon: false,
  },
};

export const WithCloseButton: Story = {
  args: {
    variant: 'neutral',
    title: 'Your ID is expiring soon',
    children: defaultBody,
    onClose: () => {},
  },
};

export const WithLink: Story = {
  args: {
    variant: 'info',
    title: 'Headline',
    children: defaultBody,
    link: { href: '#renew', label: 'Renew now' },
  },
};

export const WithIconCloseAndLink: Story = {
  args: {
    variant: 'warning',
    title: 'Session expiring',
    children: defaultBody,
    showIcon: true,
    onClose: () => {},
    link: { href: '#extend', label: 'Extend session' },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="dark" style={{ padding: 24, background: 'rgb(var(--bg))', borderRadius: 8 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    variant: 'info',
    title: 'Headline (dark)',
    children: defaultBody,
    link: { href: '#', label: 'Learn more' },
  },
};

export const AllVariantsDark: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="dark" style={{ padding: 24, background: 'rgb(var(--bg))', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <Alert variant="neutral" title="Neutral" link={{ href: '#', label: 'Link' }}>{defaultBody}</Alert>
      <Alert variant="info" title="Info" link={{ href: '#', label: 'Link' }}>{defaultBody}</Alert>
      <Alert variant="error" title="Error" onClose={() => {}}>{defaultBody}</Alert>
      <Alert variant="success" title="Success">{defaultBody}</Alert>
      <Alert variant="warning" title="Warning" showIcon={false}>{defaultBody}</Alert>
    </>
  ),
};

export const Responsive: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    variant: 'info',
    title: 'Narrow viewport',
    children: defaultBody,
    link: { href: '#', label: 'Action' },
  },
};
