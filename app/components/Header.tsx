"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { navItems } from "../data/Navigation";

// --- Sub-komponen yang gayanya disesuaikan dengan permintaan sebelumnya ---

const DesktopNav = () => (
  // Dihilangkan 'flex-1' dan 'justify-center' karena sekarang diatur oleh parent
  <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
    {navItems.map((item, index) => (
      <motion.a
        key={item.label}
        href={item.href}
        className="text-white hover:text-orange-200 font-medium transition-colors relative text-sm xl:text-base"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -2 }}
      >
        {item.label}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-200"
          style={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.a>
    ))}
  </div>
);

const MobileNav = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) onSearch(searchQuery);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="lg:hidden">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="sm"
        className="text-white hover:bg-orange-700 p-2"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-full w-full bg-gradient-to-r from-orange-600 to-orange-700 shadow-lg p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-orange-200 font-medium py-2 px-4 rounded-lg hover:bg-orange-700/50 transition-colors text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-3 mt-3 border-t border-orange-500">
                <div className="relative flex items-center">
                  <Input
                    type="search"
                    placeholder="Cari berita..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-white/90 border-none rounded-full pl-4 pr-12 text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={handleSearch}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-full w-8 h-8 p-0"
                  >
                    <Search className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Komponen Header Utama ---

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    if (searchQuery.trim()) onSearch(searchQuery);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <motion.header
      className="bg-gradient-to-r from-orange-600 to-orange-700 shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-[150px] py-3 sm:py-4">
        <motion.a
          href="/"
          className="text-xl sm:text-2xl font-bold text-white hover:text-orange-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MaeNews
        </motion.a>

        <DesktopNav />

        {/* Searchbox Desktop juga menjadi item flex direct */}
        <div className="hidden lg:flex relative w-40">
          <Input
            type="search"
            placeholder="Cari berita..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-white/90 border-none rounded-full pl-4 pr-12 text-sm"
          />
          <Button
            size="sm"
            onClick={handleSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-full w-8 h-8 p-0"
          >
            <Search className="w-4 h-4 text-white" />
          </Button>
        </div>

        {/* Navigasi Mobile */}
        <MobileNav onSearch={onSearch} />
      </div>
    </motion.header>
  );
}
