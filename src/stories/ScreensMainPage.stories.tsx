import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Screens/MainPage',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        component: `
Main page template for the sports app.

Uses semantic tokens for:
- Page background: \`--bg\`
- Card: \`--bg-card\`, \`--border-subtile\`
- Header brand area: \`--bg-brand-gradient-vertical\`
- Bottom navigation: \`--bg-navigation-default\`, \`--text-subtile\`

Toggle the global theme (light/dark) via the toolbar to preview both modes.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
        {/* Header with brand gradient and balance chip */}
        <header
          style={{
            paddingTop: 'var(--space-5)',
            paddingBottom: 'var(--space-4)',
            paddingInline: 'var(--space-4)',
            backgroundImage: 'var(--bg-brand-gradient-vertical)',
            color: 'rgb(var(--text-white))',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  marginTop: 'var(--space-2)',
                  fontSize: 'var(--font-size-lg)',
                  lineHeight: 'var(--leading-lg)',
                  fontWeight: 'var(--font-bold)',
                }}
              >
                Title
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
              }}
            >
              <div
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 999,
                  background: 'rgb(var(--base-alpha-white-15))',
                  fontSize: 'var(--font-size-xs)',
                  lineHeight: 'var(--leading-xs)',
                }}
              >
                214,98€
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  border: '1px solid rgb(var(--base-alpha-white-40))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span aria-hidden>👤</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content area: surface → overlay → card */}
        <main
          style={{
            flex: 1,
            width: '100%',
            background: 'rgb(var(--bg-surface))',
            padding: 'var(--space-6) var(--space-4)',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              width: '100%',
            }}
          >
            <div
              style={{
                background: 'rgb(var(--bg-overlay))',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5)',
              }}
            >
              <div
                style={{
                  background: 'rgb(var(--bg-card))',
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid rgb(var(--border-subtile))',
                  padding: 'var(--space-4)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      border: '1px solid rgb(var(--border-standard))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--font-size-xs)',
                    }}
                  >
                    i
                  </span>
                  <span
                    style={{
                      fontSize: 'var(--font-size-base)',
                      lineHeight: 'var(--leading-base)',
                      color: 'rgb(var(--text-standard))',
                    }}
                  >
                    Example for card
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  ),
};

