import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-10 px-4 pb-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] bg-zinc-950 px-6 py-12 text-zinc-200 shadow-[0_24px_70px_rgba(20,15,25,0.2)] sm:px-10">
                <div className="grid gap-10 lg:grid-cols-4">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-amber-300">
                            <Sparkles size={15} />
                            Nisha Hair Salon & Beauty Parlour
                        </div>

                        <p className="mt-5 text-sm leading-7 text-zinc-400">
                            A stylish local destination for boys grooming, girls beauty care,
                            makeup, and polished everyday confidence in Gumkhal.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Quick Links
                        </h4>
                        <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
                            <Link to="/" className="hover:text-amber-300">Home</Link>
                            <Link to="/boys" className="hover:text-amber-300">Boys Salon</Link>
                            <Link to="/girls" className="hover:text-amber-300">Girls Parlour</Link>
                            <Link to="/gallery" className="hover:text-amber-300">Gallery</Link>
                            <Link to="/contact" className="hover:text-amber-300">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Contact
                        </h4>
                        <div className="mt-5 space-y-4 text-sm text-zinc-400">
                            <p className="flex items-start gap-3">
                                <MapPin size={16} className="mt-1 text-rose-400" />
                                Gumkhal Market, Pauri Garhwal, Uttarakhand
                            </p>
                            <p className="flex items-center gap-3">
                                <Phone size={16} className="text-amber-400" />
                                +91 7310994581
                            </p>
                            <p>Open Daily • 9:00 AM – 8:00 PM</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Follow Us
                        </h4>
                        <div className="mt-5 flex gap-3">
                            <a
                                href="https://www.instagram.com/the_styling_nawed/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-rose-500"
                            >
                                <Instagram size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/nishabeauty_parlour__1/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-fuchsia-500"
                            >
                                <Instagram size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/people/Nisha-Baeyuty-Parlour/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-amber-500"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-zinc-500">
                    © 2026 Nisha Hair Salon & Beauty Parlour. Designed with style, not default settings.
                </div>
            </div>
        </footer>
    );
}