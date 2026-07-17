import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Sparkles } from "lucide-react";
import SEO from "../../components/SEO/SEO";


const serviceCategories = [
    {
        title: "Women's Beauty Services",
        subtitle: "Beauty & Makeup",
        description:
            "Bridal makeup, party makeup, hair styling, hair colouring, hair spa, smoothening, manicure, pedicure and complete beauty treatments in Gumkhal.",
        link: "/services/girls",
        icon: Sparkles,
        color: "from-[#7c5569] to-[#d5b48c]",
        tags: [
            "Bridal",
            "Hair Spa",
            "Makeup"
        ]
    },

    {
        title: "Men's Grooming Services",
        subtitle: "Hair & Grooming",
        description:
            "Men's haircuts, fade hairstyles, beard styling, hair colouring, modern hairstyles and professional grooming services in Gumkhal.",
        link: "/services/boys",
        icon: Scissors,
        color: "from-[#202020] to-[#4a4a4a]",
        tags: [
            "Haircut",
            "Beard",
            "Styling"
        ]
    }
];


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

                    "url":
                        "https://nisha-hair-salon.netlify.app",

                    "image":
                        "https://nisha-hair-salon.netlify.app/images/seo-cover.jpg",


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

                        "name":
                            "Hair and Beauty Services",


                        "itemListElement": [

                            {
                                "@type": "Offer",

                                "price": "14999",

                                "priceCurrency": "INR",

                                "itemOffered": {

                                    "@type": "Service",

                                    "name":
                                        "Bridal Makeup Service",

                                    "areaServed":
                                        "Gumkhal"
                                }
                            },


                            {
                                "@type": "Offer",

                                "price": "50",

                                "priceCurrency": "INR",

                                "itemOffered": {

                                    "@type": "Service",

                                    "name":
                                        "Men's Haircut Service",

                                    "areaServed":
                                        "Gumkhal"
                                }
                            }

                        ]
                    }

                }}
            />



            <section
                className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-[#fffaf6]
                via-white
                to-[#f8eef3]
                px-4
                py-20
                sm:px-6
                lg:px-8
                "
            >


                {/* Background Glow */}

                <div
                    className="
                    absolute
                    -top-20
                    -left-20
                    h-72
                    w-72
                    rounded-full
                    bg-[#b58fa2]/20
                    blur-[120px]
                    "
                />


                <div
                    className="
                    absolute
                    bottom-0
                    right-0
                    h-80
                    w-80
                    rounded-full
                    bg-[#d5b48c]/20
                    blur-[140px]
                    "
                />



                <div className="relative mx-auto max-w-6xl">



                    {/* Header */}


                    <div className="mx-auto max-w-3xl text-center">


                        <span
                            className="
                            inline-flex
                            rounded-full
                            bg-[#7c5569]/10
                            px-5
                            py-2
                            text-sm
                            font-medium
                            text-[#7c5569]
                            "
                        >
                            ✨ Premium Salon Services
                        </span>



                        <h1
                            className="
                            mt-6
                            font-serif
                            text-4xl
                            font-bold
                            leading-tight
                            text-[#22181d]
                            md:text-5xl
                            "
                        >

                            Professional Hair & Beauty Services in{" "}

                            <span
                                className="
                                bg-gradient-to-r
                                from-[#7c5569]
                                to-[#d5b48c]
                                bg-clip-text
                                text-transparent
                                italic
                                "
                            >
                                Gumkhal
                            </span>

                        </h1>



                        <p
                            className="
                            mt-6
                            text-lg
                            leading-8
                            text-[#6f6269]
                            "
                        >

                            Discover premium beauty treatments at{" "}

                            <strong className="text-[#7c5569]">
                                Nisha Hair Salon
                            </strong>

                            .
                            From bridal makeup and women's hairstyling to
                            men's haircuts, beard grooming, hair colouring and
                            professional salon treatments.

                        </p>


                    </div>




                    {/* Category Cards */}


                    <div
                        className="
                        mt-16
                        grid
                        gap-8
                        md:grid-cols-2
                        "
                    >


                        {serviceCategories.map((service) => {


                            const Icon = service.icon;


                            return (

                                <article
                                    key={service.title}

                                    className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-[#b58fa2]/20
                                    bg-white/80
                                    p-10
                                    backdrop-blur-xl
                                    shadow-[0_25px_70px_rgba(124,85,105,.10)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-3
                                    hover:shadow-[0_35px_90px_rgba(124,85,105,.18)]
                                    "
                                >


                                    {/* Top Gradient */}

                                    <div
                                        className={`
                                        absolute
                                        left-0
                                        top-0
                                        h-2
                                        w-full
                                        bg-gradient-to-r
                                        ${service.color}
                                        `}
                                    />



                                    <div
                                        className="
                                        flex
                                        items-start
                                        justify-between
                                        "
                                    >

                                        <div>

                                            <p
                                                className="
                                                text-sm
                                                font-semibold
                                                uppercase
                                                tracking-[0.3em]
                                                text-[#7c5569]
                                                "
                                            >
                                                {service.subtitle}
                                            </p>


                                            <h2
                                                className="
                                                mt-3
                                                font-serif
                                                text-3xl
                                                font-bold
                                                text-[#22181d]
                                                "
                                            >
                                                {service.title}
                                            </h2>

                                        </div>



                                        <div
                                            className={`
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-gradient-to-br
                                            ${service.color}
                                            text-white
                                            shadow-lg
                                            `}
                                        >

                                            <Icon size={28} />

                                        </div>


                                    </div>




                                    <p
                                        className="
                                        mt-6
                                        leading-8
                                        text-[#6f6269]
                                        "
                                    >
                                        {service.description}
                                    </p>




                                    <div
                                        className="
                                        mt-6
                                        flex
                                        flex-wrap
                                        gap-2
                                        "
                                    >

                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="
                                                rounded-full
                                                bg-[#f8eef4]
                                                px-4
                                                py-1.5
                                                text-sm
                                                text-[#7c5569]
                                                "
                                            >
                                                {tag}
                                            </span>
                                        ))}

                                    </div>





                                    <Link
                                        to={service.link}

                                        className="
                                        mt-8
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-[#22181d]
                                        px-7
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition
                                        hover:bg-[#7c5569]
                                        "
                                    >

                                        Explore Services


                                        <ArrowRight
                                            size={18}
                                            className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                            "
                                        />

                                    </Link>



                                </article>

                            );

                        })}


                    </div>





                    {/* SEO Content */}


                    <div
                        className="
                        mx-auto
                        mt-20
                        max-w-4xl
                        rounded-[2rem]
                        border
                        border-[#b58fa2]/20
                        bg-white/70
                        p-8
                        text-center
                        shadow-lg
                        backdrop-blur-xl
                        "
                    >

                        <h2
                            className="
                            font-serif
                            text-2xl
                            font-semibold
                            text-[#22181d]
                            "
                        >
                            Your Trusted Hair & Beauty Salon Near Gumkhal
                        </h2>



                        <p
                            className="
                            mt-4
                            leading-8
                            text-[#6f6269]
                            "
                        >

                            Nisha Hair Salon provides professional salon
                            services with modern techniques, premium products
                            and personalised care. Whether you need a bridal
                            makeover, stylish haircut, hair treatment or
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