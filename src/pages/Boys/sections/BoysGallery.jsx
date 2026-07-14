import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles } from "lucide-react";
import { BoysServices } from "../../../data/Services";


export default function BoysGallery() {


    const galleryImages = BoysServices
        .filter((service) => service.image)
        .slice(0, 4);



    return (

        <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">


            <section

                aria-label="Men's haircut style gallery"

                className="
                    mx-auto
                    max-w-7xl
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-[#080808]
                    via-[#171214]
                    to-[#2b2025]
                    p-6
                    shadow-[0_20px_70px_rgba(0,0,0,.55)]
                    sm:p-10
                    lg:p-12
                "

            >




                {/* HEADER */}

                <div className="max-w-2xl">


                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#d4af37]/30
                            bg-white/5
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-[#d4af37]
                        "
                    >

                        <Sparkles size={15} />

                        Men's Style Gallery

                    </div>




                    <h2
                        className="
                            mt-5
                            text-3xl
                            font-black
                            text-white
                            sm:text-5xl
                        "
                    >

                        Sharp Cuts.
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
                            Modern Grooming.
                        </span>

                    </h2>




                    <p
                        className="
                            mt-4
                            leading-7
                            text-white/60
                        "
                    >

                        Discover premium men's haircuts,
                        beard styling, fades and modern
                        grooming transformations crafted
                        by professional stylists.

                    </p>


                </div>






                {/* GALLERY */}


                <div
                    className="
                        mt-10
                        grid
                        grid-cols-2
                        gap-5
                        md:grid-cols-4
                        md:auto-rows-[230px]
                    "
                >



                    {galleryImages.map((service, index) => (


                        <article

                            key={service.id}

                            className={`

                                group
                                relative
                                overflow-hidden
                                rounded-[2.5rem]
                                border
                                border-white/10
                                bg-gradient-to-br
                                from-[#171214]
                                via-[#241c20]
                                to-[#0b0b0b]
                                p-2
                                shadow-[0_15px_40px_rgba(0,0,0,.4)]
                                transition
                                duration-500
                                hover:-translate-y-2


                                ${index === 0
                                    ? "md:col-span-2 md:row-span-2"
                                    : ""
                                }

                                ${index === 3
                                    ? "md:col-span-2"
                                    : ""
                                }

                            `}

                        >



                            <div
                                className="
                                    flex
                                    h-full
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-[2rem]
                                    bg-black
                                "
                            >

                                <img

                                    src={service.image}

                                    alt={`${service.name} men's hairstyle gallery`}

                                    loading="lazy"

                                    decoding="async"

                                    className="
                                        h-full
                                        w-full
                                        object-contain
                                        transition
                                        duration-700
                                        group-hover:scale-105
                                    "

                                />

                            </div>





                            {/* TEXT OVERLAY */}


                            <div
                                className="
                                    absolute
                                    inset-x-2
                                    bottom-2
                                    rounded-b-[2rem]
                                    bg-gradient-to-t
                                    from-black
                                    via-black/70
                                    to-transparent
                                    p-5
                                    opacity-100
                                    md:opacity-0
                                    md:transition
                                    md:duration-500
                                    md:group-hover:opacity-100
                                "
                            >


                                <h3
                                    className="
                                        text-sm
                                        font-bold
                                        text-white
                                        sm:text-lg
                                    "
                                >

                                    {service.name}

                                </h3>



                                <p
                                    className="
                                        mt-2
                                        hidden
                                        text-sm
                                        text-white/60
                                        sm:block
                                    "
                                >

                                    {service.description}

                                </p>


                            </div>



                        </article>


                    ))}



                </div>




            </section>


        </AnimatedSection>

    );

}