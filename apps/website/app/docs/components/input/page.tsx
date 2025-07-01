'use client'

import { 
  Input,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb,
  Button,
  MuiGrid as Grid
, Chip } from '@velvet-ui/core'
import { useState } from 'react'
import { Search, Mail, Lock, User } from 'lucide-react'

export default function InputPage() {
  const [value, setValue] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Input' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Input</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A versatile text input component with floating labels, validation states, and smooth animations.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Input , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Input */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Input</Typography>
          <Typography variant="body" className="mb-4">
            A simple input field with placeholder text.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Input placeholder="Enter your name" />
                <Input placeholder="Enter your email" type="email" />
                <Input placeholder="Enter your password" type="password" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Input placeholder="Enter your name" />
<Input placeholder="Enter your email" type="email" />
<Input placeholder="Enter your password" type="password" />`}</CodeBlock>
        </div>

        {/* With Floating Labels */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Floating Labels</Typography>
          <Typography variant="body" className="mb-4">
            Labels that float above the input when focused or filled.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Input label="Name" />
                <Input label="Email" type="email" />
                <Input label="Password" type="password" />
                <Input label="With placeholder" placeholder="example@email.com" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Input label="Name" />
<Input label="Email" type="email" />
<Input label="Password" type="password" />
<Input label="With placeholder" placeholder="example@email.com" />`}</CodeBlock>
        </div>

        {/* Controlled Input */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Controlled</Typography>
          <Typography variant="body" className="mb-4">
            Use controlled inputs for advanced state management.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Input 
                  label="Controlled Input" 
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Typography variant="body" className="text-sm text-foreground-secondary">
                  Current value: {value || '(empty)'}
                </Typography>
                <div className="flex gap-2">
                  <Button size="small" onClick={() => setValue('Hello World')}>
                    Set Value
                  </Button>
                  <Button size="small" variant="outline" onClick={() => setValue('')}>
                    Clear
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [value, setValue] = useState('')

<Input 
  label="Controlled Input" 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

<Button onClick={() => setValue('Hello World')}>Set Value</Button>
<Button onClick={() => setValue('')}>Clear</Button>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Different visual styles for various contexts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Input variant="default" label="Default variant" />
                <Input variant="glass" label="Glass variant" />
                <div className="p-8 -mx-6 bg-gradient-to-br from-purple-500 to-pink-500">
                  <Input variant="glass" label="Glass on gradient" placeholder="Looks great on colorful backgrounds" />
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Input variant="default" label="Default variant" />
<Input variant="glass" label="Glass variant" />`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in 3 sizes to fit different contexts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Input size="small" label="Small input" />
                <Input size="medium" label="Medium input" />
                <Input size="large" label="Large input" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Input size="small" label="Small input" />
<Input size="medium" label="Medium input" />
<Input size="large" label="Large input" />`}</CodeBlock>
        </div>

        {/* Validation States */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Validation States</Typography>
          <Typography variant="body" className="mb-4">
            Show validation feedback with error and success states.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Input 
                  label="Email" 
                  type="email"
                  error="Please enter a valid email address"
                  defaultValue="invalid-email"
                />
                
                <Input 
                  label="Username" 
                  success="Username is available!"
                  defaultValue="johndoe"
                />
                
                <Input 
                  label="Password" 
                  type="password"
                  helperText="Must be at least 8 characters"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Input 
  label="Email" 
  type="email"
  error="Please enter a valid email address"
  defaultValue="invalid-email"
/>

<Input 
  label="Username" 
  success="Username is available!"
  defaultValue="johndoe"
/>

<Input 
  label="Password" 
  type="password"
  helperText="Must be at least 8 characters"
/>`}</CodeBlock>
        </div>

        {/* Form Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Form Example</Typography>
          <Typography variant="body" className="mb-4">
            A complete form with validation logic.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <form className="max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={email && !email.includes('@') ? 'Invalid email format' : ''}
                  required
                />
                
                <Input 
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={password && password.length < 8 ? 'Password too short' : ''}
                  helperText="Minimum 8 characters"
                  required
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!email || !password || password.length < 8 || !email.includes('@')}
                >
                  Sign In
                </Button>
              </form>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

<form onSubmit={(e) => e.preventDefault()}>
  <Input 
    label="Email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={email && !email.includes('@') ? 'Invalid email format' : ''}
    required
  />
  
  <Input 
    label="Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    error={password && password.length < 8 ? 'Password too short' : ''}
    helperText="Minimum 8 characters"
    required
  />
  
  <Button 
    type="submit"
    disabled={!email || !password || password.length < 8 || !email.includes('@')}
  >
    Sign In
  </Button>
</form>`}</CodeBlock>
        </div>

        {/* Input Types */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Input Types</Typography>
          <Typography variant="body" className="mb-4">
            Support for all HTML5 input types.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Input label="Text" type="text" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input label="Email" type="email" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input label="Number" type="number" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input label="Tel" type="tel" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input label="Date" type="date" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input label="Time" type="time" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input label="URL" type="url" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input label="Search" type="search" />
                </Grid>
              </Grid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Input label="Text" type="text" />
<Input label="Email" type="email" />
<Input label="Number" type="number" />
<Input label="Tel" type="tel" />
<Input label="Date" type="date" />
<Input label="Time" type="time" />
<Input label="URL" type="url" />
<Input label="Search" type="search" />`}</CodeBlock>
        </div>

        {/* With Icons (Custom Implementation) */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icons</Typography>
          <Typography variant="body" className="mb-4">
            Combine inputs with icons using wrapper elements.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search className="h-5 w-5" />
                  </div>
                  <Input placeholder="Search..." className="pl-10" />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <Input label="Email" type="email" className="pl-10" />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <Input label="Password" type="password" className="pl-10" />
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<div className="relative">
  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <Search className="h-5 w-5" />
  </div>
  <Input placeholder="Search..." className="pl-10" />
</div>

<div className="relative">
  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <Mail className="h-5 w-5" />
  </div>
  <Input label="Email" type="email" className="pl-10" />
</div>`}</CodeBlock>
        </div>

        {/* Disabled State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Disabled State</Typography>
          <Typography variant="body" className="mb-4">
            Disable inputs when interaction is not allowed.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="max-w-md space-y-4">
                <Input label="Disabled input" disabled />
                <Input label="Disabled with value" defaultValue="Can't edit this" disabled />
                <Input placeholder="Disabled placeholder" disabled />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Input label="Disabled input" disabled />
<Input label="Disabled with value" defaultValue="Can't edit this" disabled />
<Input placeholder="Disabled placeholder" disabled />`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'glass' | 'error' | 'success'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">The visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The size of the input</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">label</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Floating label text</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">error</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Error message to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">success</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Success message to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">helperText</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Helper text to display below input</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">className</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">...props</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">InputHTMLAttributes</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">All standard input attributes</td>
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
                The floating label animation is smooth and responsive to user interaction
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Error and success states automatically override the variant styling
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The glass variant works best on colorful or image backgrounds
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                All standard HTML input attributes are supported through prop spreading
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Date/time inputs automatically keep the label in the floated position
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}