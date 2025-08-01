"use client";

import { motion } from "framer-motion";
import { Article } from "@/app/types";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { User, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Impor Link
import { Badge } from "../ui/badge";

interface ArticleDetailProps {
  article: Article;
}

// Fungsi helper untuk mengubah string menjadi format URL (slug)
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "") 
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "") 
    .replace(/-+$/, "");
};

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Kategori */}
      <Badge variant="secondary" className="mb-4 bg-orange-100 text-secondary">
        {article.category}
      </Badge>

      {/* Judul Artikel */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        {article.title}
      </h1>

      {/* Meta Info (Author & Tanggal) */}
      <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-gray-500 mb-6">
        <div className="flex items-center text-sm">
          <User className="w-4 h-4 mr-2 text-red-500" />
          <span className="font-medium text-red-600">{article.author}</span>
        </div>
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-2" />
          <span>
            {format(new Date(article.publishedAt), "d MMMM yyyy", {
              locale: id,
            })}
          </span>
        </div>
      </div>

      {/* Gambar Utama */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <Image
          src={article.imageUrl}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Konten Artikel */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>{article.excerpt}</p>
        <p>
          Ini adalah paragraf tambahan untuk meniru konten artikel yang lebih
          panjang. Di aplikasi sesungguhnya, Anda akan merender konten yang
          diambil dari CMS atau database di sini.
        </p>
      </div>

      {/* Tags */}
      <div className="mt-8 pt-6 border-t">
        <div className="flex items-center flex-wrap gap-2">
          <Tag className="w-4 h-4 text-gray-400" />
          {article.tags.map((tag) => (
            <Link key={tag} href={`/tag/${slugify(tag)}`}>
              <Badge
                variant="outline"
                className="cursor-pointer bg-primary text-white hover:bg-orange-100 hover:text-secondary transition-colors"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
