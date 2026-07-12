import { motion } from "framer-motion";
import { Images, Sparkles, MapPin } from "lucide-react";

export default function GalleryHero() {
    return (
        <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8">
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
            <div className="hero-blob hero-blob-3" />

            <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-white/50 bg-white/45 p-6 shadow-[0_20px_60px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-8 lg:grid-cols-2 lg:p-12">
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[#7c5569] shadow-sm">
                        <Sparkles size={15} />
                        Portfolio & Transformations
                    </div>

                    <p className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-600">
                        <MapPin size={16} className="text-[#d5b48c]" />
                        Gumkhal, Pauri Garhwal
                    </p>

                    <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                        Looks We’re <br />
                        <span className="gradient-text">Proud to Show.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
                        Explore haircuts, beard styling, beauty work, makeup looks, and
                        bridal-ready transformations across our boys salon and girls parlour services.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative"
                >
                    <div className="glass-card rounded-[2rem] p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="overflow-hidden rounded-[1.5rem]">
                                <img
                                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"
                                    alt="Salon work 1"
                                    className="h-48 w-full object-cover"
                                />
                            </div>

                            <div className="overflow-hidden rounded-[1.5rem]">
                                <img
                                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop"
                                    alt="Salon work 2"
                                    className="h-48 w-full object-cover"
                                />
                            </div>

                            <div className="col-span-2 rounded-[1.5rem] bg-gradient-to-r from-[#2c2026] via-[#7c5569] to-[#d5b48c] p-6 text-white">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                                        <Images size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold">Styled for trust</p>
                                        <p className="text-sm text-white/80">
                                            Real visuals help customers book faster
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}