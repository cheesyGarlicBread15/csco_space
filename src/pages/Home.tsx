"use client";

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            {/* Hero Section */}
            <section className="relative py-40 sm:py-52 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600"
                        alt="Students collaborating"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/80 to-zinc-950 dark:from-zinc-950/70 dark:via-zinc-950/80 dark:to-zinc-950"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                        CSCo
                    </h1>
                    <p className="text-2xl sm:text-3xl text-zinc-200 font-light">
                        College of Information Sciences and Computing
                    </p>
                    <p className="text-lg text-zinc-300">
                        Student Council Organization
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        <div className="space-y-4">
                            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-2">
                                Mission
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                                Representing with integrity
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                To represent the student body with integrity, promote inclusive leadership,
                                and collaborate with the administration to advance student welfare and
                                academic excellence.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full mb-2">
                                Vision
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                                Empowering our community
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                A united and empowered student community actively shaping a progressive
                                and student-centered institution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-3">
                            Leadership
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                            Academic Year 2025–2026
                        </p>
                    </div>

                    {/* President */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-10 rounded-3xl border border-blue-100 dark:border-blue-900/50 mb-12">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex-shrink-0 shadow-xl"></div>
                            <div className="text-center md:text-left flex-1">
                                <div className="inline-block px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                                    President
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                                    Juan Dela Cruz
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    Leading with vision and dedication
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Executive Board */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                            Executive Board
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { position: "Vice President", name: "Maria Santos" },
                                { position: "Secretary", name: "Pedro Garcia" },
                                { position: "Treasurer", name: "Ana Reyes" },
                                { position: "Auditor", name: "Jose Ramos" },
                            ].map((officer, index) => (
                                <div
                                    key={index}
                                    className="group bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider font-semibold mb-2">
                                        {officer.position}
                                    </p>
                                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                                        {officer.name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Officers Preview */}
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                                    Committee Heads & Officers
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    25 more officers serving across various committees
                                </p>
                            </div>
                            <button className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-lg">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Meaning Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-16">
                        Our Logo
                    </h2>

                    <div className="grid md:grid-cols-5 gap-12 items-center">
                        {/* Logo */}
                        <div className="md:col-span-2 flex justify-center">
                            <div className="w-64 h-64 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                                <span className="text-zinc-400 dark:text-zinc-600 font-medium">Logo</span>
                            </div>
                        </div>

                        {/* Symbolism */}
                        <div className="md:col-span-3 space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex-shrink-0"></div>
                                <div>
                                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-1">
                                        Blue
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        Integrity and trust
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl">
                                    ⭐
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-1">
                                        Star
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        Student excellence
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-zinc-800 dark:bg-zinc-300 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl">
                                    🛡️
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-1">
                                        Shield
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        Protection of student rights
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}