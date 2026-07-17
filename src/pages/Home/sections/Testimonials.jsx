import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";

const reviews = [
    {
        name: "Jaid Khan",
        initials: "JK",
        service: "Hair Colour",
        rating: 5,
        review:
            "If you want a flawless, premium hair color without the stress of doing it yourself at home, I highly recommend booking an appointment at Nisha Hair Salon. Superb service and great value for money!",
        verified: true,
    },
    {
        name: "Suhani",
        initials: "S",
        service: "Hair Cut",
        rating: 5,
        review:
            "Great work and team! Personal favourite 🫶❤️",
        verified: true,
    },
    {
        name: "Charlie",
        initials: "C",
        service: "Haircut & Beard Styling",
        rating: 5,
        review:
            "Had a wonderful experience at Nisha Beauty Parlour! ✨The makeup was absolutely flawless and perfectly suited the occasion.The hairstyling was equally amazing—very neat, stylish, and exactly how I wanted it. The staff was friendly, professional, and made the whole experience comfortable and relaxing.You can really see their attention to detail and passion for beauty. Highly recommended for anyone looking for beautiful makeup and elegant hair styling! 💄💇‍♀️",
        verified: true,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const review = reviews[currentIndex];

    return (
        <section
            id="google-reviews"
            className="relative overflow-hidden bg-gradient-to-b from-[#fffaf6] via-white to-[#f7eef4] py-24 md:py-32"
        >
            {/* Background */}
            <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#b58fa2]/15 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d5b48c]/15 blur-[150px]" />
            <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5569]/5 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center rounded-full bg-[#7c5569]/10 px-4 py-2 text-sm font-medium tracking-wide text-[#7c5569]">
                        ⭐ Google Customer Reviews
                    </span>

                    <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-[#22181d] md:text-5xl">
                        Real Stories from{" "}
                        <span className="bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] bg-clip-text text-transparent italic">
                            Happy Clients
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f6269]">
                        Discover why clients trust{" "}
                        <span className="font-semibold text-[#7c5569]">
                            Nisha Hair Salon
                        </span>{" "}
                        for hair colouring, bridal makeup, hairstyling, beauty
                        treatments, facials, and men's grooming in Gumkhal.
                    </p>
                </div>

                {/* Testimonial */}
                <div className="relative mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -30,
                                scale: 0.97,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18,
                            }}
                            className="relative overflow-hidden rounded-[2.5rem] border border-[#b58fa2]/20 bg-white/75 p-10 text-center shadow-[0_30px_90px_rgba(124,85,105,.10)] backdrop-blur-xl md:p-16"
                        >
                            {/* Decorative Quote */}
                            <Quote
                                className="absolute right-8 top-8 h-16 w-16 text-[#b58fa2]/15"
                                strokeWidth={1.5}
                            />

                            {/* Stars */}
                            <div className="flex justify-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-[#d5b48c] text-[#d5b48c]"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <blockquote className="mx-auto mt-8 max-w-3xl font-serif text-2xl italic leading-relaxed text-[#3b3432] md:text-3xl">
                                “{review.review}”
                            </blockquote>

                            {/* Client */}
                            <div className="mt-10 flex flex-col items-center">
                                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#7c5569] via-[#a67889] to-[#d5b48c] text-lg font-semibold text-white shadow-xl">
                                    {review.initials}
                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-[#22181d]">
                                    {review.name}
                                </h3>

                                <p className="mt-1 text-sm text-[#6f6269]">
                                    {review.service}
                                </p>

                                {review.verified && (
                                    <div className="mt-4 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                                        ✓ Verified Google Review
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Indicators */}
                    <div className="mt-10 flex justify-center gap-3">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`View review ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "w-10 bg-gradient-to-r from-[#7c5569] to-[#d5b48c]"
                                    : "w-2 bg-[#b58fa2]/30 hover:bg-[#7c5569]/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20">
                    <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#b58fa2]/20 bg-white/80 p-10 text-center shadow-[0_20px_70px_rgba(124,85,105,.08)] backdrop-blur-xl">
                        <h3 className="font-serif text-3xl font-semibold text-[#22181d]">
                            Loved Your Experience?
                        </h3>

                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6f6269]">
                            Your feedback helps others discover trusted beauty,
                            hairstyling, and bridal services at Nisha Hair Salon.
                            We'd love to hear about your visit.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="https://g.page/r/Ceny1RDiRD4hEBM/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c5569] to-[#966d80] px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                ⭐ Write a Google Review
                            </a>

                            <a
                                href="https://local.google.com/place?placeid=ChIJi2WsKJedCTkR6fLVEOJEPiE&utm_medium=noren&utm_source=gbp&utm_campaign=2026"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[#7c5569]/20 bg-white px-8 py-3 text-sm font-medium text-[#7c5569] transition-all duration-300 hover:border-[#7c5569] hover:bg-[#7c5569] hover:text-white"
                            >
                                View All Google Reviews
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}