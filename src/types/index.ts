export type ProductsAPIResponse = {
  id?: number;
  title?: string;
  cover?: Array<string>;
  shortDescription?: string;
  description?: string;
  price?: number;
  featured?: boolean;
  paymentLink?: string;
  data?: Array<ProductsAPIResponse> | null;
};
