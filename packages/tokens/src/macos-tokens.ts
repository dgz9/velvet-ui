export const macosTokens = {
  // macOS-inspired shadows
  shadows: {
    // Subtle elevation shadows
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
    lg: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    
    // Window-style shadows
    window: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
    popover: '0 8px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
    dropdown: '0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
    
    // Dock-style shadow
    dock: '0 12px 28px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.08)',
    
    // Inset shadows for inputs and wells
    inset: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
    insetMd: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
    
    // Focus ring shadows
    focus: '0 0 0 3px rgba(0, 122, 255, 0.4)',
    focusError: '0 0 0 3px rgba(255, 59, 48, 0.4)',
  },
  
  // Backdrop filters for glass morphism
  backdropBlur: {
    none: 'none',
    sm: 'blur(8px)',
    md: 'blur(12px)',
    lg: 'blur(16px)',
    xl: 'blur(24px)',
    '2xl': 'blur(40px)',
    
    // macOS-specific blur values
    window: 'blur(20px)',
    sidebar: 'blur(12px)',
    popover: 'blur(16px)',
    overlay: 'blur(8px)',
  },
  
  // Border radius values
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
    
    // macOS-specific radius values
    button: '6px',
    input: '5px',
    card: '10px',
    window: '10px',
    popover: '8px',
    badge: '4px',
  },
  
  // Animation values
  animation: {
    duration: {
      instant: 0,
      fast: 0.15,
      normal: 0.25,
      slow: 0.35,
      slower: 0.5,
    },
    easing: {
      linear: 'linear' as const,
      in: [0.4, 0, 1, 1] as const,
      out: [0, 0, 0.2, 1] as const,
      inOut: [0.4, 0, 0.2, 1] as const,
      
      // macOS-specific easing
      spring: [0.68, -0.6, 0.32, 1.6] as const,
      bounce: [0.68, -0.55, 0.265, 1.55] as const,
      smooth: [0.4, 0, 0.2, 1] as const,
    },
  },
  
  // Spacing scale
  spacing: {
    0: '0',
    0.5: '2px',
    1: '4px',
    1.5: '6px',
    2: '8px',
    2.5: '10px',
    3: '12px',
    3.5: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
    36: '144px',
    40: '160px',
    44: '176px',
    48: '192px',
    52: '208px',
    56: '224px',
    60: '240px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px',
  },
  
  // Typography
  typography: {
    // Font families
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
      display: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    },
    
    // Font sizes
    fontSize: {
      xs: ['11px', { lineHeight: '16px' }],
      sm: ['13px', { lineHeight: '20px' }],
      base: ['15px', { lineHeight: '24px' }],
      lg: ['17px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '32px' }],
      '2xl': ['24px', { lineHeight: '36px' }],
      '3xl': ['28px', { lineHeight: '40px' }],
      '4xl': ['32px', { lineHeight: '44px' }],
      '5xl': ['40px', { lineHeight: '52px' }],
      '6xl': ['48px', { lineHeight: '60px' }],
      '7xl': ['56px', { lineHeight: '68px' }],
      '8xl': ['64px', { lineHeight: '76px' }],
      '9xl': ['72px', { lineHeight: '84px' }],
    },
    
    // Font weights
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    // Letter spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Z-index scale
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
    
    // Semantic z-index values
    base: '0',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    tooltip: '1800',
  },
  
  // Opacity values
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1',
  },
  
  // macOS-specific vibrancy effects
  vibrancy: {
    // Light mode vibrancy
    light: {
      sidebar: 'rgba(246, 246, 246, 0.72)',
      popover: 'rgba(242, 242, 242, 0.82)',
      hudWindow: 'rgba(239, 239, 239, 0.62)',
      sheet: 'rgba(252, 252, 252, 0.92)',
      windowBackground: 'rgba(255, 255, 255, 0.72)',
      underPageBackground: 'rgba(255, 255, 255, 0.55)',
      contentBackground: 'rgba(255, 255, 255, 0.82)',
    },
    
    // Dark mode vibrancy
    dark: {
      sidebar: 'rgba(37, 37, 37, 0.72)',
      popover: 'rgba(30, 30, 30, 0.82)',
      hudWindow: 'rgba(25, 25, 25, 0.62)',
      sheet: 'rgba(29, 29, 29, 0.92)',
      windowBackground: 'rgba(32, 32, 32, 0.72)',
      underPageBackground: 'rgba(40, 40, 40, 0.55)',
      contentBackground: 'rgba(30, 30, 30, 0.82)',
    },
  },
} as const;

export type MacOSTokens = typeof macosTokens;