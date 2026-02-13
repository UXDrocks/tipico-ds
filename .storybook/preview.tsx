import '../src/styles/fonts.css';
import '../src/styles/tokens.primitives.css';
import '../src/styles/tokens.semantic.css';
import '../src/styles/theme.css';
import '../src/styles/storybook-overrides.css';

import type { Preview } from '@storybook/react';

// Tailwind breakpoints as Storybook viewports – resizes the iframe so media queries work.
const BREAKPOINT_VIEWPORTS = {
  '350': {
    name: '350px (min)',
    styles: { width: '350px', height: '900px' },
    type: 'mobile',
  },
  sm: {
    name: 'sm (640px)',
    styles: { width: '640px', height: '900px' },
    type: 'mobile',
  },
  md: {
    name: 'md (768px)',
    styles: { width: '768px', height: '900px' },
    type: 'tablet',
  },
  lg: {
    name: 'lg (1024px)',
    styles: { width: '1024px', height: '900px' },
    type: 'tablet',
  },
  xl: {
    name: 'xl (1280px)',
    styles: { width: '1280px', height: '900px' },
    type: 'desktop',
  },
  '2xl': {
    name: '2xl (1536px)',
    styles: { width: '1536px', height: '900px' },
    type: 'desktop',
  },
  full: {
    name: 'Auto',
    styles: { width: '100%', height: '900px' },
    type: 'desktop',
  },
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: BREAKPOINT_VIEWPORTS,
      options: BREAKPOINT_VIEWPORTS,
      defaultViewport: 'sm',
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
    viewport: { value: 'sm', isRotated: false },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals?.theme ?? 'light';
      const layout = context.parameters?.layout ?? 'fullscreen';
      const isCentered = layout === 'centered';

      return (
        <div
          className={theme === 'dark' ? 'dark' : undefined}
          style={{
            width: '100%',
            minWidth: 0,
            minHeight: '100vh',
            background: 'rgb(var(--bg))',
            color: 'rgb(var(--fg))',
            boxSizing: 'border-box',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            overflowX: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              minWidth: 0,
              minHeight: '100vh',
              boxSizing: 'border-box',
              display: isCentered ? 'flex' : 'block',
              alignItems: isCentered ? 'flex-start' : undefined,
              justifyContent: isCentered ? 'center' : undefined,
              padding: isCentered ? 'var(--space-8)' : 0,
            }}
          >
            <div
              style={{
                width: '100%',
                minWidth: 0,
                minHeight: '100vh',
                boxSizing: 'border-box',
              }}
            >
              <Story />
            </div>
          </div>
        </div>
      );
    },
  ],
};

export default preview;
