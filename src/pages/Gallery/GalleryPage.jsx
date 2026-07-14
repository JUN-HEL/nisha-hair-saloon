import GalleryHero from "./sections/GalleryHero";
import GalleryGrid from "./sections/GalleryGrid";
import GalleryCTA from "./sections/GalleryCTA";
import SEO from "../../components/SEO/SEO";

export default function GalleryPage() {
    return (
        <>
            <SEO
                title="Gallery | Nisha Hair Salon"
                description="Browse our gallery showcasing hairstyles, bridal makeup, hair transformations, beauty services, jewellery and lehenga collections."
                canonical="https://nisha-hair-salon.netlify.app/gallery"
            />
            <GalleryHero />
            <GalleryGrid />
            <GalleryCTA />
        </>
    );
}