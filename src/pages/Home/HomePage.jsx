import Hero from "./sections/Hero";
import AudienceSplit from "./sections/AudienceSplit";
import PopularServices from "./sections/PopularServices";
import ReelsPreview from "./sections/ReelsPreview";
import WhyChooseUs from "./sections/WhyChooseUs";
import GalleryPreview from "./sections/GalleryPreview";
import LocationPreview from "./sections/LocationPreview";
import FinalCTA from "./sections/FinalCTA";

export default function HomePage() {
    return (
        <>
            <Hero />
            <PopularServices />
            <ReelsPreview />
            <WhyChooseUs />
            <GalleryPreview />
            <LocationPreview />
        </>
    );
}