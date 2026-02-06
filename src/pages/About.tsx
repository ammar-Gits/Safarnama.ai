import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Globe, 
  Sparkles, 
  Shield, 
  Users, 
  Heart 
} from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Deep knowledge of Pakistan's diverse regions, cultures, and hidden gems.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Cutting-edge AI technology for personalized, intelligent travel planning.",
  },
  {
    icon: Shield,
    title: "Trusted Information",
    description: "Up-to-date, verified information on destinations, safety, and logistics.",
  },
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "Built by travel enthusiasts who love sharing Pakistan's beauty.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6 font-bold mb-4"
            >
              Meet Your AI 
              <span className="text-primary"> Travel Agent</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Safarname.ai is Pakistan's first AI-powered travel planning assistant, 
              designed to make exploring the Land of the Pure easier, more personal, 
              and absolutely unforgettable.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/chat">
                  <Button variant="hero" size="xl" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Start a Conversation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent text-sm uppercase tracking-widest mb-4 font-bold mb-4">
                  Our Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6 font-bold mb-4">
                  Making Pakistan Accessible to the World
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Pakistan is home to some of the world's most breathtaking landscapes, 
                    from the towering peaks of the Karakoram to the ancient ruins of Mohenjo-daro. 
                    Yet, for many travelers, planning a trip here can seem daunting.
                  </p>
                  <p>
                    That's where Safarname.ai comes in. Our AI-powered travel agent combines 
                    deep local knowledge with cutting-edge technology to provide personalized, 
                    reliable travel advice at your fingertips.
                  </p>
                  <p>
                    Whether you're a solo adventurer, a family seeking culture, or a group 
                    of friends chasing thrills, Safarname.ai helps you discover the Pakistan 
                    that suits you best.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-5xl font-display text-foreground mb-2 font-bold mb-4">1000+</p>
                    <p className="text-muted-foreground">Happy Travelers Assisted</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent text-sm uppercase tracking-widest mb-4 font-bold mb-4"
              >
                What Sets Us Apart
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-display text-foreground font-bold mb-4"
              >
                Our Core Values
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display text-foreground mb-2 font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent text-sm uppercase tracking-widest mb-4 font-bold mb-4"
              >
                Simple Process
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-display text-foreground font-bold mb-4"
              >
                How Safarname.ai Works
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Ask Anything", description: "Chat or talk to our AI about your travel dreams, questions, or concerns about Pakistan." },
                { step: "02", title: "Get Personalized Plans", description: "Receive custom itineraries, recommendations, and tips tailored to your preferences." },
                { step: "03", title: "Download & Go", description: "Export your travel plan as a PDF and embark on your Pakistani adventure!" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display text-accent">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground mb-6 font-bold mb-4"
            >
              Ready to Explore Pakistan?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8"
            >
              Start a conversation with Safarname.ai and let us help you discover 
              the wonders of the Land of the Pure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/chat">
                <Button variant="hero" size="xl" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Start Planning Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
