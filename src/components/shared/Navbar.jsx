import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sparkles, Scissors } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Boys Salon", path: "/boys" },
    { name: "Girls Parlour", path: "/girls" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);

        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const linkClass = ({ isActive }) =>
        `relative text-sm transition-all duration-300 ${isActive
            ? "text-rose-600 font-semibold"
            : "text-zinc-700 hover:text-rose-600"
        }`;

    return (
        <header className="fixed top-0 left-0 z-50 w-full px-3 pt-3 sm:px-5">
            <div
                className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${scrolled
                        ? "border-white/50 bg-white/75 shadow-[0_18px_50px_rgba(80,50,70,0.12)] backdrop-blur-xl"
                        : "border-white/40 bg-white/55 backdrop-blur-lg"
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-rose-200 to-fuchsia-200 text-zinc-900 shadow-md">
                            <Scissors size={18} />
                        </div>

                        <div className="leading-tight">
                            <p className="text-sm font-bold text-zinc-900 sm:text-base">
                                Nisha Hair Salon
                            </p>
                            <p className="text-xs text-zinc-500">
                                & Beauty Parlour
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={linkClass}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,72,153,0.28)] transition duration-300 hover:scale-[1.03]"
                        >
                            <Sparkles size={16} />
                            Book Now
                        </a>
                    </nav>

                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="rounded-full border border-white/60 bg-white/70 p-2.5 text-zinc-800 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25 }}
                            className="border-t border-white/50 bg-white/75 px-4 pb-4 pt-2 backdrop-blur-xl md:hidden"
                        >
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `rounded-2xl px-4 py-3 text-sm transition ${isActive
                                                ? "bg-rose-50 font-semibold text-rose-600"
                                                : "text-zinc-700 hover:bg-white"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}

                                <a
                                    href="https://wa.me/919999999999"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-2 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 px-5 py-3 text-center text-sm font-semibold text-white"
                                >
                                    Book Now
                                </a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}