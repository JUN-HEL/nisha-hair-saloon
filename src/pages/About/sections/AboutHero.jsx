import { motion } from "framer-motion";
import { Sparkles, Scissors } from "lucide-react";


const AboutHero = () => {

    const stats = [
        ["25+", "Years Experience"],
        ["500+", "Happy Clients"],
        ["100+", "Bridal Makeovers"],
        ["4.9★", "Customer Rating"],
    ];


    return (

        <section
            aria-label="About Nisha Hair Salon Gumkhal"
            className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-rose-50
                via-white
                to-white
                py-20
                lg:py-32
            "
        >


            {/* Background */}

            <div
                className="
                    absolute
                    -left-24
                    top-0
                    h-72
                    w-72
                    rounded-full
                    bg-pink-200/30
                    blur-3xl
                "
            />

            <div
                className="
                    absolute
                    -right-24
                    bottom-0
                    h-80
                    w-80
                    rounded-full
                    bg-amber-200/30
                    blur-3xl
                "
            />




            <div className="container relative mx-auto px-6">

                <div className="mx-auto max-w-4xl text-center">



                    {/* Badge */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 25
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            duration: .6
                        }}

                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-rose-200
                            bg-white
                            px-5
                            py-2
                            shadow-sm
                        "

                    >

                        <Sparkles
                            className="h-4 w-4 text-rose-500"
                        />


                        <span
                            className="
                                text-sm
                                font-semibold
                                text-rose-700
                            "
                        >

                            Premium Beauty Salon

                        </span>


                    </motion.div>






                    {/* SEO Heading */}

                    <motion.h1

                        initial={{
                            opacity: 0,
                            y: 25
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            delay: .15,
                            duration: .7
                        }}

                        className="
                            mt-8
                            text-4xl
                            font-extrabold
                            leading-tight

                            md:text-6xl
                            lg:text-7xl
                        "

                    >

                        About{" "}

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

                            Nisha Hair Salon Gumkhal

                        </span>


                    </motion.h1>







                    {/* SEO Description */}

                    <motion.p

                        initial={{
                            opacity: 0,
                            y: 25
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            delay: .3,
                            duration: .7
                        }}

                        className="
                            mx-auto
                            mt-7
                            max-w-3xl
                            text-lg
                            leading-8
                            text-gray-600
                        "

                    >

                        Nisha Hair Salon in Gumkhal offers professional
                        hair styling, bridal makeup, beauty treatments,
                        and personalized salon services designed to enhance
                        your confidence and style.


                    </motion.p>







                    {/* CTA */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 25
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            delay: .4,
                            duration: .7
                        }}

                        className="
                            mt-10
                            flex
                            justify-center
                        "

                    >


                        <a

                            href="/services"

                            aria-label="Explore Nisha Hair Salon services"

                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#b58fa2]
                                px-6
                                py-3
                                font-semibold
                                text-[#7c5569]
                                transition

                                hover:bg-[#7c5569]
                                hover:text-white
                            "

                        >

                            <Scissors size={18} />

                            Explore Services


                        </a>


                    </motion.div>







                    {/* Stats */}

                    <motion.div

                        initial={{
                            opacity: 0
                        }}

                        whileInView={{
                            opacity: 1
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            delay: .6
                        }}

                        className="
                            mt-16
                            grid
                            gap-5

                            sm:grid-cols-2
                            lg:grid-cols-4
                        "

                    >

                        {stats.map(([number, label]) => (

                            <div

                                key={label}

                                className="
                                    rounded-3xl
                                    border
                                    border-white/40
                                    bg-white/60
                                    p-7
                                    shadow-lg
                                    backdrop-blur-xl
                                "

                            >

                                <h2

                                    className="
                                        text-4xl
                                        font-bold
                                        bg-gradient-to-r
                                        from-[#7c5569]
                                        via-[#b58fa2]
                                        to-[#d5b48c]
                                        bg-clip-text
                                        text-transparent
                                    "

                                >

                                    {number}

                                </h2>


                                <p className="mt-2 text-gray-600">

                                    {label}

                                </p>


                            </div>

                        ))}


                    </motion.div>



                </div>


            </div>


        </section>

    );
};


export default AboutHero;