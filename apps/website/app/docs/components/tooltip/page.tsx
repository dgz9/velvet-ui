'use client'

import React from 'react'
import { Card, CardBody, Typography, Divider, Badge, Button, IconButton, Tooltip, Input, Select, Checkbox, CodeBlock, Breadcrumb, Chip, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Alert } from '@velvet-ui/core'
import { useState } from 'react'
import { Info, Settings, Download, Copy, Edit, Trash2, Heart, Star, Share2, Check } from 'lucide-react'

const ControlledTooltipExample = () => {
  const [open, setOpen] = React.useState(false)
  
  return (
    <div className="flex flex-col gap-4 items-center">
      <Tooltip 
        content="This is a controlled tooltip" 
        open={open}
        onOpenChange={setOpen}
        arrow
      >
        <Button variant="outline">Controlled Target</Button>
      </Tooltip>
      
      <Button 
        variant="solid" 
        size="small"
        onClick={() => setOpen(!open)}
      >
        Toggle Tooltip
      </Button>
    </div>
  )
}

export default function TooltipPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Tooltip' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Tooltip</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A tooltip component that displays helpful text when hovering over or focusing on an element.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Tooltip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Tooltip */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Tooltip</Typography>
          <Typography variant="body" className="mb-4">
            Simple tooltip with default styling.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex justify-center">
                <Tooltip content="This is a helpful tooltip" arrow>
                  <Button>Hover me</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<Tooltip content="This is a helpful tooltip" arrow>
  <Button>Hover me</Button>
