import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop", category: "Action", title: "Lights Out" },
    { id: 2, src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop", category: "Behind the Scenes", title: "Garage Focus" },
    { id: 3, src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1000&auto=format&fit=crop", category: "Podium", title: "Victory Lane" },
    { id: 4, src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop", category: "Action", title: "Apex Speed" },
    { id: 5, src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop", category: "Detail", title: "Carbon Fiber" },
    { id: 6, src: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop", category: "Action", title: "Night Race" },
];

export const Gallery = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Action", "Behind the Scenes", "Podium", "Detail"];

    // Safety check for filtering
    const filteredImages = filter === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <section className="min-h-screen bg-asphalt text-white py-24 font-display overflow-hidden relative">

            {/* Background Texture */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-white/10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-icons text-f1-red text-sm animate-pulse">videocam</span>
                            <span className="font-mono text-xs text-f1-red uppercase tracking-widest">Media Centre</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            Race <span className="text-stroke-white text-transparent">Highlights</span>
                        </h1>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${filter === cat
                                    ? 'bg-white text-black'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    <AnimatePresence>
                        {filteredImages.map((image, index) => (
                            <motion.div
                                layoutId={image.id.toString()} // Ensure ID is string for layoutId
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedId(image.id as any)}
                                className={`relative cursor-pointer group overflow-hidden rounded-xl border border-white/10 hover:border-f1-red/50 transition-colors ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="block text-[10px] font-mono text-f1-red uppercase tracking-widest mb-1">{image.category}</span>
                                    <h3 className="text-2xl font-bold uppercase italic text-white">{image.title}</h3>
                                </div>

                                {/* Icon Overlay */}
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
                                            <img src={img.src} alt={img.title} className="w-full h-full object-contain" />
                                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
                                                <h2 className="text-4xl font-black italic uppercase text-white mb-2">{img.title}</h2>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-xs font-mono text-f1-red uppercase tracking-widest border border-f1-red px-2 py-0.5 rounded">{img.category}</span>
                                                    <span className="text-xs font-mono text-gray-400">IMG_ID: {img.id} // RAW_CAPTURE</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-f1-red transition-colors"
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
