import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import AnimatedSection from "../../../components/common/AnimatedSection";
import { siteConfig } from "../../../data/siteConfig";

export default function LocationPreview() {
    return (
        <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                {/* Contact Information */}
                <div className="glass-card rounded-[2rem] p-8 sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
                        Visit Us
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Easy to reach. Easy to book.
                    </h2>

                    <div className="mt-8 space-y-5 text-zinc-700">
                        <p className="flex items-start gap-3">
                            <MapPin className="mt-1 shrink-0 text-amber-500" size={18} />
                            <span>{siteConfig.address}</span>
                        </p>

                        <p className="flex items-center gap-3">
                            <Phone className="shrink-0 text-rose-500" size={18} />
                            <span>
                                {siteConfig.phone.primary} &nbsp;|&nbsp;{" "}
                                {siteConfig.phone.secondary}
                            </span>
                        </p>

                        <p className="flex items-center gap-3">
                            <Clock className="shrink-0 text-fuchsia-500" size={18} />
                            <span>Open Daily • 9:00 AM – 8:00 PM</span>
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 px-5 py-3 font-semibold text-white shadow-[0_14px_40px_rgba(236,72,153,0.24)] transition hover:scale-105"
                        >
                            WhatsApp Now
                        </a>

                        <a
                            href={siteConfig.maps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/60 bg-white/80 px-5 py-3 font-semibold text-zinc-800 transition hover:bg-zinc-100"
                        >
                            Get Directions
                        </a>

                        <a
                            href={siteConfig.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-5 py-3 font-semibold text-zinc-800 transition hover:bg-zinc-100"
                        >
                            <Instagram size={16} />
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Google Map */}
                <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_20px_60px_rgba(70,40,60,0.12)]">
                    <iframe
                        title="Nisha Hair Salon & Beauty Parlour Location"
                        src="https://www.google.com/maps?q=Gumkhal+Market+Pauri+Garhwal&output=embed"
                        className="h-[430px] w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </AnimatedSection>
    );
}