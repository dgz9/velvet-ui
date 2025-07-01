import { colors } from './colors';
import { macosTokens } from './macos-tokens';

export interface SemanticColors {
  primary: string;
  primaryHover: string;
  primaryForeground: string;
  secondary: string;
  secondaryHover: string;
  secondaryForeground: string;
  success: string;
  successHover: string;
  successForeground: string;
  warning: string;
  warningHover: string;
  warningForeground: string;
  danger: string;
  dangerHover: string;
  dangerForeground: string;
  info: string;
  infoHover: string;
  infoForeground: string;
}

export interface ThemeColors {
  semantic: SemanticColors;
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    elevated: string;
    overlay: string;
    inverse: string;
  };
  foreground: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface Theme {
  name: string;
  light: {
    colors: ThemeColors;
  };
  dark: {
    colors: ThemeColors;
  };
}

// Default theme - Modern blue
export const defaultTheme: Theme = {
  name: 'Default',
  light: {
    colors: {
      semantic: {
        primary: '#007aff',
        primaryHover: '#0051d5',
        primaryForeground: '#ffffff',
        secondary: '#5856d6',
        secondaryHover: '#4240c4',
        secondaryForeground: '#ffffff',
        success: '#34c759',
        successHover: '#2aa148',
        successForeground: '#ffffff',
        warning: '#ff9500',
        warningHover: '#db7f00',
        warningForeground: '#ffffff',
        danger: '#ff3b30',
        dangerHover: '#d70015',
        dangerForeground: '#ffffff',
        info: '#5ac8fa',
        infoHover: '#40b6f0',
        infoForeground: '#ffffff',
      },
      background: {
        primary: colors.white,
        secondary: colors.gray[100],
        tertiary: colors.gray[200],
        elevated: colors.white,
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: colors.gray[950],
      },
      foreground: {
        primary: 'rgba(0, 0, 0, 0.85)',
        secondary: 'rgba(0, 0, 0, 0.5)',
        tertiary: 'rgba(0, 0, 0, 0.3)',
        inverse: colors.white,
      },
      border: {
        primary: 'rgba(0, 0, 0, 0.1)',
        secondary: 'rgba(0, 0, 0, 0.05)',
        tertiary: 'rgba(0, 0, 0, 0.03)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#0a84ff',
        primaryHover: '#409cff',
        primaryForeground: '#ffffff',
        secondary: '#5e5ce6',
        secondaryHover: '#7a78ff',
        secondaryForeground: '#ffffff',
        success: '#32d74b',
        successHover: '#5de372',
        successForeground: '#000000',
        warning: '#ff9f0a',
        warningHover: '#ffb340',
        warningForeground: '#000000',
        danger: '#ff453a',
        dangerHover: '#ff6961',
        dangerForeground: '#ffffff',
        info: '#64d2ff',
        infoHover: '#8cddff',
        infoForeground: '#000000',
      },
      background: {
        primary: colors.gray[950],
        secondary: colors.gray[900],
        tertiary: colors.gray[800],
        elevated: colors.gray[900],
        overlay: 'rgba(30, 30, 30, 0.8)',
        inverse: colors.white,
      },
      foreground: {
        primary: 'rgba(255, 255, 255, 0.85)',
        secondary: 'rgba(255, 255, 255, 0.55)',
        tertiary: 'rgba(255, 255, 255, 0.3)',
        inverse: colors.gray[950],
      },
      border: {
        primary: 'rgba(255, 255, 255, 0.1)',
        secondary: 'rgba(255, 255, 255, 0.05)',
        tertiary: 'rgba(255, 255, 255, 0.03)',
      },
    },
  },
};

