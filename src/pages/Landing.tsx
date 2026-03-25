import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Organizers from '../components/organisors';

// Custom Date and Time for the Countdown
const TARGET_DATE = new Date('2026-03-15T10:00:00'); // Example: March 15, 2026, 10:00 AM

// Organizers data (arranged by position priority)
const organizers = [
    { name: 'Sonu Jhajharia', position: 'Community Lead', linkedin: 'https://www.linkedin.com/in/sonu-jhajharia-122a39285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/sonuj04', image: '/sonu.jpg' },
    { name: 'Ravi Upadhyay', position: 'Vice President', linkedin: 'https://www.linkedin.com/in/raviupadhyay23', github: 'https://github.com/upadhyayravi023', image: '/ravi.jpg' },
    { name: 'Ashutosh Panda', position: 'Administrative & AI/ML Lead', linkedin: 'https://www.linkedin.com/in/ashutosh-panda-63a478380', github: 'https://github.com/zen-zap', image: '/ashu.jpg' },
    { name: 'Vasu Choudhari', position: 'Technical Lead / Secretary', linkedin: 'https://www.linkedin.com/in/vasu-choudhari', github: 'https://www.github.com/vasu-here', image: '/vasu.jpg' },
    { name: 'Shivendu Kumar', position: 'Event Lead (Patna Campus)', linkedin: 'https://www.linkedin.com/in/shivendu-kumar-5971112b9?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/ShivenduKmr', image: '/shivendu.jpg' },
    { name: 'Sanjeet Raj', position: 'Web Lead', linkedin: 'https://www.linkedin.com/in/Sanjeetraj40/', github: 'https://github.com/Sanjeet4567', image: '/sanjeet.jpeg' },
    { name: 'Suryakant Acharya', position: 'Co-Lead (Gray Interface)', linkedin: 'https://www.linkedin.com/in/suryakant-acharya-8b09a628a', github: 'https://github.com/Suryakant2112', image: '/surya.jpg' },
    { name: 'Tanay Palekar', position: 'Lead, Team Nougat', linkedin: 'https://www.linkedin.com/in/palekar-tanay-80b0a428b', github: 'https://github.com/tanay4768', image: '/tanay.jpg' }
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
                <div className="mt-8 font-mono text-xs text-gray-500 tracking-[0.5em] animate-pulse">BYTEVERSE LOADING...</div>
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
            </main>

                    <Organizers />

                    {/* Organizers Carousel */}
                    <section className="relative z-20 max-w-7xl mx-auto px-6 py-12">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <div className="text-xs font-mono text-primary tracking-widest mb-2">TEAM // ORGANIZERS</div>
                                <h2 className="text-4xl font-black italic uppercase">Organizers</h2>
                                <p className="text-gray-400 mt-2 max-w-2xl">Meet the Hackslash team driving Byteverse</p>
                            </div>
                        </div>

                        <div className="relative">
                            {/* hide scrollbar visually for the carousel */}
                            <style>{`#organizers-carousel::-webkit-scrollbar{display:none} #organizers-carousel{scrollbar-width:none;-ms-overflow-style:none}`}</style>
                            <button
                                aria-label="Scroll left"
                                onClick={() => {
                                    const el = carouselRef.current;
                                    if (!el) return;
                                    el.scrollBy({ left: -Math.round(el.clientWidth * 0.7), behavior: 'smooth' });
                                }}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <span className="material-icons text-white">chevron_left</span>
                            </button>

                            <div id="organizers-carousel" ref={carouselRef} className="no-scrollbar overflow-x-auto scroll-smooth py-2 px-6">
                                <div className="flex gap-6 items-stretch">
                                    {organizers.map((org, i) => (
                                        <OrganizerCard key={org.github || i} organizer={org} index={i} />
                                    ))}
                                </div>
                            </div>

                            <button
                                aria-label="Scroll right"
                                onClick={() => {
                                    const el = carouselRef.current;
                                    if (!el) return;
                                    el.scrollBy({ left: Math.round(el.clientWidth * 0.7), behavior: 'smooth' });
                                }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <span className="material-icons text-white">chevron_right</span>
                            </button>
                        </div>
                    </section>


            {/* Bottom Telemetry & Ticker */}
            <footer className={`relative z-20 w-full bg-carbon/90 border-t border-white/5 backdrop-blur-lg mt-auto transition-all duration-1000 delay-500 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="max-w-7xl mx-auto w-full">
                    {/* Telemetry Grid */}
                    <div className="flex flex-col items-center justify-between md:flex-row divide-x divide-white/5 border-b border-white/5">
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
                                    {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                                </span>
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
            style={{ height: 320 }}
            className="min-w-[240px] w-[240px] md:w-[320px] bg-carbon border border-white/10 rounded-xl overflow-hidden relative group h-[320px]"
        >
            <div className="absolute inset-0 z-0">
                <img src={organizer.image} alt={organizer.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 p-4 flex flex-col justify-end h-full">
                <div className="mb-2">
                    <div className="text-[10px] font-mono text-primary uppercase tracking-widest">{organizer.position}</div>
                    <h3 className="text-lg md:text-xl font-black italic uppercase text-white">{organizer.name}</h3>
                </div>

                <div className="flex items-center gap-2">
                    <a href={organizer.linkedin} target="_blank" rel="noreferrer" className="text-white/80 hover:text-primary transition-colors text-xs md:text-sm" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.788-1.75-1.76 0-.972.784-1.759 1.75-1.759s1.75.787 1.75 1.759c0 .972-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.75c0-1.133-.02-2.59-1.58-2.59-1.58 0-1.82 1.233-1.82 2.51v4.83h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z" />
                        </svg>
                    </a>
                    <a href={organizer.github} target="_blank" rel="noreferrer" className="text-white/80 hover:text-primary transition-colors text-xs md:text-sm" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
