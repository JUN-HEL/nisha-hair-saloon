import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";

const Services = () => {
    return (
        <>
            <SEO
                title="Salon Services in Gumkhal | Nisha Hair Salon"
                description="Explore professional haircuts, bridal makeup, hair colouring, hair spa, men's grooming and beauty services at Nisha Hair Salon Gumkhal."
                canonical="https://nisha-hair-salon.netlify.app/services"
                schema={{
                    "@context": "https://schema.org",
                    "@type": [
                        "BeautySalon",
                        "LocalBusiness"
                    ],
                    "name": "Nisha Hair Salon",
                    "url": "https://nisha-hair-salon.netlify.app",
                    "image": "https://nisha-hair-salon.netlify.app/images/seo-cover.jpg",

                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Gumkhal",
                        "addressRegion": "Uttarakhand",
                        "addressCountry": "IN"
                    },

                    "priceRange": "₹₹",

                    "sameAs": [
                        "https://local.google.com/place?placeid=ChIJi2WsKJedCTkR6fLVEOJEPiE&utm_medium=noren&utm_source=gbp&utm_campaign=2026"
                    ],

                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Hair and Beauty Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "price": "14999",
                                "priceCurrency": "INR",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Bridal Makeup Service",
                                    "areaServed": "Gumkhal"
                                }
                            },
                            {
                                "@type": "Offer",
                                "price": "50",
                                "priceCurrency": "INR",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Men's Haircut Service",
                                    "areaServed": "Gumkhal"
                                }
                            }
                        ]
                    }
                }}
            />

            <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf6] via-white to-[#f8eef3] px-4 py-20 sm:px-6 lg:px-8">
                {/* Background Glow */}
                <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#b58fa2]/20 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#d5b48c]/20 blur-[140px]" />

                <div className="relative mx-auto max-w-6xl">

                    {/* Header */}
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full bg-[#7c5569]/10 px-5 py-2 text-sm font-medium text-[#7c5569]">
                            ✨ Premium Salon Services
                        </span>

                        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#22181d] md:text-5xl">
                            Professional Hair & Beauty Services in{" "}
                            <span className="bg-gradient-to-r from-[#7c5569] to-[#d5b48c] bg-clip-text text-transparent italic">
                                Gumkhal
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-[#6f6269]">
                            Discover premium beauty treatments at{" "}
                            <strong className="text-[#7c5569]">
                                Nisha Hair Salon
                            </strong>
                            . From bridal makeup and women's hairstyling to
                            men's haircuts, beard grooming, hair colouring and
                            professional salon treatments.
                        </p>
                    </div>


                    {/* Service Categories */}
                    <div className="mt-16 grid gap-8 md:grid-cols-2">

                        {/* Girls */}
                        <Link
                            to="/services/girls"
                            className="group relative overflow-hidden rounded-[2rem] border border-[#b58fa2]/20 bg-white/80 p-10 shadow-[0_25px_70px_rgba(124,85,105,.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-3"
                        >
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#b58fa2]/10 blur-2xl" />

                            <div className="relative">
                                <div className="mb-5 text-5xl">
                                    💇‍♀️
                                </div>

                                <h2 className="font-serif text-3xl font-semibold text-[#22181d]">
                                    Women's Beauty Services
                                </h2>

                                <p className="mt-4 leading-7 text-[#6f6269]">
                                    Bridal makeup, party makeup, hair styling,
                                    hair colour, hair spa, smoothening,
                                    manicure, pedicure and complete beauty
                                    treatments in Gumkhal.
                                </p>

                                <span className="mt-8 inline-flex items-center font-semibold text-[#7c5569] transition group-hover:gap-2">
                                    Explore Women's Services →
                                </span>
                            </div>
                        </Link>


                        {/* Boys */}
                        <Link
                            to="/services/boys"
                            className="group relative overflow-hidden rounded-[2rem] border border-[#b58fa2]/20 bg-white/80 p-10 shadow-[0_25px_70px_rgba(124,85,105,.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-3"
                        >
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d5b48c]/10 blur-2xl" />

                            <div className="relative">
                                <div className="mb-5 text-5xl">
                                    💈
                                </div>

                                <h2 className="font-serif text-3xl font-semibold text-[#22181d]">
                                    Men's Grooming Services
                                </h2>

                                <p className="mt-4 leading-7 text-[#6f6269]">
                                    Men's haircuts, fade hairstyles, beard
                                    styling, hair colouring, modern hairstyles
                                    and professional grooming services in
                                    Gumkhal.
                                </p>

                                <span className="mt-8 inline-flex items-center font-semibold text-[#7c5569] transition group-hover:gap-2">
                                    Explore Men's Services →
                                </span>
                            </div>
                        </Link>

                    </div>


                    {/* SEO Text */}
                    <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#b58fa2]/20 bg-white/70 p-8 text-center shadow-lg backdrop-blur-xl">
                        <h2 className="font-serif text-2xl font-semibold text-[#22181d]">
                            Your Trusted Hair & Beauty Salon Near Gumkhal
                        </h2>

                        <p className="mt-4 leading-8 text-[#6f6269]">
                            Nisha Hair Salon provides professional salon
                            services with modern techniques, premium products,
                            and personalised care. Whether you need a bridal
                            makeover, stylish haircut, hair treatment, or
                            grooming service, our experienced team delivers
                            quality beauty solutions for every occasion.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Services;