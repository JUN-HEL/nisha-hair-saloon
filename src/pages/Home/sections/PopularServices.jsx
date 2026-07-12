import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { GirlsServices } from "../../../data/services";

export default function ServicesSection() {

    const featuredServices = GirlsServices.filter(
        (service) => service.featured
    );

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

                    <div className="max-w-2xl">

                        <p
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-[#f7eef4]
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-[#7c5569]
                            "
                        >
                            <Sparkles size={15} />
                            Premium Services
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
                            Beauty treatments
                            <br />
                            designed for you
                        </h2>



                        <p
                            className="
                                mt-5
                                leading-7
                                text-[#6f6269]
                            "
                        >
                            Hair, beauty and skincare services crafted with
                            professional care and luxury products.
                        </p>



                        <Link
                            to="/services"
                            className="
                                mt-6
                                inline-flex
                                items-center
                                rounded-full
                                bg-gradient-to-r
                                from-[#7c5569]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                px-7
                                py-3
                                text-sm
                                font-medium
                                text-white
                                shadow-lg
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                            "
                        >
                            View All Services
                        </Link>


                    </div>





                    {/* Cards */}

                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-2
                            gap-4
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {featuredServices.map((service, index) => (

                            <div
                                key={service.id}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-[1.5rem]
                                    border
                                    border-white/60
                                    bg-white/50
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:shadow-[0_20px_60px_rgba(124,85,105,0.18)]
                                "
                            >


                                {/* Image */}

                                <div
                                    className="
                                        relative
                                        h-32
                                        overflow-hidden
                                        sm:h-40
                                    "
                                >

                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition
                                            duration-700
                                            group-hover:scale-110
                                        "
                                    />


                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-[#22181d]/40
                                            via-transparent
                                            to-transparent
                                        "
                                    />


                                    {service.popular && (

                                        <span
                                            className="
                                                absolute
                                                left-3
                                                top-3
                                                rounded-full
                                                bg-white/90
                                                px-3
                                                py-1
                                                text-xs
                                                font-semibold
                                                text-[#7c5569]
                                            "
                                        >
                                            Popular
                                        </span>

                                    )}

                                </div>





                                {/* Content */}

                                <div className="p-4 sm:p-5">


                                    <p
                                        className="
                                            text-xs
                                            text-[#b58fa2]
                                        "
                                    >
                                        0{index + 1}
                                    </p>



                                    <h3
                                        className="
                                            mt-2
                                            text-base
                                            font-semibold
                                            text-[#22181d]
                                            sm:text-lg
                                        "
                                    >
                                        {service.name}
                                    </h3>



                                    <p
                                        className="
                                            mt-2
                                            line-clamp-2
                                            text-xs
                                            leading-5
                                            text-[#6f6269]
                                            sm:text-sm
                                        "
                                    >
                                        {service.description}
                                    </p>




                                    <div
                                        className="
                                            mt-4
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <span
                                            className="
                                                font-bold
                                                text-[#7c5569]
                                            "
                                        >
                                            ₹{service.price}
                                        </span>


                                        <span
                                            className="
                                                text-xs
                                                text-[#6f6269]
                                            "
                                        >
                                            {service.duration}
                                        </span>


                                    </div>



                                    <div
                                        className="
                                            mt-4
                                            h-[2px]
                                            w-12
                                            rounded-full
                                            bg-gradient-to-r
                                            from-[#7c5569]
                                            via-[#b58fa2]
                                            to-[#d5b48c]
                                            transition-all
                                            duration-500
                                            group-hover:w-full
                                        "
                                    />

                                </div>


                            </div>

                        ))}


                    </div>


                </div>


            </div>


        </AnimatedSection>
    );
}