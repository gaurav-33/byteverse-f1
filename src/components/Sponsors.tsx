import { motion } from 'framer-motion';

// Current Sponsors Data
const currentSponsors = [
    {
        category: "Title Sponsor",
        icon: "star",
        color: "text-blue-700",
        sponsors: [
            {
                name: "Unstop",
                imageUrl: "/sponsors/unstop_logo.png",
                base: "bg-blue-800/30",
                hover: "hover:bg-blue-700/80",
                accent: "bg-blue-700",
                shadow: "hover:shadow-[0_0_40px_rgba(29,78,137,0.3)]"
            }
        ]
    },
    {
        category: "Associate Sponsors",
        icon: "handshake",
        color: "text-fuchsia-500",
        sponsors: [
            {
                name: "Beeceptor",
                imageUrl: "/sponsors/beeceptor_logo.png",
                base: "bg-fuchsia-600/30",
                hover: "hover:bg-fuchsia-500/80",
                accent: "bg-fuchsia-500",
                shadow: "hover:shadow-[0_0_40px_rgba(192,38,211,0.25)]"
            },
            {
                name: "Interview Cake",
                imageUrl: "/sponsors/interview_cake_logo.png",
                base: "bg-cyan-500/30",
                hover: "hover:bg-cyan-400/80",
                accent: "bg-cyan-400",
                shadow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            },
            {
                name: ".xyz",
                imageUrl: "/sponsors/xyz_logo.png",
                base: "bg-purple-900/40",
                hover: "hover:bg-purple-800/80",
                accent: "bg-purple-800",
                shadow: "hover:shadow-[0_0_40px_rgba(107,33,168,0.3)]"
            }
        ]
    },
    {
        category: "Sub Event Sponsors",
        icon: "event",
        color: "text-rose-500",
        sponsors: [
            {
                name: "Appwrite",
                imageUrl: "/sponsors/appwrite_logo.png",
                base: "bg-rose-500/30",
                hover: "hover:bg-rose-400/80",
                accent: "bg-rose-400",
                shadow: "hover:shadow-[0_0_40px_rgba(244,63,94,0.25)]"
            },
            {
                name: "Zulip",
                imageUrl: "/sponsors/zulip_logo.png",
                base: "bg-indigo-500/30",
                hover: "hover:bg-indigo-400/80",
                accent: "bg-indigo-400",
                shadow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
            }
        ]
    }
];

export const Sponsors = () => {
    return (
        <section id="sponsors" className="relative z-20 w-full min-w-0 max-w-7xl mx-auto px-6 py-12 mb-12 scroll-mt-24">
            <div className="mb-12 flex items-center justify-between">
                <div>
                    <div className="text-xs font-mono text-primary tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        GRID // PARTNERS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                        Sponsors
                    </h2>
                    <p className="text-gray-400 mt-2 max-w-2xl font-mono text-sm">
                        The organizations powering innovation at ByteVerse
                    </p>
                </div>
            </div>

            <div className="space-y-16">
                {currentSponsors.map((group, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        key={i}
                        className="relative"
                    >
                        <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                            <span className={`material-icons text-4xl ${group.color} drop-shadow-[0_0_15px_currentColor]`}>{group.icon}</span>
                            <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white tracking-widest">{group.category}</h3>
                            <div className="hidden md:block flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
                        </div>

                        <div className={group.sponsors.length === 1 ? "flex items-center justify-start" : "grid grid-cols-2 lg:grid-cols-3 gap-6"}>
                            {group.sponsors.map((sponsor: any, j: number) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.4, delay: j * 0.1 }}
                                    key={sponsor.name}
                                    className={`group relative p-[1px] shrink-0 transition-all duration-300 ${sponsor.shadow} ${sponsor.base} ${sponsor.hover} [clip-path:polygon(20px_0,100%_0,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,0_100%,0_20px)] ${group.sponsors.length === 1 ? 'w-full max-w-[480px]' : ''}`}
                                >
                                    <div className={`relative w-full h-full bg-white/95 backdrop-blur-md p-8 flex flex-col items-center justify-center gap-6 overflow-hidden min-h-[160px] [clip-path:polygon(20px_0,100%_0,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,0_100%,0_20px)] ${group.sponsors.length === 1 ? 'md:min-h-[260px]' : ''}`}>

                                        {/* Scanline overlay on hover */}
                                        <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity"></div>

                                        {/* Accent top/bottom highlights respecting the chamfered corners */}
                                        <div className={`absolute top-0 left-[20px] w-[calc(100%-20px)] h-1 opacity-80 ${sponsor.accent}`}></div>
                                        <div className={`absolute bottom-0 right-[20px] w-[calc(100%-20px)] h-1 opacity-80 ${sponsor.accent}`}></div>

                                        <img
                                            src={sponsor.imageUrl}
                                            alt={sponsor.name}
                                            className={`w-auto max-w-full object-contain filter transition-all duration-500 group-hover:drop-shadow-lg z-10 ${group.sponsors.length === 1 ? 'h-24 md:h-32' : 'h-16 md:h-20'}`}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />

                                        {/* Fallback Text if image fails */}
                                        <div className="hidden text-xl md:text-2xl font-black italic text-center text-gray-800 uppercase tracking-widest z-10">
                                            {sponsor.name}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
