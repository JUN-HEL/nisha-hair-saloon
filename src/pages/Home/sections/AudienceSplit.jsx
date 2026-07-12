import { Link } from "react-router-dom";

const branches = [
    {
        title: "Boys Salon",
        description:
            "Haircuts, beard styling, hair color, and fresh modern grooming.",
        link: "/boys",
    },
    {
        title: "Girls Parlour",
        description:
            "Beauty care, makeup, hair styling, and bridal-ready looks.",
        link: "/girls",
    },
];

export default function AudienceSplit() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                        Choose Your Services
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Two service paths. One trusted local brand.
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        Explore our dedicated services for boys grooming and girls beauty care.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {branches.map((branch) => (
                        <div
                            key={branch.title}
                            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-zinc-900">{branch.title}</h3>
                            <p className="mt-3 text-zinc-600">{branch.description}</p>
                            <Link
                                to={branch.link}
                                className="mt-6 inline-block rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                            >
                                Explore {branch.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}