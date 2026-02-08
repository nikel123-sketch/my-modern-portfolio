import React, { useState } from "react";
import { Facebook, Github, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", comment: "" });
  };

 

  const contacts = [
    
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
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Have a project in mind or just want to say hello? Feel free to reach
          out — I’m always open to new opportunities and collaborations.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
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
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-cyan-500/30 text-white py-4 rounded-xl hover:bg-cyan-500/10 transition px-6 justify-center backdrop-blur-md"
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
                className="w-full flex items-center gap-3 border border-cyan-500/30 text-white py-4 rounded-xl hover:bg-cyan-500/10 transition px-6 justify-center backdrop-blur-md"
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

      <motion.div
        className="max-w-md mx-auto bg-gray-900 bg-opacity-80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-700 hover:shadow-3xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Send a Message
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-purple-400 peer-focus:text-sm transition-all">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-700 rounded-xl px-4 pt-5 pb-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-purple-400 peer-focus:text-sm transition-all">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-700 rounded-xl px-4 pt-5 pb-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-purple-400 peer-focus:text-sm transition-all">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone" // ✅ small-letter must match state
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-700 rounded-xl px-4 pt-5 pb-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Comment */}
          <div className="relative">
            <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-purple-400 peer-focus:text-sm transition-all">
              Comment
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              placeholder=" "
              rows={5}
              className="peer w-full border border-gray-700 rounded-xl px-4 pt-5 pb-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
