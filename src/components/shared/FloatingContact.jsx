import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function FloatingContact() {
    const phone = "+919999999999";
    const whatsapp = "919999999999";
    const mapsLink = "https://maps.google.com/?q=Gumkhal+Market+Pauri+Garhwal";

    return (
        <>
            <div className="fixed bottom-5 right-4 z-50 hidden flex-col gap-3 md:flex">
                <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                    <MessageCircle size={18} />
                    WhatsApp
                </a>

                <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 rounded-full bg-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                    <Phone size={18} />
                    Call
                </a>

                <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                    <MapPin size={18} />
                    Directions
                </a>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-zinc-200 bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.08)] md:hidden">
                <a
                    href={`tel:${phone}`}
                    className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-zinc-800"
                >
                    <Phone size={18} />
                    Call
                </a>

                <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-green-600"
                >
                    <MessageCircle size={18} />
                    WhatsApp
                </a>

                <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-zinc-800"
                >
                    <MapPin size={18} />
                    Directions
                </a>
            </div>
        </>
    );
}