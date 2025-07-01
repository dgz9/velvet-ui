'use client'

import { useState, useEffect } from 'react'
import { 
  Spotlight,
  Typography, 
  Card, 
  CardBody, 
  CodeBlock, 
  Breadcrumb, 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell,
  Button,
  Chip
} from '@velvet-ui/core'
import { 
  Search, 
  Home, 
  FileText, 
  Settings, 
  Users, 
  Calendar,
  Mail,
  Star,
  Hash,
  Package,
  Zap
} from 'lucide-react'

export default function SpotlightDocs() {
  const [open, setOpen] = useState(false)
  const [openCustom, setOpenCustom] = useState(false)
  const [openDefault, setOpenDefault] = useState(false)
  const [openLight, setOpenLight] = useState(false)
  const [openStrong, setOpenStrong] = useState(false)
  const [openSmall, setOpenSmall] = useState(false)
  const [openMedium, setOpenMedium] = useState(false)
  const [openLarge, setOpenLarge] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const demoItems = [
    {
      id: '1',
      title: 'Home',
      description: 'Go to home page',
      icon: <Home className="h-5 w-5" />,
      category: 'Navigation',
      action: () => {
        console.log('Navigate to home')
        setOpen(false)
      }
    },
    {
      id: '2',
      title: 'Documentation',
      description: 'View component documentation',
      icon: <FileText className="h-5 w-5" />,
      category: 'Navigation',
      keywords: ['docs', 'guide', 'help'],
      action: () => {
        console.log('Navigate to docs')
        setOpen(false)
      }
    },
    {
      id: '3',
      title: 'Settings',
      description: 'Configure your preferences',
      icon: <Settings className="h-5 w-5" />,
      category: 'Actions',
      keywords: ['preferences', 'config'],
      action: () => {
        console.log('Open settings')
        setOpen(false)
      }
    },
    {
      id: '4',
      title: 'Users',
      description: 'Manage users and permissions',
      icon: <Users className="h-5 w-5" />,
      category: 'Management',
      action: () => {
        console.log('Open users')
        setOpen(false)
      }
    },
    {
      id: '5',
      title: 'Calendar',
      description: 'View and manage events',
      icon: <Calendar className="h-5 w-5" />,
      category: 'Tools',
      action: () => {
        console.log('Open calendar')
        setOpen(false)
      }
    },
    {
      id: '6',
      title: 'Messages',
      description: 'Check your messages',
      icon: <Mail className="h-5 w-5" />,
      category: 'Communication',
      keywords: ['inbox', 'mail', 'email'],
      action: () => {
        console.log('Open messages')
        setOpen(false)
      }
    },
  ]

  // Add keyboard shortcut for basic example
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Spotlight' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Spotlight</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A command palette component for quick navigation and actions, similar to macOS Spotlight or VS Code's command palette.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Spotlight } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            Click the button or press <kbd className="px-2 py-1 bg-muted rounded text-sm">⌘K</kbd> to open the spotlight.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button 
                variant="outline" 
                onClick={() => setOpen(true)}
                beginContent={<Search className="h-4 w-4" />}
              >
                Open Spotlight
              </Button>
              
              <Spotlight
                open={open}
                onOpenChange={setOpen}
                items={demoItems}
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [open, setOpen] = useState(false)

const items = [
  {
    id: '1',
    title: 'Home',
    description: 'Go to home page',
    icon: <Home className="h-5 w-5" />,
    category: 'Navigation',
    action: () => {
      console.log('Navigate to home')
      setOpen(false)
    }
  },
  // ... more items
]

<Button onClick={() => setOpen(true)}>
  Open Spotlight
</Button>

<Spotlight
  open={open}
  onOpenChange={setOpen}
  items={items}
