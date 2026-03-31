import F1CarTicker from '../components/F1CarTicker';
import { motion } from 'framer-motion';

const tracks = [
    {
        id: "01",
        code: "AI",
        title: "NEURAL PRIX",
        subtitle: "Artificial Intelligence",
        desc: "Build AI-powered solutions: NLP, computer vision, LLMs, or predictive analytics. Create impactful, intelligent systems that solve real-world problems.",
        specs: [
            { label: "DIFFICULTY", value: "HARD", color: "text-red-500" },
            { label: "CPU LOAD", value: "98%", color: "text-orange-500" }
        ],
        path: "M20,100 Q50,20 80,100 T140,100 M80,100 L80,150 M50,60 L110,60",
        color: "border-primary shadow-[0_0_10px_#ff1e00]",
        textHover: "group-hover:text-primary",
        accent: "bg-primary"
    },
    {
        id: "02",
        code: "WEB3",
        title: "BLOCKCHAIN CITY",
        subtitle: "Web3 - Blockchain",
        desc: "Design trustless applications using smart contracts, DeFi protocols, DAOs, or NFT infrastructure. Build the open, decentralized future of the internet.",
        specs: [
            { label: "SECURITY", value: "MAX", color: "text-green-500" },
            { label: "GAS FEE", value: "LOW", color: "text-blue-500" }
        ],
        path: "M30,120 L30,50 L90,30 L150,50 L150,120 L90,140 Z M90,85 L150,50 M90,85 L30,50 M90,85 L90,140",
        color: "border-yellow-500 shadow-[0_0_10px_#eab308]",
        textHover: "group-hover:text-yellow-500",
        accent: "bg-yellow-500"
    },
    {
        id: "03",
        code: "WEB",
        title: "WEB HYPERLOOP",
        subtitle: "Web Development",
        desc: "Develop full-stack web applications — responsive frontends, robust backends, and deployed pipelines. Use any stack (MERN, Next.js, Django, etc.).",
        specs: [
            { label: "STACK", value: "ANY", color: "text-blue-400" },
            { label: "RESP", value: "A+", color: "text-green-400" }
        ],
        path: "M20,100 C40,40 160,40 180,100 S140,160 100,140",
        color: "border-sky-500 shadow-[0_0_10px_#0ea5e9]",
        textHover: "group-hover:text-sky-500",
        accent: "bg-sky-500"
    },
    {
        id: "04",
        code: "APP",
        title: "MOBILE MONACO",
        subtitle: "App development",
        desc: "Craft high-performance mobile experiences for iOS, Android, or cross-platform. Focus on UI/UX, seamless navigation, and powerful features.",
        specs: [
            { label: "OS", value: "IOS/AND", color: "text-purple-400" },
            { label: "LATENCY", value: "MIN", color: "text-green-400" }
        ],
        path: "M50,20 L150,20 L150,140 L50,140 Z M100,130 A10,10 0 1,1 100.1,130 M70,40 L130,40",
        color: "border-purple-500 shadow-[0_0_10px_#a855f7]",
        textHover: "group-hover:text-purple-500",
        accent: "bg-purple-500"
    },
    {
        id: "05",
        code: "AR_VR",
        title: "VIRTUAL VELOCITY",
        subtitle: "Augmented Reality and Virtual Reality (AR/ VR)",
        desc: "Immersive innovations using ARCore, ARKit, Unity, or WebXR. Bridge the gap between digital and physical worlds with cutting-edge spatial tech.",
        specs: [
            { label: "DIMENSION", value: "3D", color: "text-pink-400" },
            { label: "FOV", value: "110°", color: "text-cyan-400" }
        ],
        path: "M30,100 C30,60 80,60 81,100 C81,140 119,140 119,100 C120,60 170,60 170,100 L170,120 L30,120 Z",
        color: "border-pink-500 shadow-[0_0_10px_#ec4899]",
        textHover: "group-hover:text-pink-500",
        accent: "bg-pink-500"
    },
    {
        id: "06",
        code: "GAME",
        title: "PIXEL PADDOCK",
        subtitle: "Game Development",
        desc: "Build a playable game — any genre, any engine. Focus on mechanics, graphics, and interactive storytelling. Unity, Unreal, Godot, or custom engines welcome.",
        specs: [
            { label: "FPS", value: "60+", color: "text-yellow-400" },
            { label: "ENGINE", value: "ANY", color: "text-orange-400" }
        ],
        path: "M30,100 C50,40 150,40 170,100 M60,120 L140,120",
        color: "border-orange-400 shadow-[0_0_10px_#fb923c]",
        textHover: "group-hover:text-orange-400",
        accent: "bg-orange-400"
    },
    {
        id: "07",
        code: "CRYPTO",
        title: "SECURE SECTOR",
        subtitle: "Cryptography and Network Security",
        desc: "Build tools for threat detection, penetration testing, cryptography, secure communications, or privacy-preserving systems. Defend the digital world.",
        specs: [
            { label: "RISK", value: "LOW", color: "text-emerald-400" },
            { label: "THREAT", value: "MONITORED", color: "text-red-400" }
        ],
        path: "M20,120 L60,60 L100,120 L140,60 L180,120",
        color: "border-emerald-500 shadow-[0_0_10px_#10b981]",
        textHover: "group-hover:text-emerald-500",
        accent: "bg-emerald-500"
    }
];

