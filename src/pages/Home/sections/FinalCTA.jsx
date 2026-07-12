import { Sparkles } from "lucide-react";
import AnimatedSection from "../../../components/common/AnimatedSection";

export default function FinalCTA() {
    return (
        <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-zinc-950 via-rose-950 to-amber-900 px-6 py-14 text-white shadow-[0_24px_70px_rgba(30,20,25,0.22)] sm:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-amber-200">
                        <Sparkles size={15} />
                        Ready for your next look?
                    </p>

                    <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                        Book your haircut, beauty service, or makeup appointment today
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-zinc-200 sm:text-base">
                        Fast booking, aesthetic presentation, local trust — the full salon
                        growth combo instead of dry brochure energy.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/917310944581"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:scale-[1.03]"
                        >
                            Book on WhatsApp
                        </a>

                        <a
                            href="tel:+917310944581"
                            className="rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}