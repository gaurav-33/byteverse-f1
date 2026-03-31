import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Organizers from '../components/organisors';
import F1CarTicker from '../components/F1CarTicker';

// Custom Date and Time for the Countdown
const TARGET_DATE = new Date('2026-04-11T10:00:00'); // ByteVerse: April 11, 2026, 10:00 AM

// Organizers data (arranged by position priority)
const organizers = [
    { name: 'Sonu Jhajharia', position: 'Community Lead', linkedin: 'https://www.linkedin.com/in/sonu-jhajharia-122a39285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/sonuj04', image: '/sonu.jpg' },
    { name: 'Ravi Upadhyay', position: 'Vice President', linkedin: 'https://www.linkedin.com/in/raviupadhyay23', github: 'https://github.com/upadhyayravi023', image: '/ravi.jpg' },
    { name: 'Ashutosh Panda', position: 'Administrative & AI/ML Lead', linkedin: 'https://www.linkedin.com/in/ashutosh-panda-63a478380', github: 'https://github.com/zen-zap', image: '/ashu.jpg' },
    { name: 'Vasu Choudhari', position: 'Technical Lead / Secretary', linkedin: 'https://www.linkedin.com/in/vasu-choudhari', github: 'https://www.github.com/vasu-here', image: '/vasu.jpg' },
    { name: 'Gaurav Suman', position: 'Flutter Lead (GDG)', linkedin: 'https://www.linkedin.com/in/gaurav-suman-baa84328a', github: 'https://www.github.com/gaurav-33', image: '/gaurav.jpg' },
    { name: 'Shivendu Kumar', position: 'Event Lead (Patna Campus)', linkedin: 'https://www.linkedin.com/in/shivendu-kumar-5971112b9?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/ShivenduKmr', image: '/shivendu.jpg' },
    { name: 'Sanjeet Raj', position: 'Web Lead', linkedin: 'https://www.linkedin.com/in/Sanjeetraj40/', github: 'https://github.com/Sanjeet4567', image: '/sanjeet.jpeg' },
    { name: 'Suryakant Acharya', position: 'Co-Lead (Gray Interface)', linkedin: 'https://www.linkedin.com/in/suryakant-acharya-8b09a628a', github: 'https://github.com/Suryakant2112', image: '/surya.jpg' },
    { name: 'Tanay Palekar', position: 'Lead, Team Nougat', linkedin: 'https://www.linkedin.com/in/palekar-tanay-80b0a428b', github: 'https://github.com/tanay4768', image: '/tanay.jpg' }
];

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

    const carouselRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="font-display bg-asphalt text-white min-h-screen overflow-x-hidden flex flex-col relative selection:bg-primary selection:text-white">

            {/* Background Layers */}
            <div className="fixed inset-0 bg-carbon-fiber opacity-60 z-0 pointer-events-none"></div>
            <div className="fixed inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent z-0 pointer-events-none"></div>
            <div className="fixed inset-0 scanlines z-10 pointer-events-none opacity-20"></div>

            {/* Abstract F1 Wireframe Background - Only visible after lights out */}
            <div className={`fixed inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
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
                <div className="mt-8 font-mono text-xs text-gray-500 tracking-[0.5em] animate-pulse">BYTEVERSE LOADING...</div>

                {/* Car animation during loading */}
                <div className="absolute bottom-0 left-0 right-0">
                    <F1CarTicker speed={3} height={100} />
                </div>
            </div>


            {/* Main Hero Content - Reveals after lights out */}
            <main className={`relative z-20 flex-grow flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-20 pb-32 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                {/* Official Season Tag */}
                <div className="mt-2 mb-1 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex gap-1">
                        <span className="w-1 h-3 bg-primary skew-x-[-12deg]"></span>
                        <span className="w-1 h-3 bg-white skew-x-[-12deg]"></span>
                        <span className="w-1 h-3 bg-black skew-x-[-12deg]"></span>
                    </div>
                    <span className="font-mono text-xs text-gray-300 tracking-[0.2em] font-bold">SEASON 2026</span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl italic uppercase transform skew-x-[-2deg]">
                    <span className="block text-white">LIGHTS OUT</span>
                    <span className="block text-stroke-white text-transparent opacity-80 decoration-slice">AND AWAY</span>
                    <span className="block text-primary animate-pulse-glow">WE CODE</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-cyan-code/90 font-mono tracking-widest max-w-2xl mx-auto mb-16 uppercase text-center">
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
                        <button className="relative w-32 h-32 rounded-full bg-gradient-to-b from-gray-800 to-black border-4 border-gray-700 md:border-gray-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center transform transition-all duration-200 active:scale-95 group-hover:border-primary group-hover:shadow-[0_0_80px_rgba(255,30,0,0.6)] border-primary shadow-[0_0_80px_rgba(255,30,0,0.6)] md:shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="material-icons text-4xl text-white mb-1 drop-shadow-md text-primary md:text-white group-hover:text-primary transition-colors">rocket_launch</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 text-white md:text-white/60 group-hover:text-white transition-colors">Launch</span>
                        </button>
                    </Link>


                    {/* Decorative connection lines */}
                    <div className="absolute top-1/2 left-[110%] w-16 md:w-32 h-[1px] bg-gradient-to-r from-white/20 to-transparent block">
                        <span className="absolute -top-1.5 -left-1 w-3 h-3 bg-primary rounded-full animate-ping"></span>
                    </div>
                    <div className="absolute top-1/2 right-[110%] w-16 md:w-32 h-[1px] bg-gradient-to-l from-white/20 to-transparent block">
                        <span className="absolute -top-1.5 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></span>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-gray-500 uppercase group-hover:text-primary transition-colors">Scroll</span>
                    <div className="w-5 h-8 rounded-full border-2 border-gray-500 flex justify-center p-1 group-hover:border-primary transition-colors">
                        <div className="w-1 h-2 bg-primary rounded-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    </div>
                </div>

            </main>

            <Organizers />

            {/* Organizers Carousel */}
            <section className="relative z-20 w-full min-w-0 max-w-7xl mx-auto px-6 py-12">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <div className="text-xs font-mono text-primary tracking-widest mb-2">LEAD // ORGANIZERS</div>
                        <h2 className="text-4xl font-black italic uppercase">Lead Organizers</h2>
                        <p className="text-gray-400 mt-2 max-w-2xl">The Hackslash leads driving ByteVerse</p>
                    </div>
                </div>

                <div className="relative -mx-6 md:mx-0">
                    {/* hide scrollbar visually for the carousel */}
                    <style>{`#organizers-carousel::-webkit-scrollbar{display:none} #organizers-carousel{scrollbar-width:none;-ms-overflow-style:none}`}</style>
                    <button
                        aria-label="Scroll left"
                        onClick={() => {
                            const el = carouselRef.current;
                            if (!el) return;
                            el.scrollBy({ left: -Math.round(el.clientWidth * 0.7), behavior: 'smooth' });
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/60 border border-white/10 hover:bg-primary hover:border-primary backdrop-blur flex items-center justify-center transition-all duration-300 [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]"
                    >
                        <span className="material-icons text-white">chevron_left</span>
                    </button>

                    <div id="organizers-carousel" ref={carouselRef} className="no-scrollbar overflow-x-auto scroll-smooth py-4">
                        <div className="flex gap-6 items-stretch">
                            {/* Mobile Spacer */}
                            <div className="w-6 shrink-0 md:hidden" />

                            {organizers.map((org, i) => (
                                <OrganizerCard key={org.github || i} organizer={org} index={i} />
                            ))}

                            {/* Mobile Spacer */}
                            <div className="w-6 shrink-0 md:hidden" />
                        </div>
                    </div>

                    <button
                        aria-label="Scroll right"
                        onClick={() => {
                            const el = carouselRef.current;
                            if (!el) return;
                            el.scrollBy({ left: Math.round(el.clientWidth * 0.7), behavior: 'smooth' });
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/60 border border-white/10 hover:bg-primary hover:border-primary backdrop-blur flex items-center justify-center transition-all duration-300 [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]"
                    >
                        <span className="material-icons text-white">chevron_right</span>
                    </button>
                </div>
            </section>

            {/* --- CURRENT SPONSORS SECTION --- */}
            <section className="relative z-20 w-full min-w-0 max-w-7xl mx-auto px-6 py-12">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <div className="text-xs font-mono text-primary tracking-widest mb-2">OUR // PARTNERS</div>
                        <h2 className="text-4xl font-black italic uppercase">Current Sponsors</h2>
                        <p className="text-gray-400 mt-2 max-w-2xl">The organizations powering innovation at ByteVerse</p>
                    </div>
                </div>

                <div className="space-y-16">
                    {currentSponsors.map((group, i) => (
                        <div key={i} className="relative">
                            <div className="flex items-center gap-3 mb-8">
                                <span className={`material-icons text-3xl ${group.color}`}>{group.icon}</span>
                                <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white">{group.category}</h3>
                            </div>

                            <div className={group.sponsors.length === 1 ? "flex items-center" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
                                {/* Added explicit 'any' type to avoid TS errors without changing external array types */}
                                {group.sponsors.map((sponsor: any) => (
                                    <div 
                                        key={sponsor.name} 
                                        className={`group relative bg-carbon border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-5 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 min-h-[160px] ${group.sponsors.length === 1 ? 'w-full max-w-[340px] md:min-h-[200px]' : ''}`}
                                    >
                                        <img
                                            src={
                                                sponsor.imageUrl 
                                                ? sponsor.imageUrl 
                                                : sponsor.useSimpleIcon && sponsor.slug
                                                    ? `https://cdn.simpleicons.org/${sponsor.slug}`
                                                    : `https://img.logo.dev/${sponsor.domain}?token=pk_VZJykc4JQu6v2ZeJRBNNtA`
                                            }
                                            alt={sponsor.name}
                                            className={`w-auto max-w-full object-contain transition-all duration-300 ${group.sponsors.length === 1 ? 'h-16 md:h-20' : 'h-12'}`}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />

                                        <div className="hidden w-12 h-12 rounded-full bg-white/5 items-center justify-center mb-2 group-hover:bg-white/10 transition-colors">
                                            <span className={`font-black text-xl uppercase ${group.color}`}>{sponsor.name.charAt(0)}</span>
                                        </div>

                                        <div className={`text-xs font-bold text-center text-gray-400 group-hover:text-white uppercase tracking-widest leading-relaxed ${group.sponsors.length === 1 ? 'text-sm' : ''}`}>
                                            {sponsor.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Telemetry & Ticker */}
            <footer className={`relative z-20 w-full bg-carbon/90 border-t border-white/5 backdrop-blur-lg mt-auto transition-all duration-1000 delay-500 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="max-w-7xl mx-auto w-full relative">

                    {/* Background Animation Layer - Spans the entire grid width behind the text */}
                    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-100 md:opacity-50">
                        <F1CarTicker speed={2} />
                    </div>

                    {/* Telemetry Grid - Needs relative positioning to sit on top of the canvas */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border-b border-white/5 w-full bg-black/20 md:bg-transparent">

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
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                                <span className="w-1 h-1 bg-primary rounded-full"></span>
                                T-Minus
                            </span>
                            <div className="flex items-center gap-2 font-mono text-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                                <span className="text-lg md:text-xl font-bold">
                                    {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                                </span>
                            </div>
                        </div>

                        {/* Status Block */}
                        <div className="p-4 md:p-6 flex flex-col items-start group hover:bg-white/5 transition-colors">
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                                <span className="w-1 h-1 bg-primary rounded-full"></span>
                                System Status
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl font-bold font-display italic text-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                                    OPTIMAL
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

const OrganizerCard = ({ organizer, index }: { organizer: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="min-w-[220px] w-[220px] md:w-[260px] h-auto group relative p-[1px] shrink-0 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,30,0,0.4)] bg-white/10 hover:bg-primary [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]"
        >
            <div className="relative w-full h-full bg-gradient-to-b from-[#141418] via-[#0e0e12] to-[#0a0a0c] [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] overflow-hidden flex flex-col">

                {/* === Photo Section === */}
                <div className="relative aspect-[3/4] w-full overflow-hidden shrink-0 flex items-end justify-center">
                    {/* Radial red glow behind person */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_#ff1e0018_0%,_#0a0a0c_70%)] pointer-events-none"></div>
                    <img
                        src={organizer.image}
                        alt={organizer.name}
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-full object-scale-down object-bottom transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Bottom blend into info panel */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0a0a0c] to-transparent z-20"></div>
                    <div className="absolute inset-0 scanlines opacity-15 pointer-events-none mix-blend-overlay z-30"></div>

                    {/* Telemetry corners */}
                    <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>

                    {/* Index badge */}
                    <div className="absolute top-2.5 left-3 font-mono text-[9px] tracking-[0.3em] text-primary bg-black/60 border border-primary/20 px-1.5 py-0.5 z-40">
                        #{(index + 1).toString().padStart(2, '0')}
                    </div>
                </div>

                {/* === Info Panel (bottom 35%) === */}
                <div className="flex-grow px-3.5 py-3 border-t border-primary/30 bg-gradient-to-r from-[#0e0e12] via-[#121218] to-[#0e0e12] flex flex-col justify-between">
                    <div>
                        <div className="font-mono text-[9px] text-primary tracking-[0.3em] uppercase mb-0.5 truncate">{organizer.position}</div>
                        <h3 className="text-sm font-black italic uppercase text-white leading-tight">{organizer.name}</h3>
                    </div>

                    <div className="flex items-center gap-2.5 mt-2">
                        <a href={organizer.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.788-1.75-1.76 0-.972.784-1.759 1.75-1.759s1.75.787 1.75 1.759c0 .972-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.75c0-1.133-.02-2.59-1.58-2.59-1.58 0-1.82 1.233-1.82 2.51v4.83h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z" />
                            </svg>
                        </a>
                        <a href={organizer.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};