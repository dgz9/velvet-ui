'use client'

import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarItem, SidebarFooter, SidebarTrigger, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb, Button, Avatar , Chip } from '@velvet-ui/core'
import { Home, Settings, User, Bell, Search, LogOut, ChevronRight, Package, BarChart, Users, FileText } from 'lucide-react'
import { useState } from 'react'

export default function SidebarPage() {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Sidebar' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Sidebar</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A collapsible sidebar navigation component with mobile support and smooth animations.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarGroup, 
  SidebarItem, 
  SidebarFooter,
  SidebarTrigger 
, Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Sidebar */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Sidebar</Typography>
          <Typography variant="body" className="mb-4">
            A simple sidebar with navigation items. The sidebar must be wrapped in a SidebarProvider.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <SidebarProvider defaultCollapsed={false}>
                <div className="flex h-[400px] bg-background-secondary rounded-lg overflow-hidden">
                  <Sidebar>
                    <SidebarHeader>
                      <Package className="h-6 w-6" />
                      <Typography variant="h4">My App</Typography>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarItem 
                          icon={<Home className="h-5 w-5" />}
                          active={activeItem === 'home'}
                          onClick={() => setActiveItem('home')}
                        >
                          Home
                        </SidebarItem>
                        <SidebarItem 
                          icon={<BarChart className="h-5 w-5" />}
                          active={activeItem === 'analytics'}
                          onClick={() => setActiveItem('analytics')}
                        >
                          Analytics
                        </SidebarItem>
                        <SidebarItem 
                          icon={<Users className="h-5 w-5" />}
                          active={activeItem === 'team'}
                          onClick={() => setActiveItem('team')}
                        >
                          Team
                        </SidebarItem>
                        <SidebarItem 
                          icon={<Settings className="h-5 w-5" />}
                          active={activeItem === 'settings'}
                          onClick={() => setActiveItem('settings')}
                        >
                          Settings
                        </SidebarItem>
                      </SidebarGroup>
                    </SidebarContent>
                  </Sidebar>
                  <div className="flex-1 p-6">
                    <Typography variant="h3">Content Area</Typography>
                    <Typography variant="body" className="mt-2">
                      The main content goes here. Try clicking the chevron button to collapse the sidebar.
                    </Typography>
                  </div>
                </div>
              </SidebarProvider>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<SidebarProvider>
  <div className="flex h-screen">
    <Sidebar>
      <SidebarHeader>
        <Package className="h-6 w-6" />
        <Typography variant="h4">My App</Typography>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarItem 
            icon={<Home className="h-5 w-5" />}
            active
          >
            Home
          </SidebarItem>
          <SidebarItem icon={<BarChart className="h-5 w-5" />}>
            Analytics
          </SidebarItem>
          <SidebarItem icon={<Users className="h-5 w-5" />}>
            Team
          </SidebarItem>
          <SidebarItem icon={<Settings className="h-5 w-5" />}>
            Settings
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <main className="flex-1">
      {/* Main content */}
    </main>
  </div>
</SidebarProvider>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different sidebar variants to match your design.
          </Typography>
          <div className="space-y-4">
            <Card>
              <CardBody>
                <Typography variant="h4" className="mb-2">Default</Typography>
                <Typography variant="body" className="text-foreground-secondary">
                  Standard sidebar with subtle borders
                </Typography>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Typography variant="h4" className="mb-2">Glass</Typography>
                <Typography variant="body" className="text-foreground-secondary">
                  Glassmorphic style with backdrop blur
                </Typography>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Typography variant="h4" className="mb-2">Elevated</Typography>
                <Typography variant="body" className="text-foreground-secondary">
                  Elevated appearance with shadow
                </Typography>
              </CardBody>
            </Card>
          </div>
          <CodeBlock followTheme>{`<Sidebar variant="default">...</Sidebar>
<Sidebar variant="glass">...</Sidebar>
<Sidebar variant="elevated">...</Sidebar>`}</CodeBlock>
        </div>

        {/* With Groups and Badges */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Groups and Badges</Typography>
          <Typography variant="body" className="mb-4">
            Organize items into groups and add notification badges.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <SidebarProvider defaultCollapsed={false}>
                <div className="flex h-[500px] bg-background-secondary rounded-lg overflow-hidden">
                  <Sidebar>
                    <SidebarHeader>
                      <Package className="h-6 w-6" />
                      <Typography variant="h4">Dashboard</Typography>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup label="Main">
                        <SidebarItem icon={<Home className="h-5 w-5" />} active>
                          Home
                        </SidebarItem>
                        <SidebarItem icon={<Bell className="h-5 w-5" />} badge="3">
                          Notifications
                        </SidebarItem>
                      </SidebarGroup>
                      
                      <SidebarGroup label="Analytics">
                        <SidebarItem icon={<BarChart className="h-5 w-5" />}>
                          Overview
                        </SidebarItem>
                        <SidebarItem icon={<FileText className="h-5 w-5" />} badge="New">
                          Reports
                        </SidebarItem>
                      </SidebarGroup>
                      
                      <SidebarGroup label="Settings">
                        <SidebarItem icon={<User className="h-5 w-5" />}>
                          Profile
                        </SidebarItem>
                        <SidebarItem icon={<Settings className="h-5 w-5" />}>
                          Preferences
                        </SidebarItem>
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                      <SidebarItem icon={<LogOut className="h-5 w-5" />}>
                        Logout
                      </SidebarItem>
                    </SidebarFooter>
                  </Sidebar>
                  <div className="flex-1 p-6">
                    <Typography variant="h3">Grouped Navigation</Typography>
                    <Typography variant="body" className="mt-2">
                      Items are organized into logical groups with labels.
                    </Typography>
                  </div>
                </div>
              </SidebarProvider>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<SidebarContent>
  <SidebarGroup label="Main">
    <SidebarItem icon={<Home className="h-5 w-5" />} active>
      Home
    </SidebarItem>
    <SidebarItem icon={<Bell className="h-5 w-5" />} badge="3">
      Notifications
    </SidebarItem>
  </SidebarGroup>
  
  <SidebarGroup label="Analytics">
    <SidebarItem icon={<BarChart className="h-5 w-5" />}>
      Overview
    </SidebarItem>
    <SidebarItem icon={<FileText className="h-5 w-5" />} badge="New">
      Reports
    </SidebarItem>
  </SidebarGroup>
</SidebarContent>`}</CodeBlock>
        </div>

        {/* Mobile Sidebar */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Mobile Support</Typography>
          <Typography variant="body" className="mb-4">
            The sidebar automatically adapts to mobile screens with overlay support.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Typography variant="body">
                  On mobile devices, the sidebar:
                </Typography>
                <ul className="list-disc list-inside space-y-2 text-foreground-secondary">
                  <li>Transforms into an overlay drawer</li>
                  <li>Can be toggled with the SidebarTrigger button</li>
                  <li>Includes a backdrop overlay when open</li>
                  <li>Slides in from the left with smooth animations</li>
                </ul>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Mobile trigger button (typically in navbar)
<SidebarTrigger />

// Enable overlay mode for mobile
<SidebarProvider isMobile={isMobile}>
  <Sidebar overlay>
    {/* Sidebar content */}
  </Sidebar>
</SidebarProvider>`}</CodeBlock>
        </div>

        {/* Collapsible Behavior */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Collapsible Behavior</Typography>
          <Typography variant="body" className="mb-4">
            Control the sidebar's collapse state and behavior.
          </Typography>
          <CodeBlock followTheme>{`// Control initial collapsed state
<SidebarProvider defaultCollapsed={true}>
  <Sidebar collapsible={true}>
    {/* Content */}
  </Sidebar>
</SidebarProvider>

// Access collapse state in components
const { collapsed, setCollapsed } = useSidebar()

// Disable collapsing
<Sidebar collapsible={false}>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">SidebarProvider Props</Typography>
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
                <td className="p-2 font-mono text-sm">defaultCollapsed</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Initial collapsed state</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">isMobile</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Enable mobile mode</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Child components</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">Sidebar Props</Typography>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'glass' | 'elevated'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Width of the sidebar</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">collapsible</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true</td>
                <td className="p-2 text-sm">Allow collapsing</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">overlay</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Show overlay backdrop on mobile</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">SidebarItem Props</Typography>
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
                <td className="p-2 font-mono text-sm">icon</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Icon element</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">active</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Active state</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">badge</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string | number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Badge content</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">href</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Link destination</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onClick</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`() => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Click handler</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">SidebarGroup Props</Typography>
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
                <td className="p-2 font-mono text-sm">label</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Group label text</td>
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
                The sidebar uses Framer Motion for smooth collapse/expand animations
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Always wrap the Sidebar component with SidebarProvider for proper state management
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The collapsed state shows only icons, making them important for navigation
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use the useSidebar hook to access sidebar state in child components
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}