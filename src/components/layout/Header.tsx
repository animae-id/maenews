"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Data navigasi baru yang lebih sederhana
const navItems = [
  { id: "animeTerbaru", label: "Anime Terbaru" },
  { id: "contentCreator", label: "Content Creator" },
  { id: "event", label: "Event & Convention" },
  { id: "gaming", label: "Gaming" },
  { id: "cosplay", label: "Cosplay" },
  { id: "gallery", label: "Gallery Animae" },
];

export const Header = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-24 flex justify-between items-center h-20">
        {/* 1. Grup Kiri: Logo */}
        <div className="flex-1 flex justify-start">
          <div className="text-3xl font-bold text-white">Maenews</div>
        </div>

        {/* 2. Grup Tengah: Navigasi Desktop */}
        <nav
          className="hidden lg:flex flex-auto justify-center items-center gap-6"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {/* AnimatePresence ditambahkan di sini untuk memperbaiki bug */}
          <AnimatePresence>
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href="#"
                className="relative flex items-center text-white hover:text-tertiary h-full py-2"
                onHoverStart={() => setHoveredLink(item.id)}
              >
                <span className="text-sm font-semibold">{item.label}</span>
                {hoveredLink === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </motion.a>
            ))}
          </AnimatePresence>
        </nav>

        {/* 3. Grup Kanan: Pencarian & Ikon Mobile */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:flex items-center border border-gray-200 rounded-md bg-gray-50">
            <input
              type="text"
              placeholder="Cari Artikel..."
              className="px-4 py-2 w-48 focus:outline-none rounded-l-md text-sm bg-transparent"
            />
            <button className="pr-3">
              <FontAwesomeIcon
                icon={faSearch}
                className="h-4 w-4 text-gray-400"
              />
            </button>
          </div>
          <button
            className="lg:hidden text-white hover:text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile dengan Animasi */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="text-gray-700 font-semibold p-3 rounded-md hover:bg-gray-100 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center border border-gray-200 rounded-md bg-gray-50 mt-4 mx-2">
                <input
                  type="text"
                  placeholder="Mencari..."
                  className="px-4 py-2 w-full focus:outline-none rounded-l-md text-sm bg-transparent"
                />
                <button className="pr-3">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="h-4 w-4 text-gray-400"
                  />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
