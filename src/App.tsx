import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Global from "./Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import useFetch from "./Hooks/useFetch";
import MainRoutes from "./Routes/MainRoutes";

{
  // implement blurhash later using isLoading, even if the loading is really quick i want to see how it works
}

function App() {
  const { data, isLoading, error } = useFetch("http://localhost:3001/albums");
  return (
    <Router>
      <Global />
      <Header />
      <main>
        <MainRoutes data={data} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
