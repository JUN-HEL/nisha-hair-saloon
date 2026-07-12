import { Link } from "react-router-dom";
import { Scissors, Sparkles, ArrowRight } from "lucide-react";

const branches = [
    {
        title: "Boys Salon",
        subtitle: "Men's Grooming",
        description:
            "Professional haircuts, beard styling, hair colouring, and modern grooming services designed for men.",
        link: "/boys",
        icon: Scissors,
        color: "from-[#202020] to-[#4a4a4a]",
    },
    {
        title: "Girls Parlour",
        subtitle: "Beauty & Bridal Care",
        description:
            "Makeup, bridal looks, hair styling, beauty treatments, and personalised care for every occasion.",
        link: "/girls",
        icon: Sparkles,
        color: "from-[#7c5569] to-[#d5b48c]",
    },
];

export default function AudienceSplit() {
    return (
        <section className="bg-[#faf7f3] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a5d70]">
                        Our Services
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-zinc-900 md:text-5xl">
                        Choose Your Style,
                        <span className="block text-[#8a5d70]">
                            We Take Care Of The Rest
                        </span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-zinc-600">
                        Nisha Hair Salon, Gumkhal offers dedicated beauty and
                        grooming services for both men and women with professional
                        care and experience.
                    </p>

                </div>


                {/* Cards */}
                <div className="mt-14 grid gap-8 md:grid-cols-2">

                    {branches.map((branch) => {
                        const Icon = branch.icon;

                        return (
                            <div
                                key={branch.title}
                                className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2"
                            >

                                {/* Top Accent */}
                                <div
                                    className={`absolute left-0 top-0 h-2 w-full bg-gradient-to-r ${branch.color}`}
                                />


                                <div className="flex items-start justify-between">

                                    <div>
                                        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                                            {branch.subtitle}
                                        </p>

                                        <h3 className="mt-3 text-3xl font-bold text-zinc-900">
                                            {branch.title}
                                        </h3>
                                    </div>


                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${branch.color} text-white shadow-lg`}
                                    >
                                        <Icon size={26} />
                                    </div>

                                </div>


                                <p className="mt-6 leading-7 text-zinc-600">
                                    {branch.description}
                                </p>


                                <Link
                                    to={branch.link}
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a5d70]"
                                >
                                    Explore {branch.title}

                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />

                                </Link>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}