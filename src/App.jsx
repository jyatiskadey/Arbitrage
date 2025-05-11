import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
// import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import WhyArbitrage from "./components/WhyArbitrage";
// import DXCToken from "./components/ContactPage";

// Pages
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CryptoServices from "./components/Advantages";
import FaqPage from "./components/FaqPage";
import ContactPage from "./components/ContactPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="why">
        <WhyArbitrage />
      </div>
      <div id="services">
        <CryptoServices />
      </div>
      <div id="faq">
        <FaqPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}
