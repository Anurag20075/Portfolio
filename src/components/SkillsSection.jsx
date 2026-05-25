// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Database,
//   Layout,
//   Cpu,
//   Terminal,
//   Sparkles,
//   ArrowUpRight,
// } from "lucide-react";

// const SkillsSection = () => {
//   const [active, setActive] = useState(0);

//   const skillCategories = [
//     {
//       title: "Backend Systems",
//       icon: Database,
//       desc: "Building scalable APIs, microservices, and performant architectures.",
//       skills: ["Java", "Spring Boot", "MySQL", "FastAPI"],
//       glow: "from-emerald-500/30",
//       border: "border-emerald-400/30",
//     },
//     {
//       title: "Frontend Engineering",
//       icon: Layout,
//       desc: "Crafting immersive UI experiences with motion and responsiveness.",
//       skills: ["React", "Tailwind", "Framer Motion", "JavaScript"],
//       glow: "from-teal-500/30",
//       border: "border-teal-400/30",
//     },
//     {
//       title: "Core Computer Science",
//       icon: Cpu,
//       desc: "Strong foundations in algorithms, APIs, and system thinking.",
//       skills: ["DSA", "REST APIs", "OOP", "Problem Solving"],
//       glow: "from-emerald-500/20",
//       border: "border-emerald-400/20",
//     },
//     {
//       title: "Developer Workflow",
//       icon: Terminal,
//       desc: "Efficient tooling, version control, and Linux-based environments.",
//       skills: ["GitHub", "Linux", "CLI", "Deployment"],
//       glow: "from-teal-500/20",
//       border: "border-teal-400/20",
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-[#F8FAFC] py-32 px-6"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-[120px]" />
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-[140px]" />

//         {/* Grid */}
//         {/* <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #0f172a 1px, transparent 1px),
//               linear-gradient(to bottom, #0f172a 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//           }}
//         /> */}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-6"
//             >
//               <Sparkles className="w-4 h-4 text-emerald-600" />
//               <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
//                 Technical Ecosystem
//               </span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-slate-900"
//             >
//               Engineering
//               <br />
//               <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
//                 Intelligence
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="mt-8 text-slate-500 text-lg max-w-xl leading-relaxed"
//             >
//               A modern development ecosystem focused on scalable backend
//               systems, immersive frontend experiences, and efficient engineering
//               workflows.
//             </motion.p>
//           </div>

//           {/* Interactive Orb */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative flex justify-center items-center"
//           >
//             <div className="relative w-[380px] h-[380px]">
//               {/* Center Core */}
//               <motion.div
//                 animate={{
//                   scale: [1, 1.05, 1],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                 }}
//                 className="absolute inset-[30%] rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-[0_0_80px_rgba(16,185,129,0.35)] flex items-center justify-center"
//               >
//                 <span className="text-white font-bold text-lg tracking-wide">
//                   CORE STACK
//                 </span>
//               </motion.div>

//               {/* Orbit Nodes */}
//               {skillCategories.map((item, index) => {
//                 const angle = (index / skillCategories.length) * Math.PI * 2;
//                 const radius = 150;

//                 const x = Math.cos(angle) * radius;
//                 const y = Math.sin(angle) * radius;

//                 const Icon = item.icon;

//                 return (
//                   <motion.button
//                     key={index}
//                     whileHover={{ scale: 1.08 }}
//                     onMouseEnter={() => setActive(index)}
//                     className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//                     w-24 h-24 rounded-3xl border backdrop-blur-xl bg-white/70
//                     shadow-xl transition-all duration-300 ${item.border}`}
//                     style={{
//                       transform: `translate(${x}px, ${y}px)`,
//                     }}
//                   >
//                     <div className="flex flex-col items-center justify-center h-full">
//                       <Icon className="w-7 h-7 text-slate-700 mb-1" />
//                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide text-center px-1">
//                         {item.title}
//                       </span>
//                     </div>
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>

//         {/* Active Content Panel */}
//         <motion.div
//           key={active}
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className={`relative overflow-hidden rounded-[32px] border ${skillCategories[active].border}
//           bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]`}
//         >
//           {/* Glow */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-br ${skillCategories[active].glow} to-transparent opacity-40`}
//           />

//           <div className="relative z-10 grid lg:grid-cols-2 gap-12">
//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
//                   {React.createElement(skillCategories[active].icon, {
//                     className: "w-7 h-7 text-white",
//                   })}
//                 </div>

//                 <div>
//                   <h3 className="text-3xl font-black text-slate-900">
//                     {skillCategories[active].title}
//                   </h3>
//                 </div>
//               </div>

//               <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
//                 {skillCategories[active].desc}
//               </p>
//             </div>

//             {/* Skills */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               {skillCategories[active].skills.map((skill, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: idx * 0.08 }}
//                   className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="font-bold text-slate-800">
//                       {skill}
//                     </span>

//                     <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </div>

//                   <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: "85%" }}
//                       transition={{ duration: 1 }}
//                       className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer */}
//         <div className="mt-16 flex flex-wrap justify-center gap-4">
//           {[
//             "Scalable Systems",
//             "Modern UI",
//             "Performance Driven",
//             "Clean Architecture",
//           ].map((tag, idx) => (
//             <div
//               key={idx}
//               className="px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600"
//             >
//               {tag}
//             </div>
//           ))}
//         </div>
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
      desc: "Designing scalable APIs, distributed systems, and high-performance backend architectures.",
      skills: [
        "Spring Boot Architecture",
        "RESTful APIs",
        "Database Optimization",
        "Microservices",
      ],
      glow: "from-emerald-500/20",
      border: "border-emerald-400/20",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      desc: "Crafting immersive digital experiences with fluid motion and modern UI systems.",
      skills: [
        "React Ecosystem",
        "Framer Motion",
        "Tailwind Systems",
        "Responsive Design",
      ],
      glow: "from-cyan-500/20",
      border: "border-cyan-400/20",
      accent: "from-cyan-500 to-blue-500",
    },
    {
      title: "Core Computer Science",
      icon: Cpu,
      desc: "Strong engineering foundations focused on algorithms, architecture, and problem solving.",
      skills: [
        "Data Structures",
        "System Design",
        "Object-Oriented Design",
        "Optimization Thinking",
      ],
      glow: "from-violet-500/20",
      border: "border-violet-400/20",
      accent: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Developer Workflow",
      icon: Terminal,
      desc: "Efficient development environments, deployment pipelines, and productivity workflows.",
      skills: [
        "Git Workflows",
        "Linux Environments",
        "CLI Tooling",
        "Deployment Pipelines",
      ],
      glow: "from-orange-500/20",
      border: "border-orange-400/20",
      accent: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-36 px-6 bg-[#F8FAFC]"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-emerald-50" />

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[140px]" />

        {/* Floating Blur Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-24 right-24 w-28 h-28 rounded-full bg-white/30 backdrop-blur-3xl border border-white/40 shadow-2xl"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-24 left-20 w-20 h-20 rounded-full bg-white/20 backdrop-blur-3xl border border-white/40 shadow-xl"
        />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#0f172a 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border border-slate-200 backdrop-blur-xl shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />

              <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500">
                Technical Ecosystem
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-slate-900"
            >
              Building
              <br />

              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Intelligent
              </span>

              <br />
              Systems
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              Combining scalable backend engineering, immersive frontend
              experiences, and modern workflows to craft impactful digital
              products.
            </motion.p>
          </div>

          {/* Orb System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-[420px] h-[420px]"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-slate-200/70" />

              <div className="absolute inset-[12%] rounded-full border border-slate-200/40" />

              {/* Core */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute inset-[34%] rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-[0_0_80px_rgba(16,185,129,0.35)] flex items-center justify-center"
              >
                <div className="text-center">
                  <h3 className="text-white font-black text-lg tracking-wide">
                    CORE
                  </h3>

                  <p className="text-white/70 text-xs uppercase tracking-[0.3em]">
                    STACK
                  </p>
                </div>
              </motion.div>
             {/* Orbit Nodes */}
           {/* {skillCategories.map((item, index) => {
             const angle = (index / skillCategories.length) * Math.PI * 2;
             const radius = 165;
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
           })} */}
              {/* Orbit Nodes */}
{skillCategories.map((item, index) => {
  const angle = (index / skillCategories.length) * Math.PI * 2;

  const radius = 165;

  const x = Math.cos(angle) * radius;

  const y = Math.sin(angle) * radius;

  const Icon = item.icon;

  return (
    <motion.button
      key={index}
      whileHover={{
        scale: 1.08,
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
      }}
      onMouseEnter={() => setActive(index)}
      className={`absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-28 h-28 rounded-[30px]
      border ${item.border}
      bg-white/70 backdrop-blur-2xl
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      overflow-hidden group`}
      style={{
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
      }}
    >
      {/* Animated Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.glow} 
        to-transparent opacity-60 
        group-hover:opacity-100 
        transition-opacity duration-500`}
      />

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className="absolute top-0 left-[-120%] w-[200%] h-full 
          bg-gradient-to-r from-transparent via-white/40 to-transparent 
          rotate-12 group-hover:left-[120%] 
          transition-all duration-1000"
        />
      </div>

      {/* Inner Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div
          className={`w-14 h-14 rounded-2xl 
          bg-gradient-to-br ${item.accent}
          flex items-center justify-center 
          shadow-lg mb-2`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide text-center px-2 leading-tight">
          {item.title}
        </span>
      </div>
    </motion.button>
  );
})}
            </motion.div>
          </motion.div>
        </div>

        {/* Content Panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`relative overflow-hidden rounded-[40px] border ${skillCategories[active].border}
          bg-white/60 backdrop-blur-2xl p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.08)]`}
        >
          {/* Gradient Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${skillCategories[active].glow} to-transparent opacity-50`}
          />

          {/* Glass Reflection */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:to-transparent before:pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-14">
            {/* Left */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div
                  className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${skillCategories[active].accent} flex items-center justify-center shadow-xl`}
                >
                  {React.createElement(skillCategories[active].icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>

                <div>
                  <h3 className="text-4xl font-black text-slate-900">
                    {skillCategories[active].title}
                  </h3>

                  <div className="w-20 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 mt-2" />
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                {skillCategories[active].desc}
              </p>
            </div>

            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-5">
              {skillCategories[active].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-6 shadow-lg"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
                        Capability
                      </p>

                      <h4 className="font-bold text-slate-800 text-lg leading-snug">
                        {skill}
                      </h4>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Pills */}
        <div className="mt-20 flex flex-wrap justify-center gap-5">
          {[
            "Scalable Infrastructure",
            "Motion-Driven UI",
            "Clean Architecture",
            "Modern Workflows",
          ].map((tag, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -3,
              }}
              className="px-6 py-3 rounded-full bg-white/70 border border-slate-200 backdrop-blur-xl shadow-sm text-sm font-semibold text-slate-600"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;