import {
    MapPin,
    Phone,
    Clock,
    Sparkles,
    MessageCircle
} from "lucide-react";


export default function ContactPage() {


    return (

        <section
            className="
                min-h-screen
                bg-gradient-to-b
                from-rose-50
                via-white
                to-white
                px-4
                py-20
                sm:px-6
                lg:px-8
            "
        >


            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >


                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">


                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-rose-200
                            bg-white
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-rose-700
                            shadow-sm
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

                        Visit Nisha Hair Salon Gumkhal for premium
                        hair styling, bridal makeup, beauty treatments
                        and grooming services.

                    </p>


                </div>







                <div
                    className="
                        mt-14
                        grid
                        gap-8
                        lg:grid-cols-2
                    "
                >





                    {/* Contact Information */}


                    <div
                        className="
                            rounded-[2rem]
                            border
                            border-white
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



                        <div className="mt-8 space-y-6">



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
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-rose-100
                                    "
                                >

                                    <MapPin
                                        className="text-rose-600"
                                    />

                                </div>


                                <div>

                                    <h3 className="font-semibold">

                                        Location

                                    </h3>

                                    <p className="text-zinc-600">

                                        Nisha Hair Salon,
                                        Gumkhal, India

                                    </p>

                                </div>

                            </div>







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
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-rose-100
                                    "
                                >

                                    <Phone
                                        className="text-rose-600"
                                    />

                                </div>


                                <div>

                                    <h3 className="font-semibold">

                                        Call Us

                                    </h3>


                                    <a
                                        href="tel:+917310944581"
                                        className="
                                            text-zinc-600
                                            hover:text-rose-600
                                        "
                                    >

                                        +91 73109445581

                                    </a>

                                </div>


                            </div>







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
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-rose-100
                                    "
                                >

                                    <Clock
                                        className="text-rose-600"
                                    />

                                </div>


                                <div>

                                    <h3 className="font-semibold">

                                        Opening Hours

                                    </h3>

                                    <p className="text-zinc-600">

                                        Mon - Sun
                                        <br />
                                        9:00 AM - 8:00 PM

                                    </p>

                                </div>


                            </div>


                        </div>





                        <a

                            href="https://wa.me/917310944581"

                            className="
                                mt-10
                                flex
                                items-center
                                justify-center
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

                            WhatsApp Appointment


                        </a>


                    </div>







                    {/* Contact Form */}


                    <form

                        className="
                            rounded-[2rem]
                            bg-[#080808]
                            p-8
                            shadow-xl
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



                        <div className="mt-6 space-y-4">


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
                                    placeholder:text-white/50
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
                                    placeholder:text-white/50
                                "

                            />




                            <textarea

                                placeholder="Service Required"

                                rows="4"

                                className="
                                    w-full
                                    rounded-xl
                                    bg-white/10
                                    px-5
                                    py-4
                                    text-white
                                    outline-none
                                    placeholder:text-white/50
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
                                "

                            >

                                Send Request

                            </button>


                        </div>


                    </form>



                </div>


            </div>


        </section>

    );

}