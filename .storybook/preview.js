import { jsx as _jsx } from "react/jsx-runtime";
import '../src/styles/fonts.css';
import '../src/styles/tokens.primitives.css';
import '../src/styles/tokens.light.css';
import '../src/styles/tokens.dark.css';
import '../src/styles/theme.css';
var preview = {
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                icon: 'circlehollow',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        function (Story, context) {
            var theme = context.globals.theme;
            return (_jsx("div", { className: theme === 'dark' ? 'dark' : undefined, style: {
                    minHeight: '100vh',
                    background: 'rgb(var(--bg))',
                    color: 'rgb(var(--fg))',
                    padding: 24,
                    boxSizing: 'border-box',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }, children: _jsx(Story, {}) }));
        },
    ],
};
export default preview;
