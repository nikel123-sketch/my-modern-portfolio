import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Freelance",
      time: "2024 – Present",
      desc: "Building scalable React applications using TailwindCSS with strong focus on UI/UX and performance optimization.",
    },
    {
      role: "Junior Full Stack Developer",
      company: "Personal Projects",
      time: "2023 – 2024",
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
    <section className="bg-black px-4 sm:px-6 lg:px-8 py-16 overflow-x-hidden">
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 border-b-2 border-cyan-900 pb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Experience & Education 💻
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* EXPERIENCE */}
        <div className="space-y-8 p-6 rounded-3xl shadow-xl shadow-teal-500/20">
          <h3 className="text-3xl font-bold flex items-center gap-3 text-white">
            <FaBriefcase className="text-indigo-500" />
            Experience
          </h3>

          {experiences.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.01}
              glareEnable={false}
            >
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-white/10 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="absolute left-0 top-0 h-full w-2 bg-indigo-500 rounded-l-xl"></span>

                <h4 className="text-xl font-semibold text-white">
                  {item.role}
                </h4>

                <div className="flex justify-between text-sm mt-1">
                  <span className="text-indigo-400 font-bold">
                    {item.company}
                  </span>
                  <span className="text-gray-300 font-bold">{item.time}</span>
                </div>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="space-y-8 p-6 rounded-3xl shadow-xl shadow-teal-500/20">
          <h3 className="text-3xl font-bold flex items-center gap-3 text-white">
            <FaGraduationCap className="text-indigo-500" />
            Education
          </h3>

          {education.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.01}
              glareEnable={false}
            >
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-white/10 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="absolute left-0 top-0 h-full w-2 bg-indigo-500 rounded-l-xl"></span>

                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h4>

                  <span className="bg-blue-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                    GPA {item.GPA}
                  </span>
                </div>

                <p className="text-indigo-400 mt-2 font-bold">
                  {item.institute}
                </p>

                <div className="flex justify-between text-sm text-gray-300 mt-3">
                  <span>{item.group}</span>
                  <span>{item.year}</span>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
