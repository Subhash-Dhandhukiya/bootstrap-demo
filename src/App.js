import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Order from "./pages/Order";

const App = () => {
  //   let component;

  //   switch (window?.location?.pathname) {
  //     case "/":
  //       component = <Home />;
  //       break;
  //     case "/company":
  //       component = <Company />;
  //       break;
  //     case "/contact":
  //       component = <Contact />;
  //       break;
  //     case "/faq":
  //       component = <FAQ />;
  //       break;
  //     case "/order":
  //       component = <Order />;
  //       break;
  //   }

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/company" element={<Company />} />
          <Route to="/contact" element={<Contact />} />
          <Route to="/faq" element={<FAQ />} />
          <Route to="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
