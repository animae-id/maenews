import { ArticleListCard } from "@/components/article/ArticleListCard";
import { HeroCard } from "@/components/article/HeroCard";
import Sidebar from "@/components/layout/Sidebar";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { heroArticles } from "@/data/HeroArticle";
import { latestNews } from "@/data/LatestNews";

export default function Home(): React.ReactElement {
  return (
    <>
      {/* Hero Section */}
      <div className="grid grid-cols-12 grid-rows-2 gap-4">
        {heroArticles.map((article) => (
          <HeroCard key={article.id} article={article} />
        ))}
      </div>

      {/* Latest News & Choice Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Kolom Kiri - Latest News */}
        <div className="lg:col-span-2">
          <SectionTitle>AniEvo Latest News</SectionTitle>
          <div className="space-y-6">
            {latestNews.map((article) => (
              <ArticleListCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </>
  );
}
