'use client'

import { Feature, FeatureGrid, Breadcrumb, Card, CardBody, Typography, CodeBlock, Badge , Chip } from '@velvet-ui/core'
import { Zap, Shield, Rocket, Heart, Code, Globe, Lock, Star } from 'lucide-react'

export default function FeaturePage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Feature' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Feature</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A component for showcasing features with icons, titles, descriptions, and optional links. Includes multiple display variants and animations.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Feature, FeatureGrid , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            A simple feature with icon, title, and description.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Feature
                icon={<Zap className="h-6 w-6" />}
                title="Lightning Fast"
                description="Experience blazing fast performance with our optimized components built for speed."
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Feature
  icon={<Zap className="h-6 w-6" />}
  title="Lightning Fast"
  description="Experience blazing fast performance with our optimized components built for speed."
/>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different visual styles to match your design.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-6">
                <Feature
                  variant="default"
                  icon={<Shield className="h-6 w-6" />}
                  title="Default Variant"
                  description="Clean and minimal design perfect for most use cases."
                />
                <Feature
                  variant="centered"
                  icon={<Rocket className="h-6 w-6" />}
                  title="Centered Variant"
                  description="Center-aligned content for a more focused presentation."
                />
                <Feature
                  variant="card"
                  icon={<Heart className="h-6 w-6" />}
                  title="Card Variant"
                  description="Wrapped in a subtle card with border and shadow effects."
                />
                <Feature
                  variant="glass"
                  icon={<Star className="h-6 w-6" />}
                  title="Glass Variant"
                  description="Beautiful glassmorphism effect with backdrop blur."
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Feature variant="default" ... />
<Feature variant="centered" ... />
<Feature variant="card" ... />
<Feature variant="glass" ... />`}</CodeBlock>
        </div>

        {/* Icon Positions */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Icon Positions</Typography>
          <Typography variant="body" className="mb-4">
            Position the icon relative to the content.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-6">
                <Feature
                  iconPosition="top"
                  icon={<Code className="h-6 w-6" />}
                  title="Icon on Top"
                  description="Default position with icon above the content."
                />
                <Feature
                  iconPosition="left"
                  icon={<Globe className="h-6 w-6" />}
                  title="Icon on Left"
                  description="Icon positioned to the left of the content, great for lists."
                />
                <Feature
                  iconPosition="right"
                  icon={<Lock className="h-6 w-6" />}
                  title="Icon on Right"
                  description="Icon positioned to the right of the content for variety."
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Feature iconPosition="top" ... />
<Feature iconPosition="left" ... />
<Feature iconPosition="right" ... />`}</CodeBlock>
        </div>

        {/* With Links */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Links</Typography>
          <Typography variant="body" className="mb-4">
            Add optional links to features for navigation.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <FeatureGrid cols={2}>
                <Feature
                  variant="card"
                  icon={<Zap className="h-6 w-6" />}
                  title="Learn More"
                  description="Discover all the powerful features we offer."
                  link={{ label: "Explore features", href: "#" }}
                />
                <Feature
                  variant="card"
                  icon={<Shield className="h-6 w-6" />}
                  title="Get Started"
                  description="Ready to begin? Jump right into our quick start guide."
                  link={{ label: "Quick start guide", href: "#" }}
                />
              </FeatureGrid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Feature
  icon={<Zap className="h-6 w-6" />}
  title="Learn More"
  description="Discover all the powerful features we offer."
  link={{ label: "Explore features", href: "/features" }}
/>`}</CodeBlock>
        </div>

        {/* Feature Grid */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Feature Grid</Typography>
          <Typography variant="body" className="mb-4">
            Use FeatureGrid to organize multiple features in a responsive grid layout.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <FeatureGrid cols={3}>
                <Feature
                  icon={<Zap className="h-6 w-6" />}
                  title="Fast"
                  description="Lightning fast performance out of the box."
                />
                <Feature
                  icon={<Shield className="h-6 w-6" />}
                  title="Secure"
                  description="Built with security best practices in mind."
                />
                <Feature
                  icon={<Rocket className="h-6 w-6" />}
                  title="Scalable"
                  description="Grows with your application needs."
                />
                <Feature
                  icon={<Heart className="h-6 w-6" />}
                  title="Loved"
                  description="Trusted by thousands of developers."
                />
                <Feature
                  icon={<Code className="h-6 w-6" />}
                  title="Developer Friendly"
                  description="Clean APIs and great documentation."
                />
                <Feature
                  icon={<Globe className="h-6 w-6" />}
                  title="Global"
                  description="Internationalization support built-in."
                />
              </FeatureGrid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<FeatureGrid cols={3}>
  <Feature ... />
  <Feature ... />
  <Feature ... />
  <Feature ... />
  <Feature ... />
  <Feature ... />
</FeatureGrid>`}</CodeBlock>
        </div>

        {/* Combined Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Complete Example</Typography>
          <Typography variant="body" className="mb-4">
            Combining different variants and options for a rich feature section.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <FeatureGrid cols={2}>
                <Feature
                  variant="glass"
                  iconPosition="left"
                  icon={<Star className="h-8 w-8 text-warning" />}
                  title="Premium Features"
                  description="Access exclusive premium features that take your project to the next level."
                  link={{ label: "Upgrade now", href: "#" }}
                />
                <Feature
                  variant="glass"
                  iconPosition="left"
                  icon={<Lock className="h-8 w-8 text-success" />}
                  title="Enterprise Security"
                  description="Bank-level security with end-to-end encryption for all your data."
                  link={{ label: "Security details", href: "#" }}
                />
              </FeatureGrid>
            </CardBody>
          </Card>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Feature Props</Typography>
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
                <td className="p-2 text-sm">Icon element to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">title</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Feature title (required)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">description</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Feature description (required)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">link</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`{ label: string, href: string }`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Optional link with label and href</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'centered' | 'card' | 'glass'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">iconPosition</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'top' | 'left' | 'right'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'top'</td>
                <td className="p-2 text-sm">Position of the icon</td>
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

        <Typography variant="h3" className="mb-4">FeatureGrid Props</Typography>
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
                <td className="p-2 font-mono text-sm">cols</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">1 | 2 | 3 | 4</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">3</td>
                <td className="p-2 text-sm">Number of columns in the grid</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Feature components to display</td>
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
                Features include smooth hover animations powered by Framer Motion
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The glass variant works best on colorful or image backgrounds
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                FeatureGrid is responsive and automatically adjusts columns on smaller screens
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Links include an arrow icon that animates on hover
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}