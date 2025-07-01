# @velvet-ui/core

Core components for Velvet UI - a modern React component library with smooth animations and Mac OS-inspired aesthetics.

## Installation

```bash
npm install @velvet-ui/core framer-motion
```

## Usage

```tsx
import { Button, Card, Input } from '@velvet-ui/core';
import '@velvet-ui/core/styles.css';

function App() {
  return (
    <Card>
      <Input label="Email" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Components

- **Button** - Versatile button with variants and animations
- **Card** - Container with glassmorphism effects
- **Input** - Text input with floating labels
- **Modal** - Mac OS-style modal dialogs
- **Toast** - Stackable notifications

## License

MIT