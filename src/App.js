import "../src/App.css"
import Complete from "./pages/Complete";
import Upload from "./pages/Upload";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete/:image" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
