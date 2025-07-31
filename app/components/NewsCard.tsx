"use client";

import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import { Article } from "../types";
import { formatRelativeTime } from "../utils/dateUtils";
import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  article: Article;
  index: number;
}

export function NewsCard({ article, index }: NewsCardProps) {
  return (
    <motion.div
      className="flex flex-col h-full" // Menambahkan h-full agar kartu mengisi ruang
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      {/* Kontainer Gambar */}
      <Link href={`/article/${article.id}`} className="block group mb-3">
        <div className="relative overflow-hidden rounded-xl aspect-video">
          <Image
            width={400}
            height={225}
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Konten Teks */}
      <div className="flex flex-col flex-grow">
        <Link href={`/article/${article.id}`} className="block">
          {/* PERBAIKAN: Menggabungkan h3 dan motion.h2 menjadi satu elemen motion.h3 */}
          <motion.h3
            className="font-bold text-gray-800 leading-tight line-clamp-3 transition-colors hover:text-secondary text-base md:text-md mb-2"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {article.title}
          </motion.h3>
        </Link>
         <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1.5 text-red-500" />
              <span className="font-bold text-red-600">{article.category}</span>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                <span>{formatRelativeTime(article.publishedAt)}</span>
              </div>
            </div>
          </div>
      </div>
    </motion.div>
  );
}
