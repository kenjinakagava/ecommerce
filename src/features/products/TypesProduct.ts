type ProductsAPIResponse = {
  id?: number | string;
  title?: string;
  cover?: Array<string>;
  shortDescription?: string;
  description?: string;
  price?: number;
  featured?: boolean;
  paymentLink?: string;
  category?: string;
  data?: Array<ProductsAPIResponse> | null;
};

export default ProductsAPIResponse;
