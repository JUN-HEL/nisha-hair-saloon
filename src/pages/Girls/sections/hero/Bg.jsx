import { motion } from "framer-motion";


export default function Bg() {

    return (

        <>

            <div
                className="
absolute
inset-0
bg-gradient-to-br
from-[#fffdfd]
via-[#fff3f7]
to-[#f8f1ff]
"
            />


            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [.3, .6, .3]
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity
                }}
                className="
absolute
-left-40
top-20
h-[520px]
w-[520px]
rounded-full
bg-pink-300/40
blur-[140px]
"
            />



            <motion.div
                animate={{
                    y: [-30, 30, -30],
                    scale: [1, 1.15, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity
                }}
                className="
absolute
right-0
top-32
h-[600px]
w-[600px]
rounded-full
bg-purple-300/30
blur-[160px]
"
            />



            <motion.div
                animate={{
                    x: [-20, 20, -20]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity
                }}
                className="
absolute
bottom-0
left-1/2
h-[400px]
w-[400px]
rounded-full
bg-rose-200/40
blur-[120px]
"
            />


        </>

    )

}