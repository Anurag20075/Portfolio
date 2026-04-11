// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Code2,
//   Database,
//   Layout,
//   GitBranch,
//   Terminal,
//   Cpu
// } from "lucide-react";

// const SkillsSection = () => {
//   const skillCategories = [
//     {
//       title: "Backend Development",
//       icon: <Database className="text-[#00C6D7]" />,
//       skills: [
//         { name: "Java", color: "#ED8B00" },
//         { name: "Spring Boot", color: "#6DB33F" },
//         { name: "MySQL", color: "#4479A1" },
//         { name: "FastAPI", color: "#05998B" },
//       ],
//     },
//     {
//       title: "Frontend Development",
//       icon: <Layout className="text-blue-500" />,
//       skills: [
//         { name: "React", color: "#61DAFB" },
//         { name: "JavaScript", color: "#F7DF1E" },
//         { name: "Tailwind CSS", color: "#06B6D4" },
//         { name: "Framer Motion", color: "#E11D48" },
//       ],
//     },
//     {
//       title: "Core CS & Tools",
//       icon: <Cpu className="text-purple-500" />,
//       skills: [
//         { name: "DSA", color: "#A855F7" },
//         { name: "Git & GitHub", color: "#F05032" },
//         { name: "REST APIs", color: "#00C6D7" },
//         { name: "Linux", color: "#FCC624" },
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <section id="skills" className="py-24 px-6 bg-[#0B0F1A]">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-4"
//           >
//             Technical Expertise
//           </motion.h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#00C6D7] to-blue-500 mx-auto rounded-full"></div>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {skillCategories.map((category, idx) => (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00C6D7]/50 transition-all duration-300 group"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
//                   {category.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white">{category.title}</h3>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 {category.skills.map((skill, sIdx) => (
//                   <div
//                     key={sIdx}
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B0F1A] border border-white/5 group-hover:border-white/20 transition-all"
//                   >
//                     <div
//                       className="w-2 h-2 rounded-full"
//                       style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
//                     />
//                     <span className="text-sm font-medium text-slate-300">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Layout,
  Cpu,
  Sparkles,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Database,
      accentColor: "#008C9A",
      gradientFrom: "from-[#008C9A]/10",
      gradientTo: "to-[#008C9A]/5",
      borderColor: "hover:border-[#008C9A]/40",
      iconBg: "bg-[#008C9A]/10 group-hover:bg-[#008C9A]/20",
      iconColor: "text-[#008C9A]",
      barColor: "bg-gradient-to-r from-[#008C9A] to-[#008C9A]/60",
      skills: [
        { name: "Java", color: "#ED8B00", level: 90 },
        { name: "Spring Boot", color: "#6DB33F", level: 85 },
        { name: "MySQL", color: "#4479A1", level: 80 },
        { name: "FastAPI", color: "#05998B", level: 75 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Layout,
      accentColor: "#2563EB",
      gradientFrom: "from-blue-500/10",
      gradientTo: "to-blue-500/5",
      borderColor: "hover:border-blue-400/40",
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      iconColor: "text-blue-600",
      barColor: "bg-gradient-to-r from-blue-500 to-blue-400/60",
      skills: [
        { name: "React", color: "#61DAFB", level: 85 },
        { name: "JavaScript", color: "#F7DF1E", level: 88 },
        { name: "Tailwind CSS", color: "#06B6D4", level: 90 },
        { name: "Framer Motion", color: "#E11D48", level: 78 },
      ],
    },
    {
      title: "Core CS & Tools",
      icon: Cpu,
      accentColor: "#7C3AED",
      gradientFrom: "from-purple-500/10",
      gradientTo: "to-purple-500/5",
      borderColor: "hover:border-purple-400/40",
      iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
      iconColor: "text-purple-600",
      barColor: "bg-gradient-to-r from-purple-500 to-purple-400/60",
      skills: [
        { name: "DSA", color: "#A855F7", level: 88 },
        { name: "Git & GitHub", color: "#F05032", level: 85 },
        { name: "REST APIs", color: "#008C9A", level: 82 },
        { name: "Linux", color: "#FCC624", level: 70 },
      ],
    },
  ];

  // --- Animation Variants ---
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const skillTagVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.08,
        ease: "easeOut",
      },
    }),
  };

  const progressBarVariants = {
    hidden: { scaleX: 0 },
    visible: (i) => ({
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.8 + i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  // --- Floating Background Orbs ---
  const FloatingOrb = ({ className, delay = 0 }) => (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <section id="skills" className="relative py-28 px-6 bg-[#F8FAFC] overflow-hidden">
      {/* Background decorations */}
      <FloatingOrb
        className="w-72 h-72 bg-[#008C9A]/5 -top-20 -left-20"
        delay={0}
      />
      <FloatingOrb
        className="w-96 h-96 bg-blue-500/5 top-1/2 -right-32"
        delay={2}
      />
      <FloatingOrb
        className="w-64 h-64 bg-purple-500/5 -bottom-20 left-1/3"
        delay={4}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#008C9A]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
              What I Work With
            </span>
          </motion.div>

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 tracking-tight"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-[#008C9A] via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-[#008C9A] to-blue-500 mx-auto rounded-full"
          />
        </div>

        {/* Skills Cards */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className={`relative p-7 lg:p-8 rounded-2xl bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} backdrop-blur-sm border border-slate-200/80 ${category.borderColor} shadow-sm hover:shadow-xl transition-shadow duration-500 group cursor-default`}
              >
                {/* Accent line at top */}
                <motion.div
                  className={`absolute top-0 left-8 right-8 h-[2px] rounded-full ${category.barColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  layoutId={`accent-line-${idx}`}
                />

                {/* Card Header */}
                <div className="flex items-center gap-4 mb-7">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl ${category.iconBg} transition-colors duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${category.iconColor}`} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      custom={sIdx}
                      variants={skillTagVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="group/skill"
                    >
                      {/* Skill row */}
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <motion.div
                            whileHover={{ scale: 1.4 }}
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: skill.color,
                              boxShadow: `0 0 8px ${skill.color}60`,
                            }}
                          />
                          <span className="text-sm font-medium text-slate-700 group-hover/skill:text-slate-900 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + sIdx * 0.15 }}
                          className="text-xs font-semibold text-slate-400 tabular-nums"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Progress bar background */}
                      <div className="h-1.5 w-full bg-slate-200/80 rounded-full overflow-hidden">
                        <motion.div
                          custom={sIdx}
                          variants={progressBarVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full rounded-full origin-left"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom decorative dots */}
                <div className="flex gap-1 mt-7 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-slate-400"
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom subtle text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center text-sm text-slate-400 mt-14 tracking-wide"
        >
          Always learning, always building.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SkillsSection;