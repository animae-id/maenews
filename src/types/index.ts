export interface Article {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface HeroArticle extends Article {
  gridClass: string;
}

export interface LatestNewsArticle extends Article {
  excerpt: string;
}

export interface HeroCardProps {
  article: HeroArticle;
}
