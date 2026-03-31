import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const organizers = [
  {
    name: "HackSlash",
    code: "HS-DEV",
    description:
      "Hackslash Developer’s Club NIT Patna is a vibrant community of developers, designers, and innovators dedicated to fostering a culture of collaboration and technological excellence. The club encourages students to explore emerging technologies, build impactful projects, and contribute to real-world problem solving through hackathons, workshops, and open innovation initiatives.",
    image: "/Hackslash.png",
    instagram: "https://www.instagram.com/hackslash.nitp",
    linkedin: "https://www.linkedin.com/company/hackslash/",
    accent: "text-primary border-primary",
    bgAccent: "bg-primary",
  },
  {
    name: "GDGOC",
    code: "GDG-NITP",
    description:
      "Google Developer Groups On Campus (GDGOC) NIT Patna is a student-driven developer community that empowers students to learn, build, and innovate using modern technologies. Through technical sessions, collaborative projects, and mentorship programs, GDGOC helps students strengthen their skills while creating impactful solutions with Google technologies.",
    image: "/GDGoc_logo.png",
    instagram: "https://www.instagram.com/gdgocnitp",
    linkedin: "https://www.linkedin.com/company/gdgocnitp/",
    accent: "text-blue-500 border-blue-500",
    bgAccent: "bg-blue-500",
  },
];

export default function Organizers() {
  return (
    <section className="relative z-20 py-24 text-white overflow-hidden bg-[#0a0a0c]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 scanlines opacity-30"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
              <span className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase">POWER UNIT // COMMUNITIES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
              Organizing <span className="text-stroke-white text-transparent">Communities</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed">
              Meet the engines that power ByteVerse and drive innovation,
              collaboration, and technology leadership at NIT Patna.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="text-xs font-mono text-gray-500 tracking-widest mb-1">TOTAL OUTPUT</div>
            <div className="text-2xl font-black italic font-display text-white">MAX PERFORMANCE</div>
          </div>
        </div>
      </div>

      {/* Cards Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {organizers.map((org, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative w-full h-full"
          >
            {/* Outer Glowing Border */}
            <div className={`absolute -inset-0.5 rounded-2xl ${org.bgAccent} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>

            {/* Card Container */}
            <div className="relative h-full w-full bg-[#111115] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col">

              {/* Inside Top Banner */}
              <div className="h-40 w-full relative bg-black flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Banner pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)' }}></div>
                <div className={`absolute inset-0 bg-gradient-to-t from-[black] to-${org.bgAccent.replace('bg-', '')}/10`}></div>

                {/* Logo Frame */}
                <div className={`relative w-24 h-24 rounded-full bg-black/80 border-2 ${org.accent} p-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,0,0,1)] z-10`}>
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-grow p-8 md:p-10 flex flex-col relative z-10">
                {/* Carbon fiber subtle overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

                {/* Heading */}
                <div className="flex justify-between items-start mb-6 align-top">
                  <div>
                    <div className={`font-mono text-xs ${org.accent.split(' ')[0]} tracking-widest uppercase mb-1`}>{org.code}</div>
                    <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white group-hover:text-gray-200 transition-colors">
                      {org.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Sector</span>
                    <span className="font-display text-xl font-bold italic text-white/50">0{index + 1}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {org.description}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto relative z-20">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${org.bgAccent} animate-pulse`}></div>
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Connect</span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={org.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-10 h-10 rounded bg-[#1a1a20] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1`}
                      aria-label={`${org.name} Instagram`}
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href={org.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-10 h-10 rounded bg-[#1a1a20] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1`}
                      aria-label={`${org.name} LinkedIn`}
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}