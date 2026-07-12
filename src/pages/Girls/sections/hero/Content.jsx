import { motion } from "framer-motion";
import {
    Sparkles,
    CalendarDays,
    ArrowRight,
    Star,
} from "lucide-react";


export default function Content() {


    const container = {

        hidden: {},

        show: {

            transition: {
                staggerChildren: 0.15,
            },

        },

    };


    const item = {

        hidden: {

            opacity: 0,
            y: 40,

        },


        show: {

            opacity: 1,
            y: 0,

            transition: {
                duration: 0.8,
                ease: "easeOut",
            },

        },

    };


    return (

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

        >


            {/* Badge */}

            <motion.div

                variants={item}

                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/70
                px-5
                py-3
                text-sm
                font-medium
                text-zinc-700
                shadow-lg
                backdrop-blur-xl
                "

            >

                <Sparkles
                    size={15}
                    className="text-pink-500"
                />

                Premium Beauty Studio

            </motion.div>





            {/* Heading */}

            <motion.h1

                variants={item}

                className="
                mt-8
                text-5xl
                font-black
                leading-[1]
                tracking-tight
                text-zinc-900
                sm:text-6xl
                lg:text-7xl
                "

            >

                Beauty.

                <br />

                Elegance.

                <br />


                <span
                    className="
                    bg-gradient-to-r
                    from-[#7c5569]
                    via-[#b58fa2]
                    to-[#d5b48c]
                    bg-clip-text
                    text-transparent
                    "
                >

                    Made For You.

                </span>


            </motion.h1>





            {/* Description */}

            <motion.p

                variants={item}

                className="
                mt-7
                max-w-xl
                text-lg
                leading-8
                text-zinc-600
                "

            >

                Experience luxury beauty services designed
                around you. From bridal makeup and elegant
                hairstyles to complete transformations,
                we create looks that make every moment special.

            </motion.p>





            {/* Buttons */}

            <motion.div

                variants={item}

                className="
                mt-10
                flex
                flex-wrap
                gap-4
                "

            >


                <motion.a

                    href="/contact"

                    whileHover={{
                        scale: 1.05,
                        y: -3,
                    }}

                    whileTap={{
                        scale: .96,
                    }}

                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#7c5569]
                    via-[#b58fa2]
                    to-[#d5b48c]
                    px-8
                    py-4
                    font-semibold
                    text-white
                    shadow-[0_20px_50px_rgba(236,72,153,.25)]
                    "

                >

                    <CalendarDays size={18} />

                    Book Appointment


                </motion.a>





                <motion.a

                    href="/gallery"

                    whileHover={{
                        scale: 1.05,
                    }}

                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/80
                    px-8
                    py-4
                    font-semibold
                    text-zinc-700
                    shadow-lg
                    backdrop-blur-xl
                    "

                >

                    Explore Looks

                    <ArrowRight size={18} />


                </motion.a>


            </motion.div>





            {/* Stats */}


            <motion.div

                variants={item}

                className="
                mt-14
                flex
                gap-12
                "

            >


                <div>

                    <h3
                        className="
                        text-3xl
                        font-black
                        text-zinc-900
                        "
                    >

                        500+

                    </h3>


                    <p className="mt-1 text-zinc-500">

                        Happy Clients

                    </p>


                </div>





                <div>


                    <div className="flex items-center gap-2">


                        <Star

                            size={18}

                            className="
                            fill-pink-400
                            text-pink-400
                            "

                        />


                        <h3 className="text-3xl font-black">

                            4.9

                        </h3>


                    </div>


                    <p className="mt-1 text-zinc-500">

                        Client Rating

                    </p>


                </div>


            </motion.div>


        </motion.div>

    );

}