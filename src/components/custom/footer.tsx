"use client"

import { Link } from "react-router-dom"
import { Facebook, Mail } from "lucide-react"
import { AppLogo } from "../app-logo"

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
]

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* Left Column: Logo + Copyright */}
                <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-3">
                        <Link to="/">
                            <AppLogo />
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} CSCo. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Middle Column: Navigation */}
                <div className="flex justify-center">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-sm font-semibold text-foreground mb-2">MENU</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Contact (Facebook + Email) */}
                <div className="flex justify-center">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-sm font-semibold text-foreground mb-2">CONTACT</h3>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.facebook.com/cmucsco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=csco@cmu.edu.ph"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                            >
                                <Mail className="h-5 w-5" /> csco@cmu.edu.ph
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
