import { motion } from 'framer-motion';
import F1CarTicker from '../components/F1CarTicker';

const judges = [
    {
        id: 1,
        name: "Ashish Ranjan",
        role: "SDE-2 (L62)",
        company: "Microsoft",
        expertise: "Databases",
        image: "/judges/ProfilePic - Ashish Ranjan.jpg",
        linkedin: "https://www.linkedin.com/in/ashish-ranjan-410a6b14b/",
        github: "https://github.com/ASHISH-RANJAN59",
        accentColor: "from-blue-500/20 to-blue-900/10",
        badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    },
    {
        id: 2,
        name: "Gopal Jaiswal",
        role: "Software Engineer 2",
        company: "Microsoft",
        expertise: "AI & ML",
        image: "/judges/1723012979419 - GOPAL JAISWAL.jpeg",
        linkedin: "https://www.linkedin.com/in/gopal-jaiswal-568ab9a8/",
        github: "https://github.com/gopaljaiswal",
        accentColor: "from-cyan-500/20 to-cyan-900/10",
        badgeColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    },
    {
        id: 3,
        name: "Abhishek Tripathi",
        role: "SDE-2",
        company: "TATA CliQ",
        expertise: "FullStack & DevOps",
        image: "/judges/get - Abhishek Tripathi.jpg",
        linkedin: "https://www.linkedin.com/in/abhishek-tripathi-95b9451a9/",
        github: undefined,
        accentColor: "from-orange-500/20 to-orange-900/10",
        badgeColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]",
    },
    {
        id: 4,
        name: "Maya Kataria",
        role: "SDE 2",
        company: "Flipkart",
        expertise: "AI & ML",
        image: "/judges/photo - Maya Kataria.jpeg",
        linkedin: "https://www.linkedin.com/in/maya-kataria",
        github: undefined,
        accentColor: "from-pink-500/20 to-pink-900/10",
        badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]",
    },
    {
        id: 5,
        name: "Raunak Jaiswal",
        role: "Software Engineer",
        company: "Microsoft",
        expertise: "Web Dev, AI & Android",
        image: "/judges/Screenshot_20260322_155854_Gallery - Raunak Jaiswal.jpg",
        linkedin: "https://www.linkedin.com/in/raunak-j-857ab11a7",
        github: "https://github.com/raunakjaiswal",
        accentColor: "from-violet-500/20 to-violet-900/10",
        badgeColor: "text-violet-400 border-violet-400/30 bg-violet-400/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]",
    },
    {
        id: 6,
        name: "Rishabh Prakash",
        role: "SDE 1",
        company: "Amazon",
        expertise: "Web Development",
        image: "/judges/IMG_20250622_181127491_HDR_AE~2_Original - Rishabh Prakash.jpeg",
        linkedin: "https://www.linkedin.com/in/rishabh-prakash-5b8299203",
        github: undefined,
        accentColor: "from-yellow-500/20 to-yellow-900/10",
        badgeColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]",
    },
    {
        id: 7,
        name: "Shivam Gupta",
        role: "SDE 2",
        company: "Swiggy",
        expertise: "Android Development",
        image: "/judges/IMG_1360 - Shivam Gupta.JPEG",
        linkedin: "https://www.linkedin.com/in/shivam-gupta-33ab6a1ba/",
        github: undefined,
        accentColor: "from-emerald-500/20 to-emerald-900/10",
        badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    },
    {
        id: 8,
        name: "Niwesh Gupta",
        role: "Software Engineer",
        company: "Meta",
        expertise: "Web Development",
        image: "/judges/20260228_142238(1) - Niwesh Gupta.jpg",
        linkedin: "https://www.linkedin.com/in/niweshgupta",
        github: undefined,
        accentColor: "from-primary/20 to-red-900/10",
        badgeColor: "text-primary border-primary/30 bg-primary/10",
        glowColor: "hover:shadow-[0_0_30px_rgba(255,30,0,0.25)]",
    },
];



