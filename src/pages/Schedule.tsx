import { useState, useEffect, useRef, useMemo } from 'react';

// Hackathon Schedule Data
const scheduleData = [
    {
        day: "FRI",
        date: "MAR 20",
        events: [
            { id: 1, time: "TBA", title: "Registration Opens", desc: "Hackathon registration opens online", location: "Online Portal", type: "ops", icon: "how_to_reg" }
        ]
    },
    {
        day: "WED",
        date: "MAR 25",
        events: [
            { id: 2, time: "TBA", title: "Info Session", desc: "Introductory info session for participants", location: "Online / Live Stream", type: "event", icon: "info" },
            { id: 3, time: "TBA", title: "PPT Submissions Commence", desc: "Teams may start submitting PPT entries", location: "Submissions Portal", type: "ops", icon: "file_present" }
        ]
    },
    {
        day: "SUN",
        date: "APR 05",
        events: [
            { id: 4, time: "23:59", title: "PPT Submissions Deadline", desc: "Final deadline for PPT submissions", location: "Submissions Portal", type: "ops", icon: "timer" }
        ]
    },
    {
        day: "FRI",
        date: "APR 10",
        events: [
            { id: 5, time: "TBA", title: "Inauguration Ceremony", desc: "Opening & welcome remarks", location: "Main Hall / Stream", type: "event", icon: "event" },
            { id: 6, time: "09:00", title: "Presentation Rounds", desc: "Teams present their projects", location: "Presentation Halls", type: "race", icon: "groups" },
            { id: 7, time: "TBA", title: "ByteVerse Registration Closes", desc: "Hackathon registration closes", location: "Online Portal", type: "ops", icon: "how_to_reg" }
        ]
    },
    {
        day: "SAT",
        date: "APR 11",
        events: [
            { id: 8, time: "09:00", title: "Hackathon Commences", desc: "Final registration cut-off", location: "Online Portal", type: "ops", icon: "how_to_reg" }
        ]
    },
    {
        day: "SUN",
        date: "APR 12",
        events: [
            { id: 9, time: "10:00", title: "Mid Evaluation", desc: "Mid-event evaluations and mentor check-ins", location: "Evaluation Rooms", type: "event", icon: "preview" },

            { id: 10, time: "20:00", title: "Hackathon Concludes", desc: "Submission deadline and end of build phase", location: "Event Campus & Online", type: "race", icon: "check_circle" },

            { id: 11, time: "23:59", title: "Community Review Window Opens", desc: "Community review & voting period begins", location: "Community Portal", type: "event", icon: "chat" }
        ]
    },
    {
        day: "MON",
        date: "APR 13",
        events: [
            { id: 12, time: "20:00", title: "Community Review Window Closes", desc: "End of the community voting window", location: "Community Portal", type: "event", icon: "chat" }
        ]
    },
    {
        day: "MON",
        date: "APR 20",
        events: [
            { id: 13, time: "TBA", title: "Closing Ceremony", desc: "Awards, highlights, and closing remarks", location: "Main Hall / Stream", type: "event", icon: "celebration" }
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
        <section className="relative min-h-screen bg-asphalt text-white py-24 overflow-hidden font-display">
            {/* Background Layers */}
            <div className="fixed inset-0 bg-carbon-fiber opacity-40 z-0 pointer-events-none"></div>
            <div className="fixed inset-0 scanlines z-10 pointer-events-none opacity-20"></div>

            {/* Ambient Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[100px] pointer-events-none z-0"></div>

            <main className="relative z-30 max-w-7xl mx-auto px-6">

                {/* Header - Pit Board Style */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 border-b border-white/10 pb-6 relative z-30 text-center md:text-left">
                    <div className="w-full md:w-auto mb-6 md:mb-0">
                        <div className="text-neon-cyan font-mono text-xs tracking-[0.4em] mb-2 pl-1">HACKATHON</div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            Hackathon <span className="text-stroke-white text-transparent">Schedule</span>
                        </h1>
                    </div>
                    <div className="w-full md:w-auto flex flex-col items-center md:items-end">
                        <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
                        <div className="text-primary font-bold text-xl animate-pulse">LIVE FEED ACTIVE</div>
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
                <div className="mt-24 text-center">
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
    <div className={`relative w-full bg-white/5 border-l-2 ${borderColorClass} p-6 rounded-r-xl md:rounded-xl overflow-hidden group-hover:bg-white/10 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] text-left`}>
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
