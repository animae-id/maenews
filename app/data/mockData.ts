// app/data/mockData.ts

import { Article, TrendingItem, Event } from "@/app/types";

export const featuredArticle: Article = {
  id: "0",
  title: "Attack on Titan Final Season: Pengumuman Tanggal Rilis Episode Terakhir",
  excerpt: "Studio WIT dan MAPPA mengumumkan jadwal resmi untuk episode final...",
  description: "Deskripsi lengkap untuk Attack on Titan...",
  category: "Anime",
  author: "Admin",
  publishedAt: "2025-07-31T12:30:00Z",
  imageUrl: "https://placehold.co/1200x800/1E293B/FFFFFF?text=Attack+on+Titan",
  tags: ["Attack on Titan", "Final Season", "MAPPA"],
  featured: true,
  views: 999,
  slug: "attack-on-titan-final-season-pengumuman-tanggal-rilis-episode-terakhir",
};

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Studio Ghibli Umumkan Proyek Anime Terbaru untuk 2026",
    excerpt: "Miyazaki kembali dengan karya masterpiece...",
    description: "Deskripsi lengkap untuk Studio Ghibli...",
    category: "Anime",
    author: "Redaksi AnimeFeed",
    publishedAt: "2025-07-30T10:30:00Z",
    imageUrl: "https://placehold.co/600x400/1E293B/FFFFFF?text=Ghibli+News",
    tags: ["Studio Ghibli", "Miyazaki", "Anime Movie"],
    featured: false,
    views: 876,
    slug: "studio-ghibli-umumkan-proyek-anime-terbaru-untuk-2026",
  },
  {
    id: "2",
    title: "VTuber Kobo Kanaeru Pecahkan Rekor Subscribers Terbaru",
    excerpt: "Content creator Hololive Indonesia ini berhasil...",
    description: "Deskripsi lengkap untuk Kobo Kanaeru...",
    category: "Content Creator",
    author: "Tim Reporter",
    publishedAt: "2025-07-29T08:45:00Z",
    imageUrl: "https://placehold.co/600x400/4C1D95/FFFFFF?text=Kobo+Kanaeru",
    tags: ["VTuber", "Hololive", "Kobo Kanaeru"],
    featured: false,
    views: 1234,
    slug: "vtuber-kobo-kanaeru-pecahkan-rekor-subscribers-terbaru",
  },
  // ... (tambahkan artikel lain dengan id string)
];

export const trendingItems: TrendingItem[] = [
  {
    id: "trending-1",
    title: "Demon Slayer Season 4 Dikonfirmasi",
    description: "Studio Ufotable mengumumkan...",
    category: "Anime",
    publishedAt: "2025-07-30T10:00:00Z",
    slug: "demon-slayer-season-4-dikonfirmasi",
  },
  {
    id: "trending-2",
    title: "Content Creator Terbaru dari Hololive",
    description: "Generasi baru VTuber debut...",
    category: "Content Creator",
    publishedAt: "2025-07-29T08:00:00Z",
    slug: "content-creator-terbaru-dari-hololive",
  },
];

export const upcomingEvents: Event[] = [
  {
    id: "event-1",
    title: "Comic Frontier 17",
    location: "ICE BSD, Tangerang",
    date: "2025-09-06T10:00:00Z",
    category: "Convention",
    description: "Event doujin dan indie creator terbesar",
    imageUrl: "https://placehold.co/400x300/7C2D12/FFFFFF?text=Comifuro",
    slug: "comic-frontier-17",
  },
  {
    id: "event-2",
    title: "Indonesia Comic Con 2025",
    location: "Jakarta Convention Center",
    date: "2025-11-01T10:00:00Z",
    category: "Pop Culture",
    description: "Festival pop culture terbesar di Indonesia",
    imageUrl: "https://placehold.co/400x300/BE185D/FFFFFF?text=ICC+2025",
    slug: "indonesia-comic-con-2025",
  },
];
