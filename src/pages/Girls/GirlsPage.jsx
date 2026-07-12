import GirlsHero from "./sections/hero/index";
import GirlServices from "./sections/GirlServices";
import BridalHighlight from "./sections/BridalHighlight";
import GirlsReels from "./sections/GirlsReels";
import GirlsGallery from "./sections/GirlsGallery";
import GirlsCTA from "./sections/GirlsCTA";


export default function GirlsPage() {
    return (
        <>
            <GirlsHero />
            <GirlServices />
            <BridalHighlight />
            <GirlsReels />
            <GirlsGallery />
            <GirlsCTA />
        </>
    );
}