import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section className="min-h-screen bg-asphalt text-white py-24 font-display overflow-hidden relative">
            {/* Background Map Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-cover grayscale opacity-10"></div>
                <div className="absolute inset-0 bg-carbon-fiber opacity-50"></div>
                <div className="absolute inset-0 scanlines"></div>
            </div>

            <main className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Header (F1 Style) */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-white/10 relative">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-f1-red rounded-full animate-pulse"></div>
                                <span className="font-mono text-xs text-f1-red uppercase tracking-[0.2em]">Team HQ // Restricted Access</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
                                Our <span className="text-stroke-white text-transparent block md:inline">Legacy</span>
                            </h1>
                        </div>

                        <div className="mt-6 md:mt-0 max-w-md text-right md:text-right text-gray-400 font-mono text-xs leading-relaxed hidden md:block">
                            // SECURE CHANNEL ESTABLISHED <br />
                            // UPLINK: 98.4% STABLE <br />
                            // ENGINEERING THE FUTURE OF MOTORSPORT
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-f1-red"></div>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light leading-relaxed mb-24 border-l-4 border-f1-red pl-6">
                        Engineering the future of high-performance racing through code, data, and precision. We are the architects of speed.
                    </p>

                    {/* History Timeline */}
                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 space-y-16">
                        <TimelineItem
                            year="2024"
                            title="The Inception"
                            desc="ByteVerse Racing is founded with a single mission: to merge software engineering with motorsport precision."
                            align="left"
                        />
                        <TimelineItem
                            year="2025"
                            title="First Championship"
                            desc="Dominated the digital tarmac, securing P1 in the Constructor's standings with our proprietary telemetry AI."
                            align="right"
                        />
                        <TimelineItem
                            year="2026"
                            title="Global Expansion"
                            desc="Expanding operations to 5 new circuits and launching the 'Future Drivers' academy program."
                            align="left"
                        />
                    </div>

                    {/* Tech Specs (Grid Layout) */}
                    <div className="mt-32">
                        <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-12">
                            <h2 className="text-4xl font-black italic uppercase">Tech <span className="text-stroke-white text-transparent">Specs</span></h2>
                            <span className="font-mono text-xs text-f1-red tracking-widest">CLASSIFIED//INTERNAL</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <TechCard title="Chassis" value="React 18" icon="layers" />
                            <TechCard title="Aerodynamics" value="Framer Motion" icon="wind_power" />
                            <TechCard title="Telemetry" value="Wouter Router" icon="router" />
                            <TechCard title="Engine" value="TypeScript 5" icon="memory" />
                            <TechCard title="Fuel" value="Vite" icon="local_gas_station" />
                            <TechCard title="Tires" value="Tailwind CSS" icon="tire_repair" />
                        </div>
                    </div>

                    {/* CEO Quote */}
                    <div className="mt-32 relative p-12 bg-carbon border border-white/5 rounded-2xl text-center overflow-hidden group hover:border-f1-red/30 transition-colors duration-500">
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-f1-red rounded-tl-xl opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-f1-red rounded-br-xl opacity-50"></div>

                        <span className="material-icons text-6xl text-white/5 absolute top-8 left-8">format_quote</span>

                        <blockquote className="relative z-10 text-2xl md:text-3xl font-bold italic text-white mb-8">
                            "Speed is irrelevant if you're going in the wrong direction. At ByteVerse, we code the map."
                        </blockquote>
                        <cite className="not-italic flex flex-col items-center">
                            <span className="font-bold text-f1-red tracking-widest uppercase">Alex Chen</span>
                            <span className="text-xs font-mono text-gray-500">Team Principal</span>
                        </cite>
                    </div>

                </motion.div>
            </main>
        </section>
    );
};

const TimelineItem = ({ year, title, desc, align }: { year: string, title: string, desc: string, align: 'left' | 'right' }) => (
    <div className={`relative flex flex-col md:flex-row items-center ${align === 'left' ? '' : 'md:flex-row-reverse'} group`}>
        {/* Dot */}
        <div className="absolute left-[-9px] md:left-auto md:relative md:w-1/2 flex justify-center z-20">
            <div className="w-4 h-4 bg-asphalt border-2 border-f1-red rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
        </div>

        {/* Content */}
        <div className={`ml-8 md:ml-0 w-full md:w-1/2 p-6 md:px-12 ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
            <div className="text-f1-red font-mono text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">{year}</div>
            <h3 className="text-3xl font-black italic uppercase text-white mb-3 group-hover:text-f1-red transition-colors">{title}</h3>
            <p className="text-gray-400 font-light leading-relaxed">{desc}</p>
        </div>

        {/* Empty Space for other side */}
        <div className="hidden md:block w-1/2"></div>
    </div>
);

const TechCard = ({ title, value, icon }: any) => (
    <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:bg-white/10 hover:border-f1-red/50 transition-all duration-300 group cursor-default">
        <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-mono text-xs uppercase tracking-wider">{title}</span>
            <span className="material-icons text-white/20 group-hover:text-f1-red transition-colors">{icon}</span>
        </div>
        <div className="text-2xl font-bold text-white group-hover:scale-105 origin-left transition-transform">{value}</div>
    </div>
);
