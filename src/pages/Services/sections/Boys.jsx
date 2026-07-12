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
    Crown,
    PhoneCall,
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
                duration: .8,
            },
        },
    };

    return (

        <section
            onMouseMove={handleMouseMove}
            aria-labelledby="boys-hero-heading"
            className="
                relative
                overflow-hidden
                bg-[#171318]
                text-white
                min-h-screen
                section-padding
            "
        >

            {/* ================= Background ================= */}

            {/* Main Glow */}

            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [.18, .35, .18],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    right-0
                    top-1/2
                    h-[620px]
                    w-[620px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#d5b48c]/20
                    blur-[140px]
                "
            />

            {/* Burgundy Glow */}

            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    -left-40
                    bottom-0
                    h-[560px]
                    w-[560px]
                    rounded-full
                    bg-[#7c5569]/25
                    blur-[130px]
                "
            />

            {/* Rose Ambient */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    right-1/4
                    top-0
                    h-[360px]
                    w-[360px]
                    rounded-full
                    bg-[#b58fa2]/15
                    blur-[120px]
                "
            />

            {/* Decorative Ring */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    right-[8%]
                    top-1/2
                    h-[520px]
                    w-[520px]
                    -translate-y-1/2
                    rounded-full
                    border
                    border-white/5
                "
            />

            {/* ================= Content ================= */}

            <div
                className="
                    container-custom
                    relative
                    z-10
                    grid
                    min-h-screen
                    items-center
                    gap-12
                    lg:grid-cols-[1fr_.95fr]
                "
            >                {/* ================= LEFT CONTENT ================= */}

                <motion.div
                    className="relative z-30"
                    initial="hidden"
                    animate="show"
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >

                    {/* Premium Badge */}

                    <motion.div
                        variants={fadeUp}
                        className="
                            glass-card-dark
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            px-5
                            py-2
                            text-sm
                            text-[#d5b48c]
                        "
                    >

                        <Sparkles
                            size={15}
                            aria-hidden="true"
                        />

                        Premium Men's Grooming

                    </motion.div>

                    {/* Location */}

                    <motion.p
                        variants={fadeUp}
                        className="
                            mt-6
                            flex
                            items-center
                            gap-2
                            text-white/60
                        "
                    >

                        <MapPin
                            size={16}
                            className="text-[#d5b48c]"
                            aria-hidden="true"
                        />

                        Gumkhal, Pauri Garhwal

                    </motion.p>

                    {/* Heading */}

                    <motion.h1
                        id="boys-hero-heading"
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

                        Premium

                        <br />

                        <span className="gradient-text-dark">
                            Men's Haircuts
                        </span>

                        <br />

                        & Grooming

                    </motion.h1>

                    {/* Description */}

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

                        Experience professional men's haircuts,
                        beard styling, hair spa, hair coloring,
                        facials and premium grooming services at
                        Nisha Hair Salon in Gumkhal,
                        Pauri Garhwal.

                    </motion.p>

                    {/* Hidden SEO Content */}

                    <p className="sr-only">
                        Nisha Hair Salon provides premium men's
                        haircuts, beard styling, grooming,
                        hair spa, hair coloring and skincare
                        services in Gumkhal, Pauri Garhwal,
                        Uttarakhand.
                    </p>

                    {/* CTA Buttons */}

                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex flex-wrap gap-4"
                    >

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Book a men's grooming appointment on WhatsApp"
                            className="
                                gradient-bg-dark
                                rounded-2xl
                                px-8
                                py-4
                                font-semibold
                                text-white
                                shadow-hero-dark
                                transition-all
                                duration-300
                                hover:-translate-y-1
                            "
                        >
                            Book Appointment
                        </a>

                        <a
                            href="tel:+919999999999"
                            aria-label="Call Nisha Hair Salon"
                            className="
                                glass-card-dark
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                px-8
                                py-4
                                font-semibold
                                text-white
                                transition
                                hover:bg-white/10
                            "
                        >

                            <PhoneCall
                                size={18}
                                aria-hidden="true"
                            />

                            Call Now

                        </a>

                    </motion.div>

                    {/* Stats */}

                    <motion.div
                        variants={fadeUp}
                        className="
                            mt-14
                            flex
                            gap-12
                        "
                    >

                        <div>

                            <h2 className="text-3xl font-black text-white">
                                500+
                            </h2>

                            <p className="mt-1 text-white/50">
                                Happy Clients
                            </p>

                        </div>

                        <div>

                            <div
                                className="flex items-center gap-2"
                                aria-label="Rated 4.9 out of 5 stars"
                            >

                                <Star
                                    size={18}
                                    className="fill-[#d5b48c] text-[#d5b48c]"
                                    aria-hidden="true"
                                />

                                <h2 className="text-3xl font-black text-white">
                                    4.9
                                </h2>

                            </div>

                            <p className="mt-1 text-white/50">
                                Customer Rating
                            </p>

                        </div>

                    </motion.div>

                </motion.div>                {/* ================= RIGHT IMAGE ================= */}

                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                    }}
                    className="
                        relative
                        z-10
                        flex
                        h-[650px]
                        items-center
                        justify-center
                    "
                >

                    {/* Background Glow */}

                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            h-[520px]
                            w-[520px]
                            rounded-full
                            bg-[#d5b48c]/15
                            blur-[110px]
                        "
                    />

                    {/* ================= Main Image ================= */}

                    <motion.div
                        animate={{
                            y: [0, -18, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}
                        className="
                            absolute
                            z-20
                            w-[300px]
                            lg:w-[360px]
                        "
                    >

                        <div
                            className="
                                glass-card-dark
                                overflow-hidden
                                rounded-[2.5rem]
                                p-3
                            "
                        >

                            <img
                                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"
                                alt="Professional men's haircut at Nisha Hair Salon in Gumkhal, Pauri Garhwal"
                                width={500}
                                height={700}
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                draggable="false"
                                className="
                                    h-[500px]
                                    w-full
                                    rounded-[2rem]
                                    object-cover
                                    select-none
                                "
                            />

                        </div>

                    </motion.div>

                    {/* ================= Floating Image ================= */}

                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            rotate: [-5, -2, -5],
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
                            w-[190px]
                            lg:w-[220px]
                        "
                    >

                        <div
                            className="
                                glass-card-dark
                                rounded-[2rem]
                                p-3
                            "
                        >

                            <img
                                src="https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop"
                                alt="Professional beard styling service"
                                width={350}
                                height={450}
                                loading="lazy"
                                decoding="async"
                                className="
                                    h-[240px]
                                    w-full
                                    rounded-[1.5rem]
                                    object-cover
                                "
                            />

                        </div>

                    </motion.div>

                    {/* ================= Premium Card ================= */}

                    <div
                        className="
                            glass-card-dark
                            absolute
                            right-0
                            top-20
                            z-20
                            rounded-3xl
                            px-5
                            py-4
                        "
                    >

                        <Crown
                            size={22}
                            className="text-[#d5b48c]"
                            aria-hidden="true"
                        />

                        <p
                            className="
                                mt-2
                                text-xs
                                uppercase
                                tracking-[.3em]
                                text-white/50
                            "
                        >
                            Premium
                        </p>

                        <h3 className="mt-1 font-bold text-white">
                            Men's Grooming
                        </h3>

                    </div>

                    {/* ================= Review Card ================= */}

                    <div
                        className="
                            glass-card-dark
                            absolute
                            bottom-16
                            left-0
                            z-20
                            rounded-3xl
                            p-5
                        "
                    >

                        <div
                            className="flex text-[#d5b48c]"
                            aria-label="Rated 5 out of 5 stars"
                        >

                            {[...Array(5)].map((_, i) => (

                                <Star
                                    key={i}
                                    size={15}
                                    fill="currentColor"
                                    aria-hidden="true"
                                />

                            ))}

                        </div>

                        <h3 className="mt-3 text-2xl font-black text-white">
                            500+
                        </h3>

                        <p className="text-white/50">
                            Stylish Transformations
                        </p>

                    </div>

                    {/* ================= Floating Icon ================= */}

                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            bottom-44
                            right-10
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            gradient-bg-dark
                            shadow-hero-dark
                        "
                    >

                        <Scissors
                            size={28}
                            className="text-white"
                        />

                    </div>

                </motion.div>

            </div>

        </section>

    );

}