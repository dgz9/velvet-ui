export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  
  // macOS-style shadows
  'velvet-sm': '0 1px 3px rgba(0, 0, 0, 0.06), 0 0 0 0.5px rgba(0, 0, 0, 0.04)',
  'velvet-base': '0 2px 5px rgba(0, 0, 0, 0.07), 0 0 0 0.5px rgba(0, 0, 0, 0.04)',
  'velvet-md': '0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(0, 0, 0, 0.04)',
  'velvet-lg': '0 8px 20px rgba(0, 0, 0, 0.12), 0 0 0 0.5px rgba(0, 0, 0, 0.04)',
  'velvet-xl': '0 12px 28px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(0, 0, 0, 0.04)',
  
  // Window-style shadows
  'velvet-window': '0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 22px 70px rgba(0, 0, 0, 0.2)',
  'velvet-popover': '0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)',
  'velvet-button': 'inset 0 0.5px 0.5px rgba(255, 255, 255, 0.4), inset 0 -0.5px 0.5px rgba(0, 0, 0, 0.1)',
  'velvet-pressed': 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
} as const;

export type ShadowScale = typeof shadows;