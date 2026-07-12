import {
    MapPin,
    Phone,
    Clock,
    Sparkles,
    MessageCircle,
    Instagram
} from "lucide-react";


export default function ContactPage() {

    return (

        <section
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-gradient-to-b
                from-[#fff8fb]
                via-white
                to-[#fdf3f1]
                px-4
                py-20
                sm:px-6
                lg:px-8
            "
        >

            {/* Ambient Background */}

            <div
                className="
                    absolute
                    -left-40
                    top-20
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-rose-200/40
                    blur-[140px]
                "
            />

            <div
                className="
                    absolute
                    right-0
                    top-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#d5b48c]/20
                    blur-[140px]
                "
            />


            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                "
            >


                {/* HEADER */}

                <div
                    className="
                        mx-auto
                        max-w-3xl
                        text-center
                    "
                >

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-rose-200
                            bg-white/70
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-rose-700
                            shadow-sm
                            backdrop-blur-xl
                        "
                    >

                        <Sparkles size={15} />

                        Contact Nisha Hair Salon

                    </div>



                    <h1
                        className="
                            mt-6
                            text-4xl
                            font-black
                            tracking-tight
                            text-zinc-900
                            sm:text-6xl
                        "
                    >

                        Book Your Beauty

                        <br />

                        <span
                            className="
                                bg-gradient-to-r
                                from-[#7c5569]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                bg-clip-text
                                text-transparent
                            "
                        >

                            Experience Today

                        </span>

                    </h1>



                    <p
                        className="
                            mt-5
                            text-zinc-600
                            sm:text-lg
                        "
                    >

                        Visit Nisha Hair Salon Gumkhal for luxury
                        bridal makeup, hairstyling, hair treatments
                        and complete beauty services.

                    </p>


                </div>





                {/* CONTACT + FORM */}


                <div
                    className="
                        mt-14
                        grid
                        gap-8
                        lg:grid-cols-[0.85fr_1.15fr]
                    "
                >



                    {/* CONTACT CARD */}


                    <div
                        className="
                            rounded-[2rem]
                            border
                            border-white/70
                            bg-white/70
                            p-8
                            shadow-xl
                            backdrop-blur-xl
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-zinc-900
                            "
                        >

                            Visit Our Salon

                        </h2>



                        <div
                            className="
                                mt-8
                                space-y-6
                            "
                        >


                            <InfoItem
                                icon={<MapPin size={22} />}
                                title="Location"
                                text="Gumkhal Market, Pauri Garhwal, Uttarakhand"
                            />


                            <InfoItem
                                icon={<Phone size={22} />}
                                title="Call Us"
                                text="+91 73109445581"
                            />


                            <InfoItem
                                icon={<Clock size={22} />}
                                title="Opening Hours"
                                text={
                                    <>
                                        Monday - Sunday
                                        <br />
                                        9:00 AM - 8:00 PM
                                    </>
                                }
                            />


                        </div>




                        <div
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-3
                            "
                        >


                            <a
                                href="https://wa.me/917310944581"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-green-500
                                    px-6
                                    py-3
                                    font-bold
                                    text-white
                                    transition
                                    hover:bg-green-600
                                "
                            >

                                <MessageCircle size={18} />

                                WhatsApp

                            </a>



                            <a
                                href="https://www.instagram.com/the_styling_nawed/"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-zinc-200
                                    bg-white
                                    px-6
                                    py-3
                                    font-semibold
                                    text-zinc-800
                                "
                            >

                                <Instagram size={17} />

                                Instagram

                            </a>


                        </div>


                    </div>








                    {/* FORM */}


                    <form
                        className="
                            rounded-[2rem]
                            bg-[#090909]
                            p-8
                            shadow-2xl
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-white
                            "
                        >

                            Book Appointment

                        </h2>



                        <p
                            className="
                                mt-2
                                text-sm
                                text-white/60
                            "
                        >

                            Tell us your preferred service and we will
                            contact you shortly.

                        </p>




                        <div
                            className="
                                mt-6
                                space-y-4
                            "
                        >

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="
                                    w-full
                                    rounded-xl
                                    bg-white/10
                                    px-5
                                    py-4
                                    text-white
                                    outline-none
                                    placeholder:text-white/40
                                "
                            />


                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="
                                    w-full
                                    rounded-xl
                                    bg-white/10
                                    px-5
                                    py-4
                                    text-white
                                    outline-none
                                    placeholder:text-white/40
                                "
                            />



                            <textarea
                                rows="4"
                                placeholder="Service Required"
                                className="
                                    w-full
                                    rounded-xl
                                    bg-white/10
                                    px-5
                                    py-4
                                    text-white
                                    outline-none
                                    placeholder:text-white/40
                                "
                            />



                            <button
                                type="submit"
                                className="
                                    w-full
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-[#7c5569]
                                    via-[#b58fa2]
                                    to-[#d5b48c]
                                    py-4
                                    font-bold
                                    text-white
                                    shadow-lg
                                "
                            >

                                Send Request

                            </button>


                        </div>


                    </form>


                </div>







                {/* FULL WIDTH MAP */}


                <div
                    className="
                        mt-10
                        overflow-hidden
                        rounded-[2.5rem]
                        border
                        border-white/70
                        shadow-[0_25px_70px_rgba(70,40,60,.15)]
                    "
                >

                    <iframe
                        title="Nisha Hair Salon Location"
                        src="https://www.google.com/maps?q=Gumkhal+Market+Pauri+Garhwal&output=embed"
                        className="
                            h-[480px]
                            w-full
                        "
                        loading="lazy"
                    />

                </div>


            </div>


        </section>

    );

}





function InfoItem({
    icon,
    title,
    text
}) {

    return (

        <div
            className="
                flex
                gap-4
            "
        >

            <div
                className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-rose-100
                    text-rose-600
                "
            >

                {icon}

            </div>



            <div>

                <h3
                    className="
                        font-semibold
                        text-zinc-900
                    "
                >

                    {title}

                </h3>


                <p
                    className="
                        text-zinc-600
                    "
                >

                    {text}

                </p>


            </div>


        </div>

    );

}