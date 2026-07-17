import { Link } from "react-router-dom";
import {
    Instagram,
    Facebook,
    MapPin,
    Phone,
    Sparkles,
    MessageCircle,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-10 px-4 pb-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] bg-zinc-950 px-6 py-12 text-zinc-200 shadow-[0_24px_70px_rgba(20,15,25,0.2)] sm:px-10">
                <div className="grid gap-10 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-amber-300">
                            <Sparkles size={15} />
                            Nisha Hair Salon & Beauty Parlour
                        </div>

                        <p className="mt-5 text-sm leading-7 text-zinc-400">
                            Your trusted beauty destination in Gumkhal for premium
                            haircuts, hairstyling, bridal makeup, beauty treatments,
                            men's grooming, and rental services. We help you look and
                            feel your absolute best every day.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Quick Links
                        </h4>

                        <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
                            <Link to="/" className="transition hover:text-amber-300">
                                Home
                            </Link>

                            <Link to="/about" className="transition hover:text-amber-300">
                                About
                            </Link>

                            <Link to="/services" className="transition hover:text-amber-300">
                                Services
                            </Link>

                            <Link to="/boys" className="transition hover:text-amber-300">
                                Boys Salon
                            </Link>

                            <Link to="/girls" className="transition hover:text-amber-300">
                                Girls Parlour
                            </Link>

                            <Link to="/gallery" className="transition hover:text-amber-300">
                                Gallery
                            </Link>

                            <Link to="/faq" className="transition hover:text-amber-300">
                                FAQ
                            </Link>

                            <Link to="/contact" className="transition hover:text-amber-300">
                                Contact
                            </Link>

                            <Link
                                to="/privacy-policy"
                                className="transition hover:text-amber-300"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms-and-conditions"
                                className="transition hover:text-amber-300"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Contact
                        </h4>

                        <div className="mt-5 space-y-4 text-sm text-zinc-400">
                            <a
                                href="https://www.google.com/maps/place/Nisha+Beauty+Parlour/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 transition hover:text-amber-300"
                            >
                                <MapPin size={16} className="mt-1 text-rose-400" />
                                Gumkhal Market, Pauri Garhwal, Uttarakhand 246128
                            </a>

                            <div className="space-y-2">
                                <a
                                    href="tel:+917310944581"
                                    className="flex items-center gap-3 transition hover:text-amber-300"
                                >
                                    <Phone size={16} className="text-amber-400" />
                                    +91 7310944581
                                </a>

                                <a
                                    href="tel:+919027458896"
                                    className="flex items-center gap-3 transition hover:text-amber-300"
                                >
                                    <Phone size={16} className="text-amber-400" />
                                    +91 9027458896
                                </a>
                            </div>

                            <p>Open Daily • 9:00 AM – 7:00 PM</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Follow Us
                        </h4>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href="https://wa.me/917310944581"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-green-500"
                            >
                                <MessageCircle size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/the_styling_nawed/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Nawed Instagram"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-rose-500"
                            >
                                <Instagram size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/nishabeauty_parlour__1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Nisha Beauty Parlour Instagram"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-fuchsia-500"
                            >
                                <Instagram size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/people/Nisha-Baeyuty-Parlour/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-zinc-500">
                    © {new Date().getFullYear()} Nisha Hair Salon & Beauty Parlour.
                    All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}