import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white bg-[#0b051f] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#45f3ff]">
            ARBITRAGE LIVE
          </h1>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold leading-snug text-white mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Invest in <span className="text-[#45f3ff]">knowledge</span> before<br />
          you invest in <span className="text-[#45f3ff]">cryptocurrency</span>.
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          This quote emphasizes the importance of understanding the cryptocurrency market, its risks, and dynamics before making financial commitments.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#whitepaper"
            className="bg-[#45f3ff] text-[#001f3f] font-semibold px-6 py-3 rounded-full hover:bg-[#32d1e8] transition"
          >
            SEE WHITEPAPER
          </a>
          <a
            href="#signup"
            className="bg-transparent border border-[#45f3ff] text-[#45f3ff] font-semibold px-6 py-3 rounded-full hover:bg-[#45f3ff] hover:text-[#001f3f] transition"
          >
            SIGN UP
          </a>
        </motion.div>
      </div>

      {/* Right-side Video */}
      <motion.div
        className="mt-10 md:mt-0 w-full md:w-[600px] z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="rounded-2xl overflow-hidden  shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2022/07/23/125214-732837293_tiny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* Optional Background Overlay (Matching design) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/wave-lines.png')] bg-cover bg-center opacity-10 z-0"></div>
    </section>
  );
};

export default Hero;
