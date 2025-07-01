'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, Card, CardBody, Typography, CodeBlock, Tabs, TabsList, TabsTrigger, TabsContent, Badge, Container, Section, Alert, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Button , Chip } from '@velvet-ui/core'
import { useState } from 'react'
import { Home, Settings, User, Bell, Search } from 'lucide-react'

export default function NavbarPage() {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Navbar' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Navbar</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A responsive navigation bar component with mobile support and multiple variants.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Navbar */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Navbar</Typography>
          <Typography variant="body" className="mb-4">
            A simple navbar with logo and navigation links.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <Navbar>
                <NavbarBrand>
                  <Home className="h-5 w-5" />
                  <Typography variant="h4">Brand</Typography>
                </NavbarBrand>
                <NavbarContent justify="end">
                  <NavbarItem>
                    <NavbarLink href="#" active>Home</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                    <NavbarLink href="#">About</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                    <NavbarLink href="#">Services</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                    <NavbarLink href="#">Contact</NavbarLink>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Navbar>
  <NavbarBrand>
    <Home className="h-5 w-5" />
    <Typography variant="h4">Brand</Typography>
  </NavbarBrand>
  <NavbarContent justify="end">
    <NavbarItem>
      <NavbarLink href="#" active>Home</NavbarLink>
    </NavbarItem>
    <NavbarItem>
      <NavbarLink href="#">About</NavbarLink>
    </NavbarItem>
    <NavbarItem>
      <NavbarLink href="#">Services</NavbarLink>
    </NavbarItem>
    <NavbarItem>
      <NavbarLink href="#">Contact</NavbarLink>
    </NavbarItem>
  </NavbarContent>
</Navbar>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different navbar variants to match your design.
          </Typography>
          <div className="space-y-4">
            <Card className="mb-4">
              <CardBody className="p-0">
                <Navbar variant="default">
                  <NavbarContent>
                    <Typography variant="body">Default Navbar</Typography>
                  </NavbarContent>
                </Navbar>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody className="p-0">
                <Navbar variant="glass">
                  <NavbarContent>
                    <Typography variant="body">Glass Navbar</Typography>
                  </NavbarContent>
                </Navbar>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody className="p-0">
                <Navbar variant="solid">
                  <NavbarContent>
                    <Typography variant="body">Solid Navbar</Typography>
                  </NavbarContent>
                </Navbar>
              </CardBody>
            </Card>
          </div>
          <CodeBlock followTheme>{`<Navbar variant="default">...</Navbar>
<Navbar variant="glass">...</Navbar>
<Navbar variant="solid">...</Navbar>
<Navbar variant="floating">...</Navbar>`}</CodeBlock>
        </div>

        {/* With Icons and Actions */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icons and Actions</Typography>
          <Typography variant="body" className="mb-4">
            Enhance your navbar with icons and action buttons.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <Navbar>
                <NavbarBrand>
                  <Home className="h-5 w-5" />
                  <Typography variant="h4">MyApp</Typography>
                </NavbarBrand>
                <NavbarContent justify="center">
                  <NavbarItem active={activeItem === 'home'}>
                    <NavbarLink 
                      href="#" 
                      active={activeItem === 'home'}
                      onClick={() => setActiveItem('home')}
                    >
                      Home
                    </NavbarLink>
                  </NavbarItem>
                  <NavbarItem active={activeItem === 'features'}>
                    <NavbarLink 
                      href="#" 
                      active={activeItem === 'features'}
                      onClick={() => setActiveItem('features')}
                    >
                      Features
                    </NavbarLink>
                  </NavbarItem>
                  <NavbarItem active={activeItem === 'pricing'}>
                    <NavbarLink 
                      href="#" 
                      active={activeItem === 'pricing'}
                      onClick={() => setActiveItem('pricing')}
                    >
                      Pricing
                    </NavbarLink>
                  </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                  <NavbarItem>
                    <Button variant="ghost" size="small">
                      <Search className="h-4 w-4" />
                    </Button>
                  </NavbarItem>
                  <NavbarItem>
                    <Button variant="ghost" size="small">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </NavbarItem>
                  <NavbarItem>
                    <Button variant="solid" size="small">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [activeItem, setActiveItem] = useState('home')

<Navbar>
  <NavbarBrand>
    <Home className="h-5 w-5" />
    <Typography variant="h4">MyApp</Typography>
  </NavbarBrand>
  <NavbarContent justify="center">
    <NavbarItem active={activeItem === 'home'}>
      <NavbarLink 
        href="#" 
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')}
      >
        Home
      </NavbarLink>
    </NavbarItem>
    {/* More items... */}
  </NavbarContent>
  <NavbarContent justify="end">
    <NavbarItem>
      <Button variant="ghost" size="small">
        <Search className="h-4 w-4" />
      </Button>
    </NavbarItem>
    <NavbarItem>
      <Button variant="solid" size="small">
        <User className="h-4 w-4 mr-2" />
        Sign In
      </Button>
    </NavbarItem>
  </NavbarContent>
</Navbar>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Adjust the navbar height with different size options.
          </Typography>
          <div className="space-y-4">
            <Card className="mb-4">
              <CardBody className="p-0">
                <Navbar height="small">
                  <NavbarContent>
                    <Typography variant="body">Small Height</Typography>
                  </NavbarContent>
                </Navbar>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody className="p-0">
                <Navbar height="medium">
                  <NavbarContent>
                    <Typography variant="body">Medium Height (Default)</Typography>
                  </NavbarContent>
                </Navbar>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody className="p-0">
                <Navbar height="large">
                  <NavbarContent>
                    <Typography variant="body">Large Height</Typography>
                  </NavbarContent>
                </Navbar>
              </CardBody>
            </Card>
          </div>
          <CodeBlock followTheme>{`<Navbar height="small">...</Navbar>
<Navbar height="medium">...</Navbar>
<Navbar height="large">...</Navbar>`}</CodeBlock>
        </div>

        {/* Sticky Behavior */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sticky Behavior</Typography>
          <Typography variant="body" className="mb-4">
            Control whether the navbar sticks to the top when scrolling.
          </Typography>
          <CodeBlock followTheme>{`// Sticky navbar (default)
<Navbar sticky={true}>...</Navbar>

// Non-sticky navbar
<Navbar sticky={false}>...</Navbar>`}</CodeBlock>
        </div>

        {/* Mobile Breakpoint */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Mobile Breakpoint</Typography>
          <Typography variant="body" className="mb-4">
            Customize when the navbar switches to mobile mode.
          </Typography>
          <CodeBlock followTheme>{`// Show mobile menu on small screens (default: md)
<Navbar mobileBreakpoint="sm">...</Navbar>
<Navbar mobileBreakpoint="md">...</Navbar>
<Navbar mobileBreakpoint="lg">...</Navbar>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Navbar Props</Typography>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'glass' | 'solid' | 'floating'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">The visual style variant of the navbar</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">height</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The height of the navbar</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">sticky</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true</td>
                <td className="p-2 text-sm">Whether the navbar sticks to the top when scrolling</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">logo</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Logo content (deprecated, use NavbarBrand instead)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">mobileBreakpoint</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'sm' | 'md' | 'lg'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'md'</td>
                <td className="p-2 text-sm">Breakpoint for mobile menu</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Navbar content</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">NavbarContent Props</Typography>
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
                <td className="p-2 font-mono text-sm">justify</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'start' | 'center' | 'end'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'start'</td>
                <td className="p-2 text-sm">Content alignment within the navbar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">NavbarItem Props</Typography>
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
                <td className="p-2 font-mono text-sm">active</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether the item is currently active</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">NavbarLink Props</Typography>
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
                <td className="p-2 font-mono text-sm">active</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether the link is currently active</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">href</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Link destination</td>
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
                The navbar automatically adapts to mobile screens with a hamburger menu
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use NavbarBrand, NavbarContent, NavbarItem, and NavbarLink components for proper structure
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The glass variant works best with colorful or image backgrounds
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Active states can be managed with the active prop on NavbarItem or NavbarLink
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}