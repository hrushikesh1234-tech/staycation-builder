import DestinationCard from "./DestinationCard";
import pawnaLake from "@/assets/pawna-lake.jpg";
import lonavala from "@/assets/lonavala.jpg";

const destinations = [
  {
    image: pawnaLake,
    title: "Pawna Lake",
    subtitle: "Pawna Lake Resorts & Cottages",
    overlayTitle: "Pawna Lake",
  },
  {
    image: lonavala,
    title: "Lonavala",
    subtitle: "Lonavala Resorts",
    overlayTitle: "Lonavala",
  },
];

const Destinations = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-display text-center mb-12">
          Choose Your Destination
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {destinations.map((destination) => (
            <div
              key={destination.title}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
