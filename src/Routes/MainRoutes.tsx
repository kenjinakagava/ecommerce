import { Route, Routes, Navigate } from "react-router-dom";
import { Response } from "../Interface";
import ProductsList from "../Components/ProductsList";
import ProductDetails from "../Views/ProductDetails";

type Props = {
  data: Array<Response> | null;
};

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList data={props.data} />}></Route>
      <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      {props.data?.map((data) => (
        <Route
          key={data.id}
          path={data.title}
          element={
            <ProductDetails
              title={data.title !== undefined ? data.title : ""}
              description={
                data.description !== undefined ? data.description : ""
              }
              cover={data.cover !== undefined ? data.cover : ""}
            />
          }
        ></Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;
