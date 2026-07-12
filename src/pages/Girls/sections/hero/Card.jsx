export default function Card({
    image,
    className
}) {

    return (

        <div
            className={`
absolute
rounded-[2rem]
bg-white/70
p-3
shadow-xl
backdrop-blur-xl
${className}
`}
        >

            <img
                src={image}
                className="
h-[270px]
w-full
rounded-[1.5rem]
object-cover
"
            />

        </div>

    )

}