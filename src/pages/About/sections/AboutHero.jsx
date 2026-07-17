import { motion } from "framer-motion";
import { Scissors, Sparkles } from "lucide-react";

const stats = [
    {
        number: "25+",
        label: "Years of Experience",
    },
    {
        number: "500+",
        label: "Happy Clients",
    },
    {
        number: "100+",
        label: "Bridal Looks",
    },
    {
        number: "4.9★",
        label: "Client Rating",
    },
];

export default function AboutHero() {
    return (
        <section
            aria-label="About Nisha Hair Salon & Beauty Parlour Gumkhal"
            className="bg-[#fdf8f3] py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        <div className="flex items-center gap-3 text-[#8a5d70]">
                            <span className="h-px w-10 bg-[#8a5d70]" />

                            <span className="text-sm font-medium uppercase tracking-[0.25em]">
                                Since 1999 • Gumkhal
                            </span>
                        </div>


                        <h1 className="mt-8 text-5xl font-semibold leading-[1.1] text-zinc-900 md:text-6xl">
                            Beauty, Style &
                            <span className="block text-[#8a5d70]">
                                Trust for 25+ Years
                            </span>
                        </h1>


                        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600">
                            Nisha Hair Salon & Beauty Parlour has been a trusted beauty destination
                            in Gumkhal, Pauri Garhwal for over 25 years.
                            We create beautiful hairstyles, bridal makeovers,
                            and personalized beauty services with experience
                            and care.
                        </p>


                        <div className="mt-8">
                            <a
                                href="/services"
                                className="inline-flex items-center gap-2 rounded-full bg-[#8a5d70] px-7 py-3 font-medium text-white transition hover:bg-[#734c5d]"
                            >
                                <Scissors size={18} />
                                View Services
                            </a>
                        </div>

                    </motion.div>



                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(70,40,30,0.12)]">

                            <div className="mb-8 flex items-center gap-3 text-[#8a5d70]">
                                <Sparkles size={22} />

                                <span className="font-medium">
                                    Our Journey
                                </span>
                            </div>


                            <div className="space-y-6">
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between border-b border-zinc-100 pb-5 last:border-none"
                                    >
                                        <span className="text-zinc-600">
                                            {item.label}
                                        </span>

                                        <span className="text-3xl font-semibold text-[#8a5d70]">
                                            {item.number}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}