import AnimatedSection from "../../../components/common/AnimatedSection";
import { ShieldCheck, Sparkles, HeartHandshake, Clock3 } from "lucide-react";

const points = [
    {
        title: "Trusted Service",
        text: "Quality beauty and grooming services trusted by our local community.",
        icon: ShieldCheck,
    },
    {
        title: "Complete Care",
        text: "Hair, skin, makeup and grooming solutions under one roof.",
        icon: Sparkles,
    },
    {
        title: "Personal Touch",
        text: "Every appointment is handled with attention and care.",
        icon: HeartHandshake,
    },
    {
        title: "Easy Booking",
        text: "Book your appointment quickly through call or WhatsApp.",
        icon: Clock3,
    },
];


export default function WhyChooseUs() {

    return (
        <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">

            <div className="container-custom">


                {/* Heading */}

                <div className="mb-12 max-w-2xl">

                    <p className="
                        text-sm
                        uppercase
                        tracking-[0.25em]
                        text-[#7c5569]
                    ">
                        Why Choose Us
                    </p>


                    <h2 className="
                        mt-4
                        text-4xl
                        font-semibold
                        leading-tight
                        text-[#22181d]
                        sm:text-5xl
                    ">
                        Beauty services
                        <br />
                        made personal
                    </h2>


                    <p className="
                        mt-5
                        text-[#6f6269]
                        leading-7
                    ">
                        A modern salon experience built around comfort,
                        quality and confidence.
                    </p>

                </div>



                {/* Cards */}

                <div className="
    grid
    grid-cols-2
    gap-4
    lg:grid-cols-4
">

                    {points.map((point, index) => {

                        const Icon = point.icon;

                        return (

                            <div
                                key={point.title}
                                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-white/60
                    bg-white/50
                    p-4
                    sm:p-6
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
                        opacity-40
                        transition
                        duration-500
                        group-hover:opacity-80
                    "
                                />

                                <div
                                    className="
                        absolute
                        -bottom-10
                        -left-10
                        h-28
                        w-28
                        rounded-full
                        bg-[#b58fa2]/20
                        blur-3xl
                        transition
                        duration-500
                        group-hover:scale-125
                    "
                                />


                                <div className="relative">


                                    <div className="
                        flex
                        items-center
                        justify-between
                    ">

                                        <span
                                            className="
                                text-xs
                                sm:text-sm
                                font-medium
                                text-[#b58fa2]
                            "
                                        >
                                            0{index + 1}
                                        </span>


                                        <div
                                            className="
                                flex
                                h-10
                                w-10
                                sm:h-12
                                sm:w-12
                                items-center
                                justify-center
                                rounded-xl
                                sm:rounded-2xl
                                bg-gradient-to-br
                                from-[#f7eef4]
                                to-[#f3dfc5]
                                text-[#7c5569]
                                shadow-sm
                                transition
                                duration-300
                                group-hover:scale-110
                            "
                                        >
                                            <Icon size={18} className="sm:size-[22px]" />
                                        </div>

                                    </div>



                                    <h3
                                        className="
                            mt-5
                            sm:mt-8
                            text-base
                            sm:text-xl
                            font-semibold
                            leading-tight
                            text-[#22181d]
                        "
                                    >
                                        {point.title}
                                    </h3>


                                    <p
                                        className="
                            mt-2
                            sm:mt-3
                            text-xs
                            sm:text-sm
                            leading-5
                            sm:leading-7
                            text-[#6f6269]
                        "
                                    >
                                        {point.text}
                                    </p>


                                    <div
                                        className="
                            mt-4
                            sm:mt-6
                            h-[2px]
                            w-10
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

                        );

                    })}

                </div>
            </div>

        </AnimatedSection>
    );
}