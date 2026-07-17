import AnimatedSection from "../../../components/common/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { WomenGallery } from "../../../data/galleryData";

export default function GirlsGallery() {


    const galleryImages = WomenGallery.slice(0, 4);



    return (

        <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">

            <section
                id="gallery"
                aria-labelledby="gallery-heading"
            >

                <div className="mx-auto max-w-7xl">


                    <header className="max-w-3xl">


                        <p
                            className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#7c5569]
                            "
                        >
                            Our Portfolio
                        </p>



                        <h2
                            id="gallery-heading"
                            className="
                            mt-3
                            text-3xl
                            font-bold
                            text-zinc-900
                            sm:text-4xl
                            "
                        >

                            Bridal Makeup & Beauty Gallery –
                            Nisha Hair Salon & Beauty Parlour,
                            Gumkhal, Pauri Garhwal

                        </h2>




                        <p
                            className="
                            mt-4
                            text-lg
                            leading-7
                            text-zinc-600
                            "
                        >

                            Explore our latest bridal makeup,
                            hair smoothing, haircut and beauty
                            transformations created at Nisha Hair Salon & Beauty Parlour.

                        </p>


                    </header>






                    <div
                        className="
                        mt-10
                        grid
                        auto-rows-[220px]
                        gap-4
                        md:grid-cols-4
                        "
                    >


                        {galleryImages.map((item, index) => (


                            <figure

                                key={item.id}

                                className={`
                                group
                                flex
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-[1.75rem]
                                bg-black

                                ${index === 0
                                        ? "md:col-span-2 md:row-span-2"
                                        : index === 3
                                            ? "md:col-span-2"
                                            : ""
                                    }
                                `}

                            >


                                <img

                                    src={item.image}

                                    alt={`${item.title} at Nisha Hair Salon & Beauty Parlour Gumkhal Pauri Garhwal`}

                                    loading="lazy"

                                    decoding="async"

                                    className="
                                    h-full
                                    w-full
                                    object-contain
                                    transition
                                    duration-500
                                    group-hover:scale-105
                                    "

                                />


                            </figure>


                        ))}



                    </div>







                    <div className="mt-12 flex justify-center">


                        <a

                            href="/gallery?category=Bridal%20Makeup"

                            aria-label="View bridal makeup gallery of Nisha Hair Salon & Beauty Parlour"

                            className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-[#7c5569]
                            px-8
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-[#68465a]
                            "

                        >

                            View Bridal Gallery


                            <ArrowRight
                                size={18}
                                className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                "
                            />


                        </a>


                    </div>


                </div>


            </section>


        </AnimatedSection>

    );

}