import AnimatedSection from "../../../components/common/AnimatedSection";

const images = [
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
];

export default function GirlsGallery() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                        Beauty Gallery
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Elegant looks, polished details, beautiful moments
                    </h2>
                    <p className="mt-4 text-zinc-600">
                        Replace these with your real salon and bridal photos later. Real work
                        always lands harder than stock sparkle.
                    </p>
                </div>

                <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
                    <div className="overflow-hidden rounded-[1.75rem] md:col-span-2 md:row-span-2">
                        <img
                            src={images[0]}
                            alt="Girls gallery 1"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem]">
                        <img
                            src={images[1]}
                            alt="Girls gallery 2"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem]">
                        <img
                            src={images[2]}
                            alt="Girls gallery 3"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] md:col-span-2">
                        <img
                            src={images[3]}
                            alt="Girls gallery 4"
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}