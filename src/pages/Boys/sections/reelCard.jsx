
import { Play, ArrowUpRight } from "lucide-react";

export default function ReelCard({ reel }) {

    return (

        <a

            href={reel.link}

            target="_blank"

            rel="noreferrer"

            className="
            group
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/10
            bg-white/5
            transition
            duration-300
            hover:-translate-y-2
            hover:border-[#d4af37]/50
            hover:shadow-[0_20px_50px_rgba(212,175,55,.15)]
            "

        >


            <div className="relative overflow-hidden">


                <img

                    src={reel.image}

                    alt={reel.title}

                    loading="lazy"

                    className="
                    h-44
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                    sm:h-64
                    lg:h-72
                    "

                />



                <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                    "
                />



                {/* Reel Badge */}

                <div
                    className="
                    absolute
                    left-3
                    top-3
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-[#d4af37]
                    px-2
                    py-1
                    text-[10px]
                    font-bold
                    text-black
                    sm:px-3
                    sm:text-xs
                    "
                >

                    <Play
                        size={12}
                        className="fill-current"
                    />

                    Reel

                </div>




                {/* Category */}

                <div
                    className="
                    absolute
                    bottom-3
                    left-3
                    rounded-full
                    border
                    border-white/20
                    bg-black/60
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    text-white
                    backdrop-blur
                    sm:text-xs
                    "
                >

                    {reel.category}

                </div>


            </div>





            <div className="p-3 sm:p-5">


                <h3
                    className="
                    text-sm
                    font-bold
                    text-white
                    sm:text-lg
                    "
                >

                    {reel.title}

                </h3>




                <div
                    className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-[#d4af37]
                    sm:text-sm
                    "
                >

                    View Instagram

                    <ArrowUpRight size={14} />

                </div>


            </div>


        </a>

    );

}