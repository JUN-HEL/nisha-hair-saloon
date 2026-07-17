import { Helmet } from "react-helmet-async";

export default function SEO({
    title = "Nisha Hair Salon & Beauty Parlour | Best Hair Salon",
    description = "Nisha Hair Salon offers professional haircuts, hairstyling, bridal makeup, facials and beauty services.",
    canonical = "https://nisha-hair-salon.netlify.app/",
    image = "https://nisha-hair-salon.netlify.app/images/seo-cover.jpg",
    schema,
    keywords = "hair salon, beauty parlour, haircut, hairstyling, facial, bridal makeup, Nisha Hair Salon",
}) {
    return (
        <Helmet>

            {/* Basic SEO */}
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                name="robots"
                content="index, follow, max-image-preview:large"
            />

            <meta
                name="language"
                content="English"
            />

            <meta
                name="theme-color"
                content="#000000"
            />

            {/* Canonical */}
            {canonical && (
                <link
                    rel="canonical"
                    href={canonical}
                />
            )}

            {/* Favicon */}
            <link
                rel="icon"
                href="/favicon.ico"
            />

            {/* Performance */}
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
            />

            {/* Open Graph */}
            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:site_name"
                content="Nisha Hair Salon & Beauty Parlour"
            />

            <meta
                property="og:locale"
                content="en_IN"
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:url"
                content={canonical}
            />

            <meta
                property="og:image"
                content={image}
            />

            <meta
                property="og:image:alt"
                content="Nisha Hair Salon & Beauty Parlour"
            />


            {/* Twitter Card */}
            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

        </Helmet>
    );
}