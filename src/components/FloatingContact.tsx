import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=+918181909069&text=I%27m%20interested"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-float"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Phone */}
      <a
        href="tel:+918181909069"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Call us"
        style={{ animationDelay: "150ms" }}
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
