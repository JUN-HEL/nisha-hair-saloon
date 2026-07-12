import { BoysServices } from "../../../data/services";
import Card from "./Card";

const Boys = () => {

    const featured = BoysServices.filter(item => item.featured);


    return (
        <section
            className="
            relative
            overflow-hidden
            bg-[#171318]
            text-white
            section-padding
            "
        >

            {/* Dark Glow */}
            <div
                className="
                absolute
                -top-20
                right-0
                h-96
                w-96
                rounded-full
                bg-[#d5b48c]/20
                blur-3xl
                "
            />

            <div
                className="
                absolute
                bottom-0
                left-0
                h-80
                w-80
                rounded-full
                bg-[#7c5569]/20
                blur-3xl
                "
            />


            {/* Hero */}
            <div className="container-custom relative">


                <div
                    className="
                    glass-card-dark
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
                            text-[#d5b48c]
                            "
                        >
                            Men's Grooming
                        </p>


                        <h1
                            className="
                            heading-xl
                            mt-4
                            text-white
                            "
                        >
                            Sharp style.
                            <br />

                            <span className="gradient-text-dark">
                                Strong confidence.
                            </span>

                        </h1>


                        <p
                            className="
                            mt-5
                            leading-relaxed
                            text-white/60
                            max-w-md
                            "
                        >
                            Premium haircuts, beard styling and grooming
                            experiences designed for modern men.
                        </p>


                        <button
                            className="
                            mt-8
                            gradient-bg-dark
                            rounded-full
                            px-8
                            py-3
                            text-white
                            shadow-hero-dark
                            transition
                            hover:scale-105
                            "
                        >
                            Explore Services
                        </button>


                    </div>



                    {/* Featured Cards */}

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


                <p
                    className="
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-[#b58fa2]
                    "
                >
                    Grooming Collection
                </p>


                <h2
                    className="
                    heading-lg
                    mt-3
                    "
                >
                    Fresh cuts.
                    <br />

                    <span className="gradient-text-dark">
                        Premium style.
                    </span>

                </h2>



                <div
                    className="
                    mt-10
                    grid
                    gap-7
                    sm:grid-cols-2
                    lg:grid-cols-3
                    "
                >

                    {BoysServices.map(service => (
                        <Card
                            key={service.id}
                            data={{
                                ...service,
                                name:
                                    service.name
                                        .replace("Premium ", "")
                                        .replace("Complete ", "")
                                        .replace("Men's ", "")
                            }}
                        />
                    ))}

                </div>


            </div>


        </section>
    );
};

export default Boys;