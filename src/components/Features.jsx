import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Automated Arbitrage",
    description: "Leverages AI-driven bots for real-time arbitrage trading with minimal risk.",
  },
  {
    title: "Decentralized Governance",
    description: "Token holders can vote on key protocol changes and improvements.",
  },
  {
    title: "Instant Payouts",
    description: "Enjoy real-time earnings with transparent, on-chain transactions.",
  },
  {
    title: "Multi-Level Income",
    description: "Referral-based rewards that scale with your network.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const Features = () => {
  return (
    <section className="py-16 px-4 bg-[#F4F8FF]" id="features">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-[#001e3c]">Platform Features</h3>
        <p className="mt-2 text-[#607d8b]">What makes Arbitrage Live unique</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-[6px] border-[#4a90e2]"
          >
            <h4 className="text-xl font-semibold text-[#002f6c] mb-3">{feature.title}</h4>
            <p className="text-[#455a64] text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
