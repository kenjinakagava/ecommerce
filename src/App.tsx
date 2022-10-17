import Header from "./Components/Header";
import Global from "./Styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Global />
        <Header></Header>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
