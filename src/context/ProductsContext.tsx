import { createContext } from "react";
import ProductsAPIResponse from "../interfaces/TypesProduct";

export const ProductsContext = createContext<ProductsAPIResponse[] | null>(
  null
);
