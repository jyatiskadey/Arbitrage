import React from "react";
import { motion } from "framer-motion";

const royaltyLevels = [
  { level: "V1", income: "0.25$" },
  { level: "V2", income: "1.25$" },
  { level: "V3", income: "2.5$" },
  { level: "V4", income: "5$" },
  { level: "V5", income: "12.5$" },
  { level: "V6", income: "25$" },
  { level: "V7", income: "50$" },
  { level: "V8", income: "500$" },
  { level: "V9", income: "1250$" },
  { level: "V10", income: "2500$" },
  { level: "V11", income: "5,000$", highlight: true },
];

const Levels = () => {
  return (
    <section
      id="levels"
      className="py-16 px-4 bg-gradient-to-br from-[#0d022d] via-[#1c0b38] to-[#0d022d] text-white"
    >
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ROYALITY INCOME 100 DAYS
      </motion.h3>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
        {royaltyLevels.map((item, index) => (
          <motion.div
            key={index}
            className={`rounded-lg px-6 py-4 font-semibold shadow-md border border-white/20 
              ${item.highlight
                ? "bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white text-lg"
                : "bg-[#1e1a39] hover:scale-105 transition-transform duration-300"
              }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {item.level} - {item.income}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-300 italic">500$ SELF MANDATORY</p>
      </div>
    </section>
  );
};

export default Levels;
