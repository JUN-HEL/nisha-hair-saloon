
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import {
    Scissors,
    Sparkles,
    MapPin,
    Star,
    MessageCircle,
    Crown,
    PhoneCall
} from "lucide-react";


export default function BoysHero() {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useSpring(mouseX, {
        stiffness: 80,
        damping: 20,
    });

    const y = useSpring(mouseY, {
        stiffness: 80,
        damping: 20,
    });

    const rotateX = useTransform(y, [-300, 300], [8, -8]);
    const rotateY = useTransform(x, [-300, 300], [-8, 8]);


    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(
            e.clientX - rect.left - rect.width / 2
        );

        mouseY.set(
            e.clientY - rect.top - rect.height / 2
        );
    };


    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40,
        },

        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };


    return (

        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen overflow-hidden bg-[#050505]"
        >


            {/* Background Glow */}

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.45, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity
                }}
                className="
absolute
right-0
top-1/2
h-[600px]
w-[600px]
-translate-y-1/2
rounded-full
bg-[#d4af37]/20
blur-[170px]
"
            />



            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity
                }}
                className="
absolute
-left-40
bottom-0
h-[600px]
w-[600px]
rounded-full
bg-[#333]/30
blur-[160px]
"
            />



            <div
                className="
relative
z-10
mx-auto
grid
min-h-screen
max-w-7xl
items-center
gap-10
px-6
py-20
lg:grid-cols-[1fr_0.9fr]
"
            >


                {/* LEFT CONTENT */}


                <motion.div
                    className="relative z-30"
                    initial="hidden"
                    animate="show"
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: .15
                            }
                        }
                    }}
                >


                    <motion.div
                        variants={fadeUp}
                        className="
inline-flex
items-center
gap-2
rounded-full
border
border-white/10
bg-white/5
px-5
py-2
text-sm
text-[#d4af37]
backdrop-blur-xl
"
                    >

                        <Sparkles size={15} />
                        Premium Men's Grooming

                    </motion.div>




                    <motion.p
                        variants={fadeUp}
                        className="
mt-6
flex
items-center
gap-2
text-white/50
"
                    >

                        <MapPin
                            size={16}
                            className="text-[#d4af37]"
                        />

                        Gumkhal, Pauri Garhwal

                    </motion.p>





                    <motion.h1
                        variants={fadeUp}
                        className="
mt-6
text-5xl
font-black
leading-[1.05]
text-white
md:text-6xl
lg:text-7xl
"
                    >

                        Sharp
                        <br />

                        <span
                            className="
bg-gradient-to-r
from-[#d4af37]
via-[#f5d76e]
to-white
bg-clip-text
text-transparent
"
                        >
                            Looks
                        </span>

                        <br />

                        Powerful Style

                    </motion.h1>





                    <motion.p
                        variants={fadeUp}
                        className="
mt-8
max-w-xl
text-lg
leading-8
text-white/60
"
                    >

                        Premium haircuts, beard sculpting,
                        styling and grooming services designed
                        for men who want confidence and a
                        sharp appearance.

                    </motion.p>







                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex flex-wrap gap-4"
                    >

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="
        rounded-2xl
        bg-gradient-to-r
        from-[#8b6508]
        via-[#d4af37]
        to-[#f5d76e]
        px-8
        py-4
        font-bold
        text-black
        shadow-xl
        transition
        hover:scale-105
        "
                        >
                            Book Appointment
                        </a>



                        <a
                            href="tel:+919999999999"
                            className="
        flex
        items-center
        gap-2
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-8
        py-4
        font-semibold
        text-white
        backdrop-blur-xl
        transition
        hover:bg-white/10">

                            <PhoneCall size={18} />
                            Call now

                        </a>


                    </motion.div>





                    <motion.div
                        variants={fadeUp}
                        className="
                            mt-14
                            flex
                            gap-12
"
                    >


                        <div>

                            <h3 className="text-3xl font-black text-white">
                                500+
                            </h3>

                            <p className="text-white/50">
                                Clients
                            </p>

                        </div>



                        <div>

                            <div className="flex items-center gap-2">

                                <Star
                                    size={18}
                                    className="fill-[#d4af37] text-[#d4af37]"
                                />

                                <h3 className="text-3xl font-black text-white">
                                    4.9
                                </h3>

                            </div>


                            <p className="text-white/50">
                                Rating
                            </p>


                        </div>


                    </motion.div>


                </motion.div>





                {/* RIGHT IMAGE AREA */}


                <motion.div

                    style={{
                        rotateX,
                        rotateY
                    }}

                    className="
relative
z-10
h-[620px]
flex
items-center
justify-center
"

                >


                    {/* Main Image */}


                    <motion.div

                        animate={{
                            y: [0, -18, 0]
                        }}

                        transition={{
                            duration: 6,
                            repeat: Infinity
                        }}

                        className="
absolute
z-20
w-[300px]
lg:w-[350px]
"

                    >

                        <div
                            className="
overflow-hidden
rounded-[2.5rem]
border
border-white/10
bg-white/5
p-3
backdrop-blur-xl
"
                        >

                            <img

                                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"

                                alt="Men haircut"

                                className="
h-[480px]
w-full
rounded-[2rem]
object-cover
"

                            />

                        </div>

                    </motion.div>





                    {/* Left Floating Image */}


                    <motion.div

                        animate={{
                            y: [0, 15, 0],
                            rotate: [-5, -2, -5]
                        }}

                        transition={{
                            duration: 7,
                            repeat: Infinity
                        }}

                        className="
absolute
left-0
top-20
z-10
w-[180px]
lg:w-[220px]
"

                    >

                        <div
                            className="
rounded-[2rem]
border
border-white/10
bg-white/5
p-3
backdrop-blur-xl
"
                        >

                            <img

                                src="https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop"

                                alt="Beard styling"

                                className="
h-[230px]
rounded-[1.5rem]
object-cover
"

                            />

                        </div>

                    </motion.div>





                    {/* Premium Badge */}


                    <div
                        className="
absolute
right-0
top-20
z-20
rounded-3xl
border
border-white/10
bg-white/5
px-5
py-4
backdrop-blur-xl
"
                    >

                        <Crown
                            size={22}
                            className="text-[#d4af37]"
                        />


                        <p className="mt-2 text-xs uppercase tracking-[.3em] text-white/40">
                            Elite
                        </p>

                        <h3 className="font-bold text-white">
                            Barber Studio
                        </h3>

                    </div>





                    {/* Review Card */}

                    <div
                        className="
absolute
bottom-16
left-0
z-20
rounded-3xl
border
border-white/10
bg-white/5
p-5
backdrop-blur-xl
"
                    >

                        <div className="flex text-[#d4af37]">

                            {
                                [...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={15}
                                        fill="currentColor"
                                    />
                                ))
                            }

                        </div>


                        <h3 className="mt-2 text-2xl font-black text-white">
                            500+
                        </h3>


                        <p className="text-white/50">
                            Sharp Transformations
                        </p>


                    </div>



                    <Scissors
                        size={50}
                        className="
absolute
bottom-48
right-10
rounded-full
bg-[#d4af37]
p-3
text-black
shadow-xl
"
                    />


                </motion.div>


            </div>

        </section>

    );
}

