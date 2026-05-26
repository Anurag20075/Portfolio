
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Download,
  Code2,
  MapPin,
  Mail,
  Zap,
} from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // ─── Animation Variants ───
  const badgeVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.35 },
    },
  };

  const textBlockVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.7 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.9 },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 1.3, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  // ─── Stats Data ───
  const stats = [
    { value: "4+", label: "Projects Built" },
    { value: "2+", label: "Tech Stacks" },
    { value: "100%", label: "Learning Drive" },
  ];

  // ─── Floating Orb ───
  const FloatingOrb = ({ className, delay = 0 }) => (
    <motion.div
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
      animate={{ y: [0, -20, 0], x: [0, 12, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );

  // ─── Animated Counter ───
  const AnimatedStat = ({ value, label }) => (
    <motion.div variants={statItemVariants} className="text-center">
      <div className="text-2xl lg:text-3xl font-black text-slate-900 tabular-nums tracking-tight">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-medium mt-1">
        {label}
      </div>
    </motion.div>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 bg-slate-50 text-slate-500 overflow-hidden"
    >
      {/* Background Orbs */}
      <FloatingOrb className="w-96 h-96 bg-[#008C9A]/[0.04] -top-48 -left-48" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-blue-400/[0.03] bottom-0 -right-40" delay={3} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent line */}
      <motion.div
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.08 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <line x1="0" y1="800" x2="1200" y2="0" stroke="#008C9A" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ─── Left Side: Image Composition ─── */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Decorative layers */}
            <motion.div
              animate={{ rotate: [6, 8, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 w-64 h-64 md:w-80 md:h-80 rounded-2xl -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(0,140,154,0.06), rgba(0,140,154,0.02))",
                border: "1px solid rgba(0,140,154,0.1)",
              }}
            />
            <motion.div
              animate={{ rotate: [-3, -1, -3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -right-5 w-64 h-64 md:w-80 md:h-80 rounded-2xl -z-10"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,140,154,0.08)",
              }}
            />

            {/* Small accent square */}
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -top-8 right-8 md:right-16 w-4 h-4 rounded-sm bg-[#008C9A]/20 -z-10"
            />
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-8 md:left-12 w-3 h-3 rounded-full bg-blue-400/20 -z-10"
            />

            {/* Main image container */}
            <div className="relative group">
              {/* Animated border glow */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#008C9A]/15 via-transparent to-blue-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg shadow-slate-900/8">
                <motion.img
                  src="pic.jpg"
                  alt="Anurag Goyal"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-slate-900/5 to-slate-900/10" />

                {/* Scan line effect on hover */}
                <motion.div
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#008C9A]/40 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  style={{ top: "0%" }}
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-md shadow-slate-900/8"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  style={{ boxShadow: "0 0 8px rgba(16,185,129,0.5)" }}
                />
                <span className="text-xs font-semibold text-slate-900 tracking-wide">
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ─── Right Side: Content ─── */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div variants={badgeVariants} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-slate-200 bg-slate-100">
                <Code2 className="text-[#008C9A]" size={16} />
                <span className="text-[#008C9A] font-mono tracking-[0.2em] text-[11px] uppercase">
                  Who I am
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={headingVariants}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]"
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#008C9A] to-[#06B6D4] bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.p variants={textBlockVariants} className="text-[16px] leading-[1.8] mb-5 text-slate-500">
              I'm{" "}
              <span className="text-slate-900 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">
                Anurag Goyal
              </span>
              , a developer who bridges the gap between complex backend logic and intuitive frontend design. My journey in tech is fueled by a desire to build{" "}
              <span className="text-[#008C9A] font-medium">scalable, high-performance systems</span>{" "}
              that solve real-world problems.
            </motion.p>

            <motion.p variants={textBlockVariants} className="text-[16px] leading-[1.8] mb-10 text-slate-500">
              Whether I'm architecting RESTful APIs with{" "}
              <span className="text-slate-600 font-medium">Spring Boot</span> or crafting fluid user experiences in{" "}
              <span className="text-slate-600 font-medium">React</span>, I focus on clean code and maintainable architecture.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              variants={cardContainerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {/* Education Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group/card flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-400"
              >
                <div className="p-2.5 bg-slate-100 rounded-xl text-[#008C9A] group-hover/card:bg-[#008C9A]/10 transition-colors duration-300 flex-shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">BCA Graduate</h4>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-slate-400" />
                    <p className="text-xs text-slate-400">Dr MPS Institute, Agra</p>
                  </div>
                </div>
              </motion.div>

              {/* Work Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group/card flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-400"
              >
                <div className="p-2.5 bg-slate-100 rounded-xl text-blue-500 group-hover/card:bg-blue-50 transition-colors duration-300 flex-shrink-0">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">Fresher</h4>
                  <div className="flex items-center gap-1.5">
                    <Zap size={12} className="text-slate-400" />
                    <p className="text-xs text-slate-400">Full Stack Development</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={statsVariants}
              className="flex items-center gap-8 sm:gap-12 mb-10 pl-1"
            >
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  <AnimatedStat value={stat.value} label={stat.label} />
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-slate-200" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* CTA Button */}
         {/* CTA Button */}
      <motion.div variants={ctaVariants}>
        <motion.a
          href="/Anurag_Goyal_Resume.pdf"
          download="Anurag_Goyal_Resume.pdf" // 👈 Forces the browser to download instead of opening it
          target="_blank"                    // 👈 Fallback: Opens in new tab if the browser restricts direct downloads
          rel="noopener noreferrer"          // 👈 Security best practice when using target="_blank"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-[#008C9A] text-white rounded-xl font-bold text-sm tracking-wide shadow-md shadow-[#008C9A]/20 overflow-hidden transition-all duration-500 hover:bg-[#006B75] hover:shadow-lg hover:shadow-[#006B75]/25"
        >
          {/* Shimmer sweep */}
          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <Download size={18} className="relative z-10 group-hover/btn:animate-bounce" />
          <span className="relative z-10">Download Resume</span>
        </motion.a>
      </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;