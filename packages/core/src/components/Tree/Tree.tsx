import React, { useState, useCallback, ReactNode } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, AnimatePresence } from 'framer-motion'

const treeVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: '',
        compact: 'text-sm',
        spacious: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const treeItemVariants = cva(
  'flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors',
  {
    variants: {
      variant: {
        default: 'hover:bg-surface-hover',
        highlight: 'hover:bg-primary/10',
      },
      selected: {
        true: 'bg-primary/10 text-primary',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      selected: false,
    },
  }
)

export interface TreeNode {
  id: string
  label: ReactNode
  icon?: ReactNode
  children?: TreeNode[]
  disabled?: boolean
  data?: any
}

export interface TreeProps extends VariantProps<typeof treeVariants> {
  data: TreeNode[]
  selectedIds?: string[]
  expandedIds?: string[]
  onSelect?: (node: TreeNode) => void
  onExpand?: (nodeId: string, isExpanded: boolean) => void
  className?: string
  showIcons?: boolean
  indentSize?: number
  itemVariant?: 'default' | 'highlight'
}

export function Tree({
  data,
  selectedIds = [],
  expandedIds: controlledExpandedIds,
  onSelect,
  onExpand,
  className,
  variant,
  showIcons = true,
  indentSize = 20,
  itemVariant = 'default',
}: TreeProps) {
  const [internalExpandedIds, setInternalExpandedIds] = useState<Set<string>>(
    new Set(controlledExpandedIds || [])
  )

  const expandedIds = controlledExpandedIds || Array.from(internalExpandedIds)

  const handleToggle = useCallback(
    (nodeId: string) => {
      const isExpanded = expandedIds.includes(nodeId)
      
      if (!controlledExpandedIds) {
        setInternalExpandedIds((prev) => {
          const next = new Set(prev)
          if (isExpanded) {
            next.delete(nodeId)
          } else {
            next.add(nodeId)
          }
          return next
        })
      }

      onExpand?.(nodeId, !isExpanded)
    },
    [expandedIds, controlledExpandedIds, onExpand]
  )

  const renderNode = (node: TreeNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expandedIds.includes(node.id)
    const isSelected = selectedIds.includes(node.id)

    return (
      <div key={node.id} className="select-none">
        <div
          className={cn(
            treeItemVariants({ variant: itemVariant, selected: isSelected }),
            node.disabled && 'opacity-50 cursor-not-allowed'
          )}
          style={{ paddingLeft: `${level * indentSize + 8}px` }}
          onClick={() => {
            if (node.disabled) return
            
            if (hasChildren) {
              handleToggle(node.id)
            }
            onSelect?.(node)
          }}
        >
          {hasChildren && (
            <motion.div
              initial={false}
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          )}
          
          {!hasChildren && <div className="w-4" />}
          
          {showIcons && node.icon && (
            <div className="flex-shrink-0">{node.icon}</div>
          )}
          
          <span className="flex-1 truncate">{node.label}</span>
        </div>

        <AnimatePresence initial={false}>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              {node.children!.map((child) => renderNode(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className={cn(treeVariants({ variant }), className)}>
      {data.map((node) => renderNode(node))}
    </div>
  )
}

Tree.displayName = 'Tree'