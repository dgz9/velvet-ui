'use client'

import { 
  Alert,
  AlertTitle,
  AlertDescription,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb,
  Button,
  Chip
} from '@velvet-ui/core'
import { useState } from 'react'
import { Terminal, AlertCircle } from 'lucide-react'

export default function AlertPage() {
  const [showDismissible, setShowDismissible] = useState(true)

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Alert' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Alert</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Display important messages and notifications to users with contextual feedback alerts.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Alert, AlertTitle, AlertDescription } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Alert */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Alert</Typography>
          <Typography variant="body" className="mb-4">
            A simple alert with a message.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components and dependencies to your app using the cli.
                </AlertDescription>
              </Alert>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Use different variants to convey the purpose of the alert.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <Alert variant="default">
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>
                  This is a default alert for general information.
                </AlertDescription>
              </Alert>
              
              <Alert variant="info">
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This feature will be available in the next update.
                </AlertDescription>
              </Alert>
              
              <Alert variant="success">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>
              
              <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Your subscription will expire in 3 days.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  There was a problem with your request.
                </AlertDescription>
              </Alert>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Alert variant="default">
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>This is a default alert for general information.</AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This feature will be available in the next update.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Your subscription will expire in 3 days.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>There was a problem with your request.</AlertDescription>
</Alert>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Alerts come in three sizes to suit different content needs.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <Alert size="small" variant="info">
                <AlertTitle>Small Alert</AlertTitle>
                <AlertDescription>Compact size for minimal space.</AlertDescription>
              </Alert>
              
              <Alert size="medium" variant="info">
                <AlertTitle>Medium Alert</AlertTitle>
                <AlertDescription>Default size for most use cases.</AlertDescription>
              </Alert>
              
              <Alert size="large" variant="info">
                <AlertTitle>Large Alert</AlertTitle>
                <AlertDescription>Larger size for important messages.</AlertDescription>
              </Alert>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Alert size="small" variant="info">
  <AlertTitle>Small Alert</AlertTitle>
  <AlertDescription>Compact size for minimal space.</AlertDescription>
</Alert>

<Alert size="medium" variant="info">
  <AlertTitle>Medium Alert</AlertTitle>
  <AlertDescription>Default size for most use cases.</AlertDescription>
</Alert>

<Alert size="large" variant="info">
  <AlertTitle>Large Alert</AlertTitle>
  <AlertDescription>Larger size for important messages.</AlertDescription>
</Alert>`}</CodeBlock>
        </div>

        {/* Custom Icon */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Icon</Typography>
          <Typography variant="body" className="mb-4">
            Replace the default icon with a custom one.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <Alert icon={<Terminal className="h-4 w-4" />}>
                <AlertTitle>Terminal</AlertTitle>
                <AlertDescription>
                  You can run the following command to install dependencies.
                </AlertDescription>
              </Alert>
              
              <Alert variant="warning" icon={<AlertCircle className="h-4 w-4" />}>
                <AlertTitle>Requirements</AlertTitle>
                <AlertDescription>
                  Make sure you have Node.js 16 or higher installed.
                </AlertDescription>
              </Alert>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Alert icon={<Terminal className="h-4 w-4" />}>
  <AlertTitle>Terminal</AlertTitle>
  <AlertDescription>
    You can run the following command to install dependencies.
  </AlertDescription>
</Alert>

<Alert variant="warning" icon={<AlertCircle className="h-4 w-4" />}>
  <AlertTitle>Requirements</AlertTitle>
  <AlertDescription>
    Make sure you have Node.js 16 or higher installed.
  </AlertDescription>
</Alert>`}</CodeBlock>
        </div>

        {/* Dismissible */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Dismissible</Typography>
          <Typography variant="body" className="mb-4">
            Allow users to dismiss alerts.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              {showDismissible && (
                <Alert 
                  variant="info" 
                  closable 
                  onClose={() => setShowDismissible(false)}
                >
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>
                    This alert can be dismissed by clicking the close button.
                  </AlertDescription>
                </Alert>
              )}
              
              {!showDismissible && (
                <Button 
                  size="small" 
                  onClick={() => setShowDismissible(true)}
                >
                  Show Alert Again
                </Button>
              )}
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [show, setShow] = useState(true)

{show && (
  <Alert 
    variant="info" 
    closable 
    onClose={() => setShow(false)}
  >
    <AlertTitle>Info</AlertTitle>
    <AlertDescription>
      This alert can be dismissed by clicking the close button.
    </AlertDescription>
  </Alert>
)}`}</CodeBlock>
        </div>

        {/* Without Title */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Without Title</Typography>
          <Typography variant="body" className="mb-4">
            Display alerts with description only.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <Alert variant="info">
                <AlertDescription>
                  A simple informational message without a title.
                </AlertDescription>
              </Alert>
              
              <Alert variant="success">
                <AlertDescription>
                  Operation completed successfully.
                </AlertDescription>
              </Alert>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Alert variant="info">
  <AlertDescription>
    A simple informational message without a title.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <AlertDescription>
    Operation completed successfully.
  </AlertDescription>
</Alert>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Alert</Typography>
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
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'destructive' | 'success' | 'warning' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">The visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The size of the alert</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">title</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Alert title (deprecated, use AlertTitle)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">description</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Alert description (deprecated, use AlertDescription)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">icon</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">auto</td>
                <td className="p-2 text-sm">Custom icon to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">closable</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether the alert can be closed</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onClose</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`() => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Callback when alert is closed</td>
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
                Each variant has a default icon that matches its semantic meaning
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The alert animates in and out smoothly when appearing or being dismissed
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use AlertTitle and AlertDescription components for better structure
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component has proper ARIA role="alert" for accessibility
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}