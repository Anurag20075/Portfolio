// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Database,
//   Layout,
//   Cpu,
//   Sparkles,
//   Terminal,
//   Code2,
//   Layers,
// } from "lucide-react";

// const SkillsSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const skillCategories = [
//     {
//       title: "Backend Core",
//       subtitle: "Architecture & Data",
//       icon: Database,
//       size: "md:col-span-2",
//       gradient: "from-emerald-500/[0.04] via-teal-500/[0.02] to-transparent",
//       glowColor: "rgba(16, 185, 129, 0.08)",
//       accentText: "text-emerald-600",
//       accentBg: "bg-emerald-500",
//       skills: [
//         { name: "Java", level: 90, desc: "Enterprise Applications" },
//         { name: "Spring Boot", level: 85, desc: "Microservices & MVC" },
//         { name: "MySQL", level: 80, desc: "Query Optimization" },
//         { name: "FastAPI", level: 75, desc: "Async Python APIs" },
//       ],
//     },
//     {
//       title: "Frontend & UI",
//       subtitle: "Interactive Experiences",
//       icon: Layout,
//       size: "md:col-span-1",
//       gradient: "from-emerald-500/[0.03] via-teal-500/[0.01] to-transparent",
//       glowColor: "rgba(16, 185, 129, 0.06)",
//       accentText: "text-emerald-600",
//       accentBg: "bg-teal-500",
//       skills: [
//         { name: "React", level: 85 },
//         { name: "JavaScript", level: 88 },
//         { name: "Tailwind CSS", level: 90 },
//         { name: "Framer Motion", level: 78 },
//       ],
//     },
//     {
//       title: "CS Fundamentals",
//       subtitle: "Problem Solving",
//       icon: Cpu,
//       size: "md:col-span-1",
//       gradient: "from-emerald-500/[0.03] via-teal-500/[0.01] to-transparent",
//       glowColor: "rgba(16, 185, 129, 0.06)",
//       accentText: "text-emerald-600",
//       accentBg: "bg-emerald-600",
//       skills: [
//         { name: "DSA", level: 88 },
//         { name: "REST APIs", level: 82 },
//       ],
//     },
//     {
//       title: "Environments & Tools",
//       subtitle: "Development Workflow",
//       icon: Terminal,
//       size: "md:col-span-2",
//       gradient: "from-emerald-500/[0.04] via-teal-500/[0.02] to-transparent",
//       glowColor: "rgba(16, 185, 129, 0.08)",
//       accentText: "text-emerald-600",
//       accentBg: "bg-emerald-500",
//       skills: [
//         { name: "Git & GitHub", level: 85, desc: "Version Control & Actions" },
//         { name: "Linux Systems", level: 70, desc: "Bash Scripting & Admin" },
//       ],
//     },
//   ];

//   // --- Animation Variants ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section id="skills" className="relative py-32 px-4 md:px-8 bg-[#F8FAFC] text-slate-800 overflow-hidden">
//       {/* Dynamic Background Blurs using original white and emerald palettes */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
//       <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-teal-300/15 rounded-full blur-[130px] pointer-events-none" />
//       <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

//       {/* Grid Pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
//           backgroundSize: '44px 44px'
//         }}
//       />

//       <div className="max-w-6xl mx-auto relative z-10">
        
//         {/* Section Header */}
//         <div className="flex flex-col items-center text-center mb-24">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4"
//           >
//             <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
//             <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500">
//               Stack & Capabilities
//             </span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-5"
//           >
//             Technical <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Engine</span>
//           </motion.h2>
          
//           <p className="text-slate-500 max-w-md text-sm md:text-base font-normal tracking-wide">
//             A cohesive collection of frameworks, languages, and tools tailored to build scalable ecosystems.
//           </p>
//         </div>

//         {/* Bento Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//         >
//           {skillCategories.map((category, idx) => {
//             const Icon = category.icon;
//             const isHovered = hoveredIndex === idx;

//             return (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className={`relative ${category.size} rounded-3xl bg-gradient-to-b ${category.gradient} bg-white/70 border border-slate-200/80 backdrop-blur-md p-6 md:p-8 overflow-hidden transition-all duration-300`}
//                 style={{
//                   boxShadow: isHovered ? `0 20px 40px -15px ${category.glowColor}, 0 4px 6px -1px rgb(0 0 0 / 0.05)` : "0 1px 3px 0 rgb(0 0 0 / 0.05)",
//                   borderColor: isHovered ? "rgba(16, 185, 129, 0.3)" : "rgba(226, 232, 240, 0.8)"
//                 }}
//               >
//                 {/* Active hover blob */}
//                 <div 
//                   className="absolute pointer-events-none rounded-full blur-[40px] w-32 h-32 -top-10 -left-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
//                   style={{ background: category.glowColor }}
//                 />

//                 {/* Card Top Banner */}
//                 <div className="flex items-start justify-between mb-8 relative z-10">
//                   <div>
//                     <span className={`text-xs font-bold ${category.accentText} uppercase tracking-wider block mb-0.5`}>
//                       {category.subtitle}
//                     </span>
//                     <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
//                       {category.title}
//                     </h3>
//                   </div>
//                   <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-600 shadow-sm">
//                     <Icon className="w-5 h-5" />
//                   </div>
//                 </div>

