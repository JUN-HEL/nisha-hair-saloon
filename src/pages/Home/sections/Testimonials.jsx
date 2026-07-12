const reviews = [
    {
        name: "Local Customer",
        text: "Great service and friendly staff. The haircut and styling were very good.",
    },
    {
        name: "Beauty Client",
        text: "Nice experience for beauty services and makeup. Easy to book and visit.",
    },
    {
        name: "Regular Visitor",
        text: "A trusted local place in Gumkhal for grooming and parlour services.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        What customers love about us
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
                        >
                            <p className="text-zinc-600">“{review.text}”</p>
                            <p className="mt-4 font-semibold text-zinc-900">{review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}