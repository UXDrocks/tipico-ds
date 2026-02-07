// src/stories/Foundation.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "System/Foundation",
  parameters: {
    layout: "fullscreen",
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
    <section style={{ marginBottom: 28 }}>
      <div style={{ fontWeight: 700, marginBottom: 10, fontSize: 14 }}>
        {title}
      </div>
      {children}
    </section>
  );
}

function Swatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div
      style={{
        border: "1px solid rgb(var(--border))",
        borderRadius: 12,
        overflow: "hidden",
        minWidth: 180,
      }}
    >
      <div
        style={{
          height: 56,
          background: `rgb(var(${varName}))`,
        }}
      />
      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 600, fontSize: 13 }}>{name}</div>
        <div style={{ opacity: 0.7, fontSize: 12 }}>{varName}</div>
      </div>
    </div>
  );
}

function TokenCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgb(var(--border))",
        borderRadius: 12,
        padding: 12,
        minWidth: 220,
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 600, fontSize: 13 }}>{value}</div>
    </div>
  );
}

function ModePanel({
  title,
  modeClass,
}: {
  title: string;
  modeClass?: string;
}) {
  return (
    <div
      className={modeClass}
      style={{
        border: "1px solid rgb(var(--border))",
        borderRadius: 16,
        overflow: "hidden",
        background: "rgb(var(--bg))",
        color: "rgb(var(--fg))",
      }}
    >
      <div
        style={{
          padding: 14,
          borderBottom: "1px solid rgb(var(--border))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgb(var(--bg))",
        }}
      >
        <div style={{ fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>
          bg/fg/border via CSS variables
        </div>
      </div>

      <div style={{ padding: 18 }}>
        <Section title="Colors">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Swatch name="Background" varName="--bg" />
            <Swatch name="Foreground" varName="--fg" />
            <Swatch name="Primary" varName="--primary" />
            <Swatch name="Primary FG" varName="--primary-fg" />
            <Swatch name="Border" varName="--border" />
          </div>
        </Section>

        <Section title="Typography">
          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.1 }}>
              Heading XL — The quick brown fox
            </div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              Heading — The quick brown fox
            </div>
            <div style={{ fontSize: 14, opacity: 0.9 }}>
              Body — The quick brown fox jumps over the lazy dog. This should use
              your default text color.
            </div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              Small / muted — helper text, captions, meta information.
            </div>
          </div>
        </Section>

        <Section title="Spacing / Radius / Shadow (examples)">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <TokenCard label="Border radius" value="12px / 16px examples" />
            <TokenCard label="Spacing" value="12 / 14 / 18 / 28 px" />
            <TokenCard label="Border" value="1px solid rgb(var(--border))" />
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div
              style={{
                padding: 14,
                borderRadius: 12,
                border: "1px solid rgb(var(--border))",
                background: "rgb(var(--bg))",
              }}
            >
              Card example
            </div>

            <button
              style={{
                background: "rgb(var(--primary))",
                color: "rgb(var(--primary-fg))",
                border: "1px solid rgb(var(--border))",
                borderRadius: 10,
                padding: "10px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Primary Button
            </button>

            <button
              style={{
                background: "transparent",
                color: "rgb(var(--fg))",
                border: "1px solid rgb(var(--border))",
                borderRadius: 10,
                padding: "10px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Secondary Button
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
}

export const Overview: Story = {
  render: () => (
    <div style={{ padding: 18, display: "grid", gap: 18 }}>
      {/* Light */}
      <ModePanel title="Light Mode" />

      {/* Dark: assumes your setup uses `.dark` to switch variables */}
      <ModePanel title="Dark Mode" modeClass="dark" />
    </div>
  ),
};