// Z-index hierarchy inspired by MUI
export const zIndex = {
  // Base layers
  base: 0,
  codeBlock: 1,
  card: 10,
  
  // Interactive elements
  dropdown: 40, // Below navbar (z-50)
  select: 40,
  autocomplete: 40,
  
  // Navigation
  navbar: 50,
  
  // Overlays
  modal: 1300,
  tooltip: 1500,
  
  // Maximum for critical overlays
  max: 9999,
} as const;

export type ZIndexKey = keyof typeof zIndex;