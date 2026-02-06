import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; 

const projectsData = [
  {
    name: "ZapShift",
    description:
      "Courier management system to track deliveries, manage riders, and automate notifications.",
    tech: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    clientRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Client",
    serverRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Server",
    livLink: "https://zap-shift-project-server.web.app",
    image: "https://i.ibb.co.com/yFHjTmCS/banner1.png",
  },
  {
    name: "ZapShift",
    description:
      "Courier management system to track deliveries, manage riders, and automate notifications.",
    tech: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    clientRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Client",
    serverRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Server",
    livLink: "https://zap-shift-project-server.web.app",
    image: "https://i.ibb.co.com/yFHjTmCS/banner1.png",
  },
  {
    name: "ZapShift",
    description:
      "Courier management system to track deliveries, manage riders, and automate notifications.",
    tech: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    clientRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Client",
    serverRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Server",
    livLink: "https://zap-shift-project-server.web.app",
    image: "https://i.ibb.co.com/yFHjTmCS/banner1.png",
  },
  {
    name: "ZapShift",
    description:
      "Courier management system to track deliveries, manage riders, and automate notifications.",
    tech: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    clientRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Client",
    serverRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Server",
    livLink: "https://zap-shift-project-server.web.app",
    image: "https://i.ibb.co.com/yFHjTmCS/banner1.png",
  },
  {
    name: "ZapShift",
    description:
      "Courier management system to track deliveries, manage riders, and automate notifications.",
    tech: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    clientRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Client",
    serverRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Server",
    livLink: "https://zap-shift-project-server.web.app",
    image: "https://i.ibb.co.com/yFHjTmCS/banner1.png",
  },
  {
    name: "ZapShift",
    description:
      "Courier management system to track deliveries, manage riders, and automate notifications.",
    tech: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    clientRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Client",
    serverRepo:
      "https://github.com/nikel123-sketch/Zap-Shift-Final-Project-Server",
    livLink: "https://zap-shift-project-server.web.app",
    image: "https://i.ibb.co.com/yFHjTmCS/banner1.png",
  },
  
  
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const Projects = () => {
  return (
    <div className="py-6 px-4 sm:px-6 md:px-8 bg-gray-950 text-white">
      {/* My Projects */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 border-b-2 border-cyan-900 pb-2 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Projects 💻
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.10}
              glareColor="#00FFFF"
              glarePosition="all"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">

                <div>
                  {/* project name */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* project description */}
                  <p className="text-gray-300 mb-3">{project.description}</p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      // -------------------
                      <span
                        key={i}
                        className="bg-cyan-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-cyan-500 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.clientRepo && (
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      Client Repo
                    </a>
                  )}
                  {project.serverRepo && (
                    <a
                      href={project.serverRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      Server Repo
                    </a>
                  )}
                  {project.livLink && (
                    <a
                      href={project.livLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-900/50"
                    >
                      Live Link
                    </a>
                  )}
                </div>
                
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