// Pastel theme - Soft, muted colors
export const pastelTheme: Theme = {
  name: 'Pastel',
  light: {
    colors: {
      semantic: {
        primary: '#b8a7e9',
        primaryHover: '#a394e0',
        primaryForeground: '#2d2d2d',
        secondary: '#ffc0d9',
        secondaryHover: '#ffaed0',
        secondaryForeground: '#2d2d2d',
        success: '#a8e6cf',
        successHover: '#92dfc0',
        successForeground: '#2d2d2d',
        warning: '#ffd3b6',
        warningHover: '#ffc4a0',
        warningForeground: '#2d2d2d',
        danger: '#ffaaa5',
        dangerHover: '#ff9590',
        dangerForeground: '#2d2d2d',
        info: '#a8dadc',
        infoHover: '#91d0d3',
        infoForeground: '#2d2d2d',
      },
      background: {
        primary: '#fcfcfc',
        secondary: '#f8f7fc',
        tertiary: '#f3f2f8',
        elevated: '#ffffff',
        overlay: 'rgba(252, 252, 252, 0.8)',
        inverse: '#3d3d3d',
      },
      foreground: {
        primary: '#2d2d2d',
        secondary: '#626262',
        tertiary: '#969696',
        inverse: '#fcfcfc',
      },
      border: {
        primary: 'rgba(0, 0, 0, 0.06)',
        secondary: 'rgba(0, 0, 0, 0.03)',
        tertiary: 'rgba(0, 0, 0, 0.01)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#c5b6ef',
        primaryHover: '#b8a7e9',
        primaryForeground: '#1a1a1a',
        secondary: '#ffd0e5',
        secondaryHover: '#ffc0d9',
        secondaryForeground: '#1a1a1a',
        success: '#b8f0d8',
        successHover: '#a8e6cf',
        successForeground: '#1a1a1a',
        warning: '#ffe0cc',
        warningHover: '#ffd3b6',
        warningForeground: '#1a1a1a',
        danger: '#ffbbb6',
        dangerHover: '#ffaaa5',
        dangerForeground: '#1a1a1a',
        info: '#b8e4e6',
        infoHover: '#a8dadc',
        infoForeground: '#1a1a1a',
      },
      background: {
        primary: '#1a1a1a',
        secondary: '#222222',
        tertiary: '#2a2a2a',
        elevated: '#262626',
        overlay: 'rgba(26, 26, 26, 0.8)',
        inverse: '#fcfcfc',
      },
      foreground: {
        primary: '#e6e6e6',
        secondary: '#b3b3b3',
        tertiary: '#808080',
        inverse: '#1a1a1a',
      },
      border: {
        primary: 'rgba(255, 255, 255, 0.08)',
        secondary: 'rgba(255, 255, 255, 0.04)',
        tertiary: 'rgba(255, 255, 255, 0.02)',
      },
    },
  },
};

// Crimson theme - Bold red-based
export const crimsonTheme: Theme = {
  name: 'Crimson',
  light: {
    colors: {
      semantic: {
        primary: '#dc143c',
        primaryHover: '#b91032',
        primaryForeground: '#ffffff',
        secondary: '#8b0000',
        secondaryHover: '#660000',
        secondaryForeground: '#ffffff',
        success: '#228b22',
        successHover: '#1a6b1a',
        successForeground: '#ffffff',
        warning: '#ff8c00',
        warningHover: '#e67e00',
        warningForeground: '#ffffff',
        danger: '#b22222',
        dangerHover: '#8b1a1a',
        dangerForeground: '#ffffff',
        info: '#4682b4',
        infoHover: '#3a6d99',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#fff5f5',
        tertiary: '#ffe0e0',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#2d0000',
      },
      foreground: {
        primary: '#2d0000',
        secondary: '#5c0000',
        tertiary: '#8b0000',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(220, 20, 60, 0.15)',
        secondary: 'rgba(220, 20, 60, 0.08)',
        tertiary: 'rgba(220, 20, 60, 0.04)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#ff1744',
        primaryHover: '#ff4569',
        primaryForeground: '#ffffff',
        secondary: '#ff6b6b',
        secondaryHover: '#ff8787',
        secondaryForeground: '#000000',
        success: '#4caf50',
        successHover: '#66bb6a',
        successForeground: '#000000',
        warning: '#ffa726',
        warningHover: '#ffb74d',
        warningForeground: '#000000',
        danger: '#f44336',
        dangerHover: '#ef5350',
        dangerForeground: '#ffffff',
        info: '#29b6f6',
        infoHover: '#4fc3f7',
        infoForeground: '#000000',
      },
      background: {
        primary: '#1a0000',
        secondary: '#2d0000',
        tertiary: '#400000',
        elevated: '#330000',
        overlay: 'rgba(26, 0, 0, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#ffffff',
        secondary: '#ffcccc',
        tertiary: '#ff9999',
        inverse: '#1a0000',
      },
      border: {
        primary: 'rgba(255, 23, 68, 0.2)',
        secondary: 'rgba(255, 23, 68, 0.1)',
        tertiary: 'rgba(255, 23, 68, 0.05)',
      },
    },
  },
};

