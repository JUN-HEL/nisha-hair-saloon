import { motion } from "framer-motion";
import {
    Scissors,
    ShieldCheck,
    Sparkles,
    HeartHandshake,
} from "lucide-react";

const features = [
    {
        icon: Scissors,
        title: "Experienced Stylists",
        description:
            "Professional haircuts, styling, bridal hairstyles, and beauty services handled with care and attention to detail.",
    },
    {
        icon: Sparkles,
        title: "Complete Beauty Services",
        description:
            "From bridal makeup and party makeup to hair colouring and treatments, we offer services for every occasion.",
    },
    {
        icon: ShieldCheck,
        title: "Clean & Comfortable Salon",
        description:
            "A hygienic and relaxing environment where every client feels comfortable during their beauty session.",
    },
    {
        icon: HeartHandshake,
        title: "Personal Attention",
        description:
            "We understand your style preferences and suggest looks that suit your personality and requirements.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">

                <div className="grid gap-12 md:grid-cols-2 md:items-center">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm uppercase tracking-[3px] text-[#7c5569]">
                            About Our Salon
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
                            Beauty services with care,
                            <span className="block text-[#7c5569]">
                                style & experience
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-zinc-600">
                            Nisha Hair Salon & Beauty Parlour in Gumkhal, Pauri Garhwal provides
                            professional hair, makeup, and beauty services with a
                            focus on quality, hygiene, and personalized care.
                            Whether it is a wedding, special event, or regular
                            grooming, we help you achieve a look that feels right
                            for you.
                        </p>
                    </motion.div>


                    {/* Right */}
                    <div className="space-y-6">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        x: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                    }}
                                    className="flex gap-5 border-b border-zinc-200 pb-6 last:border-none"
                                >
                                    <div className="mt-1 text-[#7c5569]">
                                        <Icon size={28} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-zinc-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-zinc-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}