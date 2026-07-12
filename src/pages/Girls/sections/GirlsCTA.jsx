import AnimatedSection from "../../../components/common/AnimatedSection";

export default function GirlsCTA() {
    return (
        <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-[#2c2026] via-[#7c5569] to-[#d5b48c] px-6 py-14 text-white shadow-[0_24px_70px_rgba(30,20,25,0.22)] sm:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                        Ready for your next beauty appointment?
                    </p>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        Book your beauty, makeup, or bridal service today
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                        Beautiful pages are nice. Beautiful real-world results are the whole
                        point. Let’s help people book both.
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