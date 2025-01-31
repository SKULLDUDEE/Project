import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br mt-20  p-6">
      
      {/* Page Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }} // Slight bounce effect on hover
        className="text-center text-5xl md:text-6xl font-extrabold pt-12 pb-8 text-gray-900 dark:text-gray-100"
      >
        <motion.span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
          CONTACT
        </motion.span>{" "}
        <motion.span className="text-gray-900 dark:text-blue-300">
          US
        </motion.span>
      </motion.div>

      {/* Contact Section */}
      <div className="relative w-full max-w-6xl px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700">
        
        {/* Contact Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={assets.contact_img}
          alt="Contact"
          className="w-full max-w-md mx-auto rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500 hover:shadow-2xl hover:shadow-purple-500/40"
        />

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center space-y-6 p-6 rounded-lg bg-white/50 dark:bg-gray-700/60 backdrop-blur-md shadow-md border border-white/10 dark:border-gray-600 transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-purple-500/40"
        >
          <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
            📍 Address
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            No 103, Shrija Towers, Kolachalam Compound, Ballari-583101, KA.
          </p>

          <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
            📞 Phone
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            📱 <span className="font-semibold hover:text-purple-500">+91 9731263690</span>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            📱 <span className="font-semibold hover:text-purple-500">+91 9731263606</span>
          </p>

          <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
            📧 Email
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <strong>For Registration Queries:</strong>{" "}
            <span className="text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">
              business@businessxstream.com
            </span>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <strong>For Enquiries:</strong>{" "}
            <span className="text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">
              info@businessxstream.com
            </span>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <strong>Website Issues & Payments:</strong>{" "}
            <span className="text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">
              admin@businessxstream.com
            </span>
          </p>
        </motion.div>
      </div>

      {/* Inquiry Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-12 w-full max-w-4xl p-8 bg-white/50 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700"
      >
        <p className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">
          📝 Inquiry Form
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 text-lg rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 text-lg rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full p-3 text-lg rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 text-lg rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            type="submit"
          >
            Submit Inquiry
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
