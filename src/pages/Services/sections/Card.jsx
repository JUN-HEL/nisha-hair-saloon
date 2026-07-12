const Card = ({ data }) => {
    return (
        <div
            className="
        group
        relative
        overflow-hidden
        rounded-3xl
        glass-card
        transition-all
        duration-500
        hover:-translate-y-2
      "
        >

            {/* Decorative Glow */}
            <div
                className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[#d5b48c]/20
          blur-3xl
          opacity-60
          transition
          duration-500
          group-hover:scale-125
        "
            />


            {/* Image */}
            <div className="relative h-52 overflow-hidden rounded-t-3xl">

                <img
                    src={data.image}
                    alt={data.name}
                    className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
                />


                {data.popular && (
                    <span
                        className="
              absolute
              top-4
              left-4
              rounded-full
              bg-white/70
              px-4
              py-1
              text-xs
              font-medium
              text-[#7c5569]
              backdrop-blur-md
            "
                    >
                        Popular
                    </span>
                )}

            </div>



            {/* Content */}
            <div className="relative p-5">


                <div className="flex items-center justify-between">

                    <h3
                        className="
              text-lg
              font-semibold
              text-[#22181d]
            "
                    >
                        {data.name}
                    </h3>


                    <span
                        className="
              gradient-text
              font-semibold
            "
                    >
                        ₹{data.price}
                    </span>

                </div>



                <p
                    className="
            mt-3
            text-sm
            text-[#6f6269]
            leading-relaxed
            line-clamp-2
          "
                >
                    {data.description}
                </p>



                {/* Includes */}
                <div className="mt-4 flex flex-wrap gap-2">

                    {data.includes.slice(0, 3).map((item, index) => (
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



                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">


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
              gradient-bg
              px-5
              py-2
              text-sm
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
            "
                    >
                        Book
                    </button>


                </div>

            </div>

        </div>
    );
};

export default Card;