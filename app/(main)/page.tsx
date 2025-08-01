"use client";

import { useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { Hero } from "../components/Hero";
import { Sidebar } from "../components/Sidebar";
import { trendingItems, upcomingEvents, mockArticles } from "../data/mockData";
import { EventBanner } from "../components/BannerEvent";
import { LatestNewsSection } from "../components/article/LatestNewsSection";
import { Loader2 } from "lucide-react";
import { Article } from "../types";
import { LatestNewsArticle } from "../components/article/LatestNewsArticle";

const SliderNews = dynamic(
  () => import("../components/slider/SliderNews").then((mod) => mod.SliderNews),
  {
    // Tampilkan placeholder sederhana saat komponen sedang dimuat
    loading: () => (
      <div className="h-96 w-full rounded-lg bg-gray-200 animate-pulse" />
    ),
    ssr: false, // Tidak perlu render komponen ini di server
  }
);

const ARTICLES_PER_PAGE = 5;

export default function HomePage() {
  // State untuk infinite scroll
  const [page, setPage] = useState(0);
  const [loadedArticles, setLoadedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // --- Data untuk bagian statis di atas ---
  const allNonFeatured = mockArticles.filter((a) => !a.featured);

  // 1. Berita Terbaru (5 Artikel)
  const latestArticles = allNonFeatured.slice(0, 5);
  // 2. Slider Rekomendasi
  const recommendationArticles = allNonFeatured.slice(5, 12);
  // 3. Berita Lanjutan (5 Artikel)
  const secondBatch = allNonFeatured.slice(12, 17);
  // 4. Slider Gaming
  const gamingArticles = mockArticles
    .filter((a) => a.category === "Gaming")
    .slice(0, 7);

  // Indeks awal untuk data yang akan di-load secara dinamis
  const dynamicLoadStartIndex = 17;

  // Fungsi untuk memuat artikel baru
  const loadMoreArticles = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    // Simulasi jeda jaringan untuk efek loading
    setTimeout(() => {
      const start = dynamicLoadStartIndex + page * ARTICLES_PER_PAGE;
      const end = start + ARTICLES_PER_PAGE;
      const newArticles = allNonFeatured.slice(start, end);

      if (newArticles.length > 0) {
        setLoadedArticles((prev) => [...prev, ...newArticles]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 1000); // Jeda 1 detik
  }, [page, isLoading, hasMore, allNonFeatured]);

  // Observer untuk mendeteksi scroll ke bawah
  const observer = useRef<IntersectionObserver | null>(null);
  const lastArticleElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreArticles();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, loadMoreArticles]
  );

  return (
    <>
      <Hero />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <EventBanner />
        </div>

        {/* Layout Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Konten Utama */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* 1. Berita Terbaru (dengan judul) */}
            <LatestNewsSection
              title="Berita Terbaru"
              articles={latestArticles}
            />

            {/* 2. Slider Rekomendasi */}
            <SliderNews articles={recommendationArticles} title="Rekomendasi" />

            {/* 3. Berita Lanjutan (tanpa judul) */}
            <LatestNewsSection articles={secondBatch} />

            {/* 4. Slider Gaming */}
            <SliderNews articles={gamingArticles} title="Gaming" />

            {/* 5 & 6. Daftar Artikel dengan Infinite Scroll */}
            <div className="flex flex-col gap-6">
              {loadedArticles.map((article, index) => {
                // Tambahkan ref ke elemen terakhir untuk memicu load more
                if (loadedArticles.length === index + 1) {
                  return (
                    <div ref={lastArticleElementRef} key={article.id}>
                      <LatestNewsArticle article={article} />
                    </div>
                  );
                }
                return <LatestNewsArticle key={article.id} article={article} />;
              })}
            </div>

            {/* Indikator Loading */}
            {isLoading && (
              <div className="flex justify-center items-center py-6">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <span className="ml-2 text-gray-600">
                  Memuat lebih banyak...
                </span>
              </div>
            )}
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
