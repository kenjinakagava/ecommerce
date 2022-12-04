type ProductsAPIResponse = {
  id?: number;
  title?: string;
  cover?: {
    small: string;
    medium: string;
    large: string;
  };
  shortDescription?: string;
  description?: string;
  price?: number;
  featured?: boolean;
  paymentLink?: string;
  category?: string;
  data?: ProductsAPIResponse[] | null;
};

export default ProductsAPIResponse;
