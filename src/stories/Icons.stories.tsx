import type { Meta, StoryObj } from '@storybook/react';

// Simple local icon set using inline SVGs, all colorable via `currentColor`.
type IconComponent = (props: { size?: number }) => JSX.Element;

const createIcon =
  (path: JSX.Element): IconComponent =>
  ({ size = 24 }) =>
    (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {path}
      </svg>
    );

const IconAlertCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <circle cx="12" cy="16" r="1" />
  </>,
);

const IconCheckCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <polyline points="9 12.5 11 14.5 15 9.5" />
  </>,
);

const IconInfo = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="10" x2="12" y2="16" />
    <circle cx="12" cy="7" r="1" />
  </>,
);

const IconXCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </>,
);

const IconBell = createIcon(
  <>
    <path d="M18 14a6 6 0 0 1-12 0c0-3 1-6 6-6s6 3 6 6Z" />
    <path d="M4 14h16" />
  </>,
);

const IconStar = createIcon(
  <>
    <polygon points="12 3 14.5 9 21 9 15.5 12.5 17.5 19 12 15.5 6.5 19 8.5 12.5 3 9 9.5 9 12 3" />
  </>,
);

const IconHeart = createIcon(
  <>
    <path d="M12 19s-5-3.2-7.5-6C2.2 11.3 2 8.5 4 6.8 5.8 5.3 8.2 5.7 9.5 7.3L12 10l2.5-2.7C15.8 5.7 18.2 5.3 20 6.8c2 1.7 1.8 4.5-.5 6.2-2.5 2.8-7.5 6-7.5 6Z" />
  </>,
);

const IconHome = createIcon(
  <>
    <path d="M4 11.5 12 5l8 6.5" />
    <path d="M6 10.5V19h12v-8.5" />
  </>,
);

const IconSearch = createIcon(
  <>
    <circle cx="11" cy="11" r="5" />
    <line x1="16" y1="16" x2="20" y2="20" />
  </>,
);

const ICONS: { name: string; Icon: IconComponent }[] = [
  { name: 'AlertCircle', Icon: IconAlertCircle },
  { name: 'CheckCircle', Icon: IconCheckCircle },
  { name: 'Info', Icon: IconInfo },
  { name: 'XCircle', Icon: IconXCircle },
  { name: 'Bell', Icon: IconBell },
  { name: 'Star', Icon: IconStar },
  { name: 'Heart', Icon: IconHeart },
  { name: 'Home', Icon: IconHome },
  { name: 'Search', Icon: IconSearch },
];

const COLOR_OPTIONS = [
  { label: 'Text standard', token: '--text-standard' },
  { label: 'Text highlight', token: '--text-highlight' },
  { label: 'Text subtle', token: '--text-subtile' },
  { label: 'Interaction', token: '--text-interaction' },
  { label: 'Positive', token: '--signals-text-positive' },
  { label: 'Negative', token: '--signals-text-negative' },
  { label: 'Warning', token: '--signals-text-warning' },
];

const meta = {
  title: 'System/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Preview of a small set of icons from \`lucide-react\`.

Icons inherit their color from CSS (\`currentColor\`), so they automatically match the text color of the surrounding component.

Use the color dropdown to preview how icons look with different semantic tokens.
        `.trim(),
      },
    },
  },
  argTypes: {
    colorToken: {
      control: 'select',
      options: COLOR_OPTIONS.map((c) => c.token),
      description: 'Semantic token used as icon color (via currentColor)',
    },
    size: {
      control: 'radio',
      options: ['16', '20', '24', '32'],
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    colorToken: '--text-standard',
    size: '24',
  },
  render: ({ colorToken, size }) => {
    const selected = COLOR_OPTIONS.find((c) => c.token === colorToken) ?? COLOR_OPTIONS[0];
    const sizeNum = Number(size) || 24;

    return (
      <div
        style={{
          padding: 'var(--space-8)',
          maxWidth: 72 * 16,
          margin: '0 auto',
          fontFamily: 'var(--font-sans)',
          color: 'rgb(var(--fg))',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--font-size-2xl)',
            lineHeight: 'var(--leading-2xl)',
            fontWeight: 'var(--font-bold)',
            marginBottom: 'var(--space-4)',
          }}
        >
          Icons
        </h1>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            lineHeight: 'var(--leading-sm)',
            color: 'rgb(var(--fg-muted))',
            marginBottom: 'var(--space-4)',
          }}
        >
          The icons below come from <code>lucide-react</code>. They use <code>currentColor</code>, so they follow
          the text color of their container. Change the color token with the control panel to preview different
          semantic colors.
        </p>

        <div
          style={{
            marginBottom: 'var(--space-4)',
            fontSize: 'var(--font-size-sm)',
            lineHeight: 'var(--leading-sm)',
            color: 'rgb(var(--fg-muted))',
          }}
        >
          <strong>Current color</strong>: <code>{selected.token}</code> ({selected.label})
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {ICONS.map(({ name, Icon }) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-3)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgb(var(--border))',
                color: `rgb(var(${selected.token}))`,
              }}
            >
              <Icon size={sizeNum} strokeWidth={2} />
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  lineHeight: 'var(--leading-xs)',
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

