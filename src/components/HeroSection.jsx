// import React from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   // Animation variants for staggering children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-[#0B0F1A] overflow-hidden px-6">
//       {/* 1. Background Effects - Radial Spotlight */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00C6D7]/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
//       </div>

//       {/* 2. Main Content Container */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-4xl text-center"
//       >
//         <motion.p
//           variants={itemVariants}
//           className="text-[#00C6D7] font-mono text-sm md:text-base tracking-[0.2em] mb-4 uppercase"
//         >
//           &lt; Hello World, I'm /&gt;
//         </motion.p>

//         <motion.h1
//           variants={itemVariants}
//           className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight"
//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#00C6D7]">
//             Anurag Goyal
//           </span>
//         </motion.h1>

//         <motion.h2
//           variants={itemVariants}
//           className="text-xl md:text-3xl font-semibold text-slate-300 mb-8"
//         >
//           Building <span className="text-white">Robust Backends</span> &
//           <span className="text-[#00C6D7]"> Immersive Frontends</span>
//         </motion.h2>

//         <motion.p
//           variants={itemVariants}
//           className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
//         >
//           I'm a Full-Stack Developer specializing in high-performance web applications.
//           From architecting <b>Java Spring Boot</b> microservices to crafting
//           fluid <b>React</b> interfaces, I bridge the gap between logic and design.
//         </motion.p>

//         {/* 3. Refined Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-5"
//         >
//           <motion.a
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 198, 215, 0.3)" }}
//             whileTap={{ scale: 0.95 }}
//             href="#projects"
//             className="px-10 py-4 bg-[#00C6D7] text-[#0B0F1A] rounded-xl font-bold transition-colors"
//           >
//             View Projects
//           </motion.a>

//           <motion.button
//             whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-10 py-4 border border-slate-700 text-white rounded-xl font-bold flex items-center gap-2"
//           >
//             Get In Touch
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* 4. Animated Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//         className="absolute bottom-8 flex flex-col items-center gap-2"
//       >
//         <span className="text-slate-500 text-xs font-mono tracking-widest uppercase">Scroll</span>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           className="w-1 h-12 bg-gradient-to-b from-[#00C6D7] to-transparent rounded-full"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F8FAFC] overflow-hidden px-6">
      {/* 1. Background Effects - Soft Ambient Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00C6D7]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/20 blur-[120px] rounded-full" />
      </div>

      {/* 2. Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#008C9A] font-mono text-sm md:text-base tracking-[0.2em] mb-4 uppercase"
        >
          &lt; Hello World, I'm /&gt;
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-extrabold text-slate-900 mb-6 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-[#008C9A]">
            Anurag Goyal
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl font-semibold text-slate-600 mb-8"
        >
          Building <span className="text-slate-900">Robust Backends</span> &
          <span className="text-[#008C9A]"> Immersive Frontends</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm a Full-Stack Developer specializing in high-performance web applications.
          From architecting <b className="text-slate-700">Java Spring Boot</b> microservices to crafting
          fluid <b className="text-slate-700">React</b> interfaces, I bridge the gap between logic and design.
        </motion.p>

        {/* 3. Refined Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 198, 215, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-10 py-4 bg-[#008C9A] text-white rounded-xl font-bold transition-colors"
          >
            View Projects
          </motion.a>

          <motion.button
            whileHover={{ backgroundColor: "rgba(15, 23, 42, 0.05)", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-slate-300 text-slate-800 rounded-xl font-bold flex items-center gap-2"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 4. Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-12 bg-gradient-to-b from-[#008C9A] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;