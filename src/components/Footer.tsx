import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-header text-header-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <polygon
                    points="20,2 38,35 2,35"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                  <polygon
                    points="20,12 30,30 10,30"
                    fill="hsl(var(--primary))"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-wider">LEESTAYS</span>
            </div>
            <p className="text-header-foreground/70 text-sm leading-relaxed">
              Book the best resorts and cottages near Pawna Lake and Lonavala. 
              Experience nature like never before with our handpicked stays.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+918181909069"
                className="flex items-center gap-3 text-header-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Phone size={18} />
                <span>+91 8181 909 069</span>
              </a>
              <a
                href="mailto:info@leestays.com"
                className="flex items-center gap-3 text-header-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Mail size={18} />
                <span>info@leestays.com</span>
              </a>
              <div className="flex items-start gap-3 text-header-foreground/70 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Pawna Lake, Lonavala, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/leestays/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-header-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-header-foreground/10 text-center">
          <p className="text-header-foreground/50 text-sm">
            © {new Date().getFullYear()} LeeStays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
