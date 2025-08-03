"use client";
import React from "react";
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ContainerTextFlipDemo } from "@/components/container-text-flip";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
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
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Get Started
                <span className="text-lg">→</span>
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 hover:bg-gray-800 border border-gray-700 px-6 py-4 rounded-lg font-mono text-sm flex items-center gap-3 transition-colors cursor-pointer"
              >
                <span className="text-gray-400">$</span>
                <span>npx heroui-cli@latest init</span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">📋</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - UI Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main floating card with blue theme */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-8 shadow-2xl shadow-blue-500/25 max-w-md w-full relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Beautiful Components
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Pre-built with modern design
                  </p>
                </div>

                {/* Feature items */}
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

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Explore Components
                </motion.button>
              </div>
            </motion.div>

            {/* Smaller floating elements */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-blue-500 rounded-2xl p-3 shadow-xl shadow-blue-500/25"
            >
              <div className="text-white text-2xl">🚀</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-cyan-500 rounded-xl p-3 shadow-xl shadow-cyan-500/25"
            >
              <div className="text-white text-xl">✨</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
