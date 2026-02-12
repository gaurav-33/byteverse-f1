const tracks = [
    {
        id: "01",
        code: "AI_ML",
        title: "NEURAL PRIX",
        subtitle: "Artificial Intelligence & ML",
        desc: "Train models to race. Computer Vision, LLMs, and Predictive Analytics.",
        specs: [
            { label: "DIFFICULTY", value: "HARD", color: "text-red-500" },
            { label: "CPU LOAD", value: "98%", color: "text-orange-500" }
        ],
        // Abstract Circuit Path: A Brain-like network
        path: "M20,100 Q50,20 80,100 T140,100 M80,100 L80,150 M50,60 L110,60",
        color: "border-primary shadow-[0_0_20px_#ff1e00]",
        accent: "bg-primary"
    },
    {
        id: "02",
        code: "WEB3",
        title: "BLOCKCHAIN CITY",
        subtitle: "Decentralized Systems",
        desc: "Smart contracts and dApps. Build the trustless future of the internet.",
        specs: [
            { label: "SECURITY", value: "MAX", color: "text-green-500" },
            { label: "GAS FEE", value: "LOW", color: "text-blue-500" }
        ],
        // Abstract Circuit Path: Connected Blocks
        path: "M30,120 L30,50 L90,30 L150,50 L150,120 L90,140 Z M90,85 L150,50 M90,85 L30,50 M90,85 L90,140",
        color: "border-yellow-500 shadow-[0_0_20px_#eab308]",
        accent: "bg-yellow-500"
    },
    {
        id: "03",
        code: "IOT",
        title: "SENSOR CIRCUIT",
        subtitle: "Internet of Things",
        desc: "Hardware meets software. Automation, robotics, and embedded systems.",
        specs: [
            { label: "LATENCY", value: "1ms", color: "text-cyan-code" },
            { label: "CONN", value: "5G", color: "text-purple-500" }
        ],
        // Abstract Circuit Path: Circuit Lines
        path: "M20,80 H50 L60,50 H100 L110,110 H150 L160,80 H180",
        color: "border-cyan-code shadow-[0_0_20px_#00f0ff]",
        accent: "bg-cyan-code"
    },
    {
        id: "04",
        code: "OPEN",
        title: "FREE STYLE",
        subtitle: "Open Innovation",
        desc: "No limits. Solve real-world problems with any tech stack you choose.",
        specs: [
            { label: "CREATIVITY", value: "INF", color: "text-pink-500" },
            { label: "STACK", value: "ANY", color: "text-white" }
        ],
        // Abstract Circuit Path: Chaos/Infinity
        path: "M30,80 C30,20 90,20 90,80 S150,140 150,80 S90,20 90,80",
        color: "border-purple-500 shadow-[0_0_20px_#a855f7]",
        accent: "bg-purple-500"
    }
];

export const Tracks = () => {
    return (
        <section className="relative min-h-screen bg-asphalt text-white py-24 overflow-hidden font-display">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-[-12deg] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header - Pit Board Style */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-white/10 pb-6">
                    <div>
                        <div className="text-neon-cyan font-mono text-xs tracking-[0.4em] mb-2 pl-1">SECTOR: CLASSIFIED</div>
                        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            Track <span className="text-stroke-white text-transparent">Selection</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
                        <div className="text-primary font-bold text-xl animate-pulse">LIVE FEED ACTIVE</div>
                    </div>
                </div>

                {/* The HUD Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tracks.map((track) => (
                        <div
                            key={track.id}
                            className="group rounded-xl relative h-80 w-full transition-transform duration-300 hover:-translate-y-2"
                        >

                            {/* 1. The HUD Shape Container (Cut Corner) */}
                            <div className="rounded-xl absolute inset-0 clip-hud bg-[#121215] border-t border-l border-r border-white/20 group-hover:border-white/50 transition-colors"></div>

                            {/* 2. The Glowing Border (Only appears on hover) */}
                            <div className={`absolute rounded-xl inset-0 clip-hud border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${track.color}`}></div>

                            {/* 3. Content Layout */}
                            <div className="relative h-full p-8 flex flex-col justify-between z-10">

                                {/* Top Row: ID & Animated Icon */}
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-mono text-4xl font-bold text-white/10 group-hover:text-white/30 transition-colors">
                                            {track.id}
                                        </div>
                                        <div className={`h-1 w-12 mt-2 ${track.accent}`}></div>
                                    </div>

                                    {/* Animated SVG Circuit */}
                                    <div className="relative w-24 h-24 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
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
                                <div>
                                    <h3 className="text-3xl font-black italic uppercase tracking-tight mb-1 group-hover:text-white transition-colors text-gray-200">
                                        {track.title}
                                    </h3>
                                    <div className="text-xs font-mono text-neon-cyan mb-3 tracking-widest">{track.subtitle}</div>
                                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm group-hover:text-gray-400">
                                        {track.desc}
                                    </p>
                                </div>

                                {/* Bottom: Telemetry Data */}
                                <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4 font-mono text-xs mr-4">
                                    {track.specs.map((spec, i) => (
                                        <div key={i} className="flex justify-between items-center bg-black/30 px-2 py-1 rounded-md">
                                            <span className="text-gray-600">{spec.label}</span>
                                            <span className={`font-bold ${spec.color}`}>{spec.value}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* 4. Decorative Corner Elements (The "Bolts") */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-neon-cyan transition-colors"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-neon-cyan transition-colors"></div>

                            {/* 5. Enter Button (Appears on Hover) */}
                            {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                <button className={`p-3 rounded-full ${track.accent} text-black font-bold shadow-lg hover:scale-110 transition-transform`}>
                                    <span className="material-icons text-lg">arrow_forward</span>
                                </button>
                            </div> */}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};