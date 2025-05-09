import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-4 text-white bg-gradient-to-br from-[#0f002d] via-[#2d004a] to-[#0f002d]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Minimum $1 to $1 lakh Maximum - 0.9% of return per day
        </motion.h3>

        {/* Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Info Block */}
          <div className="flex-1 space-y-4">
            <ul className="list-disc ml-5 text-sm md:text-base text-white">
              <li>You can start from Minimum $1 to $1 lakh</li>
              <li>Maximum at 0.9% of return per day</li>
            </ul>

            {/* Callout Box */}
            <div className="bg-[#1d3b7a] text-white text-lg font-semibold p-6 rounded-lg border border-white shadow-md">
              Minimum $1 to <br />
              $1 lakh Maximum - <br />
              0.9% of return per day
            </div>

            {/* Stake Examples */}
            <div className="text-sm text-white">
              <p className="font-bold mb-1">FOR EXAMPLE:</p>
              <table className="table-auto text-left">
                <thead>
                  <tr>
                    <th className="pr-4">STAKE</th>
                    <th>1 DXC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pr-4">7 DAYS</td>
                    <td>1.2 DXC</td>
                  </tr>
                  <tr>
                    <td className="pr-4">1 MONTH</td>
                    <td>2.3 DXC</td>
                  </tr>
                  <tr>
                    <td className="pr-4">6 MONTHS</td>
                    <td>14.9 DXC</td>
                  </tr>
                  <tr>
                    <td className="pr-4">12 MONTHS</td>
                    <td>36.0 DXC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Auto Compounding */}
            <div className="text-sm mt-4 text-white">
              <p>AUTO COMPOUNDING &gt; 0.9% DAILY RETURNS. 27% MONTHS</p>
              <p>NO-PACKAGE - NO LOCKING</p>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://img.freepik.com/premium-photo/3d-rendering-stock-indexes-virtual-space-economic-growth-recession_232104-2094.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740"
              alt="investment monitor"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
