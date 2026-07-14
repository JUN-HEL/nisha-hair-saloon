import { Link } from "react-router-dom";
import AnimatedSection from "../../../components/common/AnimatedSection";
import { MenGallery, WomenGallery } from "../../../data/galleryData";


export default function GalleryPreview() {


    const galleryImages = [

        // Women priority
        ...WomenGallery.slice(0, 3),

        // Men after women
        ...MenGallery.slice(0, 2),

    ];



    return (

        <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">


            <div className="container-custom">


                <div
                    className="
                        rounded-[2rem]
                        border
                        border-white/60
                        bg-white/50
                        p-6
                        shadow-[0_20px_60px_rgba(124,85,105,0.12)]
                        backdrop-blur-xl
                        sm:p-10
                    "
                >



                    {/* HEADER */}

                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            gap-6
                            sm:flex-row
                            sm:items-end
                        "
                    >


                        <div className="max-w-2xl">


                            <p
                                className="
                                    text-sm
                                    font-medium
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#7c5569]
                                "
                            >
                                Salon Gallery
                            </p>




                            <h2
                                className="
                                    mt-4
                                    text-3xl
                                    font-semibold
                                    leading-tight
                                    text-[#22181d]
                                    sm:text-5xl
                                "
                            >

                                Beauty.
                                <br />
                                Style.
                                <br />
                                Confidence.

                            </h2>




                            <p
                                className="
                                    mt-5
                                    leading-7
                                    text-[#6f6269]
                                "
                            >

                                Explore our premium bridal makeup,
                                women's beauty treatments, men's grooming
                                and modern hairstyle transformations.

                            </p>


                        </div>





                        <Link
                            to="/gallery"
                            className="
                                inline-flex
                                w-fit
                                items-center
                                rounded-full
                                bg-gradient-to-r
                                from-[#7c5569]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-md
                                transition
                                hover:-translate-y-1
                            "
                        >

                            View Full Gallery

                        </Link>


                    </div>








                    {/* GALLERY */}

                    <div
                        className="
                            mt-10
                            rounded-[2rem]
                            bg-gradient-to-br
                            from-[#f7ede8]
                            via-[#fdf8f5]
                            to-[#ead7c5]
                            p-4
                            shadow-inner
                            sm:p-6
                        "
                    >



                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-4
                                lg:grid-cols-4
                            "
                        >



                            {galleryImages.map((item, index) => (


                                <div
                                    key={`${item.id}-${index}`}
                                    className={`
                                        group
                                        relative
                                        flex
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        rounded-[1.75rem]
                                        border
                                        border-white/70
                                        bg-gradient-to-br
                                        from-white
                                        via-[#faf1ed]
                                        to-[#e8d1c2]
                                        shadow-[0_15px_40px_rgba(124,85,105,0.12)]

                                        ${index === 0
                                            ? "lg:col-span-2 lg:row-span-2"
                                            : ""
                                        }
                                    `}
                                >



                                    {/* Decorative Glow */}

                                    <div
                                        className="
                                            absolute
                                            -right-10
                                            -top-10
                                            h-32
                                            w-32
                                            rounded-full
                                            bg-[#d5b48c]/30
                                            blur-3xl
                                        "
                                    />


                                    <div
                                        className="
                                            absolute
                                            -bottom-10
                                            -left-10
                                            h-32
                                            w-32
                                            rounded-full
                                            bg-[#b58fa2]/20
                                            blur-3xl
                                        "
                                    />





                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="
                                            relative
                                            z-10
                                            h-full
                                            min-h-52
                                            w-full
                                            object-contain
                                            p-3
                                            transition
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />





                                    {/* Hover Overlay */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            z-20
                                            bg-gradient-to-t
                                            from-[#7c5569]/20
                                            via-transparent
                                            opacity-0
                                            transition
                                            duration-500
                                            group-hover:opacity-100
                                        "
                                    />



                                </div>


                            ))}



                        </div>


                    </div>


                </div>


            </div>


        </AnimatedSection>

    );

}