'use client'

import { Select, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb , Chip } from '@velvet-ui/core'
import { useState } from 'react'

export default function SelectPage() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]
  
  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
  ]
  
  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ]

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Select' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Select</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A customizable select component with animations, variants, and label support.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Select , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Select */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Select</Typography>
          <Typography variant="body" className="mb-4">
            A simple select dropdown with options.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <Select
                options={options}
                value={value1}
                onChange={setValue1}
                placeholder="Select a framework"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [value, setValue] = useState('')

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
]

<Select
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select a framework"
/>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different visual styles for your select component.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="space-y-4">
                <Select
                  variant="solid"
                  options={options}
                  placeholder="Solid variant"
                />
                <Select
                  variant="outline"
                  options={options}
                  placeholder="Outline variant"
                />
                <Select
                  variant="ghost"
                  options={options}
                  placeholder="Ghost variant"
                />
                <Select
                  variant="glass"
                  options={options}
                  placeholder="Glass variant"
                />
                <Select
                  variant="underline"
                  options={options}
                  placeholder="Underline variant"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Select variant="solid" options={options} placeholder="Solid variant" />
<Select variant="outline" options={options} placeholder="Outline variant" />
<Select variant="ghost" options={options} placeholder="Ghost variant" />
<Select variant="glass" options={options} placeholder="Glass variant" />
<Select variant="underline" options={options} placeholder="Underline variant" />`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Apply different color schemes to match your design.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  color="primary"
                  options={options}
                  placeholder="Primary"
                />
                <Select
                  color="secondary"
                  options={options}
                  placeholder="Secondary"
                />
                <Select
                  color="success"
                  options={options}
                  placeholder="Success"
                />
                <Select
                  color="warning"
                  options={options}
                  placeholder="Warning"
                />
                <Select
                  color="danger"
                  options={options}
                  placeholder="Danger"
                />
                <Select
                  color="info"
                  options={options}
                  placeholder="Info"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Select color="primary" options={options} placeholder="Primary" />
<Select color="secondary" options={options} placeholder="Secondary" />
<Select color="success" options={options} placeholder="Success" />
<Select color="warning" options={options} placeholder="Warning" />
<Select color="danger" options={options} placeholder="Danger" />
<Select color="info" options={options} placeholder="Info" />`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in three sizes to fit different contexts.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="space-y-4">
                <Select
                  size="small"
                  options={options}
                  placeholder="Small size"
                />
                <Select
                  size="medium"
                  options={options}
                  placeholder="Medium size (default)"
                />
                <Select
                  size="large"
                  options={options}
                  placeholder="Large size"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Select size="small" options={options} placeholder="Small size" />
<Select size="medium" options={options} placeholder="Medium size" />
<Select size="large" options={options} placeholder="Large size" />`}</CodeBlock>
        </div>

        {/* With Labels */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Labels</Typography>
          <Typography variant="body" className="mb-4">
            Add labels with different placement options.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="space-y-6">
                <Select
                  label="Framework"
                  labelPlacement="top"
                  options={options}
                  value={value2}
                  onChange={setValue2}
                  placeholder="Choose a framework"
                />
                <Select
                  label="Framework"
                  labelPlacement="left"
                  options={options}
                  value={value3}
                  onChange={setValue3}
                  placeholder="Choose a framework"
                />
                <Select
                  label="Framework"
                  labelPlacement="inside"
                  options={options}
                  value={value4}
                  onChange={setValue4}
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Select
  label="Framework"
  labelPlacement="top"
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Choose a framework"
/>

<Select
  label="Framework"
  labelPlacement="left"
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Choose a framework"
/>

<Select
  label="Framework"
  labelPlacement="inside"
  options={options}
  value={value}
  onChange={setValue}
/>`}</CodeBlock>
        </div>

        {/* Clearable */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Clearable</Typography>
          <Typography variant="body" className="mb-4">
            Allow users to clear the selected value.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <Select
                clearable
                options={countryOptions}
                placeholder="Select a country"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Select
  clearable
  options={countryOptions}
  placeholder="Select a country"
/>`}</CodeBlock>
        </div>

        {/* Disabled State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Disabled State</Typography>
          <Typography variant="body" className="mb-4">
            Disable the select or individual options.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="space-y-4">
                <Select
                  disabled
                  options={options}
                  placeholder="Disabled select"
                />
                <Select
                  options={statusOptions}
                  placeholder="Select has disabled option"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Disable entire select
<Select
  disabled
  options={options}
  placeholder="Disabled select"
/>

// Disable individual options
const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'disabled', label: 'Disabled', disabled: true },
]

<Select
  options={statusOptions}
  placeholder="Select has disabled option"
/>`}</CodeBlock>
        </div>

        {/* Border Radius */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Border Radius</Typography>
          <Typography variant="body" className="mb-4">
            Customize the corner radius of the select.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  radius="none"
                  options={options}
                  placeholder="No radius"
                />
                <Select
                  radius="small"
                  options={options}
                  placeholder="Small radius"
                />
                <Select
                  radius="medium"
                  options={options}
                  placeholder="Medium radius"
                />
                <Select
                  radius="large"
                  options={options}
                  placeholder="Large radius"
                />
                <Select
                  radius="full"
                  options={options}
                  placeholder="Full radius"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Select radius="none" options={options} placeholder="No radius" />
<Select radius="small" options={options} placeholder="Small radius" />
<Select radius="medium" options={options} placeholder="Medium radius" />
<Select radius="large" options={options} placeholder="Large radius" />
<Select radius="full" options={options} placeholder="Full radius" />`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">SelectOption[]</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Array of options with value, label, and optional disabled</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Currently selected value</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onChange</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`(value: string) => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Callback when selection changes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'outline' | 'ghost' | 'glass' | 'underline'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary'</td>
                <td className="p-2 text-sm">Color scheme</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Size of the select</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">radius</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'none' | 'small' | 'medium' | 'large' | 'full'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Border radius</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">placeholder</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Placeholder text</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">label</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Label text</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">labelPlacement</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'top' | 'left' | 'inside'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'inside'</td>
                <td className="p-2 text-sm">Label position</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">clearable</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Allow clearing selection</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">disabled</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Disable the select</td>
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

        {/* Notes */}
        <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
        <Card className="p-4 bg-info-50 dark:bg-info-950/20">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The select component uses Framer Motion for smooth animations
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Dropdown is rendered using React Portal for proper layering
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Click outside the dropdown to close it automatically
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The "inside" label placement provides a floating label effect
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Keyboard navigation and accessibility features are built-in
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Options show hover animation with padding shift and color changes based on the selected color variant
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}