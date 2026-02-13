import type { Meta, StoryObj } from '@storybook/react';
import { Article } from './Article';
import { Link } from './Link';
import { InputField } from './InputField';

const meta = {
  title: 'Components/Article',
  component: Article,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Section wrapper for screen content (e.g. \"Tipico deposit limits\" on the Sports limits screen).
Unifies headline and body typography across pages.

### Recommended usage

- Use **eyebrow** for small context labels if needed (optional).
- Use **title** for the main section headline.
- Use **description** for one or two lines of supporting copy.
- Render form fields or actions inside \`children\`.
        `.trim(),
      },
    },
  },
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
      }}
    >
      <Article
        title="Tipico deposit limits"
        description={
          <>
            These apply in addition to the cross-operator LUGAS deposit limit. The lowest limit will
            be applied. Or you can{' '}
            <Link href="#delete">delete all Tipico deposit limits</Link>.
          </>
        }
      >
        <InputField label="Monthly" placeholder="No limit" />
        <InputField label="Weekly" placeholder="No limit" />
        <InputField label="Daily" placeholder="No limit" />
      </Article>

      <Article
        eyebrow="Account"
        title="Personal data"
        description="Make sure your personal information is always up to date."
      >
        <InputField label="First name" placeholder="Enter first name" />
        <InputField label="Last name" placeholder="Enter last name" />
      </Article>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    eyebrow: '',
    title: 'Section title',
    description: 'Supporting copy for this section.',
  },
  render: (args) => (
    <div
      style={{
        width: '100%',
      }}
    >
      <Article {...args} />
    </div>
  ),
};

