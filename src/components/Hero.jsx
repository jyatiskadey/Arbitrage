import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white bg-gradient-to-r from-[#0f002b] via-[#0b0b45] to-[#06235b] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#45f3ff]">
            ARBITRAGE LIVE
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Invest in knowledge before you invest in cryptocurrency.
        </motion.p>

        <motion.a
          href="https://arbitragelive.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#45f3ff] hover:bg-[#33cdd8] text-[#002f6c] font-semibold px-6 py-3 rounded-full transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          https://arbitragelive.net
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        className="mt-10 md:mt-0 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/gold-bitcoins-cryptocurrency-digital-finance-remixed_53876-124658.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740"
            alt="Bitcoin Stack"
            className="w-60 h-60 object-cover rounded-full border-4 border-[#45f3ff]"
          />
          <img
            src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740"
            alt="Bitcoin Globe"
            className="w-20 h-20 object-cover rounded-full border-2 border-white absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
          />
        </div>
      </motion.div>

      {/* Background Wave (Optional, for visual match) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/wave-lines.png')] bg-cover bg-center opacity-20 z-0"></div>
    </section>
  );
};

export default Hero;
