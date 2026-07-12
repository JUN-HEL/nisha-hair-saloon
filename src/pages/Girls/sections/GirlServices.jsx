import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles, ArrowRight } from "lucide-react";
import { GirlsServices as girlsServicesData } from "../../../data/services";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


export default function GirlsServices() {


    const featuredServices = girlsServicesData.filter(
        (service) => service.featured
    );


    return (

        <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">


            <div
                className="
                mx-auto
                max-w-7xl
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/50
                bg-white/60
                p-8
                shadow-[0_20px_60px_rgba(70,40,60,0.1)]
                backdrop-blur-xl
                lg:p-12
                "
            >


                <div
                    className="
                    grid
                    items-center
                    gap-12
                    lg:grid-cols-2
                    "
                >


                    {/* LEFT CONTENT */}


                    <div>


                        <span
                            className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-rose-50
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-rose-700
                            "
                        >

                            <Sparkles size={15} />

                            Beauty Services

                        </span>





                        <h2
                            className="
                            mt-5
                            text-4xl
                            font-bold
                            leading-tight
                            text-zinc-900
                            lg:text-5xl
                            "
                        >

                            Glow with

                            <br />

                            confidence

                        </h2>





                        <p
                            className="
                            mt-5
                            max-w-lg
                            text-zinc-600
                            "
                        >

                            Premium hair, makeup, skincare, and bridal
                            services tailored to bring out your best look.

                        </p>






                        <div className="mt-8 space-y-3">


                            {[
                                "Hair & Styling",
                                "Skin Treatments",
                                "Bridal Makeup",
                                "Beauty Packages",
                            ].map((item, index) => (

                                <div
                                    key={item}
                                    className="
                                    flex
                                    items-center
                                    gap-3
                                    text-zinc-800
                                    "
                                >

                                    <span
                                        className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#7c5569]
                                        text-sm
                                        text-white
                                        "
                                    >

                                        0{index + 1}

                                    </span>


                                    {item}


                                </div>

                            ))}


                        </div>






                        {/* BUTTON */}


                        <div className="mt-8">


                            <a
                                href="/services"
                                className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-gradient-to-r
                                from-[#7c5569]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                px-7
                                py-3.5
                                font-semibold
                                text-white
                                shadow-[0_15px_40px_rgba(124,85,105,.25)]
                                transition
                                hover:-translate-y-1
                                hover:shadow-xl
                                "
                            >

                                View All Services

                                <ArrowRight size={18} />

                            </a>


                        </div>


                    </div>








                    {/* RIGHT SLIDER */}


                    <div className="w-full">


                        <Swiper

                            modules={[
                                Autoplay,
                                Pagination
                            ]}


                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}


                            pagination={{
                                clickable: true,
                            }}


                            spaceBetween={20}


                            slidesPerView={1}


                            breakpoints={{

                                640: {
                                    slidesPerView: 2,
                                },


                                1200: {
                                    slidesPerView: 2,
                                },

                            }}

                        >




                            {featuredServices.map((service) => (


                                <SwiperSlide
                                    key={service.id}
                                >


                                    <div
                                        className="
                                        group
                                        overflow-hidden
                                        rounded-[2rem]
                                        bg-white
                                        shadow-sm
                                        transition
                                        duration-300
                                        hover:-translate-y-2
                                        hover:shadow-xl
                                        "
                                    >


                                        <div
                                            className="
                                            h-56
                                            overflow-hidden
                                            "
                                        >

                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="
                                                h-full
                                                w-full
                                                object-cover
                                                transition
                                                duration-700
                                                group-hover:scale-110
                                                "
                                            />

                                        </div>





                                        <div className="p-5">


                                            <h3
                                                className="
                                                text-xl
                                                font-bold
                                                text-zinc-900
                                                "
                                            >

                                                {service.name}

                                            </h3>





                                            <p
                                                className="
                                                mt-2
                                                text-sm
                                                text-zinc-500
                                                "
                                            >

                                                {service.description}

                                            </p>






                                            <div
                                                className="
                                                mt-4
                                                flex
                                                items-center
                                                justify-between
                                                "
                                            >


                                                <span
                                                    className="
                                                    text-xl
                                                    font-bold
                                                    text-[#7c5569]
                                                    "
                                                >

                                                    ₹{service.price}

                                                </span>




                                                <span
                                                    className="
                                                    text-sm
                                                    text-zinc-400
                                                    "
                                                >

                                                    {service.duration}

                                                </span>



                                            </div>



                                        </div>



                                    </div>



                                </SwiperSlide>


                            ))}



                        </Swiper>


                    </div>



                </div>


            </div>


        </AnimatedSection>

    );

}