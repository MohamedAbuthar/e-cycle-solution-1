import { 
  Laptop, 
  ShieldCheck, 
  Repeat, 
  FileCheck, 
  Server, 
  Leaf 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Laptop,
    title: "IT Asset Disposition (ITAD)",
    description: "Secure and responsible end-of-life processing of IT equipment",
    features: [
      "Asset collection & evaluation",
      "Certified data security measures",
      "Refurbishment & resale of reusable devices",
      "Eco-friendly recycling",
      "Complete documentation & traceability"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Data Sanitization & Destruction",
    description: "On-site and off-site destruction with multi-camera monitoring",
    features: [
      "Hard drive crushers & shredders",
      "Multi-camera client monitoring",
      "Secure chain of custody",
      "Supports HDDs, SSDs, CDs, mobile devices & laptops"
    ]
  },
  {
    icon: Repeat,
    title: "OEM Returns & Third-Party Assurance",
    description: "Complete e-waste lifecycle tracking and compliance",
    features: [
      "E-waste lifecycle tracking",
      "Recycling certifications per PCB norms",
      "Safe logistics & documentation",
      "Return processing & inventory assurance"
    ]
  },
  {
    icon: FileCheck,
    title: "Extended Producer Responsibility (EPR)",
    description: "Help brands comply with environmental mandates",
    features: [
      "Streamlined compliance documentation",
      "Risk mitigation strategies",
      "Brand reputation enhancement",
      "Circular economy support"
    ]
  },
  {
    icon: Server,
    title: "Data Center Solutions",
    description: "End-to-end lifecycle management for data centers",
    features: [
      "Data center decommissioning",
      "Asset recovery & secure handling",
      "Edge & enterprise DC support",
      "Colocation & scalable solutions"
    ]
  },
  {
    icon: Leaf,
    title: "Sustainable Value-Recovery Services",
    description: "Driving a cleaner future through material recovery",
    features: [
      "E-waste material recovery & recycling",
      "Plastic Credit Services",
      "Green Credit Services",
      "Upcycling unused materials"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Services</h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive e-waste management solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
