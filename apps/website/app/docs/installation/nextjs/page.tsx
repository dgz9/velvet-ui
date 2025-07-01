'use client'

import { InstallationTabs } from "@/components/installation-tabs"
import { Typography, Card, CardBody, Section, Container, CodeBlock, Alert } from '@velvet-ui/core'

export default function NextJSInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Next.js Installation</h1>
        <p className="text-muted-foreground mt-2">
          Install and configure Velvet UI with Next.js App Router or Pages Router.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Next.js 13.4+ (for App Router) or any version (for Pages Router)</li>
            <li>React 18.0+</li>
            <li>Tailwind CSS (optional but recommended)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <InstallationTabs />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Setup with App Router</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              1. Create a providers component for your theme:
            </p>
            <CodeBlock followTheme>{`// app/providers.tsx
'use client'

import { ThemeProvider } from '@velvet-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Wrap your layout with the providers:
            </p>
            <CodeBlock followTheme>{`// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}`}</CodeBlock>

            <p className="text-muted-foreground">
              3. Start using Velvet UI components:
            </p>
            <CodeBlock followTheme>{`// app/page.tsx
import { Button } from '@velvet-ui/react'

export default function Page() {
  return (
    <Button variant="primary">
      Hello from Next.js!
    </Button>
  )
}`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Setup with Pages Router</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              1. Wrap your app with ThemeProvider in _app.tsx:
            </p>
            <CodeBlock followTheme>{`// pages/_app.tsx
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@velvet-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Use components in your pages:
            </p>
            <CodeBlock followTheme>{`// pages/index.tsx
import { Button } from '@velvet-ui/react'

export default function Home() {
  return (
    <Button variant="primary">
      Hello from Next.js!
    </Button>
  )
}`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tailwind CSS Configuration</h2>
          <p className="text-muted-foreground">
            If you're using Tailwind CSS, add the Velvet UI path to your content configuration:
          </p>
          <CodeBlock followTheme>{`// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@velvet-ui/react/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Server Components</h2>
          <p className="text-muted-foreground">
            Velvet UI components are marked with "use client" directive and work seamlessly with Next.js Server Components. 
            You can import and use them directly in your Server Components, and Next.js will handle the client boundary automatically.
          </p>
        </section>
      </div>
    </div>
  )
}