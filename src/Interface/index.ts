export type ProductsAPIResponse = {
  id?: number;
  title?: string;
  image?: string;
  cover?: string;
  shortDescription?: string;
  description?: string;
  price?: number;
  featured?: boolean;
};

export type APIData = {
  data: Array<ProductsAPIResponse> | null;
};
