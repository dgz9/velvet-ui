'use client'

import { useState } from 'react'
import { Chip, ChipGroup, Typography, Card, CardBody, Divider, CodeBlock, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@velvet-ui/core'
import { Heart, Star, Coffee, Music, Book, Camera, Check, X } from 'lucide-react'

export default function ChipDocs() {
  const [selectedChips, setSelectedChips] = useState<string[]>(['react'])
  const [chips, setChips] = useState(['React', 'Vue', 'Angular', 'Svelte'])

  const toggleChip = (chip: string) => {
    setSelectedChips(prev =>
      prev.includes(chip)
        ? prev.filter(c => c !== chip)
        : [...prev, chip]
    )
  }

  const handleDelete = (chip: string) => {
    setChips(prev => prev.filter(c => c !== chip))
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Chip' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Chip</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Chips are compact elements that represent an input, attribute, or action.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Chip, ChipGroup } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            Simple chips with different colors for various purposes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ChipGroup gap="medium">
                <Chip label="Default Chip" />
                <Chip label="Primary" color="primary" />
                <Chip label="Success" color="success" />
                <Chip label="Warning" color="warning" />
                <Chip label="Danger" color="danger" />
                <Chip label="Info" color="info" />
              </ChipGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Chip label="Default Chip" />
<Chip label="Primary" color="primary" />
<Chip label="Success" color="success" />
<Chip label="Warning" color="warning" />
<Chip label="Danger" color="danger" />
<Chip label="Info" color="info" />`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from 5 different chip variants to match your design needs.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ChipGroup>
                <Chip label="Solid" variant="solid" color="primary" />
                <Chip label="Outline" variant="outline" color="primary" />
                <Chip label="Soft" variant="soft" color="primary" />
                <Chip label="Glass" variant="glass" color="primary" />
                <Chip label="Gradient" variant="gradient" color="primary" />
              </ChipGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Chip label="Solid" variant="solid" color="primary" />
<Chip label="Outline" variant="outline" color="primary" />
<Chip label="Soft" variant="soft" color="primary" />
<Chip label="Glass" variant="glass" color="primary" />
<Chip label="Gradient" variant="gradient" color="primary" />`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in 3 sizes to fit different contexts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ChipGroup className="items-center">
                <Chip label="Small" size="small" color="primary" />
                <Chip label="Medium" size="medium" color="primary" />
                <Chip label="Large" size="large" color="primary" />
              </ChipGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Chip label="Small" size="small" color="primary" />
<Chip label="Medium" size="medium" color="primary" />
<Chip label="Large" size="large" color="primary" />`}</CodeBlock>
        </div>

        {/* With Icons */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icons</Typography>
          <Typography variant="body" className="mb-4">
            Enhance chips with icons using startContent and endContent props.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ChipGroup>
                <Chip label="Heart" startContent={<Heart className="h-4 w-4" />} color="danger" />
                <Chip label="Star" startContent={<Star className="h-4 w-4" />} color="warning" />
                <Chip label="Coffee" endContent={<Coffee className="h-4 w-4" />} color="primary" />
                <Chip label="Music" startContent={<Music className="h-4 w-4" />} variant="gradient" color="success" />
              </ChipGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Chip label="Heart" startContent={<Heart className="h-4 w-4" />} color="danger" />
<Chip label="Star" startContent={<Star className="h-4 w-4" />} color="warning" />
<Chip label="Coffee" endContent={<Coffee className="h-4 w-4" />} color="primary" />
<Chip label="Music" startContent={<Music className="h-4 w-4" />} variant="gradient" color="success" />`}</CodeBlock>
        </div>

        {/* Deletable Chips */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Deletable Chips</Typography>
          <Typography variant="body" className="mb-4">
            Add an onDelete callback to make chips removable.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ChipGroup>
                {chips.map((chip) => (
                  <Chip
                    key={chip}
                    label={chip}
                    color="primary"
                    variant="soft"
                    onDelete={() => handleDelete(chip)}
                  />
                ))}
              </ChipGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [chips, setChips] = useState(['React', 'Vue', 'Angular', 'Svelte'])

const handleDelete = (chip: string) => {
  setChips(prev => prev.filter(c => c !== chip))
}

// Usage
{chips.map((chip) => (
  <Chip
    key={chip}
    label={chip}
    color="primary"
    variant="soft"
    onDelete={() => handleDelete(chip)}
  />
))}`}</CodeBlock>
        </div>

        {/* Clickable/Selectable Chips */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Clickable & Selectable Chips</Typography>
          <Typography variant="body" className="mb-4">
            Make chips interactive with the clickable prop and handle selection state.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ChipGroup>
                <Chip
                  label="React"
                  color="primary"
                  variant={selectedChips.includes('react') ? 'solid' : 'outline'}
                  clickable
                  selected={selectedChips.includes('react')}
                  onClick={() => toggleChip('react')}
                />
                <Chip
                  label="Vue"
                  color="success"
                  variant={selectedChips.includes('vue') ? 'solid' : 'outline'}
                  clickable
                  selected={selectedChips.includes('vue')}
                  onClick={() => toggleChip('vue')}
                />
                <Chip
                  label="Angular"
                  color="danger"
                  variant={selectedChips.includes('angular') ? 'solid' : 'outline'}
                  clickable
                  selected={selectedChips.includes('angular')}
                  onClick={() => toggleChip('angular')}
                />
              </ChipGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [selectedChips, setSelectedChips] = useState<string[]>(['react'])

const toggleChip = (chip: string) => {
  setSelectedChips(prev =>
    prev.includes(chip)
      ? prev.filter(c => c !== chip)
      : [...prev, chip]
  )
}

// Usage
<Chip
  label="React"
  color="primary"
  variant={selectedChips.includes('react') ? 'solid' : 'outline'}
  clickable
  selected={selectedChips.includes('react')}
  onClick={() => toggleChip('react')}
/>`}</CodeBlock>
        </div>

        {/* Gradient Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Gradient Variants</Typography>
          <Typography variant="body" className="mb-4">
            Create eye-catching chips with gradient backgrounds.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <ChipGroup>
                <Chip label="Primary" variant="gradient" color="primary" />
                <Chip label="Success" variant="gradient" color="success" />
                <Chip label="Warning" variant="gradient" color="warning" />
                <Chip label="Danger" variant="gradient" color="danger" />
                <Chip label="Info" variant="gradient" color="info" />
              </ChipGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Chip label="Primary" variant="gradient" color="primary" />
<Chip label="Success" variant="gradient" color="success" />
<Chip label="Warning" variant="gradient" color="warning" />
<Chip label="Danger" variant="gradient" color="danger" />
<Chip label="Info" variant="gradient" color="info" />`}</CodeBlock>
        </div>

        {/* ChipGroup */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">ChipGroup</Typography>
          <Typography variant="body" className="mb-4">
            Use ChipGroup to manage spacing between multiple chips.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <div>
                <Typography variant="small" className="mb-2">Small gap</Typography>
                <ChipGroup gap="small">
                  <Chip label="React" />
                  <Chip label="Vue" />
                  <Chip label="Angular" />
                </ChipGroup>
              </div>
              <div>
                <Typography variant="small" className="mb-2">Medium gap (default)</Typography>
                <ChipGroup gap="medium">
                  <Chip label="React" />
                  <Chip label="Vue" />
                  <Chip label="Angular" />
                </ChipGroup>
              </div>
              <div>
                <Typography variant="small" className="mb-2">Large gap</Typography>
                <ChipGroup gap="large">
                  <Chip label="React" />
                  <Chip label="Vue" />
                  <Chip label="Angular" />
                </ChipGroup>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<ChipGroup gap="small">
  <Chip label="React" />
  <Chip label="Vue" />
  <Chip label="Angular" />
</ChipGroup>

<ChipGroup gap="medium">
  <Chip label="React" />
  <Chip label="Vue" />
  <Chip label="Angular" />
</ChipGroup>

<ChipGroup gap="large">
  <Chip label="React" />
  <Chip label="Vue" />
  <Chip label="Angular" />
</ChipGroup>`}</CodeBlock>
        </div>

        {/* API Reference */}
        <Typography variant="h2" className="mb-4 mt-12">API Reference</Typography>
        
        {/* Chip Props */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Chip Props</Typography>
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
                    <TableCell><code>label</code></TableCell>
                    <TableCell><code>string</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>The text content of the chip (required)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>variant</code></TableCell>
                    <TableCell><code>"solid" | "outline" | "soft" | "glass" | "gradient"</code></TableCell>
                    <TableCell><code>"solid"</code></TableCell>
                    <TableCell>The visual style variant</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>color</code></TableCell>
                    <TableCell><code>"default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info"</code></TableCell>
                    <TableCell><code>"default"</code></TableCell>
                    <TableCell>The color scheme</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>size</code></TableCell>
                    <TableCell><code>"small" | "medium" | "large"</code></TableCell>
                    <TableCell><code>"medium"</code></TableCell>
                    <TableCell>The size of the chip</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>clickable</code></TableCell>
                    <TableCell><code>boolean</code></TableCell>
                    <TableCell><code>false</code></TableCell>
                    <TableCell>Whether the chip is clickable</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>selected</code></TableCell>
                    <TableCell><code>boolean</code></TableCell>
                    <TableCell><code>false</code></TableCell>
                    <TableCell>Whether the chip is in a selected state</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>startContent</code></TableCell>
                    <TableCell><code>ReactNode</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Content to display at the start of the chip</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>endContent</code></TableCell>
                    <TableCell><code>ReactNode</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Content to display at the end of the chip</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>onDelete</code></TableCell>
                    <TableCell><code>() => void</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Callback when the delete button is clicked</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>deleteIcon</code></TableCell>
                    <TableCell><code>ReactNode</code></TableCell>
                    <TableCell><code>&lt;X /&gt;</code></TableCell>
                    <TableCell>Custom delete icon</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>onClick</code></TableCell>
                    <TableCell><code>() => void</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Callback when the chip is clicked</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>

        {/* ChipGroup Props */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">ChipGroup Props</Typography>
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
                    <TableCell><code>gap</code></TableCell>
                    <TableCell><code>"small" | "medium" | "large"</code></TableCell>
                    <TableCell><code>"medium"</code></TableCell>
                    <TableCell>The spacing between chips</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>className</code></TableCell>
                    <TableCell><code>string</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Additional CSS classes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code>children</code></TableCell>
                    <TableCell><code>ReactNode</code></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Chip components to group</TableCell>
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
              <Typography variant="h4" className="mb-2">Use appropriate variants</Typography>
              <Typography variant="body" className="text-foreground-secondary">
                - Use <code>solid</code> for primary actions or selected states
                <br />
                - Use <code>outline</code> for secondary actions or unselected states
                <br />
                - Use <code>soft</code> for subtle categorization
                <br />
                - Use <code>glass</code> for modern, translucent effects
                <br />
                - Use <code>gradient</code> sparingly for emphasis
              </Typography>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <Typography variant="h4" className="mb-2">Keep labels concise</Typography>
              <Typography variant="body" className="text-foreground-secondary">
                Chip labels should be short and descriptive. For longer text, consider using tooltips or other components.
              </Typography>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <Typography variant="h4" className="mb-2">Group related chips</Typography>
              <Typography variant="body" className="text-foreground-secondary">
                Always use <code>ChipGroup</code> when displaying multiple chips to ensure consistent spacing and alignment.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}