import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import nikel from '../../assets/md nikel ali.jpg'
const Navber = () => {
  const [open, setOpen] = useState(false);

  // all links---
  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/About" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Projects" },
    { name: "Experience", path: "/Experience" },
    { name: "Contact", path: "/Contact" },
  ];

  // render links
  const renderLinks = links.map((link, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07 }}
      onClick={() => setOpen(false)}
    >
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium block transition-all duration-300 ${
            isActive
              ? "bg-blue-500 text-white font-bold"
              : "hover:bg-blue-100 hover:text-blue-600"
          }`
        }
      >
        {link.name}
      </NavLink>
    </motion.li>
  ));

  return (
    <div>
      <div className="navbar">
        {/* Mobile menu */}
        <div className="navbar-start">
          {/* Premium Dropdown */}
          <div className="relative lg:hidden">
            {/* Animated Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="btn  bg-indigo-600  btn-circle p-2"
            >
              <motion.div
                animate={open ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-between"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="h-0.5 w-full bg-current"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="h-0.5 w-full bg-current"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="h-0.5 w-full bg-current"
                />
              </motion.div>
            </button>

            {/* Animated Dropdown Menu */}
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-7 left-0 mt-4 bg-neutral-900 text-gray-200 backdrop-blur-xl border border-green-600 rounded-2xl shadow-2xl p-4 space-y-2 z-50"
                >
                  {renderLinks}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Name */}
          <NavLink to="/">
            <motion.span
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 12px rgba(59,130,246,0.7)",
              }}
              className="btn btn-ghost text-2xl font-bold text-blue-600 cursor-pointer"
            >
              <img className="rounded-full h-15" src={nikel} alt="" />
              
            </motion.span>
          </NavLink>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md font-medium transition ${
                      isActive
                        ? "bg-blue-500 text-white font-bold"
                        : "hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Download CV */}
        <div className="navbar-end">
          <a
            href="https://drive.google.com/uc?export=download&id=1slYcaW8VLtPtziyndU7BVNepSEAZN3w6"
            className="btn bg-blue-600 text-white hover:bg-blue-800 border-none px-5 py-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <FiDownload className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
