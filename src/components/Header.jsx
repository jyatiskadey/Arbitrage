import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      className="w-full px-4 py-4 bg-[#002F6C] text-white flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to='/'>
      <h1 className="text-xl font-bold">Arbitrage Live</h1>

      </Link>

      <nav className="space-x-6 hidden md:block">
        <a href="#about" className="hover:text-[#FFC107]">About</a>
        <a href="#token" className="hover:text-[#FFC107]">Token</a>
        <a href="#levels" className="hover:text-[#FFC107]">Levels</a>
        <a href="#rewards" className="hover:text-[#FFC107]">Rewards</a>
        <a href="#ecosystem" className="hover:text-[#FFC107]">Ecosystem</a>
      </nav>

      <Link to="/login" className="ml-4 px-4 py-2 bg-[#FFC107] text-[#002F6C] font-semibold rounded hover:bg-yellow-400">
        Login
      </Link>
    </motion.header>
  );
};

export default Header;
