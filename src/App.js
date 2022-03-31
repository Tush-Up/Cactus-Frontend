import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import VerifyEmail from "./components/VerifyEmail";

//Pages
import About from "./pages/About";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isLogin: false,
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Auth user={user} setUser={setUser} />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/users/verify-email/:token" element={<VerifyEmail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
