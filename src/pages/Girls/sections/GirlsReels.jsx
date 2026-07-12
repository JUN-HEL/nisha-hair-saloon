import AnimatedSection from "../../../components/common/AnimatedSection";
import { Play, ArrowUpRight } from "lucide-react";
import { GirlsReels as Reels } from "../../../data/reels";

export default function GirlsReels() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/50 bg-white/55 p-6 shadow-[0_18px_50px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-10">
                {/* Header */}
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                        Beauty, Makeup & Styling Reels
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Real Transformations in Motion
                    </h2>

                    <p className="mt-4 text-zinc-600">
                        Watch our latest bridal makeup, hair styling, skincare,
                        and beauty transformation reels from Nisha Hair Salon,
                        Gumkhal, Pauri Garhwal.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {Reels.map((reel) => (
                        <a
                            key={reel.id}
                            href={reel.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group overflow-hidden rounded-[1.5rem] border border-white/60 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={reel.image}
                                    alt={reel.title}
                                    loading="lazy"
                                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-zinc-900">
                                    <Play
                                        size={12}
                                        className="fill-current"
                                    />
                                    Reel
                                </div>

                                <div className="absolute bottom-3 left-3 rounded-full bg-[#7c5569] px-2.5 py-1 text-xs font-medium text-white">
                                    {reel.category}
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="line-clamp-2 text-sm font-semibold text-zinc-900 sm:text-lg">
                                    {reel.title}
                                </h3>

                                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#7c5569] sm:text-sm">
                                    View Reel
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}