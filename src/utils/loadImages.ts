export const images = import.meta.glob('@/assets/images/profiles/**/*.{png,jpg}', { eager: true })

export const imageMap: Record<string, string> = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const fileName = path.split('/').pop()
        return [fileName, (module as any).default]
    })
)
