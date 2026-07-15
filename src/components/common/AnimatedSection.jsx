import { motion } from "framer-motion";

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.75,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.section>
    );
}