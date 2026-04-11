// import React from "react";
// import { Github, Linkedin, Instagram, ChevronRight, Code2, Heart } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: "Home", href: "#" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const socialLinks = [
//     { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/anurag-goyal-05929b317/", label: "LinkedIn" },
//     { icon: <Github size={18} />, href: "https://github.com/Anurag20075", label: "GitHub" },
//     { icon: <Instagram size={18} />, href: "https://www.instagram.com/anurag.goyal.3158652/", label: "Instagram" },
//   ];

//   return (
//     <footer className="bg-[#0B0F1A] border-t border-white/5 pt-16 pb-8 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

//           {/* Brand Column */}
//           <div className="md:col-span-2">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 rounded-lg bg-[#00C6D7] flex items-center justify-center font-bold text-[#0B0F1A]">
//                 AG
//               </div>
//               <h3 className="text-2xl font-bold text-white tracking-tight">Anurag Goyal</h3>
//             </div>
//             <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
//               Full-stack developer specializing in building exceptional digital experiences.
//               Currently focused on architecting robust backends and premium user interfaces.
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((social, i) => (
//                 <a
//                   key={i}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00C6D7] hover:border-[#00C6D7]/50 transition-all"
//                   aria-label={social.label}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, i) => (
//                 <li key={i}>
//                   <a
//                     href={link.href}
//                     className="group text-slate-400 hover:text-[#00C6D7] flex items-center transition-colors"
//                   >
//                     <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Availability/Tech Column */}
//           <div>
//             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Current Status</h4>
//             <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="relative flex h-3 w-3">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//                 </span>
//                 <span className="text-white text-sm font-medium">Available for Hire</span>
//               </div>
//               <p className="text-xs text-slate-500 leading-relaxed">
//                 Open to Full-stack Roles & Freelance opportunities.
//               </p>
//             </div>

//             <div className="mt-6 flex items-center gap-2 text-slate-500 text-xs">
//               <Code2 size={14} />
//               <span>Built with React & Tailwind</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-slate-500 text-sm">
//             © {currentYear} <span className="text-white font-medium">Anurag Goyal</span>. All rights reserved.
//           </p>

//           <div className="flex items-center gap-1 text-slate-500 text-sm">
//             <span>Made with</span>
//             <Heart size={14} className="text-red-500 fill-red-500" />
//             <span>in Agra</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Github, Linkedin, Instagram, ChevronRight, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/anurag-goyal-05929b317/", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/Anurag20075", label: "GitHub" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/anurag.goyal.3158652/", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#008C9A] flex items-center justify-center font-bold text-white">
                AG
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Anurag Goyal</h3>
            </div>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed">
              Full-stack developer specializing in building exceptional digital experiences.
              Currently focused on architecting robust backends and premium user interfaces.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#008C9A] hover:border-[#008C9A]/50 hover:bg-slate-50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group text-slate-500 hover:text-[#008C9A] flex items-center transition-colors"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability/Tech Column */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest">Current Status</h4>
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-slate-900 text-sm font-medium">Available for Hire</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open to Full-stack Roles & Freelance opportunities.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-slate-400 text-xs">
              <Code2 size={14} />
              <span>Built with React & Tailwind</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-slate-900 font-medium">Anurag Goyal</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>in Agra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;