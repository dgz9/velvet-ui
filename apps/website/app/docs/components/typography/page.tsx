'use client'

import { Card, Typography, CodeBlock } from '@velvet-ui/core'

export default function TypographyPage() {
  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Typography
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          A comprehensive text component for consistent typography across your application.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme>{`import { Typography } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Headings */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Headings</Typography>
          <Typography variant="body" className="mb-4">
            Six levels of headings from h1 to h6 with responsive sizing.
          </Typography>
          <Card className="p-6 mb-4">
            <div className="space-y-3">
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
            </div>
          </Card>
          <CodeBlock followTheme>{`<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>`}</CodeBlock>
        </div>

        {/* Body Text */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Body Text</Typography>
          <Typography variant="body" className="mb-4">
            Different text styles for various content needs.
          </Typography>
          <Card className="p-6 mb-4">
            <div className="space-y-3">
              <Typography variant="lead">
                This is a lead paragraph. It's slightly larger than body text and useful for introductions.
              </Typography>
              <Typography variant="body">
                This is regular body text. Use it for the main content of your application. It's optimized for readability.
              </Typography>
              <Typography variant="small">
                This is small text. Perfect for captions, labels, and secondary information.
              </Typography>
            </div>
          </Card>
          <CodeBlock followTheme>{`<Typography variant="lead">
  This is a lead paragraph. It's slightly larger than body text.
</Typography>

<Typography variant="body">
  This is regular body text. Use it for the main content.
</Typography>

<Typography variant="small">
  This is small text. Perfect for captions and labels.
</Typography>`}</CodeBlock>
        </div>

        {/* Text Styling */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Text Styling</Typography>
          <Typography variant="body" className="mb-4">
            Apply different styles using Tailwind classes.
          </Typography>
          <Card className="p-6 mb-4">
            <div className="space-y-3">
              <Typography className="font-bold">Bold text</Typography>
              <Typography className="italic">Italic text</Typography>
              <Typography className="underline">Underlined text</Typography>
              <Typography className="line-through">Strikethrough text</Typography>
              <Typography className="text-primary-600 dark:text-primary-400">Colored text</Typography>
              <Typography className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Gradient text
              </Typography>
            </div>
          </Card>
          <CodeBlock followTheme>{`<Typography className="font-bold">Bold text</Typography>
<Typography className="italic">Italic text</Typography>
<Typography className="underline">Underlined text</Typography>
<Typography className="line-through">Strikethrough text</Typography>
<Typography className="text-primary-600 dark:text-primary-400">Colored text</Typography>
<Typography className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
  Gradient text
</Typography>`}</CodeBlock>
        </div>

        {/* Semantic HTML */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Semantic HTML</Typography>
          <Typography variant="body" className="mb-4">
            Use the as prop to render the appropriate HTML element.
          </Typography>
          <Card className="p-6 mb-4">
            <Typography variant="h2" component="h1" className="mb-2">
              This looks like h2 but renders as h1
            </Typography>
            <Typography variant="body" component="span">
              This is body text rendered as a span
            </Typography>
          </Card>
          <CodeBlock followTheme>{`<Typography variant="h2" component="h1">
  This looks like h2 but renders as h1
</Typography>

<Typography variant="body" component="span">
  This is body text rendered as a span
</Typography>`}</CodeBlock>
        </div>

        {/* Alignment */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Text Alignment</Typography>
          <Typography variant="body" className="mb-4">
            Control text alignment with Tailwind utilities.
          </Typography>
          <Card className="p-6 mb-4">
            <div className="space-y-3">
              <Typography className="text-left">Left aligned text</Typography>
              <Typography className="text-center">Center aligned text</Typography>
              <Typography className="text-right">Right aligned text</Typography>
              <Typography className="text-justify">
                Justified text that stretches to fill the full width of its container. This creates even spacing between words.
              </Typography>
            </div>
          </Card>
          <CodeBlock followTheme>{`<Typography className="text-left">Left aligned text</Typography>
<Typography className="text-center">Center aligned text</Typography>
<Typography className="text-right">Right aligned text</Typography>
<Typography className="text-justify">Justified text</Typography>`}</CodeBlock>
        </div>

        {/* Real-world Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Real-world Example</Typography>
          <Typography variant="body" className="mb-4">
            A complete article layout using Typography components.
          </Typography>
          <Card className="p-6 mb-4">
            <article>
              <Typography variant="h2" className="mb-2">
                The Future of Web Development
              </Typography>
              <Typography variant="small" className="text-foreground-secondary mb-4">
                Published on December 26, 2024 • 5 min read
              </Typography>
              <Typography variant="lead" className="mb-4">
                Web development is evolving rapidly with new frameworks and tools emerging every day. 
                Let's explore what the future holds.
              </Typography>
              <Typography variant="body" className="mb-3">
                The landscape of web development has transformed dramatically over the past decade. 
                From simple static pages to complex, interactive applications, the web has become 
                a powerful platform for building sophisticated software.
              </Typography>
              <Typography variant="h4" className="mb-2 mt-4">
                Key Trends to Watch
              </Typography>
              <Typography variant="body">
                As we look ahead, several trends are shaping the future of web development...
              </Typography>
            </article>
          </Card>
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
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'body' | 'small'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'body'</td>
                <td className="p-2 text-sm">The typography variant to use</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">as</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ElementType</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The HTML element to render (defaults to semantic element for variant)</td>
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
                <td className="p-2 text-sm">Text content</td>
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
                Typography components automatically handle responsive font sizes
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component renders semantic HTML elements by default (h1-h6, p, span)
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use the as prop when you need a specific HTML element but want different styling
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                All text automatically uses the theme's foreground color
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}