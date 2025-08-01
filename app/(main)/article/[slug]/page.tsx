import { getArticleById, trendingItems, upcomingEvents } from "@/app/data/mockData";
import { ArticleDetail } from "@/app/components/article/ArticleDetail";
import { Sidebar } from "@/app/components/Sidebar";
import { notFound } from "next/navigation";

// ✅ Ini wajib agar route dianggap dynamic
export const dynamic = "force-dynamic";

// ✅ Gunakan built-in type props
interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticleById(params.slug);

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
          <Sidebar trendingItems={trendingItems} upcomingEvents={upcomingEvents} />
        </div>
      </div>
    </main>
  );
}
