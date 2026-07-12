import AnimatedSection from "../../../components/common/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { GirlsServices } from "../../../data/services";

export default function GirlsGallery() {
    const galleryImages = GirlsServices
        .filter((service) => service.featured && service.image)
        .slice(0, 4);

    return (
        <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
            <section
                id="gallery"
                aria-labelledby="gallery-heading"
            >
                <div className="mx-auto max-w-7xl">

                    <header className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5569]">
                            Our Portfolio
                        </p>

                        <h2
                            id="gallery-heading"
                            className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl"
                        >
                            Bridal Makeup & Beauty Gallery – Nisha Hair Salon,
                            Gumkhal, Pauri Garhwal
                        </h2>

                        <p className="mt-4 text-lg leading-7 text-zinc-600">
                            Explore our bridal makeup, party makeup, hair styling,
                            hair colouring, skincare, and beauty transformations
                            from Nisha Hair Salon.
                        </p>
                    </header>

                    <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
                        {galleryImages.map((service, index) => (
                            <figure
                                key={service.id}
                                className={`group overflow-hidden rounded-[1.75rem]
                                    ${index === 0
                                        ? "md:col-span-2 md:row-span-2"
                                        : index === 3
                                            ? "md:col-span-2"
                                            : ""
                                    }`}
                            >
                                <img
                                    src={service.image}
                                    alt={`${service.name} service at Nisha Hair Salon Gumkhal Pauri Garhwal`}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </figure>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <a
                            href="/gallery"
                            aria-label="View full gallery of Nisha Hair Salon"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#7c5569] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#68465a]"
                        >
                            View Full Gallery

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                </div>
            </section>
        </AnimatedSection>
    );
}