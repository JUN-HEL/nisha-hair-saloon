import { Link } from "react-router-dom";
import AnimatedSection from "../../../components/common/AnimatedSection";
import { GirlsServices } from "../../../data/Services";


export default function GalleryPreview() {

    const galleryImages = GirlsServices.slice(0, 4);


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
                        sm:p-10
                        backdrop-blur-xl
                        shadow-[0_20px_60px_rgba(124,85,105,0.12)]
                    "
                >


                    {/* Heading */}

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
                                Gallery Preview
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
                                A dreamy visual showcase
                                <br />
                                of our work
                            </h2>


                            <p
                                className="
                                    mt-5
                                    leading-7
                                    text-[#6f6269]
                                "
                            >
                                Explore our latest beauty, hair and grooming
                                transformations curated with care.
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





                    {/* Gallery Grid */}

                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-2
                            gap-4
                            sm:auto-rows-[220px]
                            lg:grid-cols-4
                        "
                    >


                        {galleryImages.map((item, index) => (

                            <div
                                key={item.id}
                                className={`
                                    group
                                    overflow-hidden
                                    rounded-[1.75rem]
                                    border
                                    border-white/60
                                    ${index === 0
                                        ? "sm:col-span-2 sm:row-span-2"
                                        : index === 3
                                            ? "sm:col-span-2"
                                            : ""
                                    }
                                `}
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="
                                        h-full
                                        min-h-52
                                        w-full
                                        object-cover
                                        transition
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                            </div>

                        ))}


                    </div>


                </div>


            </div>


        </AnimatedSection>
    );
}