//                 {/* Layout Switcher */}
//                 {category.size.includes("md:col-span-2") ? (
//                   /* 2-Column Row Stack (Wide Items) */
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
//                     {category.skills.map((skill, sIdx) => (
//                       <div key={sIdx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors group/item">
//                         <div className="flex justify-between items-center mb-2">
//                           <span className="text-sm font-bold text-slate-800 group-hover/item:text-slate-900 transition-colors">
//                             {skill.name}
//                           </span>
//                           <span className={`text-xs font-mono font-bold ${category.accentText}`}>
//                             {skill.level}%
//                           </span>
//                         </div>
//                         {skill.desc && (
//                           <p className="text-[11px] text-slate-500 mb-3 font-normal">
//                             {skill.desc}
//                           </p>
//                         )}
//                         <div className="h-1.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
//                           <motion.div 
//                             initial={{ width: 0 }}
//                             whileInView={{ width: `${skill.level}%` }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8, delay: sIdx * 0.05 }}
//                             className={`h-full rounded-full ${category.accentBg}`}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   /* Standard Linear List (Tall Items) */
//                   <div className="space-y-5 relative z-10">
//                     {category.skills.map((skill, sIdx) => (
//                       <div key={sIdx} className="space-y-2">
//                         <div className="flex justify-between text-xs font-bold">
//                           <span className="text-slate-700">{skill.name}</span>
//                           <span className="text-slate-400 font-mono">{skill.level}%</span>
//                         </div>
//                         <div className="h-2 w-full bg-slate-200/60 rounded-full overflow-hidden p-[1px]">
//                           <motion.div
//                             initial={{ width: 0 }}
//                             whileInView={{ width: `${skill.level}%` }}
//                             viewport={{ once: true }}
//                             className={`h-full rounded-full ${category.accentBg}`}
//                             transition={{ duration: 0.8, delay: sIdx * 0.05 }}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Dynamic Footer Status */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mt-16 flex justify-center items-center gap-6 text-xs text-slate-400 font-mono font-bold uppercase tracking-wider"
//         >
//           <div className="flex items-center gap-1.5">
//             <Code2 className="w-3.5 h-3.5 text-emerald-600" /> Scalable
//           </div>
//           <div className="w-1 h-1 bg-slate-300 rounded-full" />
//           <div className="flex items-center gap-1.5">
//             <Layers className="w-3.5 h-3.5 text-teal-600" /> Modular
//           </div>
//           <div className="w-1 h-1 bg-slate-300 rounded-full" />
//           <div className="flex items-center gap-1.5">
//             <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Fast Execution
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Layout,
  Cpu,
  Terminal,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const SkillsSection = () => {
  const [active, setActive] = useState(0);

  const skillCategories = [
    {
      title: "Backend Systems",
      icon: Database,
      desc: "Building scalable APIs, microservices, and performant architectures.",
      skills: ["Java", "Spring Boot", "MySQL", "FastAPI"],
      glow: "from-emerald-500/30",
      border: "border-emerald-400/30",
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      desc: "Crafting immersive UI experiences with motion and responsiveness.",
      skills: ["React", "Tailwind", "Framer Motion", "JavaScript"],
      glow: "from-teal-500/30",
      border: "border-teal-400/30",
    },
    {
      title: "Core Computer Science",
      icon: Cpu,
      desc: "Strong foundations in algorithms, APIs, and system thinking.",
      skills: ["DSA", "REST APIs", "OOP", "Problem Solving"],
      glow: "from-emerald-500/20",
      border: "border-emerald-400/20",
    },
    {
      title: "Developer Workflow",
      icon: Terminal,
      desc: "Efficient tooling, version control, and Linux-based environments.",
      skills: ["GitHub", "Linux", "CLI", "Deployment"],
      glow: "from-teal-500/20",
      border: "border-teal-400/20",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F8FAFC] py-32 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
                Technical Ecosystem
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-slate-900"
            >
              Engineering
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-slate-500 text-lg max-w-xl leading-relaxed"
            >
              A modern development ecosystem focused on scalable backend
              systems, immersive frontend experiences, and efficient engineering
              workflows.
            </motion.p>
          </div>

          {/* Interactive Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[380px] h-[380px]">
              {/* Center Core */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute inset-[30%] rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-[0_0_80px_rgba(16,185,129,0.35)] flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg tracking-wide">
                  CORE STACK
                </span>
              </motion.div>

              {/* Orbit Nodes */}
              {skillCategories.map((item, index) => {
                const angle = (index / skillCategories.length) * Math.PI * 2;
                const radius = 150;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const Icon = item.icon;

                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.08 }}
                    onMouseEnter={() => setActive(index)}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-24 h-24 rounded-3xl border backdrop-blur-xl bg-white/70
                    shadow-xl transition-all duration-300 ${item.border}`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <Icon className="w-7 h-7 text-slate-700 mb-1" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide text-center px-1">
                        {item.title}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Active Content Panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`relative overflow-hidden rounded-[32px] border ${skillCategories[active].border}
          bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]`}
        >
          {/* Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${skillCategories[active].glow} to-transparent opacity-40`}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                  {React.createElement(skillCategories[active].icon, {
                    className: "w-7 h-7 text-white",
                  })}
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">
                    {skillCategories[active].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                {skillCategories[active].desc}
              </p>
            </div>

            {/* Skills */}
            <div className="grid sm:grid-cols-2 gap-4">
              {skillCategories[active].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">
                      {skill}
                    </span>

                    <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>

                  <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            "Scalable Systems",
            "Modern UI",
            "Performance Driven",
            "Clean Architecture",
          ].map((tag, idx) => (
            <div
              key={idx}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;