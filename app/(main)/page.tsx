"use client";

import { Hero } from "../components/Hero";
// Nama file disesuaikan agar cocok dengan nama komponen untuk kejelasan
import { Sidebar } from "../components/Sidebar";
import { NewsSlider } from "../components/NewsSlider";
import { useArticles } from "../hooks/useArticles";
import {
  featuredArticle,
  trendingItems,
  upcomingEvents,
} from "../data/mockData";
import { LatestNewsArticle } from "../components/FeaturedArticle";

export default function HomePage() {
  // Mengambil semua artikel untuk digunakan di slider
  const { articles } = useArticles();

  return (
    <>
      <Hero />

      <main className="container mx-auto px-4 py-8">
        {/* Layout Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Konten Utama */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <LatestNewsArticle article={featuredArticle} />
            <NewsSlider articles={articles} title={"Rekomendasi"} />
          </div>

          {/* Kolom Kanan: Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              trendingItems={trendingItems}
              upcomingEvents={upcomingEvents}
            />
          </div>
        </div>
      </main>
    </>
  );
}
