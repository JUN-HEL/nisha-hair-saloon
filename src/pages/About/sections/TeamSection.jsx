import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Instagram, Facebook, Scissors } from "lucide-react";

const team = [
    {
        name: "Nisha Sharma",
        role: "Founder & Hair Artist",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900",
    },
    {
        name: "Priya Kapoor",
        role: "Senior Stylist",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900",
    },
    {
        name: "Riya Verma",
        role: "Beauty Expert",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900",
    },
    {
        name: "Anjali Singh",
        role: "Hair Specialist",
        image:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900",
    },
];

export default function TeamSection() {
    return (
        <section className="relative overflow-hidden py-28">

            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#fff9fb] via-white to-[#fff5ef]" />

            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#eabecf]/30 blur-[120px]" />

            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#d5b48c]/30 blur-[120px]" />

            <div className="relative container mx-auto px-6">

                <div className="mb-16 text-center">

                    <span className="rounded-full border border-[#d5b48c]/40 bg-white/70 px-5 py-2 text-sm font-semibold tracking-[4px] text-[#b58fa2] backdrop-blur-xl">
                        OUR ARTISTS
                    </span>

                    <h2 className="mt-8 text-5xl font-bold">

                        Meet The

                        <span className="block bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] bg-clip-text text-transparent">

                            Hands Behind Your Beauty

                        </span>

                    </h2>

                </div>

                <Swiper
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    effect="coverflow"
                    centeredSlides
                    grabCursor
                    loop
                    autoplay={{
                        delay: 3000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 180,
                        modifier: 2,
                        scale: 0.85,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 2.8,
                        },
                    }}
                >
                    {team.map((member) => (
                        <SwiperSlide key={member.name}>

                            <div className="group mx-auto max-w-sm overflow-hidden rounded-[35px] border border-white/40 bg-white/60 shadow-[0_20px_80px_rgba(181,143,162,.18)] backdrop-blur-2xl transition duration-700 hover:-translate-y-3">

                                <div className="relative overflow-hidden">

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />

                                    <div className="absolute bottom-6 left-6">

                                        <div className="rounded-full bg-white/20 p-3 backdrop-blur-xl">

                                            <Scissors className="text-white" />

                                        </div>

                                    </div>

                                </div>

                                <div className="p-8">

                                    <h3 className="text-3xl font-bold text-[#7c5569]">

                                        {member.name}

                                    </h3>

                                    <p className="mt-2 text-[#b58fa2]">

                                        {member.role}

                                    </p>

                                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#d5b48c] to-transparent" />

                                    <p className="mt-6 leading-7 text-gray-600">

                                        Passionate about creating styles that inspire confidence
                                        and reflect your unique personality.

                                    </p>

                                    <div className="mt-8 flex gap-4">

                                        <button className="rounded-full bg-[#fff6f8] p-3 transition hover:bg-[#7c5569] hover:text-white">

                                            <Instagram size={18} />

                                        </button>

                                        <button className="rounded-full bg-[#fff6f8] p-3 transition hover:bg-[#7c5569] hover:text-white">

                                            <Facebook size={18} />

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    );
}