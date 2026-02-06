import React from "react";
import { motion } from "framer-motion";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import linkdin from "../../assets/linkedin.png";
import githup from "../../assets/github.png";
import email from "../../assets/email.png";
import { Link } from "react-router";
import { FiDownload } from "react-icons/fi";

const icons = [facebook, whatsapp, linkdin, githup, email];

const Banner = () => {
  return (
    // parent div--
    <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 p-4 md:p-16 justify-center md:justify-between items-center overflow-hidden bg-black">
      {/* Right - My Details */}
      <div className="text-left dark:bg-slate-800/70 rounded-3xl p-5 w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* hello i am */}
          <h3
            className="mb-2 font-bold text-xl sm:text-2xl md:text-2xl tracking-wide
                     bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100
                     text-transparent bg-clip-text
                     animate-fade-slide hover:scale-y-200 hover:drop-shadow-lg transition-all duration-300"
          >
            Hello, I'm
          </h3>

          {/* md nikel ali */}
          <h1
            className="mb-3 font-extrabold text-3xl sm:text-4xl md:text-5xl
                     bg-gradient-to-r from-red-100 via-indigo-100 to-purple-200
                     text-transparent bg-clip-text tracking-wide uppercase
                     whitespace-nowrap border-r-0 border-indigo-500"
          >
            MD NIKEL ALI
          </h1>

          {/* fornted dev */}
          <h1 className="font-bold text-3xl animate-bounce">
            MERN Stack Developer | React.js Expert.
          </h1>

          {/* description */}
          <p className="font-semibold text-gray-200 dark:text-gray-100 leading-relaxed">
            I build modern, scalable, and high-performance web applications.
          </p>

          {/* Social Icons */}
          <motion.div className="flex gap-2 mt-2">
            {icons.map((icon, index) => (
              <motion.img
                title=""
                key={index}
                src={icon}
                alt=""
                className="rounded-full w-[25px] sm:w-[30px] cursor-pointer hover:scale-125 transition-transform"
              />
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center sm:justify-start">
            {/* Download CV Button */}
            <motion.a
              href="/path-to-your-cv.pdf"
              download
              className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download CV"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </motion.a>

            {/* Contact Me Button */}
            <Link to="/Contact" className="w-full sm:w-auto">
              <motion.button
                className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact Me"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Left - Image */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 500, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring", // smooth spring physics
          stiffness: 120, // bounce tightness
          damping: 15, // bounce damping
          mass: 1,
          delay: 0.3, // start delay for smoother entrance
        }}
        whileHover={{
          scale: 1.05, // small hover zoom
          rotate: 0, // subtle rotate
          transition: { type: "spring", stiffness: 20, damping: 1 },
        }}
      >
        <img
          src="https://i.ibb.co/MyZL6c1n/bannrer-img.jpg"
          alt=""
          className=" max-w-[450px] md:max-w-[400px] lg:max-w-[500px] rounded-4xl h-[350px] w-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
