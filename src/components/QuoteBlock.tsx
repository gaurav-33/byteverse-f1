export const QuoteBlock = ({
    quote = "Byteverse is where ideas meet build — ship something you believe in and learn along the way.",
    author = "Hackslash Team",
    sub = "Developer's Club, NIT Patna" }: { quote: string; author: string; sub: string }) => (
    <div className="relative p-10 md:p-12 border border-white/10 rounded-2xl text-center overflow-hidden group hover:border-primary/30 transition-colors duration-500">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-xl opacity-40"></div>

        <span className="material-icons text-6xl text-white/5 absolute top-6 left-6">format_quote</span>

        <blockquote className="relative z-10 text-xl md:text-2xl font-bold italic text-white/90 mb-6 leading-relaxed">
            &ldquo;{quote}&rdquo;
        </blockquote>
        <cite className="not-italic flex flex-col items-center gap-1">
            <span className="font-bold text-primary tracking-widest uppercase text-sm">{author}</span>
            <span className="text-xs font-mono text-gray-500">{sub}</span>
        </cite>
    </div>
);
