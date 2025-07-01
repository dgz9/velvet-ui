# macOS-Inspired Components

This document provides comprehensive documentation for the macOS-inspired components in Velvet UI.

## Design System

Velvet UI now includes a complete macOS-inspired design system with:

- **Colors**: Native macOS system colors
- **Shadows**: Subtle, layered shadows for depth
- **Blur Effects**: Vibrancy and backdrop blur effects
- **Animations**: Smooth, spring-based animations
- **Typography**: SF Pro-inspired font stack

## Refined Components

### Button

The Button component has been refined with macOS aesthetics:

```tsx
import { Button } from '@velvet-ui/core';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="solid" color="primary">Primary</Button>
<Button variant="outline" color="secondary">Secondary</Button>
<Button variant="ghost" color="danger">Delete</Button>
<Button variant="glass">Glass Effect</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With loading state
<Button loading loadingText="Saving...">Save</Button>

// With icons
<Button beginContent={<Icon />}>With Icon</Button>
```

#### Props
- `variant`: 'solid' | 'outline' | 'ghost' | 'glass' | 'glow' | 'gradient' | 'gradientOutline'
- `color`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
- `size`: 'small' | 'medium' | 'large'
- `radius`: 'none' | 'small' | 'medium' | 'large' | 'full'
- `loading`: boolean
- `loadingText`: string
- `beginContent`: React.ReactNode
- `endContent`: React.ReactNode

### Card

Enhanced Card component with macOS window-like styling:

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@velvet-ui/core';

// Basic card
<Card>
  <CardBody>
    <p>Card content</p>
  </CardBody>
</Card>

// With header and footer
<Card variant="glass" radius="large">
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content</p>
  </CardBody>
  <CardFooter>
    <Button size="small">Action</Button>
  </CardFooter>
</Card>

// Interactive card
<Card interactive onPress={() => console.log('clicked')}>
  <CardBody>
    <p>Click me!</p>
  </CardBody>
</Card>

// With cover image
<Card coverImage="/image.jpg" coverImageHeight={200}>
  <CardBody>
    <p>Content below image</p>
  </CardBody>
</Card>
```

#### Props
- `variant`: 'default' | 'glass' | 'glassStrong' | 'glassMedium' | 'glassSubtle' | 'macOS' | 'elevated' | 'flat'
- `radius`: 'none' | 'small' | 'medium' | 'large' | 'xl'
- `interactive`: boolean
- `onPress`: (e: React.MouseEvent) => void
- `coverImage`: string
- `coverImageHeight`: string | number

### Input

Refined Input component with macOS-style floating labels:

```tsx
import { Input } from '@velvet-ui/core';

// Basic input
<Input placeholder="Enter text" />

// With floating label
<Input label="Email" type="email" />

// With validation
<Input 
  label="Password" 
  type="password"
  error="Password is required"
/>

// Success state
<Input 
  label="Username"
  success="Username is available"
/>

// Glass variant
<Input 
  variant="glass"
  label="Search"
  placeholder="Type to search..."
/>
```

#### Props
- `variant`: 'default' | 'glass' | 'error' | 'success'
- `size`: 'small' | 'medium' | 'large'
- `label`: string
- `error`: string
- `success`: string
- `helperText`: string

## New macOS Components

### Window

A component that mimics macOS window styling with traffic light controls:

```tsx
import { Window, WindowBody } from '@velvet-ui/core';

// Basic window
<Window title="My Window">
  <WindowBody>
    <p>Window content</p>
  </WindowBody>
</Window>

// With controls and actions
<Window
  title="Document.txt"
  showControls
  onClose={() => console.log('close')}
  onMinimize={() => console.log('minimize')}
  onMaximize={() => console.log('maximize')}
>
  <WindowBody>
    <p>Document content</p>
  </WindowBody>
</Window>

// Draggable window
<Window
  title="Draggable Window"
  draggable
  variant="glass"
>
  <WindowBody>
    <p>Drag me around!</p>
  </WindowBody>
</Window>
```

#### Props
- `variant`: 'default' | 'glass' | 'elevated'
- `radius`: 'none' | 'small' | 'medium' | 'large'
- `size`: 'small' | 'medium' | 'large' | 'full'
- `title`: string
- `showControls`: boolean
- `onClose`: () => void
- `onMinimize`: () => void
- `onMaximize`: () => void
- `isActive`: boolean
- `draggable`: boolean
- `resizable`: boolean

### Dock

A macOS dock-inspired component with magnification effects:

```tsx
import { Dock, DockItem } from '@velvet-ui/core';

