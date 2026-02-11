import "../src/App.css";
import Complete from "./pages/Complete";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Community from "./pages/Community";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community" element={<Community />} />
        <Route path="/complete/:image" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
