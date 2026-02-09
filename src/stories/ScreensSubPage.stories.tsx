import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Screens/SubPage',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        component: `
Sub page template (detail / modal-like) for the sports app.

Uses semantic tokens for background, card, and navigation elements, and reuses the same card pattern as the main page.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const NavIconButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    style={{
      background: 'none',
      border: 'none',
      padding: 'var(--space-2)',
      color: 'rgb(var(--text-standard))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </button>
);

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
        {/* Simple subheader with back / close */}
        <header
          style={{
            paddingTop: 'var(--space-5)',
            paddingBottom: 'var(--space-3)',
            paddingInline: 'var(--space-3)',
            background: 'rgb(var(--bg))',
            borderBottom: '1px solid rgb(var(--border-subtile))',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-2)',
            }}
          >
            <NavIconButton>
              <span aria-hidden>←</span>
            </NavIconButton>
            <div
              style={{
                fontSize: 'var(--font-size-base)',
                lineHeight: 'var(--leading-base)',
                fontWeight: 'var(--font-semibold)',
                color: 'rgb(var(--text-standard))',
              }}
            >
              Title
            </div>
            <NavIconButton>
              <span aria-hidden>✕</span>
            </NavIconButton>
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
                  border: '1px dashed rgb(var(--border-subtile))',
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

