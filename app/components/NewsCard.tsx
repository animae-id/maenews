"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Article } from "../types";
import { formatRelativeTime } from "../utils/dateUtils";
import Link from "next/link";

interface NewsCardProps {
  article: Article;
  index: number;
}

export function NewsCard({ article, index }: NewsCardProps) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      {/* Kontainer Gambar */}
      <Link href={`/article/${article.id}`} className="block group mb-3">
        <div className="relative overflow-hidden rounded-xl aspect-video">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x225/e2e8f0/64748b?text=Image`;
            }}
          />
        </div>
      </Link>
      
      {/* Konten Teks */}
      <div>
        <Link href={`/article/${article.id}`} className="block">
          <h3 className="font-bold text-gray-800 leading-tight line-clamp-3 transition-colors hover:text-primary">
            {article.title}
          </h3>
        </Link>
        <div className="flex items-center text-gray-500 text-xs mt-2">
          <Clock className="w-3.5 h-3.5 mr-1.5" />
          <span>{formatRelativeTime(article.publishedAt)}</span>
        </div>
      </div>
    </motion.div>
  );
}
