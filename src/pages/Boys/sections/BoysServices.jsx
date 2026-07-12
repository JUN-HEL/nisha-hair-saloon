import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles, ArrowRight } from "lucide-react";
import { BoysServices as boysServicesData } from "../../../data/Services";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


export default function BoysServices() {

    const featuredServices = boysServicesData.filter(
        (service) => service.featured
    );


    return (

        <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">

            <section
                className="
                    mx-auto
                    max-w-7xl
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-[#0b0b0b]
                    p-4
                    shadow-[0_20px_60px_rgba(0,0,0,.6)]
                    sm:p-10
                "
            >

                <div
                    className="
                        grid
                        gap-10
                        lg:grid-cols-2
                        lg:items-center
                    "
                >


                    {/* CONTENT */}

                    <div>

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-[#d4af37]
                            "
                        >

                            <Sparkles size={15} />

                            Men's Grooming

                        </div>



                        <h2
                            className="
                                mt-5
                                text-3xl
                                font-black
                                leading-tight
                                text-white
                                sm:text-5xl
                            "
                        >

                            Premium Haircuts
                            <br />

                            Beard Styling &
                            <br />

                            Modern Grooming

                        </h2>



                        <p
                            className="
                                mt-5
                                text-sm
                                leading-6
                                text-white/60
                                sm:text-base
                            "
                        >

                            Professional barber services including
                            stylish haircuts, beard shaping and complete
                            grooming treatments for modern men.

                        </p>




                        <div className="mt-7 space-y-3">

                            {[
                                "Premium Haircuts",
                                "Beard Sculpting",
                                "Hair Styling",
                                "Complete Grooming"
                            ].map((item, index) => (

                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        text-white/80
                                    "
                                >

                                    <span
                                        className="
                                            flex
                                            h-7
                                            w-7
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#d4af37]
                                            text-xs
                                            font-bold
                                            text-black
                                        "
                                    >
                                        {index + 1}
                                    </span>

                                    {item}

                                </div>

                            ))}

                        </div>




                        <a
                            href="/services"
                            className="
                                mt-8
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-gradient-to-r
                                from-[#8b6508]
                                via-[#d4af37]
                                to-[#f5d76e]
                                px-6
                                py-3
                                font-bold
                                text-black
                            "
                        >

                            Explore Services

                            <ArrowRight size={17} />

                        </a>


                    </div>





                    {/* CARDS */}

                    <div
                        className="
                            w-full
                            max-w-full
                            overflow-hidden
                        "
                    >

                        <Swiper

                            className="services-swiper"

                            modules={[
                                Autoplay,
                                Pagination
                            ]}

                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}

                            pagination={{
                                clickable: true
                            }}


                            slidesPerView={2}

                            spaceBetween={10}


                            breakpoints={{

                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 16
                                },

                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                }

                            }}

                        >



                            {featuredServices.map((service) => (


                                <SwiperSlide
                                    key={service.id}
                                    className="!h-auto"
                                >


                                    <article
                                        className="
                                            h-full
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/5
                                        "
                                    >


                                        <div
                                            className="
                                                h-28
                                                overflow-hidden
                                                sm:h-48
                                            "
                                        >

                                            <img

                                                src={service.image}

                                                alt={`${service.name} men's grooming service`}

                                                loading="lazy"

                                                className="
                                                    h-full
                                                    w-full
                                                    object-cover
                                                "

                                            />

                                        </div>





                                        <div
                                            className="
                                                p-3
                                                sm:p-5
                                            "
                                        >


                                            <h3
                                                className="
                                                    line-clamp-2
                                                    text-sm
                                                    font-bold
                                                    text-white
                                                    sm:text-lg
                                                "
                                            >

                                                {service.name}

                                            </h3>




                                            <div
                                                className="
                                                    mt-3
                                                    flex
                                                    items-center
                                                    justify-between
                                                "
                                            >

                                                <span
                                                    className="
                                                        text-sm
                                                        font-black
                                                        text-[#d4af37]
                                                        sm:text-xl
                                                    "
                                                >

                                                    ₹{service.price}

                                                </span>


                                            </div>


                                        </div>


                                    </article>


                                </SwiperSlide>


                            ))}


                        </Swiper>


                    </div>


                </div>


            </section>


        </AnimatedSection>

    );
}