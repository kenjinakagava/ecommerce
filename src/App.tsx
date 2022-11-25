import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Header from "./features/ui/Header";
import Footer from "./features/ui/Footer";
import ProductsAPIResponse from "./features/products/TypesProduct";
import Loading from "./views/Loading";
import Error from "./views/Error";
import ProductDetails from "./views/ProductDetails";
import Carousel from "./features/carousel/Carousel";
import Store from "./views/Store";
import Page404 from "./views/404";
import CategoriesNav from "./features/categories/CategoriesNav";

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
  console.log(uniqueCategories);
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Carousel data={apiRes} />} />
          <Route
            path="/store"
            element={
              <>
                <CategoriesNav id={1} categories={uniqueCategories} />
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
              path={`/store/${data.category}`}
              element={
                <>
                  <CategoriesNav
                    id={1}
                    categories={["anime", "rock", "jazz"]}
                  />
                  <Store
                    data={apiRes.filter(
                      (categoryData) => categoryData.category === data.category
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
  );
}

export default App;

// They are all being pushed in a big string when i use map like that.
