import type { Meta, StoryObj } from '@storybook/react';
import { ICONS } from './icons';

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
          {Object.entries(ICONS).map(([name, Icon]) => (
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

