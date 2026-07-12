import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Card from "./Card";


export default function Visual({
    rotateX,
    rotateY
}) {


    return (

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


            {/* Circle */}

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




            {/* Main Image */}

            <motion.div

                animate={{
                    y: [0, -18, 0]
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





            {/* Floating Images */}

            <Card

                image="/images/services/hair-cut.jpg"

                className="
                left-0
                top-20
                rotate-[-5deg]
                "

            />



            <Card

                image="/images/services/hair-smoothing.jpg"

                className="
                bottom-14
                right-0
                rotate-[5deg]
                "

            />





            {/* Trending */}

            <motion.div

                animate={{
                    y: [0, -12, 0]
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

                <p className="text-xs uppercase tracking-[.3em] text-pink-500">
                    Trending
                </p>


                <h3 className="mt-1 font-bold text-zinc-900">
                    Cozy Fits
                </h3>


            </motion.div>





            {/* Review */}

            <motion.div

                animate={{
                    y: [0, 12, 0]
                }}

                transition={{
                    duration: 5,
                    repeat: Infinity
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

                <div className="flex text-pink-400">

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


                <h3 className="mt-3 text-2xl font-black text-zinc-900">
                    1200+
                </h3>


                <p className="text-sm text-zinc-500">
                    Girls Styled
                </p>


            </motion.div>





            {/* Labels */}

            <motion.div

                animate={{
                    y: [0, -10, 0]
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
                    y: [0, 15, 0]
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



            {/* Heart */}

            <motion.div

                animate={{
                    y: [0, -15, 0],
                    rotate: [-8, 8, -8]
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


        </motion.div>

    );

}