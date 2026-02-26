import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/ai-transformation", label: "AI Transformation" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/team", label: "Team" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif tracking-tighter text-foreground cursor-pointer" data-testid="link-logo">
            Ikigai
          </a>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                  location === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}