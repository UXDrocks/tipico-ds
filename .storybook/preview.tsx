import '../src/styles/fonts.css';
import '../src/styles/tokens.primitives.css';
import '../src/styles/tokens.semantic.css';
import '../src/styles/tokens.light.css';
import '../src/styles/tokens.dark.css';
import '../src/styles/theme.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'System', ['*'],
          'Components', ['*'],
          'Screens', ['*'],
          'Examples', ['*'],
          'Icons', ['*'],
          '*',
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals?.theme ?? 'light';
      return (
        <div
          className={theme === 'dark' ? 'dark' : undefined}
          style={{
            minHeight: '100vh',
            background: 'rgb(var(--bg))',
            color: 'rgb(var(--fg))',
            padding: 24,
            boxSizing: 'border-box',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
