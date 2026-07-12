import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles } from "lucide-react";
import { BoysServices as boysServicesData } from "../../../data/services";


export default function BoysGallery() {


    const galleryImages = boysServicesData
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
                    bg-[#080808]
                    p-5
                    shadow-[0_20px_60px_rgba(0,0,0,.6)]
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

                        Style Gallery

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

                        Fresh Cuts.
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
                            Premium Men's Style.
                        </span>


                    </h2>





                    <p

                        className="
                            mt-4
                            leading-7
                            text-white/60
                        "

                    >

                        Explore our latest men's haircut styles,
                        beard designs, fades and modern grooming
                        transformations created by professional barbers.

                    </p>


                </div>







                {/* GALLERY */}


                <div

                    className="
                        mt-10
                        grid
                        grid-cols-2
                        gap-4
                        sm:gap-5
                        md:grid-cols-4
                        md:auto-rows-[220px]
                    "

                >



                    {galleryImages.map((service, index) => (


                        <article

                            key={service.id}

                            className={`

                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5

                                h-44
                                sm:h-56

                                md:h-auto

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



                            <img

                                src={service.image}

                                alt={`${service.name} men's hairstyle gallery`}

                                loading="lazy"

                                decoding="async"

                                className="

                                    h-full
                                    w-full
                                    object-cover

                                    transition
                                    duration-700

                                    group-hover:scale-110

                                "

                            />







                            {/* OVERLAY */}


                            <div

                                className="

                                    absolute
                                    inset-x-0
                                    bottom-0

                                    bg-gradient-to-t
                                    from-black
                                    via-black/60
                                    to-transparent

                                    p-4
                                    opacity-100

                                    md:opacity-0
                                    md:transition
                                    md:duration-300
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
                                        mt-1
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