import BoysHero from "./sections/BoysHero";
import BoysServices from "./sections/BoysServices";
import BoysReels from "./sections/BoysReels";
import BoysGallery from "./sections/BoysGallery";
import BoysCTA from "./sections/BoysCTA";

export default function BoysPage() {
    return (
        <>
            <BoysHero />
            <BoysServices />
            <BoysReels />
            <BoysGallery />
            <BoysCTA />
        </>
    );
}