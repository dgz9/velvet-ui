import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter, CardImage, Button } from '@velvet-ui/core';
import { useState } from 'react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'elevated', 'flat', 'gradient', 'glow'],
      description: 'The visual style of the card',
    },
    color: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'Color theme for the card (works with glow variant)',
    },
    interactive: {
      control: 'boolean',
      description: 'Makes the card interactive with hover effects',
    },
    isClickable: {
      control: 'boolean',
      description: 'Makes the card clickable with ripple effect',
    },
    disableRipple: {
      control: 'boolean',
      description: 'Disables ripple effect when clickable',
    },
    overflow: {
      control: 'select',
      options: ['hidden', 'visible', 'auto'],
      description: 'Controls overflow behavior',
    },
    coverImage: {
      control: 'text',
      description: 'URL for cover image',
    },
    coverImageHeight: {
      control: 'number',
      description: 'Height of cover image in pixels',
    },
    imageFill: {
      control: 'text',
      description: 'URL for background image that fills the entire card',
    },
    imageFillOverlay: {
      control: 'boolean',
      description: 'Show gradient overlay on image fill',
    },
    imageFillGradient: {
      control: 'select',
      options: ['top', 'bottom', 'both', 'none'],
      description: 'Gradient overlay direction for image fill',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
      </CardHeader>
      <CardBody>
        <p className="text-[var(--color-foreground-secondary)]">
          This is a card with some content. Cards are great for organizing information in a clean, structured way.
        </p>
      </CardBody>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" size="small">Cancel</Button>
        <Button size="small">Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card variant="default" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Default Card</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Standard card with border and background.
          </p>
        </CardBody>
      </Card>
      
      <Card variant="glass" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Glass Card</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Glassmorphism effect with backdrop blur.
          </p>
        </CardBody>
      </Card>
      
      <Card variant="elevated" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Elevated Card</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Shadow for depth and elevation.
          </p>
        </CardBody>
      </Card>

      <Card variant="flat" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Flat Card</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Simple flat design with border.
          </p>
        </CardBody>
      </Card>

      <Card variant="gradient" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Gradient Card</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Gradient background effect.
          </p>
        </CardBody>
      </Card>

      <Card variant="glow" color="primary" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Glow Card</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Glowing effect with color.
          </p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const ClickableCards: Story = {
  render: () => {
    const [clickCount, setClickCount] = useState(0);
    
    return (
      <div className="space-y-6">
        <p className="text-center text-[var(--color-foreground-secondary)]">
          Click count: <span className="font-bold">{clickCount}</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            variant="default" 
            isClickable 
            onPress={() => setClickCount(c => c + 1)}
            className="w-80"
          >
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Clickable with Ripple</h3>
              <p className="text-[var(--color-foreground-secondary)]">
                Click to see the ripple effect.
              </p>
            </CardBody>
          </Card>
          
          <Card 
            variant="glass" 
            isClickable 
            onPress={() => setClickCount(c => c + 1)}
            className="w-80"
          >
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Glass Clickable</h3>
              <p className="text-[var(--color-foreground-secondary)]">
                Glass cards show white ripples.
              </p>
            </CardBody>
          </Card>
          
          <Card 
            variant="elevated" 
            isClickable 
            disableRipple
            onPress={() => setClickCount(c => c + 1)}
            className="w-80"
          >
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">No Ripple</h3>
              <p className="text-[var(--color-foreground-secondary)]">
                Clickable but ripple disabled.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  },
};

export const WithCoverImage: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card variant="default" coverImage="https://picsum.photos/400/200" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Travel Destination</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Discover amazing places around the world with our curated travel experiences.
          </p>
        </CardBody>
        <CardFooter>
          <Button size="small" className="w-full">Book Now</Button>
        </CardFooter>
      </Card>

      <Card 
        variant="elevated" 
        coverImage="https://picsum.photos/400/300" 
        coverImageHeight={300}
        isClickable
        className="w-80"
      >
        <CardBody>
          <h3 className="text-lg font-semibold mb-2">Clickable with Cover</h3>
          <p className="text-[var(--color-foreground-secondary)]">
            This card has a taller cover image and is clickable.
          </p>
        </CardBody>
      </Card>

      <Card 
        variant="glass" 
        coverImage="https://picsum.photos/400/150"
        coverImageHeight={150}
        className="w-80"
      >
        <CardHeader showDivider={false}>
          <h3 className="text-lg font-semibold">Glass with Cover</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            Header divider removed for cleaner look.
          </p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const WithCardImage: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card variant="default" className="w-80">
        <CardImage 
          src="https://picsum.photos/400/200" 
          alt="Sample image"
          height={200}
        />
        <CardBody>
          <h3 className="text-lg font-semibold mb-2">Card with Image</h3>
          <p className="text-[var(--color-foreground-secondary)]">
            Using CardImage component for more control.
          </p>
        </CardBody>
      </Card>

      <Card variant="elevated" className="w-80">
        <CardBody>
          <h3 className="text-lg font-semibold mb-2">Mixed Content</h3>
          <p className="text-[var(--color-foreground-secondary)] mb-4">
            Image placed within the body.
          </p>
          <CardImage 
            src="https://picsum.photos/400/150" 
            alt="Inline image"
            height={150}
            className="rounded-lg"
          />
        </CardBody>
      </Card>

      <Card variant="glass" className="w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">Product Card</h3>
        </CardHeader>
        <CardImage 
          src="https://picsum.photos/400/250" 
          alt="Product"
          height={250}
          objectFit="contain"
          className="bg-gray-100 dark:bg-gray-800"
        />
        <CardFooter className="flex gap-2">
          <Button size="small" variant="ghost" className="flex-1">View Details</Button>
          <Button size="small" className="flex-1">Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const NoDividers: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card variant="elevated" className="w-96">
        <CardHeader showDivider={false}>
          <h3 className="text-xl font-semibold">Clean Design</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            This card has no header divider for a cleaner, more minimal appearance.
          </p>
        </CardBody>
        <CardFooter showDivider={false} className="flex justify-end gap-2">
          <Button variant="ghost" size="small">Skip</Button>
          <Button size="small">Continue</Button>
        </CardFooter>
      </Card>

      <Card variant="glass" className="w-96">
        <CardHeader>
          <h3 className="text-xl font-semibold">With Dividers</h3>
        </CardHeader>
        <CardBody>
          <p className="text-[var(--color-foreground-secondary)]">
            This card shows the default behavior with both header and footer dividers.
          </p>
        </CardBody>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="ghost" size="small">Cancel</Button>
          <Button size="small">Save</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const GlowVariants: Story = {
  render: () => {
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colors.map(color => (
          <Card key={color} variant="glow" color={color} className="w-80">
            <CardHeader>
              <h3 className="text-lg font-semibold capitalize">{color} Glow</h3>
            </CardHeader>
            <CardBody>
              <p className="text-[var(--color-foreground-secondary)]">
                This card has a {color} colored glow effect around it.
              </p>
            </CardBody>
            <CardFooter>
              <Button color={color} size="small" className="w-full">
                Action
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InteractivePlayground: Story = {
  render: () => {
    const [variant, setVariant] = useState<'default' | 'glass' | 'elevated' | 'flat' | 'gradient' | 'glow'>('default');
    const [color, setColor] = useState<'none' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'>('none');
    const [interactive, setInteractive] = useState(false);
    const [isClickable, setIsClickable] = useState(false);
    const [disableRipple, setDisableRipple] = useState(false);
    const [showCoverImage, setShowCoverImage] = useState(false);
    const [showHeaderDivider, setShowHeaderDivider] = useState(true);
    const [showFooterDivider, setShowFooterDivider] = useState(true);
    const [clickCount, setClickCount] = useState(0);
    
    return (
      <div className="space-y-6 w-full max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-1">Variant</label>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value as any)}
              className="w-full px-3 py-2 rounded border dark:bg-gray-700"
            >
              <option value="default">Default</option>
              <option value="glass">Glass</option>
              <option value="elevated">Elevated</option>
              <option value="flat">Flat</option>
              <option value="gradient">Gradient</option>
              <option value="glow">Glow</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value as any)}
              className="w-full px-3 py-2 rounded border dark:bg-gray-700"
              disabled={variant !== 'glow'}
            >
              <option value="none">None</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="danger">Danger</option>
              <option value="info">Info</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={interactive}
                onChange={(e) => setInteractive(e.target.checked)}
              />
              <span className="text-sm">Interactive</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isClickable}
                onChange={(e) => setIsClickable(e.target.checked)}
              />
              <span className="text-sm">Clickable</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={disableRipple}
                onChange={(e) => setDisableRipple(e.target.checked)}
                disabled={!isClickable}
              />
              <span className="text-sm">Disable Ripple</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showCoverImage}
                onChange={(e) => setShowCoverImage(e.target.checked)}
              />
              <span className="text-sm">Show Cover Image</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showHeaderDivider}
                onChange={(e) => setShowHeaderDivider(e.target.checked)}
              />
              <span className="text-sm">Header Divider</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showFooterDivider}
                onChange={(e) => setShowFooterDivider(e.target.checked)}
              />
              <span className="text-sm">Footer Divider</span>
            </label>
          </div>

          {isClickable && (
            <div className="col-span-2">
              <p className="text-sm">Click count: <span className="font-bold">{clickCount}</span></p>
            </div>
          )}
        </div>
        
        <div className="flex justify-center">
          <Card 
            variant={variant} 
            color={variant === 'glow' ? color : 'none'}
            interactive={interactive}
            isClickable={isClickable}
            disableRipple={disableRipple}
            onPress={isClickable ? () => setClickCount(c => c + 1) : undefined}
            coverImage={showCoverImage ? "https://picsum.photos/400/200" : undefined}
            className="w-96"
          >
            <CardHeader showDivider={showHeaderDivider}>
              <h3 className="text-xl font-semibold">Interactive Card Demo</h3>
            </CardHeader>
            <CardBody>
              <p className="text-[var(--color-foreground-secondary)] mb-4">
                This card responds to the controls above. Try different combinations to see how the card appearance and behavior changes.
              </p>
              <div className="text-sm space-y-1">
                <p>Variant: <span className="font-medium">{variant}</span></p>
                {variant === 'glow' && <p>Color: <span className="font-medium">{color}</span></p>}
                <p>Interactive: <span className="font-medium">{interactive ? 'Yes' : 'No'}</span></p>
                <p>Clickable: <span className="font-medium">{isClickable ? 'Yes' : 'No'}</span></p>
                {isClickable && <p>Ripple: <span className="font-medium">{disableRipple ? 'Disabled' : 'Enabled'}</span></p>}
              </div>
            </CardBody>
            <CardFooter showDivider={showFooterDivider}>
              <Button variant="ghost" size="small">Cancel</Button>
              <Button color={variant === 'glow' ? color : 'primary'} size="small">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  },
};

