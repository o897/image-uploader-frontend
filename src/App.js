import "../src/App.css";
import Complete from "./pages/Complete";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload/:name?" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community" element={<Community />} />
        <Route path="/complete/:image" element={<Complete />} />
        <Route path="/challenge/:category" element={<Challenge />} />
      </Routes>
  );
};

export default App;
