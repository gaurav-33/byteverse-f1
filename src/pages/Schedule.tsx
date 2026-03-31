import { useState, useEffect, useRef, useMemo } from 'react';
import F1CarTicker from '../components/F1CarTicker';
// Hackathon Schedule Data
const scheduleData = [
    {
        day: "SAT",
        date: "MAR 28",
        events: [
            { id: 1, time: "09:00 IST", title: "Registration Starts", desc: "Hackathon registration opens on Unstop. Form teams of 2–4 members and register before April 11.", location: "unstop.com", type: "ops", icon: "how_to_reg" }
        ]
    },
    {
        day: "FRI",
        date: "APR 03",
        events: [
            { id: 2, time: "TBA", title: "Info Session", desc: "Introductory session covering rules, tracks, judging criteria, and Q&A for all registered participants.", location: "Online / Live Stream", type: "event", icon: "info" }
        ]
    },
    {
        day: "THU",
        date: "APR 09",
        events: [
            { id: 3, time: "10:00 IST", title: "Inaugural Ceremony", desc: "Opening ceremony. Attendance is mandatory for all offline participants. Stream available for online teams.", location: "Main Hall / Live Stream", type: "event", icon: "event" },
            { id: 4, time: "TBA", title: "Presentation Round", desc: "Shortlisted teams present their idea decks to the judging panel. Offline participants evaluated in-person.", location: "Presentation Halls", type: "race", icon: "groups" },
            { id: 5, time: "TBA", title: "Guest Speaker", desc: "Special guest speaker session — date confirmed, time to be announced.", location: "Main Hall / Live Stream", type: "event", icon: "mic" }
        ]
    },
    {
        day: "SAT",
        date: "APR 11",
        events: [
            { id: 6, time: "09:00 IST", title: "Registration Ends", desc: "Final deadline for team registration. No new registrations accepted after this time.", location: "unstop.com", type: "ops", icon: "lock_clock" },
            { id: 7, time: "10:00 IST", title: "Hackathon Starts", desc: "BUILD PHASE BEGINS! 36-hour hackathon kicks off at NIT Patna. GitHub repos must be freshly created after this point.", location: "NIT Patna / Online", type: "race", icon: "rocket_launch" }
        ]
    },
    {
        day: "SUN",
        date: "APR 12",
        events: [
            { id: 8, time: "20:00 IST", title: "Hackathon Ends", desc: "Final submission deadline. Code freeze. All teams must push their final commits to their public GitHub repository.", location: "NIT Patna / Online", type: "race", icon: "check_circle" },
            { id: 9, time: "20:30 IST", title: "Closing Ceremony", desc: "Wrap-up ceremony with highlights, mentor reflections, and appreciation for all participants.", location: "Main Hall / Live Stream", type: "event", icon: "celebration" },
            { id: 10, time: "21:00 IST", title: "Community Review Opens", desc: "Community voting period begins. Public can review, explore, and vote on submitted projects.", location: "Community Portal", type: "event", icon: "how_to_vote" }
        ]
    },
    {
        day: "TUE",
        date: "APR 14",
        events: [
            { id: 11, time: "21:00 IST", title: "Community Review Closes", desc: "End of community voting window. Final scores compiled by the organizing team.", location: "Community Portal", type: "event", icon: "gavel" }
        ]
    },
    {
        day: "MAY",
        date: "WEEK 1",
        events: [
            { id: 12, time: "TBA", title: "Result Announcement", desc: "Winners announced! Awards for 1st, 2nd, 3rd place, top all-girls team, and top all-1st-year team.", location: "Online / Social Media", type: "event", icon: "emoji_events" }
        ]
    }
];

