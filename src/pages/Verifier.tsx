"use client";

import { useEffect } from "react";

export default function Verifier() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://verified.filpass.ph/static/customverifier.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white px-4 py-12">
            <div className="max-w-2xl w-full space-y-6 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    Document Verification
                </h1>

                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                    Verify FilPass-issued documents instantly. Blockchain-powered verification ensures authenticity and tamper-proof integrity.
                </p>
            </div>

            <div className="w-full max-w-4xl mt-12 flex justify-center">
                <filpass-verifier
                    width="80%"
                    accessToken="b34dac189f20498f887c9f54"
                ></filpass-verifier>
            </div>
        </div>
    );
}