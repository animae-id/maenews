// app/types/index.ts

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  views: number;
}

export interface TrendingItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  publishedAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
}