export const ComplexLayouts: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card variant="elevated" isClickable className="col-span-1 group">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">Premium Plan</h3>
              <p className="text-sm text-[var(--color-foreground-secondary)] mt-1">Everything you need to scale</p>
            </div>
            <span className="text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 rounded-full shadow-lg shadow-purple-500/25">
              PRO
            </span>
          </div>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-[var(--color-foreground-secondary)]">/month</span>
            </div>
            <ul className="space-y-3">
              {[
                'Unlimited projects',
                'Priority support',
                'Advanced analytics',
                'Team collaboration'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 group/item">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white font-medium shadow-sm group-hover/item:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary" className="w-full" size="large">
            <span className="font-medium">Start Free Trial</span>
          </Button>
        </CardFooter>
      </Card>
      
      <Card variant="glass" color="info" className="col-span-1">
        <CardImage 
          src="https://picsum.photos/600/150" 
          alt="Statistics header"
          height={150}
        />
        <CardHeader showDivider={false}>
          <h3 className="text-xl font-bold">Statistics</h3>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
              <p className="text-3xl font-bold text-[rgb(var(--color-primary))]">1,234</p>
              <p className="text-sm text-[var(--color-foreground-secondary)]">Active Users</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
              <p className="text-3xl font-bold text-[rgb(var(--color-success))]">98%</p>
              <p className="text-sm text-[var(--color-foreground-secondary)]">Satisfaction</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
              <p className="text-3xl font-bold text-[rgb(var(--color-warning))]">24/7</p>
              <p className="text-sm text-[var(--color-foreground-secondary)]">Support</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
              <p className="text-3xl font-bold text-[rgb(var(--color-info))]">500+</p>
              <p className="text-sm text-[var(--color-foreground-secondary)]">Integrations</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  ),
};

