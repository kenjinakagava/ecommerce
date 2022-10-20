import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Global from "./Styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Global />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
