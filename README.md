# Velvet UI

A modern React component library that emphasizes buttery smooth animations and Mac OS-inspired aesthetics. Built with TypeScript, Tailwind CSS, and Framer Motion.

![npm version](https://img.shields.io/npm/v/@velvet-ui/core)
![license](https://img.shields.io/npm/l/@velvet-ui/core)
![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-blue)

> 🤖 **Created with Claude Code**: This entire UI library was developed using Claude Code as a demonstration of AI-assisted development capabilities. From component architecture to animations, every aspect was crafted through AI collaboration.

## ✨ Features

- 🎨 **Mac OS-inspired Design** - Beautiful glassmorphism effects and subtle animations
- 🌊 **Smooth Animations** - Powered by Framer Motion with spring physics
- 🌓 **Dark Mode Support** - SSR-safe theme switching without flash
- ♿ **Accessibility First** - Proper ARIA labels and keyboard navigation
- 📦 **Tree Shakeable** - Import only what you need
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 🎯 **Tailwind CSS** - Easy customization with utility classes
- 📱 **Responsive** - Mobile-first design approach

## 🎯 Project Goals

Velvet UI was created to explore the intersection of AI-assisted development and modern UI design. The library aims to:

- **Demonstrate AI Capabilities**: Showcase how Claude Code can build production-ready component libraries
- **Push Design Boundaries**: Create components that feel premium with smooth, natural animations
- **Prioritize Developer Experience**: Provide intuitive APIs with excellent TypeScript support
- **Bridge Design Systems**: Combine the best of Mac OS aesthetics with web accessibility standards

## 🛠️ Built With

- **React 18+** - Latest React features including concurrent rendering
- **TypeScript** - Full type safety and developer tooling
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Framer Motion** - Physics-based animations and gestures
- **Radix UI** - Accessible component primitives
- **Turborepo** - High-performance monorepo build system
- **Storybook** - Interactive component documentation

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

## 📚 Documentation & Examples

### Storybook
View the full component showcase with interactive examples:
```bash
cd apps/docs && npm run dev
```

### Playground
Experiment with components in a live development environment:
```bash
cd apps/playground && npm run dev
```

### Website Documentation
Comprehensive documentation with code examples and best practices:
```bash
cd apps/website && npm run dev
```

## ✨ What Makes Velvet UI Special

1. **AI-Driven Development**: Every component was thoughtfully designed through iterative AI collaboration, resulting in consistent patterns and best practices.

2. **Attention to Detail**: From micro-interactions to loading states, every aspect has been carefully crafted for a premium feel.

3. **Performance First**: Components are optimized for performance with lazy loading, memoization, and efficient re-renders.

4. **Design System**: Cohesive design tokens ensure consistency across all components while maintaining flexibility.

5. **Real-World Ready**: Built with production use cases in mind, including error handling, loading states, and edge cases.

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

## 🚀 Future Plans

- Additional component variants and themes
- Animation presets and utilities
- Form validation integration
- Data visualization components
- Mobile-specific components
- Enhanced accessibility features

## 🙏 Acknowledgments

This project demonstrates the potential of AI-assisted development. Special thanks to:
- The Claude Code team for making this possible
- The open-source community for inspiration
- All developers exploring the future of AI-powered coding

---

<p align="center">
  Built with ❤️ and 🤖 using Claude Code
</p>