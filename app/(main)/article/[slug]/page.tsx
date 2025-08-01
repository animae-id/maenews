import { getArticleById } from "@/app/data/mockData";
import { ArticleDetail } from "@/app/components/article/ArticleDetail"; // Path impor disesuaikan
import { Sidebar } from "@/app/components/Sidebar";
import { trendingItems, upcomingEvents } from "@/app/data/mockData";
import { notFound } from "next/navigation";

// PERBAIKAN: Menggunakan pola destructuring yang paling umum dan stabil.
// Kita menerima 'params' sebagai prop, lalu mengambil 'slug' dari dalamnya.
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = getArticleById(slug);

  // Jika artikel tidak ditemukan, tampilkan halaman 404
  if (!article) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ArticleDetail article={article} />
        </div>
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
