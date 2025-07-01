import { Typography, Card, Button } from '@velvet-ui/core'
import { ComponentDoc } from '@/types/component-doc'
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface ComponentDocPageProps {
  doc: ComponentDoc
}

export function ComponentDocPage({ doc }: ComponentDocPageProps) {
  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          {doc.title}
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          {doc.description}
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock language="tsx">{doc.import}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>
        {doc.examples.map((example, index) => (
          <div key={index} className="mb-8">
            <Typography variant="h3" className="mb-4">{example.title}</Typography>
            {example.description && (
              <Typography variant="body" className="mb-4">
                {example.description}
              </Typography>
            )}
            <Card className="p-6 mb-4">
              {example.preview}
            </Card>
            <CodeBlock language="tsx">{example.code}</CodeBlock>
          </div>
        ))}

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
              {doc.props.map((prop, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 font-mono text-sm">{prop.name}</td>
                  <td className="p-2 font-mono text-sm text-foreground-secondary">{prop.type}</td>
                  <td className="p-2 font-mono text-sm text-foreground-secondary">{prop.default || '-'}</td>
                  <td className="p-2 text-sm">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        {doc.notes && (
          <>
            <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
            <Card className="p-4 bg-info-50 dark:bg-info-950/20">
              <Typography>{doc.notes}</Typography>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

function CodeBlock({ children, language = 'tsx' }: { children: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-4">
      <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
        <code>{children}</code>
      </pre>
      <Button
        variant="ghost"
        size="small"
        className="absolute right-2 top-2 h-8 w-8 p-0"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </Button>
    </div>
  )
}