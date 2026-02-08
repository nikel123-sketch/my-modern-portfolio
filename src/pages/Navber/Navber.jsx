import { FiDownload } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";

const Navber = () => {

    // all links---
  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/About" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Projects" },
    { name: "Experience", path: "/Experience" },
    { name: "Contact", path: "/Contact" },
  ];


//   all links map and acctive added---

  const renderLinks = links.map((link, index) => (

    
    <li key={index}>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-medium transition duration-300 ${
            isActive
              ? "bg-blue-600 text-white shadow-lg"
              : "hover:bg-blue-100 hover:text-blue-600"
          }`
        }
      >
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="">
      {/* start */}
      <div className="navbar ">
        {/* Mobile menu */}
        <div className="navbar-start">
          {/* deopdown */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* mobile menu */}
            <ul
              tabIndex={-1}
              className="menu menu-compact dropdown-content mt-3 p-3 shadow-lg rounded-lg"
            >
              {renderLinks}
            </ul>
          </div>

          {/* my name */}
          <NavLink to="/">
            <motion.span
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 12px rgba(59,130,246,0.7)",
              }}
              className="btn btn-ghost text-2xl font-bold text-blue-600 cursor-pointer"
            >
              Md Nikel Ali
            </motion.span>
          </NavLink>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{renderLinks}</ul>
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
