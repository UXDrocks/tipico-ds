import type { Meta, StoryObj } from '@storybook/react';
import { LoginScreen } from './LoginScreen';

const meta = {
  title: 'Screens/LoginScreen',
  component: LoginScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        component: `
Mobile-first login screen with email, password, optional forgot-password and sign-up links, and submit handler.

## Usage

\`\`\`tsx
import { LoginScreen } from './LoginScreen';

<LoginScreen
  title="Log in"
  subtitle="Enter your details"
  forgotPasswordHref="/forgot"
  signUpHref="/signup"
  onSubmit={(email, password) => { /* call API */ }}
  submitError={errorMessage}
/>
\`\`\`

**Props:** \`header\` (optional node, e.g. logo), \`title\`, \`subtitle\`, \`forgotPasswordHref\`, \`signUpHref\`, \`onSubmit(email, password)\`, \`submitError\`.

## Rules

- Use on mobile or narrow viewports; layout is responsive with max-width content.
- Provide \`onSubmit\`; client-side validation runs for required email/password and email format.
- Set \`submitError\` when the server returns an auth error.
- Use \`header\` for app logo or branding; omit for minimal layout.
        `.trim(),
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    forgotPasswordHref: { control: 'text' },
    signUpHref: { control: 'text' },
    submitError: { control: 'text' },
  },
} satisfies Meta<typeof LoginScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Log in',
    subtitle: 'Enter your details to access your account',
    forgotPasswordHref: '#forgot',
    signUpHref: '#signup',
    onSubmit: (email: string, password: string) => {
      console.log('Login', { email, password });
    },
  },
};

export const WithLogo: Story = {
  args: {
    ...Default.args,
    header: (
      <span
        style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: 'rgb(var(--primary))',
          letterSpacing: '-0.02em',
        }}
      >
        Tipico
      </span>
    ),
    title: 'Welcome back',
    subtitle: 'Log in to your account to continue',
  },
};

export const WithSubmitError: Story = {
  args: {
    ...Default.args,
    submitError: 'Invalid email or password. Please try again.',
  },
};
