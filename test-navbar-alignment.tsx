import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink } from '@velvet-ui/core';

export function TestNavbarAlignment() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold mb-4">Navbar Alignment Test</h2>
      
      {/* Test 1: Using logo prop */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Test 1: Using logo prop</h3>
        <Navbar
          variant="glass"
          logo={
            <div className="text-xl font-bold">Logo Prop</div>
          }
        >
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
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <NavbarLink href="#">Contact</NavbarLink>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      {/* Test 2: Using NavbarBrand component */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Test 2: Using NavbarBrand component</h3>
        <Navbar variant="glass">
          <NavbarBrand>
            <div className="text-xl font-bold">NavbarBrand Component</div>
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
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <NavbarLink href="#">Contact</NavbarLink>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      {/* Test 3: No logo/brand */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Test 3: No logo/brand</h3>
        <Navbar variant="glass">
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
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <NavbarLink href="#">Contact</NavbarLink>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      {/* Test 4: Complex layout with both patterns */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Test 4: Full featured navbar</h3>
        <Navbar variant="glass">
          <NavbarBrand>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span className="ml-2 text-xl font-bold">Brand</span>
          </NavbarBrand>
          <NavbarContent justify="center">
            <NavbarItem>
              <NavbarLink href="#" active>Dashboard</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Projects</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Team</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Reports</NavbarLink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </NavbarItem>
            <NavbarItem>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
            </NavbarItem>
            <NavbarItem>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                Sign In
              </button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
}