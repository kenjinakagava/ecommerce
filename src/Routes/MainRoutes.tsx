import { Route, Routes } from "react-router-dom";
import { ProductsAPIResponse } from "../types";
import ProductsList from "../features/carousel/Carousel";
import ProductDetails from "../views/ProductDetails";
import StoreView from "../views/Store";
import Page404 from "../views/404";

const MainRoutes = (props: ProductsAPIResponse) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList data={props.data} />} />
      <Route path="/store" element={<StoreView data={props.data} />} />
      <Route path="/test" element={<ProductDetails data={props.data} />} />
      <Route path="*" element={<Page404 />} />
      {props.data?.map((data) => (
        <Route
          key={data.id}
          path={data.title?.replaceAll(" ", "-")}
          element={
            <ProductDetails
              title={data.title !== undefined ? data.title : ""}
              description={
                data.description !== undefined ? data.description : ""
              }
              cover={data.cover !== undefined ? data.cover : [""]}
              price={data.price}
              paymentLink={data.paymentLink}
            />
          }
        ></Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;
