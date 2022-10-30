import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Global from "./Styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./Components/ProductsList";
import useFetch from "./Hooks/useFetch";
import ProductDetails from "./Views/ProductDetails";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  const { data, isLoading, error } = useFetch("http://localhost:3001/albums");
  return (
    <div className="App">
      <Router>
        <Global />
        <Header />
        <Main>
          <MainRoutes data={data} />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