// Ocean theme - Blue/teal based
export const oceanTheme: Theme = {
  name: 'Ocean',
  light: {
    colors: {
      semantic: {
        primary: '#006994',
        primaryHover: '#005a7f',
        primaryForeground: '#ffffff',
        secondary: '#00838f',
        secondaryHover: '#006978',
        secondaryForeground: '#ffffff',
        success: '#00897b',
        successHover: '#00695c',
        successForeground: '#ffffff',
        warning: '#ff6f00',
        warningHover: '#e65100',
        warningForeground: '#ffffff',
        danger: '#d32f2f',
        dangerHover: '#b71c1c',
        dangerForeground: '#ffffff',
        info: '#0288d1',
        infoHover: '#0277bd',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#f0f9ff',
        tertiary: '#e0f2fe',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#001e3c',
      },
      foreground: {
        primary: '#001e3c',
        secondary: '#003d7a',
        tertiary: '#0061a7',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(0, 105, 148, 0.15)',
        secondary: 'rgba(0, 105, 148, 0.08)',
        tertiary: 'rgba(0, 105, 148, 0.04)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#00acc1',
        primaryHover: '#00bcd4',
        primaryForeground: '#000000',
        secondary: '#26c6da',
        secondaryHover: '#4dd0e1',
        secondaryForeground: '#000000',
        success: '#26a69a',
        successHover: '#4db6ac',
        successForeground: '#000000',
        warning: '#ffa726',
        warningHover: '#ffb74d',
        warningForeground: '#000000',
        danger: '#ef5350',
        dangerHover: '#e57373',
        dangerForeground: '#ffffff',
        info: '#29b6f6',
        infoHover: '#4fc3f7',
        infoForeground: '#000000',
      },
      background: {
        primary: '#001e3c',
        secondary: '#002a4e',
        tertiary: '#003560',
        elevated: '#002d52',
        overlay: 'rgba(0, 30, 60, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#ffffff',
        secondary: '#b3d9ff',
        tertiary: '#66b2ff',
        inverse: '#001e3c',
      },
      border: {
        primary: 'rgba(0, 172, 193, 0.2)',
        secondary: 'rgba(0, 172, 193, 0.1)',
        tertiary: 'rgba(0, 172, 193, 0.05)',
      },
    },
  },
};

