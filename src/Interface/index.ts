export type ProductsAPIResponse = {
  id?: number;
  title?: string;
  image?: string;
  cover?: string;
  shortDescription?: string;
  description?: string;
  price?: number;
};

export type APIData = {
  data: Array<ProductsAPIResponse> | null;
};
