'use client'

import { useState } from 'react'
import { Button, CodeBlock } from '@velvet-ui/core'

export function InstallationTabs() {
  const [packageManager, setPackageManager] = useState<'npm' | 'yarn' | 'pnpm'>('npm')

  const installCommands = {
    npm: 'npm install @velvet-ui/react',
    yarn: 'yarn add @velvet-ui/react',
    pnpm: 'pnpm add @velvet-ui/react',
  }

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Button
          variant={packageManager === 'npm' ? 'solid' : 'outline'}
          size="small"
          onClick={() => setPackageManager('npm')}
        >
          npm
        </Button>
        <Button
          variant={packageManager === 'yarn' ? 'solid' : 'outline'}
          size="small"
          onClick={() => setPackageManager('yarn')}
        >
          yarn
        </Button>
        <Button
          variant={packageManager === 'pnpm' ? 'solid' : 'outline'}
          size="small"
          onClick={() => setPackageManager('pnpm')}
        >
          pnpm
        </Button>
      </div>
      <CodeBlock followTheme>{installCommands[packageManager]}</CodeBlock>
    </div>
  )
}