// Forest theme - Green/earth tones
export const forestTheme: Theme = {
  name: 'Forest',
  light: {
    colors: {
      semantic: {
        primary: '#2e7d32',
        primaryHover: '#1b5e20',
        primaryForeground: '#ffffff',
        secondary: '#6a4c93',
        secondaryHover: '#5a3d7a',
        secondaryForeground: '#ffffff',
        success: '#43a047',
        successHover: '#388e3c',
        successForeground: '#ffffff',
        warning: '#f9a825',
        warningHover: '#f57f17',
        warningForeground: '#000000',
        danger: '#c62828',
        dangerHover: '#b71c1c',
        dangerForeground: '#ffffff',
        info: '#1976d2',
        infoHover: '#1565c0',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#f1f8e9',
        tertiary: '#dcedc8',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#1a2e1a',
      },
      foreground: {
        primary: '#1a2e1a',
        secondary: '#2e4e2e',
        tertiary: '#4a6b4a',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(46, 125, 50, 0.15)',
        secondary: 'rgba(46, 125, 50, 0.08)',
        tertiary: 'rgba(46, 125, 50, 0.04)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#66bb6a',
        primaryHover: '#81c784',
        primaryForeground: '#000000',
        secondary: '#9575cd',
        secondaryHover: '#b39ddb',
        secondaryForeground: '#000000',
        success: '#81c784',
        successHover: '#a5d6a7',
        successForeground: '#000000',
        warning: '#ffb74d',
        warningHover: '#ffcc80',
        warningForeground: '#000000',
        danger: '#e57373',
        dangerHover: '#ef9a9a',
        dangerForeground: '#000000',
        info: '#64b5f6',
        infoHover: '#90caf9',
        infoForeground: '#000000',
      },
      background: {
        primary: '#0d1f0d',
        secondary: '#1a2e1a',
        tertiary: '#263e26',
        elevated: '#1f331f',
        overlay: 'rgba(13, 31, 13, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#e8f5e9',
        secondary: '#c8e6c9',
        tertiary: '#a5d6a7',
        inverse: '#0d1f0d',
      },
      border: {
        primary: 'rgba(102, 187, 106, 0.2)',
        secondary: 'rgba(102, 187, 106, 0.1)',
        tertiary: 'rgba(102, 187, 106, 0.05)',
      },
    },
  },
};

// Midnight theme - Dark purple/blue
export const midnightTheme: Theme = {
  name: 'Midnight',
  light: {
    colors: {
      semantic: {
        primary: '#311b92',
        primaryHover: '#1a0e5e',
        primaryForeground: '#ffffff',
        secondary: '#4527a0',
        secondaryHover: '#311b92',
        secondaryForeground: '#ffffff',
        success: '#00695c',
        successHover: '#004d40',
        successForeground: '#ffffff',
        warning: '#ff6f00',
        warningHover: '#e65100',
        warningForeground: '#ffffff',
        danger: '#b71c1c',
        dangerHover: '#8b0000',
        dangerForeground: '#ffffff',
        info: '#01579b',
        infoHover: '#003c6c',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#f3e5f5',
        tertiary: '#e1bee7',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#0d0030',
      },
      foreground: {
        primary: '#0d0030',
        secondary: '#1a0060',
        tertiary: '#2d0090',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(49, 27, 146, 0.15)',
        secondary: 'rgba(49, 27, 146, 0.08)',
        tertiary: 'rgba(49, 27, 146, 0.04)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#7c4dff',
        primaryHover: '#9575cd',
        primaryForeground: '#ffffff',
        secondary: '#536dfe',
        secondaryHover: '#7986cb',
        secondaryForeground: '#ffffff',
        success: '#4db6ac',
        successHover: '#80cbc4',
        successForeground: '#000000',
        warning: '#ffb74d',
        warningHover: '#ffcc80',
        warningForeground: '#000000',
        danger: '#ff5252',
        dangerHover: '#ff8a80',
        dangerForeground: '#ffffff',
        info: '#448aff',
        infoHover: '#82b1ff',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#0d0030',
        secondary: '#1a0060',
        tertiary: '#2d0090',
        elevated: '#240078',
        overlay: 'rgba(13, 0, 48, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#e8eaf6',
        secondary: '#c5cae9',
        tertiary: '#9fa8da',
        inverse: '#0d0030',
      },
      border: {
        primary: 'rgba(124, 77, 255, 0.2)',
        secondary: 'rgba(124, 77, 255, 0.1)',
        tertiary: 'rgba(124, 77, 255, 0.05)',
      },
    },
  },
};

