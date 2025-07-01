'use client'

import { Button, Card, Typography, CodeBlock } from '@velvet-ui/core'
import { Heart, Star, MoreVertical } from 'lucide-react'

export default function CardPage() {
  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Card
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          A versatile container component with elevation and glassmorphism effects.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme>{`import { Card } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Card */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Card</Typography>
          <Typography variant="body" className="mb-4">
            A simple card with padding and subtle shadow.
          </Typography>
          <Card className="p-6 mb-4 max-w-md">
            <Typography variant="h4" className="mb-2">Card Title</Typography>
            <Typography className="text-foreground-secondary">
              This is a basic card component with some content inside. It provides a clean container for your content.
            </Typography>
          </Card>
          <CodeBlock followTheme>{`<Card className="p-6">
  <Typography variant="h4" className="mb-2">Card Title</Typography>
  <Typography className="text-foreground-secondary">
    This is a basic card component with some content inside.
  </Typography>
</Card>`}</CodeBlock>
        </div>

        {/* Glass Card */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Glass Card</Typography>
          <Typography variant="body" className="mb-4">
            Enable glassmorphism effect for a modern, translucent appearance.
          </Typography>
          <div className="p-8 mb-4 rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
            <Card variant="glass" className="p-6 max-w-md">
              <Typography variant="h4" className="mb-2">Glass Effect</Typography>
              <Typography className="text-foreground-secondary">
                This card uses the glass prop to create a beautiful glassmorphism effect with backdrop blur.
              </Typography>
            </Card>
          </div>
          <CodeBlock followTheme>{`<Card variant="glass" className="p-6">
  <Typography variant="h4" className="mb-2">Glass Effect</Typography>
  <Typography className="text-foreground-secondary">
    This card uses the glass prop to create a beautiful glassmorphism effect.
  </Typography>
</Card>`}</CodeBlock>
        </div>

        {/* Interactive Card */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Interactive Card</Typography>
          <Typography variant="body" className="mb-4">
            Cards can be interactive with hover effects and click handlers.
          </Typography>
          <Card 
            className="p-6 mb-4 max-w-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => alert('Card clicked!')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <Typography variant="h5">Featured Item</Typography>
                  <Typography variant="small" className="text-foreground-secondary">
                    Click to learn more
                  </Typography>
                </div>
              </div>
              <Button variant="ghost" size="small" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <Typography className="text-foreground-secondary">
              This card demonstrates interactive features with hover effects and click handling.
            </Typography>
          </Card>
          <CodeBlock followTheme>{`<Card 
  className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
  onClick={() => alert('Card clicked!')}
>
  <div className="flex items-start justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        <Star className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <Typography variant="h5">Featured Item</Typography>
        <Typography variant="small" className="text-foreground-secondary">
          Click to learn more
        </Typography>
      </div>
    </div>
    <Button variant="ghost" size="small" className="h-8 w-8 p-0">
      <MoreVertical className="h-4 w-4" />
    </Button>
  </div>
  <Typography className="text-foreground-secondary">
    This card demonstrates interactive features.
  </Typography>
</Card>`}</CodeBlock>
        </div>

        {/* Card with Media */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Card with Media</Typography>
          <Typography variant="body" className="mb-4">
            Combine cards with images and other media content.
          </Typography>
          <Card className="overflow-hidden mb-4 max-w-md">
            <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400" />
            <div className="p-6">
              <Typography variant="h4" className="mb-2">Beautiful Landscapes</Typography>
              <Typography className="text-foreground-secondary mb-4">
                Explore stunning natural scenery from around the world.
              </Typography>
              <div className="flex items-center justify-between">
                <Button size="small">View Gallery</Button>
                <Button variant="ghost" size="small">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
          <CodeBlock followTheme>{`<Card className="overflow-hidden">
  <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400" />
  <div className="p-6">
    <Typography variant="h4" className="mb-2">Beautiful Landscapes</Typography>
    <Typography className="text-foreground-secondary mb-4">
      Explore stunning natural scenery from around the world.
    </Typography>
    <div className="flex items-center justify-between">
      <Button size="small">View Gallery</Button>
      <Button variant="ghost" size="small">
        <Heart className="h-4 w-4" />
      </Button>
    </div>
  </div>
</Card>`}</CodeBlock>
        </div>

        {/* Colored Cards */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colored Cards</Typography>
          <Typography variant="body" className="mb-4">
            Use Tailwind utilities to create colored card variations.
          </Typography>
          <div className="grid gap-4 mb-4 max-w-2xl">
            <Card className="p-4 bg-primary-50 border-primary-200 dark:bg-primary-950/20 dark:border-primary-800">
              <Typography variant="h5" className="text-primary-700 dark:text-primary-300">Primary Card</Typography>
              <Typography className="text-primary-600 dark:text-primary-400">
                A card with primary theme colors
              </Typography>
            </Card>
            <Card className="p-4 bg-success-50 border-success-200 dark:bg-success-950/20 dark:border-success-800">
              <Typography variant="h5" className="text-success-700 dark:text-success-300">Success Card</Typography>
              <Typography className="text-success-600 dark:text-success-400">
                Perfect for success messages
              </Typography>
            </Card>
            <Card className="p-4 bg-warning-50 border-warning-200 dark:bg-warning-950/20 dark:border-warning-800">
              <Typography variant="h5" className="text-warning-700 dark:text-warning-300">Warning Card</Typography>
              <Typography className="text-warning-600 dark:text-warning-400">
                Use for warnings or cautions
              </Typography>
            </Card>
          </div>
          <CodeBlock followTheme>{`<Card className="p-4 bg-primary-50 border-primary-200 dark:bg-primary-950/20 dark:border-primary-800">
  <Typography variant="h5" className="text-primary-700 dark:text-primary-300">
    Primary Card
  </Typography>
  <Typography className="text-primary-600 dark:text-primary-400">
    A card with primary theme colors
  </Typography>
</Card>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">glass</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Enables glassmorphism effect with backdrop blur</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">className</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Card content</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onClick</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">() =&gt; void</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Click handler for interactive cards</td>
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
                Cards are highly composable - combine them with other components for complex layouts
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The glass effect works best on colorful or image backgrounds
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use the overflow-hidden class when adding media content to cards
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Cards automatically adapt their appearance for dark mode
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}