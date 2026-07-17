import { useState } from "react";
import {
    MapPin,
    Phone,
    Clock,
    Sparkles,
    MessageCircle,
    Instagram,
} from "lucide-react";

import SEO from "../../components/SEO/SEO";
import { siteConfig } from "../../data/siteConfig";


export default function ContactPage() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        service: "",
        message: "",
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `
🌸 *New Appointment Request*

👤 Name:
${form.name}

📞 Phone:
${form.phone}

💇 Service:
${form.service}

📝 Message:
${form.message}

Thank you.
    `;


        const url = `https://wa.me/${siteConfig.whatsapp
            }?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(url, "_blank");
    };



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


            <SEO
                title="Contact Nisha Hair Salon & Beauty Parlour | Book Appointment"
                description="Contact Nisha Hair Salon & Beauty Parlour Gumkhal for bridal makeup, hairstyling, hair treatments and beauty services."
                canonical="https://nisha-hair-salon.netlify.app/contact"
            />


            {/* Background */}

            <div className="
      absolute
      -left-40
      top-20
      h-[450px]
      w-[450px]
      rounded-full
      bg-rose-200/40
      blur-[140px]
      "/>


            <div className="
      absolute
      right-0
      top-0
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#d5b48c]/20
      blur-[140px]
      "/>



            <div className="
      relative
      z-10
      mx-auto
      max-w-7xl
      ">



                {/* Header */}

                <div className="
        mx-auto
        max-w-3xl
        text-center
        ">


                    <div className="
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
          backdrop-blur
          ">

                        <Sparkles size={15} />
                        Contact Nisha Hair Salon & Beauty Parlour

                    </div>



                    <h1 className="
          mt-6
          text-4xl
          font-black
          text-zinc-900
          sm:text-6xl
          ">

                        Book Your Beauty

                        <br />

                        <span className="
            bg-gradient-to-r
            from-[#7c5569]
            via-[#b58fa2]
            to-[#d5b48c]
            bg-clip-text
            text-transparent
            ">

                            Experience Today

                        </span>

                    </h1>



                    <p className="
          mt-5
          text-zinc-600
          sm:text-lg
          ">

                        Visit Nisha Hair Salon & Beauty Parlour Gumkhal for luxury
                        bridal makeup, hairstyling, hair treatments
                        and complete beauty services.

                    </p>


                </div>





                <div className="
        mt-14
        grid
        gap-8
        lg:grid-cols-[0.85fr_1.15fr]
        ">




                    {/* Contact Card */}


                    <div className="
          rounded-[2rem]
          border
          border-white/70
          bg-white/70
          p-8
          shadow-xl
          backdrop-blur-xl
          ">


                        <h2 className="
            text-2xl
            font-bold
            text-zinc-900
            ">

                            Visit Our Salon

                        </h2>



                        <div className="
            mt-8
            space-y-6
            ">


                            <InfoItem
                                icon={<MapPin size={22} />}
                                title="Location"
                                text={siteConfig.address}
                            />


                            <InfoItem
                                icon={<Phone size={22} />}
                                title="Call Us"
                                text={
                                    <>
                                        {siteConfig.phone.primary}
                                        <br />
                                        {siteConfig.phone.secondary}
                                    </>
                                }
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




                        <div className="
            mt-10
            flex
            flex-wrap
            gap-3
            ">


                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}`}
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
              hover:bg-green-600
              "
                            >

                                <MessageCircle size={18} />
                                WhatsApp

                            </a>



                            <a
                                href={siteConfig.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="
              flex
              items-center
              gap-2
              rounded-full
              border
              bg-white
              px-6
              py-3
              font-semibold
              "
                            >

                                <Instagram size={17} />
                                Instagram

                            </a>


                        </div>


                    </div>






                    {/* Appointment Form */}


                    <form
                        onSubmit={handleSubmit}
                        className="
          rounded-[2rem]
          bg-[#090909]
          p-8
          shadow-2xl
          "
                    >


                        <h2 className="
            text-2xl
            font-bold
            text-white
            ">

                            Book Appointment

                        </h2>


                        <p className="
            mt-2
            text-white/60
            ">

                            Fill details and continue on WhatsApp.

                        </p>



                        <div className="
            mt-6
            space-y-4
            ">


                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="input-style"
                            />



                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="input-style"
                            />



                            <input
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                placeholder="Service Required"
                                required
                                className="input-style"
                            />



                            <textarea
                                name="message"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Additional Details"
                                className="input-style"
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

                                Send on WhatsApp

                            </button>


                        </div>


                    </form>



                </div>





                {/* Map */}


                <div className="
        mt-10
        overflow-hidden
        rounded-[2.5rem]
        shadow-xl
        ">


                    <iframe
                        title="Nisha Hair Salon & Beauty Parlour Location"
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

        <div className="flex gap-4">

            <div className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-rose-100
text-rose-600
">

                {icon}

            </div>


            <div>

                <h3 className="font-semibold text-zinc-900">

                    {title}

                </h3>


                <div className="text-zinc-600">

                    {text}

                </div>


            </div>


        </div>

    );

}