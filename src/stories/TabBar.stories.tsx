import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from './TabBar';
import type { TabBarTab } from './TabBar';
import { ICON_OPTIONS, type IconOption, iconFromOption } from './icons';

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

### Variant / usage overview

| Configuration | Description                          |
|--------------|--------------------------------------|
| 2 tabs       | Binary choice (e.g. Active / Inactive) |
| 3–5 tabs     | Small set of sections in one screen  |

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

**Props:** \`tabs\` (\`{ id: string; label: string; iconLeft?: React.ReactNode }[]\`), \`activeId\`, \`onSelect(id)\`, \`aria-label\` (optional).

## Rules

- Use **2–5 tabs**; more than 5 can be hard to scan. Prefer a dropdown or overflow for many options.
- Keep labels short (one or two words).
- Ensure \`activeId\` matches one of \`tabs[].id\` so one tab is always active.
- Provide \`aria-label\` when the tab list is not labeled by visible context.
- Use \`iconLeft\` on the component for a shared icon on all tabs, or \`iconLeft\` on individual \`tabs[]\` items for per-tab icons.
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

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        minWidth: 320,
      }}
    >
      <TabBarWithState tabCount={2} />
      <TabBarWithState tabCount={3} />
      <TabBarWithState tabCount={4} />
      <TabBarWithState tabCount={5} />
    </div>
  ),
};

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

type WithDropdownArgs = {
  tabCount?: number;
  iconTab1?: IconOption;
  iconTab2?: IconOption;
  iconTab3?: IconOption;
  iconTab4?: IconOption;
  iconTab5?: IconOption;
};

function TabBarPerTabIcons({
  tabCount = 3,
  iconTab1 = 'XCircle',
  iconTab2 = 'XCircle',
  iconTab3 = 'XCircle',
  iconTab4 = 'none',
  iconTab5 = 'none',
}: WithDropdownArgs) {
  const baseTabs = defaultTabSets[tabCount] ?? defaultTabSets[3];
  const iconOptions: IconOption[] = [iconTab1, iconTab2, iconTab3, iconTab4, iconTab5];

  const tabsWithIcons: TabBarTab[] = baseTabs.map((tab, index) => ({
    ...tab,
    iconLeft: iconFromOption(iconOptions[index] ?? 'none', 14),
  }));

  const [activeId, setActiveId] = useState(tabsWithIcons[0]?.id ?? baseTabs[0].id);

  return (
    <TabBar
      tabs={tabsWithIcons}
      activeId={activeId}
      onSelect={setActiveId}
      aria-label="Tabs with per-tab icons"
    />
  );
}

export const WithIcon: Story = {
  args: {
    tabCount: 3,
    iconTab1: 'XCircle',
    iconTab2: 'XCircle',
    iconTab3: 'XCircle',
    iconTab4: 'none',
    iconTab5: 'none',
  },
  argTypes: {
    iconTab1: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon for first tab (left)',
    },
    iconTab2: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon for second tab (left)',
    },
    iconTab3: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon for third tab (left)',
    },
    iconTab4: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon for fourth tab (left)',
    },
    iconTab5: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Icon for fifth tab (left)',
    },
  },
  render: (args) => <TabBarPerTabIcons {...(args as WithDropdownArgs)} />,
};
