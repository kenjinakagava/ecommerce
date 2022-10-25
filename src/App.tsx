import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Global from "./Styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./Components/ProductsList";
import { useState, useEffect } from "react";
import { CallApi } from "./Features/GetProductInfo";

function App() {
  const [test, setTest] = useState(null);
  useEffect(() => {
    CallApi();
  }, []);
  return (
    <div className="App">
      <Router>
        <Global />
        <Header></Header>
        <Main>
          <Routes>
            <Route path="/" element={<ProductsList />}></Route>
            <Route path="*" element={<div>404</div>}></Route>
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
