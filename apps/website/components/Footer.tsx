import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Components', href: '/docs/components/button' },
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Quick Start', href: '/docs/quick-start' },
    ],
    Community: [
      { name: 'GitHub', href: 'https://github.com/yourusername/velvet-ui' },
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
    ],
    More: [
      { name: 'Themes', href: '/docs/themes' },
      { name: 'Customization', href: '/docs/customization' },
      { name: 'Playground', href: 'http://localhost:5173' },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold">Velvet UI</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              A modern React component library built with TypeScript and Tailwind CSS.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground">{category}</h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
                      {...(link.href.startsWith('http') && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-foreground-secondary">
            © {currentYear} Velvet UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}