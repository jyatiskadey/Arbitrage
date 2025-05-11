import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Database } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#47e0ff]" />,
    title: "Fully Secured",
    description:
      "We safeguard your assets with advanced encryption, multi-factor authentication, and cold storage — ensuring top-level protection for your funds and data.",
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-[#47e0ff]" />,
    title: "Decentralized Exchange",
    description:
      "A decentralized exchange allows users to trade cryptocurrencies directly, without intermediaries — ensuring greater privacy, security, and full control over their assets.",
  },
  {
    icon: <Database className="w-10 h-10 text-[#47e0ff]" />,
    title: "Diverse Asset Options",
    description:
      "Trade a wide variety of cryptocurrencies — from popular coins like Bitcoin and Ethereum to emerging altcoins.",
  },
];

const WhyArbitrage = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0f002b] via-[#200239] to-[#003366] text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center z-10 relative">
        {/* Left Content */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="text-[#47e0ff]">Arbitrage Live</span>?
          </motion.h2>

          <motion.p
            className="text-gray-300 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We are proud to be an awesome team. They are truly amazing people
            with deep knowledge and expertise.
          </motion.p>

          <div className="mt-10 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-300 mt-1 max-w-md">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://img.freepik.com/free-vector/stylish-digital-currency-indian-rupee-futuristic-concept-background_1017-41275.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740"
            alt="Crypto"
            className="w-full max-w-sm mx-auto md:mx-0 rounded-xl shadow-lg border border-white/20"
          />
        </motion.div>
      </div>

      {/* Background wave lines */}
      <div className="absolute inset-0 bg-[url('/wave-lines.png')] bg-cover bg-center opacity-10 z-0 pointer-events-none" />
    </section>
  );
};

export default WhyArbitrage;
