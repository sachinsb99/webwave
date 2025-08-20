"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ContainerTextFlipDemo } from "@/components/container-text-flip";
import GlassBanner from "@/components/glass-banner";

// Declare particlesJS as a global function
// declare global {
//   interface Window {
//     particlesJS: (id: string, config: any) => void;
//   }
// }
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight text-white">
                Make{" "}
                <ContainerTextFlipDemo />
                websites regardless of your design experience.
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transform your business with custom web solutions that drive growth, 
                enhance user engagement, and deliver measurable results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg"
              >
                Get Started
                <span className="text-lg">→</span>
              </motion.button>

            </div>
          </motion.div>

          {/* Right Side - UI Demo */}
          <GlassBanner />
          
        </div>
      </div>
    </div>
  );
}