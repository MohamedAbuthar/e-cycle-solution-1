import { Recycle } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Recycle className="w-8 h-8 text-secondary" />
          <span className="text-xl font-bold text-primary">E-Cycle Solutions</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("why-choose-us")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Why Choose Us
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            size="sm"
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
