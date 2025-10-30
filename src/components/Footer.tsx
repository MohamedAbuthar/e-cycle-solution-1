import { Recycle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="w-6 h-6 text-secondary" />
              <span className="text-lg font-bold">E-Cycle Solutions</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in sustainable e-waste management and circular economy transformation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-secondary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("why-choose-us")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-secondary transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Chennai, Tamil Nadu</li>
              <li>
                <a href="mailto:info@ecycl.biz" className="hover:text-secondary transition-colors">
                  info@ecycl.biz
                </a>
              </li>
              <li>GSTIN: 33AABCT0656P3Z2</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} E-Cycle Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
