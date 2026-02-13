import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Freelance",
      time: "2025 – Present",
      desc: "Building scalable React applications using TailwindCSS with strong focus on UI/UX and performance optimization.",
    },
    {
      role: "Junior Full Stack Developer",
      company: "Personal Projects",
      time: "2025 – 2026",
      desc: "Developed MERN stack apps with authentication systems, dashboards, REST APIs and role-based access.",
    },
  ];

  const education = [
    {
      degree: "SSC",
      institute: "Atawri Model Pilot High School",
      year: "2016",
      GPA: "4.33",
      group: "Science",
    },
    {
      degree: "HSC",
      institute: "Mirza Golam Hafiz Degree College",
      year: "2018",
      GPA: "3.20",
      group: "Science",
    },
  ];

  return (
    <section className="relative bg-black px-6 lg:px-20 py-20 overflow-hidden text-white">
      {/* 🔥 Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 120, -120, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Experience & Education
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* EXPERIENCE */}
        <div className="relative">
          <h3 className="text-3xl font-bold flex items-center gap-3 mb-12">
            <FaBriefcase className="text-indigo-400" />
            Experience
          </h3>

          <div className="relative border-l border-indigo-500/30 pl-8 space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[38px] top-2 w-4 h-4 bg-indigo-400 rounded-full shadow-lg shadow-indigo-500/50"></span>

                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/30 transition duration-300">
                    <motion.h2
                      initial={{ opacity: 0, x: -130 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <h4 className="text-xl font-semibold">{item.role}</h4>
                    </motion.h2>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-indigo-400 font-semibold">
                        {item.company}
                      </span>
                      <span className="text-gray-400">{item.time}</span>
                    </div>

                    

                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="relative">
          <h3 className="text-3xl font-bold flex items-center gap-3 mb-12">
            <FaGraduationCap className="text-cyan-400" />
            Education
          </h3>

          <div className="relative border-l border-cyan-500/30 pl-8 space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[38px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></span>

                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-300">
                    <div className="flex justify-between items-center">
                      <motion.h2
                        initial={{ opacity: 0, x: -130 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <h4 className="text-xl font-semibold">{item.degree}</h4>
                      </motion.h2>

                      <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        GPA {item.GPA}
                      </span>
                    </div>

                    <p className="text-cyan-400 mt-2 font-semibold">
                      {item.institute}
                    </p>

                    <div className="flex justify-between text-sm text-gray-400 mt-3">
                      <span>{item.group}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
