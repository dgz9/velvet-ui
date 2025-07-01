'use client'

import { InstallationTabs } from "@/components/installation-tabs"
import { Typography, Card, CardBody, Section, Container, CodeBlock, Alert } from '@velvet-ui/core'

export default function ViteInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vite Installation</h1>
        <p className="text-muted-foreground mt-2">
          Install and configure Velvet UI with Vite for a fast development experience.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Vite 4.0+ with React plugin</li>
            <li>React 18.0+</li>
            <li>Tailwind CSS (optional but recommended)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Create a New Project</h2>
          <p className="text-muted-foreground">
            Create a new Vite project with React template:
          </p>
          <CodeBlock followTheme>{`npm create vite@latest my-app -- --template react-ts
cd my-app
npm install`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <InstallationTabs />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Setup</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              1. Wrap your app with ThemeProvider:
            </p>
            <CodeBlock followTheme>{`// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@velvet-ui/react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Start using Velvet UI components:
            </p>
            <CodeBlock followTheme>{`// src/App.tsx
import { Button } from '@velvet-ui/react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Vite + React + Velvet UI</h1>
      <Button variant="primary">
        Click me!
      </Button>
    </div>
  )
}

export default App`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tailwind CSS Setup</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              1. Install Tailwind CSS:
            </p>
            <CodeBlock followTheme>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</CodeBlock>

            <p className="text-muted-foreground">
              2. Configure Tailwind to include Velvet UI:
            </p>
            <CodeBlock followTheme>{`// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@velvet-ui/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</CodeBlock>

            <p className="text-muted-foreground">
              3. Add Tailwind directives to your CSS:
            </p>
            <CodeBlock followTheme>{`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}</CodeBlock>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">TypeScript Configuration</h2>
          <p className="text-muted-foreground">
            Velvet UI is written in TypeScript and provides full type definitions. 
            No additional configuration is needed for TypeScript support.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Development</h2>
          <p className="text-muted-foreground">
            Run your development server:
          </p>
          <CodeBlock followTheme>{`npm run dev`}</CodeBlock>
        </section>
      </div>
    </div>
  )
}