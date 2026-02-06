import { motion } from "framer-motion";
import { Destination } from "@/data/destinations";
import { MapPin, Clock, Mountain } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
  index: number;
}

const DestinationCard = ({ destination, onClick, index }: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl bg-card shadow-card transition-all duration-500 hover:shadow-card-hover">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          
          {/* Difficulty Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              destination.difficulty === "Easy" 
                ? "bg-forest/80 text-primary-foreground" 
                : destination.difficulty === "Moderate"
                ? "bg-accent/80 text-accent-foreground"
                : "bg-sunset/80 text-primary-foreground"
            }`}>
              {destination.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div>
            <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm font-semibold mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.region}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {destination.shortDescription}
          </p>

          <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5" />
              <span>{destination.bestTime}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