const themes = [
    "Quality Education",
    "Food Quality and Hunger",
    "Cybersecurity",
    "Healthcare and Medical",
    "Finance",
    "Sustainable Technology",
    "Law and Justice",
    "Community Building",
    "Disaster Management",
    "Space and Astrophysics Technology",
    "Open Innovation"
];

export const Tracks = () => {
    return (
        <section id="tracks" className="relative text-white py-24 px-4 font-display overflow-hidden">
            
            {/* Tracks Section Background - Digital Circuit Theme */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#0a0a0c]"></div>
                
                {/* Perspective Synthwave Grid Floor */}
                <div className="absolute bottom-0 w-full h-full [perspective:1000px] transform-gpu mt-20 opacity-50">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.15)_2px,transparent_2px),linear-gradient(90deg,rgba(0,240,255,0.1)_2px,transparent_2px)] bg-[length:60px_60px] [transform:rotateX(75deg)_translateY(-200px)_scale(3)] md:[transform:rotateX(80deg)_translateY(-200px)_scale(4)] origin-top pb-[200px] pointer-events-none"></div>
                    {/* Horizon fade generator */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent pointer-events-none"></div>
                </div>

                {/* Soft top/bottom blends */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0c] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
                
                <div className="absolute inset-0 scanlines opacity-10"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto">

                {/* Header - Pit Board Style */}
                <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between mb-16 pb-10 text-center md:text-left">

                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-4 md:mb-0 relative z-10"
                    >
                        <div className="text-primary font-mono text-xs tracking-[0.4em] mb-2 pl-1 flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                            SECTOR: CLASSIFIED
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            Track <span className="text-stroke-white text-transparent">Selection</span>
                        </h1>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="hidden md:block text-right relative z-10"
                    >
                        <div className="text-gray-500 font-mono text-xs tracking-widest">SYSTEM STATUS</div>
                        <div className="text-primary font-bold text-xl animate-pulse tracking-widest mt-1">LIVE FEED ACTIVE</div>
                    </motion.div>

                    {/* Ticker serving as the animated bottom divider for the page title */}
                    <div className="absolute bottom-0 left-0 w-full h-[56px] flex items-center opacity-80 hover:opacity-100 transition-opacity">
                        {/* The visual track line */}
                        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/2 -translate-y-1/2"></div>
                        {/* The animated car */}
                        <div className="w-full absolute inset-0">
                            <F1CarTicker speed={2} height={56} transparent />
                        </div>
                    </div>

                </div>

                {/* Problem Themes Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-neon-cyan"></div>
                        <h2 className="text-xl font-bold tracking-[0.2em] uppercase italic text-neon-cyan/80">
                            Theme <span className="text-white">Sectors</span>
                        </h2>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-neon-cyan/30 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {themes.map((theme, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                key={index}
                                className="group relative p-[1px] shrink-0 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] bg-white/10 hover:bg-neon-cyan [clip-path:polygon(15px_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%,0_15px)]"
                            >
                                <div className="relative w-full h-full bg-gradient-to-b from-[#141418] via-[#0e0e12] to-[#0a0a0c] px-5 py-4 flex flex-col justify-between [clip-path:polygon(15px_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%,0_15px)]">
                                    {/* Scanlines layer */}
                                    <div className="absolute inset-0 scanlines opacity-20 pointer-events-none mix-blend-overlay"></div>
                                    
                                    <div className="flex justify-between items-start mb-2 relative z-10">
                                        <span className="font-mono text-[10px] text-neon-cyan opacity-80 tracking-widest group-hover:text-white transition-colors">
                                            SEC-{(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan/30 group-hover:bg-neon-cyan group-hover:animate-pulse transition-colors pb-1"></div>
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors relative z-10 leading-tight">
                                        {theme}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Track Selection Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[1px] w-12 bg-primary"></div>
                    <h2 className="text-xl font-bold tracking-[0.2em] uppercase italic text-primary/80">
                        <span className="text-white">Track</span> Categories
                    </h2>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, i) => (
                        <TrackCard key={track.id} track={track} index={i} />
                    ))}
                </div>
            </main>
        </section>
    );
};

