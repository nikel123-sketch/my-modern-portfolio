import { FiDownload } from "react-icons/fi";
import { Link, NavLink } from "react-router";


const Navber = () => {

    // all links---
  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Projects" },
    { name: "Experience", path: "/Experience" },
    { name: "Education", path: "/Education" },
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
          <a className="btn btn-ghost text-2xl font-bold text-blue-600 ">
            Md Nikel Ali
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{renderLinks}</ul>
        </div>

        {/* Download CV */}
        <div className="navbar-end">
          <a className="btn bg-blue-600 text-white hover:bg-blue-800 border-none px-5 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <FiDownload className="w-5 h-5" />
            Download CV
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Navber;
