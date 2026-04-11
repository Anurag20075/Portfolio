// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Linkedin,
//   Github,
//   Instagram,
//   Code2,
//   Download
// } from "lucide-react";

// const ContactSection = () => {
//   const contactInfo = [
//     {
//       icon: <MapPin className="text-[#00C6D7]" />,
//       label: "Location",
//       value: "Agra, Uttar Pradesh, India",
//     },
//     {
//       icon: <Mail className="text-[#00C6D7]" />,
//       label: "Email",
//       value: "goyalanurag2005@gmail.com",
//     },
//     {
//       icon: <Phone className="text-[#00C6D7]" />,
//       label: "Phone",
//       value: "(+91) 6398802517",
//     },
//   ];

//   return (
//     <section id="contact" className="py-24 px-6 bg-[#0B0F1A]">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-4"
//           >
//             Get In Touch
//           </motion.h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#00C6D7] to-blue-500 mx-auto rounded-full mb-6"></div>
//           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//             Whether you have a question or just want to say hi, I'll try my best to get back to you!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//           {/* Left Side: Contact Info & Socials */}
//           <div className="lg:col-span-2 space-y-6">
//             {contactInfo.map((info, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ x: 10 }}
//                 className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-5 transition-all"
//               >
//                 <div className="p-3 bg-white/5 rounded-xl">{info.icon}</div>
//                 <div>
//                   <p className="text-sm text-slate-500 font-medium">{info.label}</p>
//                   <p className="text-white font-semibold">{info.value}</p>
//                 </div>
//               </motion.div>
//             ))}

//             {/* Social Links Grid */}
//             <div className="pt-8">
//               <h4 className="text-white font-bold mb-6 flex items-center gap-2">
//                 <Code2 size={20} className="text-[#00C6D7]" />
//                 Connect with me
//               </h4>
//               <div className="flex flex-wrap gap-4">
//                 {[
//                   { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/anurag-goyal-05929b317/", color: "hover:bg-blue-600" },
//                   { icon: <Github size={20} />, link: "https://github.com/Anurag20075", color: "hover:bg-slate-700" },
//                   { icon: <Instagram size={20} />, link: "https://www.instagram.com/anurag.goyal.3158652/", color: "hover:bg-pink-600" },
//                 ].map((social, i) => (
//                   <a
//                     key={i}
//                     href={social.link}
//                     target="_blank"
//                     className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Resume Download Logic Kept and Styled */}
//             <div className="pt-4">
//               <a
//                 href="/Anurag_Goyal_Resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 download
//                 className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-[#00C6D7]/30 text-[#00C6D7] rounded-xl font-bold hover:bg-[#00C6D7]/10 transition-all"
//               >
//                 <Download size={20} />
//                 Download Resume
//               </a>
//             </div>
//           </div>

