import Girls from "./sections/Girls";
import Boys from "./sections/Boys";
import SEO from "../../components/SEO/SEO";

const Services = () => {
    return (
        <>
            <SEO
                title="Salon Services | Nisha Hair Salon"
                description="Explore our salon services including haircuts, bridal makeup, facials, hair spa, hair coloring, keratin treatment, men's grooming, jewellery rental and lehenga rental."
                canonical="https://nisha-hair-salon.netlify.app/services"
            />g
            <Girls />
            <Boys />
        </>
    );
};

export default Services;