import React from "react";
import { motion } from "framer-motion";
import {
  FaCoins,
  FaWallet,
  FaFileContract,
  FaExchangeAlt,
  FaCubes,
  FaRocket
} from "react-icons/fa";

const ServiceCard = ({ Icon, title, delay }) => (
  <motion.div
    className="bg-gradient-to-b from-[#1d1f45] to-[#1a1c3d] rounded-2xl p-6 text-center text-white shadow-xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="flex justify-center mb-4 text-cyan-300 text-4xl">
      <Icon />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
  </motion.div>
);

const CryptoServices = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0f002b] via-[#0b0b45] to-[#06235b] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cryptocurrency Development <span className="text-blue-500">Services</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cryptocurrency development services from Developcoins help businesses to fulfill their crypto related needs and generate high returns.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ServiceCard Icon={FaRocket} title="NFT Development" delay={0.2} />
        <ServiceCard Icon={FaCubes} title="DeFi Development" delay={0.3} />
        <ServiceCard Icon={FaExchangeAlt} title="Cryptocurrency Exchange Development" delay={0.4} />
        <ServiceCard Icon={FaWallet} title="Cryptocurrency Wallet Development" delay={0.5} />
        <ServiceCard Icon={FaCoins} title="ICO Development" delay={0.6} />
        <ServiceCard Icon={FaFileContract} title="Smart Contract Development" delay={0.7} />
      </div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full text-white font-semibold shadow-lg">
          SEE WHITEPAPER
        </button>
      </motion.div>

      <div className="absolute inset-0 bg-[url('/wave-lines.png')] bg-cover bg-center opacity-10 pointer-events-none z-0" />
    </section>
  );
};

export default CryptoServices;
