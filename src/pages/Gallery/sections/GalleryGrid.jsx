import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import AnimatedSection from "../../../components/common/AnimatedSection";
import { MenGallery, WomenGallery } from "../../../data/galleryData";


const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};


const galleryData = [

    // Women get priority
    ...shuffleArray(
        WomenGallery.map(item => ({
            ...item,
            gender: "Women",
        }))
    ),

    // Men mixed after
    ...shuffleArray(
        MenGallery.map(item => ({
            ...item,
            gender: "Men",
        }))
    ),

];


// Mix both but keep more women visible first



export default function GalleryGrid() {


    const [activeFilter, setActiveFilter] = useState("All");

    const [selectedItem, setSelectedItem] = useState(null);



    // Women categories first
    const filters = useMemo(() => {


        const womenCategories = [
            ...new Set(
                WomenGallery.map(
                    item => item.category
                )
            )
        ];


        const menCategories = [
            ...new Set(
                MenGallery.map(
                    item => item.category
                )
            )
        ];



        return [

            "All",

            // Women priority
            ...womenCategories,

            // Men after women
            ...menCategories.filter(
                item => !womenCategories.includes(item)
            )

        ];


    }, []);





    const filteredItems = useMemo(() => {


        if (activeFilter === "All") {

            return galleryData;

        }


        return galleryData.filter(

            item => item.category === activeFilter

        );


    }, [activeFilter]);



    return (

        <>

            <AnimatedSection className="px-4 py-8 sm:px-6 lg:px-8">


                <div
                    className="
                    mx-auto
                    max-w-7xl
                    rounded-[2rem]
                    border
                    border-white/50
                    bg-white/55
                    p-5
                    backdrop-blur-xl
                    sm:p-8
                    "
                >


                    {/* FILTERS */}

                    <div
                        className="
                        flex
                        flex-wrap
                        gap-3
                        "
                    >

                        {filters.map(filter => (

                            <button

                                key={filter}

                                onClick={() =>
                                    setActiveFilter(filter)
                                }

                                className={`
                                rounded-full
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                transition

                                ${activeFilter === filter

                                        ?

                                        "bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] text-white"

                                        :

                                        "border border-white/60 bg-white text-zinc-700"
                                    }

                                `}

                            >

                                {filter}

                            </button>

                        ))}


                    </div>





                    {/* GALLERY */}

                    <motion.div

                        layout

                        className="
                        mt-8
                        grid
                        grid-cols-2
                        gap-4
                        lg:grid-cols-3
                        "

                    >


                        {filteredItems.map(item => (


                            <motion.button

                                layout

                                key={`${item.gender}-${item.id}`}

                                onClick={() =>
                                    setSelectedItem(item)
                                }


                                className="
                                group
                                overflow-hidden
                                rounded-[1.5rem]
                                border
                                border-white/60
                                bg-white
                                text-left
                                shadow-lg
                                transition
                                hover:-translate-y-1
                                "

                            >



                                <div
                                    className="
                                    relative
                                    flex
                                    h-56
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    bg-black
                                    sm:h-72
                                    "
                                >

                                    <img

                                        src={item.image}

                                        alt={item.alt}

                                        loading="lazy"

                                        className="
                                        h-full
                                        w-full
                                        object-contain
                                        transition
                                        duration-500
                                        group-hover:scale-105
                                        "

                                    />


                                    <span
                                        className="
                                        absolute
                                        bottom-3
                                        left-3
                                        rounded-full
                                        bg-[#7c5569]/90
                                        px-3
                                        py-1
                                        text-[10px]
                                        text-white
                                        "
                                    >

                                        {item.category}

                                    </span>


                                </div>




                                <div className="p-4">


                                    <h3
                                        className="
                                        line-clamp-2
                                        text-sm
                                        font-semibold
                                        text-zinc-900
                                        sm:text-lg
                                        "
                                    >

                                        {item.title}

                                    </h3>


                                    <div
                                        className="
                                        mt-3
                                        flex
                                        items-center
                                        gap-1
                                        text-sm
                                        font-semibold
                                        text-[#7c5569]
                                        "
                                    >

                                        View

                                        <ArrowUpRight size={15} />

                                    </div>


                                </div>


                            </motion.button>


                        ))}


                    </motion.div>


                </div>


            </AnimatedSection>





            {/* MODAL */}

            <AnimatePresence>

                {selectedItem && (

                    <motion.div

                        className="
                        fixed
                        inset-0
                        z-[999]
                        flex
                        items-center
                        justify-center
                        bg-black/80
                        p-4
                        "

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        onClick={() =>
                            setSelectedItem(null)
                        }

                    >


                        <motion.div

                            className="
                            max-h-[90vh]
                            w-full
                            max-w-5xl
                            overflow-hidden
                            rounded-3xl
                            bg-white
                            "

                            onClick={(e) =>
                                e.stopPropagation()
                            }

                        >


                            <div
                                className="
                                flex
                                max-h-[75vh]
                                justify-center
                                bg-black
                                "
                            >

                                <img

                                    src={selectedItem.image}

                                    alt={selectedItem.alt}

                                    className="
                                    max-h-[75vh]
                                    w-full
                                    object-contain
                                    "

                                />

                            </div>


                            <div className="p-6">


                                <p className="text-[#7c5569]">
                                    {selectedItem.category}
                                </p>


                                <h2 className="mt-2 text-2xl font-bold">
                                    {selectedItem.title}
                                </h2>


                            </div>


                        </motion.div>


                    </motion.div>

                )}

            </AnimatePresence>


        </>

    );

}