import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@velvet-ui/core';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'soft'],
      description: 'The visual style of the badge',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'The color scheme of the badge',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the badge',
    },
    radius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'full'],
      description: 'The border radius of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="soft">Soft</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        <Badge color="default">Default</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="info">Info</Badge>
      </div>
      <div className="flex flex-wrap gap-3">
        <Badge variant="outline" color="primary">Outline Primary</Badge>
        <Badge variant="outline" color="secondary">Outline Secondary</Badge>
        <Badge variant="outline" color="success">Outline Success</Badge>
        <Badge variant="outline" color="warning">Outline Warning</Badge>
        <Badge variant="outline" color="danger">Outline Danger</Badge>
        <Badge variant="outline" color="info">Outline Info</Badge>
      </div>
      <div className="flex flex-wrap gap-3">
        <Badge variant="soft" color="primary">Soft Primary</Badge>
        <Badge variant="soft" color="secondary">Soft Secondary</Badge>
        <Badge variant="soft" color="success">Soft Success</Badge>
        <Badge variant="soft" color="warning">Soft Warning</Badge>
        <Badge variant="soft" color="danger">Soft Danger</Badge>
        <Badge variant="soft" color="info">Soft Info</Badge>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge radius="none">None</Badge>
      <Badge radius="small">Small</Badge>
      <Badge radius="medium">Medium</Badge>
      <Badge radius="large">Large</Badge>
      <Badge radius="full">Full</Badge>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>Status:</span>
        <Badge variant="soft" color="success">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Version:</span>
        <Badge variant="outline" color="info">v1.0.0</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Environment:</span>
        <Badge variant="solid" color="warning">Staging</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Feature:</span>
        <Badge variant="soft" color="primary" radius="full">New</Badge>
      </div>
    </div>
  ),
};