//           {/* Right Side: Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3"
//           >
//             <form
//               action="https://formsubmit.co/goyalanurag2005@gmail.com"
//               method="POST"
//               className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6 shadow-2xl"
//             >
//               {/* FormSubmit Config */}
//               <input type="hidden" name="_next" value="http://portfolio-five-flame-11.vercel.app/Thanks-You.html" />
//               <input type="hidden" name="_template" value="table" />

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     placeholder="Enter your name"
//                     className="w-full px-4 py-3 bg-[#0B0F1A] border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00C6D7] focus:border-transparent outline-none text-white transition-all"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="xyz@example.com"
//                     className="w-full px-4 py-3 bg-[#0B0F1A] border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00C6D7] focus:border-transparent outline-none text-white transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   required
//                   placeholder="What is this regarding?"
//                   className="w-full px-4 py-3 bg-[#0B0F1A] border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00C6D7] focus:border-transparent outline-none text-white transition-all"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
//                 <textarea
//                   name="message"
//                   required
//                   rows="4"
//                   placeholder="Your message here..."
//                   className="w-full px-4 py-3 bg-[#0B0F1A] border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00C6D7] focus:border-transparent outline-none text-white transition-all resize-none"
//                 ></textarea>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 198, 215, 0.2)" }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full py-4 bg-[#00C6D7] text-[#0B0F1A] font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all"
//               >
//                 <Send size={20} />
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Instagram,
  Code2,
  Download,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Agra, Uttar Pradesh, India",
      href: "https://maps.google.com/?q=Agra,India",
    },
    {
      icon: Mail,
      label: "Email",
      value: "goyalanurag2005@gmail.com",
      href: "mailto:goyalanurag2005@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 6398802517",
      href: "tel:+916398802517",
    },
  ];

  const socials = [
    { icon: Linkedin, link: "https://www.linkedin.com/in/anurag-goyal-05929b317/", label: "LinkedIn", hoverColor: "hover:bg-blue-600 hover:border-blue-600 hover:text-white" },
    { icon: Github, link: "https://github.com/Anurag20075", label: "GitHub", hoverColor: "hover:bg-slate-800 hover:border-slate-800 hover:text-white" },
    { icon: Instagram, link: "https://www.instagram.com/anurag.goyal.3158652/", label: "Instagram", hoverColor: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-transparent hover:text-white" },
  ];

  // ─── Animation Variants ───
  const badgeVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  const leftColVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 200 } }),
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.8 } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // ─── Floating Orbs (Light Theme) ───
  const FloatingOrb = ({ className, delay = 0 }) => (
    <motion.div
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
      animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#F8FAFC] overflow-hidden">
      {/* Background Elements */}
      <FloatingOrb className="w-80 h-80 bg-[#008C9A]/5 -top-40 -right-40" delay={0} />
      <FloatingOrb className="w-96 h-96 bg-blue-500/5 bottom-0 -left-40" delay={3} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ─── Header ─── */}
        <div className="text-center mb-20">
          <motion.div variants={badgeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <MessageSquare className="text-[#008C9A]" size={16} />
              <span className="text-[#008C9A] font-mono tracking-[0.2em] text-[11px] uppercase">Contact</span>
            </div>
          </motion.div>

          <motion.h2 variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#008C9A] to-[#06B6D4] bg-clip-text text-transparent">Touch</span>
          </motion.h2>

          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-20 h-[3px] bg-gradient-to-r from-[#008C9A] to-blue-500 mx-auto rounded-full origin-left mb-6" />

          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Left Side: Info & Socials */}
          <motion.div variants={leftColVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ x: 8, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  className="group p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 flex items-center gap-5 shadow-sm hover:shadow-lg hover:shadow-[#008C9A]/5 hover:border-[#008C9A]/30 transition-all duration-300"
                >
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-[#008C9A]/10 transition-colors duration-300">
                    <Icon className="text-[#008C9A]" size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{info.label}</p>
                    <p className="text-slate-900 font-semibold text-[15px] truncate">{info.value}</p>
                  </div>
                  <ArrowUpRight className="ml-auto w-4 h-4 text-slate-300 group-hover:text-[#008C9A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="pt-8">
              <motion.h4 variants={cardVariants} className="text-slate-900 font-bold mb-5 flex items-center gap-2 text-sm">
                <Code2 size={18} className="text-[#008C9A]" />
                <span className="uppercase tracking-wider text-xs font-semibold">Connect with me</span>
              </motion.h4>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      custom={i}
                      variants={socialVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 shadow-sm ${social.hoverColor} hover:shadow-md`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Resume Download */}
            <motion.div variants={cardVariants} className="pt-6">
              <motion.a
                href="/Anurag_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-white border border-[#008C9A]/20 text-[#008C9A] rounded-xl font-bold text-sm tracking-wide hover:border-[#008C9A]/40 hover:shadow-md hover:shadow-[#008C9A]/10 overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#008C9A]/5 to-transparent" />
                <Download size={18} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              action="https://formsubmit.co/goyalanurag2005@gmail.com"
              method="POST"
              className="p-8 lg:p-10 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 space-y-6 shadow-sm"
            >
              {/* FormSubmit Config */}
              <input type="hidden" name="_next" value="http://portfolio-five-flame-11.vercel.app/Thanks-You.html" />
              <input type="hidden" name="_template" value="table" />
              {/* Disable Captcha for cleaner UI (optional, depends on formsubmit needs) */}

              <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fieldVariants} className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wider">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C9A]/30 focus:border-[#008C9A]/50 focus:bg-white outline-none text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                  />
                </motion.div>
                <motion.div variants={fieldVariants} className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wider">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="xyz@example.com"
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C9A]/30 focus:border-[#008C9A]/50 focus:bg-white outline-none text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div variants={fieldVariants} className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wider">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C9A]/30 focus:border-[#008C9A]/50 focus:bg-white outline-none text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div variants={fieldVariants} className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 ml-1 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Your message here..."
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C9A]/30 focus:border-[#008C9A]/50 focus:bg-white outline-none text-slate-900 placeholder:text-slate-400 transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>
              </motion.div>

              <motion.div variants={fieldVariants}>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -5px rgba(0, 140, 154, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group/btn relative w-full py-4 bg-gradient-to-r from-[#008C9A] to-[#06B6D4] text-white font-extrabold rounded-xl flex items-center justify-center gap-2.5 tracking-wide overflow-hidden transition-all duration-300 shadow-lg shadow-[#008C9A]/20"
                >
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                  <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;