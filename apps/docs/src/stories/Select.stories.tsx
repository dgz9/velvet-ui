import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@velvet-ui/core';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'glass', 'underline'],
      description: 'The visual style of the select',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'The color theme of the select',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the select',
    },
    radius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'full'],
      description: 'Border radius of the select',
    },
    labelPlacement: {
      control: 'select',
      options: ['top', 'left', 'inside'],
      description: 'Label placement',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
    },
    clearable: {
      control: 'boolean',
      description: 'Shows clear button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const Default: Story = {
  args: {
    options,
    label: 'Framework',
    placeholder: 'Select a framework',
    labelPlacement: 'inside',
  },
  render: (args) => (
    <div className="w-80">
      <Select {...args} />
    </div>
  ),
};

export const FloatingLabelDemo: Story = {
  render: () => {
    const [values, setValues] = useState({
      empty: '',
      filled: 'react',
      withPlaceholder: ''
    });
    
    return (
      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Floating label behavior (matching Input component)</p>
          <div className="space-y-4 w-80">
            <Select
              options={options}
              label="Empty Field"
              value={values.empty}
              onChange={(value) => setValues(prev => ({ ...prev, empty: value }))}
              labelPlacement="inside"
            />
            <Select
              options={options}
              label="Pre-selected Field"
              value={values.filled}
              onChange={(value) => setValues(prev => ({ ...prev, filled: value }))}
              labelPlacement="inside"
            />
            <Select
              options={options}
              label="With Placeholder"
              placeholder="Choose a framework"
              value={values.withPlaceholder}
              onChange={(value) => setValues(prev => ({ ...prev, withPlaceholder: value }))}
              labelPlacement="inside"
            />
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>• Labels float up when the select is focused, open, or has a value</p>
          <p>• The select box height increases to accommodate the floating label</p>
          <p>• Label turns blue when focused or dropdown is open</p>
        </div>
      </div>
    );
  },
};

export const LabelPlacements: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="space-y-6 w-80">
        <Select
          options={options}
          label="Inside Label (Default)"
          placeholder="Select option"
          value={value}
          onChange={setValue}
          labelPlacement="inside"
        />
        <Select
          options={options}
          label="Top Label"
          placeholder="Select option"
          value={value}
          onChange={setValue}
          labelPlacement="top"
        />
        <div className="w-full">
          <Select
            options={options}
            label="Left Label"
            placeholder="Select option"
            value={value}
            onChange={setValue}
            labelPlacement="left"
          />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select
        options={options}
        size="small"
        label="Small select"
        placeholder="Small size"
        labelPlacement="inside"
      />
      <Select
        options={options}
        size="medium"
        label="Medium select"
        placeholder="Medium size"
        labelPlacement="inside"
      />
      <Select
        options={options}
        size="large"
        label="Large select"
        placeholder="Large size"
        labelPlacement="inside"
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select options={options} variant="solid" label="Solid" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} variant="outline" label="Outline" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} variant="ghost" label="Ghost" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} variant="glass" label="Glass" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} variant="underline" label="Underline" placeholder="Select option" labelPlacement="inside" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select options={options} color="primary" label="Primary" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} color="secondary" label="Secondary" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} color="success" label="Success" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} color="warning" label="Warning" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} color="danger" label="Danger" placeholder="Select option" labelPlacement="inside" />
      <Select options={options} color="info" label="Info" placeholder="Select option" labelPlacement="inside" />
    </div>
  ),
};

export const WithClearable: Story = {
  render: () => {
    const [value, setValue] = useState('react');
    
    return (
      <div className="w-80">
        <Select
          options={options}
          label="Clearable Select"
          placeholder="Select a framework"
          value={value}
          onChange={setValue}
          clearable
          labelPlacement="inside"
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Current value: {value || 'none'}
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    options,
    label: 'Disabled select',
    value: 'react',
    disabled: true,
    labelPlacement: 'inside',
  },
  render: (args) => (
    <div className="w-80">
      <Select {...args} />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: '',
      language: 'en',
      timezone: 'utc',
      theme: ''
    });
    
    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
    ];
    
    const languages = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
      { value: 'it', label: 'Italian' },
    ];
    
    const timezones = [
      { value: 'utc', label: 'UTC' },
      { value: 'est', label: 'Eastern Time' },
      { value: 'cst', label: 'Central Time' },
      { value: 'mst', label: 'Mountain Time' },
      { value: 'pst', label: 'Pacific Time' },
    ];
    
    const themes = [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'auto', label: 'System' },
    ];

    return (
      <form className="space-y-4 w-96 p-6 bg-[var(--color-background)] rounded-xl shadow-lg border border-[rgb(var(--color-border))]">
        <h2 className="text-2xl font-bold mb-6">Preferences</h2>
        <Select
          options={countries}
          label="Country"
          placeholder="Select your country"
          value={formData.country}
          onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
          labelPlacement="inside"
        />
        <Select
          options={languages}
          label="Language"
          value={formData.language}
          onChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
          labelPlacement="inside"
        />
        <Select
          options={timezones}
          label="Timezone"
          value={formData.timezone}
          onChange={(value) => setFormData(prev => ({ ...prev, timezone: value }))}
          labelPlacement="inside"
          variant="glass"
        />
        <Select
          options={themes}
          label="Theme"
          placeholder="Choose a theme"
          value={formData.theme}
          onChange={(value) => setFormData(prev => ({ ...prev, theme: value }))}
          labelPlacement="inside"
          clearable
        />
      </form>
    );
  },
};