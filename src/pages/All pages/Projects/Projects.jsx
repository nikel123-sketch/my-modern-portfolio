import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projectsData = [
  {
    name: "ZapShift",
    description:
      "Full-stack courier management system featuring role-based dashboards, real-time order tracking, and secure authentication.",
    tech: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "React Router",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
    ],
    clientRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Client",
    serverRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Server",
    livLink: "https://zap-shift-project-server.web.app",
    image: "https://i.ibb.co.com/yFHjTmCS/banner1.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section className="py-2 px-4 bg-gray-950 text-white">
      {/* Heading */}     
      <motion.h2
        className="text-4xl animate-bounce sm:text-5xl font-extrabold text-center mb-1 border-b-2 border-cyan-900 pb-2 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>


      {/* start */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto "
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="bg-gray-700 rounded-2xl border border-cyan-500/20 overflow-hidden group shadow-xl hover:shadow-cyan-500/20 transition">
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, x: 300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                        {project.name}
                      </h3>
                    </motion.h2>

                    <p className="text-gray-100 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition font-medium"
                    >
                      Client
                    </a>

                    <a
                      href={project.serverRepo}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition font-medium"
                    >
                      Server
                    </a>

                    <a
                      href={project.livLink}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition font-medium"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
