import { motion } from "framer-motion";
import {
    Scissors,
    Award,
    ShieldCheck,
    Sparkles,
    HeartHandshake,
    Star,
} from "lucide-react";

const features = [
    {
        icon: Scissors,
        title: "Professional Stylists",
        description:
            "Our experienced stylists bring creativity, precision, and the latest trends to every haircut and makeover.",
    },
    {
        icon: Award,
        title: "Premium Products",
        description:
            "We use only trusted salon-quality products to ensure healthy hair and long-lasting beauty.",
    },
    {
        icon: ShieldCheck,
        title: "Hygiene First",
        description:
            "Every tool is sanitized, every station is cleaned, and your comfort is always our priority.",
    },
    {
        icon: HeartHandshake,
        title: "Personalized Care",
        description:
            "Every client is unique. We recommend styles and treatments that suit your personality.",
    },
    {
        icon: Sparkles,
        title: "Luxury Experience",
        description:
            "Relax in a calm, elegant atmosphere while enjoying professional beauty services.",
    },
    {
        icon: Star,
        title: "Trusted by Clients",
        description:
            "Our customers keep coming back because they love the quality, care, and experience.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-[#FDF8F4] py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-semibold uppercase tracking-[4px] text-[#b58fa2]">
                        Why Choose Us
                    </p>

                    <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                        Experience Beauty with{" "}
                        <span className="bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] bg-clip-text text-transparent">
                            Confidence
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-gray-600">
                        We combine creativity, premium products, and exceptional customer
                        service to provide an unforgettable salon experience.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group glass-card rounded-3xl border border-white/40 bg-white/70 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7c5569] to-[#d5b48c] text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-8 text-2xl font-semibold text-[#7c5569]">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;