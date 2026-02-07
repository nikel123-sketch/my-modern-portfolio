import React from "react";
import { Facebook, Github, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "webdevelopernikel@gmail.com";
    const subject = "Project Inquiry";
    const body = "Hi Nikel,\n\nI would like to discuss a project with you.";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const contacts = [
    {
      name: "Email",
      icon: <Mail size={22} className="text-[#EA4335]" />,
      action: handleEmailClick,
    },
    {
      name: "Phone",
      icon: <Phone size={22} className="text-gray-300" />,
      link: "tel:+8801331530219",
    },
    {
      name: "GitHub",
      icon: <Github size={22} className="text-white" />,
      link: "https://github.com/nikel123-sketch",
    },
    {
      name: "Facebook",
      icon: <Facebook size={22} className="text-blue-500" />,
      link: "https://www.facebook.com/nowsad.hossan.nikil.rubel",
    },
  ];

  return (
    <section className="py-24 px-4 bg-black">
      {/* Heading */}
      <motion.div
        className="text-center text-white max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </motion.h2>

        <p className="text-gray-400 leading-relaxed">
          Have a project in mind or just want to say hello? Feel free to reach
          out — I’m always open to new opportunities and collaborations.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {contacts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {item.link ? (
              <motion.a
                href={item.link}
                target="_blank"
                className="flex items-center gap-3 border border-cyan-500/30 text-white py-4 rounded-xl 
                hover:bg-cyan-500/10 transition px-6 justify-center backdrop-blur-md"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 6px 20px rgba(0,255,255,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ) : (
              <motion.button
                onClick={item.action}
                className="w-full flex items-center gap-3 border border-cyan-500/30 text-white py-4 rounded-xl 
                hover:bg-cyan-500/10 transition px-6 justify-center backdrop-blur-md"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 6px 20px rgba(0,255,255,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
