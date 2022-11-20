import Header from "./features/ui/Header";
import Footer from "./features/ui/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import MainRoutes from "./routes/MainRoutes";
import Loading from "./views/Loading";
import Error from "./views/Error";
import { ProductsAPIResponse } from "./types";

// implement blurhash later using isLoading, even if the loading is really quick i want to see how it works

function App() {
  const { data, isLoading, error } = useFetch<ProductsAPIResponse>(
    "https://kenjinakagava.github.io/ecommerce-api/albums.json"
  );
  if (isLoading) return <Loading />;
  if (error) {
    console.log(error);
    return <Error />;
  }
  return (
    <Router>
      <Header />
      <main>
        <MainRoutes data={data} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
