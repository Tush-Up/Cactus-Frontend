import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import About from "./pages/About";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
}

export default App;
