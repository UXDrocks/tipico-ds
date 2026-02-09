import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from './TabBar';
import type { TabBarTab } from './TabBar';

const defaultTabSets: Record<number, TabBarTab[]> = {
  2: [{ id: 'active', label: 'Active' }, { id: 'inactive', label: 'Inactive' }],
  3: [{ id: 'one', label: 'Tab 1' }, { id: 'two', label: 'Tab 2' }, { id: 'three', label: 'Tab 3' }],
  4: [
    { id: 'one', label: 'Tab 1' },
    { id: 'two', label: 'Tab 2' },
    { id: 'three', label: 'Tab 3' },
    { id: 'four', label: 'Tab 4' },
  ],
  5: [
    { id: 'one', label: 'Tab 1' },
    { id: 'two', label: 'Tab 2' },
    { id: 'three', label: 'Tab 3' },
    { id: 'four', label: 'Tab 4' },
    { id: 'five', label: 'Tab 5' },
  ],
};

const meta = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Segmented tab bar with a raised active segment and flush inactive segments. Use for 2–5 options in a single row.

## Usage

\`\`\`tsx
import { TabBar } from './TabBar';

const [activeId, setActiveId] = useState('one');
const tabs = [
  { id: 'one', label: 'Tab 1' },
  { id: 'two', label: 'Tab 2' },
];

<TabBar tabs={tabs} activeId={activeId} onSelect={setActiveId} aria-label="Section tabs" />
\`\`\`

**Props:** \`tabs\` (\`{ id: string; label: string }[]\`), \`activeId\`, \`onSelect(id)\`, \`aria-label\` (optional).

## Rules

- Use **2–5 tabs**; more than 5 can be hard to scan. Prefer a dropdown or overflow for many options.
- Keep labels short (one or two words).
- Ensure \`activeId\` matches one of \`tabs[].id\` so one tab is always active.
- Provide \`aria-label\` when the tab list is not labeled by visible context.
        `.trim(),
      },
    },
  },
  argTypes: {
    tabCount: {
      control: 'select',
      options: [2, 3, 4, 5],
      description: 'Number of tabs to show',
    },
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

function TabBarWithState({ tabCount = 2 }: { tabCount?: number }) {
  const tabs = defaultTabSets[tabCount] ?? defaultTabSets[2];
  const [activeId, setActiveId] = useState(tabs[0].id);
  return (
    <TabBar
      tabs={tabs}
      activeId={activeId}
      onSelect={setActiveId}
      aria-label="Example tabs"
    />
  );
}

export const Default: Story = {
  args: { tabCount: 2 },
  render: (args) => <TabBarWithState tabCount={args.tabCount} />,
};

export const TwoTabs: Story = {
  render: () => <TabBarWithState tabCount={2} />,
};

export const ThreeTabs: Story = {
  render: () => <TabBarWithState tabCount={3} />,
};

export const FourTabs: Story = {
  render: () => <TabBarWithState tabCount={4} />,
};

export const FiveTabs: Story = {
  render: () => <TabBarWithState tabCount={5} />,
};

export const WithDropdown: Story = {
  args: { tabCount: 2 },
  render: (args) => <TabBarWithState tabCount={args.tabCount} />,
};
