import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Instagram, Facebook, Scissors, PhoneCall } from "lucide-react";

const team = [
    {
        name: "Mr. Dilshad Khan",
        role: "Founder | Makeup Specialist & Hair Specialist",
        image: "/images/team/dilshad-khan.jpg",
        description:
            "Founder of Nisha Hair Salon, Gumkhal, Pauri Garhwal. Specializing in bridal makeup, professional makeup looks, hair styling, and beauty transformations with years of experience.",
        instagram:
            "https://www.instagram.com/nishabeauty_parlour__1/",
        facebook: "#",
        call: 7310944581
    },

    {
        name: "Mr. Nawed",
        role: "Men's Hair Specialist",
        image: "/images/team/nawed.jpg",
        description:
            "Expert men's hair specialist at Nisha Hair Salon, Gumkhal. Creating modern haircuts, stylish looks, beard grooming, and professional men's hairstyles.",
        instagram:
            "https://www.instagram.com/the_styling_nawed/",
        facebook: "#",
        call: 9027458896
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

                {/* Heading */}
                <div className="mb-16 text-center">

                    <span className="rounded-full border border-[#d5b48c]/40 bg-white/70 px-5 py-2 text-sm font-semibold tracking-[4px] text-[#b58fa2] backdrop-blur-xl">
                        OUR TEAM
                    </span>


                    <h2 className="mt-8 text-4xl font-bold text-zinc-900 md:text-5xl">

                        Meet The

                        <span className="block bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] bg-clip-text text-transparent">
                            Experts Behind Nisha Hair Salon
                        </span>

                    </h2>


                    <p className="mx-auto mt-5 max-w-2xl text-zinc-600">
                        Meet the experienced professionals behind Nisha Hair Salon,
                        Gumkhal, Pauri Garhwal. Our team combines creativity,
                        experience, and personal care to create beautiful styles
                        for every client.
                    </p>

                </div>



                <Swiper
                    modules={[
                        Autoplay,
                        EffectCoverflow,
                        Pagination,
                    ]}
                    effect="coverflow"
                    centeredSlides
                    grabCursor
                    loop
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
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
                            slidesPerView: 1.1,
                        },
                        768: {
                            slidesPerView: 1.8,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    }}
                >

                    {team.map((member) => (

                        <SwiperSlide key={member.name}>

                            <article className="group mx-auto max-w-sm overflow-hidden rounded-[35px] border border-white/50 bg-white/60 shadow-[0_20px_80px_rgba(181,143,162,.18)] backdrop-blur-2xl transition duration-700 hover:-translate-y-3">


                                <div className="relative overflow-hidden">

                                    <img
                                        src={member.image}
                                        alt={`${member.name} - ${member.role} at Nisha Hair Salon Gumkhal Pauri Garhwal`}
                                        className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                                    />


                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                                    <div className="absolute bottom-6 left-6">

                                        <div className="rounded-full bg-white/20 p-3 backdrop-blur-xl">

                                            <Scissors
                                                className="text-white"
                                                size={24}
                                            />

                                        </div>

                                    </div>

                                </div>



                                <div className="p-8">

                                    <h3 className="text-2xl font-bold text-[#7c5569]">
                                        {member.name}
                                    </h3>


                                    <p className="mt-2 text-sm font-medium text-[#b58fa2]">
                                        {member.role}
                                    </p>


                                    <div className="mt-5 h-px bg-gradient-to-r from-transparent via-[#d5b48c] to-transparent" />


                                    <p className="mt-5 text-sm leading-7 text-zinc-600">
                                        {member.description}
                                    </p>


                                    <div className="mt-7 flex gap-4">

                                        <a
                                            href={member.instagram}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-full bg-[#fff6f8] p-3 transition hover:bg-[#7c5569] hover:text-white"
                                        >
                                            <Instagram size={18} />
                                        </a>


                                        <a
                                            href={member.facebook}
                                            className="rounded-full bg-[#fff6f8] p-3 transition hover:bg-[#7c5569] hover:text-white"
                                        >
                                            <Facebook size={18} />
                                        </a>
                                        <a
                                            href={member.facebook}
                                            className="rounded-full bg-[#fff6f8] p-3 transition hover:bg-[#7c5569] hover:text-white"
                                        >
                                            <PhoneCall size={18} />
                                        </a>

                                    </div>

                                </div>

                            </article>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    );
}