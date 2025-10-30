import { ArrowRight, Shield, Leaf, Zap } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-foreground/20">
            <Shield className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">Licensed & TNPCB Approved</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Sustainable E-Waste
            <span className="block text-secondary">Management Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in responsible recycling, secure IT asset disposition, and circular economy transformation. Operating nationwide from Chennai.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero"
              onClick={scrollToContact}
              className="group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-secondary"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
            {[
              { icon: Shield, title: "Secure & Compliant", desc: "Full data security & legal compliance" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable circular economy practices" },
              { icon: Zap, title: "Nationwide Service", desc: "Pan-India collection & support" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-primary-foreground/15 transition-all hover:scale-105"
              >
                <feature.icon className="w-8 h-8 text-secondary mb-3 mx-auto" />
                <h3 className="text-primary-foreground font-semibold mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
