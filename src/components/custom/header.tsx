"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AppLogo } from "../app-logo"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Contact Us", path: "/contact" },
]

export default function Header() {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const handleLinkClick = () => {
        setIsSheetOpen(false) // close the mobile sheet when a nav link is clicked
    }

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to={'/'}>
                    <div className="flex items-center gap-2">
                        <AppLogo size="lg" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 dark:from-green-300 dark:to-yellow-300">
                            CSCo
                        </span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={({ isActive }) =>
                                `relative transition-colors ${isActive
                                    ? "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-green-400 after:to-yellow-400"
                                    : "text-muted-foreground hover:text-foreground"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="sm:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-64 sm:w-72 p-6 flex flex-col h-full"
                        >
                            <SheetHeader className="flex items-center justify-between">
                                <SheetTitle className="flex items-center gap-2">
                                    <AppLogo />
                                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 dark:from-green-300 dark:to-yellow-300">
                                        CSCo
                                    </span>
                                </SheetTitle>
                            </SheetHeader>

                            {/* Mobile Nav Links */}
                            <div className="mt-8 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        end={link.path === "/"}
                                        onClick={handleLinkClick} // CLOSE sheet on click
                                        className={({ isActive }) =>
                                            `relative block text-lg font-medium transition-colors px-2 py-1 rounded-md ${isActive
                                                ? "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-green-400 after:to-yellow-400"
                                                : "text-muted-foreground hover:text-foreground hover:bg-green-100 dark:hover:bg-green-800"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}
