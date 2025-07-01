'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb , Chip } from '@velvet-ui/core'
import { useState } from 'react'

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Tabs' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Tabs</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A set of layered sections of content that display one panel at a time.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Tabs, TabsList, TabsTrigger, TabsContent , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Tabs */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Tabs</Typography>
          <Typography variant="body" className="mb-4">
            A simple set of tabs with content panels.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardBody>
                      <Typography variant="h4" className="mb-2">Account Information</Typography>
                      <Typography variant="body" className="text-foreground-secondary">
                        Make changes to your account here. Click save when you're done.
                      </Typography>
                    </CardBody>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardBody>
                      <Typography variant="h4" className="mb-2">Password Settings</Typography>
                      <Typography variant="body" className="text-foreground-secondary">
                        Change your password here. After saving, you'll be logged out.
                      </Typography>
                    </CardBody>
                  </Card>
                </TabsContent>
                <TabsContent value="settings">
                  <Card>
                    <CardBody>
                      <Typography variant="h4" className="mb-2">General Settings</Typography>
                      <Typography variant="body" className="text-foreground-secondary">
                        Manage your general account settings and preferences.
                      </Typography>
                    </CardBody>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardBody>
        <Typography variant="h4" className="mb-2">Account Information</Typography>
        <Typography variant="body" className="text-foreground-secondary">
          Make changes to your account here. Click save when you're done.
        </Typography>
      </CardBody>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    {/* Password content */}
  </TabsContent>
  <TabsContent value="settings">
    {/* Settings content */}
  </TabsContent>
</Tabs>`}</CodeBlock>
        </div>

        {/* Controlled Tabs */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Controlled Tabs</Typography>
          <Typography variant="body" className="mb-4">
            Control the active tab with state for programmatic control.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="mb-4">
                <Typography variant="body" className="mb-2">Active tab: <strong>{activeTab}</strong></Typography>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('account')}
                    className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                  >
                    Go to Account
                  </button>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                  >
                    Go to Notifications
                  </button>
                </div>
              </div>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Typography>Account settings content</Typography>
                </TabsContent>
                <TabsContent value="notifications">
                  <Typography>Notification preferences</Typography>
                </TabsContent>
                <TabsContent value="privacy">
                  <Typography>Privacy controls</Typography>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [activeTab, setActiveTab] = useState('account')

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
    <TabsTrigger value="privacy">Privacy</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    {/* Content */}
  </TabsContent>
  {/* More content panels */}
</Tabs>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different tab styles to match your design.
          </Typography>
          
          {/* Solid Variant */}
          <Typography variant="h4" className="mb-2 mt-4">Solid (Default)</Typography>
          <Card className="mb-4">
            <CardBody>
              <Tabs defaultValue="tab1" variant="solid">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <Typography>Content for tab 1</Typography>
                </TabsContent>
                <TabsContent value="tab2">
                  <Typography>Content for tab 2</Typography>
                </TabsContent>
                <TabsContent value="tab3">
                  <Typography>Content for tab 3</Typography>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Tabs defaultValue="tab1" variant="solid">
  {/* Tabs content */}
</Tabs>`}</CodeBlock>

          {/* Underlined Variant */}
          <Typography variant="h4" className="mb-2 mt-4">Underlined</Typography>
          <Card className="mb-4">
            <CardBody>
              <Tabs defaultValue="tab1" variant="underlined">
                <TabsList>
                  <TabsTrigger value="tab1">Overview</TabsTrigger>
                  <TabsTrigger value="tab2">Analytics</TabsTrigger>
                  <TabsTrigger value="tab3">Reports</TabsTrigger>
                  <TabsTrigger value="tab4">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <Typography>Overview content</Typography>
                </TabsContent>
                <TabsContent value="tab2">
                  <Typography>Analytics content</Typography>
                </TabsContent>
                <TabsContent value="tab3">
                  <Typography>Reports content</Typography>
                </TabsContent>
                <TabsContent value="tab4">
                  <Typography>Notifications content</Typography>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Tabs defaultValue="tab1" variant="underlined">
  {/* Tabs content */}
