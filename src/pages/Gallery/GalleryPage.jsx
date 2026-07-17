import { Helmet } from "react-helmet-async";

import SEO from "../../components/SEO/SEO";

import GalleryHero from "./sections/GalleryHero";
import GalleryGrid from "./sections/GalleryGrid";
import GalleryCTA from "./sections/GalleryCTA";

export default function GalleryPage() {

    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",

        "@id": "https://nisha-hair-salon.netlify.app/gallery",

        "name": "Nisha Hair Salon Gallery",

        "headline": "Gallery of Bridal Makeup, Hairstyles & Beauty Services",

        "description":
            "Browse our gallery featuring bridal makeup, party makeup, hairstyles, hair colouring, hair spa, keratin treatment, facials, men's grooming, jewellery rental and lehenga rental at Nisha Hair Salon & Beauty Parlour in Gumkhal, Uttarakhand.",

        "url": "https://nisha-hair-salon.netlify.app/gallery",

        "inLanguage": "en-IN",

        "isPartOf": {
            "@id": "https://nisha-hair-salon.netlify.app/#website"
        },

        "mainEntity": {
            "@id": "https://nisha-hair-salon.netlify.app/#business"
        },

        "about": {
            "@type": "HairSalon",
            "name": "Nisha Hair Salon & Beauty Parlour"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,

                "name": "Home",

                "item": "https://nisha-hair-salon.netlify.app/"
            },
            {
                "@type": "ListItem",
                "position": 2,

                "name": "Gallery",

                "item": "https://nisha-hair-salon.netlify.app/gallery"
            }
        ]
    };

    return (
        <>
            <SEO
                title="Gallery | Bridal Makeup, Hairstyles & Hair Transformations | Nisha Hair Salon"
                description="Explore the official gallery of Nisha Hair Salon & Beauty Parlour in Gumkhal. Discover bridal makeup, party makeup, hairstyles, hair colour transformations, keratin treatment, hair spa, facials, men's grooming, jewellery rental and lehenga rental."
                canonical="https://nisha-hair-salon.netlify.app/gallery"
            />

            <Helmet>

                <script type="application/ld+json">
                    {JSON.stringify(collectionSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

            </Helmet>

            <GalleryHero />

            <GalleryGrid />

            <GalleryCTA />
        </>
    );
}