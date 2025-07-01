export interface ComponentExample {
  title: string
  description?: string
  preview: React.ReactNode
  code: string
}

export interface ComponentProp {
  name: string
  type: string
  default?: string
  description: string
}

export interface ComponentDoc {
  title: string
  description: string
  import: string
  examples: ComponentExample[]
  props: ComponentProp[]
  notes?: string
}