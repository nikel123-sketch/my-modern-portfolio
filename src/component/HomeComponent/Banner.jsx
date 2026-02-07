import React from "react";
import { motion } from "framer-motion";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import linkdin from "../../assets/linkedin.png";
import githup from "../../assets/github.png";
import email from "../../assets/email.png";
import { Link } from "react-router";
import { FiDownload } from "react-icons/fi";

const icons = [
  {
    icon: facebook,
    link: "https://www.facebook.com/nowsad.hossan.nikil.rubel",
  },
  { icon: whatsapp, link: "" },
  { icon: linkdin, link: "https://www.linkedin.com/in/md-nikel-ali-34731a3ab" },
  { icon: githup, link: "https://github.com/nikel123-sketch" },
  { icon: email, link: "mailto:webdevelopernikel@gmail.com" },
];

const Banner = () => {
  return (
    // parent div--
    <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 p-4 md:p-5 justify-center md:justify-between items-center overflow-hidden bg-black">
      {/* Right - My Details */}
      <motion.div
        className="text-left dark:bg-slate-900/70 bg-white/20 backdrop-blur-md rounded-xl p-6 w-full md:w-1/2 shadow-lg shadow-violet-500"
        initial={{ opacity: 0, y: -200, scale: 1 }}
        whileInView={{ opacity: 1, y: 10, scale: 1 }}
        whileHover={{ scale: 1.03, y: 5 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hello I'm */}
        <motion.h3
          className="mb-2 font-semibold text-xl sm:text-2xl md:text-2xl tracking-wide
               text-white text-transparent bg-clip-text
               transition-all duration-300 hover:drop-shadow-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hello, I'm
        </motion.h3>

        {/* Name */}
        <motion.h1
          className="mb-3 font-extrabold text-3xl sm:text-4xl md:text-5xl
               bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300
               text-transparent bg-clip-text tracking-wide uppercase
               whitespace-nowrap transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          MD NIKEL ALI
        </motion.h1>

        {/* Role */}
        <motion.h1
          className="font-bold text-3xl text-gray-800 dark:text-gray-100 mt-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          Frontend / MERN Stack Developer
        </motion.h1>

        {/* Description */}
        <motion.p
          className="font-medium text-gray-900 dark:text-gray-400 leading-relaxed mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I build modern, scalable, and high-performance web applications with a
          strong focus on intuitive UI/UX and clean code.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-3 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${item.link}`}
            >
              <motion.img
                src={item.icon}
                alt=""
                className="rounded-full w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center sm:justify-start">
          {/* Download CV */}
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

          {/* Contact Me */}
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

      {/* state */}
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
        <div className=" stats stats-horizontal sm:stats-horizontal  lg:stats-vertical shadow   ">
          <div className="stat">
            <div className="stat-title">Total Projects</div>
            <div className="stat-value text-blue-600">7+</div>
            <div className="stat-desc">Completed</div>
          </div>

          <div className="stat">
            <div className="stat-title">Experience</div>
            <div className="stat-value text-purple-500">1+</div>
            <div className="stat-desc">Years Coding</div>
          </div>
          <div className="stat">
            <div className="stat-title">GitHub Repos</div>
            <div className="stat-value text-green-500">56+</div>
            <div className="stat-desc">Public Projects</div>
          </div>
        </div>
      </motion.div>

      {/* Left - Image */}
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
          className="max-w-[90%] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[400px] rounded-4xl shadow-xl shadow-purple-600  "
          initial={{ y: -10 }}
          animate={{ y: [0, 0, 10] }} // subtle floating animation
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
