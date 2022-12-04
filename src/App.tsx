import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ProductsContext } from "./context/ProductsContext";
import Carousel from "./features/carousel/Carousel";
import CategoriesNav from "./features/categories/CategoriesNav";
import Footer from "./features/ui/Footer";
import Header from "./features/ui/Header";
import useFetch from "./hooks/useFetch";
import ProductsAPIResponse from "./interfaces/TypesProduct";
import Page404 from "./views/404";
import Error from "./views/Error";
import Loading from "./views/Loading";
import ProductDetails from "./views/ProductDetails";
import Store from "./views/Store";

function App() {
  const { apiRes, isLoading, error } = useFetch<ProductsAPIResponse>(
    "https://kenjinakagava.github.io/ecommerce-api/albums.json"
  );
  if (isLoading === true) return <Loading />;
  if (error !== null) {
    console.log(error);
    return <Error />;
  }
  const categories = apiRes?.map((data) =>
    data.category !== undefined ? data.category : ""
  );
  const uniqueCategories = [...new Set(categories)];
  return (
    <ProductsContext.Provider value={apiRes}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route
              path="/store"
              element={
                <>
                  <CategoriesNav categories={uniqueCategories} />
                  <Store data={apiRes} />
                </>
              }
            />
            <Route path="*" element={<Page404 />} />
            {apiRes?.map((data) => (
              <Route
                key={data.id}
                path={data.title?.replaceAll(" ", "-")}
                element={
                  <ProductDetails
                    title={data.title}
                    description={data.description}
                    cover={data.cover}
                    price={data.price}
                    paymentLink={data.paymentLink}
                  />
                }
              />
            ))}
            {apiRes?.map((data) => (
              <Route
                key={data.id}
                path={`/store/${data.category?.replaceAll(" ", "-")}`}
                element={
                  <>
                    <CategoriesNav categories={uniqueCategories} />
                    <Store
                      data={apiRes.filter(
                        (categoryData) =>
                          categoryData.category === data.category
                      )}
                    />
                  </>
                }
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
