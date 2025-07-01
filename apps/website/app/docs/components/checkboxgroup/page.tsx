'use client'

import { CheckboxGroup, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb, Button, Chip } from '@velvet-ui/core'
import { useState } from 'react'

export default function CheckboxGroupPage() {
  const [selectedValues, setSelectedValues] = useState<string[]>(['option1'])
  const [preferences, setPreferences] = useState<string[]>(['email'])
  const [features, setFeatures] = useState<string[]>([])

  const basicOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  const notificationOptions = [
    { value: 'email', label: 'Email notifications' },
    { value: 'sms', label: 'SMS notifications' },
    { value: 'push', label: 'Push notifications' },
    { value: 'newsletter', label: 'Weekly newsletter' },
  ]

  const featureOptions = [
    { value: 'analytics', label: 'Advanced Analytics', disabled: false },
    { value: 'export', label: 'Export Data' },
    { value: 'api', label: 'API Access', disabled: true },
    { value: 'support', label: 'Priority Support' },
    { value: 'training', label: 'Online Training' },
  ]

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'CheckboxGroup' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">CheckboxGroup</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A group of checkboxes for selecting multiple options from a list.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { CheckboxGroup } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            A simple checkbox group with controlled state.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CheckboxGroup
                options={basicOptions}
                value={selectedValues}
                onChange={setSelectedValues}
              />
              <Typography variant="caption" className="mt-4 text-foreground-secondary">
                Selected: {selectedValues.join(', ') || 'None'}
              </Typography>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [selectedValues, setSelectedValues] = useState<string[]>(['option1'])

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

<CheckboxGroup
  options={options}
  value={selectedValues}
  onChange={setSelectedValues}
/>`}</CodeBlock>
        </div>

        {/* With Label and Description */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Label and Description</Typography>
          <Typography variant="body" className="mb-4">
            Add a label and description to provide context for the checkbox group.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CheckboxGroup
                label="Notification Preferences"
                description="Choose how you want to receive notifications"
                options={notificationOptions}
                value={preferences}
                onChange={setPreferences}
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CheckboxGroup
  label="Notification Preferences"
  description="Choose how you want to receive notifications"
  options={notificationOptions}
  value={preferences}
  onChange={setPreferences}
/>`}</CodeBlock>
        </div>

        {/* Orientations */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Orientations</Typography>
          <Typography variant="body" className="mb-4">
            Display checkboxes vertically or horizontally.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              <div>
                <Typography variant="caption" className="mb-3 text-foreground-secondary">
                  Vertical (default)
                </Typography>
                <CheckboxGroup
                  options={basicOptions}
                  orientation="vertical"
                />
              </div>
              
              <div>
                <Typography variant="caption" className="mb-3 text-foreground-secondary">
                  Horizontal
                </Typography>
                <CheckboxGroup
                  options={basicOptions}
                  orientation="horizontal"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CheckboxGroup
  options={options}
  orientation="vertical"  // default
/>

<CheckboxGroup
  options={options}
  orientation="horizontal"
/>`}</CodeBlock>
        </div>

        {/* Colors and Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors and Variants</Typography>
          <Typography variant="body" className="mb-4">
            Customize the appearance of all checkboxes in the group.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <CheckboxGroup
                label="Primary Color"
                options={basicOptions.slice(0, 2)}
                color="primary"
                value={['option1']}
              />
              
              <CheckboxGroup
                label="Success Color with Outline Variant"
                options={basicOptions.slice(0, 2)}
                color="success"
                variant="outline"
                value={['option2']}
              />
              
              <CheckboxGroup
                label="Danger Color"
                options={basicOptions.slice(0, 2)}
                color="danger"
                value={['option1', 'option2']}
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CheckboxGroup
  label="Primary Color"
  options={options}
  color="primary"
/>

<CheckboxGroup
  label="Success Color with Outline Variant"
  options={options}
  color="success"
  variant="outline"
/>

<CheckboxGroup
  label="Danger Color"
  options={options}
  color="danger"
/>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Control the size of all checkboxes in the group.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <CheckboxGroup
                label="Small Size"
                options={basicOptions.slice(0, 2)}
                size="small"
              />
              
              <CheckboxGroup
                label="Medium Size (default)"
                options={basicOptions.slice(0, 2)}
                size="medium"
              />
              
              <CheckboxGroup
                label="Large Size"
                options={basicOptions.slice(0, 2)}
                size="large"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CheckboxGroup
  label="Small Size"
  options={options}
  size="small"
/>

<CheckboxGroup
  label="Medium Size"
  options={options}
  size="medium"
/>

<CheckboxGroup
  label="Large Size"
  options={options}
  size="large"
/>`}</CodeBlock>
        </div>

        {/* Disabled State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Disabled State</Typography>
          <Typography variant="body" className="mb-4">
            Disable the entire group or individual options.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              <CheckboxGroup
                label="Entire group disabled"
                options={basicOptions}
                disabled
                value={['option1']}
              />
              
              <CheckboxGroup
                label="Individual options disabled"
                options={[
                  { value: 'available1', label: 'Available Option 1' },
                  { value: 'disabled1', label: 'Disabled Option', disabled: true },
                  { value: 'available2', label: 'Available Option 2' },
                  { value: 'disabled2', label: 'Another Disabled', disabled: true },
                ]}
                value={['available1']}
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Disable entire group
<CheckboxGroup
  label="Entire group disabled"
  options={options}
  disabled
/>

// Disable individual options
<CheckboxGroup
  label="Individual options disabled"
  options={[
    { value: 'available1', label: 'Available Option 1' },
    { value: 'disabled1', label: 'Disabled Option', disabled: true },
    { value: 'available2', label: 'Available Option 2' },
  ]}
/>`}</CodeBlock>
        </div>

        {/* Required Field */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Required Field</Typography>
          <Typography variant="body" className="mb-4">
            Mark the checkbox group as required.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CheckboxGroup
                label="Select your skills"
                description="Please select at least one skill"
                options={[
                  { value: 'javascript', label: 'JavaScript' },
                  { value: 'typescript', label: 'TypeScript' },
                  { value: 'react', label: 'React' },
                  { value: 'nodejs', label: 'Node.js' },
                ]}
                required
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CheckboxGroup
  label="Select your skills"
  description="Please select at least one skill"
  options={skillOptions}
  required
/>`}</CodeBlock>
        </div>

        {/* Real-world Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Real-world Example</Typography>
          <Typography variant="body" className="mb-4">
            A feature selection form with validation.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <form onSubmit={(e) => {
                e.preventDefault()
                alert(`Selected features: ${features.join(', ') || 'None'}`)
              }}>
                <CheckboxGroup
                  label="Select Features"
                  description="Choose the features you want to enable for your account"
                  options={featureOptions}
                  value={features}
                  onChange={setFeatures}
                  color="primary"
                  className="mb-6"
                />
                
                <div className="flex gap-3">
                  <Button type="submit" disabled={features.length === 0}>
                    Save Preferences
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setFeatures([])}
                    disabled={features.length === 0}
                  >
                    Clear Selection
                  </Button>
                </div>
                
                {features.length > 0 && (
                  <Typography variant="caption" className="mt-4 text-success">
                    {features.length} feature{features.length > 1 ? 's' : ''} selected
                  </Typography>
                )}
              </form>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [features, setFeatures] = useState<string[]>([])

const featureOptions = [
  { value: 'analytics', label: 'Advanced Analytics' },
  { value: 'export', label: 'Export Data' },
  { value: 'api', label: 'API Access', disabled: true },
  { value: 'support', label: 'Priority Support' },
  { value: 'training', label: 'Online Training' },
]

<form onSubmit={handleSubmit}>
  <CheckboxGroup
    label="Select Features"
    description="Choose the features you want to enable"
    options={featureOptions}
    value={features}
    onChange={setFeatures}
    color="primary"
  />
  
  <Button type="submit" disabled={features.length === 0}>
    Save Preferences
  </Button>
</form>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Prop</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Default</th>
                <th className="text-left p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">options</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">CheckboxGroupOption[]</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">required</td>
                <td className="p-2 text-sm">Array of checkbox options</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string[]</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">[]</td>
                <td className="p-2 text-sm">Array of selected values</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onChange</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`(values: string[]) => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Callback when selection changes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">orientation</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'horizontal' | 'vertical'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'vertical'</td>
                <td className="p-2 text-sm">Layout orientation of checkboxes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'outline'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid'</td>
                <td className="p-2 text-sm">Visual variant for all checkboxes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary'</td>
                <td className="p-2 text-sm">Color theme for all checkboxes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Size of all checkboxes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">disabled</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Disable the entire group</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">label</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Label for the checkbox group</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">description</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Description text below the label</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">required</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Mark the field as required</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">className</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CheckboxGroupOption Type */}
        <Typography variant="h3" className="mb-4 mt-8">CheckboxGroupOption Type</Typography>
        <CodeBlock followTheme language="tsx">{`interface CheckboxGroupOption {
  value: string;      // The value of the option
  label: string;      // The display label
  disabled?: boolean; // Whether this specific option is disabled
}`}</CodeBlock>

        {/* Notes */}
        <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
        <Card className="p-4 bg-info-50 dark:bg-info-950/20">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                CheckboxGroup is a controlled component - you must provide value and onChange props
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Individual checkboxes inherit variant, color, and size from the group
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component includes proper ARIA attributes for accessibility
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use the orientation prop to create compact horizontal layouts for small option sets
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}