'use client'

import { Portal, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb, Button , Chip } from '@velvet-ui/core'
import { useState } from 'react'

export default function PortalPage() {
  const [showPortal, setShowPortal] = useState(false)
  const [showCustomPortal, setShowCustomPortal] = useState(false)

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Portal' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Portal</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A utility component that renders its children into a different part of the DOM.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Portal , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Portal */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Portal</Typography>
          <Typography variant="body" className="mb-4">
            Portal renders content outside of the parent component's DOM hierarchy, directly into document.body.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button onClick={() => setShowPortal(!showPortal)}>
                {showPortal ? 'Hide' : 'Show'} Portal Content
              </Button>
              
              {showPortal && (
                <Portal>
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowPortal(false)}>
                    <Card className="p-8 max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
                      <Typography variant="h3" className="mb-4">Portal Content</Typography>
                      <Typography variant="body" className="mb-4">
                        This content is rendered outside of the parent component's DOM tree, directly in document.body.
                      </Typography>
                      <Button onClick={() => setShowPortal(false)}>Close</Button>
                    </Card>
                  </div>
                </Portal>
              )}
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [showPortal, setShowPortal] = useState(false)

<Button onClick={() => setShowPortal(!showPortal)}>
  {showPortal ? 'Hide' : 'Show'} Portal Content
</Button>

{showPortal && (
  <Portal>
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="p-8 max-w-md mx-auto">
        <Typography variant="h3" className="mb-4">Portal Content</Typography>
        <Typography variant="body" className="mb-4">
          This content is rendered outside of the parent component's DOM tree.
        </Typography>
        <Button onClick={() => setShowPortal(false)}>Close</Button>
      </Card>
    </div>
  </Portal>
)}`}</CodeBlock>
        </div>

        {/* Custom Container */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Container</Typography>
          <Typography variant="body" className="mb-4">
            You can specify a custom container element for the portal content instead of document.body.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <div id="custom-portal-container" className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg h-32">
                  <Typography variant="caption" className="text-foreground-secondary">
                    Custom Portal Container
                  </Typography>
                </div>
                
                <Button onClick={() => setShowCustomPortal(!showCustomPortal)}>
                  {showCustomPortal ? 'Hide' : 'Show'} Custom Portal
                </Button>
                
                {showCustomPortal && (
                  <Portal container={document.getElementById('custom-portal-container') as HTMLElement}>
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center rounded-lg">
                      <Card className="p-4">
                        <Typography variant="body">
                          This is rendered inside the custom container!
                        </Typography>
                      </Card>
                    </div>
                  </Portal>
                )}
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<div id="custom-portal-container" className="relative bg-gray-100 p-4 h-32">
  <Typography>Custom Portal Container</Typography>
</div>

{showCustomPortal && (
  <Portal container={document.getElementById('custom-portal-container')}>
    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
      <Card className="p-4">
        <Typography>This is rendered inside the custom container!</Typography>
      </Card>
    </div>
  </Portal>
)}`}</CodeBlock>
        </div>

        {/* Use Cases */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Common Use Cases</Typography>
          <Typography variant="body" className="mb-4">
            Portals are useful for rendering content that needs to break out of the parent's visual hierarchy.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-6">
                <div>
                  <Typography variant="h4" className="mb-2">Modals & Dialogs</Typography>
                  <Typography variant="body" className="text-foreground-secondary">
                    Render modals at the root level to avoid z-index and overflow issues.
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="h4" className="mb-2">Tooltips & Popovers</Typography>
                  <Typography variant="body" className="text-foreground-secondary">
                    Position floating elements relative to the viewport without parent constraints.
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="h4" className="mb-2">Notifications</Typography>
                  <Typography variant="body" className="text-foreground-secondary">
                    Display toast notifications or alerts at the top level of your app.
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="h4" className="mb-2">Dropdown Menus</Typography>
                  <Typography variant="body" className="text-foreground-secondary">
                    Prevent dropdown content from being clipped by parent overflow settings.
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Modal Example
<Portal>
  <div className="fixed inset-0 z-50">
    <div className="bg-black/50" onClick={onClose} />
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Modal {...props} />
    </div>
  </div>
</Portal>

// Tooltip Example
<Portal>
  <div 
    className="absolute z-50" 
    style={{ left: position.x, top: position.y }}
  >
    <Tooltip content={content} />
  </div>
</Portal>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The content to be rendered in the portal</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">container</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">HTMLElement</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">document.body</td>
                <td className="p-2 text-sm">The DOM element to render the portal content into</td>
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
                Portal content is rendered outside the React component tree but maintains React context
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Event bubbling works as expected - events will propagate through the React tree, not the DOM tree
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The Portal component handles SSR safely and only renders after mount
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                When using a custom container, ensure the element exists before rendering the Portal
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}