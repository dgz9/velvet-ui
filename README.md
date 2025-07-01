# Velvet UI

A modern React component library that emphasizes buttery smooth animations and Mac OS-inspired aesthetics. Built with TypeScript, Tailwind CSS, and Framer Motion.

![npm version](https://img.shields.io/npm/v/@velvet-ui/core)
![license](https://img.shields.io/npm/l/@velvet-ui/core)

## ✨ Features

- 🎨 **Mac OS-inspired Design** - Beautiful glassmorphism effects and subtle animations
- 🌊 **Smooth Animations** - Powered by Framer Motion with spring physics
- 🌓 **Dark Mode Support** - SSR-safe theme switching without flash
- ♿ **Accessibility First** - Proper ARIA labels and keyboard navigation
- 📦 **Tree Shakeable** - Import only what you need
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 🎯 **Tailwind CSS** - Easy customization with utility classes
- 📱 **Responsive** - Mobile-first design approach

## 📦 Installation

```bash
npm install @velvet-ui/core framer-motion
```

## 🚀 Quick Start

1. Import the styles in your app's entry point:

```tsx
import '@velvet-ui/core/styles.css';
```

2. Wrap your app with the theme provider:

```tsx
import { ToastProvider } from '@velvet-ui/core';

function App() {
  return (
    <ToastProvider>
      {/* Your app content */}
    </ToastProvider>
  );
}
```

3. Start using components:

```tsx
import { Button, Card, Input } from '@velvet-ui/core';

function MyComponent() {
  return (
    <Card variant="glass">
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 🧩 Components

### Button
Versatile button component with multiple variants and animations.

```tsx
<Button variant="primary" size="medium" loading={false}>
  Click me
</Button>
```

### Card
Container component with glassmorphism and elevation effects.

```tsx
<Card variant="glass" interactive>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Actions</CardFooter>
</Card>
```

### Input
Text input with floating label animations.

```tsx
<Input 
  label="Email" 
  type="email"
  error="Please enter a valid email"
/>
```

### Modal
Mac OS-style modal with smooth animations.

```tsx
<Modal open={open} onClose={() => setOpen(false)}>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
  <ModalFooter>
    <Button>Action</Button>
  </ModalFooter>
</Modal>
```

### Toast
Stackable notifications with swipe gestures.

```tsx
const { addToast } = useToast();

addToast({
  variant: 'success',
  title: 'Success!',
  description: 'Your action was completed',
});
```

## 🎨 Customization

### Tailwind Configuration

Extend your `tailwind.config.js`:

```js
module.exports = {
  presets: [require('@velvet-ui/core/tailwind.config.js')],
  // Your custom config
};
```

### CSS Variables

Customize the theme with CSS variables:

```css
:root {
  --velvet-backdrop-blur: 12px;
  --velvet-glass-opacity: 0.1;
  --velvet-border-opacity: 0.2;
}
```

## 🏗️ Development

This is a monorepo managed with Turborepo.

### Structure

```
velvet-ui/
├── apps/
│   ├── docs/        # Storybook documentation
│   └── playground/  # Development playground
├── packages/
│   ├── core/        # Component library
│   ├── tokens/      # Design tokens
│   └── tsconfig/    # Shared TypeScript config
```

### Commands

```bash
# Install dependencies
npm install

# Run development
npm run dev

# Build all packages
npm run build

# Run tests
npm run test

# Run Storybook
cd apps/docs && npm run dev
```

## 📝 License

MIT © Velvet UI

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.