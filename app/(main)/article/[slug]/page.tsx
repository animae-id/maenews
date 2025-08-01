import { getArticleById } from "@/app/data/mockData";
import { ArticleDetail } from "@/app/components/article/ArticleDetail";
import { Sidebar } from "@/app/components/Sidebar";
import { trendingItems, upcomingEvents } from "@/app/data/mockData";
import { notFound } from "next/navigation";

// Tipe untuk params yang diterima oleh halaman
interface PageProps {
  params: {
    slug: string;
  };
}

// Halaman ini adalah Server Component, bagus untuk SEO
// PERBAIKAN: Mendestrukturisasi 'slug' langsung dari 'params'
export default async function ArticlePage({ params: { slug } }: PageProps) {
  // Mengambil artikel berdasarkan 'slug' (yang merupakan ID) dari URL
  const article = getArticleById(slug);

  // Jika artikel tidak ditemukan, tampilkan halaman 404
  if (!article) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Konten Artikel */}
        <div className="lg:col-span-2">
          <ArticleDetail article={article} />
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
  );
}
