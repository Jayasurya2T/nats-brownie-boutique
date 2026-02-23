import { Instagram, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">
          About Nats Brownies
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Our Story:</strong> Nats Brownies started as a small passion project from a home kitchen, 
            born from a love of creating rich, fudgy brownies that bring joy to every bite. What began with friends and 
            family quickly grew into a beloved local brand.
          </p>
          <p>
            <strong className="text-foreground">Meet Varshini Manikandan:</strong> The heart behind Nats Brownies, Varshini is a self-taught baker 
            who believes that the best desserts are made with love, quality ingredients, and a touch of creativity. 
            Her journey from baking as a hobby to running a brownie business is a testament to following one's passion.
          </p>
        </div>

        <div className="mt-10 bg-card rounded-xl p-6 border border-border">
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">Get in Touch</h3>
          <div className="space-y-3">
            <a
              href="https://wa.me/918428382877"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span>+91 84283 82877 (WhatsApp)</span>
            </a>
            <a
              href="https://www.instagram.com/nats_vlog29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={18} />
              <span>@nats_vlog29</span>
            </a>
            <a
              href="mailto:"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>Send us an email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
