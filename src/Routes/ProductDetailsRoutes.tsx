import { Route } from "react-router-dom";
import ProductDetails from "../Views/ProductDetails";
import { APIData } from "../Interface";

const ProductDetailsRoutes = (props: APIData) => {
  return props.data?.map((data) => (
    <Route
      key={data.id}
      path={data.title?.replaceAll(" ", "-")}
      element={
        <ProductDetails
          title={data.title !== undefined ? data.title : ""}
          description={data.description !== undefined ? data.description : ""}
          cover={data.cover !== undefined ? data.cover : ""}
          price={data.price}
        />
      }
    />
  ));
};

export default ProductDetailsRoutes;

// why was type guarding necessary?
