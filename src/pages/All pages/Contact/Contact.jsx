import React, { useState } from "react";
import { Facebook, Github, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [data,setdata]=useState();
  // console.log(data)
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();


  const handleform = (data) => {
    // console.log(data);
    setdata(data)
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

      {/* form */}
      <form
        onSubmit={handleSubmit(handleform)}
        className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto
             bg-gradient-to-br from-green-900/90 via-red-300-800/80 to-red-100/9
             backdrop-blur-xl border border-white/10
             p-6 sm:p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]
             space-y-5"
      >
        <h2 className="text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
          Contact Us
        </h2>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-sm sm:text-base text-white/80 font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl 
                 bg-white/10 text-white placeholder-white/40 
                 border border-white/20 focus:border-blue-500 
                 focus:ring-2 focus:ring-blue-500/40 
                 transition-all duration-200"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-400 text-xs sm:text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm sm:text-base text-white/80 font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl 
                 bg-white/10 text-white placeholder-white/40 
                 border border-white/20 focus:border-indigo-500 
                 focus:ring-2 focus:ring-indigo-500/40 
                 transition-all duration-200"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-400 text-xs sm:text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-sm sm:text-base text-white/80 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+880 1XXXXXXXXX"
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl 
                 bg-white/10 text-white placeholder-white/40 
                 border border-white/20 focus:border-emerald-500 
                 focus:ring-2 focus:ring-emerald-500/40 
                 transition-all duration-200"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs sm:text-sm">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Comment */}
        <div className="space-y-1">
          <label className="text-sm sm:text-base text-white/80 font-medium">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl 
                 bg-white/10 text-white placeholder-white/40 
                 border border-white/20 focus:border-purple-500 
                 focus:ring-2 focus:ring-purple-500/40 
                 transition-all duration-200 resize-none"
            {...register("comment", { required: "Comment is required" })}
          ></textarea>
          {errors.comment && (
            <p className="text-red-400 text-xs sm:text-sm">
              {errors.comment.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 sm:py-3.5 rounded-xl font-semibold text-white 
               bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
               hover:scale-[1.02] hover:shadow-xl 
               active:scale-95 transition-all duration-200"
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
};

export default Contact;
