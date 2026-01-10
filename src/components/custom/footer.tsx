export default function Footer() {
    return (
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
    )
}
