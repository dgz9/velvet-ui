import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@velvet-ui/core';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'error', 'success'],
      description: 'The visual style of the input',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the input',
    },
    label: {
      control: 'text',
      description: 'Floating label text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    success: {
      control: 'text',
      description: 'Success message',
    },
    helperText: {
      control: 'text',
      description: 'Helper text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const FloatingLabelDemo: Story = {
  render: () => {
    const [values, setValues] = useState({
      empty: '',
      filled: 'john@example.com',
      withPlaceholder: ''
    });
    
    return (
      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Floating label behavior</p>
          <div className="space-y-4 w-80">
            <Input
              label="Empty Field"
              value={values.empty}
              onChange={(e) => setValues(prev => ({ ...prev, empty: e.target.value }))}
            />
            <Input
              label="Pre-filled Field"
              value={values.filled}
              onChange={(e) => setValues(prev => ({ ...prev, filled: e.target.value }))}
            />
            <Input
              label="With Placeholder"
              placeholder="Enter your email"
              value={values.withPlaceholder}
              onChange={(e) => setValues(prev => ({ ...prev, withPlaceholder: e.target.value }))}
            />
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>• Labels float up when the input is focused or has a value</p>
          <p>• Placeholders only show when the label has floated</p>
          <p>• No overlap between label and placeholder text</p>
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input variant="default" label="Default Input" placeholder="Enter text" />
      <Input variant="glass" label="Glass Input" placeholder="Enter text" />
      <Input variant="error" label="Error Input" placeholder="Enter text" defaultValue="Invalid input" />
      <Input variant="success" label="Success Input" placeholder="Enter text" defaultValue="Valid input" />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Please enter a valid email address',
    defaultValue: 'invalid@email',
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const WithSuccess: Story = {
  args: {
    label: 'Username',
    success: 'Username is available',
    defaultValue: 'johndoe',
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="small" label="Small input" placeholder="Small size" />
      <Input size="medium" label="Medium input" placeholder="Medium size" />
      <Input size="large" label="Large input" placeholder="Large size" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const AllInputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input type="text" label="Text Input" placeholder="Enter text" />
      <Input type="email" label="Email Input" placeholder="name@example.com" />
      <Input type="password" label="Password Input" placeholder="Enter password" />
      <Input type="number" label="Number Input" placeholder="123" />
      <Input type="tel" label="Phone Input" placeholder="+1 (555) 000-0000" />
      <Input type="url" label="URL Input" placeholder="https://example.com" />
      <Input type="search" label="Search Input" placeholder="Search..." />
      <Input type="date" label="Date Input" />
      <Input type="time" label="Time Input" />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const emailError = email && !email.includes('@') ? 'Please enter a valid email' : '';
    const passwordError = password && password.length < 8 ? 'Password must be at least 8 characters' : '';
    const passwordSuccess = password.length >= 8 ? 'Strong password!' : '';
    
    return (
      <div className="space-y-4 w-80">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          success={passwordSuccess}
          helperText="Must be at least 8 characters"
        />
      </div>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [variant, setVariant] = useState<'default' | 'glass' | 'error' | 'success'>('default');
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState('');
    
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as any)}
            className="px-3 py-2 rounded border"
          >
            <option value="default">Default</option>
            <option value="glass">Glass</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as any)}
            className="px-3 py-2 rounded border"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            Disabled
          </label>
        </div>
        
        <div className="w-80">
          <Input
            variant={variant}
            size={size}
            disabled={disabled}
            label="Interactive Input"
            placeholder="Type something..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={variant === 'error' ? 'This is an error message' : undefined}
            success={variant === 'success' ? 'This is a success message' : undefined}
            helperText="This input responds to the controls above"
          />
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      website: ''
    });
    
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData(prev => ({ ...prev, [field]: value }));
      
      // Simple validation
      const newErrors = { ...errors };
      if (field === 'email' && value && !value.includes('@')) {
        newErrors.email = 'Invalid email address';
      } else if (field === 'email') {
        delete newErrors.email;
      }
      
      if (field === 'password' && value && value.length < 8) {
        newErrors.password = 'Password too short';
      } else if (field === 'password') {
        delete newErrors.password;
      }
      
      setErrors(newErrors);
    };

    return (
      <form className="space-y-4 w-96 p-6 bg-[var(--color-background)] rounded-xl shadow-lg border border-[rgb(var(--color-border))]">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange('firstName')}
          />
          <Input
            label="Last Name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange('lastName')}
          />
        </div>
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter secure password"
          value={formData.password}
          onChange={handleChange('password')}
          error={errors.password}
          helperText="Must be at least 8 characters"
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={handleChange('phone')}
        />
        <Input
          label="Website"
          type="url"
          placeholder="https://example.com"
          value={formData.website}
          onChange={handleChange('website')}
          variant="glass"
        />
      </form>
    );
  },
};