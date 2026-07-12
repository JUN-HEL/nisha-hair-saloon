import { motion } from "framer-motion";
import { Sparkles, Scissors } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white py-24 lg:py-32">
            {/* Background Blur */}
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

            <div className="container relative mx-auto px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4 text-rose-500" />

                        <span className="text-sm font-medium tracking-wide text-rose-700">
                            Premium Beauty Experience
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
                    >
                        About{" "}
                        <span className="bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] bg-clip-text text-transparent">
                            Nisha Hair Salon
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl"
                    >
                        We believe beauty is more than appearance—it is confidence,
                        self-expression, and self-care. Every haircut, makeover, and beauty
                        treatment is crafted with passion, creativity, and attention to
                        detail.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-5"
                    >


                        <button className="flex items-center gap-2 rounded-full border border-[#b58fa2] px-6 py-3 font-semibold text-[#7c5569] transition hover:bg-[#7c5569] hover:text-white">
                            <Scissors size={18} />
                            Explore Services
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {[
                            ["5+", "Years Experience"],
                            ["5000+", "Happy Clients"],
                            ["1000+", "Bridal Makeovers"],
                            ["4.9★", "Customer Rating"],
                        ].map(([number, label]) => (
                            <div
                                key={label}
                                className="glass-card rounded-3xl border border-white/40 p-8 shadow-lg"
                            >
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] bg-clip-text text-transparent">
                                    {number}
                                </h2>

                                <p className="mt-2 text-gray-600">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;