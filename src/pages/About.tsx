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

            <main className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Header (Event Style) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-white/10 relative">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">BYTEVERSE // HACKSLASH NITP</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
                                Byteverse <span className="text-stroke-white text-transparent block md:inline">Unleash your coding magic!</span>
                            </h1>
                        </div>

                        <div className="mt-6 md:mt-0 max-w-md text-right md:text-right text-gray-400 font-mono text-xs leading-relaxed hidden md:block">
                            // ANNUAL HACKATHON <br />
                            // COMMUNITY-DRIVEN // EIGHTH EDITION <br />
                            // BUILD. COLLABORATE. LAUNCH.
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-primary"></div>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light leading-relaxed mb-8 border-l-4 border-primary pl-6">
                        Calling all tech wizards, problem solvers, and creative minds — Byteverse, the annual hackathon by Hackslash NITP, returns for its sixth edition. This electrifying event is where innovation meets code and your creativity knows no bounds.
                    </p>

                    <p className="text-base text-gray-400 max-w-3xl mb-12">
                        Byteverse is a celebration of collaboration and experimentation. Whether you're building full-stack apps, exploring decentralised systems, or prototyping embedded devices, Byteverse is the arena to ship bold ideas and learn from a community of makers.
                    </p>

                    <div className="mt-6 mb-12 p-6 bg-white/3 border border-white/5 rounded-xl">
                        <h3 className="text-2xl font-black italic uppercase mb-2">About Hackslash</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Hackslash Developer's Club NIT Patna was established with the vision of fostering a culture of innovation and collaboration. Hackslash is a dynamic community of developers, designers, and tech enthusiasts dedicated to pushing the boundaries of technology and making a positive impact through innovative solutions.
                        </p>
                    </div>

                    {/* History Timeline */}
                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 space-y-16">
                        <TimelineItem
                            year="2021"
                            title="Hackslash Founded"
                            desc="Hackslash Developer's Club was formed to connect students passionate about building and learning together."
                            align="left"
                        />
                        <TimelineItem
                            year="2022"
                            title="Byteverse Debut"
                            desc="The first Byteverse brought together students from across campus to collaborate on real-world projects and prototypes."
                            align="right"
                        />
                        <TimelineItem
                            year="2026"
                            title="Eighth Edition"
                            desc="Byteverse returns bigger: competitions, workshops, mentorship, and new tracks including Web Development, Network Security, and Game Development."
                            align="left"
                        />
                    </div>

                    {/* Tech Specs (Grid Layout) */}
                    <div className="mt-32">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between border-b border-white/10 pb-4 mb-12 text-center md:text-left">
                            <h2 className="text-4xl font-black italic uppercase mb-2 md:mb-0">Tech <span className="text-stroke-white text-transparent">Specs</span></h2>
                            <span className="font-mono text-xs text-f1-red tracking-widest">CLASSIFIED//INTERNAL</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <TechCard title="Events" value="Hackathon • Workshops" icon="emoji_events" />
                            <TechCard title="Tracks" value="Web3, Security, Game, AI" icon="category" />
                            <TechCard title="Mentors" value="Industry & Alumni" icon="people" />
                            <TechCard title="Prizes" value="Cash & Perks" icon="card_giftcard" />
                            <TechCard title="Community" value="Hackslash NITP" icon="groups" />
                            <TechCard title="Platform" value="Vite • React • TS" icon="developer_mode" />
                        </div>
                    </div>

                    {/* CEO Quote */}
                    <div className="mt-32 relative p-12 bg-carbon border border-white/5 rounded-2xl text-center overflow-hidden group hover:border-f1-red/30 transition-colors duration-500">
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-f1-red rounded-tl-xl opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-f1-red rounded-br-xl opacity-50"></div>

                        <span className="material-icons text-6xl text-white/5 absolute top-8 left-8">format_quote</span>

                        <blockquote className="relative z-10 text-2xl md:text-3xl font-bold italic text-white mb-8">
                            "Byteverse is where ideas meet build — ship something you believe in and learn along the way."
                        </blockquote>
                        <cite className="not-italic flex flex-col items-center">
                            <span className="font-bold text-primary tracking-widest uppercase">Hackslash Team</span>
                            <span className="text-xs font-mono text-gray-500">Developer's Club, NIT Patna</span>
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
    <div className="bg-white/5 border border-white/5 p-6 hover:bg-white/10 hover:border-f1-red/50 transition-all duration-300 group cursor-default [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%)]">
        <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-mono text-xs uppercase tracking-wider">{title}</span>
            <span className="material-icons text-white/20 group-hover:text-f1-red transition-colors">{icon}</span>
        </div>
        <div className="text-2xl font-bold text-white group-hover:scale-105 origin-left transition-transform">{value}</div>
    </div>
);
