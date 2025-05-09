import React from "react";
import { motion } from "framer-motion";
import { SiBinance } from "react-icons/si";

const tokenInfo = [
  { title: "NAME", value: "Dxc" },
  { title: "SUPPLY", value: "2 Cr." },
  {
    title: "BUILT ON",
    value: (
      <div className="flex items-center justify-center gap-2">
        <SiBinance className="text-yellow-400 text-xl" />
        <span>BEP 20</span>
      </div>
    ),
  },
];

const TokenInfo = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0d022d] via-[#1c0b38] to-[#0d022d] py-16 px-4 text-white">
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        DXC TOKEN INFO
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        {tokenInfo.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1a39] rounded-xl p-6 border border-white/20 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg text-gray-300 mb-2">{item.title}</h4>
            <div className="text-2xl font-bold">{item.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm md:text-base">
        <p className="uppercase text-gray-400 tracking-widest mb-2">Smart Contract</p>
        <code className="break-all text-[13px] text-blue-300">
          0X45E882831C9F815D013FF18FC20501366FF1A9DF
        </code>
      </div>
    </section>
  );
};

export default TokenInfo;
