import GirlsHero from "./sections/hero/index";
import GirlServices from "./sections/GirlServices";
import BridalHighlight from "./sections/BridalHighlight";
import GirlsReels from "./sections/GirlsReels";
import GirlsGallery from "./sections/GirlsGallery";
import GirlsCTA from "./sections/GirlsCTA";

import SEO from "../../components/SEO/SEO";

export default function GirlsPage() {
    return (
        <>
            <SEO
                title="Beauty Parlour & Women's Salon | Nisha Hair Salon"
                description="Women's haircuts, hairstyling, bridal makeup, facials, cleanup, hair spa, hair coloring, keratin treatment and beauty services in Gumkhal."
                canonical="https://nisha-hair-salon.netlify.app/girls"
            />
            <GirlsHero />
            <GirlServices />
            <BridalHighlight />
            {/* <GirlsReels /> */}
            <GirlsGallery />
            <GirlsCTA />
        </>
    );
}