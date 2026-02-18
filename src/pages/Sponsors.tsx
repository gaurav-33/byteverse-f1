import { motion } from 'framer-motion';

export const Sponsors = () => {
    return (
        <div className="font-display bg-asphalt text-white min-h-screen overflow-x-hidden selection:bg-primary selection:text-white pb-24">

            {/* Background Layers */}
            <div className="fixed inset-0 bg-carbon-fiber opacity-40 z-0 pointer-events-none"></div>
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-asphalt/80 to-asphalt z-0 pointer-events-none"></div>

            {/* F1 Background Watermark */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none overflow-hidden flex items-center justify-center w-full h-full">
                <span className="text-[40vw] font-black italic text-stroke-white opacity-10 leading-none tracking-tighter mix-blend-overlay">
                    F1
                </span>
            </div>

            {/* --- PAGE 1: COVER PAGE --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-32 pb-20 z-10">
                {/* Decorative F1 Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Top Logo Placeholder */}
                    <div className="mb-8 inline-flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full">
                        <span className="material-icons text-white/80">school</span>
                        <span className="font-mono text-sm tracking-widest uppercase text-white/80">NIT Patna Official Event</span>
                    </div>

                    {/* Main Title */}
                    {/* Main Title */}
                    <h1 className="w-full text-center mx-auto text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase mb-2 leading-none">
                        <span className="text-white block">BYTEVERSE</span>
                        <span className="text-stroke-white text-transparent block opacity-50">2026</span>
                    </h1>

                    {/* Subtitle */}
                    <div className="w-full text-center mx-auto text-xl md:text-3xl font-bold text-primary tracking-widest uppercase mb-8 leading-tight">
                        NIT Patna’s Premier Tech Hackathon
                    </div>

                    {/* Tagline */}
                    <p className="w-full text-center mx-auto text-lg md:text-xl text-gray-400 font-mono max-w-2xl mb-12">
                        Igniting Innovation. Empowering Builders.
                    </p>



                    {/* Date & Venue */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-t border-white/10 pt-12">
                        <div className="text-center">
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Date</div>
                            <div className="text-2xl font-bold text-white">February 14–16, 2026</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10"></div>
                        <div className="text-center">
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Venue</div>
                            <div className="text-2xl font-bold text-white">NIT Patna Campus</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- PAGE 2: ABOUT US --- */}
            <section className="relative py-24 z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-12 h-1 bg-primary"></span>
                            <span className="font-mono text-sm text-primary uppercase tracking-widest">About The Event</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-8 leading-none">
                            About <br /><span className="text-stroke-white text-transparent">ByteVerse</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            ByteVerse is a national-level, 36-hour hackathon hosted at NIT Patna. We provide a high-energy platform for the brightest student developers, designers, and creators from across India to collaborate and build technological solutions for real-world problems. It is more than a competition; it is a celebration of innovation and technical excellence.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: "500+", label: "Top-Tier Participants", color: "text-primary" },
                            { value: "50+", label: "Universities", color: "text-neon-cyan" },
                            { value: "36H", label: "Continuous Coding", color: "text-purple-500" },
                            { value: "₹10L+", label: "Total Prize Pool", color: "text-green-500" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <div className={`text-4xl md:text-5xl font-black italic ${stat.color} mb-2`}>{stat.value}</div>
                                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tracks */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold uppercase mb-8 text-center">Hackathon Tracks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "AI & ML", desc: "Artificial Intelligence & Machine Learning", icon: "psychology" },
                            { title: "Web3", desc: "Decentralized Tech & Blockchain", icon: "link" },
                            { title: "Open Innovation", desc: "Tech for Good & Social Impact", icon: "lightbulb" },
                        ].map((track, i) => (
                            <div key={i} className="group relative bg-carbon p-8 border border-white/10 rounded-xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-icons text-8xl">{track.icon}</span>
                                </div>
                                <div className="text-primary font-mono text-xs mb-4">TRACK 0{i + 1}</div>
                                <h4 className="text-2xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors text-white">{track.title}</h4>
                                <p className="text-gray-400 text-sm">{track.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PAGE 3: WHY SPONSOR? --- */}
            <section className="relative py-24 bg-black/30 z-10 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-6">
                            Why <span className="text-primary">Partner</span> With Us?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Partnering with ByteVerse offers unparalleled access to a highly curated pool of Gen-Z developers and tech innovators.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Recruit Top Talent", desc: "Gain direct access to the pre-screened resumes of elite student developers. Fast-track your hiring pipeline.", icon: "person_search" },
                            { title: "High-Velocity Branding", desc: "Showcase your brand to a hyper-targeted, tech-savvy audience through digital marketing and on-site banners.", icon: "campaign" },
                            { title: "Drive Product Adoption", desc: "Host a custom prize track to encourage hundreds of developers to build using your APIs or Cloud platforms.", icon: "rocket_launch" },
                            { title: "Community Leadership", desc: "Position your organization as a forward-thinking leader committed to fostering youth innovation.", icon: "diversity_3" },
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex gap-6 items-start p-8 bg-asphalt border border-white/10 rounded-2xl hover:border-primary/50 transition-colors"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                                    <span className="material-icons text-3xl text-primary">{benefit.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold uppercase mb-3 italic">{benefit.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PAGE 4: SPONSORSHIP TIERS --- */}
            <section className="relative py-24 z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-mono text-sm text-primary uppercase tracking-widest">Investment Opportunities</span>
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase mt-3">Partnership Packages</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* SILVER */}
                    <div className="flex flex-col border border-white/10 bg-carbon rounded-2xl p-8 relative top-8 h-full">
                        <div className="font-mono text-gray-500 text-sm tracking-widest mb-4">TIER 3</div>
                        <h3 className="text-4xl font-black italic text-gray-300 mb-2">SILVER</h3>
                        <div className="text-xl font-bold text-white/50 mb-8">[Insert Price]</div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm text-gray-300"><span className="material-icons text-green-500 text-sm">check_circle</span> Logo on website & T-shirts</li>
                            <li className="flex gap-3 text-sm text-gray-300"><span className="material-icons text-green-500 text-sm">check_circle</span> Social media shoutouts</li>
                            <li className="flex gap-3 text-sm text-gray-300"><span className="material-icons text-green-500 text-sm">check_circle</span> Swag distribution</li>
                        </ul>
                        <button className="w-full py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors uppercase font-bold text-sm tracking-widest">Select Tier</button>
                    </div>

                    {/* PLATINUM (Highlighted) */}
                    <div className="flex flex-col border-2 border-primary bg-gradient-to-b from-primary/10 to-carbon rounded-2xl p-8 transform md:-translate-y-4 shadow-[0_0_50px_rgba(255,30,0,0.15)] relative z-20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                        <div className="font-mono text-primary text-sm tracking-widest mb-4">TIER 1</div>
                        <h3 className="text-5xl font-black italic text-white mb-2">PLATINUM</h3>
                        <div className="text-2xl font-bold text-white mb-8">[Custom]</div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm text-white"><span className="material-icons text-primary text-sm">check_circle</span> <div><strong>Co-branded event title</strong> ("Powered by...")</div></li>
                            <li className="flex gap-3 text-sm text-white"><span className="material-icons text-primary text-sm">check_circle</span> Keynote speaking slot</li>
                            <li className="flex gap-3 text-sm text-white"><span className="material-icons text-primary text-sm">check_circle</span> Private recruitment booth</li>
                            <li className="flex gap-3 text-sm text-white"><span className="material-icons text-primary text-sm">check_circle</span> Early access to stats & resumes</li>
                            <li className="flex gap-3 text-sm text-white"><span className="material-icons text-primary text-sm">check_circle</span> Host custom prize track</li>
                            <li className="flex gap-3 text-sm text-white"><span className="material-icons text-primary text-sm">check_circle</span> Max logo placement</li>
                        </ul>
                        <button className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors uppercase font-black text-sm tracking-widest shadow-lg shadow-primary/20">Contact For Platinum</button>
                    </div>

                    {/* GOLD */}
                    <div className="flex flex-col border border-yellow-500/30 bg-carbon rounded-2xl p-8 relative top-8 h-full">
                        <div className="font-mono text-yellow-500 text-sm tracking-widest mb-4">TIER 2</div>
                        <h3 className="text-4xl font-black italic text-yellow-500 mb-2">GOLD</h3>
                        <div className="text-xl font-bold text-white mb-8">[Insert Price]</div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm text-gray-300"><span className="material-icons text-green-500 text-sm">check_circle</span> Dedicated stall space</li>
                            <li className="flex gap-3 text-sm text-gray-300"><span className="material-icons text-green-500 text-sm">check_circle</span> 30-min workshop/session</li>
                            <li className="flex gap-3 text-sm text-gray-300"><span className="material-icons text-green-500 text-sm">check_circle</span> Access to resumes (post-event)</li>
                            <li className="flex gap-3 text-sm text-gray-300"><span className="material-icons text-green-500 text-sm">check_circle</span> Premium logo placement</li>
                        </ul>
                        <button className="w-full py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors uppercase font-bold text-sm tracking-widest">Select Tier</button>
                    </div>
                </div>
            </section>

            {/* --- PAGE 5: PAST SPONSORS --- */}
            <section className="relative z-10 py-24 border-t border-white/5 bg-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-mono text-sm text-primary uppercase tracking-widest">Past Sponsors</span>
                        <h2 className="text-3xl md:text-5xl font-black italic uppercase mt-3">Trusted By Industry Leaders</h2>
                    </div>

                    <div className="space-y-20">
                        {[
                            {
                                category: "Web3 & Blockchain",
                                icon: "token",
                                color: "text-purple-500",
                                sponsors: [
                                    { name: "Polygon", domain: "polygon.technology", useSimpleIcon: true, slug: "polygon" },
                                    { name: "Solana", domain: "solana.com", useSimpleIcon: true, slug: "solana" },
                                    { name: "Tezos", domain: "tezos.com", useSimpleIcon: false, slug: "tezos" },
                                    { name: "Celo", domain: "celo.org", useSimpleIcon: false, slug: "celo" },
                                    { name: "Filecoin", domain: "filecoin.io", useSimpleIcon: false, slug: "filecoin" },
                                    { name: "Portis", domain: "portis.io", useSimpleIcon: false },
                                    { name: "Verbwire", domain: "verbwire.com", useSimpleIcon: false },
                                    { name: "GardaWorld", domain: "garda.com", useSimpleIcon: false }
                                ]
                            },
                            {
                                category: "Developer Tools & Infrastructure",
                                icon: "terminal",
                                color: "text-blue-500",
                                sponsors: [
                                    { name: "GitHub", domain: "github.com", useSimpleIcon: true, slug: "github", color: "white" },
                                    { name: "DigitalOcean", domain: "digitalocean.com", useSimpleIcon: true, slug: "digitalocean" },
                                    { name: "MongoDB", domain: "mongodb.com", useSimpleIcon: true, slug: "mongodb" },
                                    { name: "Postman", domain: "postman.com", useSimpleIcon: true, slug: "postman" },
                                    { name: "Replit", domain: "replit.com", useSimpleIcon: true, slug: "replit" },
                                    { name: "JetBrains", domain: "jetbrains.com", useSimpleIcon: true, slug: "jetbrains", color: "white" },
                                    { name: "Taskade", domain: "taskade.com", useSimpleIcon: false, slug: "taskade" },
                                    { name: "Echo3D", domain: "echo3d.com", useSimpleIcon: false },
                                    { name: "Voiceflow", domain: "voiceflow.com", useSimpleIcon: false },
                                    { name: "1Password", domain: "1password.com", useSimpleIcon: true, slug: "1password" },
                                    { name: "Axure", domain: "axure.com", useSimpleIcon: false, slug: "axure" },
                                    { name: "FOSS United", domain: "fossunited.org", useSimpleIcon: false },
                                    { name: ".xyz", domain: "gen.xyz", useSimpleIcon: false, slug: "xyz" }
                                ]
                            },
                            {
                                category: "Education & Career",
                                icon: "school",
                                color: "text-yellow-500",
                                sponsors: [
                                    { name: "GeeksforGeeks", domain: "geeksforgeeks.org", useSimpleIcon: true, slug: "geeksforgeeks" },
                                    { name: "PW Skills", domain: "pwskills.com", useSimpleIcon: false },
                                    { name: "Interview Buddy", domain: "interviewbuddy.net", useSimpleIcon: false },
                                    { name: "Interview Cake", domain: "interviewcake.com", useSimpleIcon: false, slug: "interviewcake" },
                                    { name: "Teachnook", domain: "teachnook.com", useSimpleIcon: false },
                                    { name: "Egghead.io", domain: "egghead.io", useSimpleIcon: true, slug: "egghead" },
                                    { name: "MyWays.ai", domain: "myways.ai", useSimpleIcon: false },
                                    { name: "UAceIt", domain: "uaceit.com", useSimpleIcon: false }
                                ]
                            },
                            {
                                category: "Design, Media & Others",
                                icon: "brush",
                                color: "text-pink-500",
                                sponsors: [
                                    { name: "Sketch", domain: "sketch.com", useSimpleIcon: true, slug: "sketch" },
                                    { name: "Red Bull", domain: "redbull.com", useSimpleIcon: true, slug: "redbull" },
                                    { name: "Wolfram", domain: "wolfram.com", useSimpleIcon: true, slug: "wolfram" },
                                    { name: "Rosenfeld", domain: "rosenfeldmedia.com", useSimpleIcon: false },
                                    { name: "Devfolio", domain: "devfolio.co", useSimpleIcon: false, slug: "devfolio" },
                                    { name: "Give My Certificate", domain: "givemycertificate.com", useSimpleIcon: false },
                                    { name: "Clerky", domain: "clerky.com", useSimpleIcon: false, slug: "clerky" },
                                    { name: "Picxele", domain: "picxele.com", useSimpleIcon: false },
                                    { name: "Bulkinza", domain: "bulkinza.com", useSimpleIcon: false }
                                ]
                            }
                        ].map((group, i) => (
                            <div key={i} className="relative">
                                <div className="flex items-center justify-center gap-3 mb-10">
                                    <span className={`material-icons text-3xl ${group.color}`}>{group.icon}</span>
                                    <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white">{group.category}</h3>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {group.sponsors.map((sponsor) => (
                                        <div key={sponsor.name} className="group relative bg-carbon border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-5 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 min-h-[160px]">
                                            <img
                                                src={sponsor.useSimpleIcon && sponsor.slug
                                                    ? `https://cdn.simpleicons.org/${sponsor.slug}${sponsor.color ? '/' + sponsor.color : ''}`
                                                    : `https://img.logo.dev/${sponsor.domain}?token=pk_VZJykc4JQu6v2ZeJRBNNtA`}
                                                alt={sponsor.name}
                                                className="w-12 h-12 object-contain transition-all duration-300"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />

                                            {/* Fallback for missing slugs or error loading image */}
                                            <div className="hidden w-12 h-12 rounded-full bg-white/5 items-center justify-center mb-2 group-hover:bg-white/10 transition-colors">
                                                <span className={`font-black text-xl uppercase ${group.color}`}>{sponsor.name.charAt(0)}</span>
                                            </div>

                                            <div className="text-xs font-bold text-center text-gray-400 group-hover:text-white uppercase tracking-widest leading-relaxed">
                                                {sponsor.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 max-w-3xl mx-auto bg-black/40 p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <p className="text-lg italic text-gray-300 mb-4 relative z-10">"ByteVerse is not just an event; it's a launchpad. The energy and quality of projects built by the students here are truly world-class."</p>
                        <div className="text-primary font-bold uppercase text-sm tracking-widest relative z-10">— Previous Sponsor / Judge</div>
                    </div>
                </div>
            </section>

            {/* --- PAGE 6: CONTACT US --- */}
            <section className="py-32 relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-tr from-carbon via-gray-900 to-carbon border border-white/10 p-8 md:p-16 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

                    <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4 text-white">Let's Build The Future, Together.</h2>
                    <p className="text-lg text-gray-400 mb-12">Secure your partnership slot today. We also offer customizable packages tailored to your goals.</p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        {/* QR Placeholder */}
                        <div className="bg-white p-4 rounded-xl transform rotate-3 shadow-2xl">
                            <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
                                <span className="text-gray-500 font-mono text-xs text-center">SCAN TO<br />EMAIL US</span>
                            </div>
                        </div>

                        <div className="text-left space-y-4">
                            <div>
                                <div className="text-xs text-primary uppercase tracking-widest font-bold">Contact Person</div>
                                <div className="text-xl font-bold text-white">Gaurav | Lead Organizer</div>
                            </div>
                            <div>
                                <div className="text-xs text-primary uppercase tracking-widest font-bold">Phone</div>
                                <div className="text-xl text-gray-300">+91 9876543210</div>
                            </div>
                            <div>
                                <div className="text-xs text-primary uppercase tracking-widest font-bold">Email</div>
                                <a href="mailto:sponsors@byteverse.nitp.ac.in" className="text-xl text-white hover:text-primary transition-colors underline decoration-white/30 underline-offset-4">sponsors@byteverse.nitp.ac.in</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-gray-600 text-sm font-mono uppercase tracking-widest">
                    © 2026 National Institute of Technology, Patna. All Rights Reserved.
                </div>
            </section>
        </div>
    );
};
