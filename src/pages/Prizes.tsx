import { motion } from 'framer-motion';



export const Prizes = () => {
    return (
        <section className="relative min-h-screen bg-asphalt text-white py-24 overflow-hidden font-display selection:bg-neon-cyan selection:text-black">

            {/* 1. Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-carbon-fiber opacity-60"></div>
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-[-12deg]"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* 2. Header */}
                <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between mb-24 border-b border-white/10 pb-6 relative z-30 text-center md:text-left">
                    <div className="w-full md:w-auto mb-6 md:mb-0">
                        <div className="text-primary font-mono text-xs tracking-[0.4em] mb-2 pl-1 flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            PODIUM: CONSTRUCTORS
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            Victory <span className="text-stroke-white text-transparent">Lane</span>
                        </h1>
                    </div>

                    <div className="w-full md:w-auto flex flex-col items-center md:items-end">
                        <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
                        <div className="text-primary font-bold text-xl animate-pulse">LIVE FEED ACTIVE</div>
                    </div>
                </div>

                <div className="w-full max-w-7xl relative flex flex-col lg:flex-row items-center lg:items-end justify-center gap-4 lg:gap-6 perspective-1000">

                    <TopDownCarCard
                        rank="P1"
                        tier="GOLD CLASS"
                        prize="₹ 10,000"
                        accentColor="border-yellow-500"
                        glowColor="shadow-[0_0_60px_rgba(234,179,8,0.5)]"
                        textColor="text-yellow-400"
                        glowBg="bg-yellow-500"
                        carImage="/car-gold.png"
                        height="h-[620px]"
                        delay={0}
                        isWinner={true}
                        perks={["Gold Trophy", "Cash Prize", "Exclusive Winner Kit"]}
                    />
                    <TopDownCarCard
                        rank="P2"
                        tier="SILVER CLASS"
                        prize="₹ 7,000"
                        accentColor="border-gray-400"
                        glowColor="shadow-[0_0_40px_rgba(156,163,175,0.3)]"
                        textColor="text-gray-300"
                        glowBg="bg-gray-100" // Brighter white/gray for glow
                        carImage="/car-silver.png"
                        height="h-[560px]"
                        delay={0.2}
                        scale={0.85}
                        perks={["Silver Medal", "Cash Prize", "ByteVerse Swag Kit"]}
                    />

                    <TopDownCarCard
                        rank="P3"
                        tier="BRONZE CLASS"
                        prize="₹ 5,000"
                        accentColor="border-red-600"
                        glowColor="shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                        textColor="text-red-500"
                        glowBg="bg-red-600" // Strong red for glow
                        carImage="/car-bronze.png"
                        height="h-[520px]"
                        delay={0.4}
                        scale={0.8}
                        perks={["Bronze Medal", "Cash Prize", "ByteVerse Swag Kit"]}
                    />

                    <TopDownCarCard
                        rank="GIRLS"
                        tier="SPECIAL CLASS"
                        prize="₹ 4,000"
                        accentColor="border-pink-500"
                        glowColor="shadow-[0_0_40px_rgba(236,72,153,0.4)]"
                        textColor="text-pink-400"
                        glowBg="bg-pink-500"
                        carImage="/car-pink.png"
                        height="h-[480px]"
                        isWinner={true}
                        winnerColor="pink"
                        delay={0.6}
                        scale={0.75}
                        perks={["Best All-Girls Crew", "Special Edition Livery"]}
                    />

                </div>

                {/* 4. Special Awards & Regulations - Paddock Rules */}
                <div className="w-full max-w-6xl mt-24 space-y-8 relative z-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-primary to-transparent"></div>
                        <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                            Paddock <span className="text-stroke-white text-transparent">Rules</span>
                        </h2>
                        <div className="h-[2px] w-24 bg-primary/30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Special Awards Box */}
                        <div className="bg-black/40 border border-white/10 p-8 rounded-xl backdrop-blur-md relative overflow-hidden group hover:border-yellow-500/30 transition-all">
                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500 opacity-50"></div>
                            <div className="flex items-start gap-4 mb-6">
                                <span className="material-icons text-yellow-500">stars</span>
                                <h3 className="font-bold text-lg tracking-widest text-white uppercase italic">Special Sector Awards</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest">TOP ALL-GIRLS TEAM — ₹ 4,000</div>
                                    <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                        Awarded to the fastest all-female crew. <span className="text-white/60 italic">Condition: Min. 20 all-girls teams must submit their final hack.</span>
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest">TOP ALL-1ST YEAR TEAM — ₹ 4,000</div>
                                    <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                        Awarded to the highest performing 1st-year rookies. <span className="text-white/60 italic">Condition: Min. 10 all-1st-year teams must submit their final hack.</span>
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-[10px] text-gray-500 italic">
                                        *Both special awards are independent of overall podium positions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* General Regulations */}
                        <div className="bg-black/40 border border-white/10 p-8 rounded-xl backdrop-blur-md relative overflow-hidden group hover:border-neon-cyan/30 transition-all">
                            <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan opacity-50"></div>
                            <div className="flex items-start gap-4 mb-6">
                                <span className="material-icons text-neon-cyan">gavel</span>
                                <h3 className="font-bold text-lg tracking-widest text-white uppercase italic">Podium Protocol</h3>
                            </div>
                            <ul className="space-y-4 font-mono text-xs text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="text-neon-cyan mt-0.5">▶</span>
                                    <span>Main podium awards (P1, P2, P3) are team-based, regardless of crew size.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neon-cyan mt-0.5">▶</span>
                                    <span>There are no theme-specific or track-specific prizes for this season.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neon-cyan mt-0.5">▶</span>
                                    <span>Participation certificates will be distributed T-Plus 30 days after result declaration.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neon-cyan mt-0.5">▶</span>
                                    <span>Prize disbursement will be processed T-Plus 30 days after result declaration.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

// --- SUB-COMPONENT: Top-Down Car Card ---
const TopDownCarCard = ({ rank, tier, prize, accentColor, glowColor, textColor, glowBg, carImage, height, delay, isWinner, perks, scale = 1, winnerColor = "yellow" }: any) => {
    
    // Color mapping for winner effects
    const winnerTheme = {
        yellow: { laser: "bg-yellow-400", trophy: "text-yellow-500" },
        pink: { laser: "bg-pink-400", trophy: "text-pink-500" },
    }[winnerColor as "yellow" | "pink"] || { laser: "bg-yellow-400", trophy: "text-yellow-500" };
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay, ease: "backOut" }}
            className={`relative w-full md:w-[350px] ${height} group cursor-pointer perspective-500`}
        >
            {/* Main Container - The "Grid Slot" */}
            <div className={`relative h-full w-full bg-[#0a0a0a] border-x border-t ${accentColor} border-b-0 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-2 ${glowColor}`}>

                {/* 1. Track Texture Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.03)_2px,transparent_2px)] bg-[length:40px_40px] opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* 2. Rank Header (Floating) */}
                <div className="absolute top-8 z-20 text-center">
                    <div className={`text-[10px] font-black tracking-[0.3em] uppercase mb-2 ${textColor}`}>{tier}</div>
                    <h2 className="text-7xl font-black italic text-white tracking-tighter opacity-90 drop-shadow-2xl">
                        {rank}
                    </h2>
                </div>

                {/* 3. The Top-Down Car */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-10">
                    {/* Glow behind car - Increased opacity for visibility, always visible on click or hover */}
                    <div className={`absolute w-32 h-64 ${glowBg} blur-[80px] transition-opacity duration-500 opacity-40 group-hover:opacity-60`}></div>

                    <motion.img
                        src={carImage}
                        alt={`${tier} Car`}
                        className="w-40 md:w-48 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] z-40"
                        style={{ scale: scale }}
                        initial={{ scale: 0.9 * scale }}
                        whileHover={{ scale: 1.05 * scale }}
                        whileTap={{ scale: 1.05 * scale }} // Added tap interaction for mobile
                        transition={{ duration: 0.4 }}
                        // Fallback placeholder
                        onError={(e: any) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML += `<div class="w-24 h-48 border-2 border-dashed ${accentColor} rounded-full opacity-30 flex items-center justify-center text-xs text-white/50 font-mono">NO IMAGE</div>`;
                        }}
                    />

                    {/* Scanning Laser Effect (Winner only) */}
                    {isWinner && (
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className={`absolute left-0 right-0 h-[2px] ${winnerTheme.laser} opacity-50 blur-[1px] w-full z-30`}
                        ></motion.div>
                    )}
                </div>

                {/* 4. Telemetry / Prize Info (Bottom) */}
                <div className={`absolute bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-6 z-30 pt-20`}>
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <div className="text-gray-500 text-[10px] uppercase tracking-widest font-mono mb-1">Total Prize</div>
                            <div className={`text-4xl font-bold font-mono tracking-tight text-white`}>{prize}</div>
                        </div>
                        {isWinner && <span className={`material-icons ${winnerTheme.trophy} animate-pulse`}>emoji_events</span>}
                    </div>

                    <div className="space-y-2 border-t border-white/5 pt-3">
                        {perks.map((perk: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 text-xs font-mono text-gray-400">
                                <span className={`w-1.5 h-1.5 rounded-sm ${textColor.replace('text-', 'bg-')}`}></span>
                                {perk}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Start Line Patterns */}
                <div className="absolute bottom-32 w-full flex justify-between px-4 opacity-20">
                    <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
                    <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
                    <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
                    <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
                </div>

            </div>

            {/* Base "Grid Bay" Marker */}
            <div className={`w-full h-1 mt-1 ${glowBg}`}></div>
            <div className="w-full flex justify-between px-2">
                <div className="w-[1px] h-4 bg-white/20"></div>
                <div className="w-[1px] h-4 bg-white/20"></div>
            </div>
        </motion.div>
    );
};