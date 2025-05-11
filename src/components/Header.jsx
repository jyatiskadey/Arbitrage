import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'; // Importing ScrollLink from react-scroll

const Header = () => {
  // Mobile menu toggle state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="w-full px-6 py-4 bg-[#002F6C] text-white flex justify-between items-center fixed top-0 left-0 z-50 shadow-lg mb-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo and Branding */}
      <Link to="/">
        <h1 className="text-2xl font-semibold tracking-wide cursor-pointer">Arbitrage Live</h1>
      </Link>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex space-x-8">
        <ScrollLink to="home" smooth={true} duration={500} className="text-lg font-medium hover:text-[#FFC107] transition-colors cursor-pointer">Home</ScrollLink>
        <ScrollLink to="why" smooth={true} duration={500} className="text-lg font-medium hover:text-[#FFC107] transition-colors cursor-pointer">Why Choose Us</ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} className="text-lg font-medium hover:text-[#FFC107] transition-colors cursor-pointer">Services</ScrollLink>
        <ScrollLink to="faq" smooth={true} duration={500} className="text-lg font-medium hover:text-[#FFC107] transition-colors cursor-pointer">FAQ</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} className="text-lg font-medium hover:text-[#FFC107] transition-colors cursor-pointer">Contact</ScrollLink>
      </nav>

      {/* Login Button */}
      <Link to="/login" className="ml-4 px-6 py-2 bg-[#FFC107] text-[#002F6C] font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300">
        Login
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white text-2xl focus:outline-none"
          aria-label="Open Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#002F6C] text-white py-4 px-6 space-y-6 z-50">
          <ScrollLink to="/" smooth={true} duration={500} className="block text-lg font-medium hover:text-[#FFC107]">Home</ScrollLink>
          <ScrollLink to="why" smooth={true} duration={500} className="block text-lg font-medium hover:text-[#FFC107]">Why Choose Us</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="block text-lg font-medium hover:text-[#FFC107]">Services</ScrollLink>
          <ScrollLink to="faq" smooth={true} duration={500} className="block text-lg font-medium hover:text-[#FFC107]">FAQ</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="block text-lg font-medium hover:text-[#FFC107]">Contact</ScrollLink>
          <Link to="/login" className="block mt-4 px-6 py-2 bg-[#FFC107] text-[#002F6C] font-semibold rounded-full text-center">
            Login
          </Link>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
