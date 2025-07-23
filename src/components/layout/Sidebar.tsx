import { heroArticles } from "@/data/HeroArticle";
import { ArticleListCard } from "../article/ArticleListCard";
import { SectionTitle } from "../ui/SectionTitle";

const Sidebar = () => {
  return (
    <>
      <div>
        <SectionTitle>AniEvo Choice</SectionTitle>
        <div className="space-y-6">
          <ArticleListCard article={heroArticles[4]} />
        </div>
      </div>
      ;
    </>
  );
};

export default Sidebar;
