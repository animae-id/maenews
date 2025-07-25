// app/components/ClientLayout.tsx

"use client"; // Komponen ini khusus untuk bagian client-side

import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useArticles } from "../hooks/useArticles";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { handleSearch } = useArticles();
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header onSearch={handleSearch} />
      <main className="container mx-auto lg:px-[150px] md:py-4">
        {children}
      </main>{" "}
      <Footer />
    </motion.div>
  );
}
