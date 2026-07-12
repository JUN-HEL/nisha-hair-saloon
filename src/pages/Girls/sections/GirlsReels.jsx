import AnimatedSection from "../../../components/common/AnimatedSection";
import { Play, ArrowUpRight } from "lucide-react";

const reels = [
    {
        title: "Soft Glam Makeup Look",
        category: "Makeup",
        image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/nishabeauty_parlour__1/",
    },
    {
        title: "Elegant Hair Styling",
        category: "Hair Styling",
        image:
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/nishabeauty_parlour__1/",
    },
    {
        title: "Beauty Glow Finish",
        category: "Beauty Care",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/nishabeauty_parlour__1/",
    },
    {
        title: "Bridal Style Preview",
        category: "Bridal",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.instagram.com/nishabeauty_parlour__1/",
    },
];

export default function GirlsReels() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/50 bg-white/55 p-8 shadow-[0_18px_50px_rgba(70,40,60,0.08)] backdrop-blur-xl sm:p-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                        Beauty, Makeup & Styling Reels
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Real transformations in motion
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        This is the trust-building section where visitors see real beauty,
                        styling, and bridal work before they book.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {reels.map((reel) => (
                        <a
                            key={reel.title}
                            href={reel.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-[0_12px_36px_rgba(40,20,30,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(124,85,105,0.14)]"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={reel.image}
                                    alt={reel.title}
                                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-900/10 to-transparent" />

                                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-900 shadow-sm">
                                    <Play size={14} className="fill-current" />
                                    Reel
                                </div>

                                <div className="absolute bottom-4 left-4 rounded-full bg-[#7c5569]/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                    {reel.category}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">
                                    {reel.title}
                                </h3>

                                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7c5569]">
                                    View on Instagram
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}