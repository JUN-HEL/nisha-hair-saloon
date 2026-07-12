export default function AnimatedSection({
    children,
    className = "",
}) {
    return (
        <section
            className={`
                animate-fade-up
                ${className}
            `}
        >
            {children}
        </section>
    );
}   