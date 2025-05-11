import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0f002b] via-[#200239] to-[#003366] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE SECTION */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        {/* CONTACT FORM SECTION */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 md:p-10 shadow-lg backdrop-blur-md max-w-3xl mx-auto space-y-8 text-white text-base md:text-lg font-medium">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md bg-transparent border border-white/40 focus:outline-none text-white"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md bg-transparent border border-white/40 focus:outline-none text-white"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 rounded-md bg-transparent border border-white/40 focus:outline-none text-white"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full py-3 bg-gradient-to-r from-[#ff007a] to-[#f63b7b] text-white font-semibold rounded-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* CONTACT INFO SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-700/30 border border-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center"
          >
            <FaPhone className="text-4xl text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-white">+1 234 567 890</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-700/30 border border-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center"
          >
            <FaEnvelope className="text-4xl text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-white">contact@dxtoken.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-700/30 border border-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center"
          >
            <FaMapMarkerAlt className="text-4xl text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-white">123 DXC Token Street, City</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