// Sunset theme - Orange/pink
export const sunsetTheme: Theme = {
  name: 'Sunset',
  light: {
    colors: {
      semantic: {
        primary: '#ff5722',
        primaryHover: '#e64a19',
        primaryForeground: '#ffffff',
        secondary: '#ff7043',
        secondaryHover: '#ff5722',
        secondaryForeground: '#ffffff',
        success: '#8bc34a',
        successHover: '#689f38',
        successForeground: '#000000',
        warning: '#ffc107',
        warningHover: '#ffa000',
        warningForeground: '#000000',
        danger: '#f44336',
        dangerHover: '#d32f2f',
        dangerForeground: '#ffffff',
        info: '#03a9f4',
        infoHover: '#0288d1',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#fff3e0',
        tertiary: '#ffe0b2',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#3e2723',
      },
      foreground: {
        primary: '#3e2723',
        secondary: '#5d4037',
        tertiary: '#795548',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(255, 87, 34, 0.15)',
        secondary: 'rgba(255, 87, 34, 0.08)',
        tertiary: 'rgba(255, 87, 34, 0.04)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#ff8a65',
        primaryHover: '#ffab91',
        primaryForeground: '#000000',
        secondary: '#ffab91',
        secondaryHover: '#ffccbc',
        secondaryForeground: '#000000',
        success: '#aed581',
        successHover: '#c5e1a5',
        successForeground: '#000000',
        warning: '#ffd54f',
        warningHover: '#ffe082',
        warningForeground: '#000000',
        danger: '#e57373',
        dangerHover: '#ef9a9a',
        dangerForeground: '#000000',
        info: '#4fc3f7',
        infoHover: '#81d4fa',
        infoForeground: '#000000',
      },
      background: {
        primary: '#3e2723',
        secondary: '#4e342e',
        tertiary: '#5d4037',
        elevated: '#493832',
        overlay: 'rgba(62, 39, 35, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#ffebe6',
        secondary: '#ffccbc',
        tertiary: '#ffab91',
        inverse: '#3e2723',
      },
      border: {
        primary: 'rgba(255, 138, 101, 0.2)',
        secondary: 'rgba(255, 138, 101, 0.1)',
        tertiary: 'rgba(255, 138, 101, 0.05)',
      },
    },
  },
};

// Monochrome theme - Black/white/gray
export const monochromeTheme: Theme = {
  name: 'Monochrome',
  light: {
    colors: {
      semantic: {
        primary: '#212121',
        primaryHover: '#000000',
        primaryForeground: '#ffffff',
        secondary: '#616161',
        secondaryHover: '#424242',
        secondaryForeground: '#ffffff',
        success: '#424242',
        successHover: '#212121',
        successForeground: '#ffffff',
        warning: '#757575',
        warningHover: '#616161',
        warningForeground: '#ffffff',
        danger: '#424242',
        dangerHover: '#212121',
        dangerForeground: '#ffffff',
        info: '#616161',
        infoHover: '#424242',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#fafafa',
        tertiary: '#f5f5f5',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#000000',
      },
      foreground: {
        primary: '#000000',
        secondary: '#424242',
        tertiary: '#757575',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(0, 0, 0, 0.15)',
        secondary: 'rgba(0, 0, 0, 0.08)',
        tertiary: 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#e0e0e0',
        primaryHover: '#f5f5f5',
        primaryForeground: '#000000',
        secondary: '#9e9e9e',
        secondaryHover: '#bdbdbd',
        secondaryForeground: '#000000',
        success: '#bdbdbd',
        successHover: '#e0e0e0',
        successForeground: '#000000',
        warning: '#757575',
        warningHover: '#9e9e9e',
        warningForeground: '#ffffff',
        danger: '#bdbdbd',
        dangerHover: '#e0e0e0',
        dangerForeground: '#000000',
        info: '#9e9e9e',
        infoHover: '#bdbdbd',
        infoForeground: '#000000',
      },
      background: {
        primary: '#121212',
        secondary: '#1e1e1e',
        tertiary: '#2a2a2a',
        elevated: '#242424',
        overlay: 'rgba(18, 18, 18, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#ffffff',
        secondary: '#e0e0e0',
        tertiary: '#9e9e9e',
        inverse: '#121212',
      },
      border: {
        primary: 'rgba(255, 255, 255, 0.15)',
        secondary: 'rgba(255, 255, 255, 0.08)',
        tertiary: 'rgba(255, 255, 255, 0.04)',
      },
    },
  },
};

