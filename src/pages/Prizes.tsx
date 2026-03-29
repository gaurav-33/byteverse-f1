// import { motion } from 'framer-motion';

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
            <div className="text-neon-cyan font-mono text-xs tracking-[0.4em] mb-2 pl-1 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
              PODIUM: CONSTRUCTORS
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
              Victory{" "}
              <span className="text-stroke-white text-transparent">Lane</span>
            </h1>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:items-end">
            <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
            <div className="text-primary font-bold text-xl animate-pulse">
              LIVE FEED ACTIVE
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mt-10">
          <div className="text-neon-cyan font-mono text-xs tracking-[0.4em] mb-6 pl-1 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
            PRIZE MONEY
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "P1", title: "Winner", amount: "₹10,000" },
              { label: "P2", title: "2nd Place", amount: "₹7,000" },
              { label: "P3", title: "3rd Place", amount: "₹5,000" },
              {
                label: "SPECIAL",
                title: "Best First Year Team",
                amount: "₹4,000",
              },
              {
                label: "SPECIAL",
                title: "Best All Girls Team",
                amount: "₹4,000",
              },
            ].map((prize) => (
              <div
                key={`${prize.label}-${prize.title}`}
                className="rounded-xl bg-[#121215] border border-white/20 p-6 relative group hover:border-white/40 transition-colors"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-neon-cyan transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-neon-cyan transition-colors"></div>

                <div className="font-mono text-neon-cyan text-xs tracking-[0.3em] mb-3">
                  {prize.label}
                </div>

                <h3 className="text-2xl font-black italic uppercase mb-2">
                  {prize.title}
                </h3>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
                    Prize Amount
                  </div>
                  <div className="text-4xl font-black italic tracking-tight text-white">
                    {prize.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="w-full max-w-6xl relative flex flex-col md:flex-row items-end justify-center gap-6 perspective-1000">

                    <TopDownCarCard
                        rank="P2"
                        tier="SILVER CLASS"
                        prize="₹ -----"
                        accentColor="border-gray-400"
                        glowColor="shadow-[0_0_40px_rgba(156,163,175,0.3)]"
                        textColor="text-gray-300"
                        glowBg="bg-gray-100" // Brighter white/gray for glow
                        carImage="/car-silver.png"
                        height="h-[550px]"
                        delay={0.2}
                        perks={["perk_1", "perk_2"]}
                    />
                    <TopDownCarCard
                        rank="P1"
                        tier="GOLD CLASS"
                        prize="₹ -----"
                        accentColor="border-yellow-500"
                        glowColor="shadow-[0_0_60px_rgba(234,179,8,0.5)]"
                        textColor="text-yellow-400"
                        glowBg="bg-yellow-500"
                        carImage="/car-gold.png"
                        height="h-[600px]"
                        delay={0}
                        isWinner={true}
                        perks={["perk_1", "perk_2"]}
                    />

                    <TopDownCarCard
                        rank="P3"
                        tier="BRONZE CLASS"
                        prize="₹ -----"
                        accentColor="border-red-600"
                        glowColor="shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                        textColor="text-red-500"
                        glowBg="bg-red-600" // Strong red for glow
                        carImage="/car-bronze.png"
                        height="h-[500px]"
                        delay={0.4}
                        perks={["perk_1", "perk_2"]}
                    />

                </div> */}
      </main>
    </section>
  );
};

// --- SUB-COMPONENT: Top-Down Car Card ---
// const TopDownCarCard = ({ rank, tier, prize, accentColor, glowColor, textColor, glowBg, carImage, height, delay, isWinner, perks }: any) => {
//     return (
//         <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: delay, ease: "backOut" }}
//             className={`relative w-full md:w-[350px] ${height} group cursor-pointer perspective-500`}
//         >
//             {/* Main Container - The "Grid Slot" */}
//             <div className={`relative h-full w-full bg-[#0a0a0a] border-x border-t ${accentColor} border-b-0 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-2 ${glowColor}`}>

//                 {/* 1. Track Texture Background */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.03)_2px,transparent_2px)] bg-[length:40px_40px] opacity-30"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

//                 {/* 2. Rank Header (Floating) */}
//                 <div className="absolute top-8 z-20 text-center">
//                     <div className={`text-[10px] font-black tracking-[0.3em] uppercase mb-2 ${textColor}`}>{tier}</div>
//                     <h2 className="text-7xl font-black italic text-white tracking-tighter opacity-90 drop-shadow-2xl">
//                         {rank}
//                     </h2>
//                 </div>

//                 {/* 3. The Top-Down Car */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-10">
//                     {/* Glow behind car - Increased opacity for visibility, always visible on click or hover */}
//                     <div className={`absolute w-32 h-64 ${glowBg} blur-[80px] transition-opacity duration-500 opacity-40 group-hover:opacity-60`}></div>

//                     <motion.img
//                         src={carImage}
//                         alt={`${tier} Car`}
//                         className="w-40 md:w-48 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-20"
//                         initial={{ scale: 0.9 }}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 1.05 }} // Added tap interaction for mobile
//                         transition={{ duration: 0.4 }}
//                         // Fallback placeholder
//                         onError={(e: any) => {
//                             e.target.style.display = 'none';
//                             e.target.parentElement.innerHTML += `<div class="w-24 h-48 border-2 border-dashed ${accentColor} rounded-full opacity-30 flex items-center justify-center text-xs text-white/50 font-mono">NO IMAGE</div>`;
//                         }}
//                     />

//                     {/* Scanning Laser Effect (Winner only) */}
//                     {isWinner && (
//                         <motion.div
//                             animate={{ top: ['0%', '100%', '0%'] }}
//                             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                             className="absolute left-0 right-0 h-[2px] bg-yellow-400 opacity-50 blur-[1px] w-full z-30"
//                         ></motion.div>
//                     )}
//                 </div>

//                 {/* 4. Telemetry / Prize Info (Bottom) */}
//                 <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-black/80 border-t border-white/10 p-6 backdrop-blur-sm z-30">
//                     <div className="flex justify-between items-end mb-4">
//                         <div>
//                             <div className="text-gray-500 text-[10px] uppercase tracking-widest font-mono mb-1">Total Prize</div>
//                             <div className={`text-4xl font-bold font-mono tracking-tight text-white`}>{prize}</div>
//                         </div>
//                         {isWinner && <span className="material-icons text-yellow-500 animate-pulse">emoji_events</span>}
//                     </div>

//                     <div className="space-y-2 border-t border-white/5 pt-3">
//                         {perks.map((perk: string, i: number) => (
//                             <div key={i} className="flex items-center gap-3 text-xs font-mono text-gray-400">
//                                 <span className={`w-1.5 h-1.5 rounded-sm ${textColor.replace('text-', 'bg-')}`}></span>
//                                 {perk}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* 5. Start Line Patterns */}
//                 <div className="absolute bottom-32 w-full flex justify-between px-4 opacity-20">
//                     <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
//                     <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
//                     <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
//                     <div className="w-2 h-8 bg-white skew-x-[-20deg]"></div>
//                 </div>

//             </div>

//             {/* Base "Grid Bay" Marker */}
//             <div className={`w-full h-1 mt-1 ${glowBg}`}></div>
//             <div className="w-full flex justify-between px-2">
//                 <div className="w-[1px] h-4 bg-white/20"></div>
//                 <div className="w-[1px] h-4 bg-white/20"></div>
//             </div>
//         </motion.div>
//     );
// };
