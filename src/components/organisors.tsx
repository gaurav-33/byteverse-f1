import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const organizers = [
  {
    name: "HackSlash",
    description:
      "Hackslash Developer’s Club NIT Patna is a vibrant community of developers, designers, and innovators dedicated to fostering a culture of collaboration and technological excellence. The club encourages students to explore emerging technologies, build impactful projects, and contribute to real-world problem solving through hackathons, workshops, and open innovation initiatives.",
    image: "/Hackslash.png",
    instagram: "https://www.instagram.com/hackslash.nitp",
    linkedin: "https://www.linkedin.com/company/hackslash/",
  },
  {
    name: "GDGOC",
    description:
      "Google Developer Groups On Campus (GDGOC) NIT Patna is a student-driven developer community that empowers students to learn, build, and innovate using modern technologies. Through technical sessions, collaborative projects, and mentorship programs, GDGOC helps students strengthen their skills while creating impactful solutions with Google technologies.",
    image: "/GDGoc_logo.png",
    instagram: "https://www.instagram.com/gdgocnitp",
    linkedin: "https://www.linkedin.com/company/gdgocnitp/",
  },
];

export default function Organizers() {
  return (
    <section className="relative py-36 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        {/* <p className="text-xs font-mono text-primary tracking-widest mb-2">
          POWERED BY
        </p> */}

        <h2 className="text-5xl md:text-6xl font-black italic uppercase">
          ORGANIZING COMMUNITIES
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl text-lg">
          Meet the communities that power ByteVerse and bring innovation,
          collaboration, and technology leadership to NIT Patna.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {organizers.map((org, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl overflow-hidden
            bg-white/[0.03] backdrop-blur-xl border border-white/10
            hover:border-primary/40 transition-all duration-300
            min-h-[480px] p-10 flex flex-col justify-between"
          >

            {/* subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/30 pointer-events-none"></div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src={org.image}
                alt={org.name}
                className="h-24 object-contain transition-transform duration-500 group-hover:scale-110
                drop-shadow-[0_0_15px_rgba(0,255,120,0.45)]"
              />
            </div>

            {/* Content */}
            <div>

              <h3 className="text-3xl font-bold italic mb-4 group-hover:text-primary transition-colors">
                {org.name}
              </h3>

              <p className="text-gray-300 leading-relaxed text-[15px]">
                {org.description}
              </p>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-xl">

              <a
                href={org.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href={org.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
            transition duration-300 pointer-events-none
            border border-primary/40
            shadow-[0_0_40px_rgba(255,40,0,0.45)]"></div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}