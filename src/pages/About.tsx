import { motion } from 'framer-motion';
import F1CarTicker from '../components/F1CarTicker';

export const About = () => {
    return (
        <section id="about" className="relative text-white py-24 font-display overflow-hidden">
            
            {/* Local Section Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#0a0a0c]"></div>
                {/* Subtle Primary Glow from Top Right */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,30,0,0.1),_transparent_50%)]"></div>
                {/* Telemetry Dots Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0c] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
                <div className="absolute inset-0 scanlines opacity-10"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Header (Event Style) */}
                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-10">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">BYTEVERSE // HACKSLASH NITP</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
                                About <span className="text-stroke-white text-transparent">Byteverse</span>
                            </h1>
                        </div>

                        <div className="mt-6 md:mt-0 max-w-md text-right md:text-right text-gray-400 font-mono text-xs leading-relaxed hidden md:block relative z-10">
                            // ANNUAL HACKATHON <br />
                            // COMMUNITY-DRIVEN // EIGHTH EDITION <br />
                            // BUILD. COLLABORATE. LAUNCH.
                        </div>

                        {/* Animated ticker bottom divider */}
                        <div className="absolute bottom-0 left-0 w-full h-[56px] flex items-center opacity-80 hover:opacity-100 transition-opacity">
                            <div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2"></div>
                            <div className="w-full absolute inset-0">
                                <F1CarTicker speed={2} height={56} transparent />
                            </div>
                        </div>
                    </div>

                    {/* About ByteVerse 2026 */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
                        {/* Main description */}
                        <div className="lg:col-span-3 space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                                <span className="font-mono text-xs text-primary uppercase tracking-[0.3em]">About ByteVerse 2026</span>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed border-l-4 border-primary pl-6">
                                ByteVerse 8.0 is a high-energy, innovation-driven hackathon that brings together passionate developers to build impactful solutions in a limited time frame.
                            </p>
                            <p className="text-base text-gray-400 leading-relaxed pl-6 border-l border-white/10">
                                It serves as a platform where creativity meets technology, empowering participants to turn ideas into reality through collaboration and rapid prototyping. Organized by <span className="text-white font-semibold">HackSlash Developers Club</span>, ByteVerse has grown into a vibrant community event that fosters learning, experimentation and technical excellence.
                            </p>
                            <p className="text-base text-gray-400 leading-relaxed pl-6 border-l border-white/10">
                                With a strong emphasis on open-source principles and real-world problem solving, the event encourages participants to push boundaries and think beyond conventional solutions. Whether you're a beginner exploring your first hackathon or an experienced developer aiming to build something groundbreaking, ByteVerse 8.0 offers an inclusive environment filled with mentorship, networking opportunities and exciting challenges.
                            </p>
                        </div>

                        {/* Side panel */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            {[
                                { icon: 'emoji_events', label: 'Edition', value: 'Eighth — ByteVerse 8.0' },
                                { icon: 'location_on', label: 'Venue', value: 'NIT Patna, Bihar' },
                                { icon: 'calendar_today', label: 'Date', value: 'April 11, 2026' },
                                { icon: 'people', label: 'Organized by', value: 'HackSlash Developers Club' },
                                { icon: 'workspace_premium', label: 'Focus', value: 'Open-Source • Innovation' },
                            ].map(item => (
                                <div key={item.label} className="flex items-start gap-4 p-4 bg-white/3 border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all duration-300 [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]">
                                    <span className="material-icons text-primary text-lg mt-0.5 shrink-0">{item.icon}</span>
                                    <div>
                                        <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</div>
                                        <div className="text-sm text-white font-semibold">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About HackSlash */}
                    <div className="mb-16 p-6 bg-white/3 border border-white/5 hover:border-primary/20 transition-colors duration-500 [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="material-icons text-primary text-base">groups</span>
                            <h3 className="text-xl font-black italic uppercase tracking-wide">About HackSlash</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Hackslash Developer's Club NIT Patna was established with the vision of fostering a culture of innovation and collaboration. Hackslash is a dynamic community of developers, designers, and tech enthusiasts dedicated to pushing the boundaries of technology and making a positive impact through innovative solutions.
                        </p>
                    </div>
                </motion.div>
            </main>
        </section>
    );
};