export const Judges = () => {
    return (
        <section id='judges' className="min-h-screen bg-asphalt text-white py-24 font-display overflow-hidden relative">

            {/* Background texture */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent skew-x-[12deg]"></div>
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black via-transparent to-transparent"></div>
                {/* Subtle grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,30,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* ── Header ── */}
                <div className="relative mb-16 flex flex-col md:flex-row justify-between items-center md:items-end pb-10 text-center md:text-left gap-6">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase">Race Officials</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            The <span className="text-stroke-white text-transparent">Judges</span>
                        </h1>
                        <p className="text-gray-400 mt-3 max-w-xl font-mono text-sm">
                            Industry veterans evaluating your innovations — from Big Tech to fast-moving startups.
                        </p>
                    </div>

                    {/* Stats pill */}
                    <div className="relative z-10 flex gap-6">
                        <div className="flex flex-col items-center px-6 py-3 border border-white/10 bg-white/5 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]">
                            <span className="text-3xl font-black text-primary">{judges.length}</span>
                            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mt-0.5">Judges</span>
                        </div>
                        <div className="flex flex-col items-center px-6 py-3 border border-white/10 bg-white/5 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]">
                            <span className="text-3xl font-black text-primary">6+</span>
                            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mt-0.5">Companies</span>
                        </div>
                    </div>

                    {/* Animated ticker */}
                    <div className="absolute bottom-0 left-0 w-full h-[56px] flex items-center opacity-80 hover:opacity-100 transition-opacity">
                        <div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2"></div>
                        <div className="w-full absolute inset-0">
                            <F1CarTicker speed={2} height={56} transparent />
                        </div>
                    </div>
                </div>

                {/* ── Judges Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {judges.map((judge, i) => (
                        <JudgeCard key={judge.id} judge={judge} index={i} />
                    ))}
                </div>

            </main>
        </section>
    );
};

const JudgeCard = ({ judge, index }: { judge: typeof judges[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className={`group relative p-[1px] transition-all duration-500 ${judge.glowColor} bg-white/10 hover:bg-primary [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] flex flex-col`}
        >
            <div className="relative w-full bg-gradient-to-b from-[#141418] via-[#0e0e12] to-[#0a0a0c] [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] overflow-hidden flex flex-col flex-1">

                {/* Photo area */}
                <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                    {/* Solid dark base */}
                    <div className="absolute inset-0 bg-[#0a0a0c]"></div>

                    <img
                        src={judge.image}
                        alt={judge.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 z-10 w-full h-full object-contain object-center transform group-hover:scale-[1.03] transition-transform duration-700 grayscale-[15%] group-hover:grayscale-0"
                    />

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0c] to-transparent z-20"></div>
                    <div className="absolute inset-0 scanlines opacity-20 pointer-events-none mix-blend-overlay z-30"></div>

                    {/* Company badge - top left */}
                    <div className="absolute top-3 left-3 z-40">
                        <div className="px-2 py-1 bg-[#0a0a0c]/90 backdrop-blur border border-white/20 font-mono text-[9px] tracking-[0.2em] uppercase text-white flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${judge.badgeColor.includes('blue') ? 'bg-blue-400' : judge.badgeColor.includes('cyan') ? 'bg-cyan-400' : judge.badgeColor.includes('orange') ? 'bg-orange-400' : judge.badgeColor.includes('pink') ? 'bg-pink-400' : judge.badgeColor.includes('violet') ? 'bg-violet-400' : judge.badgeColor.includes('yellow') ? 'bg-yellow-400' : judge.badgeColor.includes('emerald') ? 'bg-emerald-400' : 'bg-primary'}`}></span>
                            {judge.company}
                        </div>
                    </div>

                    {/* Telemetry corner decorations */}
                    <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>
                    <div className="absolute bottom-[80px] left-3 w-5 h-5 border-b-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>

                    {/* Judge ID */}
                    <div className="absolute top-3 right-10 z-40 flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                        <span className="font-mono text-[8px] tracking-widest text-gray-400 uppercase">J{judge.id.toString().padStart(2, '0')}</span>
                    </div>
                </div>

                {/* Info Panel */}
                <div className="shrink-0 px-4 py-3 border-t border-primary/20 bg-gradient-to-r from-[#0e0e12] via-[#121218] to-[#0e0e12]">
                    <p className="font-black italic uppercase text-white text-base leading-tight truncate">{judge.name}</p>
                    <p className="font-mono text-[10px] text-gray-400 mt-0.5 tracking-wider">{judge.role}</p>

                    {/* Expertise chip */}
                    <div className={`inline-flex items-center gap-1 mt-2 px-2 py-0.5 border rounded-sm font-mono text-[9px] tracking-widest uppercase ${judge.badgeColor}`}>
                        <span className="material-icons text-[10px]">code</span>
                        {judge.expertise}
                    </div>

                    {/* Social Links row */}
                    <div className="mt-3 flex items-center gap-3">
                        {judge.linkedin && (
                            <a
                                href={judge.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${judge.name} LinkedIn`}
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.788-1.75-1.76 0-.972.784-1.759 1.75-1.759s1.75.787 1.75 1.759c0 .972-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.75c0-1.133-.02-2.59-1.58-2.59-1.58 0-1.82 1.233-1.82 2.51v4.83h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z" />
                                </svg>
                            </a>
                        )}
                        {judge.github && (
                            <a
                                href={judge.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${judge.name} GitHub`}
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        <div className="ml-auto font-mono text-[9px] text-gray-600 tracking-widest">
                            ID:J{judge.id.toString().padStart(2, '0')}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};