export const ProductCards: Story = {
  render: () => {
    const products = [
      { 
        name: 'Wireless Headphones', 
        price: '$99.99', 
        rating: 4.5,
        image: 'https://picsum.photos/300/300?random=1'
      },
      { 
        name: 'Smart Watch', 
        price: '$249.99', 
        rating: 4.8,
        image: 'https://picsum.photos/300/300?random=2'
      },
      { 
        name: 'Laptop Stand', 
        price: '$49.99', 
        rating: 4.2,
        image: 'https://picsum.photos/300/300?random=3'
      },
    ];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card 
            key={product.name}
            variant="elevated" 
            isClickable
            className="w-80"
          >
            <CardImage 
              src={product.image} 
              alt={product.name}
              height={240}
              objectFit="cover"
            />
            <CardBody>
              <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-[rgb(var(--color-primary))]">{product.price}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-[var(--color-foreground-secondary)]">{product.rating}</span>
                </div>
              </div>
              <p className="text-sm text-[var(--color-foreground-secondary)]">
                Free shipping on orders over $50
              </p>
            </CardBody>
            <CardFooter showDivider={false} className="flex justify-start gap-2">
              <Button variant="outline" size="small">View</Button>
              <Button size="small">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  },
};

export const ImageFillCards: Story = {
  render: () => {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Cinematic Image Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              variant="default"
              imageFill="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              imageFillGradient="bottom"
              className="h-64"
              isClickable
            >
              <CardBody className="h-full flex flex-col justify-end">
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider mb-2">Adventure</span>
                <h4 className="text-white font-semibold text-lg">Mountain Peaks</h4>
                <p className="text-white/80 text-sm">
                  Explore breathtaking heights
                </p>
              </CardBody>
            </Card>

            <Card 
              variant="default"
              imageFill="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop"
              imageFillGradient="top"
              className="h-64"
              isClickable
            >
              <CardBody className="h-full">
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider mb-2">Minimal</span>
                <h4 className="text-white font-semibold text-lg">Urban Architecture</h4>
                <p className="text-white/80 text-sm">
                  Modern design aesthetics
                </p>
              </CardBody>
            </Card>

            <Card 
              variant="default"
              imageFill="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
              imageFillGradient="both"
              className="h-64"
              isClickable
            >
              <CardBody className="h-full flex flex-col justify-center text-center">
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider mb-2">Workspace</span>
                <h4 className="text-white font-semibold text-lg">Productivity Hub</h4>
                <p className="text-white/80 text-sm">
                  Where ideas come to life
                </p>
              </CardBody>
            </Card>

            <Card 
              variant="glass"
              imageFill="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop"
              imageFillGradient="none"
              imageFillOverlay={false}
              className="h-64"
              isClickable
            >
              <CardBody className="h-full flex flex-col justify-end">
                <div className="bg-black/40 backdrop-blur-xl p-4 rounded-xl border border-white/10">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Nature</span>
                  <h4 className="text-white font-semibold mt-1">Tranquil Forest</h4>
                  <p className="text-white/80 text-sm">
                    Find your inner peace
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Hero Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              variant="elevated"
              imageFill="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&h=400&fit=crop"
              imageFillGradient="bottom"
              className="h-96 group"
              isClickable
            >
              <CardBody className="h-full flex flex-col justify-end p-8">
                <div className="space-y-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="inline-flex items-center gap-2 text-white/90 text-sm font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>Limited Time Offer</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white leading-tight">
                    Discover Your<br />Dream Destination
                  </h2>
                  <p className="text-white/90 text-lg max-w-md">
                    Exclusive deals on luxury resorts and breathtaking locations around the world.
                  </p>
                  <Button color="primary" size="large" className="mt-2">
                    <span className="font-medium">Explore Now →</span>
                  </Button>
                </div>
              </CardBody>
            </Card>

            <Card 
              variant="glass"
              imageFill="https://picsum.photos/800/400?random=15"
              imageFillGradient="both"
              className="h-96"
              isClickable
            >
              <CardHeader className="text-white" showDivider={false}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">FEATURED</span>
                  <span className="text-sm">★★★★★</span>
                </div>
              </CardHeader>
              <CardBody className="h-full flex flex-col justify-center text-center px-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Premium Experience
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Immerse yourself in luxury with our exclusive collection.
                </p>
              </CardBody>
              <CardFooter className="text-white justify-center" showDivider={false}>
                <Button variant="glass" color="primary">
                  View Collection
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Gallery Cards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[16, 17, 18, 19, 20, 21, 22, 23].map((num) => (
              <Card 
                key={num}
                variant="flat"
                imageFill={`https://picsum.photos/300/300?random=${num}`}
                imageFillGradient="none"
                imageFillOverlay={false}
                className="aspect-square"
                isClickable
              >
                <CardBody className="h-full p-0 opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <div className="h-full flex items-center justify-center bg-black/70">
                    <Button variant="glass" size="small">
                      View
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};