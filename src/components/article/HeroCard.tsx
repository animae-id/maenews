import { HeroCardProps } from "@/types";
import Image from "next/image";

export const HeroCard = ({ article }: HeroCardProps) => {
  return (
    <div
      className={`${article.gridClass} relative rounded-lg overflow-hidden group cursor-pointer`}
    >
      <Image
        src={article.imageUrl}
        alt={article.title}
        fill
        style={{ objectFit: "cover" }}
        className="transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <span className="text-xs font-bold uppercase px-2 py-1 rounded mb-2 inline-block bg-red-600">
          {article.category}
        </span>
        <h3 className="text-xl lg:text-2xl font-bold leading-tight drop-shadow-lg">
          {article.title}
        </h3>
      </div>
    </div>
  );
};
