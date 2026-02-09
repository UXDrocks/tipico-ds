import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { ICON_OPTIONS, type IconOption, iconFromOption } from './icons';

const meta = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Single list row for settings / navigation, built on list tokens.

### Booleans / options

- **showLeading**: show/hide the leading icon.
- **showDescription**: show/hide the secondary line.
- **showMeta**: show/hide the right-aligned meta label.
- **showChevron**: show/hide the chevron.
- **filled**: toggles \`bg-list-default\` background.
- **bordered**: toggles \`border-standard\` outline.

Use this for items like "Sports limits", "Account", etc.
        `.trim(),
      },
    },
  },
  argTypes: {
    showLeading: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    showMeta: { control: 'boolean' },
    showChevron: { control: 'boolean' },
    filled: { control: 'boolean' },
    bordered: { control: 'boolean' },
    primaryIcon: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Primary leading icon',
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

type ListStoryArgs = {
  primaryIcon: IconOption;
};

export const Overview: Story<ListStoryArgs> = {
  args: {
    title: 'Sports limits (optional)',
    description: 'Configure optional deposit limits for your sports account.',
    meta: 'Info',
    showLeading: true,
    showDescription: true,
    showMeta: true,
    showChevron: true,
    filled: true,
    bordered: true,
    primaryIcon: 'AlertCircle',
  },
  render: (rawArgs) => {
    const { primaryIcon, ...rest } = rawArgs as any;
    const primaryNode = iconFromOption(primaryIcon, 24);

    const leading =
      primaryNode ? (
        <div className="tipico-list__leading-icons">
          {primaryNode && (
            <span className="tipico-list__leading-icon tipico-list__leading-icon--primary">
              {primaryNode}
            </span>
          )}
        </div>
      ) : undefined;

    return (
      <div
        style={{
          minWidth: 320,
          maxWidth: 480,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <List {...(rest as any)} leading={leading} />
        <List {...(rest as any)} leading={leading} filled={false} bordered />
        <List {...(rest as any)} leading={leading} filled bordered={false} />
        <List {...(rest as any)} leading={leading} filled={false} bordered={false} />
      </div>
    );
  },
};

export const Playground: Story<ListStoryArgs> = {
  args: {
    title: 'Title',
    description: 'Description',
    meta: 'Info',
    showLeading: true,
    showDescription: true,
    showMeta: true,
    showChevron: true,
    filled: true,
    bordered: true,
    primaryIcon: 'AlertCircle',
  },
  render: (rawArgs) => {
    const { primaryIcon, ...rest } = rawArgs as any;
    const primaryNode = iconFromOption(primaryIcon, 24);

    const leading =
      primaryNode ? (
        <div className="tipico-list__leading-icons">
          {primaryNode && (
            <span className="tipico-list__leading-icon tipico-list__leading-icon--primary">
              {primaryNode}
            </span>
          )}
        </div>
      ) : undefined;

    return (
      <div
        style={{
          minWidth: 320,
          maxWidth: 480,
        }}
      >
        <List {...(rest as any)} leading={leading} />
      </div>
    );
  },
};

