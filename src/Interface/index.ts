export type ProductsAPIResponse = {
  id?: number;
  title?: string;
  image?: string;
  cover?: string;
  shortDescription?: string;
  description?: string;
  price?: number;
  featured?: boolean;
  paymentLink?: string;
};

export type APIData = {
  data: Array<ProductsAPIResponse> | null;
};
