import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Compact tag for highlighting short labels like "NEW".

### Variants (color examples)

- **brand**: red background, white text – e.g. primary "NEW" or "HOT" labels.
- **neutral**: white background, black text – subtle tag on grey surfaces.
- **positive**: green background, white text – success or positive highlights.
- **info**: blue background, white text – informational highlights.

Use tags sparingly to avoid visual noise. Prefer a single tag per element (e.g. one "NEW" tag per card).
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'neutral', 'positive', 'info'],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        padding: 'var(--space-4)',
        background: 'rgb(var(--bg-surface))',
      }}
    >
      <Tag variant="brand">NEW</Tag>
      <Tag variant="neutral">NEW</Tag>
      <Tag variant="positive">NEW</Tag>
      <Tag variant="info">NEW</Tag>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'brand',
    children: 'NEW',
  },
};

