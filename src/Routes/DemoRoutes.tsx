import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "../Views/Error";
import Loading from "../Views/Loading";

const DemoRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/errordemo" element={<Error />} />
        <Route path="/loadingdemo" element={<Loading />} />
      </Routes>
    </Router>
  );
};
export default DemoRoutes;
