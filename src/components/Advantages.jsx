import React from "react";
import { motion } from "framer-motion";

const AdvantageCard = ({ number, title, description, delay }) => (
  <motion.div
    className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl border border-white/20 p-6 text-center shadow-lg backdrop-blur-md"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <h3 className="text-3xl font-bold text-white mb-2">{number}</h3>
    <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
    <p className="text-sm text-gray-300">{description}</p>
  </motion.div>
);

const Advantages = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0f002b] via-[#0b0b45] to-[#06235b] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ADVANTAGES
        </motion.h2>
        <div className="w-24 h-1 bg-white mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AdvantageCard
          number="01"
          title="Company Vision"
          description="Become the World's Most Promising Profitable Trading Platform"
          delay={0.2}
        />
        <AdvantageCard
          number="02"
          title="Company Mission"
          description="Fulfilled By The Fervent Attention of Billions of followers worldwide"
          delay={0.4}
        />
        <AdvantageCard
          number="03"
          title="Company Team"
          description="Specialists in Technology, Marketing, & Trading to achieve your dream"
          delay={0.6}
        />
      </div>

      {/* Optional background wave */}
      <div className="absolute inset-0 bg-[url('/wave-lines.png')] bg-cover bg-center opacity-20 pointer-events-none z-0" />
    </section>
  );
};

export default Advantages;
