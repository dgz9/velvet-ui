'use client';

import { ThemeSelector, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, Spotlight, Button, cn, Chip, IconButton } from '@velvet-ui/core';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Search, BookOpen, Layers, Github, Palette } from 'lucide-react';

export function Header() {
  const [showSpotlight, setShowSpotlight] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Components', href: '/docs/components/button' },
    { name: 'Themes', href: '/docs/themes' },
    { name: 'Playground', href: 'http://localhost:3002' },
  ];
  
  const spotlightItems = [
    // Main documentation
    { 
      id: 'docs-intro', 
      title: 'Introduction', 
      description: 'Introduction to Velvet UI', 
      icon: <BookOpen className="h-5 w-5" />, 
      category: 'Getting Started',
      keywords: ['docs', 'introduction', 'overview'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs');
      }
    },
    { 
      id: 'docs-install', 
      title: 'Installation', 
      description: 'How to install Velvet UI', 
      icon: <BookOpen className="h-5 w-5" />, 
      category: 'Getting Started',
      keywords: ['install', 'setup', 'npm', 'yarn'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/installation');
      }
    },
    { 
      id: 'docs-quick', 
      title: 'Quick Start', 
      description: 'Get started quickly with Velvet UI', 
      icon: <BookOpen className="h-5 w-5" />, 
      category: 'Getting Started',
      keywords: ['start', 'begin', 'tutorial'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/quick-start');
      }
    },
    { 
      id: 'docs-custom', 
      title: 'Customization', 
      description: 'Customize Velvet UI components', 
      icon: <Palette className="h-5 w-5" />, 
      category: 'Configuration',
      keywords: ['customize', 'theme', 'style'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/customization');
      }
    },
    { 
      id: 'docs-themes', 
      title: 'Themes', 
      description: 'Explore available themes', 
      icon: <Palette className="h-5 w-5" />, 
      category: 'Configuration',
      keywords: ['theme', 'dark', 'light', 'colors'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/themes');
      }
    },
    
    // Components
    { 
      id: 'comp-button', 
      title: 'Button', 
      description: 'Interactive button component', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['button', 'click', 'action'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/button');
      }
    },
    { 
      id: 'comp-card', 
      title: 'Card', 
      description: 'Content container with glass effects', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['card', 'container', 'box'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/card');
      }
    },
    { 
      id: 'comp-modal', 
      title: 'Modal', 
      description: 'Dialog overlay component', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['modal', 'dialog', 'popup'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/modal');
      }
    },
    { 
      id: 'comp-input', 
      title: 'Input', 
      description: 'Text input field component', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['input', 'text', 'field', 'form'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/input');
      }
    },
    { 
      id: 'comp-select', 
      title: 'Select', 
      description: 'Dropdown selection component', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['select', 'dropdown', 'options'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/select');
      }
    },
    { 
      id: 'comp-chip', 
      title: 'Chip', 
      description: 'Compact status indicators', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['chip', 'tag', 'badge', 'label'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/chip');
      }
    },
    { 
      id: 'comp-spotlight', 
      title: 'Spotlight', 
      description: 'Command palette component', 
      icon: <Search className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['spotlight', 'search', 'command', 'palette'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/spotlight');
      }
    },
    { 
      id: 'comp-toast', 
      title: 'Toast', 
      description: 'Notification messages', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['toast', 'notification', 'alert', 'message'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/toast');
      }
    },
    { 
      id: 'comp-sidebar', 
      title: 'Sidebar', 
      description: 'Navigation sidebar component', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['sidebar', 'navigation', 'menu'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/sidebar');
      }
    },
    { 
      id: 'comp-table', 
      title: 'Table', 
      description: 'Data table component', 
      icon: <Layers className="h-5 w-5" />, 
      category: 'Components',
      keywords: ['table', 'data', 'grid', 'rows'],
      action: () => {
        setShowSpotlight(false);
        router.push('/docs/components/table');
      }
    },
    
    // External links
    { 
      id: 'link-github', 
      title: 'GitHub', 
      description: 'View source code', 
      icon: <Github className="h-5 w-5" />, 
      category: 'Links',
      keywords: ['github', 'source', 'code', 'repository'],
      action: () => window.open('https://github.com/velvet-ui/velvet-ui', '_blank')
    },
  ];
  
  // Add keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSpotlight(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Navbar variant="glass" sticky={true}>
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Velvet UI</span>
            <Chip size="small" variant="glass" color="primary" label="v1.0.0" />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          {navigation.map((item) => {
            let isActive = false;
            
            if (!item.href.startsWith('http')) {
              // For "Documentation", only match exact /docs path
              if (item.name === 'Documentation') {
                isActive = pathname === '/docs';
              }
              // For "Components", match any component page
              else if (item.name === 'Components') {
                isActive = pathname.startsWith('/docs/components');
              }
              // For "Themes", match the themes page
              else if (item.name === 'Themes') {
                isActive = pathname === '/docs/themes';
              }
              // Default behavior for other items
              else {
                isActive = pathname.startsWith(item.href);
              }
            }
            
            return (
              <NavbarItem key={item.name}>
                {item.href.startsWith('http') ? (
                  <NavbarLink 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    active={false}
                  >
                    {item.name}
                  </NavbarLink>
                ) : (
                  <Link 
                    href={item.href}
                    className={cn(
                      'relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium hover:text-foreground rounded-lg',
                      isActive ? 'text-foreground' : 'text-foreground-secondary',
                      'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:origin-center after:scale-x-0 after:transition-transform after:duration-300',
                      isActive && 'after:scale-x-100',
                      'hover:after:scale-x-100',
                      'hover:bg-primary/[0.08] dark:hover:bg-primary/[0.12]'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      
        <NavbarContent justify="end">
          <button
            onClick={() => setShowSpotlight(true)}
            className="p-2 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-primary/[0.08] dark:hover:bg-primary/[0.12] transition-all"
            aria-label="Search (⌘K)"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="https://github.com/velvet-ui/velvet-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-primary/[0.08] dark:hover:bg-primary/[0.12] transition-all"
            aria-label="GitHub repository"
          >
            <Github className="h-5 w-5" />
          </Link>
          <ThemeSelector size="medium" />
        </NavbarContent>
      </Navbar>
      
      <Spotlight
        open={showSpotlight}
        onOpenChange={setShowSpotlight}
        items={spotlightItems}
        placeholder="Search documentation..."
      />
    </>
  );
}