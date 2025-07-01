import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@velvet-ui/core';
import '../src/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#111827',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const background = context.globals.backgrounds?.value;
      const isDark = background === '#111827';
      
      React.useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
      }, [isDark]);
      
      return (
        <ThemeProvider defaultTheme={isDark ? 'dark' : 'light'}>
          <div className="p-4">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;