'use client'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Breadcrumb, Card, CardBody, Typography, CodeBlock, Badge, Input, Checkbox , Chip } from '@velvet-ui/core'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState<string | null>(null)
  const [animationOpen, setAnimationOpen] = useState<string | null>(null)
  const [backdropOpen, setBackdropOpen] = useState<string | null>(null)
  const [scrollOpen, setScrollOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Modal' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Modal</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A flexible modal dialog component with animations, backdrop options, and multiple sizes.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Modal, ModalHeader, ModalBody, ModalFooter , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            A simple modal with header, body, and footer sections.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button onClick={() => setBasicOpen(true)}>Open Modal</Button>
              <Modal open={basicOpen} onClose={() => setBasicOpen(false)}>
                <ModalHeader onClose={() => setBasicOpen(false)}>
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <Typography>
                    This is the modal body content. You can put any content here including forms, images, or other components.
                  </Typography>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={() => setBasicOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setBasicOpen(false)}>
                    Confirm
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal open={open} onClose={() => setOpen(false)}>
  <ModalHeader onClose={() => setOpen(false)}>
    Modal Title
  </ModalHeader>
  <ModalBody>
    <Typography>Modal content goes here</Typography>
  </ModalBody>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button onClick={() => setOpen(false)}>
      Confirm
    </Button>
  </ModalFooter>
</Modal>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different modal sizes based on your content needs.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setSizeOpen('small')}>Small Modal</Button>
                <Button onClick={() => setSizeOpen('medium')}>Medium Modal</Button>
                <Button onClick={() => setSizeOpen('large')}>Large Modal</Button>
                <Button onClick={() => setSizeOpen('xlarge')}>XLarge Modal</Button>
                <Button onClick={() => setSizeOpen('full')}>Full Modal</Button>
              </div>
              
              {['small', 'medium', 'large', 'xlarge', 'full'].map((size) => (
                <Modal
                  key={size}
                  open={sizeOpen === size}
                  onClose={() => setSizeOpen(null)}
                  size={size as any}
                >
                  <ModalHeader onClose={() => setSizeOpen(null)}>
                    {size.charAt(0).toUpperCase() + size.slice(1)} Modal
                  </ModalHeader>
                  <ModalBody>
                    <Typography>
                      This is a {size} sized modal. The width adjusts based on the size prop.
                    </Typography>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={() => setSizeOpen(null)}>Close</Button>
                  </ModalFooter>
                </Modal>
              ))}
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Modal size="small">...</Modal>
<Modal size="medium">...</Modal>
<Modal size="large">...</Modal>
<Modal size="xlarge">...</Modal>
<Modal size="full">...</Modal>`}</CodeBlock>
        </div>

        {/* Animation Types */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Animation Types</Typography>
          <Typography variant="body" className="mb-4">
            Different animation styles for modal entrance and exit.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setAnimationOpen('fade')}>Fade</Button>
                <Button onClick={() => setAnimationOpen('scale')}>Scale</Button>
                <Button onClick={() => setAnimationOpen('slide')}>Slide</Button>
                <Button onClick={() => setAnimationOpen('zoom')}>Zoom</Button>
                <Button onClick={() => setAnimationOpen('flip')}>Flip</Button>
              </div>
              
              {['fade', 'scale', 'slide', 'zoom', 'flip'].map((animation) => (
                <Modal
                  key={animation}
                  open={animationOpen === animation}
                  onClose={() => setAnimationOpen(null)}
                  animation={animation as any}
                >
                  <ModalHeader onClose={() => setAnimationOpen(null)}>
                    {animation.charAt(0).toUpperCase() + animation.slice(1)} Animation
                  </ModalHeader>
                  <ModalBody>
                    <Typography>
                      This modal uses the {animation} animation type.
                    </Typography>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={() => setAnimationOpen(null)}>Close</Button>
                  </ModalFooter>
                </Modal>
              ))}
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Modal animation="fade">...</Modal>
<Modal animation="scale">...</Modal>
<Modal animation="slide">...</Modal>
<Modal animation="zoom">...</Modal>
<Modal animation="flip">...</Modal>`}</CodeBlock>
        </div>

        {/* Backdrop Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Backdrop Variants</Typography>
          <Typography variant="body" className="mb-4">
            Customize the backdrop appearance behind the modal.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setBackdropOpen('blur')}>Blur Backdrop</Button>
                <Button onClick={() => setBackdropOpen('dark')}>Dark Backdrop</Button>
                <Button onClick={() => setBackdropOpen('light')}>Light Backdrop</Button>
                <Button onClick={() => setBackdropOpen('none')}>No Backdrop</Button>
              </div>
              
              {['blur', 'dark', 'light', 'none'].map((backdrop) => (
                <Modal
                  key={backdrop}
                  open={backdropOpen === backdrop}
                  onClose={() => setBackdropOpen(null)}
                  backdrop={backdrop as any}
                >
                  <ModalHeader onClose={() => setBackdropOpen(null)}>
                    {backdrop === 'none' ? 'No' : backdrop.charAt(0).toUpperCase() + backdrop.slice(1)} Backdrop
                  </ModalHeader>
                  <ModalBody>
                    <Typography>
                      This modal uses the {backdrop} backdrop variant.
                    </Typography>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={() => setBackdropOpen(null)}>Close</Button>
                  </ModalFooter>
                </Modal>
              ))}
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Modal backdrop="blur">...</Modal>
<Modal backdrop="dark">...</Modal>
<Modal backdrop="light">...</Modal>
<Modal backdrop="none">...</Modal>`}</CodeBlock>
        </div>

        {/* Scrollable Content */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Scrollable Content</Typography>
          <Typography variant="body" className="mb-4">
            Handle long content with scrollable modal body.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button onClick={() => setScrollOpen(true)}>Open Scrollable Modal</Button>
              <Modal open={scrollOpen} onClose={() => setScrollOpen(false)} scrollBehavior="inside">
                <ModalHeader onClose={() => setScrollOpen(false)}>
                  Terms and Conditions
                </ModalHeader>
                <ModalBody scrollable>
                  <Typography className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography className="mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                  <Typography className="mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Typography>
                  <Typography className="mb-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                  <Typography className="mb-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </Typography>
                  <Typography className="mb-4">
                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </Typography>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={() => setScrollOpen(false)}>
                    Decline
                  </Button>
                  <Button onClick={() => setScrollOpen(false)}>
                    Accept
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Modal scrollBehavior="inside">
  <ModalHeader>Long Content</ModalHeader>
  <ModalBody scrollable>
    {/* Long content here */}
  </ModalBody>
  <ModalFooter>...</ModalFooter>
</Modal>`}</CodeBlock>
        </div>

        {/* Form Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Form in Modal</Typography>
          <Typography variant="body" className="mb-4">
            Using forms inside modals for user input.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button onClick={() => setFormOpen(true)}>Open Form Modal</Button>
              <Modal open={formOpen} onClose={() => setFormOpen(false)}>
                <ModalHeader onClose={() => setFormOpen(false)}>
                  Create New Account
                </ModalHeader>
                <ModalBody>
                  <form className="space-y-4">
                    <Input
                      label="Full Name"
                      placeholder="Enter your name"
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Create a password"
                    />
                    <Checkbox>
                      I agree to the terms and conditions
                    </Checkbox>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={() => setFormOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setFormOpen(false)}>
                    Create Account
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Modal Props</Typography>
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
                <td className="p-2 font-mono text-sm">open</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Controls modal visibility (required)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">onClose</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`() => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Callback when modal should close</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large' | 'xlarge' | 'full'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Modal size</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">animation</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'fade' | 'scale' | 'slide' | 'zoom' | 'flip'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'scale'</td>
                <td className="p-2 text-sm">Animation type</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">backdrop</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'blur' | 'dark' | 'light' | 'none'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'blur'</td>
                <td className="p-2 text-sm">Backdrop style</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">closeOnBackdrop</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true</td>
                <td className="p-2 text-sm">Close modal when clicking backdrop</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">closeOnEscape</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true</td>
                <td className="p-2 text-sm">Close modal when pressing Escape key</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">scrollBehavior</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'inside' | 'outside'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'outside'</td>
                <td className="p-2 text-sm">Where scrolling occurs for long content</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">zIndex</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">1040</td>
                <td className="p-2 text-sm">Z-index of the modal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">ModalHeader Props</Typography>
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
                <td className="p-2 font-mono text-sm">onClose</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">{`() => void`}</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Shows close button when provided</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">ModalBody Props</Typography>
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
                <td className="p-2 font-mono text-sm">scrollable</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Makes body scrollable for long content</td>
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
                Modals are rendered using React Portal to ensure proper z-index stacking
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Body scroll is automatically locked when modal is open
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                All animations are powered by Framer Motion for smooth transitions
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The glass effect on the modal works best with the blur backdrop
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}