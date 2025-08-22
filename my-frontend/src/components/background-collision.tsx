"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ContainerTextFlipDemo } from "@/components/container-text-flip";
import GlassBanner from "@/components/glass-banner";

// Change your global declaration at the top
declare global {
  interface Window {
    particlesJS?: (id: string, config: any) => void; // Added ? to make it optional
  }
}

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* CTA Buttons */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 transition-all duration-300 shadow-lg shadow-blue-600/25"
              >
                Start Your Project
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="transition-transform duration-200"
                >
                  →
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm"
              >
                View Our Work
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="transition-transform duration-200"
                >
                  ↗
                </motion.span>
              </motion.button>
            </motion.div> */}

            {/* Professional Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-gray-400 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-sm text-gray-400 font-medium">Client Retention</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">5★</div>
                <div className="text-sm text-gray-400 font-medium">Average Rating</div>
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

          {/* Right Side - UI Demo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-first lg:order-last"
          >
            <GlassBanner />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}