import dataSecurityImage from "@/assets/data-security.jpg";
import circularEconomyImage from "@/assets/circular-economy.jpg";

const ImageShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl shadow-large hover:shadow-xl transition-all animate-fade-in">
            <img 
              src={dataSecurityImage} 
              alt="Secure data destruction process"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-3">Certified Data Security</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Multi-layer data destruction protocols with real-time monitoring ensure your sensitive information is permanently erased.
              </p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-large hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: "200ms" }}>
            <img 
              src={circularEconomyImage} 
              alt="Circular economy transformation"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-secondary-foreground">
              <h3 className="text-3xl font-bold mb-3">Circular Economy</h3>
              <p className="text-secondary-foreground/90 leading-relaxed">
                We transform e-waste into valuable resources, closing the loop and creating sustainable value for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
