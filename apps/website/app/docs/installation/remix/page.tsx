'use client'

import { InstallationTabs } from "@/components/installation-tabs"
import { Typography, Card, CardBody, Section, Container, CodeBlock, Alert } from '@velvet-ui/core'

export default function RemixInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Remix Installation</h1>
        <p className="text-muted-foreground mt-2">
          Install and configure Velvet UI with Remix for full-stack React applications.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Remix 2.0+</li>
            <li>React 18.0+</li>
            <li>Tailwind CSS (optional but recommended)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <InstallationTabs />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Setup</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              1. Add Velvet UI to your root route:
            </p>
            <CodeBlock followTheme>{`// app/root.tsx
import type { MetaFunction, LinksFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { ThemeProvider } from "@velvet-ui/react"

export const meta: MetaFunction = () => [{
  charset: "utf-8",
  title: "Remix App",
  viewport: "width=device-width,initial-scale=1",
}]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Use components in your routes:
            </p>
            <CodeBlock followTheme>{`// app/routes/_index.tsx
import { Button } from "@velvet-ui/react"

export default function Index() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Remix with Velvet UI
      </h1>
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  )
}`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tailwind CSS Configuration</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              1. Configure Tailwind to include Velvet UI:
            </p>
            <CodeBlock followTheme>{`// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@velvet-ui/react/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Import Tailwind in your app:
            </p>
            <CodeBlock followTheme>{`// app/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;`}</CodeBlock>

            <p className="text-muted-foreground">
              3. Add the stylesheet to your root:
            </p>
            <CodeBlock followTheme>{`// app/root.tsx
import stylesheet from "~/tailwind.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
]`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Server-Side Rendering</h2>
          <p className="text-muted-foreground">
            Velvet UI components work seamlessly with Remix's SSR. The ThemeProvider handles 
            hydration properly, and animations from Framer Motion are optimized for SSR environments.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Components</h2>
          <p className="text-muted-foreground">
            Velvet UI form components integrate well with Remix forms:
          </p>
          <CodeBlock followTheme>{`// app/routes/contact.tsx
import { Form } from "@remix-run/react"
import { Button, Input } from "@velvet-ui/react"

export default function Contact() {
  return (
    <Form method="post" className="space-y-4">
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  )
}`}</CodeBlock>
        </section>
      </div>
    </div>
  )
}