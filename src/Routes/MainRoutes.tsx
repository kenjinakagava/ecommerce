import { Route, Routes, Navigate } from "react-router-dom";
import { APIData } from "../Interface";
import ProductsList from "../Components/ProductsList";
import ProductDetails from "../Views/ProductDetails";
import StoreView from "../Views/Store";

const MainRoutes = (props: APIData) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList data={props.data} />} />
      <Route path="/store" element={<StoreView data={props.data} />} />
      <Route path="/account" element={<div>placeholder for account</div>} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
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
              cover={data.cover !== undefined ? data.cover : ""}
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
