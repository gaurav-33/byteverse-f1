import { useState, useEffect } from 'react';
import { Link } from 'wouter';

// Custom Date and Time for the Countdown
const TARGET_DATE = new Date('2026-03-15T10:00:00'); // Example: March 15, 2026, 10:00 AM

export const Landing = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Starting Lights State
    const [lights, setLights] = useState([false, false, false, false, false]);
    const [lightsOut, setLightsOut] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        // Countdown Timer Logic
        const calculateTimeLeft = () => {
            const difference = +TARGET_DATE - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        // Starting Lights Sequence Animation
        // Sequence: 1s interval for each light, then random pause, then out
        const sequence = async () => {
            for (let i = 0; i < 5; i++) {
                await new Promise(r => setTimeout(r, 800));
                setLights(prev => {
                    const newLights = [...prev];
                    newLights[i] = true;
                    return newLights;
                });
            }
            // Hold for random time between 0.2s and 3s (F1 regulation style)
            await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));
            setLightsOut(true); // LIGHTS OUT!

            // Show Hero Content shortly after
            setTimeout(() => setHeroVisible(true), 500);
        };

        sequence();

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value: number) => value.toString().padStart(2, '0');

    return (
        <div className="font-display bg-asphalt text-white min-h-screen overflow-x-hidden flex flex-col relative selection:bg-primary selection:text-white">

            {/* Background Layers */}
            <div className="fixed inset-0 bg-carbon-fiber opacity-60 z-0 pointer-events-none"></div>
            <div className="fixed inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent z-0 pointer-events-none"></div>
            <div className="fixed inset-0 scanlines z-10 pointer-events-none opacity-20"></div>

            {/* Abstract F1 Wireframe Background - Only visible after lights out */}
            <div className={`absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-full max-w-7xl mx-auto opacity-30 mt-32 scale-110">
                    <img
                        alt="Abstract glowing cyan wireframe of a Formula 1 car"
                        className="w-full h-full object-contain mix-blend-screen opacity-60 animate-pulse-glow"
                        src="/f1_bg.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-asphalt via-transparent to-asphalt"></div>
                </div>
            </div>

            {/* STARTING LIGHTS OVERLAY */}
            {/* Only visible before "lights out" triggers content reveal */}
            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-asphalt transition-opacity duration-1000 pointer-events-none ${lightsOut ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex gap-4 md:gap-8 bg-black/50 p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
                    {lights.map((isOn, i) => (
                        <div key={i} className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-black transition-all duration-100 ${isOn && !lightsOut ? 'bg-red-600 shadow-[0_0_50px_rgba(220,38,38,1)] scale-110' : 'bg-gray-900'}`}></div>
                    ))}
                </div>
                <div className="mt-8 font-mono text-xs text-gray-500 tracking-[0.5em] animate-pulse">SEQUENCE INITIATED</div>
            </div>


            {/* Main Hero Content - Reveals after lights out */}
            <main className={`relative z-20 flex-grow flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-28 pb-32 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                {/* Official Season Tag */}
                <div className="mt-2 mb-1 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex gap-1">
                        <span className="w-1 h-3 bg-primary skew-x-[-12deg]"></span>
                        <span className="w-1 h-3 bg-white skew-x-[-12deg]"></span>
                        <span className="w-1 h-3 bg-black skew-x-[-12deg]"></span>
                    </div>
                    <span className="font-mono text-xs text-gray-300 tracking-[0.2em] font-bold">SEASON 2026 // RD 1</span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl italic uppercase transform skew-x-[-2deg]">
                    <span className="block text-white">LIGHTS OUT</span>
                    <span className="block text-stroke-white text-transparent opacity-80 decoration-slice">AND AWAY</span>
                    <span className="block text-primary animate-pulse-glow">WE CODE</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-cyan-code/90 font-mono tracking-widest max-w-2xl mx-auto mb-16 uppercase border-l-2 border-primary pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                    ByteVerse: The NIT Patna Grand Prix of Innovation
                </p>

                {/* Primary CTA: Launch Control */}
                <div className="relative group cursor-pointer z-30">
                    {/* Pulsing Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
                        <div className="w-full h-full border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none">
                        <div className="w-full h-full border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>

                    {/* Button */}
                    <Link href="/tracks">
                        <button className="relative w-32 h-32 rounded-full bg-gradient-to-b from-gray-800 to-black border-4 border-gray-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center transform transition-all duration-200 active:scale-95 group-hover:border-primary group-hover:shadow-[0_0_80px_rgba(255,30,0,0.6)] overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="material-icons text-4xl text-white mb-1 drop-shadow-md group-hover:text-primary transition-colors">rocket_launch</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Launch</span>
                        </button>
                    </Link>

                    {/* Decorative connection lines */}
                    <div className="hidden md:block absolute top-1/2 left-[120%] w-32 h-[1px] bg-gradient-to-r from-white/20 to-transparent">
                        <span className="absolute -top-1.5 -left-1 w-3 h-3 bg-primary rounded-full animate-ping"></span>
                    </div>
                    <div className="hidden md:block absolute top-1/2 right-[120%] w-32 h-[1px] bg-gradient-to-l from-white/20 to-transparent">
                        <span className="absolute -top-1.5 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></span>
                    </div>
                </div>
            </main>

            {/* Bottom Telemetry & Ticker */}
            <footer className={`relative z-20 w-full bg-carbon/90 border-t border-white/5 backdrop-blur-lg mt-auto transition-all duration-1000 delay-500 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="max-w-7xl mx-auto w-full">
                    {/* Telemetry Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-b border-white/5">
                        {/* Location */}
                        <div className="p-4 md:p-6 flex flex-col items-start group hover:bg-white/5 transition-colors">
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                                <span className="w-1 h-1 bg-primary rounded-full"></span>
                                Circuit
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl font-bold font-display italic">NIT PATNA</span>
                            </div>
                        </div>
                        {/* Countdown */}
                        <div className="p-4 md:p-6 flex flex-col items-start group hover:bg-white/5 transition-colors">
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">T-Minus</span>
                            <div className="flex items-center gap-2 font-mono text-neon-cyan">
                                <span className="text-lg md:text-xl font-bold">
                                    {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}
                                </span>
                            </div>
                        </div>
                        {/* Prize Pool */}
                        <div className="p-4 md:p-6 flex flex-col items-start group hover:bg-white/5 transition-colors">
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Prize Purse</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl font-bold text-white">$50,000</span>
                            </div>
                        </div>
                        {/* Status */}
                        <div className="p-4 md:p-6 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors bg-white/5">
                            <div className="text-[10px] font-mono text-green-500 animate-pulse tracking-widest mb-1">SYSTEM OPTIMAL</div>
                            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[95%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrolling Ticker */}
                <div className="w-full overflow-hidden bg-black py-2 md:py-3 relative flex items-center border-t border-white/5">
                    <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

                    <div className="flex animate-marquee">
                        {/* Set 1 */}
                        <div className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16 opacity-70 text-xs md:text-sm font-mono tracking-widest text-gray-400">
                            <span className="text-primary font-bold">LIVE TELEMETRY:</span>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">code</span> GITHUB</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">cloud</span> DIGITALOCEAN</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">terminal</span> DEV.TO</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">polymer</span> POLYGON</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">bolt</span> VERCELL</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">memory</span> NVIDIA</div>
                        </div>

                        {/* Set 2 (Duplicate for seamless loop) */}
                        <div className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16 opacity-70 text-xs md:text-sm font-mono tracking-widest text-gray-400">
                            <span className="text-primary font-bold">LIVE TELEMETRY:</span>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">code</span> GITHUB</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">cloud</span> DIGITALOCEAN</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">terminal</span> DEV.TO</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">polymer</span> POLYGON</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">bolt</span> VERCELL</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-xs">memory</span> NVIDIA</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
