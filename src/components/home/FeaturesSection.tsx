import { motion } from "framer-motion";
import { MessageCircle, FileText, Mic, MapPin, Languages } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "AI Chat Assistant",
    description: "Chat with our intelligent travel agent to get personalized recommendations and answers to all your travel queries.",
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Prefer talking? Use voice commands to interact with our AI and plan your trip hands-free.",
  },
  {
    icon: MapPin,
    title: "Personalized Itineraries",
    description: "Get custom travel plans tailored to your interests, budget, and timeline for the perfect Pakistani adventure.",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description: "Download your complete travel itinerary as a beautifully formatted PDF for offline access.",
  },  
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm uppercase tracking-widest mb-4 font-bold mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6 font-bold mb-4"
          >
            Your AI Travel Companion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            Plan your perfect trip to Pakistan with the help of our intelligent 
            AI assistant, designed to make travel planning effortless.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display text-foreground mb-3 font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
