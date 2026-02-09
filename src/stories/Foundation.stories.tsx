/**
 * Foundation = global styling overview.
 * Keep this in sync with:
 * - src/styles/theme.css (semantic colors, radius, font weights)
 * - src/styles/tokens.primitives.css (spacing, typography scale, primitive colors)
 */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'System/Foundation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Global design tokens and styling overview. Update this page whenever you add or change tokens in `theme.css` or `tokens.primitives.css`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: 'var(--space-8)',
      }}
    >
      <h2
        style={{
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--leading-xl)',
          fontWeight: 'var(--font-bold)',
          marginBottom: 'var(--space-3)',
          color: 'rgb(var(--fg))',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Swatch({
  name,
  varName,
  isRgb = true,
}: {
  name: string;
  varName: string;
  isRgb?: boolean;
}) {
  const value = isRgb ? `rgb(var(${varName}))` : `var(${varName})`;
  return (
    <div
      style={{
        border: '1px solid rgb(var(--border))',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        minWidth: 160,
      }}
    >
      <div
        style={{
          height: 56,
          background: value,
        }}
      />
      <div style={{ padding: 'var(--space-3)' }}>
        <div
          style={{
            fontWeight: 'var(--font-semibold)',
            fontSize: 'var(--font-size-sm)',
            lineHeight: 'var(--leading-sm)',
            color: 'rgb(var(--fg))',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-xs)',
            lineHeight: 'var(--leading-xs)',
            color: 'rgb(var(--fg-muted))',
            marginTop: 'var(--space-1)',
          }}
        >
          <code>{varName}</code>
        </div>
      </div>
    </div>
  );
}

function TokenRow({ label, token, value }: { label: string; token: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-2) 0',
        borderBottom: '1px solid rgb(var(--border))',
        fontSize: 'var(--font-size-sm)',
        lineHeight: 'var(--leading-sm)',
      }}
    >
      <span style={{ fontWeight: 'var(--font-semibold)', minWidth: 100, color: 'rgb(var(--fg))' }}>
        {label}
      </span>
      <code style={{ color: 'rgb(var(--fg-muted))' }}>{token}</code>
      <span style={{ color: 'rgb(var(--fg-muted))' }}>{value}</span>
    </div>
  );
}

export const Overview: Story = {
  render: () => (
    <div
      style={{
        padding: 'var(--space-8)',
        maxWidth: 56 * 16,
        margin: '0 auto',
        color: 'rgb(var(--fg))',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <h1
        style={{
          fontSize: 'var(--font-size-3xl)',
          lineHeight: 'var(--leading-3xl)',
          fontWeight: 'var(--font-bold)',
          marginBottom: 'var(--space-4)',
        }}
      >
        Foundation
      </h1>
      <p
        style={{
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--leading-base)',
          color: 'rgb(var(--fg-muted))',
          marginBottom: 'var(--space-8)',
        }}
      >
        This page is the single source of truth for design tokens in Storybook. When you add or
        change colors, spacing, font sizes, or radius in <code>theme.css</code> or{' '}
        <code>tokens.primitives.css</code>, update the corresponding section below so the
        Foundation stays in sync.
      </p>

      <Section title="Semantic colors (theme)">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <Swatch name="Background" varName="--bg" />
          <Swatch name="Background muted" varName="--bg-muted" />
          <Swatch name="Foreground" varName="--fg" />
          <Swatch name="Foreground muted" varName="--fg-muted" />
          <Swatch name="Primary" varName="--primary" />
          <Swatch name="Primary fg" varName="--primary-fg" />
          <Swatch name="Border" varName="--border" />
          <Swatch name="Success" varName="--success" />
          <Swatch name="Warning" varName="--warning" />
          <Swatch name="Negative" varName="--negative" />
          <Swatch name="Info" varName="--info" />
          <Swatch name="Link" varName="--link" />
        </div>
      </Section>

      <Section title="Typography scale">
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <TokenRow label="Weights" token="--font-normal" value="400" />
          <TokenRow label="" token="--font-medium" value="500" />
          <TokenRow label="" token="--font-semibold" value="600" />
          <TokenRow label="" token="--font-bold" value="700" />
        </div>
        <div
          style={{
            display: 'grid',
            gap: 'var(--space-4)',
            border: '1px solid rgb(var(--border))',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-6)',
          }}
        >
          {[
            { size: 'xxs', label: 'text-xxs' },
            { size: 'xs', label: 'text-xs' },
            { size: 'sm', label: 'text-sm' },
            { size: 'base', label: 'text-base' },
            { size: 'lg', label: 'text-lg' },
            { size: 'xl', label: 'text-xl' },
            { size: '2xl', label: 'text-2xl' },
            { size: '3xl', label: 'text-3xl' },
          ].map(({ size, label }) => (
            <div key={size}>
              <div
                style={{
                  fontSize: `var(--font-size-${size})`,
                  lineHeight: `var(--leading-${size})`,
                  color: 'rgb(var(--fg))',
                }}
              >
                we maximize spannung in the world of sport betting
              </div>
              <code
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'rgb(var(--fg-muted))',
                  marginTop: 'var(--space-1)',
                  display: 'inline-block',
                }}
              >
                {label} — font-size: var(--font-size-{size}), line-height: var(--leading-{size})
              </code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing (Tailwind scale)">
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            lineHeight: 'var(--leading-sm)',
            color: 'rgb(var(--fg-muted))',
            marginBottom: 'var(--space-4)',
          }}
        >
          Use <code>var(--space-N)</code>. 1 unit = 0.25rem. Scale: 0, px, 0.5, 1–12, 14, 16, 20, 24,
          28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'flex-end' }}>
          {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((n) => (
            <div
              key={n}
              style={{
                width: n === 0 ? 4 : `var(--space-${n})`,
                height: n === 0 ? 4 : `var(--space-${n})`,
                minWidth: n === 0 ? 4 : undefined,
                minHeight: n === 0 ? 4 : undefined,
                background: 'rgb(var(--primary) / 0.3)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-xxs)',
                color: 'rgb(var(--fg))',
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radius">
        <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { key: 'sm', token: '--radius-sm' },
            { key: 'md', token: '--radius-md' },
            { key: 'lg', token: '--radius-lg' },
          ].map(({ key, token }) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: 'rgb(var(--primary) / 0.2)',
                  border: '1px solid rgb(var(--border))',
                  borderRadius: `var(${token})`,
                }}
              />
              <code
                style={{
                  display: 'block',
                  marginTop: 'var(--space-2)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'rgb(var(--fg-muted))',
                }}
              >
                {token}
              </code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Light vs dark">
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            lineHeight: 'var(--leading-sm)',
            color: 'rgb(var(--fg-muted))',
            marginBottom: 'var(--space-4)',
          }}
        >
          Toggle the theme in the toolbar to see token overrides under <code>.dark</code> in{' '}
          <code>theme.css</code>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
          <div
            style={{
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'rgb(var(--bg))',
              color: 'rgb(var(--fg))',
              border: '1px solid rgb(var(--border))',
            }}
          >
            <strong>Light</strong>
            <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
              Current canvas uses light tokens.
            </p>
          </div>
          <div
            className="dark"
            style={{
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'rgb(var(--bg))',
              color: 'rgb(var(--fg))',
              border: '1px solid rgb(var(--border))',
            }}
          >
            <strong>Dark</strong>
            <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
              This block uses <code>.dark</code> tokens.
            </p>
          </div>
        </div>
      </Section>
    </div>
  ),
};