// Basic dock
<Dock position="bottom">
  <DockItem icon={<HomeIcon />} label="Home" />
  <DockItem icon={<MailIcon />} label="Mail" badge={5} />
  <DockItem icon={<PhotoIcon />} label="Photos" isActive />
  <DockItem icon={<MusicIcon />} label="Music" />
</Dock>

// With custom magnification
<Dock 
  position="bottom"
  magnification={2.5}
  distance={100}
>
  <DockItem icon={<AppIcon />} label="App" />
</Dock>

// Vertical dock
<Dock position="left">
  <DockItem icon={<Icon1 />} />
  <DockItem icon={<Icon2 />} />
</Dock>
```

#### Dock Props
- `variant`: 'default' | 'glass'
- `position`: 'bottom' | 'left' | 'right'
- `magnification`: number (default: 2)
- `distance`: number (default: 140)

#### DockItem Props
- `icon`: React.ReactNode (required)
- `label`: string
- `badge`: string | number
- `isActive`: boolean

### MacOSSidebar

An enhanced sidebar component with macOS Finder-like sections:

```tsx
import { 
  MacOSSidebar, 
  SidebarSection, 
  SidebarItem,
  SidebarGroup 
} from '@velvet-ui/core';

// Basic sidebar
<MacOSSidebar>
  <SidebarSection title="Favorites">
    <SidebarItem icon={<DesktopIcon />}>Desktop</SidebarItem>
    <SidebarItem icon={<DocumentsIcon />} badge={12}>Documents</SidebarItem>
    <SidebarItem icon={<DownloadsIcon />} isActive>Downloads</SidebarItem>
  </SidebarSection>
  
  <SidebarSection title="iCloud" collapsible>
    <SidebarItem icon={<CloudIcon />}>iCloud Drive</SidebarItem>
    <SidebarItem icon={<ShareIcon />}>Shared</SidebarItem>
  </SidebarSection>
  
  <SidebarGroup label="Tags">
    <SidebarItem icon={<RedTag />}>Red</SidebarItem>
    <SidebarItem icon={<BlueTag />}>Blue</SidebarItem>
  </SidebarGroup>
</MacOSSidebar>

// Collapsible sidebar
<MacOSSidebar 
  isCollapsed={isCollapsed}
  onCollapse={setIsCollapsed}
  variant="glass"
>
  {/* content */}
</MacOSSidebar>
```

#### MacOSSidebar Props
- `variant`: 'default' | 'glass' | 'elevated'
- `width`: 'narrow' | 'default' | 'wide'
- `isCollapsed`: boolean
- `onCollapse`: (collapsed: boolean) => void

#### SidebarSection Props
- `title`: string
- `collapsible`: boolean
- `defaultExpanded`: boolean

#### SidebarItem Props
- `variant`: 'default' | 'ghost'
- `isActive`: boolean
- `icon`: React.ReactNode
- `badge`: string | number

## Theme Integration

To use the macOS theme, update your ThemeProvider:

```tsx
import { ThemeProvider } from '@velvet-ui/core';

function App() {
  return (
    <ThemeProvider defaultThemeName="macos">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## Design Tokens

Access macOS design tokens directly:

```tsx
import { macosTokens } from '@velvet-ui/tokens';

// Use in custom components
const CustomComponent = styled.div`
  box-shadow: ${macosTokens.shadows.window};
  backdrop-filter: ${macosTokens.backdropBlur.window};
  border-radius: ${macosTokens.borderRadius.window};
  transition-duration: ${macosTokens.animation.duration.normal};
  transition-timing-function: ${macosTokens.animation.easing.smooth};
`;
```

## Best Practices

1. **Use appropriate blur levels**: Reserve strong blur for overlays and modals
2. **Keep shadows subtle**: macOS uses very subtle shadows for depth
3. **Smooth animations**: Use the provided easing functions for consistent feel
4. **Consistent spacing**: Use the spacing scale from the design tokens
5. **Respect system preferences**: The theme automatically adapts to light/dark mode

## Accessibility

All components maintain WCAG AA compliance with:
- Proper focus indicators
- Keyboard navigation support
- ARIA labels and roles
- Sufficient color contrast
- Screen reader compatibility