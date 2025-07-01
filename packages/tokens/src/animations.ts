export const animations = {
  // Spring presets
  spring: {
    snappy: { type: 'spring', stiffness: 300, damping: 30 },
    smooth: { type: 'spring', stiffness: 120, damping: 20 },
    bouncy: { type: 'spring', stiffness: 400, damping: 10 },
    slow: { type: 'spring', stiffness: 100, damping: 40 },
    
    // Mac OS-style springs
    windowOpen: { type: 'spring', stiffness: 500, damping: 35 },
    windowClose: { type: 'spring', stiffness: 400, damping: 40 },
    dock: { type: 'spring', stiffness: 800, damping: 30 },
    genie: { type: 'spring', stiffness: 200, damping: 25 },
  },
  
  // Duration presets
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.7,
  },
  
  // Easing curves
  easing: {
    easeOut: [0.0, 0.0, 0.2, 1],
    easeIn: [0.4, 0.0, 1, 1],
    easeInOut: [0.4, 0.0, 0.2, 1],
    
    // Mac OS-style curves
    macOS: [0.28, 0.11, 0.32, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  
  // Common transitions
  transitions: {
    opacity: 'opacity 0.2s ease-out',
    colors: 'color 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out',
    transform: 'transform 0.2s ease-out',
    all: 'all 0.2s ease-out',
  },
} as const;

export type AnimationScale = typeof animations;