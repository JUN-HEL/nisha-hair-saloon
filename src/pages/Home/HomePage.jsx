import Hero from "./sections/Hero";
import AudienceSplit from "./sections/AudienceSplit";
import PopularServices from "./sections/PopularServices";
import ReelsPreview from "./sections/ReelsPreview";
import WhyChooseUs from "./sections/WhyChooseUs";
import GalleryPreview from "./sections/GalleryPreview";
import LocationPreview from "./sections/LocationPreview";
import FinalCTA from "./sections/FinalCTA";
import Testimonials from "./sections/Testimonials";
import SEO from "../../components/SEO/SEO";

export default function HomePage() {
    return (
        <><SEO
            title="Nisha Hair Salon | Best Hair Salon & Beauty Parlour in Gumkhal"
            description="Nisha Hair Salon in Gumkhal offers haircuts, hairstyling, bridal makeup, facials, hair spa, hair coloring, keratin treatment, men's grooming, jewellery rental and lehenga rental."
            canonical="https://nisha-hair-salon.netlify.app/"
        />
            <Hero />
            <PopularServices />
            <AudienceSplit />
            {/* <ReelsPreview /> */}
            <WhyChooseUs />
            <GalleryPreview />
            <Testimonials />
            <LocationPreview />
        </>
    );
}