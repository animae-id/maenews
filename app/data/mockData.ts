// app/data/mockData.ts

import { Article, TrendingItem, Event } from "@/app/types";

// Data untuk artikel-artikel berita utama
export const mockArticles: Article[] = [
  {
    id: 1,
    title: "Studio Ghibli Umumkan Proyek Anime Terbaru untuk 2024",
    excerpt: "Miyazaki kembali dengan karya masterpiece yang akan menggetarkan dunia anime internasional...",
    category: "Anime",
    author: "Redaksi AnimeFeed",
    publishedAt: "2024-07-15T10:30:00Z",
    imageUrl: "https://placehold.co/600x400/1E293B/FFFFFF?text=Ghibli+News",
    tags: ["Studio Ghibli", "Miyazaki", "Anime Movie"],
    featured: false,
  },
  {
    id: 2,
    title: "VTuber Kobo Kanaeru Pecahkan Rekor Subscribers Terbaru",
    excerpt: "Content creator Hololive Indonesia ini berhasil meraih milestone 2 juta subscribers...",
    category: "Content Creator",
    author: "Tim Reporter",
    publishedAt: "2024-07-15T08:45:00Z",
    imageUrl: "https://placehold.co/600x400/4C1D95/FFFFFF?text=Kobo+Kanaeru",
    tags: ["VTuber", "Hololive", "Kobo Kanaeru"],
    featured: false,
  },
  {
    id: 3,
    title: "Anime Festival Asia 2024: Lineup Guest Star Internasional",
    excerpt: "Event terbesar Asia Tenggara mengumumkan daftar bintang tamu yang akan hadir...",
    category: "Event",
    author: "Event Reporter",
    publishedAt: "2024-07-15T06:15:00Z",
    imageUrl: "https://placehold.co/600x400/047857/FFFFFF?text=AFA+2024",
    tags: ["AFA", "Event", "Convention"],
    featured: false,
  },
  {
    id: 4,
    title: "Chainsaw Man Season 2: Update Terbaru dari Studio MAPPA",
    excerpt: "Penggemar CSM akhirnya mendapat kabar baik tentang kelanjutan anime yang dinanti...",
    category: "Anime",
    author: "Anime News",
    publishedAt: "2024-07-15T04:20:00Z",
    imageUrl: "https://placehold.co/600x400/1E293B/FFFFFF?text=Chainsaw+Man",
    tags: ["Chainsaw Man", "MAPPA", "Season 2"],
    featured: false,
  },
  {
    id: 5,
    title: "Industri Gaming Indonesia: Perkembangan Game Berlatar Anime",
    excerpt: "Developer lokal semakin aktif mengembangkan game dengan art style anime...",
    category: "Gaming",
    author: "Gaming Desk",
    publishedAt: "2024-07-15T02:10:00Z",
    imageUrl: "https://placehold.co/600x400/F59E0B/000000?text=Indie+Game",
    tags: ["Gaming", "Indonesia", "Indie Game"],
    featured: false,
  },
  {
    id: 6,
    title: "Cosplay Competition World Championship 2024",
    excerpt: "Kompetisi cosplay terbesar dunia akan digelar di Tokyo dengan hadiah fantastis...",
    category: "Cosplay",
    author: "Cosplay News",
    publishedAt: "2024-07-14T20:30:00Z",
    imageUrl: "https://placehold.co/600x400/DB2777/FFFFFF?text=Cosplay+Comp",
    tags: ["Cosplay", "Competition", "World Championship"],
    featured: false,
  },
];

export const featuredArticle: Article = {
  id: 0,
  title: "Attack on Titan Final Season: Pengumuman Tanggal Rilis Episode Terakhir",
  excerpt: "Studio WIT dan MAPPA mengumumkan jadwal resmi untuk episode final yang sangat dinanti-nanti oleh fans di seluruh dunia...",
  category: "Anime",
  author: "Admin",
  publishedAt: "2024-07-15T12:30:00Z",
  imageUrl: "https://placehold.co/1200x800/1E293B/FFFFFF?text=Attack+on+Titan",
  tags: ["Attack on Titan", "Final Season", "MAPPA"],
  featured: true,
};

// Data untuk item yang sedang tren
export const trendingItems: TrendingItem[] = [
  {
    id: 1,
    title: "Demon Slayer Season 4 Dikonfirmasi",
    description: "Studio Ufotable mengumumkan...",
    category: "Anime",
    publishedAt: "2024-07-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Content Creator Terbaru dari Hololive",
    description: "Generasi baru VTuber debut...",
    category: "Content Creator",
    publishedAt: "2024-07-15T08:00:00Z",
  },
  {
    id: 3,
    title: "Anime Festival Asia 2024",
    description: "Event terbesar tahun ini...",
    category: "Event",
    publishedAt: "2024-07-15T06:00:00Z",
  },
];

// Data untuk acara yang akan datang
export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Comic Frontier 16",
    location: "Jakarta Convention Center",
    date: "2024-08-10",
    category: "Convention",
    description: "Event doujin dan indie creator terbesar",
    imageUrl: "https://placehold.co/400x300/7C2D12/FFFFFF?text=Comifuro",
  },
  {
    id: 2,
    title: "Popcon Asia 2024",
    location: "Surabaya, 15-17 Agustus",
    date: "2024-08-15",
    category: "Pop Culture",
    description: "Festival pop culture terbesar di Jawa Timur",
    imageUrl: "https://placehold.co/400x300/BE185D/FFFFFF?text=Popcon+Asia",
  },
];
