
import AnimatedSection from "../../../components/common/AnimatedSection";

export default function BoysCTA() {
    return (
        <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-[#1a1418] via-[#5c3d4c] to-[#d4af37] px-6 py-14 text-white shadow-[0_24px_70px_rgba(30,20,25,0.35)] sm:px-10">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                        Premium Grooming Experience
                    </p>


                    <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                        Your next look
                        <br />
                        starts here.
                    </h2>


                    <p className="mt-5 text-sm leading-7 text-white/85 sm:text-lg">
                        From sharp fades to perfectly styled beards,
                        our barbers create a look that matches your personality
                        and keeps you confident every day.
                    </p>



                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="
                            rounded-full
                            bg-white
                            px-7
                            py-3
                            font-bold
                            text-zinc-900
                            transition
                            hover:scale-105
                            "
                        >
                            Book Your Appointment
                        </a>



                        <a
                            href="tel:+919999999999"
                            className="
                            rounded-full
                            border
                            border-white/30
                            bg-white/10
                            px-7
                            py-3
                            font-bold
                            text-white
                            transition
                            hover:bg-white/20"

                        >
                            Call Our Saloon
                        </a>

                    </div>


                    <p className="mt-6 text-xs text-white/70 sm:text-sm">
                        ✨ Fresh cuts • Premium styling • Expert barbers
                    </p>

                </div>

            </div>

        </AnimatedSection>
    );
}

