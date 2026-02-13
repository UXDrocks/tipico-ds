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

type TokenDef = {
  name: string;
  /** Semantic token (from tokens.semantic.css) */
  token: string;
  /** Optional explicit light-mode token name (defaults to token) */
  lightToken?: string;
  /** Optional explicit dark-mode token name (defaults to token) */
  darkToken?: string;
  note?: string;
};

function TokenTable({ title, tokens }: { title: string; tokens: TokenDef[] }) {
  return (
    <section
      style={{
        marginBottom: 'var(--space-8)',
      }}
    >
      <h2
        style={{
          fontSize: 'var(--font-size-lg)',
          lineHeight: 'var(--leading-lg)',
          fontWeight: 'var(--font-semibold)',
          marginBottom: 'var(--space-3)',
          color: 'rgb(var(--fg))',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgb(var(--border))',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'minmax(120px, 1.2fr) minmax(200px, 1.8fr) minmax(120px, 1.4fr) minmax(120px, 1.4fr) minmax(140px, 1.6fr)',
            gap: 'var(--space-2)',
            padding: 'var(--space-2) var(--space-3)',
            background: 'rgb(var(--bg-muted))',
            fontSize: 'var(--font-size-xs)',
            lineHeight: 'var(--leading-xs)',
            fontWeight: 'var(--font-semibold)',
            color: 'rgb(var(--fg))',
          }}
        >
          <span>Name</span>
          <span>Semantic token</span>
          <span>Light</span>
          <span>Dark</span>
          <span>Notes</span>
        </div>
        <div>
          {tokens.map(({ name, token, lightToken, darkToken, note }) => {
            const light = lightToken ?? token;
            const dark = darkToken ?? token;

            return (
            <div
              key={token}
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'minmax(120px, 1.2fr) minmax(200px, 1.8fr) minmax(120px, 1.4fr) minmax(120px, 1.4fr) minmax(140px, 1.6fr)',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                borderTop: '1px solid rgb(var(--border))',
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--leading-sm)',
              }}
            >
              <span style={{ color: 'rgb(var(--fg))' }}>{name}</span>
              <code style={{ color: 'rgb(var(--fg-muted))' }}>{token}</code>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'rgb(var(--fg-muted))',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 20,
                    height: 14,
                    borderRadius: 999,
                    border: '1px solid rgb(var(--border))',
                    background: `rgb(var(${light}))`,
                  }}
                />
                <code>{light}</code>
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'rgb(var(--fg-muted))',
                }}
              >
                <span
                  aria-hidden
                  className="dark"
                  style={{
                    width: 20,
                    height: 14,
                    borderRadius: 999,
                    border: '1px solid rgb(var(--border))',
                    background: `rgb(var(${dark}))`,
                  }}
                />
                <code>{dark}</code>
              </span>
              <span style={{ color: 'rgb(var(--fg-muted))' }}>{note ?? ''}</span>
            </div>
            );
          })}
        </div>
      </div>
    </section>
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

      <Section title="Primitive color scales (tokens.primitives.css)">
        <div
          style={{
            display: 'grid',
            gap: 'var(--space-6)',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--leading-sm)',
                fontWeight: 'var(--font-semibold)',
                marginBottom: 'var(--space-3)',
              }}
            >
              Base neutrals
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
              {[
                '--base-black',
                '--base-neutrals-975',
                '--base-neutrals-950',
                '--base-neutrals-900',
                '--base-neutrals-800',
                '--base-neutrals-700',
                '--base-neutrals-600',
                '--base-neutrals-500',
                '--base-neutrals-400',
                '--base-neutrals-300',
                '--base-neutrals-200',
                '--base-neutrals-100',
                '--base-neutrals-50',
                '--base-neutrals-25',
                '--base-white',
              ].map((token) => (
                <Swatch key={token} name={token.replace('--', '')} varName={token} />
              ))}
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--leading-sm)',
                fontWeight: 'var(--font-semibold)',
                marginBottom: 'var(--space-3)',
              }}
            >
              Brand reds
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
              {[
                '--colors-red-50',
                '--colors-red-100',
                '--colors-red-200',
                '--colors-red-300',
                '--colors-red-400',
                '--colors-red-500',
                '--colors-red-600',
                '--colors-red-700',
                '--colors-red-800',
                '--colors-red-900',
              ].map((token) => (
                <Swatch key={token} name={token.replace('--', '')} varName={token} />
              ))}
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--leading-sm)',
                fontWeight: 'var(--font-semibold)',
                marginBottom: 'var(--space-3)',
              }}
            >
              Signals
            </h3>
            <div
              style={{
                display: 'grid',
                gap: 'var(--space-4)',
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: 'var(--leading-xs)',
                    fontWeight: 'var(--font-semibold)',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: 0.04,
                    color: 'rgb(var(--fg-muted))',
                  }}
                >
                  Info
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                  {[
                    '--signals-info-50',
                    '--signals-info-100',
                    '--signals-info-200',
                    '--signals-info-300',
                    '--signals-info-400',
                    '--signals-info-500',
                    '--signals-info-600',
                    '--signals-info-700',
                    '--signals-info-800',
                    '--signals-info-900',
                    '--signals-info-950',
                  ].map((token) => (
                    <Swatch key={token} name={token.replace('--', '')} varName={token} />
                  ))}
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: 'var(--leading-xs)',
                    fontWeight: 'var(--font-semibold)',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: 0.04,
                    color: 'rgb(var(--fg-muted))',
                  }}
                >
                  Positive
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                  {[
                    '--signals-positive-50',
                    '--signals-positive-100',
                    '--signals-positive-200',
                    '--signals-positive-300',
                    '--signals-positive-400',
                    '--signals-positive-500',
                    '--signals-positive-600',
                    '--signals-positive-700',
                    '--signals-positive-800',
                    '--signals-positive-900',
                    '--signals-positive-950',
                  ].map((token) => (
                    <Swatch key={token} name={token.replace('--', '')} varName={token} />
                  ))}
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: 'var(--leading-xs)',
                    fontWeight: 'var(--font-semibold)',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: 0.04,
                    color: 'rgb(var(--fg-muted))',
                  }}
                >
                  Warning
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                  {[
                    '--signals-warning-50',
                    '--signals-warning-100',
                    '--signals-warning-200',
                    '--signals-warning-300',
                    '--signals-warning-400',
                    '--signals-warning-500',
                    '--signals-warning-600',
                    '--signals-warning-700',
                    '--signals-warning-800',
                    '--signals-warning-900',
                    '--signals-warning-950',
                  ].map((token) => (
                    <Swatch key={token} name={token.replace('--', '')} varName={token} />
                  ))}
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: 'var(--leading-xs)',
                    fontWeight: 'var(--font-semibold)',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: 0.04,
                    color: 'rgb(var(--fg-muted))',
                  }}
                >
                  Negative
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                  {[
                    '--signals-negative-50',
                    '--signals-negative-100',
                    '--signals-negative-200',
                    '--signals-negative-300',
                    '--signals-negative-400',
                    '--signals-negative-500',
                    '--signals-negative-600',
                    '--signals-negative-700',
                    '--signals-negative-800',
                    '--signals-negative-900',
                    '--signals-negative-950',
                  ].map((token) => (
                    <Swatch key={token} name={token.replace('--', '')} varName={token} />
                  ))}
                </div>
              </div>
            </div>
          </div>
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

      <Section title="Typography (Tailwind scale)">
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            lineHeight: 'var(--leading-sm)',
            color: 'rgb(var(--fg-muted))',
            marginBottom: 'var(--space-4)',
          }}
        >
          Map Tailwind font-size utilities to tokens: <code>text-xs</code> →{' '}
          <code>var(--text-xs)</code>, <code>text-sm</code> → <code>var(--text-sm)</code>,{' '}
          <code>text-base</code> → <code>var(--text-base)</code>, etc.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {[
            { label: 'text-xs', size: '--text-xs', lh: '--text-xs--line-height' },
            { label: 'text-sm', size: '--text-sm', lh: '--text-sm--line-height' },
            { label: 'text-base', size: '--text-base', lh: '--text-base--line-height' },
            { label: 'text-lg', size: '--text-lg', lh: '--text-lg--line-height' },
            { label: 'text-xl', size: '--text-xl', lh: '--text-xl--line-height' },
          ].map(({ label, size, lh }) => (
            <div
              key={label}
              style={{
                padding: 'var(--space-3)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgb(var(--border))',
              }}
            >
              <div
                style={{
                  fontSize: `var(${size})`,
                  lineHeight: `var(${lh})`,
                  fontWeight: 'var(--font-medium)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                The quick brown fox
              </div>
              <code
                style={{
                  display: 'block',
                  fontSize: 'var(--font-size-xs)',
                  lineHeight: 'var(--leading-xs)',
                  color: 'rgb(var(--fg-muted))',
                }}
              >
                {label} → {size}
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

type TokenStoryDef = TokenDef;

export const Tokens: Story = {
  render: () => {
    const textTokens: TokenStoryDef[] = [
      { name: 'Highlight', token: '--text-highlight' },
      { name: 'Standard', token: '--text-standard' },
      { name: 'Subtile', token: '--text-subtile' },
      { name: 'Black', token: '--text-black' },
      { name: 'White', token: '--text-white' },
      { name: 'White subtile', token: '--text-white-subtile' },
      {
        name: 'Interaction',
        token: '--text-interaction',
        lightToken: '--text-interaction',
        darkToken: '--text-interaction',
      },
      {
        name: 'Interaction lighter',
        token: '--text-interaction-lighter-stay',
        lightToken: '--text-interaction-lighter-stay',
        darkToken: '--text-interaction-lighter-stay',
      },
    ];

    const borderTokens: TokenStoryDef[] = [
      { name: 'Strong', token: '--border-strong' },
      { name: 'Highlight', token: '--border-highlight' },
      { name: 'Standard', token: '--border-standard' },
      { name: 'Subtile', token: '--border-subtile' },
      { name: 'Interaction', token: '--border-interaction' },
      { name: 'Brand', token: '--branding-border-brand' },
      { name: 'Primary', token: '--branding-border-primary' },
      { name: 'Secondary', token: '--branding-border-secondary' },
      { name: 'Tertiary', token: '--branding-border-tertiary' },
    ];

    const backgroundTokens: TokenStoryDef[] = [
      { name: 'Input', token: '--bg-input' },
      { name: 'Inlay', token: '--bg-inlay' },
      { name: 'Card', token: '--bg-card' },
      { name: 'Surface', token: '--bg-surface' },
      { name: 'Modal', token: '--bg-modal' },
      { name: 'Overlay', token: '--bg-overlay' },
      { name: 'Interaction default', token: '--bg-interaction-default' },
      { name: 'Interaction active', token: '--bg-interaction-active' },
      {
        name: 'CTA primary',
        token: '--bg-cta-primary',
        lightToken: '--bg-cta-primary',
        darkToken: '--bg-cta-primary',
      },
      {
        name: 'CTA secondary',
        token: '--bg-cta-secondary',
        lightToken: '--bg-cta-secondary',
        darkToken: '--bg-cta-secondary',
      },
      {
        name: 'CTA tertiary',
        token: '--bg-cta-tertiary',
        lightToken: '--bg-cta-tertiary',
        darkToken: '--bg-cta-tertiary',
      },
      { name: 'Signals info', token: '--signals-bg-info' },
      { name: 'Signals positive', token: '--signals-bg-positive' },
      { name: 'Signals negative', token: '--signals-bg-negative' },
      { name: 'Signals warning', token: '--signals-bg-warning' },
      { name: 'Neutral', token: '--signals-bg-neutral' },
    ];

    const brandingTokens: TokenStoryDef[] = [
      { name: 'Brand', token: '--global-styling-branding-brand' },
      { name: 'Primary', token: '--global-styling-branding-primary' },
      { name: 'Secondary', token: '--global-styling-branding-secondary' },
      { name: 'Tertiary', token: '--global-styling-branding-tertiary' },
      { name: 'Interaction', token: '--global-styling-branding-interaction' },
    ];

    const signalTextTokens: TokenStoryDef[] = [
      { name: 'Info', token: '--signals-text-info' },
      { name: 'Info brighter', token: '--signals-text-info-brighter' },
      { name: 'Positive', token: '--signals-text-positive' },
      { name: 'Positive brighter', token: '--signals-text-positive-brighter' },
      { name: 'Warning', token: '--signals-text-warning' },
      { name: 'Negative', token: '--signals-text-negative' },
      { name: 'Negative brighter', token: '--signals-text-negative-brighter' },
    ];

    return (
      <div
        style={{
          padding: 'var(--space-8)',
          maxWidth: 72 * 16,
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
          Tokens
        </h1>
        <p
          style={{
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--leading-base)',
            color: 'rgb(var(--fg-muted))',
            marginBottom: 'var(--space-6)',
          }}
        >
          Overview of semantic tokens defined in <code>tokens.semantic.css</code>. Use these in
          components instead of raw primitives from <code>tokens.primitives.css</code>.
        </p>

        <TokenTable title="Text tokens" tokens={textTokens} />
        <TokenTable title="Border tokens" tokens={borderTokens} />
        <TokenTable title="Background tokens" tokens={backgroundTokens} />
        <TokenTable title="Branding tokens" tokens={brandingTokens} />
        <TokenTable title="Signal text tokens" tokens={signalTextTokens} />
      </div>
    );
  },
};

