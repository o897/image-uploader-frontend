import "../src/App.css"
import Complete from "./pages/Complete";
import Upload from "./pages/Upload";
import Home from "./pages/Home"
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/complete/:image" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
