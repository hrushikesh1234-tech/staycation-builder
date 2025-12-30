interface DestinationCardProps {
  image: string;
  title: string;
  subtitle: string;
  overlayTitle: string;
}

const DestinationCard = ({ image, title, subtitle, overlayTitle }: DestinationCardProps) => {
  return (
    <a
      href="#properties"
      className="group relative block overflow-hidden rounded-lg aspect-square shadow-card hover:shadow-card-hover transition-all duration-500"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 card-overlay" />
      
      {/* Overlay Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-warm-white italic tracking-wide drop-shadow-lg">
          {overlayTitle}
        </h3>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p className="text-warm-white text-sm md:text-base font-medium">
          {subtitle}
        </p>
      </div>
    </a>
  );
};

export default DestinationCard;
