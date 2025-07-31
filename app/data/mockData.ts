// app/data/mockData.ts

import { Article, TrendingItem, Event } from "@/app/types";

// PERBAIKAN: Artikel unggulan dipisahkan ke dalam konstanta sendiri
export const featuredArticle: Article = {
  id: 0,
  title:
    "Attack on Titan Final Season: Pengumuman Tanggal Rilis Episode Terakhir",
  excerpt:
    "Studio WIT dan MAPPA mengumumkan jadwal resmi untuk episode final yang sangat dinanti-nanti oleh fans di seluruh dunia...",
  category: "Anime",
  author: "Admin",
  publishedAt: "2025-07-31T12:30:00Z",
  imageUrl: "https://placehold.co/1200x800/1E293B/FFFFFF?text=Attack+on+Titan",
  tags: ["Attack on Titan", "Final Season", "MAPPA"],
  featured: true,
};

// Data untuk artikel-artikel berita utama (tanpa artikel unggulan)
export const mockArticles: Article[] = [
  {
    id: 1,
    title: "Studio Ghibli Umumkan Proyek Anime Terbaru untuk 2026",
    excerpt:
      "Miyazaki kembali dengan karya masterpiece yang akan menggetarkan dunia anime internasional...",
    category: "Anime",
    author: "Redaksi AnimeFeed",
    publishedAt: "2025-07-30T10:30:00Z",
    imageUrl: "https://placehold.co/600x400/1E293B/FFFFFF?text=Ghibli+News",
    tags: ["Studio Ghibli", "Miyazaki", "Anime Movie"],
    featured: false,
  },
  {
    id: 2,
    title: "VTuber Kobo Kanaeru Pecahkan Rekor Subscribers Terbaru",
    excerpt:
      "Content creator Hololive Indonesia ini berhasil meraih milestone 3 juta subscribers...",
    category: "Content Creator",
    author: "Tim Reporter",
    publishedAt: "2025-07-29T08:45:00Z",
    imageUrl: "https://placehold.co/600x400/4C1D95/FFFFFF?text=Kobo+Kanaeru",
    tags: ["VTuber", "Hololive", "Kobo Kanaeru"],
    featured: false,
  },
  {
    id: 3,
    title: "Anime Festival Asia 2025: Lineup Guest Star Internasional",
    excerpt:
      "Event terbesar Asia Tenggara mengumumkan daftar bintang tamu yang akan hadir...",
    category: "Event",
    author: "Event Reporter",
    publishedAt: "2025-07-28T06:15:00Z",
    imageUrl: "https://placehold.co/600x400/047857/FFFFFF?text=AFA+2025",
    tags: ["AFA", "Event", "Convention"],
    featured: false,
  },
  {
    id: 4,
    title: "Chainsaw Man Season 2: Update Terbaru dari Studio MAPPA",
    excerpt:
      "Penggemar CSM akhirnya mendapat kabar baik tentang kelanjutan anime yang dinanti...",
    category: "Anime",
    author: "Anime News",
    publishedAt: "2025-07-27T04:20:00Z",
    imageUrl: "https://placehold.co/600x400/1E293B/FFFFFF?text=Chainsaw+Man",
    tags: ["Chainsaw Man", "MAPPA", "Season 2"],
    featured: false,
  },
  {
    id: 5,
    title: "Industri Gaming Indonesia: Perkembangan Game Berlatar Anime",
    excerpt:
      "Developer lokal semakin aktif mengembangkan game dengan art style anime...",
    category: "Gaming",
    author: "Gaming Desk",
    publishedAt: "2025-07-26T02:10:00Z",
    imageUrl: "https://placehold.co/600x400/F59E0B/000000?text=Indie+Game",
    tags: ["Gaming", "Indonesia", "Indie Game"],
    featured: false,
  },
  {
    id: 6,
    title: "Cosplay Competition World Championship 2025",
    excerpt:
      "Kompetisi cosplay terbesar dunia akan digelar di Tokyo dengan hadiah fantastis...",
    category: "Cosplay",
    author: "Cosplay News",
    publishedAt: "2025-07-25T20:30:00Z",
    imageUrl: "https://placehold.co/600x400/DB2777/FFFFFF?text=Cosplay+Comp",
    tags: ["Cosplay", "Competition", "World Championship"],
    featured: false,
  },
  // Data Tambahan
  {
    id: 7,
    title: "Game 'Genshin Impact' Rilis Update Besar Bertema Nusantara",
    excerpt:
      "Update terbaru dari Hoyoverse ini akan membawa pemain ke wilayah baru yang terinspirasi dari Indonesia...",
    category: "Gaming",
    author: "Gaming Desk",
    publishedAt: "2025-07-24T18:00:00Z",
    imageUrl: "https://placehold.co/600x400/F59E0B/000000?text=Genshin+Update",
    tags: ["Gaming", "Genshin Impact", "Update"],
    featured: false,
  },
  {
    id: 8,
    title: "Review Manga 'Kagurabachi': Hype yang Terbukti?",
    excerpt:
      "Manga pendatang baru yang viral ini akhirnya membuktikan kualitasnya di volume pertama...",
    category: "Anime",
    author: "Manga Reviewer",
    publishedAt: "2025-07-23T15:00:00Z",
    imageUrl: "https://placehold.co/600x400/1E293B/FFFFFF?text=Kagurabachi",
    tags: ["Manga", "Review", "Shonen Jump"],
    featured: false,
  },
  {
    id: 9,
    title: "Tips & Trik Menjadi Cosplayer Profesional dari Hakken",
    excerpt:
      "Cosplayer ternama Hakken membagikan pengalamannya dalam sesi wawancara eksklusif...",
    category: "Cosplay",
    author: "Cosplay News",
    publishedAt: "2025-07-22T11:00:00Z",
    imageUrl: "https://placehold.co/600x400/DB2777/FFFFFF?text=Hakken+Cosplay",
    tags: ["Cosplay", "Tips", "Hakken"],
    featured: false,
  },
  {
    id: 10,
    title: "Developer Game 'Toge Productions' Umumkan Proyek Baru",
    excerpt:
      "Setelah sukses dengan Coffee Talk, Toge Productions siap merilis game naratif baru...",
    category: "Gaming",
    author: "Gaming Desk",
    publishedAt: "2025-07-21T09:00:00Z",
    imageUrl:
      "https://placehold.co/600x400/F59E0B/000000?text=Toge+Productions",
    tags: ["Gaming", "Indonesia", "Indie Game"],
    featured: false,
  },
  {
    id: 11,
    title: "Film Live Action 'One Piece' Season 2 Mulai Syuting",
    excerpt:
      "Netflix mengonfirmasi bahwa proses syuting untuk season kedua telah dimulai di Afrika Selatan...",
    category: "Anime",
    author: "Netflix News",
    publishedAt: "2025-07-20T14:00:00Z",
    imageUrl: "https://placehold.co/600x400/1E293B/FFFFFF?text=OPLA+S2",
    tags: ["One Piece", "Live Action", "Netflix"],
    featured: false,
  },
  {
    id: 12,
    title: "Panduan Lengkap Menghadiri Comifuro untuk Pemula",
    excerpt:
      "Jangan sampai tersesat! Berikut adalah panduan lengkap untuk menikmati event Comifuro pertamamu...",
    category: "Event",
    author: "Event Reporter",
    publishedAt: "2025-07-19T12:00:00Z",
    imageUrl: "https://placehold.co/600x400/047857/FFFFFF?text=Comifuro+Guide",
    tags: ["Comifuro", "Event", "Guide"],
    featured: false,
  },
  {
    id: 13,
    title: "Kaela Kovalskia dari Hololive ID Menjadi Streamer Game Teratas",
    excerpt:
      "Streamer yang dikenal dengan grinding-nya ini berhasil mencapai puncak leaderboard di beberapa game...",
    category: "Content Creator",
    author: "Tim Reporter",
    publishedAt: "2025-07-18T16:00:00Z",
    imageUrl: "https://placehold.co/600x400/4C1D95/FFFFFF?text=Kaela+Kovalskia",
    tags: ["VTuber", "Hololive", "Gaming"],
    featured: false,
  },
  {
    id: 14,
    title: "Workshop Membuat Properti Cosplay dari EVA Foam",
    excerpt:
      "Komunitas cosplay lokal mengadakan workshop untuk pemula yang ingin belajar membuat properti sendiri...",
    category: "Cosplay",
    author: "Cosplay News",
    publishedAt: "2025-07-17T10:00:00Z",
    imageUrl:
      "https://placehold.co/600x400/DB2777/FFFFFF?text=Cosplay+Workshop",
    tags: ["Cosplay", "DIY", "Workshop"],
    featured: false,
  },
  {
    id: 15,
    title: "Valorant Champions Tour 2025: Tim Indonesia Lolos ke Final",
    excerpt:
      "Tim e-sport kebanggaan Indonesia berhasil mengamankan tempat di babak final VCT tingkat Asia Pasifik...",
    category: "Gaming",
    author: "eSports Desk",
    publishedAt: "2025-07-16T22:00:00Z",
    imageUrl: "https://placehold.co/600x400/F59E0B/000000?text=Valorant+VCT",
    tags: ["Gaming", "eSports", "Valorant"],
    featured: false,
  },
];

