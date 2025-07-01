'use client'

import { Typography, Card, Button, Grid, CodeBlock } from '@velvet-ui/core'
import { useThemeContext } from '@velvet-ui/core'
import { useState } from 'react'
import { Check, Palette } from 'lucide-react'

const themes = [
  { name: 'default', label: 'Default', description: 'Modern blue theme', colors: ['#3b82f6', '#60a5fa', '#2563eb'] },
  { name: 'pastel', label: 'Pastel', description: 'Soft, muted colors', colors: ['#f3c5d8', '#b8d4e3', '#ffd6a5'] },
  { name: 'crimson', label: 'Crimson', description: 'Bold red-based theme', colors: ['#dc2626', '#ef4444', '#b91c1c'] },
  { name: 'ocean', label: 'Ocean', description: 'Blue and teal tones', colors: ['#0891b2', '#06b6d4', '#0e7490'] },
  { name: 'forest', label: 'Forest', description: 'Green earth tones', colors: ['#16a34a', '#22c55e', '#15803d'] },
  { name: 'midnight', label: 'Midnight', description: 'Dark purple and blue', colors: ['#7c3aed', '#8b5cf6', '#6d28d9'] },
  { name: 'sunset', label: 'Sunset', description: 'Orange and pink hues', colors: ['#f97316', '#fb923c', '#ea580c'] },
  { name: 'monochrome', label: 'Monochrome', description: 'Black, white, and gray', colors: ['#171717', '#525252', '#a3a3a3'] },
  { name: 'neon', label: 'Neon', description: 'Bright vibrant colors', colors: ['#a855f7', '#ec4899', '#3b82f6'] },
  { name: 'royal', label: 'Royal', description: 'Purple and gold tones', colors: ['#9333ea', '#a855f7', '#eab308'] },
]


export default function ThemesPage() {
  const { themeName, setThemeName } = useThemeContext()
  const [previewTheme, setPreviewTheme] = useState<string>(themeName)

  const handleThemeChange = (theme: string) => {
    setPreviewTheme(theme)
    setThemeName(theme as any)
  }

  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Themes
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          Choose from 10 beautiful pre-built themes or create your own.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Typography variant="h2" className="mb-4">
          Available Themes
        </Typography>

        <Typography variant="body" className="mb-6">
          Velvet UI comes with 10 carefully crafted themes. Each theme includes a complete color palette, 
          designed to work beautifully in both light and dark modes.
        </Typography>

        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Live Theme Preview</Typography>
          <Card className="p-6">
            <Typography variant="body" className="mb-4">
              Click on any theme below to see it applied instantly:
            </Typography>
            <Grid cols={{ default: 1, sm: 2, lg: 3 }} gap={4}>
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  className={`
                    group relative overflow-hidden rounded-lg border-2 p-4 text-left transition-all
                    ${previewTheme === theme.name 
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/20' 
                      : 'border-border hover:border-primary-300'
                    }
                  `}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <Typography variant="h5">{theme.label}</Typography>
                    {previewTheme === theme.name && (
                      <Check className="h-5 w-5 text-primary-600" />
                    )}
                  </div>
                  <Typography variant="small" className="mb-3 text-foreground-secondary">
                    {theme.description}
                  </Typography>
                  <div className="flex gap-2">
                    {theme.colors.map((color, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </Grid>
          </Card>
        </div>

        <Typography variant="h2" className="mb-4">
          Using Themes
        </Typography>

        <Typography variant="h3" className="mb-4">
          Setting the Initial Theme
        </Typography>

        <Typography variant="body" className="mb-4">
          You can set the default theme when initializing the ThemeProvider:
        </Typography>

        <CodeBlock followTheme language="tsx">{`import { ThemeProvider } from '@velvet-ui/core'

function App() {
  return (
    <ThemeProvider 
      defaultTheme="system" 
      defaultThemeName="ocean"
    >
      {/* Your app */}
    </ThemeProvider>
  )
}`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          Changing Themes Programmatically
        </Typography>

        <Typography variant="body" className="mb-4">
          Use the useTheme hook to change themes dynamically:
        </Typography>

        <CodeBlock followTheme language="tsx">{`import { useThemeContext } from '@velvet-ui/core'

function ThemeSwitcher() {
  const { themeName, setThemeName } = useThemeContext()
  
  return (
    <select 
      value={themeName} 
      onChange={(e) => setThemeName(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="ocean">Ocean</option>
      <option value="forest">Forest</option>
      {/* ... other themes */}
    </select>
  )
}`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-12">
          Theme Structure
        </Typography>

        <Typography variant="body" className="mb-6">
          Each theme defines a comprehensive set of colors using CSS variables:
        </Typography>

        <CodeBlock followTheme language="css">{`/* Semantic Colors */
--primary: 59 130 246;      /* Primary brand color */
--secondary: 168 85 247;    /* Secondary brand color */
--success: 34 197 94;       /* Success states */
--warning: 251 146 60;      /* Warning states */
--danger: 239 68 68;        /* Error/danger states */
--info: 59 130 246;         /* Information states */

/* UI Colors */
--background: 255 255 255;   /* Main background */
--foreground: 15 23 42;      /* Main text color */
--card: 255 255 255;         /* Card backgrounds */
--border: 226 232 240;       /* Border colors */
--input: 255 255 255;        /* Input backgrounds */

/* Additional Shades */
--primary-foreground: 255 255 255;
--secondary-foreground: 255 255 255;
--muted: 241 245 249;
--muted-foreground: 100 116 139;`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-12">
          Dark Mode Support
        </Typography>

        <Typography variant="body" className="mb-6">
          All themes automatically include dark mode variants. The system respects the user's 
          preference and can be controlled programmatically:
        </Typography>

        <CodeBlock followTheme language="tsx">{`import { useThemeContext } from '@velvet-ui/core'

function DarkModeToggle() {
  const { theme, setTheme } = useThemeContext()
  
  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  )
}`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-12">
          Example Components
        </Typography>

        <Typography variant="body" className="mb-6">
          Here's how components look with the current theme:
        </Typography>

        <div className="space-y-6">
          <Card className="p-6">
            <Typography variant="h4" className="mb-4">Buttons</Typography>
            <div className="flex flex-wrap gap-3">
              <Button variant="solid">Solid Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="glass">Glass Button</Button>
              <Button variant="glow">Glow Button</Button>
            </div>
          </Card>

          <Card className="p-6" variant="glass">
            <Typography variant="h4" className="mb-4">Glass Card</Typography>
            <Typography className="text-foreground-secondary">
              This card uses the glassmorphism effect that adapts to your theme colors.
            </Typography>
          </Card>

          <Grid cols={{ default: 1, sm: 3 }} gap={4}>
            <Card className="bg-primary-100 p-4 dark:bg-primary-900/30">
              <Palette className="mb-2 h-8 w-8 text-primary-600 dark:text-primary-400" />
              <Typography variant="h5">Primary</Typography>
            </Card>
            <Card className="bg-secondary-100 p-4 dark:bg-secondary-900/30">
              <Palette className="mb-2 h-8 w-8 text-secondary-600 dark:text-secondary-400" />
              <Typography variant="h5">Secondary</Typography>
            </Card>
            <Card className="bg-success-100 p-4 dark:bg-success-900/30">
              <Palette className="mb-2 h-8 w-8 text-success-600 dark:text-success-400" />
              <Typography variant="h5">Success</Typography>
            </Card>
          </Grid>
        </div>
      </div>
    </div>
  )
}