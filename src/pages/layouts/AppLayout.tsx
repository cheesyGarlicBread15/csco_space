import { NavLink, Outlet } from "react-router-dom"

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
]

export default function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-500">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 dark:from-green-300 dark:to-yellow-300">
                        MyApp
                    </h1>

                    {/* Nav Links */}
                    <div className="flex gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                className={({ isActive }) =>
                                    `
                  relative transition-colors
                  ${isActive
                                        ? "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-green-400 after:to-yellow-400"
                                        : "text-muted-foreground hover:text-foreground"
                                    }
                `
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-background">
                <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} MyApp. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        {["Privacy", "Terms", "Support"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}
