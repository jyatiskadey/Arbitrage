import React from "react";
import { motion } from "framer-motion";
import { FaCoins, FaLock } from "react-icons/fa";

const presenceItems = [
  "PANCAKESWAP",
  "METAMASK",
  "COINPAPRIKA",
  "TRUST WALLET",
  "COINGECKO TERMINAL",
  "BSC",
  "DEXTOOL",
  "DEX.GURU",
  "TOP 100 TOKEN",
  "POO COIN",
];

const DXCToken = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1e003e] via-[#270058] to-[#1e003e] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* PRESENCE SECTION */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DXC TOKEN PRESENCE
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
          {presenceItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-purple-700/30 border border-white/10 backdrop-blur-lg px-4 py-3 rounded-lg text-sm text-center hover:scale-105 transition-transform shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* FEATURES SECTION */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DXC TOKEN FEATURE
        </motion.h2>

        <div className="bg-white/10 border border-white/20 rounded-xl p-6 md:p-10 shadow-lg backdrop-blur-md max-w-3xl mx-auto space-y-4 text-white text-base md:text-lg font-medium">
          <p>✅ 100% Decentralized</p>
          <p>🔥 Liquidity Burner Forever</p>
          <p>💥 50% Burning on Each Staking Upto 90% Supply</p>
          <p><FaLock className="inline-block mr-2" /> Token Locked in DXSALE</p>
          <p>🚫 No Team / Creator Token</p>
        </div>

      </div>
    </section>
  );
};

export default DXCToken;
