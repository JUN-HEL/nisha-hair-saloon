import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles, ArrowRight } from "lucide-react";
import { GirlsServices as girlsServicesData } from "../../../data/Services";

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

                    <div className="w-full min-w-0 overflow-hidden">


                        <Swiper

                            className="services-swiper !overflow-visible"

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


                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 12
                                },


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

                                    className="
                !h-auto
                min-w-0
                "


                                >



                                    <article

                                        className="
                group
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                "

                                    >




                                        {/* IMAGE */}


                                        <div

                                            className="
                    aspect-square
                    overflow-hidden
                    sm:aspect-[4/3]
                    "

                                        >


                                            <img

                                                src={service.image}

                                                alt={`${service.name} beauty service at Nisha Hair Salon`}

                                                loading="lazy"

                                                decoding="async"


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







                                        {/* CONTENT */}


                                        <div

                                            className="
                    p-3
                    sm:p-5
                    "

                                        >



                                            <h3

                                                className="
                        line-clamp-1
                        text-sm
                        font-bold
                        text-black
                        sm:text-lg
                        "

                                            >

                                                {service.name}


                                            </h3>





                                            <p

                                                className="
                        mt-2
                        line-clamp-2
                        text-xs
                        leading-5
                        text-black/50
                        sm:text-sm
                        "

                                            >

                                                {service.description}


                                            </p>







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
                            text-[#d5b48c]
                            sm:text-xl
                            "

                                                >

                                                    ₹{service.price}


                                                </span>






                                                {
                                                    service.duration &&

                                                    <span

                                                        className="
                            text-xs
                            text-white/40
                            "

                                                    >

                                                        {service.duration}

                                                    </span>

                                                }



                                            </div>



                                        </div>




                                    </article>




                                </SwiperSlide>




                            ))}



                        </Swiper>



                    </div>



                </div>


            </div>


        </AnimatedSection>

    );

}