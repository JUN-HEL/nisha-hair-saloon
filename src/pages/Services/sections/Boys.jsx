import { BoysServices } from "../../../data/Services";
import SEO from "../../../components/SEO/SEO";
import Card from "./Card";

const Boys = () => {

    const featured = BoysServices.filter(item => item.featured);

    const boysServiceSchema = {
        "@context": "https://schema.org",
        "@type": [
            "BeautySalon",
            "LocalBusiness"
        ],
        "name": "Nisha Hair Salon",
        "url": "https://nisha-hair-salon.netlify.app",
        "image": "https://nisha-hair-salon.netlify.app/images/seo-cover.jpg",

        "description":
            "Professional men's haircuts, beard styling, hair colouring and grooming services at Nisha Hair Salon Gumkhal.",

        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gumkhal",
            "addressRegion": "Uttarakhand",
            "addressCountry": "IN"
        },

        "priceRange": "59 - ₹4999",

        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Men's Grooming Services",

            "itemListElement": BoysServices.map((service) => ({
                "@type": "Offer",

                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "INR",
                    "minPrice": service.lowPrice,
                    "maxPrice": service.highPrice
                },
                "itemOffered": {
                    "@type": "Service",
                    "name": service.name,
                    "description": service.description,
                    "areaServed": "Gumkhal"
                }
            }))
        },

        "sameAs": [
            "https://local.google.com/place?placeid=ChIJi2WsKJedCTkR6fLVEOJEPiE&utm_medium=noren&utm_source=gbp&utm_campaign=2026"
        ]
    };


    return (
        <>
            <SEO
                title="Men's Haircut & Grooming Services in Gumkhal | Nisha Hair Salon"
                description="Book professional men's haircuts, fade hairstyles, beard grooming, hair colour and modern styling services at Nisha Hair Salon Gumkhal."
                canonical="https://nisha-hair-salon.netlify.app/services/boys"
                schema={boysServiceSchema}
            />



            <section
                className="
                relative
                overflow-hidden
                bg-[#171318]
                text-white
                section-padding
            "
            >

                {/* Dark Glow */}

                <div
                    className="
                    absolute
                    -top-20
                    right-0
                    h-96
                    w-96
                    rounded-full
                    bg-[#d5b48c]/20
                    blur-3xl
                "
                />


                <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    h-80
                    w-80
                    rounded-full
                    bg-[#7c5569]/20
                    blur-3xl
                "
                />



                {/* Hero */}

                <div className="container-custom relative">


                    <div
                        className="
                        glass-card-dark
                        rounded-[2.5rem]
                        p-8
                        md:p-12
                    "
                    >


                        <div className="max-w-xl">

                            <p
                                className="
                                text-sm
                                uppercase
                                tracking-[0.3em]
                                text-[#d5b48c]
                            "
                            >
                                Men's Grooming
                            </p>


                            <h1
                                className="
                                heading-xl
                                mt-4
                                text-white
                            "
                            >
                                Sharp style.
                                <br />

                                <span className="gradient-text-dark">
                                    Strong confidence.
                                </span>

                            </h1>


                            <p
                                className="
                                mt-5
                                max-w-md
                                leading-relaxed
                                text-white/60
                            "
                            >
                                Premium haircuts, beard styling and grooming
                                experiences designed for modern men.
                            </p>


                            <button
                                className="
                                mt-8
                                rounded-full
                                gradient-bg-dark
                                px-8
                                py-3
                                text-white
                                shadow-hero-dark
                                transition
                                hover:scale-105
                            "
                            >
                                Explore Services
                            </button>


                        </div>





                        {/* Featured Cards */}

                        <div
                            className="
                            mt-12
                            grid
                            grid-cols-2
                            gap-3
                            sm:gap-6
                            lg:grid-cols-3
                        "
                        >

                            {featured.slice(0, 3).map(service => (

                                <Card
                                    key={service.id}
                                    data={service}
                                />

                            ))}

                        </div>


                    </div>

                </div>





                {/* All Services */}


                <div className="container-custom relative mt-20">


                    <p
                        className="
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-[#b58fa2]
                    "
                    >
                        Grooming Collection
                    </p>



                    <h2
                        className="
                        heading-lg
                        mt-3
                    "
                    >
                        Fresh cuts.
                        <br />

                        <span className="gradient-text-dark">
                            Premium style.
                        </span>

                    </h2>




                    <div
                        className="
                        mt-10
                        grid
                        grid-cols-2
                        gap-3
                        sm:gap-6
                        lg:grid-cols-3
                    "
                    >

                        {BoysServices.map(service => (

                            <Card
                                key={service.id}
                                data={{
                                    ...service,
                                    name:
                                        service.name
                                            .replace("Premium ", "")
                                            .replace("Complete ", "")
                                            .replace("Men's ", "")
                                }}
                            />

                        ))}


                    </div>


                </div>


            </section>
        </>
    );
};


export default Boys;