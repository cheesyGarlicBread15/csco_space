"use client";

import logoFull from "@/assets/new_csco_logo_no_bg.png";
import logoIcon from "@/assets/new_csco_logo_no_bg.png";
import { Link } from "react-router-dom";

interface AppLogoProps {
    collapsed?: boolean; // icon-only mode
    to?: string; // link target
    className?: string; // extra styling
    size?: "sm" | "md" | "lg" | "xl"; // size prop
}

// Bigger height values
const sizeClasses = {
    sm: { full: "h-10", icon: "h-6" },
    md: { full: "h-12", icon: "h-8" },
    lg: { full: "h-16", icon: "h-10" },
    xl: { full: "h-20", icon: "h-12" },
};

export function AppLogo({
    collapsed = false,
    to = "/",
    className = "",
    size = "md",
}: AppLogoProps) {
    const heightClass = collapsed ? sizeClasses[size].icon : sizeClasses[size].full;

    return (
        <Link
            to={to}
            className={`flex items-center justify-center px-2 py-1 rounded-lg transition-all duration-200 hover:opacity-80 ${className}`}
        >
            <img
                src={collapsed ? logoIcon : logoFull}
                alt="App Logo"
                className={`w-auto max-w-full transition-all duration-200 ${heightClass}`}
            />
        </Link>
    );
}
