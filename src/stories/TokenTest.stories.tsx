import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'System/TokenTest'
};

export default meta;

type Story = StoryObj;

export const Preview: Story = {
  render: () => (
    <div
      style={{
        background: 'rgb(var(--bg))',
        color: 'rgb(var(--fg))',
        padding: 24,
        minHeight: '100vh'
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Tokens Test</div>

      <div style={{ opacity: 0.7, marginBottom: 16 }}>
        bg / fg / border aus CSS Variables
      </div>

      <button
        style={{
          background: 'rgb(var(--primary))',
          color: 'rgb(var(--primary-fg))',
          border: '1px solid rgb(var(--border))',
          borderRadius: 8,
          padding: '10px 14px',
          cursor: 'pointer'
        }}
      >
        Primary Button
      </button>
    </div>
  )
};