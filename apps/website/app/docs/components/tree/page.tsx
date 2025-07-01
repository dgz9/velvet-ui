'use client'

import { Tree, TreeNode, Card, CardBody, Typography, CodeBlock, Tabs, TabsList, TabsTrigger, TabsContent, Badge, Container, Section, Alert, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Chip } from '@velvet-ui/core'
import { useState } from 'react'
import { File, Folder, FileText, Image, Code, Lock } from "lucide-react"

export default function TreePage() {
  const [expandedIds, setExpandedIds] = useState<string[]>(['src'])
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const basicData: TreeNode[] = [
    {
      id: '1',
      label: 'Documents',
      icon: <Folder className="h-4 w-4" />,
      children: [
        {
          id: '1-1',
          label: 'Resume.pdf',
          icon: <File className="h-4 w-4" />,
        },
        {
          id: '1-2',
          label: 'Cover Letter.docx',
          icon: <File className="h-4 w-4" />,
        },
      ],
    },
    {
      id: '2',
      label: 'Projects',
      icon: <Folder className="h-4 w-4" />,
      children: [
        {
          id: '2-1',
          label: 'Website',
          icon: <Folder className="h-4 w-4" />,
          children: [
            {
              id: '2-1-1',
              label: 'index.html',
              icon: <File className="h-4 w-4" />,
            },
            {
              id: '2-1-2',
              label: 'styles.css',
              icon: <File className="h-4 w-4" />,
            },
          ],
        },
      ],
    },
  ]

  const controlledData: TreeNode[] = [
    {
      id: 'src',
      label: 'src',
      icon: <Folder className="h-4 w-4" />,
      children: [
        {
          id: 'components',
          label: 'components',
          icon: <Folder className="h-4 w-4" />,
          children: [
            {
              id: 'Button.tsx',
              label: 'Button.tsx',
              icon: <Code className="h-4 w-4 text-blue-500" />,
            },
            {
              id: 'Card.tsx',
              label: 'Card.tsx',
              icon: <Code className="h-4 w-4 text-blue-500" />,
            },
          ],
        },
        {
          id: 'assets',
          label: 'assets',
          icon: <Folder className="h-4 w-4" />,
          children: [
            {
              id: 'logo.png',
              label: 'logo.png',
              icon: <Image className="h-4 w-4 text-green-500" />,
            },
            {
              id: 'styles.css',
              label: 'styles.css',
              icon: <FileText className="h-4 w-4 text-yellow-500" />,
            },
          ],
        },
      ],
    },
  ]

  const disabledData: TreeNode[] = [
    {
      id: '1',
      label: 'Public',
      icon: <Folder className="h-4 w-4" />,
      children: [
        {
          id: '1-1',
          label: 'readme.md',
          icon: <File className="h-4 w-4" />,
        },
      ],
    },
    {
      id: '2',
      label: 'Private',
      icon: <Lock className="h-4 w-4" />,
      disabled: true,
      children: [
        {
          id: '2-1',
          label: 'secrets.env',
          icon: <File className="h-4 w-4" />,
        },
      ],
    },
  ]

  const handleExpand = (nodeId: string, isExpanded: boolean) => {
    setExpandedIds(prev => 
      isExpanded 
        ? [...prev, nodeId] 
        : prev.filter(id => id !== nodeId)
    )
  }

  const handleSelect = (node: TreeNode) => {
    setSelectedIds(prev => 
      prev.includes(node.id)
        ? prev.filter(id => id !== node.id)
        : [...prev, node.id]
    )
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Tree', href: '/docs/components/tree' }
        ]}
        className="mb-6"
      />

      <Typography variant="h1" className="mb-4">Tree</Typography>
      <Typography variant="lead" className="mb-8 text-surface-foreground-secondary">
        A hierarchical tree component for displaying nested data structures with expand/collapse functionality.
      </Typography>

      <Section>
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme>{`import { Tree } from '@velvet-ui/react'`}</CodeBlock>
      </Section>

      <Section>
        <Typography variant="h2" className="mb-6">Examples</Typography>
        
        <Container className="space-y-8">
          {/* Basic Example */}
          <div>
            <Typography variant="h3" className="mb-4">Basic Tree</Typography>
            <Typography variant="body" className="mb-4 text-surface-foreground-secondary">
              A simple tree with expandable nodes.
            </Typography>
            
            <Card className="mb-4">
              <CardBody className="p-8">
                <div className="w-full max-w-sm">
                  <Tree data={basicData} />
                </div>
              </CardBody>
            </Card>

            <CodeBlock followTheme>{`import { Tree, TreeNode } from '@velvet-ui/react'
import { File, Folder } from 'lucide-react'

const data: TreeNode[] = [
  {
    id: '1',
    label: 'Documents',
    icon: <Folder className="h-4 w-4" />,
    children: [
      {
        id: '1-1',
        label: 'Resume.pdf',
        icon: <File className="h-4 w-4" />,
      },
      {
        id: '1-2',
        label: 'Cover Letter.docx',
        icon: <File className="h-4 w-4" />,
      },
    ],
  },
  {
    id: '2',
    label: 'Projects',
    icon: <Folder className="h-4 w-4" />,
    children: [
      {
        id: '2-1',
        label: 'Website',
        icon: <Folder className="h-4 w-4" />,
        children: [
          {
            id: '2-1-1',
            label: 'index.html',
            icon: <File className="h-4 w-4" />,
          },
          {
            id: '2-1-2',
            label: 'styles.css',
            icon: <File className="h-4 w-4" />,
          },
        ],
      },
    ],
  },
]

export default function TreeExample() {
  return <Tree data={data} />
}`}</CodeBlock>
          </div>

          {/* Controlled Example */}
          <div>
            <Typography variant="h3" className="mb-4">Controlled Tree</Typography>
            <Typography variant="body" className="mb-4 text-surface-foreground-secondary">
              Tree with controlled expanded and selected states.
            </Typography>
            
            <Card className="mb-4">
              <CardBody className="p-8">
                <div className="w-full max-w-sm space-y-4">
                  <Tree 
                    data={controlledData} 
                    expandedIds={expandedIds}
                    selectedIds={selectedIds}
                    onExpand={handleExpand}
                    onSelect={handleSelect}
                    itemVariant="highlight"
                  />
                  <div className="text-sm text-muted-foreground">
                    Selected: {selectedIds.join(', ') || 'None'}
                  </div>
                </div>
              </CardBody>
            </Card>

            <CodeBlock followTheme>{`import { useState } from 'react'
import { Tree, TreeNode } from '@velvet-ui/react'
import { FileText, Image, Code, Folder } from 'lucide-react'

const data: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    icon: <Folder className="h-4 w-4" />,
    children: [
      {
        id: 'components',
        label: 'components',
        icon: <Folder className="h-4 w-4" />,
        children: [
          {
            id: 'Button.tsx',
            label: 'Button.tsx',
            icon: <Code className="h-4 w-4 text-blue-500" />,
          },
          {
            id: 'Card.tsx',
            label: 'Card.tsx',
            icon: <Code className="h-4 w-4 text-blue-500" />,
          },
        ],
      },
      {
        id: 'assets',
        label: 'assets',
        icon: <Folder className="h-4 w-4" />,
        children: [
          {
            id: 'logo.png',
            label: 'logo.png',
            icon: <Image className="h-4 w-4 text-green-500" />,
          },
          {
            id: 'styles.css',
            label: 'styles.css',
            icon: <FileText className="h-4 w-4 text-yellow-500" />,
          },
        ],
      },
    ],
  },
]

export default function ControlledTree() {
  const [expandedIds, setExpandedIds] = useState<string[]>(['src'])
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const handleExpand = (nodeId: string, isExpanded: boolean) => {
    setExpandedIds(prev => 
      isExpanded 
        ? [...prev, nodeId] 
        : prev.filter(id => id !== nodeId)
    )
  }

  const handleSelect = (node: TreeNode) => {
    setSelectedIds(prev => 
      prev.includes(node.id)
        ? prev.filter(id => id !== node.id)
        : [...prev, node.id]
    )
  }

  return (
    <div className="space-y-4">
      <Tree 
        data={data} 
        expandedIds={expandedIds}
        selectedIds={selectedIds}
        onExpand={handleExpand}
        onSelect={handleSelect}
        itemVariant="highlight"
      />
      <div className="text-sm text-muted-foreground">
        Selected: {selectedIds.join(', ') || 'None'}
      </div>
    </div>
  )
}`}</CodeBlock>
          </div>

          {/* Variants Example */}
          <div>
            <Typography variant="h3" className="mb-4">Tree Variants</Typography>
            <Typography variant="body" className="mb-4 text-surface-foreground-secondary">
              Different tree sizes and styles.
            </Typography>
            
            <Card className="mb-4">
              <CardBody className="p-8">
                <div className="w-full max-w-sm space-y-6">
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Compact</h4>
                    <Tree data={basicData} variant="compact" />
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Default</h4>
                    <Tree data={basicData} variant="default" />
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Spacious</h4>
                    <Tree data={basicData} variant="spacious" />
                  </div>
                </div>
              </CardBody>
            </Card>

            <CodeBlock followTheme>{`import { Tree, TreeNode } from '@velvet-ui/react'

const data: TreeNode[] = [
  {
    id: '1',
    label: 'Root Node',
    children: [
      { id: '1-1', label: 'Child 1' },
      { id: '1-2', label: 'Child 2' },
    ],
  },
]

export default function TreeVariants() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 font-medium">Compact</h4>
        <Tree data={data} variant="compact" />
      </div>
      
      <div>
        <h4 className="mb-2 font-medium">Default</h4>
        <Tree data={data} variant="default" />
      </div>
      
      <div>
        <h4 className="mb-2 font-medium">Spacious</h4>
        <Tree data={data} variant="spacious" />
      </div>
    </div>
  )
}`}</CodeBlock>
          </div>

          {/* Disabled Example */}
          <div>
            <Typography variant="h3" className="mb-4">Disabled Nodes</Typography>
            <Typography variant="body" className="mb-4 text-surface-foreground-secondary">
              Tree with disabled nodes that cannot be selected or expanded.
            </Typography>
            
            <Card className="mb-4">
              <CardBody className="p-8">
                <div className="w-full max-w-sm">
                  <Tree data={disabledData} />
                </div>
              </CardBody>
            </Card>

            <CodeBlock followTheme>{`import { Tree, TreeNode } from '@velvet-ui/react'
import { Lock, Folder, File } from 'lucide-react'

const data: TreeNode[] = [
  {
    id: '1',
    label: 'Public',
    icon: <Folder className="h-4 w-4" />,
    children: [
      {
        id: '1-1',
        label: 'readme.md',
        icon: <File className="h-4 w-4" />,
      },
    ],
  },
  {
    id: '2',
    label: 'Private',
    icon: <Lock className="h-4 w-4" />,
    disabled: true,
    children: [
      {
        id: '2-1',
        label: 'secrets.env',
        icon: <File className="h-4 w-4" />,
      },
    ],
  },
]

export default function DisabledNodes() {
  return <Tree data={data} />
}`}</CodeBlock>
          </div>
        </Container>
      </Section>

      <Section>
        <Typography variant="h2" className="mb-4">Props</Typography>
        
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
              <TableCell className="font-mono text-sm">data</TableCell>
              <TableCell className="font-mono text-sm">TreeNode[]</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Array of tree nodes to display</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">selectedIds</TableCell>
              <TableCell className="font-mono text-sm">string[]</TableCell>
              <TableCell>[]</TableCell>
              <TableCell>Array of selected node IDs (controlled)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">expandedIds</TableCell>
              <TableCell className="font-mono text-sm">string[]</TableCell>
              <TableCell>[]</TableCell>
              <TableCell>Array of expanded node IDs (controlled)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">onSelect</TableCell>
              <TableCell className="font-mono text-sm">(node: TreeNode) =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback when a node is selected</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">onExpand</TableCell>
              <TableCell className="font-mono text-sm">(nodeId: string, isExpanded: boolean) =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback when a node is expanded/collapsed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">variant</TableCell>
              <TableCell className="font-mono text-sm">'default' | 'compact' | 'spacious'</TableCell>
              <TableCell>'default'</TableCell>
              <TableCell>Size variant of the tree</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">showIcons</TableCell>
              <TableCell className="font-mono text-sm">boolean</TableCell>
              <TableCell>true</TableCell>
              <TableCell>Whether to show node icons</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">indentSize</TableCell>
              <TableCell className="font-mono text-sm">number</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Indentation size in pixels for nested levels</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">itemVariant</TableCell>
              <TableCell className="font-mono text-sm">'default' | 'highlight'</TableCell>
              <TableCell>'default'</TableCell>
              <TableCell>Visual style for tree items</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">className</TableCell>
              <TableCell className="font-mono text-sm">string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Additional CSS classes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      <Section>
        <Typography variant="h2" className="mb-4">TreeNode Type</Typography>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Required</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-sm">id</TableCell>
              <TableCell className="font-mono text-sm">string</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Unique identifier for the node</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">label</TableCell>
              <TableCell className="font-mono text-sm">ReactNode</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Display content for the node</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">icon</TableCell>
              <TableCell className="font-mono text-sm">ReactNode</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Icon to display before the label</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">children</TableCell>
              <TableCell className="font-mono text-sm">TreeNode[]</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Child nodes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">disabled</TableCell>
              <TableCell className="font-mono text-sm">boolean</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Whether the node is disabled</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">data</TableCell>
              <TableCell className="font-mono text-sm">any</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Custom data attached to the node</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>
    </div>
  )
}