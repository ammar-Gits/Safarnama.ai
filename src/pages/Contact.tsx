import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "hello@safarpak.ai",
    href: "mailto:hello@safarpak.ai",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Islamabad, Pakistan",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+92 300 1234567",
    href: "tel:+923001234567",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-sm uppercase tracking-widest mb-4 font-bold"
              >
                Get In Touch
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground font-bold mb-4"
              >
                Contact <span className="text-primary">Us</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Have questions about traveling to Pakistan? We&apos;d love to hear from you. 
                Send us a message and we&apos;ll respond as soon as possible.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-semibold">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your travel plans or questions..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="gap-2 w-full md:w-auto">
                    <MessageCircle className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                {contactInfo.map((item, index) => {
                  const Content = (
                    <>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </>
                  );
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex gap-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
                        >
                          {Content}
                        </a>
                      ) : (
                        <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-card">
                          {Content}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
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
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4"
            >
              Prefer to Chat?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8"
            >
              Start a conversation with our AI travel agent and get instant answers 
              to your Pakistan travel questions.
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

export default Contact;
