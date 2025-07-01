'use client'

import Link from 'next/link'
import { 
  Button, 
  Card, 
  CardBody, 
  Typography, 
  SimpleGrid,
  Container,
  Section,
  Badge,
  Stat,
  StatGroup,
  Feature,
  FeatureGrid,
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  Fab,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Alert,
  AlertTitle,
  AlertDescription,
  Chip,
  Checkbox,
  Select,
  Sidebar,
  SidebarProvider,
  SidebarItem,
  SidebarGroup
} from '@velvet-ui/core'
import { 
  Sparkles, 
  Palette, 
  Zap, 
  Shield, 
  Code2, 
  Layers,
  ArrowRight,
  Github,
  BookOpen,
  Rocket,
  MessageCircle,
  Share2,
  Heart,
  Search,
  Home,
  Mail,
  Music,
  Camera,
  Folder,
  Download,
  Cloud,
  Settings
} from 'lucide-react'
import React, { useState } from 'react'

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  
  const fabActions = [
    { icon: <MessageCircle className="h-5 w-5" />, label: 'Chat', onClick: () => console.log('Chat'), color: 'primary' as const },
    { icon: <Share2 className="h-5 w-5" />, label: 'Share', onClick: () => console.log('Share'), color: 'success' as const },
    { icon: <Heart className="h-5 w-5" />, label: 'Like', onClick: () => console.log('Like'), color: 'danger' as const },
  ];

  return (
    <div className="relative overflow-hidden pt-16">
      {/* Hero Section */}
      <Hero variant="gradient" size="full" particles>
        {/* Enhanced glassmorphism background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-secondary-100/30 dark:from-primary-900/10 dark:to-secondary-900/10" />
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 dark:from-primary-600/10 dark:to-secondary-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-secondary-400/20 to-accent-400/20 dark:from-secondary-600/10 dark:to-accent-600/10 blur-3xl animate-pulse animation-delay-2000" />
        </div>
        
        <HeroContent maxWidth="xlarge">
          <div className="text-center">
            <Badge variant="soft" color="primary" className="mb-8 inline-block">New Release</Badge>
            <HeroTitle gradient className="mb-8">
              Build beautiful UIs with{' '}
              <span className="block sm:inline">Velvet UI</span>
            </HeroTitle>
            <HeroSubtitle className="mb-12 max-w-3xl mx-auto">
              A modern React component library with smooth animations and elegant glassmorphism aesthetics. 
              Create stunning interfaces with pre-built components, themes, and beautiful glass effects.
            </HeroSubtitle>
            <HeroActions>
              <Link href="/docs/getting-started">
                <Tooltip content="Start building with Velvet UI" placement="bottom" variant="glass">
                  <Button 
                    size="large" 
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" 
                    beginContent={<BookOpen className="h-5 w-5" />}
                  >
                    Get Started
                  </Button>
                </Tooltip>
              </Link>
              <Link href="https://github.com/yourusername/velvet-ui" target="_blank">
                <Tooltip content="Star us on GitHub" placement="bottom" variant="glass">
                  <Button 
                    size="large" 
                    variant="glass" 
                    className="backdrop-blur-xl border-border/30 hover:bg-background/10"
                    beginContent={<Github className="h-5 w-5" />}
                  >
                    View on GitHub
                  </Button>
                </Tooltip>
              </Link>
            </HeroActions>
          </div>
        </HeroContent>
      </Hero>

      <Section spacing="large" className="bg-background/50 backdrop-blur-sm">
        <Container size="full" className="px-8 lg:px-16">
          <Typography variant="h2" className="mb-6 text-4xl sm:text-5xl font-bold max-w-3xl">
            Why choose Velvet UI?
          </Typography>
          <Typography variant="lead" className="text-foreground-secondary text-lg max-w-3xl mb-16">
            Everything you need to build modern, accessible, and beautiful user interfaces.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Feature
              variant="glass"
              icon={<Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
              title="Beautiful Design"
              description="Beautiful glassmorphism design system with smooth spring animations powered by Framer Motion."
              className="hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            />

            <Feature
              variant="glass"
              icon={<Palette className="h-6 w-6 text-secondary" />}
              title="10+ Themes"
              description="Pre-built themes including Default, Pastel, Crimson, Ocean, Forest, Midnight, Sunset, Monochrome, Neon, and Royal."
              className="hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
            />

            <Feature
              variant="glass"
              icon={<Zap className="h-6 w-6 text-success" />}
              title="Fast & Lightweight"
              description="Tree-shakeable components with optimized bundle sizes. Only import what you need."
              className="hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1 transition-all duration-300"
            />

            <Feature
              variant="glass"
              icon={<Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
              title="Accessibility First"
              description="Built with proper ARIA labels, keyboard navigation, and screen reader support out of the box."
              className="hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300"
            />

            <Feature
              variant="glass"
              icon={<Code2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />}
              title="TypeScript Support"
              description="Full TypeScript support with exported types for all components and comprehensive IntelliSense."
              className="hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
            />

            <Feature
              variant="glass"
              icon={<Layers className="h-6 w-6 text-red-600 dark:text-red-400" />}
              title="15+ Components"
              description="Essential components including Button, Card, Modal, Toast, Select, Input, Sidebar, Stats, and more."
              className="hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            />
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="medium" className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-purple-50/50 dark:from-primary-900/10 dark:to-purple-900/10" />
        <Container size="full" className="relative z-10 px-8 lg:px-16">
          <StatGroup cols={4}>
            <Stat
              variant="glass"
              label="Components"
              value="15+"
              icon={<Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
            />
            <Stat
              variant="glass"
              label="Themes"
              value="10+"
              icon={<Palette className="h-6 w-6 text-secondary" />}
            />
            <Stat
              variant="glass"
              label="Bundle Size"
              value="<50kb"
              icon={<Zap className="h-6 w-6 text-success" />}
            />
            <Stat
              variant="glass"
              label="GitHub Stars"
              value="1.2k"
              change={25}
              changeLabel="this month"
              icon={<Github className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
            />
          </StatGroup>
        </Container>
      </Section>

      <Section spacing="large" className="bg-gradient-to-br from-background-secondary to-background-tertiary">
        <Container size="full" centered className="px-8 lg:px-16">
          <Typography variant="h2" className="mb-6 text-4xl sm:text-5xl font-bold max-w-3xl">
            Component Showcase
          </Typography>
          <Typography variant="lead" className="text-foreground-secondary text-lg max-w-3xl mb-16">
            Explore our collection of beautifully crafted components.
          </Typography>

          <SimpleGrid cols={{ default: 1, md: 2, lg: 3 }} gap={8} className="max-w-6xl w-full">
            <Card variant="glassStrong" isClickable className="hover:shadow-2xl transition-all duration-300">
              <CardBody>
                <Typography variant="h4" className="mb-4">Buttons & Actions</Typography>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Tooltip content="Solid button style" placement="top">
                      <Button variant="solid">Solid</Button>
                    </Tooltip>
                    <Tooltip content="Outline button style" placement="top">
                      <Button variant="outline">Outline</Button>
                    </Tooltip>
                    <Tooltip content="Ghost button style" placement="top">
                      <Button variant="ghost">Ghost</Button>
                    </Tooltip>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="glass">Glass</Button>
                    <Button variant="glow">Glow</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="gradient" color="primary">Gradient</Button>
                    <Button variant="gradient" color="success" onClick={() => setShowModal(true)}>Open Modal</Button>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card variant="glassMedium" isClickable className="hover:shadow-2xl transition-all duration-300">
              <CardBody>
                <Typography variant="h4" className="mb-4">Typography</Typography>
                <div className="space-y-2">
                  <Typography variant="h5">Heading 5</Typography>
                  <Typography variant="body">Body text with proper styling</Typography>
                  <Typography variant="small" className="text-foreground-secondary">
                    Small text for captions
                  </Typography>
                </div>
              </CardBody>
            </Card>

            <Card variant="gradientAurora" isClickable className="hover:shadow-2xl transition-all duration-300">
              <CardBody>
                <Typography variant="h4" className="mb-4">Glass Card</Typography>
                <Typography className="text-foreground-secondary">
                  Cards with beautiful glassmorphism effects and subtle shadows.
                </Typography>
              </CardBody>
            </Card>
          </SimpleGrid>

          <div className="mt-16 text-center">
            <Link href="/docs/components">
              <Button size="large" variant="outline" endContent={<ArrowRight className="h-5 w-5" />}>
                View All Components
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Advanced Components Showcase */}
      <Section spacing="large" className="bg-gradient-to-b from-background to-background-secondary">
        <Container size="full" centered className="px-8 lg:px-16">
          <Typography variant="h2" className="mb-6 text-4xl sm:text-5xl font-bold max-w-3xl">
            Advanced Components
          </Typography>
          <Typography variant="lead" className="text-foreground-secondary text-lg max-w-3xl mb-16">
            Explore our collection of sophisticated components with glassmorphism effects.
          </Typography>

          <div className="space-y-16 max-w-7xl mx-auto">
            {/* Tabs Component Demo */}
            <div className="space-y-4">
              <Typography variant="h3" className="text-2xl font-semibold mb-6">Tabs Component</Typography>
              <Card variant="glassStrong" className="p-6">
                <Tabs defaultValue="overview" variant="glass">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6">
                    <Typography variant="h5" className="mb-4">Product Overview</Typography>
                    <Typography className="text-foreground-secondary">
                      Beautiful tab navigation with smooth transitions and glassmorphism styling.
                      Perfect for organizing content into logical sections.
                    </Typography>
                  </TabsContent>
                  <TabsContent value="features" className="mt-6">
                    <Typography variant="h5" className="mb-4">Key Features</Typography>
                    <ul className="list-disc list-inside space-y-2 text-foreground-secondary">
                      <li>Smooth animations and transitions</li>
                      <li>Keyboard navigation support</li>
                      <li>Multiple style variants</li>
                      <li>Responsive design</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="specs" className="mt-6">
                    <Typography variant="h5" className="mb-4">Technical Specifications</Typography>
                    <Typography className="text-foreground-secondary">
                      Built with React and TypeScript, fully accessible with ARIA attributes.
                    </Typography>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Table Component Demo */}
            <div className="space-y-4">
              <Typography variant="h3" className="text-2xl font-semibold mb-6">Data Table</Typography>
              <Card variant="glass" className="overflow-hidden">
                <Table variant="glass">
                  <TableHeader>
                    <TableRow>
                      <TableCell>Component</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Bundle Size</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Button</TableCell>
                      <TableCell>Core</TableCell>
                      <TableCell><Chip variant="glass" color="success" size="small" label="Stable" /></TableCell>
                      <TableCell>2.3kb</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Modal</TableCell>
                      <TableCell>Overlay</TableCell>
                      <TableCell><Chip variant="glass" color="success" size="small" label="Stable" /></TableCell>
                      <TableCell>4.1kb</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Table</TableCell>
                      <TableCell>Data</TableCell>
                      <TableCell><Chip variant="glass" color="warning" size="small" label="Beta" /></TableCell>
                      <TableCell>3.8kb</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>

            {/* Accordion and Sidebar Demo */}
            <div className="space-y-4">
              <Typography variant="h3" className="text-2xl font-semibold mb-6">Navigation Components</Typography>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Accordion */}
                <Card variant="glass" className="p-6">
                  <Typography variant="h4" className="mb-4">Accordion</Typography>
                  <Accordion variant="glass" defaultValue="getting-started">
                    <AccordionItem value="getting-started">
                      <AccordionTrigger>Getting Started</AccordionTrigger>
                      <AccordionContent>
                      <Typography className="text-foreground-secondary">
                        Install Velvet UI with npm or yarn and import the components you need.
                        Our tree-shakeable architecture ensures optimal bundle sizes.
                      </Typography>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="customization">
                      <AccordionTrigger>Customization</AccordionTrigger>
                      <AccordionContent>
                      <Typography className="text-foreground-secondary">
                        Customize colors, spacing, and animations with our comprehensive theming system.
                        Choose from 10+ pre-built themes or create your own.
                      </Typography>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="best-practices">
                      <AccordionTrigger>Best Practices</AccordionTrigger>
                      <AccordionContent>
                      <Typography className="text-foreground-secondary">
                        Follow our guidelines for accessibility, performance, and responsive design
                        to create the best user experience.
                      </Typography>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>

                {/* Sidebar */}
                <Card variant="glass" className="p-0 overflow-hidden">
                  <SidebarProvider>
                    <div className="flex h-[400px]">
                      <Sidebar variant="glass" width="default">
                        <SidebarGroup label="Navigation">
                          <SidebarItem icon={<Home className="h-4 w-4" />} active>
                            Dashboard
                          </SidebarItem>
                          <SidebarItem icon={<Folder className="h-4 w-4" />} badge="12">
                            Projects
                          </SidebarItem>
                          <SidebarItem icon={<Settings className="h-4 w-4" />}>
                            Settings
                          </SidebarItem>
                        </SidebarGroup>
                        <SidebarGroup label="Resources">
                          <SidebarItem icon={<BookOpen className="h-4 w-4" />}>
                            Documentation
                          </SidebarItem>
                          <SidebarItem icon={<Download className="h-4 w-4" />}>
                            Downloads
                          </SidebarItem>
                        </SidebarGroup>
                      </Sidebar>
                      <div className="flex-1 p-6">
                        <Typography variant="h4" className="mb-4">Tree Navigation</Typography>
                        <Typography className="text-foreground-secondary">
                          Our sidebar component provides hierarchical navigation with collapsible groups,
                          badges, and smooth animations.
                        </Typography>
                      </div>
                    </div>
                  </SidebarProvider>
                </Card>
              </div>
            </div>

            {/* Alert and Form Components */}
            <div className="space-y-4">
              <Typography variant="h3" className="text-2xl font-semibold mb-6">Notifications & Forms</Typography>
              <div className="space-y-6">
                <Alert variant="info">
                  <AlertTitle>Info Alert</AlertTitle>
                  <AlertDescription>This is an informational alert with glassmorphism styling.</AlertDescription>
                </Alert>
                <Alert variant="success">
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
                </Alert>
                
                <Card variant="glass" className="p-6">
                  <Typography variant="h4" className="mb-4">Form Elements</Typography>
                  <div className="space-y-4">
                    <Select 
                      label="Choose Theme" 
                      variant="glass"
                      options={[
                        { value: 'light', label: 'Light' },
                        { value: 'dark', label: 'Dark' },
                        { value: 'auto', label: 'Auto' }
                      ]}
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm">I agree to the terms and conditions</label>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="large" className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl animate-pulse" />
        </div>
        <Container size="xlarge" centered className="relative z-10">
          <Card variant="gradientOcean" className="relative overflow-hidden shadow-2xl w-full">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-warning rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>
            <CardBody className="py-12 sm:py-16 lg:py-20 flex flex-col items-center text-center relative z-10">
              <div className="p-4 rounded-full bg-background/30 backdrop-blur-xl shadow-lg mb-8">
                <Rocket className="h-16 w-16 text-primary" />
              </div>
              <Typography variant="h2" className="mb-6 text-4xl sm:text-5xl font-bold">
                Ready to build something amazing?
              </Typography>
              <Typography variant="lead" className="mb-10 text-foreground-secondary text-lg max-w-2xl">
                Get started with Velvet UI in just a few minutes.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs/getting-started">
                  <Button 
                    size="large" 
                    className="bg-background/90 backdrop-blur-xl text-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200" 
                    endContent={<ArrowRight className="h-5 w-5" />}
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/playground">
                  <Button size="large" variant="glass">
                    Try Playground
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </Container>
      </Section>
      
      {/* Floating Action Button */}
      <Fab 
        variant="gradient" 
        color="primary" 
        actions={fabActions}
        expandDirection="up"
      />
      
      
      
      {/* Example Modal */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        variant="glass"
        animation="bounce"
        size="medium"
      >
        <ModalHeader onClose={() => setShowModal(false)}>
          <Typography variant="h4">Welcome to Velvet UI</Typography>
        </ModalHeader>
        <ModalBody>
          <Typography className="mb-4">
            This is an example of our enhanced Modal component with beautiful glass morphism effects.
          </Typography>
          <Typography className="text-foreground-secondary">
            Modals support multiple variants, animations, and backdrop styles to match your design needs.
          </Typography>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="gradient" color="primary">Get Started</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}