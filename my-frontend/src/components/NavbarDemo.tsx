"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import ThemeToggler from "@/components/Header/ThemeToggler";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Enhanced NavbarDemo component
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`fixed top-4 inset-x-0 max-w-7xl mx-auto z-50 px-4 sm:px-6 ${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <nav className="relative rounded-full 
                             bg-white/80 dark:bg-black/80 backdrop-blur-md
                             border border-gray-200/50 dark:border-gray-700/50 
                             shadow-lg shadow-black/5 dark:shadow-white/5
                             ring-1 ring-black/5 dark:ring-white/10
                             flex items-center justify-between px-6 py-1
                             before:absolute before:inset-0 before:rounded-full 
                             before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent 
                             dark:before:from-transparent dark:before:via-white/5 dark:before:to-transparent
                             before:opacity-50 before:pointer-events-none">

          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center space-x-2 group">
              <img
                src="/images/logo/HeaderTW2.png"
                alt="The Web Wave Logo"
                className="w-40 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>

          {/* Theme Toggler */}
          <div className="z-10">
            <ThemeToggler />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <nav className="relative rounded-2xl 
                             bg-white/80 dark:bg-black/80 backdrop-blur-md
                             border border-gray-200/50 dark:border-gray-700/50 
                             shadow-lg shadow-black/5 dark:shadow-white/5
                             ring-1 ring-black/5 dark:ring-white/10
                             px-4 py-3">

          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/" className="flex items-center space-x-2 group">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xs">L</span>
                </div>
                <span className="text-lg font-bold text-black dark:text-white">
                  Logo
                </span>
              </a>
            </motion.div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-3">
              <ThemeToggler />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-5 h-5 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    className="w-5 h-0.5 bg-black dark:bg-white block transition-all origin-center"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-5 h-0.5 bg-black dark:bg-white block mt-1 transition-all"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    className="w-5 h-0.5 bg-black dark:bg-white block mt-1 transition-all origin-center"
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 border-t border-gray-200/50 dark:border-gray-700/50 mt-3">
              <div className="space-y-1">
                <MobileMenuItem href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </MobileMenuItem>
                <MobileMenuItem href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                  Products
                </MobileMenuItem>
                <MobileMenuItem href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  Pricing
                </MobileMenuItem>
                <MobileMenuItem href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </MobileMenuItem>
                <MobileMenuItem href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </MobileMenuItem>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50 mt-4">
                <motion.a
                  href="/get-started"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2.5 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </div>
  );
}

// Mobile Menu Item Component
const MobileMenuItem = ({
  children,
  href,
  onClick
}: {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
}) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ x: 4 }}
      className="block px-3 py-2.5 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-200 font-medium"
    >
      {children}
    </motion.a>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className={`relative ${className || ''}`}>
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl overflow-hidden 
                         border border-gray-200/60 dark:border-gray-700/60 
                         shadow-2xl shadow-black/5 dark:shadow-white/5
                         ring-1 ring-black/5 dark:ring-white/10"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      onMouseLeave={() => setActive(null)}
      className="flex items-center space-x-1"
    >
      {children}
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2 group">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-lg group-hover:shadow-xl transition-shadow duration-300"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white 
                 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 
                 px-2 py-1 rounded-md"
    >
      {children}
    </a>
  );
};