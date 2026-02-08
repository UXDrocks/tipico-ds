import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'System/Tokens',
};

export default meta;

type Story = StoryObj;

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Token name="--success" />
      <Token name="--warning" />
      <Token name="--negative" />
      <Token name="--bg" />
      <Token name="--fg" />
      <Token name="--border" />
    </div>
  ),
};

function Token({ name }: { name: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: `rgb(var(${name}))`,
          border: '1px solid rgb(var(--border))',
        }}
      />
      <code>{name}</code>
    </div>
  );
}