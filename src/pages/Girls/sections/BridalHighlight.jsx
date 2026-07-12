import AnimatedSection from "../../../components/common/AnimatedSection";
import { Crown, Sparkles } from "lucide-react";

export default function BridalHighlight() {
    return (
        <section
            id="bridal-services"
            aria-labelledby="bridal-services-heading"
            className="px-4 py-12 sm:px-6 lg:px-8"
        >
            <AnimatedSection>
                <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#2c2026] via-[#7c5569] to-[#d5b48c] p-8 text-white shadow-[0_24px_70px_rgba(30,20,25,0.22)] sm:p-10 lg:grid-cols-2">

                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                            <Crown size={16} aria-hidden="true" />
                            Bridal & Occasion Beauty Services
                        </div>

                        <h2
                            id="bridal-services-heading"
                            className="mt-5 text-3xl font-bold leading-tight sm:text-4xl"
                        >
                            Bridal Makeup & Party Makeup at Nisha Hair Salon,
                            Gumkhal, Pauri Garhwal
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-white/90">
                            Celebrate your special moments with professional bridal
                            makeup and hairstyling from <strong>Nisha Hair Salon</strong>.
                            We specialize in HD bridal makeup, party makeup,
                            engagement makeup, reception looks, bridal hairstyles,
                            and complete wedding beauty services tailored to your
                            style, outfit, and personality.
                        </p>

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Book a bridal makeup appointment at Nisha Hair Salon"
                            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:scale-105"
                        >
                            Book Your Bridal Appointment
                        </a>
                    </div>

                    {/* Image + Services */}
                    <div className="space-y-5">

                        <div className="overflow-hidden rounded-[2rem] shadow-lg">
                            <img
                                src="/images/bridal-makeup.webp"
                                alt="Bride with professional bridal makeup at Nisha Hair Salon, Gumkhal, Pauri Garhwal"
                                loading="lazy"
                                width="700"
                                height="800"
                                className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                                <Sparkles
                                    size={20}
                                    className="text-amber-200"
                                    aria-hidden="true"
                                />

                                <h3 className="mt-3 text-lg font-semibold">
                                    Party Makeup
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/80">
                                    Glamorous makeup for birthdays,
                                    engagements, receptions, festivals,
                                    anniversaries, and special events.
                                </p>
                            </article>

                            <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                                <Sparkles
                                    size={20}
                                    className="text-amber-200"
                                    aria-hidden="true"
                                />

                                <h3 className="mt-3 text-lg font-semibold">
                                    Bridal Packages
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/80">
                                    HD bridal makeup, bridal hairstyling,
                                    saree draping, and personalized wedding
                                    beauty services for your big day.
                                </p>
                            </article>

                        </div>
                    </div>

                </div>
            </AnimatedSection>
        </section>
    );
}