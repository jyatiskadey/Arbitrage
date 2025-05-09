// App.jsx
import React from "react";
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

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <AboutSection />
      <Advantages/>
      <WhyArbitrage/>
      <LevelIncome/>
      {/* <Features /> */}
      <TokenInfo />
      <Rewards />
      <Levels />
      <DXCToken/>
      <Ecosystem />
      <Footer />
    </div>
  );
}
