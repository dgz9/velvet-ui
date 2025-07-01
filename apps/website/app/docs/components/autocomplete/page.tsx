'use client'

import { 
  Autocomplete,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb,
  MuiGrid as Grid,
  type AutocompleteOption
, Chip } from '@velvet-ui/core'
import { useState } from 'react'
import { Flag, MapPin, Globe, User } from 'lucide-react'

const countries: AutocompleteOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'it', label: 'Italy' },
  { value: 'es', label: 'Spain' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'au', label: 'Australia' },
  { value: 'nz', label: 'New Zealand' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
  { value: 'za', label: 'South Africa' },
];

const frameworks: AutocompleteOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'remix', label: 'Remix' },
  { value: 'solid', label: 'SolidJS' },
  { value: 'qwik', label: 'Qwik' },
];

const users: AutocompleteOption[] = [
  { value: '1', label: 'John Doe' },
  { value: '2', label: 'Jane Smith' },
  { value: '3', label: 'Robert Johnson' },
  { value: '4', label: 'Emily Davis' },
  { value: '5', label: 'Michael Brown' },
  { value: '6', label: 'Sarah Wilson', disabled: true },
  { value: '7', label: 'David Lee' },
  { value: '8', label: 'Lisa Anderson' },
];

export default function AutocompletePage() {
  const [country, setCountry] = useState<string>('')
  const [framework, setFramework] = useState<string>('')
  const [user, setUser] = useState<string>('')
  const [customValue, setCustomValue] = useState<string>('')

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Autocomplete' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Autocomplete</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          An enhanced input component with search and selection capabilities from a predefined list of options.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Autocomplete , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Autocomplete */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Autocomplete</Typography>
          <Typography variant="body" className="mb-4">
            A simple autocomplete with a list of options.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Autocomplete
                  options={countries}
                  value={country}
                  onChange={setCountry}
                  placeholder="Select a country"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  // ... more countries
];

<Autocomplete
  options={countries}
  value={country}
  onChange={setCountry}
  placeholder="Select a country"
