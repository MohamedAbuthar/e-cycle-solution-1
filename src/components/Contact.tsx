import { MapPin, Mail, Building } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground">
              Ready to transform your e-waste management? Contact us today.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-large p-8 md:p-12 animate-slide-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Plot No. 48B, 6th Street, North Phase,<br />
                      Ambattur Industrial Estate,<br />
                      Chennai District, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:info@ecycl.biz" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      info@ecycl.biz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">GSTIN</h3>
                    <p className="text-muted-foreground">33AABCT0656P3Z2</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary rounded-xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Start?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Contact us today for a consultation and discover how we can help you achieve sustainable e-waste management.
                </p>
                <Button 
                  variant="hero-secondary"
                  className="w-full"
                  onClick={() => window.location.href = "mailto:info@ecycl.biz"}
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
