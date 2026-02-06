import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-pakistan.jpg";
import k2 from "@/assets/destinations/k2.jpg";
import fairyMeadowsImage from "@/assets/destinations/passu.jpg";

const heroImages = [
  { src: heroImage, alt: "Beautiful landscape of Pakistan" },
  { src: k2, alt: "Hunza Valley, Pakistan" },
  { src: fairyMeadowsImage, alt: "Fairy Meadows, Pakistan" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.05,
  }),
  center: {
    x: "0%",
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
  }),
};

const HeroSection = () => {
  const [[currentIndex, direction], setCurrent] = useState<[number, number]>([
    0,
    1,
  ]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrent([index, index > currentIndex ? 1 : -1]);
    },
    [currentIndex]
  );

  const goToNext = useCallback(() => {
    setCurrent(([prev]) => [(prev + 1) % heroImages.length, 1]);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 10000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="pt-20 lg:pt-24 px-4 lg:px-8">
      <div className="relative w-full max-w-screen-2xl mx-auto overflow-hidden rounded-[4rem] min-h-[600px] lg:min-h-[720px] flex flex-col justify-center">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />
          </AnimatePresence>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1a1a1a]/75 pointer-events-none" />

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <span
                className={`block w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white"
                    : "border-2 border-white bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-12 lg:py-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#d47373] text-xs lg:text-sm uppercase tracking-[0.2em] font-bold mb-4"
          >
            Discover Pakistan
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            Every Journey
            <br />
            Tells a Story.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-base lg:text-lg max-w-lg leading-relaxed mb-8"
          >
            From majestic mountains to ancient civilizations. Let Safarnama.ai
            craft your perfect Pakistani adventure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/chat">
              <Button
                size="sm"
                className="gap-1.5 bg-[#c45c5c] hover:bg-[#b85050] text-white border-0 rounded-full px-5 py-2 text-sm font-medium h-9"
              >
                Start Planning
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
