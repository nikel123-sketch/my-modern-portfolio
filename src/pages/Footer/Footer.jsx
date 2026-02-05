import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const formattedDate = today.toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <footer className="py-10 bg-black text-white">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-3xl mb-6">
        <a
          href="https://www.facebook.com/nowsad.hossan.nikil.rubel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/nikel123-sketch"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        {/* <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a> */}
      </div>

      {/* Date & Time */}
      <p className="text-center text-gray-300 font-medium mb-2">
        {formattedDate}
      </p>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm">
        © {year} All rights reserved by{" "}
        <span className="text-blue-400 font-semibold">MD NIKEL ALI</span>
      </p>
    </footer>
  );
};

export default Footer;
