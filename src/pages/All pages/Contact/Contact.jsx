import React from "react";
import { Facebook, Github, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "webdevelopernikel@gmail.com";
    const subject = "Hello";
    const body = "I want to contact you";

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
    <div className="py-16 px-4 sm:px-6 md:px-8 bg-black">
      <motion.div
        className="text-center text-white max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4 animate-bounce">
          GET IN TOUCH 🔭
        </h2>

        <p className="text-gray-300 text-lg sm:text-[18px] font-bold leading-relaxed">
          Have a question, feedback, or just want to say hello? I'd love to hear
          from you!
          <br />
          Reach out using the contact info below—I'll reply as soon as possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
        {contacts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            {item.link ? (
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-cyan-400 text-white py-4 rounded-2xl 
                hover:bg-cyan-900/40 transition px-6 justify-center shadow-sm backdrop-blur-sm cursor-pointer"
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 8px 22px rgba(0,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="text-lg font-medium">{item.name}</span>
              </motion.a>
            ) : (
              <motion.button
                type="button"
                onClick={item.action}
                className="w-full flex items-center gap-3 border border-cyan-400 text-white py-4 rounded-2xl 
                hover:bg-cyan-900/40 transition px-6 justify-center shadow-sm backdrop-blur-sm cursor-pointer"
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 8px 22px rgba(0,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="text-lg font-medium">{item.name}</span>
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
