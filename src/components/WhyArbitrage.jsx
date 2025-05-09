import React from "react";
import { motion } from "framer-motion";
// import phoneImage from "../assets/crypto-phone.png"; // Add your phone image here

const WhyArbitrage = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0f002b] via-[#200239] to-[#003366] text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center z-10 relative">
        {/* Left Content */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            WHY ?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#47e0ff] mb-4">
              ARBITRAGE LIVE
            </h3>

            <div className="inline-block bg-[#B01EFF] text-white font-semibold px-4 py-2 text-sm rounded mb-4">
              TRANSPARENCY & INTRANSIGENCE
            </div>

            <p className="text-gray-200 text-sm leading-relaxed max-w-xl mt-4">
              Each time a token exchange is recorded on the Binance blockchain via the platform, an audit trail is created to track the source of the tokens.
              <br /><br />
              This not only assists in enhancing security, preventing fraud in exchange-related enterprises, but also in establishing the validity of traded assets.
            </p>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            // src={phoneImage}
            src="https://img.freepik.com/free-vector/stylish-digital-currency-indian-rupee-futuristic-concept-background_1017-41275.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740"
            alt="Crypto Phone"
            className="w-full max-w-sm mx-auto md:mx-0 rounded-xl shadow-lg border border-white/20"
          />
        </motion.div>
      </div>

      {/* Background Elements (optional) */}
      <div className="absolute inset-0 bg-[url('/wave-lines.png')] bg-cover bg-center opacity-20 z-0 pointer-events-none" />
    </section>
  );
};

export default WhyArbitrage;
