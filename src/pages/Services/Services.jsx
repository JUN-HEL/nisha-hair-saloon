import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";

const Services = () => {
    return (
        <>
            <SEO
                title="Salon Services | Nisha Hair Salon"
                description="Explore Nisha Hair Salon services including haircuts, bridal makeup, facials, hair spa, hair coloring, keratin treatment, men's grooming and beauty services."
                canonical="https://nisha-hair-salon.netlify.app/services"
            />

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

                    <Link
                        to="/services/girls"
                        className="group rounded-[2rem] bg-white p-10 shadow-xl transition hover:-translate-y-2"
                    >
                        <h2 className="text-3xl font-bold text-zinc-900">
                            Girls Services
                        </h2>

                        <p className="mt-3 text-zinc-600">
                            Bridal makeup, hairstyling, facials, hair treatments,
                            jewellery rental and beauty services.
                        </p>

                        <span className="mt-6 inline-block font-semibold text-rose-600">
                            View Girls Services →
                        </span>
                    </Link>


                    <Link
                        to="/services/boys"
                        className="group rounded-[2rem] bg-white p-10 shadow-xl transition hover:-translate-y-2"
                    >
                        <h2 className="text-3xl font-bold text-zinc-900">
                            Boys Services
                        </h2>

                        <p className="mt-3 text-zinc-600">
                            Haircuts, beard styling, grooming, hair treatments
                            and men's salon services.
                        </p>

                        <span className="mt-6 inline-block font-semibold text-rose-600">
                            View Boys Services →
                        </span>
                    </Link>

                </div>
            </section>
        </>
    );
};

export default Services;