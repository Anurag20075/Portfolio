import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, ExternalLink, FolderCode, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Course Management System",
      desc: "A comprehensive learning platform featuring lesson tracking, student comments, and secure JWT authentication.",
      tech: ["Spring Boot", "React", "MySQL", "Tailwind"],
      image: "https://i.pinimg.com/736x/ec/59/4d/ec594d5b9cd8e8cbc939a8744370d661.jpg",
      github: "https://github.com/Anurag20075/Course-App",
      demo: "#",
    },
    {
      title: "Full-Stack Blog Engine",
      desc: "A powerful content platform with a custom admin dashboard for full CRUD operations and engagement tracking.",
      tech: ["Java", "Spring Boot", "React", "REST API"],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&auto=format&fit=crop&w=2070",
      github: "https://github.com/Anurag20075/Blog_Project",
      demo: "#",
    },
    {
      title: "Real-Time Weather App",
      desc: "Dynamic weather forecasting application utilizing the OpenWeather API with geo-location support.",
      tech: ["React", "JavaScript", "API Integration"],
      image: "https://i.pinimg.com/1200x/4c/72/09/4c72099507913a8120bb12de64044a2d.jpg",
      github: "https://github.com/Anurag20075/Weather-Web",
      demo: "#",
    },
    {
      title: "E-Commerce Interface",
      desc: "A high-fidelity Amazon clone focusing on complex UI components, cart logic, and responsive navigation.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      image: "https://i.pinimg.com/736x/cf/b1/95/cfb1954d25e306504dce5f587f635233.jpg",
      github: "https://github.com/Anurag20075/Amazon-Clone",
      demo: "#",
    },
  ];

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
    hidden: { opacity: 0, y: -25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, delay: i * 0.06, ease: "easeOut" },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1.4, ease: "easeOut" },
    },
  };

  // ─── Tilt Card Component ───
  const TiltCard = ({ children, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
      stiffness: 300,
      damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
      stiffness: 300,
      damping: 30,
    });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(px);
      y.set(py);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        variants={cardVariants}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 40 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#008C9A]/30 transition-all duration-500"
      >
        {children}
      </motion.div>
    );
  };

  // ─── Floating Orbs ───
  const FloatingOrb = ({ className, delay = 0 }) => (
    <motion.div
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
      animate={{ y: [0, -25, 0], x: [0, 15, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );

  // ─── Project number ───
  const ProjectNumber = ({ num }) => (
    <span className="absolute top-6 right-6 z-20 font-mono text-6xl font-black text-slate-900/[0.04] select-none group-hover:text-[#008C9A]/10 transition-colors duration-700">
      {String(num).padStart(2, "0")}
    </span>
  );

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#F8FAFC] overflow-hidden">
      {/* Background Orbs */}
      <FloatingOrb className="w-80 h-80 bg-[#008C9A]/[0.07] -top-40 -left-40" delay={0} />
      <FloatingOrb className="w-[500px] h-[500px] bg-blue-500/[0.05] top-1/3 -right-60" delay={3} />
      <FloatingOrb className="w-72 h-72 bg-purple-500/[0.05] -bottom-32 left-1/4" delay={5} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#008C9A]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* ─── Header ─── */}
        <div className="text-center mb-20">
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-slate-200 bg-slate-100/80 backdrop-blur-sm mb-8"
          >
            <FolderCode className="text-[#008C9A]" size={16} />
            <span className="text-[#008C9A] font-mono tracking-[0.2em] text-[11px] uppercase">
              My Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-[#008C9A] via-blue-600 to-[#008C9A] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Projects
            </span>
          </motion.h2>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-20 h-[3px] bg-gradient-to-r from-[#008C9A] to-blue-600 mx-auto rounded-full origin-left"
          />
        </div>

        {/* ─── Project Grid ─── */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8"
        >
          {projects.map((project, index) => (
            <TiltCard key={index} index={index}>
              <ProjectNumber num={index + 1} />

              {/* Image Container */}
              <div className="relative h-60 lg:h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />

                {/* Multi-layer gradient overlay - blending image to white card */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#008C9A]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Actions — glassmorphism light theme */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3.5 bg-white/80 backdrop-blur-md border border-slate-300 text-slate-800 rounded-xl hover:bg-[#008C9A]/10 hover:border-[#008C9A]/40 hover:text-[#008C9A] transition-all duration-300 shadow-lg shadow-slate-900/10"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3.5 bg-white/80 backdrop-blur-md border border-slate-300 text-slate-800 rounded-xl hover:bg-[#008C9A]/10 hover:border-[#008C9A]/40 hover:text-[#008C9A] transition-all duration-300 shadow-lg shadow-slate-900/10"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                {/* Bottom edge glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#008C9A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={tagVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 bg-[#008C9A]/[0.08] text-[#008C9A] rounded-md border border-[#008C9A]/20 hover:border-[#008C9A]/40 transition-colors duration-300 cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#008C9A] transition-colors duration-500 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </h3>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed text-sm lg:text-[15px]">
                  {project.desc}
                </p>
              </div>

              {/* Corner accent — top left */}
              <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-3 left-3 w-4 h-[1px] bg-[#008C9A]/0 group-hover:bg-[#008C9A]/40 transition-colors duration-700" />
                <div className="absolute top-3 left-3 w-[1px] h-4 bg-[#008C9A]/0 group-hover:bg-[#008C9A]/40 transition-colors duration-700" />
              </div>

              {/* Corner accent — bottom right */}
              <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute bottom-3 right-3 w-4 h-[1px] bg-[#008C9A]/0 group-hover:bg-[#008C9A]/40 transition-colors duration-700" />
                <div className="absolute bottom-3 right-3 w-[1px] h-4 bg-[#008C9A]/0 group-hover:bg-[#008C9A]/40 transition-colors duration-700" />
              </div>
            </TiltCard>
          ))}
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <motion.a
            href="https://github.com/Anurag20075"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group/cta relative inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm tracking-wide hover:border-[#008C9A]/30 hover:bg-slate-50 transition-all duration-500 overflow-hidden shadow-sm"
          >
            {/* Shimmer sweep on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#008C9A]/10 to-transparent" />

            <Github size={18} className="relative z-10" />
            <span className="relative z-10">Explore More on GitHub</span>
            <ArrowUpRight
              size={16}
              className="relative z-10 opacity-0 group-hover/cta:opacity-100 -translate-x-2 group-hover/cta:translate-x-0 transition-all duration-300"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* ─── Gradient text keyframe (via style tag) ─── */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;