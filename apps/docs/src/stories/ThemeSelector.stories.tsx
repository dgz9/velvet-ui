import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSelector } from '@velvet-ui/core';

const meta = {
  title: 'Components/ThemeSelector',
  component: ThemeSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the theme selector',
    },
    showLabels: {
      control: 'boolean',
      description: 'Whether to show text labels for each theme option',
    },
  },
} satisfies Meta<typeof ThemeSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    showLabels: false,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    showLabels: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    showLabels: false,
  },
};

export const WithLabels: Story = {
  args: {
    size: 'medium',
    showLabels: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm text-foreground-secondary w-20">Small:</span>
        <ThemeSelector size="small" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-foreground-secondary w-20">Medium:</span>
        <ThemeSelector size="medium" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-foreground-secondary w-20">Large:</span>
        <ThemeSelector size="large" />
      </div>
    </div>
  ),
};

export const AllSizesWithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ThemeSelector size="small" showLabels />
      <ThemeSelector size="medium" showLabels />
      <ThemeSelector size="large" showLabels />
    </div>
  ),
};