</Tabs>`}</CodeBlock>

          {/* Pills Variant */}
          <Typography variant="h4" className="mb-2 mt-4">Pills</Typography>
          <Card className="mb-4">
            <CardBody>
              <Tabs defaultValue="tab1" variant="pills">
                <TabsList>
                  <TabsTrigger value="tab1">All</TabsTrigger>
                  <TabsTrigger value="tab2">Active</TabsTrigger>
                  <TabsTrigger value="tab3">Draft</TabsTrigger>
                  <TabsTrigger value="tab4">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <Typography>All items</Typography>
                </TabsContent>
                <TabsContent value="tab2">
                  <Typography>Active items</Typography>
                </TabsContent>
                <TabsContent value="tab3">
                  <Typography>Draft items</Typography>
                </TabsContent>
                <TabsContent value="tab4">
                  <Typography>Archived items</Typography>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Tabs defaultValue="tab1" variant="pills">
  {/* Tabs content */}
</Tabs>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Tabs come in different sizes to fit various contexts.
          </Typography>
          
          {/* Small */}
          <Typography variant="h4" className="mb-2 mt-4">Small</Typography>
          <Card className="mb-4">
            <CardBody>
              <Tabs defaultValue="tab1" size="small">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <Typography>Small tabs content</Typography>
                </TabsContent>
                <TabsContent value="tab2">
                  <Typography>Small tabs content</Typography>
                </TabsContent>
                <TabsContent value="tab3">
                  <Typography>Small tabs content</Typography>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Tabs defaultValue="tab1" size="small">
  {/* Tabs content */}
</Tabs>`}</CodeBlock>

          {/* Large */}
          <Typography variant="h4" className="mb-2 mt-4">Large</Typography>
          <Card className="mb-4">
            <CardBody>
              <Tabs defaultValue="tab1" size="large">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <Typography>Large tabs content</Typography>
                </TabsContent>
                <TabsContent value="tab2">
                  <Typography>Large tabs content</Typography>
                </TabsContent>
                <TabsContent value="tab3">
                  <Typography>Large tabs content</Typography>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Tabs defaultValue="tab1" size="large">
  {/* Tabs content */}
</Tabs>`}</CodeBlock>
        </div>

        {/* Full Width */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Full Width</Typography>
          <Typography variant="body" className="mb-4">
            Make tabs stretch to fill the available width.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Tabs defaultValue="tab1" fullWidth>
                <TabsList>
                  <TabsTrigger value="tab1">First Tab</TabsTrigger>
                  <TabsTrigger value="tab2">Second Tab</TabsTrigger>
                  <TabsTrigger value="tab3">Third Tab</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <Typography>First tab content</Typography>
                </TabsContent>
                <TabsContent value="tab2">
                  <Typography>Second tab content</Typography>
                </TabsContent>
                <TabsContent value="tab3">
                  <Typography>Third tab content</Typography>
                </TabsContent>
              </Tabs>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Tabs defaultValue="tab1" fullWidth>
  {/* Tabs content */}
</Tabs>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Tabs</Typography>
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
                <td className="p-2 font-mono text-sm">defaultValue</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The default active tab value (uncontrolled)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The controlled active tab value</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onValueChange</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`(value: string) => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Callback when the active tab changes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'underlined' | 'pills'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Size of the tabs</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">fullWidth</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether tabs should stretch to fill width</td>
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

        <Typography variant="h3" className="mb-4">TabsTrigger</Typography>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The value that activates this tab</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">disabled</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether the tab trigger is disabled</td>
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

        <Typography variant="h3" className="mb-4">TabsContent</Typography>
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
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The value that shows this content</td>
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
                Tab content animates smoothly when switching between tabs
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The underlined variant includes an animated underline indicator
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Tabs are keyboard accessible - use arrow keys to navigate between tabs
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use controlled mode when you need to sync tab state with URL or other components
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}