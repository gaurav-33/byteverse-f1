import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    { id: 1, src: "/img1.jpg" },
    { id: 2, src: "/img2.jpg" },
    { id: 3, src: "/img3.jpg" },
    { id: 4, src: "/img4.jpg" },
    { id: 5, src: "/img5.jpg" },
    { id: 6, src: "/img6.jpg" },
    { id: 7, src: "/img7.jpg" },
    { id: 8, src: "/img8.jpg" },
    { id: 9, src: "/img9.jpg" },
    { id: 10, src: "/img10.jpg" },
    { id: 11, src: "/img11.jpg" },
    { id: 12, src: "/img12.jpg" },
];

export const Gallery = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Display all images (no categories)
    const filteredImages = galleryImages;

    // For desktop layout we'll make exactly 3 rows (for 12 images)
    // and make the first image of each row span two columns.
    // This will be achieved via index-based responsive classes below.

    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const setSpan = (id: number) => {
        const container = containerRef.current;
        const item = itemRefs.current[id];
        if (!container || !item) return;
        const img = item.querySelector('img') as HTMLImageElement | null;
        if (!img) return;

        const computed = window.getComputedStyle(container);
        const rowHeight = parseFloat(computed.getPropertyValue('grid-auto-rows')) || 8;
        const rowGap = parseFloat(computed.getPropertyValue('gap')) || 24;
        const height = img.getBoundingClientRect().height;
        const span = Math.ceil((height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${span}`;
    };

    useEffect(() => {
        const handleResize = () => {
            Object.keys(itemRefs.current).forEach(k => setSpan(Number(k)));
        };
        window.addEventListener('resize', handleResize);
        // initial pass in case images already loaded
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="min-h-screen bg-asphalt text-white py-24 font-display overflow-hidden relative">

            {/* Background Texture */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 pb-8 border-b border-white/10 text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="material-icons text-f1-red text-sm animate-pulse">videocam</span>
                            <span className="font-mono text-xs text-f1-red uppercase tracking-widest">Media Centre</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            2k24 <span className="text-stroke-white text-transparent">Highlights</span>
                        </h1>
                    </div>

                    {/* No categories — displaying all images */}
                </div>

                {/* Masonry Grid: desktop uses 4 columns so 12 items = 3 rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[260px]" ref={containerRef}>
                    <AnimatePresence>
                        {filteredImages.map((image, index) => (
                            <motion.div
                                ref={el => { itemRefs.current[image.id] = el; }}
                                layoutId={image.id.toString()} // Ensure ID is string for layoutId
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedId(image.id as any)}
                                className={`relative cursor-pointer group overflow-hidden rounded-xl border border-white/10 hover:border-primary/50 transition-colors ${index % 3 === 0 ? 'md:col-span-2' : ''} ${index % 4 === 0 ? 'lg:col-span-2' : ''}`}
                            >
                                <img
                                    src={image.src}
                                    onLoad={() => setSpan(image.id)}
                                    alt={`Gallery image ${image.id}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>

                                {/* Icon Overlay (no on-image text) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                                    <span className="material-icons text-white">open_in_full</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12 cursor-pointer"
                        >
                            <motion.div
                                layoutId={selectedId.toString()} // Match Layout ID
                                className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            >
                                {(() => {
                                    const img = galleryImages.find(i => i.id === selectedId);
                                    if (!img) return null;
                                    return (
                                        <>
                                            <img src={img.src} alt={`Gallery image ${img.id}`} className="w-full h-full object-contain" />
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                                            >
                                                <span className="material-icons">close</span>
                                            </button>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
        </section>
    );
};
