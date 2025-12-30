import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  priceNote: string;
  amenities: string[];
  isTopSelling?: boolean;
}

const PropertyCard = ({
  image,
  title,
  price,
  priceNote,
  amenities,
  isTopSelling = false,
}: PropertyCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isTopSelling && (
          <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground font-semibold">
            Top Selling 🔥
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl md:text-3xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground text-sm ml-2">{priceNote}</span>
        </div>

        {/* Amenities */}
        <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
          {amenities.join(", ")}
        </p>

        {/* CTA */}
        <Button variant="default" className="w-full">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