// Neon theme - Bright, vibrant colors
export const neonTheme: Theme = {
  name: 'Neon',
  light: {
    colors: {
      semantic: {
        primary: '#ff006e',
        primaryHover: '#d60059',
        primaryForeground: '#ffffff',
        secondary: '#00f5ff',
        secondaryHover: '#00d4dd',
        secondaryForeground: '#000000',
        success: '#00ff00',
        successHover: '#00cc00',
        successForeground: '#000000',
        warning: '#ffff00',
        warningHover: '#cccc00',
        warningForeground: '#000000',
        danger: '#ff0080',
        dangerHover: '#cc0066',
        dangerForeground: '#ffffff',
        info: '#0080ff',
        infoHover: '#0066cc',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#fafafa',
        tertiary: '#f0f0f0',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#000000',
      },
      foreground: {
        primary: '#000000',
        secondary: '#333333',
        tertiary: '#666666',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(255, 0, 110, 0.2)',
        secondary: 'rgba(255, 0, 110, 0.1)',
        tertiary: 'rgba(255, 0, 110, 0.05)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#ff006e',
        primaryHover: '#ff3388',
        primaryForeground: '#ffffff',
        secondary: '#00f5ff',
        secondaryHover: '#33f7ff',
        secondaryForeground: '#000000',
        success: '#00ff00',
        successHover: '#33ff33',
        successForeground: '#000000',
        warning: '#ffff00',
        warningHover: '#ffff33',
        warningForeground: '#000000',
        danger: '#ff0080',
        dangerHover: '#ff3399',
        dangerForeground: '#ffffff',
        info: '#0080ff',
        infoHover: '#3399ff',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#000000',
        secondary: '#0a0a0a',
        tertiary: '#141414',
        elevated: '#0f0f0f',
        overlay: 'rgba(0, 0, 0, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#ffffff',
        secondary: '#cccccc',
        tertiary: '#999999',
        inverse: '#000000',
      },
      border: {
        primary: 'rgba(255, 0, 110, 0.3)',
        secondary: 'rgba(255, 0, 110, 0.15)',
        tertiary: 'rgba(255, 0, 110, 0.08)',
      },
    },
  },
};

// macOS theme - Native macOS aesthetics
export const macosTheme: Theme = {
  name: 'macOS',
  light: {
    colors: {
      semantic: {
        primary: colors.blue[500], // macOS blue
        primaryHover: colors.blue[600],
        primaryForeground: colors.white,
        secondary: colors.gray[500],
        secondaryHover: colors.gray[600],
        secondaryForeground: colors.white,
        success: '#34c759', // macOS green
        successHover: '#2aa148',
        successForeground: colors.white,
        warning: '#ff9500', // macOS orange
        warningHover: '#db7f00',
        warningForeground: colors.white,
        danger: '#ff3b30', // macOS red
        dangerHover: '#d70015',
        dangerForeground: colors.white,
        info: '#5ac8fa', // macOS blue
        infoHover: '#40b6f0',
        infoForeground: colors.white,
      },
      background: {
        primary: colors.white,
        secondary: colors.gray[50],
        tertiary: colors.gray[100],
        elevated: colors.white,
        overlay: macosTokens.vibrancy.light.windowBackground,
        inverse: colors.gray[950],
      },
      foreground: {
        primary: 'rgba(0, 0, 0, 0.85)',
        secondary: 'rgba(0, 0, 0, 0.5)',
        tertiary: 'rgba(0, 0, 0, 0.3)',
        inverse: colors.white,
      },
      border: {
        primary: 'rgba(0, 0, 0, 0.08)',
        secondary: 'rgba(0, 0, 0, 0.04)',
        tertiary: 'rgba(0, 0, 0, 0.02)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#0a84ff', // macOS blue dark
        primaryHover: '#409cff',
        primaryForeground: colors.white,
        secondary: colors.gray[400],
        secondaryHover: colors.gray[300],
        secondaryForeground: colors.white,
        success: '#32d74b', // macOS green dark
        successHover: '#5de372',
        successForeground: colors.black,
        warning: '#ff9f0a', // macOS orange dark
        warningHover: '#ffb340',
        warningForeground: colors.black,
        danger: '#ff453a', // macOS red dark
        dangerHover: '#ff6961',
        dangerForeground: colors.white,
        info: '#64d2ff', // macOS blue dark
        infoHover: '#8cddff',
        infoForeground: colors.black,
      },
      background: {
        primary: colors.gray[950],
        secondary: colors.gray[900],
        tertiary: colors.gray[800],
        elevated: '#1c1c1e',
        overlay: macosTokens.vibrancy.dark.windowBackground,
        inverse: colors.white,
      },
      foreground: {
        primary: 'rgba(255, 255, 255, 0.85)',
        secondary: 'rgba(255, 255, 255, 0.55)',
        tertiary: 'rgba(255, 255, 255, 0.25)',
        inverse: colors.gray[950],
      },
      border: {
        primary: 'rgba(255, 255, 255, 0.08)',
        secondary: 'rgba(255, 255, 255, 0.04)',
        tertiary: 'rgba(255, 255, 255, 0.02)',
      },
    },
  },
};

