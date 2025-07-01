'use client'

import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb,
  Chip 
} from '@velvet-ui/core'
import { useState } from 'react'

export default function AccordionPage() {
  const [singleValue, setSingleValue] = useState<string>('item-1')
  const [multipleValue, setMultipleValue] = useState<string[]>(['item-1', 'item-3'])

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Accordion' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Accordion</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A collapsible content panel for organizing and revealing information progressively.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Accordion */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Accordion</Typography>
          <Typography variant="body" className="mb-4">
            A simple accordion with single item expansion.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Velvet UI?</AccordionTrigger>
                  <AccordionContent>
                    Velvet UI is a modern React component library built with TypeScript and Tailwind CSS. 
                    It provides beautiful, accessible components with smooth animations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes! All components follow WAI-ARIA guidelines and include proper keyboard navigation,
                    screen reader support, and focus management.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I customize it?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Velvet UI is built with customization in mind. You can override styles,
                    extend components, and create your own themes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Velvet UI?</AccordionTrigger>
    <AccordionContent>
      Velvet UI is a modern React component library built with TypeScript and Tailwind CSS. 
      It provides beautiful, accessible components with smooth animations.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes! All components follow WAI-ARIA guidelines and include proper keyboard navigation,
      screen reader support, and focus management.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Can I customize it?</AccordionTrigger>
    <AccordionContent>
      Absolutely! Velvet UI is built with customization in mind. You can override styles,
      extend components, and create your own themes.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
        </div>

        {/* Multiple Selection */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Multiple Selection</Typography>
          <Typography variant="body" className="mb-4">
            Allow multiple items to be expanded simultaneously.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Flexible Layout</AccordionTrigger>
                  <AccordionContent>
                    Build responsive layouts with our Grid and Container components.
                    They adapt seamlessly to different screen sizes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Rich Animations</AccordionTrigger>
                  <AccordionContent>
                    Powered by Framer Motion, all components include smooth spring animations
                    that feel natural and responsive.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Dark Mode Support</AccordionTrigger>
                  <AccordionContent>
                    Every component is designed with dark mode in mind, providing
                    beautiful color schemes for both light and dark themes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Flexible Layout</AccordionTrigger>
    <AccordionContent>
      Build responsive layouts with our Grid and Container components.
      They adapt seamlessly to different screen sizes.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Rich Animations</AccordionTrigger>
    <AccordionContent>
      Powered by Framer Motion, all components include smooth spring animations
      that feel natural and responsive.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Dark Mode Support</AccordionTrigger>
    <AccordionContent>
      Every component is designed with dark mode in mind, providing
      beautiful color schemes for both light and dark themes.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
        </div>

        {/* Controlled Accordion */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Controlled</Typography>
          <Typography variant="body" className="mb-4">
            Control the accordion state with external state management.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setSingleValue('item-1')}
                    className="px-3 py-1 text-sm rounded bg-primary-500 text-white"
                  >
                    Open First
                  </button>
                  <button
                    onClick={() => setSingleValue('item-2')}
                    className="px-3 py-1 text-sm rounded bg-primary-500 text-white"
                  >
                    Open Second
                  </button>
                  <button
                    onClick={() => setSingleValue('')}
                    className="px-3 py-1 text-sm rounded bg-gray-500 text-white"
                  >
                    Close All
                  </button>
                </div>
                <Accordion type="single" value={singleValue} onValueChange={(value) => setSingleValue(value as string)}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>First Item</AccordionTrigger>
                    <AccordionContent>
                      This accordion is controlled by external state.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Second Item</AccordionTrigger>
                    <AccordionContent>
                      You can programmatically open and close items.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [value, setValue] = useState<string>('item-1')

<Accordion type="single" value={value} onValueChange={setValue}>
  <AccordionItem value="item-1">
    <AccordionTrigger>First Item</AccordionTrigger>
    <AccordionContent>
      This accordion is controlled by external state.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Item</AccordionTrigger>
    <AccordionContent>
      You can programmatically open and close items.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Accordion</Typography>
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
                <td className="p-2 font-mono text-sm">type</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'single' | 'multiple'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'single'</td>
                <td className="p-2 text-sm">Whether only one or multiple items can be open</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`string | string[]`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Controlled open state</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">defaultValue</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`string | string[]`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Default open state</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onValueChange</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`(value: string | string[]) => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Callback when open state changes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">collapsible</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true</td>
                <td className="p-2 text-sm">Allow closing all items (single type only)</td>
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

        <Typography variant="h3" className="mb-4">AccordionItem</Typography>
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
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">required</td>
                <td className="p-2 text-sm">Unique identifier for the item</td>
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
                The accordion uses smooth spring animations for expanding and collapsing content
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Each AccordionItem must have a unique value prop
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component is fully keyboard accessible with arrow key navigation
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                AccordionTrigger and AccordionContent must be direct children of AccordionItem
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}