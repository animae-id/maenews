// app/lib/api.ts

import { Article, TrendingItem, Event } from "@/app/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/v1";

async function fetchAPI<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      cache: 'no-cache', 
    });

    if (!res.ok) {
      console.error(`API Error on ${endpoint}: ${res.statusText}`);
      return null;
    }
    return res.json() as Promise<T>;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null; 
  }
}

// FUNGSI BARU: untuk menambah view count
export const incrementArticleView = (slug: string) => {
  // Kita tidak perlu menunggu respons, jadi kita kirim dan lupakan (fire-and-forget)
  fetch(`${API_BASE_URL}/articles/${slug}/view`, {
    method: 'POST',
  });
};

// --- Fungsi untuk mengambil data ---

export const getAllArticles = () => fetchAPI<Article[]>('/articles');
export const getArticleBySlug = (slug: string) => fetchAPI<Article>(`/articles/${slug}`);
export const getArticlesByCategory = (categoryName: string) => fetchAPI<Article[]>(`/category/${categoryName}`);
export const getArticlesByTag = (tagName: string) => fetchAPI<Article[]>(`/tag/${tagName}`);
export const getTrendingItems = () => fetchAPI<TrendingItem[]>('/trending');
export const getUpcomingEvents = () => fetchAPI<Event[]>('/events/upcoming');