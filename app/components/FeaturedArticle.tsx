"use client";

import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import { Article } from "../types"; // Pastikan path ini benar
import { formatRelativeTime } from "../utils/dateUtils"; // Pastikan path ini benar

interface LatestNewsArticleProps {
  article: Article;
}

export function LatestNewsArticle({ article }: LatestNewsArticleProps) {
  return (
    <motion.article
      className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
    >
      {/* Gambar Artikel */}
      <div className="flex-shrink-0 w-full sm:w-48 md:w-56">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-40 sm:h-full object-cover rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/400x300/e2e8f0/64748b?text=Image`;
          }}
        />
      </div>

      {/* Konten Teks Artikel */}
      <div className="flex flex-col items-start w-full">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 hover:text-primary leading-tight mb-2">
          <a href="#">{article.title}</a>
        </h2>

        {/* Meta Info (Author, Waktu) */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <User className="w-3.5 h-3.5 mr-1.5 text-red-500" />
            <span className="font-medium text-red-600">{article.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5" />
            <span>{formatRelativeTime(article.publishedAt)}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </motion.article>
  );
}
