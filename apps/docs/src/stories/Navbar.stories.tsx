import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, Button, ThemeSelector } from '@velvet-ui/core';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'solid', 'floating'],
      description: 'The visual variant of the navbar',
    },
    sticky: {
      control: 'boolean',
      description: 'Whether the navbar sticks to the top of the viewport',
    },
    height: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The height of the navbar',
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    sticky: false,
    height: 'medium',
  },
  render: (args) => (
    <div className="min-h-[400px] bg-background">
      <Navbar {...args}>
        <NavbarBrand>
          <span className="text-xl font-bold">Brand</span>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <NavbarLink href="#" active>Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Services</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button size="small" variant="ghost">Login</Button>
          <Button size="small" variant="solid">Sign Up</Button>
        </NavbarContent>
      </Navbar>
    </div>
  ),
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    sticky: false,
  },
  render: (args) => (
    <div className="min-h-[400px] bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20 p-4">
      <Navbar {...args}>
        <NavbarBrand>
          <span className="text-xl font-bold">Glass Nav</span>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <NavbarLink href="#" active>Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Products</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Pricing</NavbarLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeSelector size="small" />
        </NavbarContent>
      </Navbar>
    </div>
  ),
};

export const Floating: Story = {
  args: {
    variant: 'floating',
    sticky: false,
  },
  render: (args) => (
    <div className="min-h-[400px] bg-background-secondary p-8">
      <Navbar {...args}>
        <NavbarBrand>
          <span className="text-xl font-bold">Floating</span>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Button size="small" variant="ghost">Docs</Button>
          <Button size="small" variant="solid" color="primary">
            Get Started
          </Button>
        </NavbarContent>
      </Navbar>
    </div>
  ),
};

export const WithMobileMenu: Story = {
  args: {
    variant: 'default',
    sticky: false,
    mobileBreakpoint: 'md',
  },
  render: (args) => (
    <div className="min-h-[400px] bg-background">
      <Navbar {...args}>
        <NavbarBrand>
          <span className="text-xl font-bold">Responsive</span>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <NavbarLink href="#" active>Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Features</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Pricing</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">About</NavbarLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeSelector size="small" />
        </NavbarContent>
      </Navbar>
      <div className="p-8">
        <p className="text-foreground-secondary">
          Resize your browser window to see the mobile menu in action.
        </p>
      </div>
    </div>
  ),
};