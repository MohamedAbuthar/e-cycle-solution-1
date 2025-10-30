import { CheckCircle, Shield, TrendingUp, FileText, Globe } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Approved by TNPCB",
    description: "Full compliance with pollution control board regulations"
  },
  {
    icon: CheckCircle,
    title: "Secure & Compliant IT Lifecycle Management",
    description: "End-to-end security and compliance protocols"
  },
  {
    icon: FileText,
    title: "Sustainability Reporting for Clients",
    description: "Detailed reports and documentation for your records"
  },
  {
    icon: TrendingUp,
    title: "Circular Economy-Driven Solutions",
    description: "Transforming waste into valuable resources"
  },
  {
    icon: Globe,
    title: "Nationwide Collection & Service Support",
    description: "Pan-India presence with local support"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Industry-leading expertise with a commitment to sustainability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8 hover:bg-primary-foreground/15 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
