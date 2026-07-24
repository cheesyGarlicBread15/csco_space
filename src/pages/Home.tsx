"use client";

import { Button } from "@/components/ui/button";
import team from "@/assets/images/team.jpg"
import { Link } from "react-router-dom";
import logo from '@/assets/new_csco_logo_no_bg.png'


export default function HomePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            {/* Hero Section */}
            <section className="relative py-20 sm:py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-zinc-950"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
                    <div className="space-y-6">
                        <style>
                            {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }

          @keyframes shadow-scale {
            0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.25; }
            50% { transform: scaleX(1.3) scaleY(0.7); opacity: 0.15; }
          }

          .animate-bounce-slow { animation: bounce-slow 3s infinite; }
          .animate-pulse-slow { animation: pulse-slow 4s infinite; }
          .animate-shadow { animation: shadow-scale 3s infinite; }
        `}
                        </style>

                        <div className="flex justify-center">
                            <img
                                src={logo}
                                alt="CSCo Logo"
                                className="
                w-32 h-32 sm:w-40 sm:h-40
                object-contain
                animate-float
                drop-shadow-[0_0_25px_rgba(59,130,246,0.25)]
                animate-bounce-slow
              "
                            />
                        </div>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white">
                            CSCo
                        </h1>
                        <p className="text-2xl sm:text-3xl text-zinc-700 dark:text-zinc-300 font-light">
                            College of Information Sciences and Computing
                        </p>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Student Council Organization
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <a
                            href="https://www.facebook.com/cmucsco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Facebook</span>
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=csco@cmu.edu.ph"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Us</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight border-b-4 border-blue-500 pb-2 inline-block">
                                Mission
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                <span className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white float-left mr-3 leading-none">T</span>
                                o provide CISC students with a platform that allows them to discover and engage their strengths, talents, and passions but at the same time bring forth a new formation of knowledge in the field of Information and Communication Technology on a global scale.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight border-b-4 border-purple-500 pb-2 inline-block">
                                Vision
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                <span className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white float-left mr-3 leading-none">T</span>
                                he students in the College of Information Sciences and Computing are empowered, united and actively involved in a positive environment set by the College of Information Sciences and Computing Student Council.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left - Image */}
                        <div className="order-2 md:order-1">
                            <div className="aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden">
                                <img
                                    src={team}
                                    alt="CSCo Leadership Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="order-1 md:order-2 space-y-6">
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-3">
                                    Team
                                </h2>
                                <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                                    Academic Year 2025–2026
                                </p>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                Our team of 33 dedicated officers work tirelessly to represent the student body, coordinate campus activities, and ensure every voice is heard. With diverse skills and talents, each member brings passion, expertise, and commitment to serving our community.
                            </p>

                            <Button size={"lg"}>
                                <Link to={'/team'}>
                                    Meet the Team
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        Our Logo
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12">
                        Every element represents our commitment to students
                    </p>

                    <div className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                        <div className="aspect-[2/1] flex items-center justify-center">
                            <span className="text-zinc-400 dark:text-zinc-600 font-medium text-lg">
                                Logo Explanation Graphic
                            </span>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>

    );
}
