'use client'

import { Typography, Card, Button, CodeBlock } from '@velvet-ui/core'
import { Paintbrush } from 'lucide-react'

export default function CustomizationPage() {
  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Customization
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          Learn how to customize Velvet UI to match your brand and design system.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Typography variant="h2" className="mb-4">
          Creating Custom Themes
        </Typography>

        <Typography variant="body" className="mb-6">
          While Velvet UI comes with 10 pre-built themes, you can easily create your own custom theme 
          by defining CSS variables in your global styles.
        </Typography>

        <Typography variant="h3" className="mb-4">
          Step 1: Define Your Color Palette
        </Typography>

        <Typography variant="body" className="mb-4">
          Add your custom theme colors to your global CSS file:
        </Typography>

        <CodeBlock followTheme>{`/* globals.css */
.theme-custom {
  /* Primary Colors */
  --primary: 124 58 237;         /* #7c3aed */
  --primary-foreground: 255 255 255;
  
  /* Secondary Colors */
  --secondary: 236 72 153;       /* #ec4899 */
  --secondary-foreground: 255 255 255;
  
  /* Semantic Colors */
  --success: 34 197 94;
  --warning: 251 146 60;
  --danger: 239 68 68;
  --info: 59 130 246;
  
  /* UI Colors */
  --background: 255 255 255;
  --foreground: 15 23 42;
  --card: 255 255 255;
  --card-foreground: 15 23 42;
  --border: 226 232 240;
  --input: 255 255 255;
  
  /* Additional Colors */
  --muted: 241 245 249;
  --muted-foreground: 100 116 139;
  --accent: 241 245 249;
  --accent-foreground: 15 23 42;
}

/* Dark mode variant */
.dark .theme-custom {
  --primary: 139 92 246;         /* #8b5cf6 */
  --secondary: 244 114 182;      /* #f472b6 */
  
  --background: 10 10 10;
  --foreground: 248 250 252;
  --card: 23 23 23;
  --card-foreground: 248 250 252;
  --border: 39 39 42;
  --input: 39 39 42;
  
  --muted: 39 39 42;
  --muted-foreground: 161 161 170;
  --accent: 39 39 42;
  --accent-foreground: 248 250 252;
}`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          Step 2: Register Your Theme
        </Typography>

        <Typography variant="body" className="mb-4">
          Use your custom theme by setting it in the ThemeProvider:
        </Typography>

        <CodeBlock followTheme language="tsx">{`import { ThemeProvider } from '@velvet-ui/core'

function App() {
  return (
    <ThemeProvider 
      defaultTheme="system" 
      defaultThemeName="custom"
    >
      {/* Your app */}
    </ThemeProvider>
  )
}`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-12">
          Component-Level Customization
        </Typography>

        <Typography variant="body" className="mb-6">
          Every Velvet UI component can be customized using standard React patterns:
        </Typography>

        <Typography variant="h3" className="mb-4">
          Using className
        </Typography>

        <Typography variant="body" className="mb-4">
          All components accept a className prop for additional styling:
        </Typography>

        <CodeBlock followTheme language="tsx">{`<Button 
  variant="solid"
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
>
  Gradient Button
</Button>

<Card className="border-2 border-dashed border-purple-300 bg-purple-50">
  <Typography>Custom styled card</Typography>
</Card>`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          Extending with Tailwind
        </Typography>

        <Typography variant="body" className="mb-4">
          Combine Velvet UI's base styles with Tailwind utilities:
        </Typography>

        <CodeBlock followTheme language="tsx">{`<Input
  label="Custom Input"
  className="focus:ring-4 focus:ring-purple-500/20"
  inputClassName="text-lg font-mono"
/>

<Typography
  variant="h1"
  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
>
  Gradient Heading
</Typography>`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-12">
          Advanced Customization
        </Typography>

        <Typography variant="h3" className="mb-4">
          Custom CSS Variables
        </Typography>

        <Typography variant="body" className="mb-4">
          You can define additional CSS variables for fine-grained control:
        </Typography>

        <CodeBlock followTheme>{`:root {
  /* Animation Durations */
  --animation-fast: 150ms;
  --animation-normal: 300ms;
  --animation-slow: 500ms;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  /* Blur Values */
  --blur-sm: 4px;
  --blur-md: 12px;
  --blur-lg: 24px;
}`}</CodeBlock>

        <Typography variant="h3" className="mb-4 mt-8">
          Component Variants
        </Typography>

        <Typography variant="body" className="mb-4">
          Create your own component variants by wrapping Velvet UI components:
        </Typography>

        <CodeBlock followTheme language="tsx">{`// CustomButton.tsx
import { Button, ButtonProps } from '@velvet-ui/core'

interface CustomButtonProps extends ButtonProps {
  variant?: ButtonProps['variant'] | 'brand'
}

export function CustomButton({ variant, className, ...props }: CustomButtonProps) {
  if (variant === 'brand') {
    return (
      <Button
        {...props}
        className={cn(
          'bg-brand-500 hover:bg-brand-600 text-white',
          'shadow-lg shadow-brand-500/25',
          className
        )}
      />
    )
  }
  
  return <Button variant={variant} className={className} {...props} />
}`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-12">
          Best Practices
        </Typography>

        <div className="space-y-4">
          <Card className="p-6">
            <Typography variant="h4" className="mb-2">
              1. Use CSS Variables
            </Typography>
            <Typography className="text-foreground-secondary">
              Define colors as CSS variables for easy theme switching and dark mode support.
            </Typography>
          </Card>

          <Card className="p-6">
            <Typography variant="h4" className="mb-2">
              2. Extend, Don't Override
            </Typography>
            <Typography className="text-foreground-secondary">
              Add custom styles with className rather than overriding base styles.
            </Typography>
          </Card>

          <Card className="p-6">
            <Typography variant="h4" className="mb-2">
              3. Maintain Accessibility
            </Typography>
            <Typography className="text-foreground-secondary">
              Ensure color contrast ratios meet WCAG guidelines when customizing.
            </Typography>
          </Card>

          <Card className="p-6">
            <Typography variant="h4" className="mb-2">
              4. Test Dark Mode
            </Typography>
            <Typography className="text-foreground-secondary">
              Always test your customizations in both light and dark modes.
            </Typography>
          </Card>
        </div>

        <Card className="mt-8 bg-primary-50 p-6 dark:bg-primary-950/20">
          <Paintbrush className="mb-3 h-8 w-8 text-primary-600 dark:text-primary-400" />
          <Typography variant="h4" className="mb-2">
            Need Help?
          </Typography>
          <Typography className="text-foreground-secondary">
            Check out our example projects on GitHub to see more advanced customization patterns 
            and real-world implementations.
          </Typography>
        </Card>
      </div>
    </div>
  )
}