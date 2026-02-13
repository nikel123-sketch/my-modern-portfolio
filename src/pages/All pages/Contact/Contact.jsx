import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Facebook, Github, Phone, Mail, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      icon: <Mail size={22} />,
      link: "mailto:webdevelopernikel@gmail.com",
    },
    {
      name: "Phone",
      icon: <Phone size={22} />,
      link: "tel:+8801331530219",
    },
    {
      name: "GitHub",
      icon: <Github size={22} />,
      link: "https://github.com/nikel123-sketch",
    },
    {
      name: "Facebook",
      icon: <Facebook size={22} />,
      link: "https://www.facebook.com/nowsad.hossan.nikil.rubel",
    },
    {
      name: "YouTube",
      icon: <Youtube size={22} />,
      link: "https://www.youtube.com/@CodeWithNowsad",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={22} />,
      link: "https://www.tiktok.com/@code.with.nowsad",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleform = (data) => {
    const message = `
📩 New Portfolio Contact Message

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
💬 Message: ${data.comment}
    `;

    const whatsappNumber = "8801331530219";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");

    toast.success("Message Ready on WhatsApp 🚀", {
      style: {
        background: "#111",
        color: "#fff",
        border: "1px solid #9333ea",
      },
      iconTheme: {
        primary: "#9333ea",
        secondary: "#fff",
      },
    });

    reset();
  };

  return (
    <section className="py-24 px-4 bg-black">
      <Toaster position="top-right" reverseOrder={false} />

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

      {/* Premium Contact Icons */}
      <motion.div
        className="max-w-6xl mx-auto mb-20 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 3 }}
            className="group relative w-20 h-20 flex items-center justify-center"
          >
            <div
              className="absolute inset-0 rounded-full p-[2px] 
              bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 
              animate-spin-slow"
            >
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>

            <div
              className="relative z-10 w-16 h-16 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-md 
              text-white text-xl border border-white/20 
              group-hover:bg-white/20 transition duration-300"
            >
              {item.icon}
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(handleform)}
        className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto
        p-[2px] rounded-3xl 
        bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500
        shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
      >
        <div
          className="bg-black/80 backdrop-blur-2xl rounded-3xl 
        border border-white/10 p-6 sm:p-8 space-y-6"
        >
          <h2
            className="text-center text-2xl sm:text-3xl font-bold 
          bg-gradient-to-r from-cyan-400 to-purple-400 
          bg-clip-text text-transparent tracking-wide"
          >
            Contact Me
          </h2>

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-4 rounded-xl
              bg-white/5 text-white border border-white/20 
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
              outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-4 rounded-xl
              bg-white/5 text-white border border-white/20 
              focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30
              outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-4 rounded-xl
              bg-white/5 text-white border border-white/20 
              focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30
              outline-none"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-4 rounded-xl
              bg-white/5 text-white border border-white/20 
              focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30
              outline-none resize-none"
              {...register("comment", { required: "Comment is required" })}
            ></textarea>
            {errors.comment && (
              <p className="text-red-400 text-xs mt-1">
                {errors.comment.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500
            hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
