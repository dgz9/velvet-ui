import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Card, CardBody } from '@velvet-ui/core';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls modal visibility',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge', 'full'],
      description: 'Size of the modal',
    },
    backdrop: {
      control: 'select',
      options: ['blur', 'dark', 'light', 'none'],
      description: 'Backdrop style',
    },
    animation: {
      control: 'select',
      options: ['fade', 'scale', 'slide', 'zoom', 'flip'],
      description: 'Animation type',
    },
    scrollBehavior: {
      control: 'select',
      options: ['inside', 'outside'],
      description: 'Scroll behavior for long content',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Close modal when clicking backdrop',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close modal when pressing Escape',
    },
    zIndex: {
      control: 'number',
      description: 'Z-index for modal stacking',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader onClose={() => setOpen(false)}>
            <h2 className="text-xl font-semibold">Modal Title</h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400">
              This is a modal with Mac OS-style animations. It smoothly scales in and out with a spring animation.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const sizes = ['small', 'medium', 'large', 'xlarge', 'full'] as const;
    
    return (
      <>
        <div className="flex flex-wrap gap-4">
          {sizes.map(size => (
            <Button key={size} onClick={() => setOpenModal(size)} variant="outline">
              Open {size} modal
            </Button>
          ))}
        </div>
        
        {sizes.map(size => (
          <Modal 
            key={size}
            open={openModal === size} 
            onClose={() => setOpenModal(null)}
            size={size}
          >
            <ModalHeader onClose={() => setOpenModal(null)}>
              <h2 className="text-xl font-semibold capitalize">{size} Modal</h2>
            </ModalHeader>
            <ModalBody>
              <p className="text-gray-600 dark:text-gray-400">
                This is a {size} sized modal. Notice how the width changes based on the size prop.
              </p>
              {size === 'full' && (
                <div className="mt-4 space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Full screen modals take up the entire viewport and are great for immersive experiences.
                  </p>
                  <Input label="Example Input" placeholder="Type something..." />
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setOpenModal(null)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        ))}
      </>
    );
  },
};

export const Animations: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const animations = ['fade', 'scale', 'slide', 'zoom', 'flip'] as const;
    
    return (
      <>
        <div className="flex flex-wrap gap-4">
          {animations.map(animation => (
            <Button key={animation} onClick={() => setOpenModal(animation)} color="secondary">
              {animation} animation
            </Button>
          ))}
        </div>
        
        {animations.map(animation => (
          <Modal 
            key={animation}
            open={openModal === animation} 
            onClose={() => setOpenModal(null)}
            animation={animation}
          >
            <ModalHeader onClose={() => setOpenModal(null)}>
              <h2 className="text-xl font-semibold capitalize">{animation} Animation</h2>
            </ModalHeader>
            <ModalBody>
              <p className="text-gray-600 dark:text-gray-400">
                This modal uses the {animation} animation. Close and reopen to see the effect.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setOpenModal(null)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        ))}
      </>
    );
  },
};

export const Backdrops: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const backdrops = ['blur', 'dark', 'light', 'none'] as const;
    
    return (
      <>
        <div className="flex flex-wrap gap-4">
          {backdrops.map(backdrop => (
            <Button key={backdrop} onClick={() => setOpenModal(backdrop)} color="info">
              {backdrop} backdrop
            </Button>
          ))}
        </div>
        
        {backdrops.map(backdrop => (
          <Modal 
            key={backdrop}
            open={openModal === backdrop} 
            onClose={() => setOpenModal(null)}
            backdrop={backdrop}
          >
            <ModalHeader onClose={() => setOpenModal(null)}>
              <h2 className="text-xl font-semibold capitalize">{backdrop} Backdrop</h2>
            </ModalHeader>
            <ModalBody>
              <p className="text-gray-600 dark:text-gray-400">
                This modal has a {backdrop} backdrop style. Notice how the background changes.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setOpenModal(null)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        ))}
      </>
    );
  },
};

