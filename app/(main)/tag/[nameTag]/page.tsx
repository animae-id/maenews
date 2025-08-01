import { getArticlesByTag } from "@/app/data/mockData";
import { LatestNewsArticle } from "@/app/components/article/LatestNewsArticle";
import { Sidebar } from "@/app/components/Sidebar";
import { trendingItems, upcomingEvents } from "@/app/data/mockData";
import { Hash } from "lucide-react";

// Tipe untuk params yang diterima oleh halaman
interface PageProps {
  params: {
    nameTag: string; // 'nameTag' harus sama dengan nama folder dinamis
  };
}

// Fungsi untuk mengubah slug URL (mis: "shonen-jump") menjadi judul ("Shonen Jump")
function formatTagTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Halaman ini adalah Server Component
export default async function TagPage({ params }: PageProps) {
  // Mengambil dan mendekode nama tag dari URL
  const tagSlug = decodeURIComponent(params.nameTag);
  const tagNameForFilter = tagSlug.replace(/-/g, " ");

  const articles = getArticlesByTag(tagNameForFilter);
  const title = formatTagTitle(tagSlug);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Konten Artikel Tag */}
        <div className="lg:col-span-2">
          <section>
            {/* Judul Halaman Tag */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b">
              <Hash className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">Tag: {title}</h1>
            </div>

            {/* Daftar Artikel atau Pesan Jika Kosong */}
            {articles.length > 0 ? (
              <div className="flex flex-col gap-6">
                {articles.map((article) => (
                  <LatestNewsArticle key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-700">Oops!</h2>
                <p className="text-gray-500 mt-2">
                  Belum ada artikel dengan tag {title}.
                </p>
              </div>
            )}
          </section>
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
