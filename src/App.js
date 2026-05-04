import "../src/App.css";
import Complete from "./pages/Complete";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import UpdateProfile from "./pages/UpdateProfile";
import Favourite from "./pages/Favourite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/Terms";
import ProtectedRoute from "./components/ProtectedRoute";
import DeletionStatus from "./pages/DeletetionStatus";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/deletion-status" element={<DeletionStatus />} />

      {/* protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<UpdateProfile />} />
        <Route path="/upload/:name?" element={<Upload />} />
        <Route path="/community" element={<Community />} />
        <Route path="/complete/:image" element={<Complete />} />
        <Route path="/challenge/:category" element={<Favourite />} />
      </Route>
    </Routes>
  );
};

export default App;
