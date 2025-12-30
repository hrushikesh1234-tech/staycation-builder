import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "PAWNA LAKE", href: "#properties" },
  { name: "LONAVALA", href: "#properties" },
  { name: "KAMSHET", href: "#properties" },
  { name: "CONTACT", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <polygon
                  points="20,2 38,35 2,35"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  className="group-hover:stroke-forest-light transition-colors"
                />
                <polygon
                  points="20,12 30,30 10,30"
                  fill="hsl(var(--primary))"
                  className="group-hover:fill-forest-light transition-colors"
                />
              </svg>
            </div>
            <span className="text-header-foreground text-xl md:text-2xl font-semibold tracking-wider">
              LEESTAYS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-header-foreground/80 hover:text-header-foreground text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-header-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-header-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-header-foreground/80 hover:text-header-foreground text-sm font-medium tracking-wide py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
