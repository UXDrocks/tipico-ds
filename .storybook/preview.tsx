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
      const viewportWidth = context.globals?.viewportWidth ?? '640';
      const layout = context.parameters?.layout ?? 'centered';
      const isFullscreen = layout === 'fullscreen';

      const numericWidth =
        isFullscreen || viewportWidth === 'full'
          ? undefined
          : Number.parseInt(viewportWidth as string, 10) || undefined;

      return (
        <div
          className={theme === 'dark' ? 'dark' : undefined}
          style={{
            minHeight: '100vh',
            background: 'rgb(var(--bg))',
            color: 'rgb(var(--fg))',
            padding: isFullscreen ? 0 : 24,
            boxSizing: 'border-box',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            display: 'flex',
            alignItems: isFullscreen ? 'stretch' : 'flex-start',
            justifyContent: isFullscreen ? 'stretch' : 'center',
          }}
        >
          <div
            style={{
              width: numericWidth ? `${numericWidth}px` : '100%',
              maxWidth: '100%',
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