export const Schedule = () => {
    // References to all event nodes to calculate the path
    const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [pathD, setPathD] = useState('');
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Flatten data to map indices to nodes
    const allEvents = useMemo(() => scheduleData.flatMap(d => d.events), []);

    // Recalculate SVG Path on resize or load
    useEffect(() => {
        const calculatePath = () => {
            if (!containerRef.current || nodeRefs.current.length === 0) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            setDimensions({ width: containerRect.width, height: containerRect.height });

            let d = "";
            let points: { x: number, y: number }[] = [];

            // 1. Get coordinates of all nodes relative to container
            nodeRefs.current.forEach((node) => {
                if (node) {
                    const rect = node.getBoundingClientRect();
                    const x = rect.left + rect.width / 2 - containerRect.left;
                    const y = rect.top + rect.height / 2 - containerRect.top;
                    points.push({ x, y });
                }
            });

            if (points.length === 0) return;

            // 2. Build the Smooth Path (Catmull-Rom or Cubic Bezier)
            // Start from top center
            const startX = containerRect.width / 2;
            const startY = 0;

            d += `M ${startX} ${startY} `;

            // Curve to first point
            d += `C ${startX} ${startY + 50}, ${points[0].x} ${points[0].y - 50}, ${points[0].x} ${points[0].y} `;

            // Connect subsequent points
            for (let i = 0; i < points.length - 1; i++) {
                const p1 = points[i];
                const p2 = points[i + 1];

                // Control points for S-curve (vertical handles)
                const distY = p2.y - p1.y;
                const handleLength = distY * 0.5;

                d += `C ${p1.x} ${p1.y + handleLength}, ${p2.x} ${p2.y - handleLength}, ${p2.x} ${p2.y} `;
            }

            // Curve to end (continue downwards)
            const lastP = points[points.length - 1];
            d += `C ${lastP.x} ${lastP.y + 100}, ${startX} ${containerRect.height - 100}, ${startX} ${containerRect.height}`;

            setPathD(d);
        };

        // Initial calc
        calculatePath();

        // Listen for resize
        window.addEventListener('resize', calculatePath);
        // Short timeout to ensure layout is settled
        const timeout = setTimeout(calculatePath, 500);

        return () => {
            window.removeEventListener('resize', calculatePath);
            clearTimeout(timeout);
        };
    }, [allEvents]);


    return (
        <section id="schedule" className="relative text-white py-24 font-display overflow-hidden">
            
            {/* Layout Background - Asphalt & Speedlines */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#0a0a0c]"></div>
                
                {/* Diagonal racing stripes */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #ffffff 20px, #ffffff 40px)' }}></div>
                
                {/* Horizontal motion lines (asphalt texture speed) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_8px]"></div>

                {/* Vertical fades */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0c] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
                
                <div className="absolute inset-0 scanlines opacity-10"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header - Pit Board Style */}
                <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between mb-16 pb-10 text-center md:text-left">
                    <div className="w-full md:w-auto mb-6 md:mb-0 relative z-10">
                        <div className="text-primary font-mono text-xs tracking-[0.4em] mb-2 pl-1 flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                            HACKATHON
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            Hackathon <span className="text-stroke-white text-transparent">Schedule</span>
                        </h1>
                    </div>
                    <div className="w-full md:w-auto flex flex-col items-center md:items-end relative z-10">
                        <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
                        <div className="text-primary font-bold text-xl animate-pulse">LIVE FEED ACTIVE</div>
                    </div>

                    {/* Animated ticker bottom divider */}
                    <div className="absolute bottom-0 left-0 w-full h-[56px] flex items-center opacity-80 hover:opacity-100 transition-opacity">
                        <div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2"></div>
                        <div className="w-full absolute inset-0">
                            <F1CarTicker speed={2} height={56} transparent />
                        </div>
                    </div>
                </div>



                {/* Timeline Container */}
                <div className="relative" ref={containerRef}>

                    {/* DYNAMIC SVG TRACK Line (Visible on Mobile & Desktop) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ height: dimensions.height }}>
                        <defs>
                            <linearGradient id="trackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ff1e00" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#00f5d4" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ff1e00" stopOpacity="0.8" />
                            </linearGradient>
                            <filter id="neonGlow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* The Glowing Circuit Path */}
                        <path
                            d={pathD}
                            fill="none"
                            stroke="url(#trackGradient)"
                            strokeWidth="4"
                            filter="url(#neonGlow)"
                            className="opacity-50"
                            strokeLinecap="round"
                        />
                        {/* Animating Dash on top */}
                        <path
                            d={pathD}
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="animate-track-draw stroke-dasharray-1000 stroke-dashoffset-1000 opacity-80"
                        />
                    </svg>

                    <div className="space-y-24">
                        {scheduleData.map((day, dayIndex) => (
                            <div key={day.day} className="relative">

                                {/* Sticky Day Header */}
                                <div className="sticky top-24 z-30 flex items-center justify-start md:justify-center mb-12 pl-16 md:pl-0 pointer-events-none">
                                    <div className="bg-carbon border border-white/20 px-6 py-2 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center gap-4 backdrop-blur-md">
                                        <span className="text-2xl font-black italic uppercase text-white">{day.day}</span>
                                        <span className="h-4 w-px bg-white/20"></span>
                                        <span className="text-sm font-mono text-primary tracking-widest">{day.date}</span>
                                    </div>
                                </div>

                                {/* Events */}
                                <div className="space-y-12">
                                    {day.events.map((event, i) => {
                                        // Calculate global index for weaving (even/odd across days)
                                        // We need to count how many events came before this day
                                        const previousEventsCount = scheduleData.slice(0, dayIndex).reduce((acc, d) => acc + d.events.length, 0);
                                        const globalIndex = previousEventsCount + i;

                                        return (
                                            <TimelineEvent
                                                key={event.id}
                                                event={event}
                                                position={globalIndex % 2 === 0 ? 'left' : 'right'}

                                                // Assign Ref
                                                nodeRef={(el: HTMLDivElement | null) => nodeRefs.current[globalIndex] = el}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Status */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 text-gray-500 font-mono text-xs uppercase tracking-widest border border-white/10 px-6 py-3 rounded-full bg-black/20">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Syncing with Race Control...
                    </div>
                </div>

            </main>
        </section>
    );
};

const TimelineEvent = ({ event, position, nodeRef }: { event: any, position: 'left' | 'right', nodeRef: any }) => {

    const isLeft = position === 'left';

    // Type Colors
    const getTypeColor = (type: string) => {
        switch (type) {
            case 'race': return 'text-primary border-primary';
            case 'ops': return 'text-yellow-500 border-yellow-500';
            case 'event': return 'text-neon-cyan border-neon-cyan';
            default: return 'text-white border-white';
        }
    };

    const typeColor = getTypeColor(event.type);
    const borderColorClass = typeColor.split(' ')[1]; // Extract border-color
    const textColorClass = typeColor.split(' ')[0]; // Extract text-color

    // Dynamic Positioning for Weaved Layout
    // Desktop: 45% / 55%
    const leftDesktopPos = isLeft ? 'md:left-[45%]' : 'md:left-[55%]';
    // Mobile: Alternating 2rem (left-8) / 6rem (left-24) to create zig-zag
    const leftMobilePos = isLeft ? 'left-8' : 'left-24';

    return (
        <div className={`relative flex flex-col md:flex-row items-center w-full group overflow-visible`}>

            {/* Left Column (Desktop Only) */}
            <div className={`hidden md:flex w-full md:w-1/2 flex-col md:items-end md:text-right mb-8 md:mb-0 md:pr-12 lg:pr-16 ${!isLeft ? 'md:opacity-100' : ''}`}>
                {isLeft ? (
                    <EventCard event={event} borderColorClass={borderColorClass} textColorClass={textColorClass} />
                ) : (
                    <TimeDisplay time={event.time} textColorClass={textColorClass} align="right" />
                )}
            </div>

            {/* Center Node (Zig-Zag on Mobile, Weave on Desktop) */}
            <div
                ref={nodeRef}
                className={`absolute ${leftMobilePos} ${leftDesktopPos} -ml-5 w-10 h-10 z-20 group-hover:scale-125 transition-transform duration-300 md:translate-x-[-50%] flex items-center justify-center`}
            >
                <div className={`absolute inset-0 rounded-full ${textColorClass.replace('text-', 'bg-')} opacity-30 animate-ping -z-10`}></div>
                <img src="/f1-stop.png" alt="Stop" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,30,0,0.8)]" />
            </div>

            {/* Right Column (Mobile Content & Desktop Right) */}
            <div className={`w-full md:w-1/2 flex flex-col md:items-start md:text-left pl-36 md:pl-12 lg:pl-16`}>

                {/* Mobile View: Always show EventCard here */}
                <div className="md:hidden w-full">
                    <EventCard event={event} borderColorClass={borderColorClass} textColorClass={textColorClass} />
                </div>

                {/* Desktop View: Show content based on position */}
                <div className="hidden md:block w-full">
                    {isLeft ? (
                        <TimeDisplay time={event.time} textColorClass={textColorClass} align="left" />
                    ) : (
                        <EventCard event={event} borderColorClass={borderColorClass} textColorClass={textColorClass} />
                    )}
                </div>
            </div>

        </div>
    );
};

const TimeDisplay = ({ time, textColorClass, align }: { time: string, textColorClass: string, align: 'left' | 'right' }) => (
    <div className={`hidden md:block w-full ${align === 'right' ? 'text-right' : 'text-left'}`}>
        <div className={`font-mono text-2xl lg:text-3xl font-bold ${textColorClass} drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]`}>
            {time}
        </div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Local Time</div>
    </div>
);

const EventCard = ({ event, borderColorClass, textColorClass }: { event: any, borderColorClass: string, textColorClass: string }) => (
    <div className={`relative w-full bg-white/5 border-l-2 ${borderColorClass} p-6 overflow-hidden group-hover:bg-white/10 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] text-left [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%)]`}>
        {/* Mobile Time (visible only on small screens) */}
        <div className="md:hidden mb-2 font-mono text-xl font-bold text-white">
            {event.time} <span className="text-[10px] text-gray-500 font-normal">LOCAL</span>
        </div>

        {/* Hover Glow Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r from-${borderColorClass.replace('border-', '')}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

        <div className="relative z-10">
            <div className={`flex items-center gap-3 mb-2 justify-start`}>
                <span className={`material-icons text-lg ${textColorClass}`}>{event.icon}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded ${textColorClass} bg-black/30`}>
                    {event.type === 'ops' ? 'Operations' : event.type}
                </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black italic uppercase text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {event.title}
            </h3>

            <p className={`text-sm text-gray-400 font-mono mb-4 border-l-2 border-white/10 pl-3`}>
                {event.desc}
            </p>

            <div className={`flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-wider justify-start`}>
                <span className="material-icons text-[14px]">place</span>
                {event.location}
            </div>
        </div>
        {/* Decorative Corner */}
        <div className={`absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity`}>
            <div className={`w-4 h-4 border-t border-r ${borderColorClass}`}></div>
        </div>
    </div>
);
