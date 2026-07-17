import AboutHero from "./sections/AboutHero";
// import OurStory from "./sections/OurStory";
import WhyChooseUs from "./sections/WhyChooseUs";
// import Statistics from "./sections/Statistics";
import TeamSection from "./sections/TeamSection";
// import Values from "./sections/Values";
// import AboutCTA from "./sections/AboutCTA";
import SEO from "../../components/SEO/SEO";


const AboutPage = () => {
    return (
        <>

            <SEO
                title="About Nisha Hair Salon & Beauty Parlour"
                description="Learn about Nisha Hair Salon & Beauty Parlour, our experienced team and our commitment to quality hair, beauty and bridal services in Gumkhal."
                canonical="https://nisha-hair-salon.netlify.app/about"
            />
            <AboutHero />
            <WhyChooseUs />
            <TeamSection />

        </>
    );
};

export default AboutPage;