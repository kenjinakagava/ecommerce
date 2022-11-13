import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import useFetch from "./Hooks/useFetch";
import MainRoutes from "./Routes/MainRoutes";
import Loading from "./Views/Loading";
import Error from "./Views/Error";

// implement blurhash later using isLoading, even if the loading is really quick i want to see how it works

function App() {
  const { data, isLoading, error } = useFetch(
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