/>`}</CodeBlock>
        </div>

        {/* With Keyboard Shortcut */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Keyboard Shortcut</Typography>
          <Typography variant="body" className="mb-4">
            Integrate keyboard shortcuts to open the spotlight from anywhere in your app.
          </Typography>
          <CodeBlock followTheme>{`useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setOpen(prev => !prev)
    }
  }
  
  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [])`}</CodeBlock>
        </div>

        {/* Custom Placeholder and Messages */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Placeholder and Messages</Typography>
          <Typography variant="body" className="mb-4">
            Customize the placeholder text and empty state message.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button 
                variant="glass" 
                onClick={() => setOpenCustom(true)}
                beginContent={<Zap className="h-4 w-4" />}
              >
                Quick Actions
              </Button>
              
              <Spotlight
                open={openCustom}
                onOpenChange={setOpenCustom}
                items={demoItems}
                placeholder="Type a command or search..."
                emptyMessage="No commands found. Try a different search."
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Spotlight
  open={open}
  onOpenChange={setOpen}
  items={items}
  placeholder="Type a command or search..."
  emptyMessage="No commands found. Try a different search."
/>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different glass effect variants for various visual styles.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setOpenDefault(true)}
              >
                Default Variant
              </Button>
              
              <Button 
                variant="glass" 
                onClick={() => setOpenLight(true)}
              >
                Light Variant
              </Button>
              
              <Button 
                variant="gradient" 
                onClick={() => setOpenStrong(true)}
              >
                Strong Variant
              </Button>
              
              <Spotlight
                open={openDefault}
                onOpenChange={setOpenDefault}
                items={demoItems}
                variant="default"
              />
              
              <Spotlight
                open={openLight}
                onOpenChange={setOpenLight}
                items={demoItems}
                variant="light"
              />
              
              <Spotlight
                open={openStrong}
                onOpenChange={setOpenStrong}
                items={demoItems}
                variant="strong"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Spotlight
  open={open}
  onOpenChange={setOpen}
  items={items}
  variant="light" // "default" | "light" | "strong"
/>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            The spotlight dialog comes in three sizes to accommodate different content needs.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-x-3">
              <Button 
                size="small"
                variant="outline" 
                onClick={() => setOpenSmall(true)}
              >
                Small Spotlight
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => setOpenMedium(true)}
              >
                Medium Spotlight
              </Button>
              
              <Button 
                size="large"
                variant="outline" 
                onClick={() => setOpenLarge(true)}
              >
                Large Spotlight
              </Button>
              
              <Spotlight
                open={openSmall}
                onOpenChange={setOpenSmall}
                items={demoItems}
                size="small"
              />
              
              <Spotlight
                open={openMedium}
                onOpenChange={setOpenMedium}
                items={demoItems}
                size="medium"
              />
              
              <Spotlight
                open={openLarge}
                onOpenChange={setOpenLarge}
                items={demoItems}
                size="large"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Spotlight
  open={open}
  onOpenChange={setOpen}
  items={items}
  size="small" // "small" | "medium" | "large"
/>`}</CodeBlock>
        </div>

        {/* With Search Callback */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Search Callback</Typography>
          <Typography variant="body" className="mb-4">
            Use the onSearch callback to handle search queries, useful for server-side filtering.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-3">
                <Button 
                  variant="gradient" 
                  onClick={() => setOpenSearch(true)}
                  beginContent={<Search className="h-4 w-4" />}
                >
                  Search with Callback
                </Button>
                <Typography variant="small" className="text-foreground-secondary">
                  Last search query: "{searchQuery}"
                </Typography>
              </div>
              
              <Spotlight
                open={openSearch}
                onOpenChange={setOpenSearch}
                items={demoItems}
                onSearch={(query) => {
                  setSearchQuery(query)
                  console.log('Search query:', query)
                }}
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Spotlight
  open={open}
  onOpenChange={setOpen}
  items={items}
  onSearch={(query) => {
    console.log('Search query:', query)
    // Perform server-side search
  }}
/>`}</CodeBlock>
        </div>

        {/* Item Structure */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Item Structure</Typography>
          <Typography variant="body" className="mb-4">
            Each item in the spotlight can have various properties for rich functionality.
          </Typography>
          <CodeBlock followTheme>{`interface SpotlightItem {
  id: string                    // Unique identifier
  title: string                 // Display title
  description?: string          // Optional description
  icon?: React.ReactNode       // Optional icon
  category?: string            // Optional category for grouping
  action?: () => void          // Action to execute on selection
  keywords?: string[]          // Additional search keywords
}`}</CodeBlock>
        </div>

        {/* API Reference */}
        <Typography variant="h2" className="mb-4 mt-12">API Reference</Typography>
        
        {/* Props */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Props</Typography>
          <Card>
            <CardBody>
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
                    <TableCell><code>open</code></TableCell>
                    <TableCell><code>boolean</code></TableCell>
                    <TableCell><code>false</code></TableCell>
                    <TableCell>Controls the visibility of the spotlight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>onOpenChange</code></TableCell>
                    <TableCell><code>(open: boolean) => void</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Callback when the open state changes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>items</code></TableCell>
                    <TableCell><code>SpotlightItem[]</code></TableCell>
                    <TableCell><code>[]</code></TableCell>
                    <TableCell>Array of items to display in the spotlight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>placeholder</code></TableCell>
                    <TableCell><code>string</code></TableCell>
                    <TableCell><code>"Search for anything..."</code></TableCell>
                    <TableCell>Placeholder text for the search input</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>emptyMessage</code></TableCell>
                    <TableCell><code>string</code></TableCell>
                    <TableCell><code>"No results found"</code></TableCell>
                    <TableCell>Message shown when no results match</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>recentLabel</code></TableCell>
                    <TableCell><code>string</code></TableCell>
                    <TableCell><code>"Recent"</code></TableCell>
                    <TableCell>Label for recent items section</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>showRecent</code></TableCell>
                    <TableCell><code>boolean</code></TableCell>
                    <TableCell><code>true</code></TableCell>
                    <TableCell>Whether to show recent items when no query</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>maxRecent</code></TableCell>
                    <TableCell><code>number</code></TableCell>
                    <TableCell><code>5</code></TableCell>
                    <TableCell>Maximum number of recent items to show</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>onSearch</code></TableCell>
                    <TableCell><code>(query: string) => void</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Callback when search query changes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>size</code></TableCell>
                    <TableCell><code>"small" | "medium" | "large"</code></TableCell>
                    <TableCell><code>"medium"</code></TableCell>
                    <TableCell>Size of the spotlight dialog</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>variant</code></TableCell>
                    <TableCell><code>"default" | "light" | "strong"</code></TableCell>
                    <TableCell><code>"light"</code></TableCell>
                    <TableCell>Glass effect variant for the spotlight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>className</code></TableCell>
                    <TableCell><code>string</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Additional CSS classes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Keyboard Shortcuts</Typography>
          <Card>
            <CardBody>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Key</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell><kbd>↑</kbd> / <kbd>↓</kbd></TableCell>
                    <TableCell>Navigate through items</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><kbd>Enter</kbd></TableCell>
                    <TableCell>Select the highlighted item</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><kbd>Esc</kbd></TableCell>
                    <TableCell>Close the spotlight</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>

        {/* Best Practices */}
        <Typography variant="h2" className="mb-4 mt-12">Best Practices</Typography>
        <div className="space-y-4">
          <Card>
            <CardBody>
              <Typography variant="h4" className="mb-2">Provide clear actions</Typography>
              <Typography variant="body" className="text-foreground-secondary">
                Each item should have a clear title and description that explains what will happen when selected.
              </Typography>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <Typography variant="h4" className="mb-2">Use categories wisely</Typography>
              <Typography variant="body" className="text-foreground-secondary">
                Group related items with categories to help users find what they're looking for faster.
              </Typography>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <Typography variant="h4" className="mb-2">Add keyboard shortcuts</Typography>
              <Typography variant="body" className="text-foreground-secondary">
                Implement <kbd>⌘K</kbd> or <kbd>Ctrl+K</kbd> as a standard shortcut to open the spotlight for power users.
              </Typography>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <Typography variant="h4" className="mb-2">Include keywords</Typography>
              <Typography variant="body" className="text-foreground-secondary">
                Add relevant keywords to items to improve searchability, especially for items with technical names.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}