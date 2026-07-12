import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import AnimatedSection from "../../../components/common/AnimatedSection";

const items = [
    {
        id: 1,
        title: "Textured Fade Cut",
        category: "Boys Haircuts",
        image:
            "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Sharp Beard Styling",
        category: "Beard Styling",
        image:
            "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Modern Hair Color",
        category: "Hair Color",
        image:
            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Soft Glam Finish",
        category: "Makeup",
        image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Elegant Hair Styling",
        category: "Beauty Care",
        image:
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "Bridal Look Preview",
        category: "Bridal",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },
];

const filters = [
    "All",
    "Boys Haircuts",
    "Beard Styling",
    "Hair Color",
    "Beauty Care",
    "Makeup",
    "Bridal",
];

export default function GalleryGrid() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = useMemo(() => {
        if (activeFilter === "All") return items;

        return items.filter(
            (item) => item.category === activeFilter
        );
    }, [activeFilter]);

    return (
        <>
            <AnimatedSection className="px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/50 bg-white/55 p-5 shadow-[0_18px_50px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-8">

                    <div className="flex flex-wrap gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeFilter === filter
                                    ? "bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] text-white"
                                    : "border border-white/60 bg-white/80 text-zinc-700"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>


                    {/* Gallery Grid */}
                    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
                        {filteredItems.map((item) => (
                            <motion.button
                                key={item.id}
                                layout
                                onClick={() => setSelectedItem(item)}
                                className="group overflow-hidden rounded-[1.5rem] border border-white/60 bg-white text-left shadow-[0_12px_36px_rgba(40,20,30,0.08)] transition hover:-translate-y-1"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />

                                    <div className="absolute bottom-3 left-3 rounded-full bg-[#7c5569]/90 px-2 py-1 text-[10px] text-white">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="p-3 sm:p-5">
                                    <h3 className="text-sm font-semibold text-zinc-900 sm:text-lg">
                                        {item.title}
                                    </h3>

                                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#7c5569] sm:text-sm">
                                        View
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                </div>
            </AnimatedSection>


            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.92 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.92 }}
                            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute right-4 top-4 z-10 rounded-full bg-white p-2"
                            >
                                <X size={20} />
                            </button>

                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="max-h-[70vh] w-full object-cover"
                            />

                            <div className="p-6">
                                <p className="text-sm font-semibold text-[#7c5569]">
                                    {selectedItem.category}
                                </p>

                                <h3 className="mt-2 text-2xl font-bold">
                                    {selectedItem.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}