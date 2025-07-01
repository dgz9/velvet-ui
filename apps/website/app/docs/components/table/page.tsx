'use client'

import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb , Chip } from '@velvet-ui/core'

export default function TablePage() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
  ]

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Table' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Table</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A responsive table component for displaying tabular data.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { 
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption
, Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Table */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Table</Typography>
          <Typography variant="body" className="mb-4">
            A simple table with header and body rows.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">{invoice.invoice}</TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}</CodeBlock>
        </div>

        {/* With Footer */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Footer</Typography>
          <Typography variant="body" className="mb-4">
            Tables can include a footer for summary information.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Product A</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>$50.00</TableCell>
                    <TableCell className="text-right">$100.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Product B</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$75.00</TableCell>
                    <TableCell className="text-right">$75.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Product C</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>$25.00</TableCell>
                    <TableCell className="text-right">$75.00</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right font-medium">$250.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead>Price</TableHead>
      <TableHead className="text-right">Total</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Product A</TableCell>
      <TableCell>2</TableCell>
      <TableCell>$50.00</TableCell>
      <TableCell className="text-right">$100.00</TableCell>
    </TableRow>
    {/* More rows... */}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right font-medium">$250.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Different table styles for various use cases.
          </Typography>
          
          {/* Bordered */}
          <Typography variant="h4" className="mb-2 mt-4">Bordered</Typography>
          <Card className="mb-4">
            <CardBody>
              <Table variant="bordered">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>User</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Table variant="bordered">
  {/* Table content */}
</Table>`}</CodeBlock>

          {/* Striped */}
          <Typography variant="h4" className="mb-2 mt-4">Striped</Typography>
          <Card className="mb-4">
            <CardBody>
              <Table variant="striped">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>User</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Johnson</TableCell>
                    <TableCell>bob@example.com</TableCell>
                    <TableCell>Editor</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Table variant="striped">
  {/* Table content */}
</Table>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Tables come in different sizes to match your content density needs.
          </Typography>
          
          {/* Small */}
          <Typography variant="h4" className="mb-2 mt-4">Small</Typography>
          <Card className="mb-4">
            <CardBody>
              <Table size="small">
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Task A</TableCell>
                    <TableCell>Complete</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Task B</TableCell>
                    <TableCell>In Progress</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Table size="small">
  {/* Table content */}
</Table>`}</CodeBlock>

          {/* Large */}
          <Typography variant="h4" className="mb-2 mt-4">Large</Typography>
          <Card className="mb-4">
            <CardBody>
              <Table size="large">
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Task A</TableCell>
                    <TableCell>Complete</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Task B</TableCell>
                    <TableCell>In Progress</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Table size="large">
  {/* Table content */}
</Table>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Table</Typography>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'bordered' | 'striped'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Table size affecting padding and font size</td>
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

        <Typography variant="h3" className="mb-4">Component Reference</Typography>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Component</th>
                <th className="text-left p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">TableHeader</td>
                <td className="p-2 text-sm">Table header section container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">TableBody</td>
                <td className="p-2 text-sm">Table body section container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">TableFooter</td>
                <td className="p-2 text-sm">Table footer section container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">TableRow</td>
                <td className="p-2 text-sm">Table row container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">TableHead</td>
                <td className="p-2 text-sm">Table header cell</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">TableCell</td>
                <td className="p-2 text-sm">Table body cell</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">TableCaption</td>
                <td className="p-2 text-sm">Table caption for accessibility</td>
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
                Tables are automatically responsive and scroll horizontally on small screens
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use TableCaption for better accessibility - it provides context for screen readers
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The striped variant alternates row colors for better readability
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Table rows have hover states for better interactivity
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}