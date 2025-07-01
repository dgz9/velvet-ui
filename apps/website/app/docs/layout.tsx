'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarItem,
  SidebarTrigger,
  Typography,
  Tree,
  TreeNode
} from '@velvet-ui/core'
import { 
  Book, 
  Layers, 
  Palette, 
  Rocket,
  Code2,
  Package,
  Component,
  Type,
  CheckSquare,
  Divide,
  Grid3X3,
  TextCursor,
  Loader,
  Square,
  MousePointer,
  ChevronDown,
  Bell,
  FileText,
  Menu,
  X,
  Navigation2,
  Box,
  Zap,
  Layout,
  BarChart3,
  Table,
  NotebookTabs,
  Sun,
  Columns3,
  Tag,
  Hash,
  User,
  Circle,
  Search,
  Sparkles,
  Info,
  Sidebar as SidebarIcon,
  FolderTree
} from 'lucide-react'
import { useState, useEffect } from 'react'

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs', icon: Book },
      { 
        title: 'Installation', 
        href: '/docs/installation', 
        icon: Package,
        children: [
          { title: 'Overview', href: '/docs/installation', icon: Book },
          { title: 'Next.js', href: '/docs/installation/nextjs', icon: Code2 },
          { title: 'Vite', href: '/docs/installation/vite', icon: Code2 },
          { title: 'Remix', href: '/docs/installation/remix', icon: Code2 },
          { title: 'Gatsby', href: '/docs/installation/gatsby', icon: Code2 },
        ]
      },
      { title: 'Quick Start', href: '/docs/quick-start', icon: Rocket },
    ],
  },
  {
    title: 'Theming',
    items: [
      { title: 'Themes', href: '/docs/themes', icon: Palette },
      { title: 'Customization', href: '/docs/customization', icon: Code2 },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Accordion', href: '/docs/components/accordion', icon: ChevronDown },
      { title: 'Alert', href: '/docs/components/alert', icon: Bell },
      { title: 'Autocomplete', href: '/docs/components/autocomplete', icon: Search },
      { title: 'Avatar', href: '/docs/components/avatar', icon: User },
      { title: 'Badge', href: '/docs/components/badge', icon: Tag },
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb', icon: Navigation2 },
      { title: 'Button', href: '/docs/components/button', icon: MousePointer },
      { title: 'Card', href: '/docs/components/card', icon: Square },
      { title: 'Checkbox', href: '/docs/components/checkbox', icon: CheckSquare },
      { title: 'CheckboxGroup', href: '/docs/components/checkboxgroup', icon: CheckSquare },
      { title: 'Chip', href: '/docs/components/chip', icon: Hash },
      { title: 'CodeBlock', href: '/docs/components/codeblock', icon: Code2 },
      { title: 'Container', href: '/docs/components/container', icon: Box },
      { title: 'Divider', href: '/docs/components/divider', icon: Divide },
      { title: 'Feature', href: '/docs/components/feature', icon: Zap },
      { title: 'Grid', href: '/docs/components/grid', icon: Grid3X3 },
      { title: 'IconButton', href: '/docs/components/iconbutton', icon: Circle },
      { title: 'Input', href: '/docs/components/input', icon: TextCursor },
      { title: 'Loading', href: '/docs/components/loading', icon: Loader },
      { title: 'Modal', href: '/docs/components/modal', icon: Square },
      { title: 'Navbar', href: '/docs/components/navbar', icon: Navigation2 },
      { title: 'Portal', href: '/docs/components/portal', icon: Component },
      { title: 'Section', href: '/docs/components/section', icon: Layout },
      { title: 'Select', href: '/docs/components/select', icon: ChevronDown },
      { title: 'Sidebar', href: '/docs/components/sidebar', icon: Columns3 },
      { title: 'SimpleGrid', href: '/docs/components/simplegrid', icon: Grid3X3 },
      { title: 'Spotlight', href: '/docs/components/spotlight', icon: Sparkles },
      { title: 'Stat', href: '/docs/components/stat', icon: BarChart3 },
      { title: 'Table', href: '/docs/components/table', icon: Table },
      { title: 'Tabs', href: '/docs/components/tabs', icon: NotebookTabs },
      { title: 'ThemeSelector', href: '/docs/components/themeselector', icon: Sun },
      { title: 'Toast', href: '/docs/components/toast', icon: Bell },
      { title: 'Tooltip', href: '/docs/components/tooltip', icon: Info },
      { title: 'Tree', href: '/docs/components/tree', icon: FolderTree },
      { title: 'Typography', href: '/docs/components/typography', icon: Type },
    ],
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [expandedIds, setExpandedIds] = useState<string[]>(['getting-started', 'components', 'installation'])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Convert navigation to TreeNode format
  const treeData: TreeNode[] = navigation.map((section) => ({
    id: section.title.toLowerCase().replace(/\s+/g, '-'),
    label: section.title,
    children: section.items.map((item) => ({
      id: item.href,
      label: item.children ? (
        // For items with children, don't make them clickable
        <div className={`flex items-center gap-2`}>
          {item.icon && <item.icon className="h-4 w-4" />}
          <span>{item.title}</span>
        </div>
      ) : (
        // For items without children, make them links
        <Link 
          href={item.href}
          className={`flex items-center gap-2 ${pathname === item.href ? 'text-primary' : ''}`}
        >
          {item.icon && <item.icon className="h-4 w-4" />}
          <span>{item.title}</span>
        </Link>
      ),
      children: item.children?.map((child) => ({
        id: child.href,
        label: (
          <Link 
            href={child.href}
            className={`flex items-center gap-2 ${pathname === child.href ? 'text-primary' : ''}`}
          >
            {child.icon && <child.icon className="h-4 w-4" />}
            <span>{child.title}</span>
          </Link>
        ),
      })),
    })),
  }))

  return (
    <SidebarProvider defaultCollapsed={isMobile} isMobile={isMobile}>
      <div className="flex min-h-screen">
        {/* Enhanced mobile menu button */}
        <div className="fixed left-4 top-20 z-50 md:hidden">
          <SidebarTrigger className="bg-background/80 backdrop-blur-xl shadow-lg border border-border/20" />
        </div>

        {/* Enhanced glassmorphism Sidebar */}
        <Sidebar 
          variant="glass" 
          size="medium"
          className="sticky top-16 h-[calc(100vh-4rem)] shadow-2xl"
          overlay={true}
        >
          <SidebarHeader className="backdrop-blur-xl">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-lg flex-shrink-0">
              <Book className="h-5 w-5 text-primary-foreground" />
            </div>
            <Typography variant="h5" className="font-semibold truncate bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Documentation</Typography>
          </SidebarHeader>
          
          <SidebarContent>
            <Tree
              data={treeData}
              expandedIds={expandedIds}
              onExpand={(nodeId, isExpanded) => {
                setExpandedIds(prev => 
                  isExpanded 
                    ? [...prev, nodeId]
                    : prev.filter(id => id !== nodeId)
                )
              }}
              showIcons={false}
              className="p-2"
            />
          </SidebarContent>
        </Sidebar>

        {/* Main content with glass background */}
        <main className="flex-1 w-full relative bg-background pt-16">
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          </div>
          
          <div className="mx-auto max-w-4xl px-6 py-6 md:px-8 lg:py-8">
            <div className="relative">
              {/* Glass content wrapper */}
              <div className="absolute inset-0 bg-surface/60 backdrop-blur-sm rounded-2xl -z-10 border border-border/50" />
              <div className="relative">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}