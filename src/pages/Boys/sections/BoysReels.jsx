import AnimatedSection from "../../../components/common/AnimatedSection";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BoysReels as reels } from "../../../data/reels";
import ReelCard from "./reelCard";

export default function BoysReels() {
    return (
        <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
            <section
                aria-labelledby="boys-reels-heading"
                className="
                    mx-auto
                    max-w-7xl
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-[#080808]
                    p-8
                    shadow-[0_20px_60px_rgba(0,0,0,.6)]
                    sm:p-10
                "
            >
                {/* Header */}
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-[#d4af37]
                            "
                        >
                            <Sparkles size={15} />
                            Barber Reels
                        </div>

                        <h2
                            id="boys-reels-heading"
                            className="
                                mt-5
                                text-3xl
                                font-black
                                text-white
                                sm:text-5xl
                            "
                        >
                            Men's Haircuts & Grooming Gallery
                            <br />

                            <span
                                className="
                                    bg-gradient-to-r
                                    from-[#d4af37]
                                    via-[#f5d76e]
                                    to-white
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Real transformations. Real confidence.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                            Browse our latest men's haircut, beard styling,
                            fade, hair color, and grooming transformations.
                            Every reel showcases professional barber services
                            delivered with precision and style.
                        </p>
                    </div>

                    {/* Instagram Button */}
                    <a
                        href="https://www.instagram.com/the_styling_nawed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View all men's grooming reels on Instagram"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-[#d4af37]
                            px-6
                            py-3
                            text-sm
                            font-bold
                            text-black
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-[#f5d76e]
                        "
                    >
                        View All Reels
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Reel Gallery */}
                <div
                    className="
                        mt-12
                        grid
                        grid-cols-2
                        gap-5
                        lg:grid-cols-4
                    "
                >
                    {reels.map((reel) => (
                        <ReelCard
                            key={reel.id}
                            reel={reel}
                        />
                    ))}
                </div>
            </section>
        </AnimatedSection>
    );
}