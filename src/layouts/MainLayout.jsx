import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import FloatingContact from "../components/shared/FloatingContact";

export default function MainLayout() {
    return (
        <div className="min-h-screen text-zinc-900">
            <Navbar />
            <main className="pt-24">
                <Outlet />
            </main>
            <Footer />
            <FloatingContact />
        </div>
    );
}