export const ScrollBehavior: Story = {
  render: () => {
    const [scrollType, setScrollType] = useState<'inside' | 'outside'>('outside');
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <div className="flex gap-4">
          <Button onClick={() => setOpen(true)}>Open Long Content Modal</Button>
          <select 
            value={scrollType} 
            onChange={(e) => setScrollType(e.target.value as 'inside' | 'outside')}
            className="px-3 py-2 rounded border"
          >
            <option value="outside">Scroll Outside</option>
            <option value="inside">Scroll Inside</option>
          </select>
        </div>
        
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}
          scrollBehavior={scrollType}
          size="large"
        >
          <ModalHeader onClose={() => setOpen(false)}>
            <h2 className="text-xl font-semibold">Long Content (Scroll {scrollType})</h2>
          </ModalHeader>
          <ModalBody scrollable={scrollType === 'inside'}>
            <div className="space-y-4">
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-400">
                  Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setOpen(false)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const NestedModals: Story = {
  render: () => {
    const [parentOpen, setParentOpen] = useState(false);
    const [childOpen, setChildOpen] = useState(false);
    const [grandchildOpen, setGrandchildOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setParentOpen(true)}>Open Nested Modals Demo</Button>
        
        <Modal 
          open={parentOpen} 
          onClose={() => setParentOpen(false)}
          size="large"
        >
          <ModalHeader onClose={() => setParentOpen(false)}>
            <h2 className="text-xl font-semibold">Parent Modal</h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This is the parent modal. You can open nested modals from here.
            </p>
            <Button onClick={() => setChildOpen(true)} color="primary">
              Open Nested Modal
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setParentOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        
        <Modal 
          open={childOpen} 
          onClose={() => setChildOpen(false)}
          size="medium"
          backdrop="dark"
          animation="zoom"
          zIndex={1060}
        >
          <ModalHeader onClose={() => setChildOpen(false)}>
            <h2 className="text-xl font-semibold">Nested Modal</h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This modal is nested inside the parent modal. You can open another level.
            </p>
            <Button onClick={() => setGrandchildOpen(true)} variant="outline" color="secondary">
              Open Another Nested Modal
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setChildOpen(false)}>
              Back
            </Button>
          </ModalFooter>
        </Modal>
        
        <Modal 
          open={grandchildOpen} 
          onClose={() => setGrandchildOpen(false)}
          size="small"
          backdrop="blur"
          animation="fade"
          zIndex={1080}
        >
          <ModalHeader onClose={() => setGrandchildOpen(false)}>
            <h2 className="text-lg font-semibold">Third Level Modal</h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400">
              This demonstrates multiple levels of nested modals with proper z-index stacking.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setGrandchildOpen(false)} size="small" className="w-full">
              Got it!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="medium">
          <ModalHeader onClose={() => setOpen(false)}>
            <h2 className="text-xl font-semibold">Create Account</h2>
          </ModalHeader>
          <ModalBody>
            <form className="space-y-4">
              <Input
                label="Full Name"
                placeholder="John Doe"
              />
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              Create Account
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const ConfirmationModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button color="danger" onClick={() => setOpen(true)}>Delete Item</Button>
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}
          size="small"
          animation="zoom"
        >
          <ModalHeader onClose={() => setOpen(false)}>
            <h2 className="text-xl font-semibold">Confirm Delete</h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const GalleryModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Gallery</Button>
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}
          size="xlarge"
          backdrop="dark"
        >
          <ModalHeader onClose={() => setOpen(false)}>
            <h2 className="text-xl font-semibold">Image Gallery</h2>
          </ModalHeader>
          <ModalBody>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg" />
              ))}
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  },
};

export const NonDismissible: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Non-Dismissible Modal</Button>
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}
          closeOnBackdrop={false}
          closeOnEscape={false}
        >
          <ModalHeader showCloseButton={false}>
            <h2 className="text-xl font-semibold">Important Notice</h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400">
              This modal cannot be closed by clicking outside or pressing Escape. You must click the button below.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>
              I Understand
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const FullScreenModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Full Screen Modal</Button>
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}
          size="full"
          animation="fade"
          scrollBehavior="inside"
        >
          <ModalHeader onClose={() => setOpen(false)}>
            <h2 className="text-xl font-semibold">Full Screen Experience</h2>
          </ModalHeader>
          <ModalBody scrollable>
            <div className="max-w-4xl mx-auto py-8">
              <h3 className="text-2xl font-bold mb-4">Full Screen Modal</h3>
              <p className="text-[var(--color-foreground-secondary)] mb-6">
                This modal takes up the entire viewport. The footer is fixed at the bottom, and the content area can scroll if needed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[1, 2, 3, 4].map(i => (
                  <Card key={i}>
                    <CardBody>
                      <h4 className="font-semibold mb-2">Feature {i}</h4>
                      <p className="text-[var(--color-foreground-secondary)]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </CardBody>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-4">
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" type="email" placeholder="Enter your email" />
                <Input label="Message" placeholder="Type your message here..." />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => setOpen(false)}>
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};