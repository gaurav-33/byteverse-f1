import { motion } from 'framer-motion';
import { useState } from 'react';

const crewData = [
    {
        id: "RD-001",
        name: "Sarah Jenkins",
        role: "Race Director",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1U1_KpkJxbGxa_36WZ7ND-VkESlc_VOcdjHWr1gAoW2klj3d4MsdoEgWA9xjV3TEQFC9tE4dY1xykI7l50ANxn8ehvwZlgT6m0fjlytNYtCOTTIzwZNl_CHvBdHYWj4qsNKSGyMGVInk0XFlSMuOOFbPm17SrtaxdT4rrpUkKMje4xKrGiNSfO1dLJhxEL7bL20-Qei6ycXrLrfrsCNm1xdjPCmvSgBufcs91rLw2vzw1AAHF2B_-MKVbWUMRilbmbp9KjTSBOBVw",
        category: "Management",
        stats: { experience: 98, calm: 95, speed: 70 }
    },
    {
        id: "ENG-042",
        name: "David Okoro",
        role: "Chief Mechanic",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuoxz2P9yIQNgvOyJbu4H8J9KH7wtQvdW89KXv97TzHB0MXqh7JbwqF9AxFkROxMbAb66ZTdtUxevnBktqRL6z-0LPXfyVpsFi6iRR5JFDSOQP1vu5vjaIPt7NLQ3O7izKEmmeQUumuHCqAMJw26f04AKslGUZdiopkUxRBshbkqX5tWdrm9RjZKqH-vMOvMXNSewLs6-xNZzrOIJErsjuB03JBL3uLOvsOMO7Vjt-KIld_tQVpBfncws9-Qhh6QDdGn6KpcUYPHZy",
        category: "Engineering",
        stats: { experience: 92, calm: 88, speed: 96 }
    },
    {
        id: "DES-007",
        name: "Elena Rodriguez",
        role: "Head of Aero",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY5Hi2hBZ9yVTRg7oEalRO2B4sqezfe_vy_BD0xEHUJ0DgZihSJAtoMCtpCA9XPTNcnbJ-8BP878x2Uj-16KE_ZRRl2uV1KO5GDqDowCRioUO_B8pqzrncyb00z0-SJ3_WygBaZSC3-hzvIhw6uKy4kk_2VIV5f8LQ32RuCPpjJB2Wcrp8Uv5xCCphdhE7lLV7P2aMbed6MeOn2Cvi3xX9qA6oLh2mOcacqdo7R0JnnjtEsZVAHS-rsBWJxmo7o_oiAXl8itu7HKBs",
        category: "Design",
        stats: { experience: 89, calm: 90, speed: 85 }
    },
    {
        id: "LOG-088",
        name: "Marcus Webb",
        role: "Pit Boss",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEh6cMSxTNBsu4CGw4O_IZ5kpdcLsUhcXS2yjVM12rVVmcvc2uIpMQhLFnGm8ztzZHEazDFHNwlRmJhIBmvz-1y0yBuszaLunsJ04uOzgOWEujDfVVgJ2HRkksOuHtde3ywqGpK6mgHw7bowbQDpvq1EwaMCXkN1MnmBGKZXUwRwDzhcwRTXC7xwsLQBWmF5VcnWIzh3AmOfRN_lr05B5NrRbPxMgFYnS6XV8VqBkJLAHsqls7YNOluJvNNP3h-PiQGJVMdy1k5TQY",
        category: "Logistics",
        stats: { experience: 94, calm: 99, speed: 92 }
    }
];

export const PitCrew = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Management", "Engineering", "Design", "Logistics"];
    const filteredCrew = activeCategory === "All" ? crewData : crewData.filter(m => m.category === activeCategory);

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
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[450px] bg-carbon border border-white/10 rounded-xl overflow-hidden hover:border-f1-red/50 transition-colors duration-500"
        >
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">

                {/* ID Badge */}
                <div className="absolute top-6 right-6">
                    <div className="text-[10px] font-mono text-white/40 border border-white/20 px-2 py-1 rounded backdrop-blur-sm">
                        {member.id}
                    </div>
                </div>

                {/* Role & Name */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-f1-red font-mono text-xs uppercase tracking-widest mb-1">{member.role}</div>
                    <h3 className="text-3xl font-black italic uppercase text-white leading-none mb-4">{member.name}</h3>
                </div>

                {/* Stats Panel (Reveals on Hover) */}
                <div className="overflow-hidden h-0 group-hover:h-32 transition-all duration-500 ease-out border-t border-white/10 pt-0 group-hover:pt-4">
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <StatBar label="EXP" value={member.stats.experience} />
                        <StatBar label="CALM" value={member.stats.calm} />
                        <StatBar label="PACE" value={member.stats.speed} />
                    </div>
                </div>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-f1-red/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none z-20"></div>
        </motion.div>
    );
};

const StatBar = ({ label, value }: { label: string, value: number }) => (
    <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-gray-400 w-8">{label}</span>
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-f1-red"
            ></motion.div>
        </div>
        <span className="text-[10px] font-mono text-white w-6 text-right">{value}%</span>
    </div>
);
