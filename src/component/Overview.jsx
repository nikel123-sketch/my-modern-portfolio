import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
const Overview = () => {
  
    return (
      <div className="bg-black">
        <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-10 p-4 md:p-16 justify-center md:justify-between items-center overflow-hidden ">
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
              className="sm:max-w-[400px] md:max-w-[450px] lg:max-w-[400px] rounded-4xl bg-gradient-to-br from-cyan-300 via-purple-400 to-pink-900
                    p-1  "
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
            whileHover={{ scale: 1.02 }}
            className="w-full backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-purple-500/20 mt-6 border border-green-500 "
          >
            {/* Animated Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className=" font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white text-transparent bg-clip-text"
            >
              About Me
            </motion.h1>

            {/* name */}
            <motion.h1
              className=" font-extrabold text-3xl sm:text-4xl md:text-5xl
                           bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300
                           text-transparent bg-clip-text tracking-wide uppercase
                           transition-transform duration-500 hover:scale-105"
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              MD NIKEL ALI
            </motion.h1>

            {/* Role */}
            <motion.h1
              className="font-bold text-2xl text-white  "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              Frontend Developer | MERN Stack Learner
            </motion.h1>

            {/* Tilt Section */}
            <div className="shadow-md  shadow-sky-400 rounded-3xl">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.03}
                gyroscope={true}
                className="rounded-3xl"
              >
                <p className=" text-gray-300   p-5 rounded-3xl backdrop-blur-md border border-green-400 mt-3  hover:shadow-sm ">
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
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-4 font-bold text-xl sm:text-2xl lg:text-3xl"
              >
                <motion.button
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-500/40 font-medium transition duration-300"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </motion.h2>
            </Link>
          </motion.div>
        </div>
      </div>
    );
};

export default Overview;