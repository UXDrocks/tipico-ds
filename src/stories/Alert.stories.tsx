import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { ICON_OPTIONS, type IconOption, iconFromOption } from './icons';

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

### Variant overview

| Variant  | Description                           |
|---------|---------------------------------------|
| neutral | Generic information / low emphasis    |
| info    | Informational notice                  |
| success | Positive outcome / confirmation       |
| warning | Potential risk or required attention  |
| error   | Blocking problem or failed action     |

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

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        minWidth: 320,
        maxWidth: 480,
      }}
    >
      <Alert variant="neutral" title="Neutral">
        {defaultBody}
      </Alert>
      <Alert variant="info" title="Info">
        {defaultBody}
      </Alert>
      <Alert variant="success" title="Success">
        {defaultBody}
      </Alert>
      <Alert variant="warning" title="Warning">
        {defaultBody}
      </Alert>
      <Alert variant="error" title="Error">
        {defaultBody}
      </Alert>
    </div>
  ),
};

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

type WithIconArgs = {
  variant: 'neutral' | 'info' | 'error' | 'success' | 'warning';
  title: string;
  children: string;
  showIcon: boolean;
  icon: IconOption;
};

/** Playground with icon and showIcon controls – same icon set as other components. */
export const WithIcon: Story<WithIconArgs> = {
  args: {
    variant: 'info',
    title: 'Headline',
    children: defaultBody,
    showIcon: true,
    icon: 'AlertCircle',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'error', 'success', 'warning'],
    },
    showIcon: {
      control: 'boolean',
      description: 'Show or hide the status icon',
    },
    icon: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon (overrides variant default)',
    },
  },
  render: (args) => {
    const { icon, ...rest } = args;
    const iconNode = iconFromOption(icon, 20);

    return (
      <div
        style={{
          maxWidth: 480,
        }}
      >
        <Alert
          {...(rest as any)}
          icon={iconNode}
        />
      </div>
    );
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  args: {
    variant: 'info',
    title: 'Headline (dark)',
    children: defaultBody,
    link: { href: '#', label: 'Learn more' },
  },
  // Use the global Theme toolbar (dark) rather than a per-story .dark wrapper.
};

export const AllVariantsDark: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  // Rely on the global Theme toolbar for dark mode; this story just shows all variants.
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
