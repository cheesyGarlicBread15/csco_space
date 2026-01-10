"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Error() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-6 text-center animate-fadeIn">

            {/* Error Code */}
            <h1 className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg animate-pulse-slow">
                404
            </h1>

            {/* Main Title */}
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Oops! Something went wrong.
            </h2>

            {/* Description */}
            <p className="mt-2 sm:mt-4 max-w-md text-muted-foreground text-base sm:text-lg">
                Sorry, the page you’re looking for doesn’t exist or an unexpected error occurred.
            </p>

            {/* Back Home Button */}
            <Link to="/" className="mt-6 sm:mt-8">
                <Button
                    variant="default"
                    className="bg-gradient-to-r from-green-500 to-yellow-400 text-white hover:from-green-600 hover:to-yellow-500"
                >
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}
