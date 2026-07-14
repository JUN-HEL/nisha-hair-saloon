import BoysHero from "./sections/BoysHero";
import BoysServices from "./sections/BoysServices";
import BoysReels from "./sections/BoysReels";
import BoysGallery from "./sections/BoysGallery";
import BoysCTA from "./sections/BoysCTA";
import SEO from "../../components/SEO/SEO";


export default function BoysPage() {
    return (
        <>
            <SEO
                title="Men's Haircuts & Grooming | Nisha Hair Salon"
                description="Professional men's haircuts, beard styling, hair spa, hair coloring, grooming and styling services in Gumkhal."
                canonical="https://nisha-hair-salon.netlify.app/boys"
            />
            <BoysHero />
            <BoysServices />
            <BoysReels />
            <BoysGallery />
            <BoysCTA />
        </>
    );
}