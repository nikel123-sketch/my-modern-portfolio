import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
const Overview = () => {
  
    return (
      <div className="bg-black">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-16 justify-center md:justify-between items-center overflow-hidden ">
          {/* Left Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 130,
              damping: 18,
              mass: 1,
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0, // subtle tilt effect
              y: -5, // slight lift
              transition: { type: "spring", stiffness: 100, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="https://i.ibb.co/MyZL6c1n/bannrer-img.jpg"
              alt="Banner"
              className="sm:max-w-[400px] md:max-w-[450px] lg:max-w-[400px] rounded-4xl shadow-xl shadow-purple-600  "
              initial={{ y: -10 }}
              animate={{ y: [0, 0, 10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 bg-white dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl mt-6"
          >
            {/* Animated Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-red-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text animate-bounce"
            >
              About Me
            </motion.h1>

            <h3 className="font-bold  text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-1">
              I’m MD NIKEL ALI
            </h3>

            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 font-bold text-xl sm:text-2xl lg:text-3xl "
            >
              Frontend Developer | MERN Stack Learner
            </motion.h2>

            <div className="shadow-xl shadow-purple-600 rounded-4xl ">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-green-600/10 p-4 rounded-xl transition hover:bg-green-900/20  ">
                  Hello! I’m MD NIKEL ALI, a passionate Frontend Developer |
                  MERN Stack Learner with a strong focus on React.js. I create
                  clean, modern, and responsive web applications with an
                  emphasis on UI/UX design. I have hands-on experience in
                  Frontend & Backend development, including React, TailwindCSS,
                  JavaScript, Node.js, MongoDB, Firebase, VS Code, and Figma. I
                  continuously explore new technologies and frameworks like
                  Next.js to enhance my skills and deliver impactful,
                  user-friendly projects.
                </p>
              </Tilt>
            </div>

            <Link to="/Contact">
              <motion.button
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg font-medium"
                whileHover={{ scale: 1.05 }}
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