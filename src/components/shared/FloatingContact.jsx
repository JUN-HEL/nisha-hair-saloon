import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function FloatingContact() {
    return (
        <>
            {/* Desktop Floating Buttons */}
            <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-4 md:flex">
                <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-600"
                >
                    <MessageCircle
                        size={20}
                        className="transition-transform group-hover:rotate-12"
                    />
                    <span className="font-medium">WhatsApp</span>
                </a>

                <a
                    href={`tel:${siteConfig.phone}`}
                    className="group flex items-center gap-3 rounded-full bg-amber-500 px-5 py-3 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-amber-600"
                >
                    <Phone
                        size={20}
                        className="transition-transform group-hover:-rotate-12"
                    />
                    <span className="font-medium">Call Now</span>
                </a>

                <a
                    href={siteConfig.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-full bg-blue-600 px-5 py-3 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
                >
                    <MapPin
                        size={20}
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="font-medium">Directions</span>
                </a>
            </div>

            {/* Mobile Bottom Dock */}
            <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
                <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/30 bg-white/90 shadow-2xl backdrop-blur-lg">
                    <a
                        href={`tel:${siteConfig.phone}`}
                        className="flex flex-col items-center justify-center gap-1 py-3 text-amber-600 transition hover:bg-amber-50"
                    >
                        <Phone size={22} />
                        <span className="text-xs font-semibold">Call</span>
                    </a>

                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-center gap-1 border-x border-zinc-100 py-3 text-green-600 transition hover:bg-green-50"
                    >
                        <MessageCircle size={22} />
                        <span className="text-xs font-semibold">WhatsApp</span>
                    </a>

                    <a
                        href={siteConfig.maps}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-center gap-1 py-3 text-blue-600 transition hover:bg-blue-50"
                    >
                        <MapPin size={22} />
                        <span className="text-xs font-semibold">Directions</span>
                    </a>
                </div>
            </div>
        </>
    );
}