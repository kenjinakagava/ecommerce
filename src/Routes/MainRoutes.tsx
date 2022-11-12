import { Route, Routes, Navigate } from "react-router-dom";
import { ProductsAPIResponse } from "../Interface";
import ProductsList from "../Views/Home/ProductsSwiper";
import ProductDetails from "../Views/ProductDetails";
import StoreView from "../Views/Store";
import Page404 from "../Views/404";

const MainRoutes = (props: ProductsAPIResponse) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList data={props.data} />} />
      <Route path="/store" element={<StoreView data={props.data} />} />
      <Route path="*" element={<Page404 />} />
      {props.data?.map((data) => (
        <Route
          key={data.id}
          path={data.title?.replaceAll(" ", "-")}
          element={
            <ProductDetails
              data={props.data}
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
