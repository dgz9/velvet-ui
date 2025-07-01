'use client'

import { Select, CodeBlock, Card, CardBody } from '@velvet-ui/core'
import { useState } from 'react'

export default function TestDropdownPage() {
  const [value, setValue] = useState('')
  
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Testing Dropdown Z-Index Issue</h1>
      
      <div className="space-y-8">
        {/* Test 1: Basic setup */}
        <div>
          <h2 className="text-xl mb-4">Test 1: Basic Select + CodeBlock</h2>
          <Card overflow="visible">
            <CardBody>
              <Select
                options={options}
                value={value}
                onChange={setValue}
                placeholder="Select a framework"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// This is a code block
const test = "hello world";`}</CodeBlock>
        </div>

        {/* Test 2: With explicit z-index */}
        <div>
          <h2 className="text-xl mb-4">Test 2: With z-index on wrapper</h2>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <Card overflow="visible">
              <CardBody>
                <Select
                  options={options}
                  value={value}
                  onChange={setValue}
                  placeholder="Select a framework"
                />
              </CardBody>
            </Card>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <CodeBlock followTheme>{`// This is a code block with lower z-index
const test = "hello world";`}</CodeBlock>
          </div>
        </div>

        {/* Test 3: Direct DOM check */}
        <div>
          <h2 className="text-xl mb-4">Test 3: Simple divs</h2>
          <div style={{ position: 'relative', height: '50px', background: 'lightblue' }}>
            <div style={{ 
              position: 'absolute', 
              top: '40px', 
              left: 0, 
              right: 0, 
              height: '200px', 
              background: 'red', 
              zIndex: 9999,
              opacity: 0.8 
            }}>
              This should overlap the div below
            </div>
          </div>
          <div style={{ 
            position: 'relative', 
            height: '100px', 
            background: 'green', 
            marginTop: '10px',
            zIndex: 1 
          }}>
            This is the second div
          </div>
        </div>
      </div>
    </div>
  )
}