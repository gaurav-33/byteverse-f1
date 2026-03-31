import { motion } from 'framer-motion';

export const Resources = () => {
    const resources = [
        {
            title: "Rulebook",
            sub: "Technical Regs",
            url: "https://drive.google.com/file/d/1dgOf2QOxlISb9TkfMV_Gps0bq2GxM5Xd/view",
            icon: "menu_book",
            accent: "group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
            textHover: "group-hover:text-blue-400",
            iconColor: "text-blue-500"
        },
        {
            title: "Idea PPT",
            sub: "Telemetry Deck",
            url: "https://drive.google.com/drive/folders/1i_p3Av-__IVAnjXvC5ZFoUTQmc53lKGh?usp=sharing",
            icon: "co_present",
            accent: "group-hover:border-yellow-500 group-hover:bg-yellow-500/10 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]",
            textHover: "group-hover:text-yellow-400",
            iconColor: "text-yellow-500"
        },
        {
            title: "Discord",
            sub: "Discord Comms",
            url: "https://discord.com/invite/2ZfsdkTKh",
            icon: "discord",
            accent: "group-hover:border-[#5865F2] group-hover:bg-[#5865F2]/10 group-hover:shadow-[0_0_20px_rgba(88,101,242,0.15)]",
            textHover: "group-hover:text-[#5865F2]",
            iconColor: "text-[#5865F2]"
        },
        {
            title: "Register on Unstop",
            sub: "Unstop Event",
            url: "https://unstop.com/hackathons/byteverse-80-hackathon-national-institute-of-technology-nit-patna-1658744",
            icon: "local_activity",
            accent: "group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(255,30,0,0.15)]",
            textHover: "group-hover:text-primary",
            iconColor: "text-primary"
        }
    ];

    return (
        <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-12 my-12">
            {/* Header Block */}
            <div className="mb-10 flex items-center gap-4">
                <div className="w-1.5 h-10 bg-primary skew-x-[-15deg]"></div>
                <div>
                    <div className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase mb-0.5">Control Tower</div>
                    <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-wider text-white">
                        Race <span className="text-stroke-white text-transparent">Data Links</span>
                    </h2>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4 hidden md:block"></div>
            </div>

            {/* Grid of Data Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {resources.map((res, i) => (
                    <motion.a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className={`group relative bg-[#0a0a0c] border border-white/10 p-6 flex flex-col items-center text-center transition-all duration-300 ${res.accent} [clip-path:polygon(15px_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%,0_15px)]`}
                    >
                        {/* Background scanlines */}
                        <div className="absolute inset-0 scanlines opacity-20 group-hover:opacity-40 mix-blend-overlay pointer-events-none transition-opacity"></div>

                        {/* Status Blinker */}
                        <div className="absolute top-3 left-4 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse bg-current ${res.iconColor}`}></span>
                            <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">LINK 0{i + 1}</span>
                        </div>

                        {/* Icon */}
                        <div className={`mt-6 mb-4 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${res.iconColor} shadow-inner backdrop-blur-sm`}>
                            <span className="material-icons text-3xl">{res.icon}</span>
                        </div>

                        {/* Text Content */}
                        <h3 className={`font-black uppercase italic tracking-wide text-lg text-white mb-1 transition-colors ${res.textHover}`}>{res.title}</h3>
                        <p className="font-mono text-[10px] text-gray-500 tracking-[0.2em] uppercase">{res.sub}</p>

                        {/* Bottom Decoration line */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-current transition-colors"></div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
