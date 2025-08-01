"use client";

import { motion } from "framer-motion";
import { Article } from "@/app/types";
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { User, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface ArticleDetailProps {
  article: Article;
}

// Fungsi helper untuk mengubah string menjadi format URL (slug)
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
        {article.category}
      </Badge>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        {article.title}
      </h1>

      <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-gray-500 mb-6">
        <div className="flex items-center text-sm">
          <User className="w-4 h-4 mr-2 text-red-500" />
          <span className="font-medium text-red-600">{article.author}</span>
        </div>
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-2" />
          <span>{format(new Date(article.publishedAt), "d MMMM yyyy", { locale: id })}</span>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        {/* PERBAIKAN: Menggunakan prop 'fill' dan 'className' untuk object-fit */}
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p>{article.excerpt}</p>
        <p>Ini adalah paragraf tambahan untuk meniru konten artikel yang lebih panjang.</p>
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="flex items-center flex-wrap gap-2">
          <Tag className="w-4 h-4 text-gray-400" />
          {article.tags.map((tag) => (
            <Link key={tag} href={`/tag/${slugify(tag)}`}>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-gray-100 transition-colors"
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