const TrackCard = ({ track, index }: { track: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative p-[1px] w-full min-h-[420px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,30,0,0.15)] bg-white/10 hover:${track.accent} [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)]`}
        >
            <div className="relative w-full h-full bg-gradient-to-b from-[#141418] via-[#0e0e12] to-[#0a0a0c] [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)] overflow-hidden flex flex-col p-8 z-10">
                
                {/* Scanlines overlay */}
                <div className="absolute inset-0 scanlines opacity-20 pointer-events-none mix-blend-overlay"></div>

                {/* The Glowing Border effect driven by container hover */}
                <div className={`absolute inset-0 border-2 transition-opacity duration-300 ${track.color} opacity-0 group-hover:opacity-100`}></div>

                {/* Top Row: ID & Animated Icon */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                        <div className={`font-mono text-5xl font-bold transition-colors text-white/10 group-hover:text-white/30`}>
                            {track.id}
                        </div>
                        <div className={`h-1 w-12 mt-2 ${track.accent}`}></div>
                    </div>

                    {/* Animated SVG Circuit */}
                    <div className={`relative w-24 h-24 transition-opacity opacity-70 group-hover:opacity-100`}>
                        <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                            {/* Static Path */}
                            <path d={track.path} fill="none" stroke="#333" strokeWidth="4" />
                            {/* Animated Path */}
                            <path
                                d={track.path}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`${track.color.split(' ')[0].replace('border-', 'text-')} stroke-dasharray-1000 stroke-dashoffset-1000 animate-track-draw`}
                            />
                        </svg>
                    </div>
                </div>

                {/* Middle: Text Info */}
                <div className="flex-grow flex flex-col relative z-10">
                    <h3 className={`text-3xl font-black italic uppercase tracking-tight mb-1 transition-colors text-gray-200 ${track.textHover}`}>
                        {track.title}
                    </h3>
                    <div className="text-xs font-mono text-neon-cyan mb-4 tracking-widest">{track.subtitle}</div>
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400">
                        {track.desc}
                    </p>
                </div>

                {/* Bottom: Telemetry Data */}
                <div className="mt-8 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 font-mono text-xs relative z-10">
                    {track.specs.map((spec: any, i: number) => (
                        <div key={i} className="flex flex-col gap-1 bg-black/40 px-3 py-2 rounded-sm border border-white/5 group-hover:border-white/10 transition-colors">
                            <span className="text-gray-600 text-[10px] tracking-widest uppercase">{spec.label}</span>
                            <span className={`font-bold ${spec.color} text-sm`}>{spec.value}</span>
                        </div>
                    ))}
                </div>

                {/* Telemetry Corner Indicators */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-white/50 transition-colors z-10"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-white/50 transition-colors z-10"></div>
            </div>
        </motion.div>
    );
};