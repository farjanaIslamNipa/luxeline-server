

export type TProduct = {
  title: string;
  category: string;
  images: string[];
  oldPrice?: number;
  currentPrice?: number;
  isFlashSale?: boolean;
  isTrending?: boolean;
  rating?: number;
  description: string;
  isDeleted?: boolean;
}

