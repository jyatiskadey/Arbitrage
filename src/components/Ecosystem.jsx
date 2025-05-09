import React from "react";
import { motion } from "framer-motion";

const leftItems = ["BLOCKCHAIN", "NFT", "TAXI", "METAVERSE"];
const rightItems = ["WALLET", "GAMING", "TRAVEL", "SHOPPING"];

const Ecosystem = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1e003e] via-[#270058] to-[#1e003e] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DXC ECOSYSTEM
        </motion.h2>

        {/* Ecosystem Grid */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          {/* Left Side */}
          <div className="flex flex-col space-y-4 mb-8 lg:mb-0 lg:mr-10">
            {leftItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-purple-600 font-semibold shadow-md"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* Coin Image */}
          <motion.div
            className="w-40 h-40 md:w-56 md:h-56 bg-[url('/coin.png')] bg-cover bg-center rounded-full border-4 border-yellow-400 shadow-lg mx-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Right Side */}
          <div className="flex flex-col space-y-4 lg:ml-10">
            {rightItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="px-4 py-2 rounded-md bg-gradient-to-l from-indigo-600 to-blue-500 font-semibold shadow-md"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
