import { Link } from "react-router-dom";
import { Crown, Sparkles, ArrowRight } from "lucide-react";
import AnimatedSection from "../../../components/common/AnimatedSection";

const bridalImages = [
    "/images/gallery/girls/bridal-cropped.png",
    "/images/gallery/girls/bridal-makeup-b.webp",
    "/images/gallery/girls/bridal-makeup-4.webp",
];


export default function BridalHighlight() {

    return (
        <section
            id="bridal-services"
            aria-labelledby="bridal-services-heading"
            className="px-4 py-12 sm:px-6 lg:px-8"
        >

            <AnimatedSection>

                <div
                    className="
                    mx-auto
                    grid
                    max-w-7xl
                    items-center
                    gap-10
                    overflow-hidden
                    rounded-[2rem]
                    bg-gradient-to-r
                    from-[#2c2026]
                    via-[#7c5569]
                    to-[#d5b48c]
                    p-8
                    text-white
                    shadow-[0_24px_70px_rgba(30,20,25,0.22)]
                    sm:p-10
                    lg:grid-cols-2
                    "
                >


                    {/* CONTENT */}

                    <div>


                        <div
                            className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white/10
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-white/90
                            "
                        >

                            <Crown size={16} />

                            Bridal & Occasion Beauty Services

                        </div>



                        <h2
                            id="bridal-services-heading"
                            className="
                            mt-5
                            text-3xl
                            font-bold
                            leading-tight
                            sm:text-4xl
                            "
                        >

                            Bridal Makeup & Party Makeup at
                            Nisha Hair Salon,
                            Gumkhal, Pauri Garhwal

                        </h2>



                        <p
                            className="
                            mt-5
                            max-w-xl
                            text-base
                            leading-7
                            text-white/90
                            "
                        >

                            Celebrate your special moments with professional
                            bridal makeup and hairstyling from
                            <strong> Nisha Hair Salon</strong>.
                            We create elegant bridal looks, HD makeup,
                            engagement styles, reception makeup and
                            customized wedding beauty transformations.

                        </p>





                        <div className="mt-8 flex flex-wrap gap-4">


                            <a
                                href="https://wa.me/917310944581"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                inline-flex
                                rounded-full
                                bg-white
                                px-6
                                py-3
                                font-semibold
                                text-zinc-900
                                transition
                                hover:scale-105
                                "
                            >

                                Book Bridal Appointment

                            </a>



                            <Link
                                to="/gallery?category=Bridal%20Makeup"
                                className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/40
                                bg-white/10
                                px-6
                                py-3
                                font-semibold
                                text-white
                                backdrop-blur
                                transition
                                hover:bg-white/20
                                "
                            >

                                View All Bridal Makeup Work

                                <ArrowRight size={17} />

                            </Link>


                        </div>


                    </div>







                    {/* IMAGE SECTION */}

                    <div className="space-y-5">


                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-4
                            "
                        >

                            {bridalImages.map((image, index) => (

                                <div
                                    key={image}
                                    className={`
                                        overflow-hidden
                                        rounded-[1.5rem]
                                        shadow-lg
                                        ${index === 0
                                            ? "col-span-2"
                                            : ""
                                        }
                                    `}
                                >

                                    <img
                                        src={image}
                                        alt={`Bridal makeup look ${index + 1
                                            } at Nisha Hair Salon`}
                                        loading="lazy"
                                        width="700"
                                        height="800"
                                        className="
                                            h-52
                                            w-full
                                            object-cover
                                            transition
                                            duration-500
                                            hover:scale-105
                                            sm:h-64
                                        "
                                    />

                                </div>

                            ))}

                        </div>





                        <div className="grid gap-4 sm:grid-cols-2">


                            <article
                                className="
                                    rounded-2xl
                                    bg-white/10
                                    p-5
                                    backdrop-blur
                                "
                            >

                                <Sparkles
                                    size={20}
                                    className="text-amber-200"
                                />

                                <h3 className="mt-3 text-lg font-semibold">
                                    Party Makeup
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/80">
                                    Glamorous makeup for birthdays,
                                    engagements, receptions, festivals,
                                    anniversaries and special occasions.
                                </p>

                            </article>




                            <article
                                className="
                                    rounded-2xl
                                    bg-white/10
                                    p-5
                                    backdrop-blur
                                "
                            >

                                <Sparkles
                                    size={20}
                                    className="text-amber-200"
                                />

                                <h3 className="mt-3 text-lg font-semibold">
                                    Bridal Packages
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/80">
                                    HD bridal makeup, hairstyling,
                                    draping and customized wedding
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