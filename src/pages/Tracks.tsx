const tracks = [
  {
    id: "01",
    code: "WEB_DEV",
    title: "Web Development",
    icon: "language",
    subtitle: "Full-Stack Web Development",
    desc: "Frontend, backend, and deployment. Build responsive web apps, APIs, and CI/CD pipelines.",
    specs: [
      { label: "STACK", value: "MERN/TS", color: "text-blue-400" },
      { label: "RESP", value: "A+", color: "text-green-400" },
    ],
    // Abstract Circuit Path: Wave-like web topology
    path: "M20,100 C40,40 160,40 180,100 S140,160 100,140",
    color: "border-sky-500 shadow-[0_0_20px_#0ea5e9]",
    accent: "bg-sky-500",
  },
  {
    id: "02",
    code: "APP_DEV",
    title: "App Development",
    icon: "phone_iphone",
    subtitle: "Mobile & Cross-Platform",
    desc: "Build Android/iOS apps with great UX. Offline-first, APIs, and performance-focused features.",
    specs: [
      { label: "PLATFORM", value: "iOS/AND", color: "text-sky-400" },
      { label: "BUILD", value: "FAST", color: "text-emerald-400" },
    ],
    // Abstract Circuit Path: App-like panel + connectors
    path: "M40,40 L160,40 L160,120 L40,120 Z M60,70 L140,70 M60,95 L120,95",
    color: "border-purple-500 shadow-[0_0_20px_#a855f7]",
    accent: "bg-purple-500",
  },
  {
    id: "03",
    code: "AI",
    title: "Artificial Intelligence",
    icon: "psychology",
    subtitle: "AI · ML · LLMs",
    desc: "Train models to race. Computer Vision, LLMs, and Predictive Analytics.",
    specs: [
      { label: "DIFFICULTY", value: "HARD", color: "text-red-500" },
      { label: "CPU LOAD", value: "98%", color: "text-orange-500" },
    ],
    // Abstract Circuit Path: A Brain-like network
    path: "M20,100 Q50,20 80,100 T140,100 M80,100 L80,150 M50,60 L110,60",
    color: "border-primary shadow-[0_0_20px_#ff1e00]",
    accent: "bg-primary",
  },
  {
    id: "04",
    code: "WEB3",
    title: "Web3-Blockchain",
    icon: "currency_bitcoin",
    subtitle: "Decentralized Systems",
    desc: "Smart contracts and dApps. Build the trustless future of the internet.",
    specs: [
      { label: "SECURITY", value: "MAX", color: "text-green-500" },
      { label: "GAS FEE", value: "LOW", color: "text-blue-500" },
    ],
    // Abstract Circuit Path: Connected Blocks
    path: "M30,120 L30,50 L90,30 L150,50 L150,120 L90,140 Z M90,85 L150,50 M90,85 L30,50 M90,85 L90,140",
    color: "border-yellow-500 shadow-[0_0_20px_#eab308]",
    accent: "bg-yellow-500",
  },
  {
    id: "05",
    code: "AR_VR",
    title: "AR/VR",
    icon: "view_in_ar",
    subtitle: "Immersive Experiences",
    desc: "Build AR filters, VR demos, and 3D interactive experiences with strong UX and performance.",
    specs: [
      { label: "FPS", value: "STABLE", color: "text-emerald-400" },
      { label: "UX", value: "IMMERSIVE", color: "text-pink-400" },
    ],
    // Abstract Circuit Path: Headset visor + depth lines
    path: "M30,95 C50,45 150,45 170,95 C150,125 50,125 30,95 Z M70,95 L130,95 M55,80 L145,80",
    color: "border-purple-500 shadow-[0_0_20px_#a855f7]",
    accent: "bg-purple-500",
  },
  {
    id: "06",
    code: "GAME_DEV",
    title: "Game Development",
    icon: "sports_esports",
    subtitle: "Interactive Entertainment",
    desc: "Design mechanics, graphics, and real-time systems; build playable prototypes.",
    specs: [
      { label: "FPS", value: "60+", color: "text-yellow-400" },
      { label: "ENGINE", value: "Unity/UE", color: "text-orange-400" },
    ],
    // Abstract Circuit Path: Dynamic arcs (gamepad-like)
    path: "M30,100 C50,40 150,40 170,100 M60,120 L140,120",
    color: "border-orange-400 shadow-[0_0_20px_#fb923c]",
    accent: "bg-orange-400",
  },
  {
    id: "07",
    code: "CRYPTO_NET_SEC",
    title: "Cryptography and Network Security",
    icon: "security",
    subtitle: "Security · Crypto · Networking",
    desc: "Cryptography, pen-testing, secure protocols, threat modeling, and hardened deployments.",
    specs: [
      { label: "RISK", value: "LOW", color: "text-emerald-400" },
      { label: "THREAT", value: "MONITORED", color: "text-red-400" },
    ],
    // Abstract Circuit Path: Shield/mesh
    path: "M20,120 L60,60 L100,120 L140,60 L180,120",
    color: "border-emerald-500 shadow-[0_0_20px_#10b981]",
    accent: "bg-emerald-500",
  },
];

export const Tracks = () => {
  return (
    <section className="relative min-h-screen bg-asphalt text-white py-24 overflow-hidden font-display">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-[-12deg] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Pit Board Style */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 border-b border-white/10 pb-6 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <div className="text-neon-cyan font-mono text-xs tracking-[0.4em] mb-2 pl-1">
              SECTOR: CLASSIFIED
            </div>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
              Track{" "}
              <span className="text-stroke-white text-transparent">
                Selection
              </span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
            <div className="text-primary font-bold text-xl animate-pulse">
              LIVE FEED ACTIVE
            </div>
          </div>
        </div>

        {/* The HUD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrackCard = ({ track }: { track: any }) => {
  const iconColor = track.color.split(" ")[0].replace("border-", "text-");

  return (
    <div className="group rounded-xl relative h-80 w-full transition-transform duration-300 hover:-translate-y-2">
      {/* 1. The HUD Shape Container (Cut Corner) */}
      <div className="rounded-xl absolute inset-0 bg-[#121215] border border-white/20 group-hover:border-white/50 transition-colors"></div>

      {/* 2. The Glowing Border (Only appears on hover, ALWAYS visible on mobile) */}
      <div
        className={`absolute rounded-xl inset-0 border-2 transition-opacity duration-300 ${track.color} opacity-100 md:opacity-0 md:group-hover:opacity-100`}
      ></div>

      {/* 3. Content Layout */}
      <div className="relative h-full p-8 flex flex-col gap-6 z-10">
        {/* Top Row: ID & Animated Icon */}
        <div className="flex justify-between items-start">
          <div>
            <div
              className={`font-mono text-4xl font-bold transition-colors text-white/30 md:text-white/10 md:group-hover:text-white/50`}
            >
              {track.id}
            </div>
            <div className={`h-1 w-12 mt-2 ${track.accent}`}></div>
          </div>

          {/* Track Icon */}
          <div className="w-24 h-24 flex items-center justify-center">
            <span
              className={`material-icons text-5xl ${iconColor} drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] opacity-90 md:opacity-70 md:group-hover:opacity-90 transition-opacity`}
            >
              {track.icon}
            </span>
          </div>
        </div>

        {/* Middle: Text Info */}
        <div>
          <h3 className="text-3xl font-black italic tracking-tight mb-1 group-hover:text-white transition-colors text-gray-200">
            {track.title}
          </h3>
          <div className="text-xs font-mono text-neon-cyan mb-3 tracking-widest">
            {track.subtitle}
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm group-hover:text-gray-400">
            {track.desc}
          </p>
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
  );
};
