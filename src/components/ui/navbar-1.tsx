"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  currentView?: string;
  onViewChange?: (view: string) => void;
}

const Navbar1 = ({ currentView = "home", onViewChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault()
    if (!onViewChange) return

    const lowerItem = item.toLowerCase()
    if (lowerItem === "home") {
      onViewChange("home")
    } else if (lowerItem === "projects") {
      onViewChange("projects")
    }
  }

  return (
    <div className="flex justify-center w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-8 py-3 bg-white border-b border-x border-[#e5e7eb] shadow-sm rounded-b-[14px] w-full max-w-7xl relative">
        <div className="flex items-center">
          <motion.div
            className="w-8 h-8 mr-6 cursor-pointer"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => handleNavClick(e, "Home")}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Pricing", "Docs", "Projects"].map((item) => {
              const isPageLink = item === "Home" || item === "Projects";
              const isActive = isPageLink && currentView === item.toLowerCase();
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative py-1"
                >
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-sm transition-colors font-semibold tracking-wide ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {["Home", "Pricing", "Docs", "Projects"].map((item, i) => {
                const isPageLink = item === "Home" || item === "Projects";
                const isActive = isPageLink && currentView === item.toLowerCase();
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <a
                      href="#"
                      className={`text-base font-semibold tracking-wide ${
                        isActive ? "text-blue-600" : "text-gray-900"
                      }`}
                      onClick={(e) => {
                        handleNavClick(e, item)
                        toggleMenu()
                      }}
                    >
                      {item}
                    </a>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors "
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
