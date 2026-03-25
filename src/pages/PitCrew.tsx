import { motion } from 'framer-motion';
import { useState } from 'react';
import crewData from '../data/pit-crew';

export const PitCrew = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Website", "Speaker and Judges", "Design", "Content", "Sponsorship", "DevFolio"];

    const filteredCrew = activeCategory === "All"
        ? crewData
        : crewData.filter(m => m.team.includes(activeCategory));

    return (
        <section className="min-h-screen bg-asphalt text-white py-24 font-display overflow-hidden relative">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-carbon-fiber opacity-30"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-[-12deg]"></div>
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20 flex flex-col md:flex-row justify-between items-center md:items-end border-b border-white/10 pb-8 text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                            <span className="w-2 h-2 bg-f1-red rounded-full animate-ping"></span>
                            <span className="text-f1-red font-mono text-xs tracking-[0.3em] uppercase">Team Personnel</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            The <span className="text-stroke-white text-transparent">Crew</span>
                        </h1>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Crew Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredCrew.map((member, i) => (
                        <CrewCard key={member.id} member={member} index={i} />
                    ))}
                </div>

            </main>
        </section>
    );
};

const CrewCard = ({ member, index }: { member: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ height: 320 }}
            className="min-w-[240px] w-[240px] md:w-[320px] bg-carbon border border-white/10 rounded-xl overflow-hidden relative group h-[320px]"
        >
            <div className="absolute inset-0 z-0">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 p-4 flex flex-col justify-end h-full">
                <div className="mb-2">
                    <div className="text-[10px] font-mono text-primary uppercase tracking-widest">
                        {member.team.filter((t: string) => t !== "All").join(" · ")}
                    </div>
                    <h3 className="text-lg md:text-xl font-black italic uppercase text-white">{member.name}</h3>
                </div>

                <div className="flex items-center gap-2">
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-white/80 hover:text-primary transition-colors text-xs md:text-sm" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.788-1.75-1.76 0-.972.784-1.759 1.75-1.759s1.75.787 1.75 1.759c0 .972-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.75c0-1.133-.02-2.59-1.58-2.59-1.58 0-1.82 1.233-1.82 2.51v4.83h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z" />
                        </svg>
                    </a>
                    <a href={member.github} target="_blank" rel="noreferrer" className="text-white/80 hover:text-primary transition-colors text-xs md:text-sm" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};