// Data untuk item yang sedang tren
export const trendingItems: TrendingItem[] = [
  {
    id: 1,
    title: "Demon Slayer Season 4 Dikonfirmasi",
    description: "Studio Ufotable mengumumkan...",
    category: "Anime",
    publishedAt: "2025-07-30T10:00:00Z",
  },
  {
    id: 2,
    title: "Content Creator Terbaru dari Hololive",
    description: "Generasi baru VTuber debut...",
    category: "Content Creator",
    publishedAt: "2025-07-29T08:00:00Z",
  },
  {
    id: 3,
    title: "Anime Festival Asia 2025",
    description: "Event terbesar tahun ini...",
    category: "Event",
    publishedAt: "2025-07-28T06:00:00Z",
  },
  {
    id: 4,
    title: "Update Besar Genshin Impact",
    description: "Wilayah baru terungkap...",
    category: "Gaming",
    publishedAt: "2025-07-27T18:00:00Z",
  },
];

// Data untuk acara yang akan datang
export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Comic Frontier 17",
    location: "ICE BSD, Tangerang",
    date: "2025-09-06",
    category: "Convention",
    description: "Event doujin dan indie creator terbesar",
    imageUrl: "https://placehold.co/400x300/7C2D12/FFFFFF?text=Comifuro",
  },
  {
    id: 2,
    title: "Indonesia Comic Con 2025",
    location: "Jakarta Convention Center",
    date: "2025-11-01",
    category: "Pop Culture",
    description: "Festival pop culture terbesar di Indonesia",
    imageUrl: "https://placehold.co/400x300/BE185D/FFFFFF?text=ICC+2025",
  },
  {
    id: 3,
    title: "Konser Anisong 'I Love Anisong'",
    location: "Balai Sarbini, Jakarta",
    date: "2025-12-20",
    category: "Konser",
    description: "Menampilkan artis-artis anisong ternama dari Jepang",
    imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Anisong+Concert",
  },
];
