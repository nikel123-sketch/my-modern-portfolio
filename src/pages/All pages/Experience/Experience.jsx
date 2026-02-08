import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Tilt from "react-parallax-tilt"; // <-- added Tilt import

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
    <section className="bg-black  px-4 sm:px-6 lg:px-8 p-6">
      {/* Experience & Education */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-1 border-b-2 border-cyan-900  animate-bounce "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Experience & Education 💻
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-2xl   p-1 ">
        {/* EXPERIENCE */}
        <div className="space-y-10 relative  shadow-2xl shadow-teal-400 p-6 rounded-3xl">
          <motion.h2
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-3xl font-bold flex items-center gap-3">
              <FaBriefcase className="text-indigo-500" /> Experience
            </p>
          </motion.h2>

          {experiences.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              glareEnable={false}
            >
              <motion.h2
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.0 }}
                className="relative bg-white/70 dark:bg-slate-800 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition shadow-amber-300"
              >
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -6 }}
                  className="relative bg-white/70 dark:bg-slate-800 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition shadow-violet-500"
                >
                  {/* side bar */}
                  <span className="absolute left-0 top-0 h-full w-2 bg-indigo-500 rounded-l-xl"></span>

                  {/* Frontend Developer */}
                  <motion.h2
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <p className="text-xl font-semibold">{item.role}</p>
                  </motion.h2>

                  {/* freelance and date */}
                  <div className="flex justify-between text-md mt-1">
                    <p className="text-indigo-400 font-bold">{item.company}</p>
                    <span className="text-gray-100 font-bold">{item.time}</span>
                  </div>

                  {/* des */}
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.h2>
            </Tilt>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="space-y-10 shadow-2xl shadow-teal-400 p-5 rounded-3xl">
          {/* EDUCATION */}
          <motion.h2
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-3xl font-bold flex items-center gap-3">
              <FaGraduationCap className="text-indigo-500" /> Education
            </p>
          </motion.h2>

          {education.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              glareEnable={false}
            >
              <motion.h2
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.0 }}
                className="relative bg-white/70 dark:bg-slate-800 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition shadow-amber-300"
              >
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -6 }}
                  className="relative bg-white/70 dark:bg-slate-800 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition shadow-violet-500"
                >
                  {/* side bar */}
                  <span className="absolute left-0 top-0 h-full w-2 bg-indigo-500 rounded-l-xl"></span>

                  <div className="flex justify-between items-center">
                    {/* SSC */}
                    <motion.h2
                      initial={{ opacity: 0, x: 300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <p className="text-xl font-semibold">{item.degree}</p>
                    </motion.h2>

                    {/* gpa */}
                    <span className=" bg-blue-200 text-black px-3 py-1 rounded-full font-bold">
                      GPA {item.GPA}
                    </span>
                  </div>

                  <p className="text-indigo-400 mt-1 font-bold">
                    {item.institute}
                  </p>

                  <div className="flex justify-between text-sm text-gray-200 mt-3">
                    <span>{item.group}</span>
                    <span>{item.year}</span>
                  </div>
                </motion.div>
              </motion.h2>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
