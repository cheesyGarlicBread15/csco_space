import PixelCard from "@/components/PixelCard";

export default function Gallery() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <PixelCard
                variant="pink"       // choose 'default' | 'blue' | 'yellow' | 'pink'
                className="w-[350px] h-[450px]" // optional: adjust card size
            >
                {/* Content inside the PixelCard */}
                <div className="flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl font-bold text-white mb-2">Coming Soon</h1>
                    <p className="text-white/80">This page is under development.</p>
                </div>
            </PixelCard>
        </div>
    )
}