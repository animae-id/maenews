// app/types/index.ts

// Tipe dasar untuk artikel berita standar
export interface Article {
  id: number | string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
}

// Tipe untuk item yang sedang tren (untuk sidebar, dll.)
export interface TrendingItem {
  id: number;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
}

// Tipe untuk acara mendatang
export interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
}
