import AnimatedSection from "../../../components/common/AnimatedSection";
import { Crown, Sparkles } from "lucide-react";

export default function BridalHighlight() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#2c2026] via-[#7c5569] to-[#d5b48c] p-8 text-white shadow-[0_24px_70px_rgba(30,20,25,0.22)] lg:grid-cols-[1fr_1.1fr] sm:p-10">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                        <Crown size={16} />
                        Bridal & Occasion Special
                    </div>

                    <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                        A dedicated highlight for high-value bookings
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                        Bridal and special-event styling deserves its own moment on the page.
                        It is one of the most valuable services and should feel elevated,
                        visible, and beautiful.
                    </p>

                    <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:scale-[1.03]"
                    >
                        Ask About Bridal Booking
                    </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
                        <Sparkles size={20} className="text-amber-200" />
                        <h3 className="mt-4 text-xl font-semibold">Party Makeup</h3>
                        <p className="mt-3 text-sm leading-7 text-white/80">
                            Soft glam, festive looks, and elegant event-ready makeup styling.
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
                        <Sparkles size={20} className="text-amber-200" />
                        <h3 className="mt-4 text-xl font-semibold">Bridal Looks</h3>
                        <p className="mt-3 text-sm leading-7 text-white/80">
                            Beauty and hair styling tailored for wedding functions and special days.
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}