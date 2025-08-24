"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ContainerTextFlipDemo } from "@/components/container-text-flip";
import GlassBanner from "@/components/glass-banner";

// Change your global declaration at the top
declare global {
  interface Window {
    particlesJS?: (id: string, config: any) => void; // Added ? to make it optional
  }
}

// Counter component for animated numbers
const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "" 
}: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const startCount = 0;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * (end - startCount) + startCount));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
      className="relative"
    >
      <motion.div 
        className="text-3xl lg:text-4xl font-bold text-white mb-1 relative"
        animate={inView ? { 
          textShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"] 
        } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        {prefix}{count}{suffix}
      </motion.div>
      
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : { width: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
};

export function BackgroundBeamsWithCollisionDemo() {
  useEffect(() => {
    // Function to load particles.js script
    const loadParticlesJS = () => {
      // Check if particlesJS is already loaded
      if (window.particlesJS) {
        initializeParticles();
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.async = true;
      
      // Initialize particles when script loads
      script.onload = () => {
        initializeParticles();
      };

      // Append script to head
      document.head.appendChild(script);
    };

    // Function to initialize particles
    const initializeParticles = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { 
              value: 60,
              density: {
                enable: true,
                value_area: 800
              }
            },
            size: { 
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            color: { 
              value: "#ffffff" 
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            line_linked: { 
              enable: true, 
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: { 
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };

    // Load the script
    loadParticlesJS();

    // Cleanup function
    return () => {
      // Optional: Clean up particles when component unmounts
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particles.js container */}
      <div 
        id="particles-js" 
        className="absolute inset-0 z-0"
        style={{
          background: 'black'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-16 lg:py-20">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8 lg:space-y-12"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm text-white/80 w-fit"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Professional Web Development
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Get {" "}
                <span className="inline-block">
                  <ContainerTextFlipDemo />
                </span>
                <br />
                <span className="text-gray-300">websites regardless</span>
                <br />
                <span className="text-gray-300">of your design experience.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl font-light"
              >
                We create stunning, high-performance websites that convert visitors into customers. 
                From concept to launch, we handle everything so you can focus on growing your business.
              </motion.p>
            </div>

            {/* Professional Stats with Animated Counters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative"
            >
              {/* Background decoration */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 pb-6 px-6 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
                <motion.div 
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  <AnimatedCounter end={150} suffix="+" duration={2500} />
                  <motion.div 
                    className="text-sm text-gray-400 font-medium mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Projects Delivered
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(34, 197, 94, 0.1)"
                  }}
                >
                  <AnimatedCounter end={99} suffix="%" duration={2800} />
                  <motion.div 
                    className="text-sm text-gray-400 font-medium mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    Client Retention
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(251, 191, 36, 0.1)"
                  }}
                >
                  <AnimatedCounter end={5} suffix="★" duration={2200} />
                  <motion.div 
                    className="text-sm text-gray-400 font-medium mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    Average Rating
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>Fast 48h Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>Mobile-First Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>SEO Optimized</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - UI Demo (Hidden on mobile and tablet) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden xl:block order-first lg:order-last"
          >
            <GlassBanner />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}