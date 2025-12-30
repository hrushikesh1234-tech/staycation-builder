import heroImage from "@/assets/hero-resort.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury dome resort by the lake at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-warm-white tracking-[0.2em] mb-6 animate-fade-up">
          LEESTAYS
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-warm-white/90 tracking-[0.3em] font-light animate-fade-up delay-200">
          Book Resorts & Cottages Near You
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-warm-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
