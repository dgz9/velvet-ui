'use client'

import { Button, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb, Alert, Chip, useToast } from '@velvet-ui/core'

export default function ToastPage() {
  const { addToast } = useToast()

  const showDefaultToast = () => {
    addToast({
      title: "Default Toast",
      description: "This is a default toast notification."
    })
  }

  const showSuccessToast = () => {
    addToast({
      variant: "success",
      title: "Success!",
      description: "Your changes have been saved successfully."
    })
  }

  const showErrorToast = () => {
    addToast({
      variant: "error",
      title: "Error",
      description: "Something went wrong. Please try again."
    })
  }

  const showWarningToast = () => {
    addToast({
      variant: "warning",
      title: "Warning",
      description: "Please review your input before proceeding."
    })
  }

  const showInfoToast = () => {
    addToast({
      variant: "info",
      title: "Information",
      description: "New updates are available for your application."
    })
  }

  const showActionToast = () => {
    addToast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
      action: {
        label: "Undo",
        onClick: () => {
          console.log("Undo clicked")
          addToast({
            variant: "info",
            title: "Action undone",
            description: "Your message has been unsent."
          })
        }
      }
    })
  }

  const showPersistentToast = () => {
    addToast({
      variant: "info",
      title: "Persistent Toast",
      description: "This toast will stay until dismissed.",
      duration: Infinity
    })
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Toast' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Toast</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A notification component that displays temporary messages to users.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { ToastProvider, useToast , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Setup */}
        <Typography variant="h2" className="mb-4 mt-12">Setup</Typography>
        <Typography variant="body" className="mb-4">
          Wrap your application with the ToastProvider to enable toast notifications:
        </Typography>
        <CodeBlock followTheme language="tsx">{`import { ToastProvider , Chip } from '@velvet-ui/core'

function App() {
  return (
    <ToastProvider>
      {/* Your app content */}
    </ToastProvider>
  )
}

// Or with custom configuration
<ToastProvider 
  position="top-right" 
  maxToasts={3}
>
  {/* Your app content */}
</ToastProvider>`}</CodeBlock>

        {/* Usage */}
        <Typography variant="h2" className="mb-4 mt-12">Usage</Typography>
        <Typography variant="body" className="mb-4">
          Use the useToast hook to show toast notifications:
        </Typography>
        <CodeBlock followTheme language="tsx">{`import { useToast , Chip } from '@velvet-ui/core'

function MyComponent() {
  const { addToast } = useToast()

  const handleClick = () => {
    addToast({
      title: "Success!",
      description: "Your action was completed successfully."
    })
  }

  return (
    <button onClick={handleClick}>
      Show Toast
    </button>
  )
}`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Toast */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Toast</Typography>
          <Typography variant="body" className="mb-4">
            A simple toast with title and description.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button onClick={showDefaultToast}>Show Default Toast</Button>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const { addToast } = useToast()

addToast({
  title: "Default Toast",
  description: "This is a default toast notification."
})`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Different toast variants for various types of messages.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Button onClick={showDefaultToast} variant="outline">Default</Button>
                <Button onClick={showSuccessToast} color="success">Success</Button>
                <Button onClick={showErrorToast} color="danger">Error</Button>
                <Button onClick={showWarningToast} color="warning">Warning</Button>
                <Button onClick={showInfoToast} color="info">Info</Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`addToast({ variant: "success", title: "Success!", description: "Saved" })
addToast({ variant: "error", title: "Error", description: "Failed" })
addToast({ variant: "warning", title: "Warning", description: "Check input" })
addToast({ variant: "info", title: "Info", description: "New updates" })`}</CodeBlock>
        </div>

        {/* With Action */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Action</Typography>
          <Typography variant="body" className="mb-4">
            Add an action button to allow users to interact with the toast.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button onClick={showActionToast}>Show Toast with Action</Button>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`addToast({
  title: "Message sent",
  description: "Your message has been sent successfully.",
  action: {
    label: "Undo",
    onClick: () => {
      console.log("Undo clicked")
      // Perform undo action
    }
  }
})`}</CodeBlock>
        </div>

        {/* Persistent Toast */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Persistent Toast</Typography>
          <Typography variant="body" className="mb-4">
            Create a toast that doesn't auto-dismiss.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button onClick={showPersistentToast}>Show Persistent Toast</Button>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`addToast({
  variant: "info",
  title: "Persistent Toast",
  description: "This toast will stay until dismissed.",
  duration: Infinity
})`}</CodeBlock>
        </div>

        {/* Positions */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Positions</Typography>
          <Typography variant="body" className="mb-4">
            Configure toast position when setting up the ToastProvider.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="text-center p-4 border rounded">
                  <Typography variant="small" className="font-mono">top-left</Typography>
                </div>
                <div className="text-center p-4 border rounded">
                  <Typography variant="small" className="font-mono">top-center</Typography>
                </div>
                <div className="text-center p-4 border rounded">
                  <Typography variant="small" className="font-mono">top-right</Typography>
                </div>
                <div className="text-center p-4 border rounded">
                  <Typography variant="small" className="font-mono">bottom-left</Typography>
                </div>
                <div className="text-center p-4 border rounded">
                  <Typography variant="small" className="font-mono">bottom-center</Typography>
                </div>
                <div className="text-center p-4 border rounded bg-primary/10">
                  <Typography variant="small" className="font-mono">bottom-right</Typography>
                  <Typography variant="small" className="text-foreground-secondary">(default)</Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<ToastProvider position="top-right">
  {/* App content */}
</ToastProvider>

<ToastProvider position="bottom-center">
  {/* App content */}
</ToastProvider>`}</CodeBlock>
        </div>

        {/* Multiple Toasts */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Multiple Toasts</Typography>
          <Typography variant="body" className="mb-4">
            Show multiple toasts at once. They stack automatically.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button 
                onClick={() => {
                  showSuccessToast()
                  setTimeout(showInfoToast, 100)
                  setTimeout(showWarningToast, 200)
                }}
              >
                Show Multiple Toasts
              </Button>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Toasts will stack automatically
addToast({ title: "First toast" })
addToast({ title: "Second toast" })
addToast({ title: "Third toast" })

// Limit maximum toasts with maxToasts prop
<ToastProvider maxToasts={3}>
  {/* Only 3 toasts shown at once */}
</ToastProvider>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">ToastProvider</Typography>
        <div className="overflow-x-auto mb-8">
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
                <td className="p-2 font-mono text-sm">position</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'bottom-right'</td>
                <td className="p-2 text-sm">Position of toast container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">maxToasts</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">5</td>
                <td className="p-2 text-sm">Maximum number of toasts to show at once</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">App content</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">Toast Options</Typography>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Option</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Default</th>
                <th className="text-left p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">title</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Toast title</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">description</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Toast description</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'success' | 'error' | 'warning' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">duration</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">5000</td>
                <td className="p-2 text-sm">Auto-dismiss duration in ms (use Infinity for persistent)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">action</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`{ label: string, onClick: () => void }`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Optional action button</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hook Returns */}
        <Typography variant="h3" className="mb-4 mt-8">useToast Hook</Typography>
        <Typography variant="body" className="mb-4">
          The useToast hook returns the following methods:
        </Typography>
        <CodeBlock followTheme language="tsx">{`const { toasts, addToast, removeToast } = useToast()

// toasts: ToastData[] - Array of current toasts
// addToast: (toast: ToastOptions) => string - Shows a toast, returns ID
// removeToast: (id: string) => void - Removes a specific toast`}</CodeBlock>

        {/* Notes */}
        <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
        <Card className="p-4 bg-info-50 dark:bg-info-950/20">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Toasts can be dismissed by clicking the X button or swiping horizontally
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                A progress bar shows the remaining time before auto-dismiss
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Toasts use glass morphism effect with backdrop blur
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Multiple toasts stack with smooth animations
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The useToast hook must be used within a ToastProvider
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}