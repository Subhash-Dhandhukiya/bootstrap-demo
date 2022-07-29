import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Order from "./pages/Order";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
