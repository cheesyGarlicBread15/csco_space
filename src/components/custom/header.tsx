import { NavLink } from "react-router-dom"

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
]

export default function Header() {
    return (
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
    )
}
