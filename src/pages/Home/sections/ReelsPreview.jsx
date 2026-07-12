import AnimatedSection from "../../../components/common/AnimatedSection";
import { Play, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BoysReels as reels } from "../../../data/reels";


export default function ReelsPreview() {

    return (
        <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">

            <div className="container-custom">


                {/* Main Card */}

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
                            gap-6
                            sm:flex-row
                            sm:items-end
                            sm:justify-between
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
                                Our Work in Motion
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
                                Real transformations
                                <br />
                                make the brand alive
                            </h2>


                            <p
                                className="
                                    mt-5
                                    leading-7
                                    text-[#6f6269]
                                "
                            >
                                Discover our latest styles, makeovers and
                                grooming transformations.
                            </p>

                        </div>



                        <Link
                            to="/gallery"
                            className="
                                inline-flex
                                w-fit
                                items-center
                                gap-2
                                rounded-full
                                bg-gradient-to-r
                                from-[#7c5569]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-md
                                transition
                                hover:-translate-y-1
                            "
                        >
                            View More
                            <ArrowUpRight size={16} />
                        </Link>


                    </div>




                    {/* Reels Grid */}

                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-2
                            gap-4
                            lg:grid-cols-3
                        "
                    >

                        {reels.map((reel, index) => (

                            <Link
                                key={reel.id}
                                to={reel.link}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[1.5rem]
                                    border
                                    border-white/60
                                    bg-white/40
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:shadow-[0_20px_60px_rgba(124,85,105,0.18)]
                                "
                            >


                                {/* Glow */}

                                <div
                                    className="
                                        absolute
                                        -right-10
                                        -top-10
                                        h-28
                                        w-28
                                        rounded-full
                                        bg-[#d5b48c]/30
                                        blur-3xl
                                        opacity-50
                                        transition
                                        duration-500
                                        group-hover:opacity-90
                                    "
                                />


                                <div className="relative">


                                    <div className="relative overflow-hidden">

                                        <img
                                            src={reel.image}
                                            alt={reel.title}
                                            className="
                                                h-52
                                                w-full
                                                object-cover
                                                transition
                                                duration-700
                                                group-hover:scale-110
                                                sm:h-72
                                            "
                                        />


                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-[#22181d]/70
                                                via-transparent
                                                to-transparent
                                            "
                                        />



                                        <div
                                            className="
                                                absolute
                                                left-3
                                                top-3
                                                flex
                                                items-center
                                                gap-2
                                                rounded-full
                                                bg-white/90
                                                px-3
                                                py-1.5
                                                text-xs
                                                font-semibold
                                                text-[#22181d]
                                            "
                                        >
                                            <Play
                                                size={14}
                                                className="fill-current"
                                            />

                                            Featured
                                        </div>



                                        <div
                                            className="
                                                absolute
                                                bottom-3
                                                left-3
                                                rounded-full
                                                bg-[#7c5569]/90
                                                px-3
                                                py-1
                                                text-xs
                                                text-white
                                            "
                                        >
                                            {reel.category}
                                        </div>


                                    </div>




                                    <div className="p-4 sm:p-5">


                                        <h3
                                            className="
                                                text-base
                                                font-semibold
                                                text-[#22181d]
                                                sm:text-lg
                                            "
                                        >
                                            {reel.title}
                                        </h3>



                                        <div
                                            className="
                                                mt-4
                                                inline-flex
                                                items-center
                                                gap-2
                                                text-sm
                                                font-semibold
                                                text-[#7c5569]
                                            "
                                        >
                                            Explore Section

                                            <ArrowUpRight size={16} />

                                        </div>


                                    </div>


                                </div>


                            </Link>

                        ))}


                    </div>


                </div>


            </div>


        </AnimatedSection>
    );
}