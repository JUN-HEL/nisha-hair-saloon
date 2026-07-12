import {
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import Bg from "./Bg";
import Particles from "./Particles";
import Content from "./Content";
import Visual from "./Visual";


export default function GirlsHero() {


    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);


    const smoothX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20,
    });


    const smoothY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
    });


    const rotateX = useTransform(
        smoothY,
        [-300, 300],
        [8, -8]
    );


    const rotateY = useTransform(
        smoothX,
        [-300, 300],
        [-8, 8]
    );



    const move = (e) => {

        const rect =
            e.currentTarget.getBoundingClientRect();


        mouseX.set(
            e.clientX - rect.left - rect.width / 2
        );


        mouseY.set(
            e.clientY - rect.top - rect.height / 2
        );

    };



    return (

        <section
            onMouseMove={move}
            className="
            relative
            min-h-screen
            overflow-hidden
            bg-[#fff8fb]
            "
        >

            <Bg />

            <Particles />


            <div
                className="
                relative
                z-10
                mx-auto
                grid
                min-h-screen
                max-w-7xl
                items-center
                gap-16
                px-6
                py-24
                lg:grid-cols-2
                "
            >

                <Content />

                <Visual
                    rotateX={rotateX}
                    rotateY={rotateY}
                />


            </div>


            <div
                className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-32
                bg-gradient-to-t
                from-[#fff8fb]
                to-transparent
                "
            />


        </section>

    );
}