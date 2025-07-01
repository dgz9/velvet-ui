import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@velvet-ui/core';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'body', 'body1', 'body2', 'small', 'caption', 'overline', 'subtitle1', 'subtitle2'],
      description: 'The typography variant',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'muted', 'inherit'],
      description: 'The color of the text',
    },
    gradient: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'success', 'danger', 'info', 'rainbow', 'sunset', 'ocean', 'forest', 'candy', 'metal'],
      description: 'The gradient style for the text',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      description: 'Font weight',
    },
    gutterBottom: {
      control: 'boolean',
      description: 'Add margin bottom',
    },
    noWrap: {
      control: 'boolean',
      description: 'Prevent text wrapping',
    },
    italic: {
      control: 'boolean',
      description: 'Italic style',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="lead">
        Lead text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="body">
        Body text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.
      </Typography>
      <Typography variant="body1">
        Body1 text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.
      </Typography>
      <Typography variant="body2">
        Body2 text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.
      </Typography>
      <Typography variant="small">
        Small text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="caption">
        Caption text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="overline">
        Overline text
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography color="default">Default color</Typography>
      <Typography color="primary">Primary color</Typography>
      <Typography color="secondary">Secondary color</Typography>
      <Typography color="success">Success color</Typography>
      <Typography color="warning">Warning color</Typography>
      <Typography color="danger">Danger color</Typography>
      <Typography color="info">Info color</Typography>
      <Typography color="muted">Muted color</Typography>
    </div>
  ),
};

export const Gradients: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h3" gradient="primary">Primary Gradient</Typography>
      <Typography variant="h3" gradient="secondary">Secondary Gradient</Typography>
      <Typography variant="h3" gradient="success">Success Gradient</Typography>
      <Typography variant="h3" gradient="danger">Danger Gradient</Typography>
      <Typography variant="h3" gradient="info">Info Gradient</Typography>
      <Typography variant="h3" gradient="rainbow">Rainbow Gradient</Typography>
      <Typography variant="h3" gradient="sunset">Sunset Gradient</Typography>
      <Typography variant="h3" gradient="ocean">Ocean Gradient</Typography>
      <Typography variant="h3" gradient="forest">Forest Gradient</Typography>
      <Typography variant="h3" gradient="candy">Candy Gradient</Typography>
      <Typography variant="h3" gradient="metal">Metal Gradient</Typography>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography weight="thin">Thin weight (100)</Typography>
      <Typography weight="light">Light weight (300)</Typography>
      <Typography weight="normal">Normal weight (400)</Typography>
      <Typography weight="medium">Medium weight (500)</Typography>
      <Typography weight="semibold">Semibold weight (600)</Typography>
      <Typography weight="bold">Bold weight (700)</Typography>
      <Typography weight="extrabold">Extrabold weight (800)</Typography>
      <Typography weight="black">Black weight (900)</Typography>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4 border border-border rounded-lg p-4">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, 
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      </Typography>
    </div>
  ),
};

export const SpecialFeatures: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography gutterBottom>
        This text has gutterBottom spacing. Notice the margin below.
      </Typography>
      <div className="border border-border rounded p-2 overflow-hidden">
        <Typography noWrap>
          This text has noWrap enabled. Lorem ipsum dolor sit amet, consectetur adipisicing elit. This very long text will be truncated with ellipsis instead of wrapping to the next line.
        </Typography>
      </div>
      <Typography italic>
        This text is displayed in italic style.
      </Typography>
      <Typography variant="body1" weight="bold" color="primary" italic>
        Combined props: bold, primary color, and italic
      </Typography>
    </div>
  ),
};