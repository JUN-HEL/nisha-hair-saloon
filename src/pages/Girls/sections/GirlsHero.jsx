import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import {
    Sparkles,
    ShoppingBag,
    ArrowRight,
    Star,
} from "lucide-react";


export default function GirlsHero() {

    // ===============================
    // MOUSE PARALLAX
    // ===============================

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);


    const smoothX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20,
    });


    const smoothY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
    });


    const rotateX = useTransform(
        smoothY,
        [-300, 300],
        [8, -8]
    );


    const rotateY = useTransform(
        smoothX,
        [-300, 300],
        [-8, 8]
    );


    const handleMouseMove = (e) => {

        const rect =
            e.currentTarget.getBoundingClientRect();


        mouseX.set(
            e.clientX - rect.left - rect.width / 2
        );


        mouseY.set(
            e.clientY - rect.top - rect.height / 2
        );

    };


    // ===============================
    // TEXT ANIMATION
    // ===============================

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

        <section
            onMouseMove={handleMouseMove}
            className="
            relative
            min-h-screen
            overflow-hidden
            bg-[#fff8fb]
            "
        >


            {/* ===============================
                BACKGROUND
            =============================== */}


            <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#fffdfd]
                via-[#fff3f7]
                to-[#f8f1ff]
                "
            />



            {/* Pink Glow */}

            <motion.div

                animate={{
                    scale: [
                        1,
                        1.2,
                        1
                    ],

                    opacity: [
                        .3,
                        .6,
                        .3
                    ],

                }}

                transition={{
                    duration: 9,
                    repeat: Infinity,
                }}

                className="
                absolute
                -left-40
                top-20
                h-[520px]
                w-[520px]
                rounded-full
                bg-pink-300/40
                blur-[140px]
                "

            />



            {/* Purple Glow */}

            <motion.div

                animate={{

                    y: [
                        -30,
                        30,
                        -30
                    ],

                    scale: [
                        1,
                        1.15,
                        1
                    ],

                }}

                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}

                className="
                absolute
                right-0
                top-32
                h-[600px]
                w-[600px]
                rounded-full
                bg-purple-300/30
                blur-[160px]
                "

            />



            {/* Bottom Rose Glow */}

            <motion.div

                animate={{
                    x: [
                        -20,
                        20,
                        -20
                    ],
                }}

                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}

                className="
                absolute
                bottom-0
                left-1/2
                h-[400px]
                w-[400px]
                rounded-full
                bg-rose-200/40
                blur-[120px]
                "

            />




            {/* ===============================
                FLOATING PARTICLES
            =============================== */}


            {
                [...Array(20)].map((_, i) => (

                    <motion.span

                        key={i}

                        animate={{

                            y: [
                                0,
                                -700
                            ],

                            opacity: [
                                0,
                                1,
                                0
                            ],

                            scale: [
                                .5,
                                1.2,
                                .5
                            ],

                        }}


                        transition={{

                            duration:
                                6 + Math.random() * 4,

                            delay:
                                i * .25,

                            repeat: Infinity,

                        }}


                        style={{

                            left:
                                `${Math.random() * 100}%`,

                            bottom: -20,

                        }}


                        className="
                        absolute
                        h-1
                        w-1
                        rounded-full
                        bg-pink-400
                        "

                    />

                ))
            }



            {/* ===============================
                MAIN WRAPPER
            =============================== */}


            <div

                className="
                relative
                z-10
                mx-auto
                grid
                min-h-screen
                max-w-7xl
                items-center
                gap-16
                px-6
                py-24
                lg:grid-cols-2
                "

            >



                {/* LEFT SIDE */}

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

                        Cozy Girls Collection

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

                        Soft.

                        <br />

                        Stylish.

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

                            Always You.

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

                        Bridal styling and luxury beauty experiences
                        designed to make every celebration feel
                        unforgettable with flawless makeup,
                        elegant hairstyles, and personalized care.

                    </motion.p>
                    {/* ===============================
                        BUTTONS
                    =============================== */}


                    <motion.div

                        variants={item}

                        className="
                        mt-10
                        flex
                        flex-wrap
                        gap-4
                        "

                    >


                        <motion.button

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

                            <ShoppingBag size={18} />

                            Shop Collection


                        </motion.button>




                        <motion.button

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


                        </motion.button>


                    </motion.div>





                    {/* ===============================
                        STATS
                    =============================== */}



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
                                120+
                            </h3>


                            <p
                                className="
                                mt-1
                                text-zinc-500
                                "
                            >
                                Happy Girls
                            </p>


                        </div>




                        <div>


                            <div
                                className="
                                flex
                                items-center
                                gap-2
                                "
                            >

                                <Star

                                    size={18}

                                    className="
                                    fill-pink-400
                                    text-pink-400
                                    "

                                />


                                <h3
                                    className="
                                    text-3xl
                                    font-black
                                    "
                                >
                                    4.9
                                </h3>


                            </div>


                            <p
                                className="
                                mt-1
                                text-zinc-500
                                "
                            >
                                Customer Rating
                            </p>


                        </div>



                    </motion.div>



                </motion.div>






                {/* ===============================
                    RIGHT IMAGE AREA
                =============================== */}



                <motion.div


                    style={{

                        rotateX,

                        rotateY,

                    }}


                    className="
                    relative
                    flex
                    h-[720px]
                    items-center
                    justify-center
                    perspective-1000
                    "


                >



                    {/* BACK CIRCLE */}


                    <motion.div

                        animate={{

                            rotate: 360,

                        }}


                        transition={{

                            duration: 40,

                            repeat: Infinity,

                            ease: "linear"

                        }}


                        className="
                        absolute
                        h-[560px]
                        w-[560px]
                        rounded-full
                        border
                        border-pink-200
                        "

                    />




                    {/* MAIN IMAGE */}



                    <motion.div

                        animate={{

                            y: [
                                0,
                                -18,
                                0
                            ]

                        }}


                        transition={{

                            duration: 6,

                            repeat: Infinity,

                            ease: "easeInOut"

                        }}



                        className="
                        relative
                        z-20
                        w-[360px]
                        rounded-[3rem]
                        bg-white/60
                        p-4
                        shadow-2xl
                        backdrop-blur-xl
                        "

                    >


                        <img

                            src="/images/services/p4.jpg"

                            alt="Girls fashion"

                            className="
                            h-[520px]
                            w-full
                            rounded-[2.5rem]
                            object-cover
                            "

                        />


                    </motion.div>






                    {/* LEFT IMAGE CARD */}



                    <motion.div


                        animate={{

                            y: [
                                0,
                                20,
                                0
                            ],


                            rotate: [
                                -5,
                                -2,
                                -5
                            ]

                        }}


                        transition={{

                            duration: 7,

                            repeat: Infinity,

                        }}



                        className="
                        absolute
                        left-0
                        top-20
                        z-10
                        w-[220px]
                        rounded-[2rem]
                        bg-white/70
                        p-3
                        shadow-xl
                        backdrop-blur-xl
                        "


                    >


                        <img

                            src="/images/services/hair-cut.jpg"

                            alt="Cute outfit"

                            className="
                            h-[270px]
                            w-full
                            rounded-[1.5rem]
                            object-cover
                            "

                        />


                    </motion.div>







                    {/* RIGHT IMAGE CARD */}




                    <motion.div


                        animate={{

                            y: [
                                0,
                                -15,
                                0
                            ],


                            rotate: [
                                5,
                                2,
                                5
                            ]

                        }}



                        transition={{

                            duration: 6,

                            repeat: Infinity,

                        }}



                        className="
                        absolute
                        bottom-14
                        right-0
                        z-10
                        w-[220px]
                        rounded-[2rem]
                        bg-white/70
                        p-3
                        shadow-xl
                        backdrop-blur-xl
                        "

                    >


                        <img

                            src="/images/services/hair-smoothing.jpg"

                            alt="Fashion look"

                            className="
                            h-[270px]
                            w-full
                            rounded-[1.5rem]
                            object-cover
                            "

                        />


                    </motion.div>





                    {/* TRENDING BADGE */}



                    <motion.div


                        animate={{

                            y: [
                                0,
                                -12,
                                0
                            ]

                        }}



                        transition={{

                            duration: 4,

                            repeat: Infinity

                        }}



                        className="
                        absolute
                        right-6
                        top-10
                        z-30
                        rounded-3xl
                        bg-white/80
                        px-6
                        py-4
                        shadow-xl
                        backdrop-blur-xl
                        "

                    >


                        <p
                            className="
                            text-xs
                            uppercase
                            tracking-[.3em]
                            text-pink-500
                            "
                        >

                            Trending

                        </p>


                        <h3
                            className="
                            mt-1
                            font-bold
                            text-zinc-900
                            "
                        >

                            Cozy Fits

                        </h3>


                    </motion.div>
                    {/* ===============================
                        REVIEW CARD
                    =============================== */}


                    <motion.div

                        animate={{

                            y: [
                                0,
                                12,
                                0
                            ]

                        }}

                        transition={{

                            duration: 5,

                            repeat: Infinity,

                            ease: "easeInOut"

                        }}


                        className="
                        absolute
                        bottom-20
                        left-4
                        z-30
                        rounded-[2rem]
                        bg-white/80
                        p-6
                        shadow-xl
                        backdrop-blur-xl
                        "

                    >


                        <div
                            className="
                            flex
                            text-pink-400
                            "
                        >

                            {
                                [...Array(5)].map((_, i) => (

                                    <Star

                                        key={i}

                                        size={16}

                                        fill="currentColor"

                                    />

                                ))
                            }


                        </div>



                        <h3
                            className="
                            mt-3
                            text-2xl
                            font-black
                            text-zinc-900
                            "
                        >

                            1200+

                        </h3>


                        <p
                            className="
                            text-sm
                            text-zinc-500
                            "
                        >

                            Girls Styled

                        </p>


                    </motion.div>







                    {/* ===============================
                        HEART FLOATING BUTTON
                    =============================== */}



                    <motion.div


                        animate={{

                            y: [
                                0,
                                -15,
                                0
                            ],

                            rotate: [
                                -8,
                                8,
                                -8
                            ]

                        }}


                        transition={{

                            duration: 4,

                            repeat: Infinity

                        }}



                        className="
                        absolute
                        bottom-60
                        left-14
                        rounded-full
                        bg-pink-500
                        p-4
                        text-white
                        shadow-xl
                        "

                    >

                        💖


                    </motion.div>







                    {/* ===============================
                        SMALL FLOATING LABELS
                    =============================== */}



                    <motion.div


                        animate={{

                            y: [
                                0,
                                -10,
                                0
                            ]

                        }}



                        transition={{

                            duration: 5,

                            repeat: Infinity

                        }}


                        className="
                        absolute
                        left-10
                        top-44
                        rounded-full
                        bg-white/80
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-zinc-700
                        shadow-lg
                        backdrop-blur-xl
                        "

                    >

                        🌸 Soft Girl Era


                    </motion.div>







                    <motion.div


                        animate={{

                            y: [
                                0,
                                15,
                                0
                            ]

                        }}



                        transition={{

                            duration: 6,

                            repeat: Infinity

                        }}



                        className="
                        absolute
                        right-14
                        bottom-48
                        rounded-full
                        bg-white/80
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-zinc-700
                        shadow-lg
                        backdrop-blur-xl
                        "

                    >

                        ✨ New Arrival


                    </motion.div>







                    {/* ===============================
                        SPARKLES
                    =============================== */}



                    <motion.span

                        animate={{

                            scale: [
                                1,
                                1.5,
                                1
                            ],

                            rotate: 360,

                        }}


                        transition={{

                            duration: 5,

                            repeat: Infinity

                        }}



                        className="
                        absolute
                        right-32
                        top-40
                        text-3xl
                        "

                    >

                        ✨


                    </motion.span>





                    <motion.span

                        animate={{

                            scale: [
                                1,
                                1.4,
                                1
                            ],

                            rotate: -360,

                        }}



                        transition={{

                            duration: 7,

                            repeat: Infinity

                        }}



                        className="
                        absolute
                        left-24
                        bottom-36
                        text-2xl
                        "

                    >

                        ✨


                    </motion.span>



                </motion.div>



            </div>





            {/* ===============================
                BOTTOM FADE
            =============================== */}



            <div

                className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-32
                bg-gradient-to-t
                from-[#fff8fb]
                to-transparent
                "

            />



        </section>

    );

}