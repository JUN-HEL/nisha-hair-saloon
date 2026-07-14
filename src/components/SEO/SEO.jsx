import { Helmet } from "react-helmet-async";

export default function SEO({
    title,
    description,
    canonical,
    image = "https://nisha-hair-salon.netlify.app/images/seo-cover.jpg",
}) {
    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />

            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Nisha Hair Salon" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}