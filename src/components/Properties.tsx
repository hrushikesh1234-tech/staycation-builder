import PropertyCard from "./PropertyCard";
import domeResort from "@/assets/dome-resort.jpg";
import lakestoryResort from "@/assets/lakestory-resort.jpg";
import riversideGlamping from "@/assets/riverside-glamping.jpg";
import colorfulCabins from "@/assets/colorful-cabins.jpg";
import coupleRetreat from "@/assets/couple-retreat.jpg";
import cozynestResort from "@/assets/cozynest-resort.jpg";

const properties = [
  {
    image: domeResort,
    title: "P21 – Dome Story Resort by Leestays at Malvandi Lake, Lonavala",
    price: "₹7,499",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "AC",
      "Mini Fridge",
      "Electric kettle",
      "BBQ",
      "Food Included",
      "Free Boating",
      "Bonfire",
      "Lake access",
    ],
    isTopSelling: true,
  },
  {
    image: lakestoryResort,
    title: "P7 – Lakestory Resort by Leestays, Pawna lake",
    price: "₹7,499",
    priceNote: "per person with meal",
    amenities: [
      "Private Pool",
      "Private Washroom",
      "AC",
      "Mini Fridge",
      "Smart Projector",
      "Home Theatre",
      "BBQ",
      "Food Included",
      "Lake touch",
    ],
    isTopSelling: true,
  },
  {
    image: riversideGlamping,
    title: "P22 – Pawna Riverside Glamping",
    price: "₹2,999",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "DJ on Saturday",
      "Riverview",
      "Food Included",
      "Free Activities",
      "Bonfire",
      "Garden",
      "Music",
      "Liquor Bar",
    ],
    isTopSelling: false,
  },
  {
    image: colorfulCabins,
    title: "P5 – AC House with sleeping loft at Pawna lake",
    price: "₹3,199",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "AC",
      "Common Swimming Pool",
      "Food Included",
      "Free Activities",
      "Paid Boating",
      "Bonfire",
      "Lake access",
    ],
    isTopSelling: false,
  },
  {
    image: coupleRetreat,
    title: "P2 – Dew Dreams, Couple Stay with Private Pool at Pawna lake",
    price: "₹8,249",
    priceNote: "per person with meal",
    amenities: [
      "Private Pool",
      "Lakeview Room",
      "Steam Bath",
      "Food Included",
      "Free Activities",
      "Paid Boating",
      "Bonfire",
      "Garden",
      "Room Service",
    ],
    isTopSelling: false,
  },
  {
    image: cozynestResort,
    title: "P1 – CozyNest at Chavsar, Pawna lake",
    price: "₹3,300",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "Food Included",
      "Paid Boating",
      "Bonfire",
      "Lake access",
    ],
    isTopSelling: false,
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-display text-center mb-4">
          Most Popular Cottages & Resorts
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          in Pawna lake, Lonavala
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <div
              key={property.title}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
