import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast, Button } from '@velvet-ui/core';

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'],
      description: 'Position of toast notifications',
    },
    maxToasts: {
      control: 'number',
      description: 'Maximum number of toasts to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = ({ position }: { position?: string }) => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-4 p-8">
      <Button
        onClick={() =>
          addToast({
            title: 'Default Toast',
            description: 'This is a default toast notification',
          })
        }
      >
        Default Toast
      </Button>
      
      <Button
        variant="secondary"
        onClick={() =>
          addToast({
            variant: 'success',
            title: 'Success!',
            description: 'Your changes have been saved successfully',
          })
        }
      >
        Success Toast
      </Button>
      
      <Button
        variant="secondary"
        onClick={() =>
          addToast({
            variant: 'error',
            title: 'Error',
            description: 'Something went wrong. Please try again.',
          })
        }
      >
        Error Toast
      </Button>
      
      <Button
        variant="secondary"
        onClick={() =>
          addToast({
            variant: 'warning',
            title: 'Warning',
            description: 'This action may have consequences',
          })
        }
      >
        Warning Toast
      </Button>
      
      <Button
        variant="secondary"
        onClick={() =>
          addToast({
            variant: 'info',
            title: 'Information',
            description: 'Here is some useful information',
          })
        }
      >
        Info Toast
      </Button>
      
      <Button
        variant="ghost"
        onClick={() =>
          addToast({
            title: 'With Action',
            description: 'This toast has an action button',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo clicked'),
            },
          })
        }
      >
        Toast with Action
      </Button>
      
      <Button
        variant="ghost"
        onClick={() =>
          addToast({
            title: 'Persistent Toast',
            description: 'This toast will not auto-dismiss',
            duration: Infinity,
          })
        }
      >
        Persistent Toast
      </Button>
      
      <Button
        variant="ghost"
        onClick={() => {
          for (let i = 0; i < 5; i++) {
            setTimeout(() => {
              addToast({
                title: `Toast ${i + 1}`,
                description: 'Multiple toasts stack nicely',
              });
            }, i * 200);
          }
        }}
      >
        Multiple Toasts
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <ToastProvider {...args}>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const TopLeft: Story = {
  args: {
    position: 'top-left',
  },
  render: (args) => (
    <ToastProvider {...args}>
      <ToastDemo position={args.position} />
    </ToastProvider>
  ),
};

export const TopCenter: Story = {
  args: {
    position: 'top-center',
  },
  render: (args) => (
    <ToastProvider {...args}>
      <ToastDemo position={args.position} />
    </ToastProvider>
  ),
};

export const BottomCenter: Story = {
  args: {
    position: 'bottom-center',
  },
  render: (args) => (
    <ToastProvider {...args}>
      <ToastDemo position={args.position} />
    </ToastProvider>
  ),
};

export const LimitedToasts: Story = {
  args: {
    maxToasts: 3,
  },
  render: (args) => (
    <ToastProvider {...args}>
      <div className="p-8">
        <p className="mb-4 text-gray-600 dark:text-gray-400">Maximum 3 toasts will be shown at once</p>
        <ToastDemo />
      </div>
    </ToastProvider>
  ),
};

export const InteractiveDemo: Story = {
  render: () => (
    <ToastProvider>
      <div className="p-8 space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Toast Features</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Swipe or drag to dismiss</li>
            <li>• Click X to close</li>
            <li>• Progress bar shows remaining time</li>
            <li>• Toasts stack with smooth animations</li>
            <li>• Mac OS-style spring animations</li>
          </ul>
        </div>
        <ToastDemo />
      </div>
    </ToastProvider>
  ),
};