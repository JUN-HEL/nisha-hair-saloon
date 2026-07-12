import { motion } from "framer-motion";


export default function Particles() {

    return (

        <>
            {
                [...Array(20)].map((_, i) => (

                    <motion.span
                        key={i}

                        animate={{
                            y: [0, -700],
                            opacity: [0, 1, 0],
                            scale: [.5, 1.2, .5]
                        }}

                        transition={{
                            duration: 6 + i % 4,
                            delay: i * .25,
                            repeat: Infinity
                        }}

                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: -20
                        }}

                        className="
absolute
h-1
w-1
rounded-full
bg-pink-400
"

                    />

                ))
            }
        </>

    )

}