// Royal theme - Purple/gold
export const royalTheme: Theme = {
  name: 'Royal',
  light: {
    colors: {
      semantic: {
        primary: '#4a148c',
        primaryHover: '#311b92',
        primaryForeground: '#ffffff',
        secondary: '#ffc107',
        secondaryHover: '#ffa000',
        secondaryForeground: '#000000',
        success: '#388e3c',
        successHover: '#2e7d32',
        successForeground: '#ffffff',
        warning: '#f57c00',
        warningHover: '#e65100',
        warningForeground: '#ffffff',
        danger: '#c62828',
        dangerHover: '#b71c1c',
        dangerForeground: '#ffffff',
        info: '#1565c0',
        infoHover: '#0d47a1',
        infoForeground: '#ffffff',
      },
      background: {
        primary: '#ffffff',
        secondary: '#f3e5f5',
        tertiary: '#e1bee7',
        elevated: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.8)',
        inverse: '#1a0033',
      },
      foreground: {
        primary: '#1a0033',
        secondary: '#4a148c',
        tertiary: '#6a1b9a',
        inverse: '#ffffff',
      },
      border: {
        primary: 'rgba(74, 20, 140, 0.15)',
        secondary: 'rgba(74, 20, 140, 0.08)',
        tertiary: 'rgba(74, 20, 140, 0.04)',
      },
    },
  },
  dark: {
    colors: {
      semantic: {
        primary: '#9c27b0',
        primaryHover: '#ba68c8',
        primaryForeground: '#ffffff',
        secondary: '#ffd54f',
        secondaryHover: '#ffe082',
        secondaryForeground: '#000000',
        success: '#66bb6a',
        successHover: '#81c784',
        successForeground: '#000000',
        warning: '#ffa726',
        warningHover: '#ffb74d',
        warningForeground: '#000000',
        danger: '#ef5350',
        dangerHover: '#e57373',
        dangerForeground: '#ffffff',
        info: '#42a5f5',
        infoHover: '#64b5f6',
        infoForeground: '#000000',
      },
      background: {
        primary: '#1a0033',
        secondary: '#2d004d',
        tertiary: '#400066',
        elevated: '#330059',
        overlay: 'rgba(26, 0, 51, 0.8)',
        inverse: '#ffffff',
      },
      foreground: {
        primary: '#f3e5f5',
        secondary: '#ce93d8',
        tertiary: '#ab47bc',
        inverse: '#1a0033',
      },
      border: {
        primary: 'rgba(156, 39, 176, 0.2)',
        secondary: 'rgba(156, 39, 176, 0.1)',
        tertiary: 'rgba(156, 39, 176, 0.05)',
      },
    },
  },
};

// Collection of all themes
export const themes = {
  default: defaultTheme,
  macos: macosTheme,
  pastel: pastelTheme,
  crimson: crimsonTheme,
  ocean: oceanTheme,
  forest: forestTheme,
  midnight: midnightTheme,
  sunset: sunsetTheme,
  monochrome: monochromeTheme,
  neon: neonTheme,
  royal: royalTheme,
} as const;

export type ThemeName = keyof typeof themes;

// Legacy exports for backward compatibility
export const themePresets = themes;
export type ThemePreset = ThemeName;