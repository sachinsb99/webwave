"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ContainerTextFlipDemo } from "@/components/container-text-flip";
import GlassBanner from "@/components/glass-banner";

// Declare particlesJS as a global function
declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
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
                Beautiful, fast and modern React UI library for building accessible
                and customizable web applications.
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

              {/* <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/80 hover:bg-gray-800/80 border border-gray-700 px-6 py-4 rounded-lg font-mono text-sm flex items-center gap-3 transition-colors cursor-pointer backdrop-blur-sm"
              >
                <span className="text-gray-400">$</span>
                <span className="text-white">npx heroui-cli@latest init</span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">📋</span>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right Side - UI Demo */}
          <GlassBanner />
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-blue-600/90 via-blue-500/90 to-cyan-500/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-blue-500/25 max-w-md w-full relative overflow-hidden border border-white/10"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

              <div className="relative z-10 space-y-6">
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Beautiful Components
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Pre-built with modern design
                  </p>
                </div>

                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">⚡</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Fast Performance</div>
                        <div className="text-blue-100 text-sm">Optimized for speed</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">🎨</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Customizable</div>
                        <div className="text-blue-100 text-sm">Tailor to your needs</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">♿</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Accessible</div>
                        <div className="text-blue-100 text-sm">Built for everyone</div>
                      </div>
                    </div>
                  </div>
                </div>

                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Explore Components
                </motion.button>
              </div>
            </motion.div>

            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-blue-500/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl shadow-blue-500/25 border border-white/10"
            >
              <div className="text-white text-2xl">🚀</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-cyan-500/90 backdrop-blur-sm rounded-xl p-3 shadow-xl shadow-cyan-500/25 border border-white/10"
            >
              <div className="text-white text-xl">✨</div>
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}