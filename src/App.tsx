import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Global from "./Styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSwiper from "./Components/ProductSwiper";

function App() {
  return (
    <div className="App">
      <Router>
        <Global />
        <Header></Header>
        <Main>
          <Routes>
            <Route path="/" element={<ProductSwiper />}></Route>
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
