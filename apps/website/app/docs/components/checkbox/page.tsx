'use client'

import { 
  Checkbox,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb,
  Button,
  Divider,
  Chip
} from '@velvet-ui/core'
import { useState } from 'react'

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState({
    option1: true,
    option2: false,
    option3: true
  })
  const [indeterminate, setIndeterminate] = useState(true)

  const allChecked = Object.values(checkedItems).every(Boolean)
  const someChecked = Object.values(checkedItems).some(Boolean) && !allChecked

  const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked
    setCheckedItems({
      option1: newValue,
      option2: newValue,
      option3: newValue
    })
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Checkbox' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Checkbox</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Allow users to select one or more items from a set of options.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Checkbox } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Checkbox */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Checkbox</Typography>
          <Typography variant="body" className="mb-4">
            A simple checkbox with a label.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Checkbox label="Accept terms and conditions" />
                <Checkbox label="Subscribe to newsletter" defaultChecked />
                <Checkbox label="Enable notifications" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" defaultChecked />
<Checkbox label="Enable notifications" />`}</CodeBlock>
        </div>

        {/* Controlled */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Controlled</Typography>
          <Typography variant="body" className="mb-4">
            Use controlled checkboxes for advanced state management.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Checkbox 
                  label="Controlled checkbox" 
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <Typography variant="body" className="text-sm text-foreground-secondary">
                  Checkbox is: {checked ? 'checked' : 'unchecked'}
                </Typography>
                <div className="flex gap-2">
                  <Button size="small" onClick={() => setChecked(true)}>Check</Button>
                  <Button size="small" variant="outline" onClick={() => setChecked(false)}>Uncheck</Button>
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [checked, setChecked] = useState(false)

<Checkbox 
  label="Controlled checkbox" 
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

<Button onClick={() => setChecked(true)}>Check</Button>
<Button onClick={() => setChecked(false)}>Uncheck</Button>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different visual styles.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Checkbox variant="solid" label="Solid variant" defaultChecked />
                <Checkbox variant="outline" label="Outline variant" defaultChecked />
                <Checkbox variant="ghost" label="Ghost variant" defaultChecked />
                <Checkbox variant="glass" label="Glass variant" defaultChecked />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Checkbox variant="solid" label="Solid variant" defaultChecked />
<Checkbox variant="outline" label="Outline variant" defaultChecked />
<Checkbox variant="ghost" label="Ghost variant" defaultChecked />
<Checkbox variant="glass" label="Glass variant" defaultChecked />`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Use semantic colors to match your design.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="grid grid-cols-2 gap-4">
                <Checkbox color="primary" label="Primary" defaultChecked />
                <Checkbox color="secondary" label="Secondary" defaultChecked />
                <Checkbox color="success" label="Success" defaultChecked />
                <Checkbox color="warning" label="Warning" defaultChecked />
                <Checkbox color="danger" label="Danger" defaultChecked />
                <Checkbox color="info" label="Info" defaultChecked />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Checkbox color="primary" label="Primary" defaultChecked />
<Checkbox color="secondary" label="Secondary" defaultChecked />
<Checkbox color="success" label="Success" defaultChecked />
<Checkbox color="warning" label="Warning" defaultChecked />
<Checkbox color="danger" label="Danger" defaultChecked />
<Checkbox color="info" label="Info" defaultChecked />`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in 3 sizes to fit different contexts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex items-center gap-6">
                <Checkbox size="small" label="Small" defaultChecked />
                <Checkbox size="medium" label="Medium" defaultChecked />
                <Checkbox size="large" label="Large" defaultChecked />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Checkbox size="small" label="Small" defaultChecked />
<Checkbox size="medium" label="Medium" defaultChecked />
<Checkbox size="large" label="Large" defaultChecked />`}</CodeBlock>
        </div>

        {/* Indeterminate State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Indeterminate State</Typography>
          <Typography variant="body" className="mb-4">
            Use indeterminate state for parent checkboxes that control multiple children.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-3">
                <Checkbox 
                  label="Select all"
                  checked={allChecked}
                  indeterminate={someChecked}
                  onChange={handleParentChange}
                />
                <Divider />
                <div className="ml-6 space-y-2">
                  <Checkbox 
                    label="Option 1"
                    checked={checkedItems.option1}
                    onChange={(e) => setCheckedItems({...checkedItems, option1: e.target.checked})}
                  />
                  <Checkbox 
                    label="Option 2"
                    checked={checkedItems.option2}
                    onChange={(e) => setCheckedItems({...checkedItems, option2: e.target.checked})}
                  />
                  <Checkbox 
                    label="Option 3"
                    checked={checkedItems.option3}
                    onChange={(e) => setCheckedItems({...checkedItems, option3: e.target.checked})}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [checkedItems, setCheckedItems] = useState({
  option1: true,
  option2: false,
  option3: true
})

const allChecked = Object.values(checkedItems).every(Boolean)
const someChecked = Object.values(checkedItems).some(Boolean) && !allChecked

<Checkbox 
  label="Select all"
  checked={allChecked}
  indeterminate={someChecked}
  onChange={handleParentChange}
/>`}</CodeBlock>
        </div>

        {/* Disabled State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Disabled State</Typography>
          <Typography variant="body" className="mb-4">
            Disable checkboxes when interaction is not allowed.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Checkbox label="Disabled unchecked" disabled />
                <Checkbox label="Disabled checked" disabled defaultChecked />
                <Checkbox label="Disabled indeterminate" disabled indeterminate />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Checkbox label="Disabled unchecked" disabled />
<Checkbox label="Disabled checked" disabled defaultChecked />
<Checkbox label="Disabled indeterminate" disabled indeterminate />`}</CodeBlock>
        </div>

        {/* Without Label */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Without Label</Typography>
          <Typography variant="body" className="mb-4">
            Checkboxes can be used without labels, but remember to add proper accessibility attributes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex gap-4">
                <Checkbox aria-label="Checkbox 1" />
                <Checkbox aria-label="Checkbox 2" defaultChecked />
                <Checkbox aria-label="Checkbox 3" color="success" defaultChecked />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Checkbox aria-label="Checkbox 1" />
<Checkbox aria-label="Checkbox 2" defaultChecked />
<Checkbox aria-label="Checkbox 3" color="success" defaultChecked />`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'outline' | 'ghost' | 'glass'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid'</td>
                <td className="p-2 text-sm">The visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary'</td>
                <td className="p-2 text-sm">The color scheme</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The size of the checkbox</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">label</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Label text to display next to checkbox</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">checked</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Controlled checked state</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">defaultChecked</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Default checked state (uncontrolled)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">indeterminate</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Shows a dash instead of checkmark</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">disabled</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Disables the checkbox</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onChange</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`(e: ChangeEvent) => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Change event handler</td>
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
                The checkbox includes smooth spring animations when toggling states
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The checkmark animates with a path drawing effect for a polished feel
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                All standard input attributes are supported through prop spreading
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component is fully accessible with keyboard navigation and screen reader support
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}