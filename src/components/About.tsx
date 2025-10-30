import { CheckCircle2 } from "lucide-react";
import facilityImage from "@/assets/about-facility.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Us</h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-6 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-large h-[400px] animate-slide-in">
              <img 
                src={facilityImage} 
                alt="E-Cycle Solutions modern recycling facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            <div className="flex flex-col justify-center animate-fade-in">
              <h3 className="text-3xl font-bold text-primary mb-4">Our State-of-the-Art Facility</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Operating from our Chennai headquarters, we maintain a cutting-edge facility equipped with the latest technology for safe and efficient e-waste processing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every process is monitored and documented to ensure complete compliance with environmental regulations and data security standards.
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl shadow-large p-8 md:p-12 animate-slide-in">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Welcome to <span className="font-semibold text-primary">E-Cycle Solutions</span>, your trusted partner in sustainable e-waste management and circular economy transformation. Headquartered in Chennai, we operate nationwide with all required pollution control board licenses, offering responsible recycling and secure IT asset handling.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-8">
              In a world of rapid technological change, we tackle the environmental challenges of growing electronic waste by providing comprehensive and eco-friendly solutions that protect both data and the planet.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                "TNPCB Licensed & Approved",
                "Nationwide Operations",
                "Secure Data Handling",
                "Environmental Compliance",
                "Circular Economy Focus",
                "Complete Traceability"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
