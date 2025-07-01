'use client'

import { InstallationTabs } from "@/components/installation-tabs"
import { Typography, Card, CardBody, Section, Container, CodeBlock, Alert } from '@velvet-ui/core'

export default function GatsbyInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Gatsby Installation</h1>
        <p className="text-muted-foreground mt-2">
          Install and configure Velvet UI with Gatsby for static site generation.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Gatsby 5.0+</li>
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
              1. Create a wrapper component for ThemeProvider:
            </p>
            <CodeBlock followTheme>{`// src/components/layout.tsx
import React from "react"
import { ThemeProvider } from "@velvet-ui/react"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <main>{children}</main>
    </ThemeProvider>
  )
}`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Use the layout in your pages:
            </p>
            <CodeBlock followTheme>{`// src/pages/index.tsx
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { Button } from "@velvet-ui/react"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Welcome to Gatsby with Velvet UI</h1>
      <Button variant="primary">
        Get Started
      </Button>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Gatsby Browser API</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              For a global wrapper, use gatsby-browser.js:
            </p>
            <CodeBlock followTheme>{`// gatsby-browser.js
import React from "react"
import { ThemeProvider } from "@velvet-ui/react"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}`}</CodeBlock>

            <p className="text-muted-foreground">
              And mirror this in gatsby-ssr.js for SSR support:
            </p>
            <CodeBlock followTheme>{`// gatsby-ssr.js
import React from "react"
import { ThemeProvider } from "@velvet-ui/react"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tailwind CSS Setup</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              1. Install Tailwind CSS and gatsby-plugin-postcss:
            </p>
            <CodeBlock followTheme>{`npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss
npx tailwindcss init -p`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Add the plugin to gatsby-config:
            </p>
            <CodeBlock followTheme>{`// gatsby-config.ts
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  plugins: [
    "gatsby-plugin-postcss",
    // other plugins...
  ],
}

export default config`}</CodeBlock>

            <p className="text-muted-foreground">
              3. Configure Tailwind to include Velvet UI:
            </p>
            <CodeBlock followTheme>{`// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@velvet-ui/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</CodeBlock>

            <p className="text-muted-foreground">
              4. Create a global stylesheet:
            </p>
            <CodeBlock followTheme>{`/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}</CodeBlock>

            <p className="text-muted-foreground">
              5. Import the stylesheet in gatsby-browser.js:
            </p>
            <CodeBlock followTheme>{`// gatsby-browser.js
import "./src/styles/global.css"

// ... rest of your gatsby-browser.js code`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Static Site Generation</h2>
          <p className="text-muted-foreground">
            Velvet UI components work great with Gatsby's static site generation. 
            The components are optimized for SSR and will properly render during the build process.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">GraphQL Integration</h2>
          <p className="text-muted-foreground">
            Use Velvet UI components with Gatsby's GraphQL data:
          </p>
          <CodeBlock followTheme>{`// src/pages/blog.tsx
import * as React from "react"
import { graphql } from "gatsby"
import { Card, Button } from "@velvet-ui/react"
import Layout from "../components/layout"

export default function BlogPage({ data }) {
  return (
    <Layout>
      <div className="grid gap-4">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.excerpt}</p>
            <Button variant="ghost">Read more</Button>
          </Card>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql\`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
\``}</CodeBlock>
        </section>
      </div>
    </div>
  )
}