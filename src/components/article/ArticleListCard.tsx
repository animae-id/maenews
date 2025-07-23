import Image from "next/image";
import type { LatestNewsArticle, HeroArticle } from "@/types";

interface ArticleListCardProps {
  article: LatestNewsArticle | HeroArticle;
}

export const ArticleListCard = ({ article }: ArticleListCardProps) => {
  return (
    <div className="flex gap-4 group cursor-pointer">
      <div className="w-1/3 flex-shrink-0">
        <div className="relative aspect-video rounded-md overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="w-2/3">
        <span className="text-xs font-semibold text-red-600 uppercase">
          {article.category}
        </span>
        <h4 className="font-bold text-gray-800 leading-tight mt-1 group-hover:text-red-600 transition-colors">
          {article.title}
        </h4>
        {"excerpt" in article && (
          <p className="text-xs text-gray-500 mt-2 hidden sm:block">
            {article.excerpt}
          </p>
        )}
      </div>
    </div>
  );
};
