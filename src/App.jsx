// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TokenInfo from "./components/TokenInfo";
import Levels from "./components/Levels";
import Rewards from "./components/Rewards";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import WhyArbitrage from "./components/WhyArbitrage";
import LevelIncome from "./components/LevelIncome";
import DXCToken from "./components/DXCToken";

// Pages
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Advantages />
      <WhyArbitrage />
      <LevelIncome />
      {/* <Features /> */}
      <TokenInfo />
      <Rewards />
      <Levels />
      <DXCToken />
      <Ecosystem />
    </>
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
        <Footer />
      </div>
    </Router>
  );
}
