import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const Overview = () => {
    return (
      <div className="">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-16 justify-center md:justify-between items-center overflow-hidden">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="https://i.ibb.co/MyZL6c1n/bannrer-img.jpg"
              alt=""
              className=" rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 bg-white dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg"
          >
            <h1 className="mb-4 font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-red-400 via-indigo-400 to-red-600 text-transparent bg-clip-text">
              Overview
            </h1>

            <h2 className="font-semibold text-xl sm:text-2xl mb-3">Who I Am</h2>

            <h3 className="font-medium text-lg sm:text-xl mb-4 underline">
              Full-Stack Developer Focused on Performance & UX
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-green-900/20 p-4 rounded-xl hover:bg-gray-900 transition">
              I’m a Full-Stack Developer focused on creating clean, fast, and
              user-friendly web experiences. I work with React, Node.js, and
              Tailwind to build scalable applications that deliver strong
              performance and great user experience.
            </p>

            <Link to="/about">
              <motion.button
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
};

export default Overview;