import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import ScrollToTop from "@/components/custom/scroll-to-top";

export default function AppLayout() {
    const location = useLocation();

    return (
        <>
            <ScrollToTop />
            <div key={location.pathname} className="animate-in fade-in duration-200 flex min-h-screen flex-col bg-background text-foreground transition-colors duration-500">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
