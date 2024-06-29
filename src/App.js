import Complete from "./pages/Complete";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete/:imgId" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
