import { GirlsServices } from "../../../data/Services";
import Card from "./Card";

const Girls = () => {
    const featured = GirlsServices.filter(item => item.featured);

    return (
        <section className="section-padding relative overflow-hidden">

            {/* Background Glow */}
            <div
                className="
                absolute
                -top-20
                left-0
                h-80
                w-80
                rounded-full
                bg-[#d5b48c]/20
                blur-3xl
                "
            />

            <div
                className="
                absolute
                right-0
                top-40
                h-96
                w-96
                rounded-full
                bg-[#b58fa2]/20
                blur-3xl
                "
            />


            {/* Hero */}
            <div className="container-custom relative">

                <div
                    className="
                    glass-card
                    rounded-[2.5rem]
                    p-8
                    md:p-12
                    "
                >

                    <div className="max-w-xl">

                        <p
                            className="
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-[#7c5569]
                            "
                        >
                            Beauty Services
                        </p>


                        <h1
                            className="
                            heading-lg
                            mt-2
                            "
                        >

                            <span className="gradient-text">
                                Shine your hair
                            </span>
                        </h1>


                        <p
                            className="
                            text-muted
                            mt-5
                            "
                        >
                            Premium hair, makeup, skin and bridal services
                            designed to enhance your natural beauty.
                        </p>


                        <button
                            className="
                            mt-8
                            gradient-bg
                            rounded-full
                            px-8
                            py-3
                            text-white
                            shadow-lg
                            transition
                            hover:scale-105
                            "
                        >
                            Explore Services
                        </button>

                    </div>



                    {/* Featured */}
                    <div
                        className="
                        mt-12
                        grid
                        gap-6
                        md:grid-cols-3
                        "
                    >

                        {featured.slice(0, 3).map(service => (
                            <Card
                                key={service.id}
                                data={service}
                            />
                        ))}

                    </div>


                </div>

            </div>



            {/* All Services */}

            <div className="container-custom relative mt-20">


                <div className="flex items-end justify-between">

                    <div>

                        <p
                            className="
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-[#b58fa2]
                            "
                        >
                            Collection
                        </p>


                        <h2
                            className="
                            heading-lg
                            mt-3
                            "
                        >
                            Beauty
                            <span className="gradient-text">
                                Essentials
                            </span>
                        </h2>

                    </div>

                </div>



                <div
                    className="
                    mt-10
                    grid
                    gap-7
                    sm:grid-cols-2
                    lg:grid-cols-4
                    "
                >

                    {GirlsServices.map(service => (
                        <Card
                            key={service.id}
                            data={{
                                ...service,
                                name:
                                    service.name
                                        .replace("Hair ", "")
                                        .replace("Bridal ", "")
                                        .replace("Premium ", "")
                            }}
                        />
                    ))}

                </div>


            </div>


        </section>
    );
};

export default Girls;