</Tooltip>`}</CodeBlock>
        </div>

        {/* Tooltip Placements */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Tooltip Placements</Typography>
          <Typography variant="body" className="mb-4">
            Tooltips can be positioned in 12 different placements around the target element.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto p-8">
                <Tooltip content="Top Start" placement="top-start" arrow>
                  <Button variant="outline" size="small">Top Start</Button>
                </Tooltip>
                
                <Tooltip content="Top" placement="top" arrow>
                  <Button variant="outline" size="small">Top</Button>
                </Tooltip>
                
                <Tooltip content="Top End" placement="top-end" arrow>
                  <Button variant="outline" size="small">Top End</Button>
                </Tooltip>
                
                <Tooltip content="Left Start" placement="left-start" arrow>
                  <Button variant="outline" size="small">Left Start</Button>
                </Tooltip>
                
                <div className="flex justify-center">
                  <Button variant="solid" size="small" disabled>Target</Button>
                </div>
                
                <Tooltip content="Right Start" placement="right-start" arrow>
                  <Button variant="outline" size="small">Right Start</Button>
                </Tooltip>
                
                <Tooltip content="Left" placement="left" arrow>
                  <Button variant="outline" size="small">Left</Button>
                </Tooltip>
                
                <div className="flex justify-center">
                  <Button variant="solid" size="small" disabled>Center</Button>
                </div>
                
                <Tooltip content="Right" placement="right" arrow>
                  <Button variant="outline" size="small">Right</Button>
                </Tooltip>
                
                <Tooltip content="Left End" placement="left-end" arrow>
                  <Button variant="outline" size="small">Left End</Button>
                </Tooltip>
                
                <div className="flex justify-center">
                  <Button variant="solid" size="small" disabled>Target</Button>
                </div>
                
                <Tooltip content="Right End" placement="right-end" arrow>
                  <Button variant="outline" size="small">Right End</Button>
                </Tooltip>
                
                <Tooltip content="Bottom Start" placement="bottom-start" arrow>
                  <Button variant="outline" size="small">Bottom Start</Button>
                </Tooltip>
                
                <Tooltip content="Bottom" placement="bottom" arrow>
                  <Button variant="outline" size="small">Bottom</Button>
                </Tooltip>
                
                <Tooltip content="Bottom End" placement="bottom-end" arrow>
                  <Button variant="outline" size="small">Bottom End</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<div className="grid grid-cols-3 gap-4">
  <Tooltip content="Top Start" placement="top-start">
    <Button variant="outline">Top Start</Button>
  </Tooltip>
  
  <Tooltip content="Top" placement="top">
    <Button variant="outline">Top</Button>
  </Tooltip>
  
  <Tooltip content="Top End" placement="top-end">
    <Button variant="outline">Top End</Button>
  </Tooltip>
  
  <Tooltip content="Left Start" placement="left-start">
    <Button variant="outline">Left Start</Button>
  </Tooltip>
  
  <div /> {/* Empty space */}
  
  <Tooltip content="Right Start" placement="right-start">
    <Button variant="outline">Right Start</Button>
  </Tooltip>
  
  <Tooltip content="Left" placement="left">
    <Button variant="outline">Left</Button>
  </Tooltip>
  
  <div className="flex justify-center">
    <Button variant="solid" disabled>Target</Button>
  </div>
  
  <Tooltip content="Right" placement="right">
    <Button variant="outline">Right</Button>
  </Tooltip>
  
  <Tooltip content="Left End" placement="left-end">
    <Button variant="outline">Left End</Button>
  </Tooltip>
  
  <div /> {/* Empty space */}
  
  <Tooltip content="Right End" placement="right-end">
    <Button variant="outline">Right End</Button>
  </Tooltip>
  
  <Tooltip content="Bottom Start" placement="bottom-start">
    <Button variant="outline">Bottom Start</Button>
  </Tooltip>
  
  <Tooltip content="Bottom" placement="bottom">
    <Button variant="outline">Bottom</Button>
  </Tooltip>
  
  <Tooltip content="Bottom End" placement="bottom-end">
    <Button variant="outline">Bottom End</Button>
  </Tooltip>
</div>`}</CodeBlock>
        </div>

        {/* Tooltip Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Tooltip Variants</Typography>
          <Typography variant="body" className="mb-4">
            Different visual styles for tooltips.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4 justify-center">
                <Tooltip content="Default tooltip" variant="default">
                  <Button variant="outline">Default</Button>
                </Tooltip>
                
                <Tooltip content="Glass tooltip with blur effect" variant="glass">
                  <Button variant="outline">Glass</Button>
                </Tooltip>
                
                <Tooltip content="Light tooltip" variant="light">
                  <Button variant="outline">Light</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<div className="flex gap-4">
  <Tooltip content="Default tooltip" variant="default">
    <Button variant="outline">Default</Button>
  </Tooltip>
  
  <Tooltip content="Glass tooltip with blur effect" variant="glass">
    <Button variant="outline">Glass</Button>
  </Tooltip>
  
  <Tooltip content="Light tooltip" variant="light">
    <Button variant="outline">Light</Button>
  </Tooltip>
</div>`}</CodeBlock>
        </div>

        {/* Tooltip Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Tooltip Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Tooltips come in different sizes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex gap-4 justify-center">
                <Tooltip content="Small tooltip" size="small">
                  <Button variant="outline">Small</Button>
                </Tooltip>
                
                <Tooltip content="Medium tooltip" size="medium">
                  <Button variant="outline">Medium</Button>
                </Tooltip>
                
                <Tooltip content="Large tooltip" size="large">
                  <Button variant="outline">Large</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<div className="flex gap-4">
  <Tooltip content="Small tooltip" size="small">
    <Button variant="outline">Small</Button>
  </Tooltip>
  
  <Tooltip content="Medium tooltip" size="medium">
    <Button variant="outline">Medium</Button>
  </Tooltip>
  
  <Tooltip content="Large tooltip" size="large">
    <Button variant="outline">Large</Button>
  </Tooltip>
</div>`}</CodeBlock>
        </div>

        {/* Custom Delay */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Delay</Typography>
          <Typography variant="body" className="mb-4">
            Control how long to wait before showing the tooltip.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex gap-4 justify-center">
                <Tooltip content="Shows immediately" delay={0}>
                  <Button variant="outline">No Delay</Button>
                </Tooltip>
                
                <Tooltip content="Shows after 200ms (default)" delay={200}>
                  <Button variant="outline">Default Delay</Button>
                </Tooltip>
                
                <Tooltip content="Shows after 1 second" delay={1000}>
                  <Button variant="outline">Long Delay</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<div className="flex gap-4">
  <Tooltip content="Shows immediately" delay={0}>
    <Button variant="outline">No Delay</Button>
  </Tooltip>
  
  <Tooltip content="Shows after 200ms (default)" delay={200}>
    <Button variant="outline">Default Delay</Button>
  </Tooltip>
  
  <Tooltip content="Shows after 1 second" delay={1000}>
    <Button variant="outline">Long Delay</Button>
  </Tooltip>
</div>`}</CodeBlock>
        </div>

        {/* Controlled Tooltip */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Controlled Tooltip</Typography>
          <Typography variant="body" className="mb-4">
            Control tooltip visibility programmatically.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ControlledTooltipExample />
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`const [open, setOpen] = useState(false)

return (
  <div className="flex flex-col gap-4 items-center">
    <Tooltip 
      content="This is a controlled tooltip" 
      open={open}
      onOpenChange={setOpen}
    >
      <Button variant="outline">Controlled Target</Button>
    </Tooltip>
    
    <Button 
      variant="solid" 
      size="small"
      onClick={() => setOpen(!open)}
    >
      Toggle Tooltip
    </Button>
  </div>
)`}</CodeBlock>
        </div>

        {/* With Different Components */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Different Components</Typography>
          <Typography variant="body" className="mb-4">
            Tooltips can wrap any component.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Tooltip content="Edit this item">
                  <IconButton icon={<Edit />} />
                </Tooltip>
                
                <Tooltip content="Delete this item" placement="bottom">
                  <IconButton icon={<Trash2 />} variant="ghost" />
                </Tooltip>
                
                <Tooltip content="Download file">
                  <IconButton icon={<Download />} variant="outline" />
                </Tooltip>
                
                <Tooltip content="This input accepts email addresses">
                  <Input placeholder="Enter email" className="w-48" />
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<div className="flex gap-4">
  <Tooltip content="Edit this item">
    <IconButton icon={<Edit />} />
  </Tooltip>
  
  <Tooltip content="Delete this item" placement="bottom">
    <IconButton icon={<Trash2 />} variant="ghost" />
  </Tooltip>
  
  <Tooltip content="Download file">
    <IconButton icon={<Download />} variant="outline" />
  </Tooltip>
  
  <Tooltip content="This input accepts email addresses">
    <Input placeholder="Enter email" />
  </Tooltip>
</div>`}</CodeBlock>
        </div>

        {/* Rich Content */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Rich Content</Typography>
          <Typography variant="body" className="mb-4">
            Tooltips can contain rich content, not just text.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex gap-4 justify-center">
                <Tooltip 
                  content={
                    <div className="flex flex-col gap-1">
                      <div className="font-semibold">Pro Tip</div>
                      <div className="text-xs opacity-90">
                        Hold Shift while clicking to select multiple items
                      </div>
                    </div>
                  }
                >
                  <Button variant="outline">Rich Content</Button>
                </Tooltip>
                
                <Tooltip 
                  content={
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>4.5/5 Rating</span>
                    </div>
                  }
                  variant="light"
                >
                  <Button variant="outline">With Icons</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<div className="flex gap-4">
  <Tooltip 
    content={
      <div className="flex flex-col gap-1">
        <div className="font-semibold">Pro Tip</div>
        <div className="text-xs opacity-90">
          Hold Shift while clicking to select multiple items
        </div>
      </div>
    }
  >
    <Button variant="outline">Rich Content</Button>
  </Tooltip>
  
  <Tooltip 
    content={
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 text-yellow-500" />
        <span>4.5/5 Rating</span>
      </div>
    }
    variant="light"
  >
    <Button variant="outline">With Icons</Button>
  </Tooltip>
</div>`}</CodeBlock>
        </div>

        {/* Arrow Options */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Arrow Options</Typography>
          <Typography variant="body" className="mb-4">
            Tooltips can be displayed with or without arrows.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex gap-4 justify-center">
                <Tooltip content="Tooltip with arrow" arrow={true}>
                  <Button variant="outline">With Arrow</Button>
                </Tooltip>
                
                <Tooltip content="Tooltip without arrow" arrow={false}>
                  <Button variant="outline">Without Arrow</Button>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme language="tsx">{`<div className="flex gap-4">
  <Tooltip content="Tooltip with arrow" arrow={true}>
    <Button variant="outline">With Arrow</Button>
  </Tooltip>
  
  <Tooltip content="Tooltip without arrow" arrow={false}>
    <Button variant="outline">Without Arrow</Button>
  </Tooltip>
</div>`}</CodeBlock>
        </div>

        <Divider />

        {/* API Reference */}
        <Typography variant="h2" className="mb-4 mt-12">API Reference</Typography>

        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Tooltip Props</Typography>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell><code className="text-sm">children</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">React.ReactElement</code></TableCell>
                  <TableCell><code className="text-sm">-</code></TableCell>
                  <TableCell>The element that triggers the tooltip. Must be a single React element.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">content</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">React.ReactNode</code></TableCell>
                  <TableCell><code className="text-sm">-</code></TableCell>
                  <TableCell>The content to display inside the tooltip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">placement</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">TooltipPlacement</code></TableCell>
                  <TableCell><code className="text-sm">"top"</code></TableCell>
                  <TableCell>The preferred placement of the tooltip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">variant</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">"default" | "glass" | "light"</code></TableCell>
                  <TableCell><code className="text-sm">"default"</code></TableCell>
                  <TableCell>The visual style variant of the tooltip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">size</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">"small" | "medium" | "large"</code></TableCell>
                  <TableCell><code className="text-sm">"medium"</code></TableCell>
                  <TableCell>The size of the tooltip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">delay</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">number</code></TableCell>
                  <TableCell><code className="text-sm">200</code></TableCell>
                  <TableCell>The delay in milliseconds before showing the tooltip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">offset</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">number</code></TableCell>
                  <TableCell><code className="text-sm">6</code></TableCell>
                  <TableCell>The distance in pixels between the tooltip and its trigger.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">arrow</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">boolean</code></TableCell>
                  <TableCell><code className="text-sm">false</code></TableCell>
                  <TableCell>Whether to show an arrow pointing to the trigger element.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">open</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">boolean</code></TableCell>
                  <TableCell><code className="text-sm">undefined</code></TableCell>
                  <TableCell>Controlled open state of the tooltip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">onOpenChange</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">(open: boolean) =&gt; void</code></TableCell>
                  <TableCell><code className="text-sm">undefined</code></TableCell>
                  <TableCell>Callback fired when the open state changes.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">className</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">string</code></TableCell>
                  <TableCell><code className="text-sm">undefined</code></TableCell>
                  <TableCell>Additional CSS classes for the tooltip wrapper.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="text-sm">contentClassName</code></TableCell>
                  <TableCell><code className="text-sm text-muted-foreground">string</code></TableCell>
                  <TableCell><code className="text-sm">undefined</code></TableCell>
                  <TableCell>Additional CSS classes for the tooltip content.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>

        <div className="mb-8">
          <Typography variant="h3" className="mb-4">TooltipPlacement Type</Typography>
          <CodeBlock followTheme language="tsx">{`type TooltipPlacement = 
  | 'top' 
  | 'top-start' 
  | 'top-end'
  | 'bottom' 
  | 'bottom-start' 
  | 'bottom-end'
  | 'left' 
  | 'left-start' 
  | 'left-end'
  | 'right' 
  | 'right-start' 
  | 'right-end'`}</CodeBlock>
        </div>

        <Divider />

        {/* Notes */}
        <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
        <Alert variant="info" className="mb-4">
          <Info className="h-4 w-4" />
          <div className="ml-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Tooltips use the Portal component to render outside the normal DOM hierarchy</li>
              <li>The tooltip automatically adjusts its position to stay within the viewport boundaries</li>
              <li>For accessibility, ensure tooltip content is also available through other means</li>
              <li>Tooltips are pointer-events-none by default, so they won't interfere with mouse interactions</li>
              <li>The trigger element must accept ref and mouse event handlers</li>
              <li>Rich content tooltips should be kept concise to maintain good UX</li>
              <li>Consider using longer delays for non-essential tooltips to reduce visual noise</li>
            </ul>
          </div>
        </Alert>
      </div>
    </div>
  )
}