'use client'

import { Typography, Card, Button, Input, useToast, CodeBlock } from '@velvet-ui/core'
import { useState } from 'react'
import { Rocket } from 'lucide-react'

export default function QuickStartPage() {
  const { addToast } = useToast()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addToast({
      title: 'Success!',
      description: 'Successfully subscribed!',
      variant: 'success'
    })
    setEmail('')
  }

  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Quick Start
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          Build your first Velvet UI interface in minutes.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Typography variant="h2" className="mb-4">
          Create a Simple Form
        </Typography>

        <Typography variant="body" className="mb-6">
          Let's build a simple email subscription form using Velvet UI components. This example will demonstrate 
          how to use buttons, inputs, cards, and toasts together.
        </Typography>

        <Typography variant="h3" className="mb-4">
          Step 1: Import Components
        </Typography>

        <CodeBlock followTheme language="tsx">{`import { Card, Typography, Input, Button, useToast } from '@velvet-ui/core'
import { useState } from 'react'`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          Step 2: Create the Component
        </Typography>

        <CodeBlock followTheme language="tsx">{`function NewsletterForm() {
  const { addToast } = useToast()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    addToast({
      title: 'Success!',
      description: 'Successfully subscribed!',
      variant: 'success'
    })
    setEmail('')
  }

  return (
    <Card className="max-w-md mx-auto p-6">
      <Typography variant="h3" className="mb-2">
        Stay Updated
      </Typography>
      <Typography className="mb-6 text-foreground-secondary">
        Subscribe to our newsletter for the latest updates.
      </Typography>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Button type="submit" variant="solid" className="w-full">
          Subscribe
        </Button>
      </form>
    </Card>
  )
}`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          Step 3: See it in Action
        </Typography>

        <Typography variant="body" className="mb-6">
          Here's the working example of the form we just built:
        </Typography>

        <Card className="max-w-md mx-auto p-6 my-8">
          <Typography variant="h3" className="mb-2">
            Stay Updated
          </Typography>
          <Typography className="mb-6 text-foreground-secondary">
            Subscribe to our newsletter for the latest updates.
          </Typography>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Button type="submit" variant="solid" className="w-full">
              Subscribe
            </Button>
          </form>
        </Card>


        <Typography variant="h2" className="mb-4 mt-12">
          Key Concepts
        </Typography>

        <Typography variant="h3" className="mb-4">
          1. Component Composition
        </Typography>

        <Typography variant="body" className="mb-6">
          Velvet UI components are designed to work together seamlessly. You can easily combine them 
          to create complex interfaces:
        </Typography>

        <CodeBlock followTheme language="tsx">{`<Card glass className="p-8">
  <div className="flex items-center gap-4">
    <Button variant="outline">Cancel</Button>
    <Button variant="solid">Confirm</Button>
  </div>
</Card>`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          2. Styling with Tailwind
        </Typography>

        <Typography variant="body" className="mb-6">
          All Velvet UI components accept className props and work perfectly with Tailwind CSS:
        </Typography>

        <CodeBlock followTheme language="tsx">{`<Button 
  variant="solid" 
  className="bg-gradient-to-r from-purple-500 to-pink-500"
>
  Gradient Button
</Button>`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          3. TypeScript Support
        </Typography>

        <Typography variant="body" className="mb-6">
          Enjoy full type safety and autocompletion in your IDE:
        </Typography>

        <CodeBlock followTheme language="tsx">{`interface FormData {
  email: string
  name: string
}

function MyForm() {
  const [data, setData] = useState<FormData>({ email: '', name: '' })
  
  return (
    <Input
      value={data.email}
      onChange={(e) => setData({ ...data, email: e.target.value })}
      // TypeScript will provide autocompletion for all props
    />
  )
}`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-12">
          Next Steps
        </Typography>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="p-6">
            <Rocket className="mb-3 h-8 w-8 text-primary-600 dark:text-primary-400" />
            <Typography variant="h4" className="mb-2">Explore Themes</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Learn how to use and customize our 10 pre-built themes.
            </Typography>
          </Card>

          <Card className="p-6">
            <Typography variant="h4" className="mb-2">Component Reference</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Dive deep into each component's props and examples.
            </Typography>
          </Card>

          <Card className="p-6">
            <Typography variant="h4" className="mb-2">Advanced Patterns</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Learn best practices and advanced usage patterns.
            </Typography>
          </Card>
        </div>

        <Card className="mt-8 bg-success-50 p-6 dark:bg-success-950/20">
          <Typography variant="h4" className="mb-2">
            🎉 Congratulations!
          </Typography>
          <Typography className="text-foreground-secondary">
            You've successfully built your first Velvet UI interface. Continue exploring our components 
            to build even more amazing experiences.
          </Typography>
        </Card>
      </div>
    </div>
  )
}