/>`}</CodeBlock>
        </div>

        {/* With Floating Label */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Floating Label</Typography>
          <Typography variant="body" className="mb-4">
            Autocomplete inherits all Input props including floating labels.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Autocomplete
                  options={frameworks}
                  value={framework}
                  onChange={setFramework}
                  label="Framework"
                />
                <Autocomplete
                  options={countries}
                  value={country}
                  onChange={setCountry}
                  label="Country"
                  helperText="Select your country of residence"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Autocomplete
  options={frameworks}
  value={framework}
  onChange={setFramework}
  label="Framework"
/>

<Autocomplete
  options={countries}
  value={country}
  onChange={setCountry}
  label="Country"
  helperText="Select your country of residence"
/>`}</CodeBlock>
        </div>

        {/* Disabled Options */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Disabled Options</Typography>
          <Typography variant="body" className="mb-4">
            Individual options can be disabled to prevent selection.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="max-w-md">
                <Autocomplete
                  options={users}
                  value={user}
                  onChange={setUser}
                  label="Assign to user"
                  placeholder="Select a user"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const users = [
  { value: '1', label: 'John Doe' },
  { value: '2', label: 'Jane Smith' },
  { value: '6', label: 'Sarah Wilson', disabled: true },
  // ... more users
];

<Autocomplete
  options={users}
  value={user}
  onChange={setUser}
  label="Assign to user"
  placeholder="Select a user"
/>`}</CodeBlock>
        </div>

        {/* Validation States */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Validation States</Typography>
          <Typography variant="body" className="mb-4">
            Autocomplete supports error and success states with messages.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Autocomplete
                  options={countries}
                  value=""
                  onChange={() => {}}
                  label="Country"
                  error="Please select a valid country"
                />
                <Autocomplete
                  options={frameworks}
                  value="react"
                  onChange={() => {}}
                  label="Framework"
                  success="Great choice!"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Autocomplete
  options={countries}
  value=""
  onChange={() => {}}
  label="Country"
  error="Please select a valid country"
/>

<Autocomplete
  options={frameworks}
  value="react"
  onChange={() => {}}
  label="Framework"
  success="Great choice!"
/>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Different visual styles for various contexts.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Autocomplete
                  options={countries}
                  value={country}
                  onChange={setCountry}
                  label="Default"
                  variant="default"
                />
                <Autocomplete
                  options={countries}
                  value={country}
                  onChange={setCountry}
                  label="Glass"
                  variant="glass"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Autocomplete
  options={countries}
  value={country}
  onChange={setCountry}
  label="Default"
  variant="default"
/>

<Autocomplete
  options={countries}
  value={country}
  onChange={setCountry}
  label="Glass"
  variant="glass"
/>`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Apply different color schemes to match your design. The color affects the hover and selected states in the dropdown.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="grid grid-cols-2 gap-4">
                <Autocomplete
                  color="primary"
                  options={frameworks}
                  value=""
                  onChange={() => {}}
                  placeholder="Primary"
                />
                <Autocomplete
                  color="secondary"
                  options={frameworks}
                  value=""
                  onChange={() => {}}
                  placeholder="Secondary"
                />
                <Autocomplete
                  color="success"
                  options={frameworks}
                  value=""
                  onChange={() => {}}
                  placeholder="Success"
                />
                <Autocomplete
                  color="warning"
                  options={frameworks}
                  value=""
                  onChange={() => {}}
                  placeholder="Warning"
                />
                <Autocomplete
                  color="danger"
                  options={frameworks}
                  value=""
                  onChange={() => {}}
                  placeholder="Danger"
                />
                <Autocomplete
                  color="info"
                  options={frameworks}
                  value=""
                  onChange={() => {}}
                  placeholder="Info"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Autocomplete color="primary" options={frameworks} placeholder="Primary" />
<Autocomplete color="secondary" options={frameworks} placeholder="Secondary" />
<Autocomplete color="success" options={frameworks} placeholder="Success" />
<Autocomplete color="warning" options={frameworks} placeholder="Warning" />
<Autocomplete color="danger" options={frameworks} placeholder="Danger" />
<Autocomplete color="info" options={frameworks} placeholder="Info" />`}</CodeBlock>
        </div>

        {/* Custom Filter */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Filter Function</Typography>
          <Typography variant="body" className="mb-4">
            Customize how options are filtered based on user input.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="max-w-md">
                <Autocomplete
                  options={countries}
                  value={customValue}
                  onChange={setCustomValue}
                  label="Country (starts with filter)"
                  filterOptions={(options, inputValue) => 
                    options.filter(option => 
                      option.label.toLowerCase().startsWith(inputValue.toLowerCase())
                    )
                  }
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Autocomplete
  options={countries}
  value={customValue}
  onChange={setCustomValue}
  label="Country (starts with filter)"
  filterOptions={(options, inputValue) => 
    options.filter(option => 
      option.label.toLowerCase().startsWith(inputValue.toLowerCase())
    )
  }
/>`}</CodeBlock>
        </div>

        {/* Custom Render Option */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Option Rendering</Typography>
          <Typography variant="body" className="mb-4">
            Customize how options are displayed in the dropdown.
          </Typography>
          <Card className="mb-4" overflow="visible">
            <CardBody>
              <div className="max-w-md">
                <Autocomplete
                  options={countries}
                  value={country}
                  onChange={setCountry}
                  label="Country with icons"
                  renderOption={(option, isSelected) => (
                    <div className="flex items-center gap-2">
                      <Flag className="w-4 h-4" />
                      <span>{option.label}</span>
                      {isSelected && <span className="ml-auto text-primary">✓</span>}
                    </div>
                  )}
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Autocomplete
  options={countries}
  value={country}
  onChange={setCountry}
  label="Country with icons"
  renderOption={(option, isSelected) => (
    <div className="flex items-center gap-2">
      <Flag className="w-4 h-4" />
      <span>{option.label}</span>
      {isSelected && <span className="ml-auto text-primary">✓</span>}
    </div>
  )}
/>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4">Prop</th>
                <th className="text-left py-2 pr-4">Type</th>
                <th className="text-left py-2 pr-4">Default</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>options</code></td>
                <td className="py-3 pr-4"><code>AutocompleteOption[]</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Array of options to display</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>value</code></td>
                <td className="py-3 pr-4"><code>string</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Selected value</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>onChange</code></td>
                <td className="py-3 pr-4"><code>{`(value: string) => void`}</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Called when selection changes</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>onInputChange</code></td>
                <td className="py-3 pr-4"><code>{`(value: string) => void`}</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Called when input value changes</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>filterOptions</code></td>
                <td className="py-3 pr-4"><code>{`(options, inputValue) => AutocompleteOption[]`}</code></td>
                <td className="py-3 pr-4">Default filter</td>
                <td className="py-3">Custom filter function</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>renderOption</code></td>
                <td className="py-3 pr-4"><code>{`(option, isSelected) => ReactNode`}</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Custom option renderer</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>loading</code></td>
                <td className="py-3 pr-4"><code>boolean</code></td>
                <td className="py-3 pr-4"><code>false</code></td>
                <td className="py-3">Show loading state</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>loadingText</code></td>
                <td className="py-3 pr-4"><code>string</code></td>
                <td className="py-3 pr-4">"Loading..."</td>
                <td className="py-3">Text to show when loading</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>noOptionsText</code></td>
                <td className="py-3 pr-4"><code>string</code></td>
                <td className="py-3 pr-4">"No options"</td>
                <td className="py-3">Text when no options match</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>clearable</code></td>
                <td className="py-3 pr-4"><code>boolean</code></td>
                <td className="py-3 pr-4"><code>true</code></td>
                <td className="py-3">Allow clearing selection</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>color</code></td>
                <td className="py-3 pr-4"><code>'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</code></td>
                <td className="py-3 pr-4"><code>'primary'</code></td>
                <td className="py-3">Color scheme for dropdown hover and selected states</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4"><code>...InputProps</code></td>
                <td className="py-3 pr-4"><code>InputProps</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">All Input component props</td>
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
                The Autocomplete component extends the Input component, inheriting all its props and features
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
                Options are filtered as the user types. The default filter performs a case-insensitive substring match
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Keyboard navigation is fully supported with arrow keys, Enter, and Escape
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The dropdown automatically positions itself and scrolls to keep the highlighted option visible
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                When clearable is true, clearing the input will also clear the selected value
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Options show hover animation with padding shift and color highlighting that matches the selected color prop
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}