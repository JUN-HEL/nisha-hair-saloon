import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Sparkles, Phone, Star } from "lucide-react";
import { siteConfig } from "../../../data/siteConfig";
import "./hero.css";

export default function Hero() {
    const waText = encodeURIComponent(
        "Hi! I'd like to book an appointment at Nisha Hair Salon."
    );

    const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${waText}`;

    // Generate particles only once
    const particles = useMemo(
        () =>
            [...Array(18)].map(() => ({
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 6}s`,
                duration: `${5 + Math.random() * 5}s`,
            })),
        []
    );

    return (
        <section
            className="relative min-h-screen overflow-hidden bg-[#100b0d]"
            aria-labelledby="hero-heading"
        >
            {/* ================= BACKGROUND ================= */}

            {/* Base Gradient */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[#090708] via-[#24151c] to-[#100b0d]"
            />

            {/* Champagne Glow */}
            <div
                aria-hidden="true"
                className="
                    absolute
                    right-[18%]
                    top-1/2
                    h-[720px]
                    w-[720px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#d5b48c]/20
                    blur-[130px]
                "
            />

            {/* Burgundy Atmosphere */}
            <div
                aria-hidden="true"
                className="
                    absolute
                    -left-48
                    bottom-0
                    h-[650px]
                    w-[650px]
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
                    right-0
                    top-0
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[#b58fa2]/15
                    blur-[120px]
                "
            />

            {/* Cinematic Lights */}
            <div
                aria-hidden="true"
                className="cinematic-lights"
            >
                <div className="light-bloom" />

                <div className="light-beam beam-1" />
                <div className="light-beam beam-2" />
                <div className="light-beam beam-3" />

                <div className="light-haze" />
            </div>

            {/* Floating Particles */}
            <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden"
            >
                {particles.map((particle, index) => (
                    <span
                        key={index}
                        className="particle absolute rounded-full bg-[#d5b48c]"
                        style={{
                            width: particle.width,
                            height: particle.height,
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>

            {/* Decorative Ring */}
            <div
                aria-hidden="true"
                className="
                    absolute
                    right-[14%]
                    top-1/2
                    h-[620px]
                    w-[620px]
                    -translate-y-1/2
                    rounded-full
                    border
                    border-white/5
                "
            />

            {/* ================= CONTENT ================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    grid
                    min-h-screen
                    max-w-7xl
                    items-center
                    gap-12
                    px-6
                    py-24
                    lg:grid-cols-2
                "
            >                {/* ================= LEFT ================= */}

                <div>

                    {/* Badge */}

                    <div
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
                            text-[#d5b48c]
                            backdrop-blur-xl
                        "
                    >
                        <Sparkles
                            size={15}
                            aria-hidden="true"
                        />

                        Luxury Hair & Bridal Studio
                    </div>

                    {/* Heading */}

                    <h1
                        id="hero-heading"
                        className="
                            mt-8
                            text-5xl
                            font-semibold
                            leading-[1.05]
                            tracking-[-0.04em]
                            text-white
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        Luxury Hair &

                        <br />

                        <span
                            className="
                                bg-gradient-to-r
                                from-[#d5b48c]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Bridal Makeup
                        </span>

                        <br />

                        Studio
                    </h1>

                    {/* Description */}

                    <p
                        className="
                            mt-7
                            max-w-xl
                            text-lg
                            leading-8
                            text-white/65
                        "
                    >
                        Experience premium bridal makeup, hairstyling,
                        haircuts, hair coloring, facials, skincare and
                        beauty services at <strong>Nisha Hair Salon</strong>
                        in Gumkhal, Pauri Garhwal. Our expert stylists
                        create elegant looks for weddings, parties and
                        everyday confidence.
                    </p>

                    {/* Hidden SEO Description */}

                    <p className="sr-only">
                        Nisha Hair Salon is a professional hair salon and
                        beauty studio in Gumkhal, Pauri Garhwal,
                        Uttarakhand offering bridal makeup, haircuts,
                        hairstyling, facials, hair coloring, waxing,
                        threading and complete beauty care services.
                    </p>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            to="/booking"
                            aria-label="Book an appointment at Nisha Hair Salon"
                            className="
                                rounded-2xl
                                bg-gradient-to-r
                                from-[#7c5569]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                px-8
                                py-4
                                font-semibold
                                text-white
                                shadow-[0_20px_60px_rgba(213,180,140,.25)]
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_25px_70px_rgba(213,180,140,.4)]
                            "
                        >
                            Book Your Appointment
                        </Link>

                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Book your salon appointment on WhatsApp"
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
                                hover:bg-white/10
                            "
                        >
                            <Phone
                                size={18}
                                aria-hidden="true"
                            />

                            Book on WhatsApp
                        </a>

                    </div>

                    {/* Stats */}

                    <div className="mt-14 flex gap-10">

                        <div>

                            <h2 className="text-3xl font-bold text-white">
                                5000+
                            </h2>

                            <p className="mt-1 text-white/50">
                                Beautiful Transformations
                            </p>

                        </div>

                        <div>

                            <div
                                className="flex items-center gap-1"
                                aria-label="Rated 4.9 out of 5 by our customers"
                            >

                                <Star
                                    size={18}
                                    className="fill-[#d5b48c] text-[#d5b48c]"
                                    aria-hidden="true"
                                />

                                <span className="text-3xl font-bold text-white">
                                    4.9
                                </span>

                            </div>

                            <p className="mt-1 text-white/50">
                                Client Rating
                            </p>

                        </div>

                    </div>

                </div>                {/* ================= RIGHT IMAGE ================= */}

                <div
                    className="
                        relative
                        flex
                        min-h-[780px]
                        items-end
                        justify-center
                    "
                >

                    {/* Background Halo */}

                    <div
                        aria-hidden="true"
                        className="
                            bride-glow
                            absolute
                            bottom-16
                            h-[600px]
                            w-[600px]
                            rounded-full
                            bg-[#d5b48c]/20
                            blur-[120px]
                        "
                    />

                    {/* Secondary Glow */}

                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            bottom-20
                            h-[420px]
                            w-[420px]
                            rounded-full
                            bg-[#b58fa2]/15
                            blur-[100px]
                        "
                    />

                    {/* Decorative Ring */}

                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            bottom-28
                            h-[520px]
                            w-[520px]
                            rounded-full
                            border
                            border-white/10
                        "
                    />

                    {/* Bride */}

                    <div className="bride-reveal relative z-20">

                        <div className="bride-float relative">

                            <img
                                src="/images/bg.webp"
                                alt="Professional bridal makeup and hairstyling by Nisha Hair Salon in Gumkhal, Pauri Garhwal"
                                width={650}
                                height={760}
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                draggable="false"
                                className="
                                    h-[760px]
                                    w-auto
                                    object-contain
                                    select-none
                                    drop-shadow-[0_30px_70px_rgba(0,0,0,.7)]
                                "
                            />

                            {/* Shine */}

                            <div
                                aria-hidden="true"
                                className="bride-shine rounded-full"
                            />

                        </div>

                    </div>

                    {/* Premium Badge */}

                    <div
                        className="
                            absolute
                            right-8
                            top-16
                            z-30
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            px-6
                            py-4
                            backdrop-blur-xl
                            shadow-2xl
                        "
                    >

                        <p className="text-xs uppercase tracking-[0.3em] text-[#d5b48c]">
                            Premium
                        </p>

                        <h2 className="mt-1 text-lg font-semibold text-white">
                            Bridal Makeup
                        </h2>

                        <p className="mt-1 text-sm text-white/60">
                            Luxury Beauty Studio
                        </p>

                    </div>

                    {/* Review Card */}

                    <div
                        className="
                            absolute
                            bottom-24
                            left-0
                            z-30
                            w-[240px]
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            p-6
                            backdrop-blur-xl
                            shadow-2xl
                        "
                    >

                        <div
                            className="flex text-[#d5b48c]"
                            aria-label="Rated 5 out of 5 stars"
                        >

                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={16}
                                    fill="currentColor"
                                    aria-hidden="true"
                                />
                            ))}

                        </div>

                        <h3 className="mt-4 text-2xl font-bold text-white">
                            5000+
                        </h3>

                        <p className="mt-1 text-sm text-white/60">
                            Beautiful Transformations
                        </p>

                    </div>

                    {/* Floating Sparkles */}

                    <span
                        aria-hidden="true"
                        className="spark sparkle-1"
                    />

                    <span
                        aria-hidden="true"
                        className="spark sparkle-2"
                    />

                    <span
                        aria-hidden="true"
                        className="spark sparkle-3"
                    />

                    <span
                        aria-hidden="true"
                        className="spark sparkle-4"
                    />

                </div>

            </div>

            {/* Bottom Gradient */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-40
                    bg-gradient-to-t
                    from-[#100b0d]
                    via-[#100b0d]/70
                    to-transparent
                "
            />

        </section>

    );
}