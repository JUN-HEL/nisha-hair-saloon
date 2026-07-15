import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import FloatingContact from "../components/shared/FloatingContact";
import ScrollToTop from "../components/common/ScrollToTop";

export default function MainLayout() {
    return (
        <div className="min-h-screen text-zinc-900">
            <ScrollToTop />

            <Navbar />

            <main className="pt-24">
                <Outlet />
            </main>

            <Footer />

            <FloatingContact />
        </div>
    );
}