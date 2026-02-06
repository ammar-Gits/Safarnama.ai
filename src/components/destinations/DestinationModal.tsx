import { motion, AnimatePresence } from "framer-motion";
import { Destination } from "@/data/destinations";
import { X, MapPin, Clock, Calendar, Mountain, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

const DestinationModal = ({ destination, isOpen, onClose }: DestinationModalProps) => {
  if (!destination) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="w-full max-w-3xl max-h-[90vh] bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Header */}
            <div className="relative h-64 md:h-80 flex-shrink-0">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{destination.region}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display text-foreground">
                  {destination.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{destination.bestTime}</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                  destination.difficulty === "Easy" 
                    ? "bg-forest/20 text-forest" 
                    : destination.difficulty === "Moderate"
                    ? "bg-accent/20 text-accent"
                    : "bg-sunset/20 text-sunset"
                }`}>
                  <Mountain className="w-4 h-4" />
                  <span>{destination.difficulty}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-display text-foreground">About this Destination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h3 className="text-lg font-display text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Star className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link to="/chat" onClick={onClose}>
                  <Button variant="hero" size="lg" className="w-full">
                    Plan a Trip to {destination.name}
                  </Button>
                </Link>
              </div>
            </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DestinationModal;
