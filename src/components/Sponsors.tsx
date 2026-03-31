import { motion } from 'framer-motion';

// Current Sponsors Data
const currentSponsors = [
    {
        category: "Title Sponsor",
        icon: "star",
        color: "text-yellow-500",
        sponsors: [
            { name: "Unstop", domain: "unstop.com", useSimpleIcon: false, imageUrl: "/unstop-logo.png" }
        ]
    },
    {
        category: "Sub Event Sponsors",
        icon: "event",
        color: "text-pink-500",
        sponsors: [
            { name: "Zulip", domain: "zulip.com", useSimpleIcon: true, slug: "zulip" },
            { name: "Appwrite", domain: "appwrite.io", useSimpleIcon: true, slug: "appwrite"}
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
                        OUR // PARTNERS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                        Current <span className="text-stroke-white text-transparent">Sponsors</span>
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

                        <div className={group.sponsors.length === 1 ? "flex items-center justify-start" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
                            {group.sponsors.map((sponsor: any, j: number) => (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.4, delay: j * 0.1 }}
                                    key={sponsor.name} 
                                    className={`group relative bg-carbon/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] overflow-hidden min-h-[180px] ${group.sponsors.length === 1 ? 'w-full max-w-[420px] md:min-h-[240px] shadow-[0_0_30px_rgba(234,179,8,0.05)] border-yellow-500/20' : ''}`}
                                >
                                    {/* Scanline overlay on hover */}
                                    <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"></div>
                                    
                                    {/* Accent border highlight */}
                                    <div className={`absolute top-0 left-0 w-full h-1 opacity-50 ${group.color.replace('text-', 'bg-')}`}></div>

                                    <img
                                        src={
                                            sponsor.imageUrl 
                                            ? sponsor.imageUrl 
                                            : sponsor.useSimpleIcon && sponsor.slug
                                                ? `https://cdn.simpleicons.org/${sponsor.slug}`
                                                : `https://img.logo.dev/${sponsor.domain}?token=pk_VZJykc4JQu6v2ZeJRBNNtA`
                                        }
                                        alt={sponsor.name}
                                        className={`w-auto max-w-full object-contain filter drop-shadow-md transition-all duration-500 group-hover:drop-shadow-xl z-10 ${group.sponsors.length === 1 ? 'h-20 md:h-28' : 'h-14 md:h-16'}`}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />

                                    {/* Fallback Initial */}
                                    <div className="hidden w-16 h-16 rounded-full bg-white/5 items-center justify-center mb-2 group-hover:bg-white/10 transition-colors z-10">
                                        <span className={`font-black text-2xl uppercase ${group.color}`}>{sponsor.name.charAt(0)}</span>
                                    </div>

                                    <div className={`text-xs font-bold text-center text-gray-400 group-hover:text-white uppercase tracking-widest leading-relaxed z-10 ${group.sponsors.length === 1 ? 'text-sm' : ''}`}>
                                        {sponsor.name}
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
