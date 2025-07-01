import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@velvet-ui/core';
import { useState } from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'glass', 'glow'],
      description: 'The visual style of the button',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'The color scheme of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    loadingText: {
      control: 'text',
      description: 'Text to show when loading',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    beginContent: {
      control: 'text',
      description: 'Content to display before the button text',
    },
    endContent: {
      control: 'text',
      description: 'Content to display after the button text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'solid',
    color: 'primary',
  },
};

export const Solid: Story = {
  args: {
    children: 'Solid Button',
    variant: 'solid',
    color: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    color: 'primary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    color: 'primary',
  },
};

export const Glass: Story = {
  args: {
    children: 'Glass Button',
    variant: 'glass',
    color: 'primary',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Glow: Story = {
  args: {
    children: 'Glow Button',
    variant: 'glow',
    color: 'primary',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="info">Info</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: 'Submit',
    loading: true,
    loadingText: 'Submitting...',
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button loading size="small">Loading</Button>
        <Button loading size="medium">Loading</Button>
        <Button loading size="large">Loading</Button>
      </div>
      <div className="flex gap-4">
        <Button loading loadingText="Saving..." size="small">Save</Button>
        <Button loading loadingText="Saving..." size="medium">Save</Button>
        <Button loading loadingText="Saving..." size="large">Save</Button>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const RippleEffect: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Click buttons to see ripple animation</p>
        <div className="flex gap-4">
          <Button variant="solid" color="primary">Solid Ripple</Button>
          <Button variant="outline" color="secondary">Outline Ripple</Button>
          <Button variant="ghost" color="success">Ghost Ripple</Button>
          <Button variant="glass" color="info">Glass Ripple</Button>
          <Button variant="glow" color="danger">Glow Ripple</Button>
        </div>
      </div>
    </div>
  ),
};

export const AllVariantsAndColors: Story = {
  render: () => {
    const variants = ['solid', 'outline', 'ghost', 'glass', 'glow'] as const;
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const;

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-medium text-[var(--color-foreground-secondary)] px-4 py-2">Variant</th>
              {colors.map(color => (
                <th key={color} className="text-center text-sm font-medium text-[var(--color-foreground-secondary)] px-4 py-2 capitalize">
                  {color}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map(variant => (
              <tr key={variant}>
                <td className="text-sm font-medium text-[var(--color-foreground-secondary)] pr-4 py-4 capitalize">{variant}</td>
                {colors.map(color => (
                  <td key={color} className="text-center px-2 py-4">
                    <div className="flex justify-center">
                      <Button variant={variant} color={color} size="medium">
                        Button
                      </Button>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <Button 
          variant="solid" 
          color="primary"
          beginContent={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          }
        >
          Continue
        </Button>
        <Button 
          variant="solid" 
          color="success"
          endContent={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          }
        >
          Complete
        </Button>
        <Button 
          variant="outline" 
          color="danger"
          beginContent={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          }
        >
          Delete
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button 
          size="small"
          variant="solid" 
          color="primary"
          beginContent={
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          }
        >
          Small
        </Button>
        <Button 
          size="medium"
          variant="solid" 
          color="secondary"
          beginContent={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          }
        >
          Medium
        </Button>
        <Button 
          size="large"
          variant="solid" 
          color="success"
          beginContent={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
            </svg>
          }
        >
          Large
        </Button>
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: function Interactive() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCount(count + 1);
      setLoading(false);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg">Clicked: {count} times</p>
        <Button 
          onClick={handleClick} 
          loading={loading}
          loadingText="Processing..."
          color="primary"
        >
          Click me
        </Button>
      </div>
    );
  },
};