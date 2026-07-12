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
                staggerChildren: 0.12,
            },
        },

    };


    const item = {

        hidden: {
            opacity: 0,
            y: 25,
        },

        show: {

            opacity: 1,
            y: 0,

            transition: {
                duration: 0.6,
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
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-zinc-700
                    shadow-lg
                    backdrop-blur-xl
                    sm:text-sm
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
                    mt-6
                    text-4xl
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





            {/* Short Description */}

            <motion.p

                variants={item}

                className="
                    mt-5
                    max-w-md
                    text-base
                    leading-7
                    text-zinc-600
                    sm:text-lg
                "

            >

                Bridal makeup, hairstyles &
                luxury beauty transformations at our Nisha hair salon.

            </motion.p>





            {/* Buttons */}

            <motion.div

                variants={item}

                className="
                    mt-8
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                "

            >


                <motion.a

                    href="/contact"

                    whileHover={{
                        scale: 1.05,
                        y: -2,
                    }}

                    whileTap={{
                        scale: .96,
                    }}

                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-gradient-to-r
                        from-[#7c5569]
                        via-[#b58fa2]
                        to-[#d5b48c]
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        shadow-lg
                    "

                >

                    <CalendarDays size={17} />

                    Book Now

                </motion.a>





                <motion.a

                    href="/gallery"

                    whileHover={{
                        scale: 1.05,
                    }}

                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-white/80
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-zinc-700
                        shadow-lg
                        backdrop-blur-xl
                    "

                >

                    Gallery

                    <ArrowRight size={17} />

                </motion.a>


            </motion.div>





            {/* Stats */}

            <motion.div

                variants={item}

                className="
                    mt-10
                    flex
                    gap-10
                    sm:mt-14
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

                    <p className="text-sm text-zinc-500">

                        Clients

                    </p>

                </div>





                <div>

                    <div className="flex items-center gap-2">

                        <Star

                            size={17}

                            className="
                                fill-pink-400
                                text-pink-400
                            "

                        />

                        <h3
                            className="
                                text-3xl
                                font-black
                                text-zinc-900
                            "
                        >

                            4.9

                        </h3>

                    </div>


                    <p className="text-sm text-zinc-500">

                        Rating

                    </p>


                </div>


            </motion.div>


        </motion.div>

    );

}