import heroBg from "@/assets/hero-brownies.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Delicious chocolate brownies"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-cocoa-dark/70" />
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-cream mb-4">
          Nats Brownies
        </h1>
        <p className="text-lg md:text-xl text-cream/80 max-w-md mx-auto font-light">
          Handcrafted with love — rich, fudgy brownies in egg &amp; eggless varieties
        </p>
        <a
          href="#menu"
          className="inline-block mt-6 px-8 py-3 bg-caramel text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Browse Menu
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
