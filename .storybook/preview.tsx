import '../src/styles/fonts.css';
import '../src/styles/tokens.primitives.css';
import '../src/styles/tokens.semantic.css';
import '../src/styles/tokens.light.css';
import '../src/styles/tokens.dark.css';
import '../src/styles/theme.css';
import '../src/styles/storybook-overrides.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    // Use fullscreen so stories can take the full available width/height.
    layout: 'fullscreen',
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
    viewportWidth: {
      description: 'Preview width (Tailwind breakpoints)',
      toolbar: {
        title: 'Width',
        icon: 'sidebaralt',
        items: [
          { value: '350', title: '350px (min)' },
          { value: '640', title: 'sm (640px)' },
          { value: '768', title: 'md (768px)' },
          { value: '1024', title: 'lg (1024px)' },
          { value: '1280', title: 'xl (1280px)' },
          { value: '1536', title: '2xl (1536px)' },
          { value: 'full', title: 'Auto' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    viewportWidth: '640',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals?.theme ?? 'light';
      // We keep viewportWidth for future use, but the preview always stretches full width now.

      return (
        <div
          className={theme === 'dark' ? 'dark' : undefined}
          style={{
            minHeight: '100vh',
            background: 'rgb(var(--bg))',
            color: 'rgb(var(--fg))',
            boxSizing: 'border-box',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '100%',
              minHeight: '100vh',
            }}
          >
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
