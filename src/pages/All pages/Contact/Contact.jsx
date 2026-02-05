import React from "react";
import { Facebook, Github, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleEmailClick = () => {
    // Primary mailto open
    window.location.href =
      "mailto:tahmidhasangolap@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you";

    // Fallback for desktop if mail client doesn't open
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=tahmidhasangolap@gmail.com&su=Hello&body=I%20want%20to%20contact%20you",
        "_blank",
      );
    }, 700);
  };

  const contacts = [
    {
      name: "Email",
      icon: <Mail size={22} className="text-[#EA4335]" />,
      onClick: handleEmailClick,
    },
   
    {
      name: "Phone",
      icon: <Phone size={22} className="text-gray-300" />,
      link: "tel:+8801331530219",
    },
    // {
    //   name: "WhatsApp",
    //   icon: (
    //     <img
    //       src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    //       className="w-6 h-6"
    //     />
    //   ),
    //   link: "https://wa.me/8801822522295?text=Hello%20Tahmid!",
    // },
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
    // {
    //   name: "LinkedIn",
    //   icon: (
    //     <img
    //       src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
    //       className="w-6 h-6"
    //     />
    //   ),
    //   link: "https://www.linkedin.com/in/tahmid-hasan-golap/?locale=en",
    // },
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
          from you! <br />
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
            <motion.a
              href={item.link ? item.link : undefined}
              onClick={item.onClick ? item.onClick : undefined}
              target={item.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-cyan-400 text-white py-4 rounded-2xl 
                          hover:bg-cyan-900/40 transition px-6 justify-center shadow-sm backdrop-blur-sm cursor-pointer"
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 8px 22px rgba(0,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center"
              >
                {item.icon}
              </motion.span>
              <span className="text-lg font-medium">{item.name}</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
