import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaFigma,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" />,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-500 w-6 h-6" />,
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare className="text-yellow-400 w-6 h-6" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white w-6 h-6" />,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500 w-6 h-6" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-300 w-6 h-6" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600 w-6 h-6" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-400 w-6 h-6" />,
        },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-pink-500 w-6 h-6" /> },
        {
          name: "Responsive Design",
          icon: <FaTools className="text-blue-400 w-6 h-6" />,
        },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "VS Code",
          icon: <FaGitAlt className="text-blue-600 w-6 h-6" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-400 w-6 h-6" />,
        },
      ],
    },
  ];
  

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="py-6 bg-black text-white px-6 md:px-16">
      {/* title */}
      <motion.h2
        className="text-4xl animate-bounce sm:text-5xl font-extrabold text-center mb-12 border-b-2 border-cyan-900 pb-2 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>
      
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-black/90 border border-cyan-500 rounded-xl p-6 shadow-lg"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,255,255,0.4)",
              }}
            >
              {/* title name */}
              <motion.h4
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-4 font-bold text-xl sm:text-2xl lg:text-3xl "
              >
                <p className="text-2xl font-semibold mb-4">
                  {category.title}
                </p>
              </motion.h4>

              <motion.h2
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 bg-cyan-700/20 px-3 py-2 rounded-full hover:bg-cyan-700 transition-colors duration-300"
                      variants={skillVariants}
                    >
                      {skill.icon}
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.h2>
            </motion.div>
          ))}
        </motion.div>
      
    </section>
  );
};

export default MySkills;

