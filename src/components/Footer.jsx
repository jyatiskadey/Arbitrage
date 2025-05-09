import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Arbitrage Live. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
