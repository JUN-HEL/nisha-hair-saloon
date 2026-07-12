import AnimatedSection from "../../../components/common/AnimatedSection";
import { Sparkles } from "lucide-react";
import { BoysServices as boysServicesData } from "../../../data/services";


export default function BoysGallery() {

    const galleryImages = boysServicesData.filter(
        (service) => service.image
    ).slice(0, 4);


    return (

        <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">


            <div
                className="
mx-auto
max-w-7xl
rounded-[2.5rem]
border
border-white/10
bg-[#080808]
p-8
shadow-[0_20px_60px_rgba(0,0,0,.6)]
lg:p-12
"
            >


                {/* Header */}


                <div className="max-w-2xl">


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
                        Style Gallery

                    </div>



                    <h2
                        className="
mt-5
text-3xl
font-black
text-white
sm:text-5xl
"
                    >

                        Fresh cuts.
                        <br />

                        <span
                            className="
bg-gradient-to-r
from-[#d4af37]
via-[#f5d76e]
to-white
bg-clip-text
text-transparent
"
                        >
                            Premium style.
                        </span>

                    </h2>



                    <p className="mt-4 text-white/60">

                        A collection of our latest men's grooming
                        styles, sharp haircuts, beard designs and
                        modern transformations.

                    </p>


                </div>





                {/* Gallery */}


                <div
                    className="
mt-10
grid
auto-rows-[220px]
gap-5
md:grid-cols-4
"
                >


                    {galleryImages.map((service, index) => (


                        <div
                            key={service.id}
                            className={`
group
relative
overflow-hidden
rounded-[1.75rem]
border
border-white/10
bg-white/5
${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
${index === 3 ? "md:col-span-2" : ""}
`}
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



                            {/* Hover Info */}

                            <div
                                className="
absolute
inset-x-0
bottom-0
bg-gradient-to-t
from-black
to-transparent
p-5
opacity-0
transition
duration-300
group-hover:opacity-100
"
                            >


                                <h3
                                    className="
text-lg
font-bold
text-white
"
                                >
                                    {service.name}
                                </h3>


                                <p
                                    className="
text-sm
text-white/60
"
                                >
                                    {service.description}
                                </p>


                            </div>



                        </div>


                    ))}


                </div>


            </div>


        </AnimatedSection>

    );
}