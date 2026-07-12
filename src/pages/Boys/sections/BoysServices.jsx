import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles, ArrowRight } from "lucide-react";
import { BoysServices as boysServicesData } from "../../../data/services";

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


            <div
                className="
mx-auto
max-w-7xl
overflow-hidden
rounded-[2.5rem]
border
border-white/10
bg-[#0b0b0b]/90
p-8
shadow-[0_20px_60px_rgba(0,0,0,0.6)]
backdrop-blur-xl
lg:p-12
"
            >


                <div className="grid items-center gap-12 lg:grid-cols-2">



                    {/* LEFT CONTENT */}


                    <div>


                        <span
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
                            Our Services

                        </span>




                        <h2
                            className="
mt-5
text-4xl
font-black
leading-tight
text-white
lg:text-5xl
"
                        >

                            Premium grooming
                            <br />

                            for modern men

                        </h2>




                        <p className="mt-5 max-w-lg text-white/60">

                            From precision haircuts to beard sculpting and
                            complete grooming treatments, experience
                            professional barber care designed for your style.

                        </p>




                        <div className="mt-8 space-y-3">


                            {[
                                "Premium Haircuts & Styling",
                                "Beard Sculpting & Shaping",
                                "Hair Color & Texture Treatments",
                                "Complete Men's Grooming",
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
h-8
w-8
items-center
justify-center
rounded-full
bg-[#d4af37]
text-sm
font-bold
text-black
"
                                    >
                                        0{index + 1}
                                    </span>


                                    {item}


                                </div>


                            ))}


                        </div>




                        <a
                            href="/services"
                            className="
mt-10
inline-flex
items-center
gap-2
rounded-2xl
bg-gradient-to-r
from-[#8b6508]
via-[#d4af37]
to-[#f5d76e]
px-7
py-3.5
font-bold
text-black
transition
hover:scale-105
"
                        >

                            See More Services

                            <ArrowRight size={18} />

                        </a>



                    </div>





                    {/* RIGHT SLIDER */}


                    <div className="w-full">


                        <Swiper

                            modules={[Autoplay, Pagination]}

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
                                }

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
border
border-white/10
bg-white/5
transition
duration-300
hover:-translate-y-2
hover:border-[#d4af37]/40
hover:shadow-2xl
"
                                    >



                                        <div className="h-56 overflow-hidden">


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
text-white
"
                                            >
                                                {service.name}
                                            </h3>




                                            <p
                                                className="
mt-2
text-sm
text-white/50
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
font-black
text-[#d4af37]
"
                                                >
                                                    ₹{service.price}
                                                </span>




                                                <span
                                                    className="
text-sm
text-white/40
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