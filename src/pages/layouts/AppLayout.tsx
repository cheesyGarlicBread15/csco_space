import { Outlet } from "react-router-dom"
import Header from "@/components/custom/header"
import Footer from "@/components/custom/footer"

export default function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-500">
            <Header />

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
