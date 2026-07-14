import { useState } from "react";
import { X, Maximize2 } from "lucide-react";


const Card = ({ data }) => {

    const [showImage, setShowImage] = useState(false);


    return (
        <>

            <div
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/60
                    bg-white/50
                    p-3
                    shadow-[0_20px_60px_rgba(124,85,105,0.12)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_25px_70px_rgba(124,85,105,0.22)]
                "
            >


                {/* Soft Glow */}

                <div
                    className="
                        absolute
                        -right-16
                        -top-16
                        h-40
                        w-40
                        rounded-full
                        bg-[#d5b48c]/30
                        blur-3xl
                    "
                />



                {/* IMAGE */}

                <div
                    className="
                        relative
                        flex
                        h-52
                        cursor-pointer
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[1.7rem]
                        border
                        border-white/70
                        bg-gradient-to-br
                        from-[#fff8fb]
                        via-[#f7eef4]
                        to-[#f3dfc5]
                        sm:h-64
                    "
                    onClick={() => setShowImage(true)}
                >


                    <img
                        src={data.image}
                        alt={data.name}
                        loading="lazy"
                        className="
                            h-full
                            w-full
                            object-contain
                            transition
                            duration-700
                            group-hover:scale-105
                        "
                    />



                    {/* Hover View */}

                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-[#7c5569]/20
                            opacity-0
                            transition
                            duration-300
                            group-hover:opacity-100
                        "
                    >

                        <span
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white/80
                                px-5
                                py-2
                                text-xs
                                font-semibold
                                text-[#7c5569]
                                shadow-lg
                                backdrop-blur
                            "
                        >

                            <Maximize2 size={15} />

                            View

                        </span>


                    </div>



                    {data.popular && (

                        <span
                            className="
                                absolute
                                left-4
                                top-4
                                rounded-full
                                bg-gradient-to-r
                                from-[#7c5569]
                                to-[#d5b48c]
                                px-4
                                py-1
                                text-[11px]
                                font-semibold
                                text-white
                                shadow-md
                            "
                        >
                            Popular
                        </span>

                    )}


                </div>






                {/* CONTENT */}

                <div className="px-2 pb-2 pt-4">


                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-3
                        "
                    >

                        <h3
                            className="
                                line-clamp-2
                                text-base
                                font-semibold
                                text-[#22181d]
                                sm:text-lg
                            "
                        >

                            {data.name}

                        </h3>



                        <span
                            className="
                                whitespace-nowrap
                                text-sm
                                font-bold
                                text-[#7c5569]
                                sm:text-lg
                            "
                        >

                            ₹{data.price}

                        </span>


                    </div>




                    <p
                        className="
                            mt-2
                            line-clamp-2
                            text-sm
                            leading-6
                            text-[#6f6269]
                        "
                    >

                        {data.description}

                    </p>




                    <div
                        className="
                            mt-4
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        {data.includes?.slice(0, 3).map((item, index) => (

                            <span
                                key={index}
                                className="
                                    rounded-full
                                    bg-[#f7eef4]
                                    px-3
                                    py-1
                                    text-xs
                                    text-[#7c5569]
                                "
                            >

                                {item}

                            </span>

                        ))}

                    </div>




                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <span
                            className="
                                text-xs
                                text-[#6f6269]
                            "
                        >

                            {data.duration || "60 Min"}

                        </span>



                        <button
                            className="
                                rounded-full
                                bg-gradient-to-r
                                from-[#7c5569]
                                via-[#b58fa2]
                                to-[#d5b48c]
                                px-5
                                py-2
                                text-sm
                                font-semibold
                                text-white
                                shadow-md
                                transition
                                hover:scale-105
                            "
                        >
                            Book
                        </button>


                    </div>


                </div>


            </div>





            {/* IMAGE MODAL */}

            {showImage && (

                <div
                    className="
                        fixed
                        inset-0
                        z-[9999]
                        flex
                        items-center
                        justify-center
                        bg-black/80
                        p-5
                    "
                    onClick={() => setShowImage(false)}
                >

                    <button
                        className="
                            absolute
                            right-6
                            top-6
                            rounded-full
                            bg-white/20
                            p-3
                            text-white
                        "
                        onClick={() => setShowImage(false)}
                    >
                        <X size={28} />
                    </button>


                    <img
                        src={data.image}
                        alt={data.name}
                        className="
                            max-h-[90vh]
                            max-w-[95vw]
                            rounded-[2rem]
                            object-contain
                        "
                        onClick={(e) => e.stopPropagation()}
                    />

                </div>

            )}

        </>
    );
};


export default Card;