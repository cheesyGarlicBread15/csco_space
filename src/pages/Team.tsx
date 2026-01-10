import ProfileCard from '@/components/profile-card/profile-card'
import card_bg from '@/assets/images/csco_space_card_bg.png'
import { imageMap } from '@/utils/loadImages'

type Person = {
    name: string
    title: string
    handle: string
    miniAvatarUrl: string
    avatarUrl: string
    onContactClick: string
}

type Section = {
    title: string
    persons: Person[]
}

export const sections: Section[] = [
    {
        title: "Chairpersons",
        persons: [
            {
                name: "Stephen Joseph D. Rubin",
                title: "Chairperson",
                handle: "ghouter.milly",
                miniAvatarUrl: imageMap["mini_rubin.jpg"],
                avatarUrl: imageMap["rubin.png"],
                onContactClick: "https://www.facebook.com/ghouter.milly"
            },
            {
                name: "Jacob Hermon C. Pescacio",
                title: "Vice Chairperson Internal",
                handle: "hakobiiiii",
                miniAvatarUrl: imageMap["mini_pescacio.jpg"],
                avatarUrl: imageMap["pescacio.png"],
                onContactClick: "https://www.facebook.com/hakobiiiii"
            },
            {
                name: "Maky Auri L. Okit",
                title: "Vice Chairperson External",
                handle: "maky.auri",
                miniAvatarUrl: imageMap["mini_okit.jpg"],
                avatarUrl: imageMap["okit.png"],
                onContactClick: "https://www.facebook.com/maky.auri"
            },
        ],
    },

    {
        title: "Secretariat",
        persons: [
            {
                name: "Vianca Louise A. Unajan",
                title: "Secretary",
                handle: "vianniee.me",
                miniAvatarUrl: imageMap["mini_unajan.jpg"],
                avatarUrl: imageMap["unajan.png"],
                onContactClick: "https://www.facebook.com/vianniee.me"
            },
            {
                name: "Airesh Shine A. Abcede",
                title: "Associate Secretary",
                handle: "airesh.shine",
                miniAvatarUrl: imageMap["mini_abcede.jpg"],
                avatarUrl: imageMap["abcede.png"],
                onContactClick: "https://www.facebook.com/100066796093298"
            },
        ],
    },

    {
        title: "Finance",
        persons: [
            {
                name: "Kamil Cairbre A. Cloma",
                title: "Treasurer",
                handle: "kamil.cloma.1",
                miniAvatarUrl: imageMap["mini_cloma.jpg"],
                avatarUrl: imageMap["cloma.png"],
                onContactClick: "https://www.facebook.com/kamil.cloma.1"
            },
            {
                name: "Khyf Francis P. Palomares",
                title: "Associate Treasurer",
                handle: "Khyfiepalomares17",
                miniAvatarUrl: imageMap["mini_palomares.jpg"],
                avatarUrl: imageMap["palomares.png"],
                onContactClick: "https://www.facebook.com/Khyfiepalomares17"
            },
            {
                name: "Hazel Jane C. Amparado",
                title: "Auditor",
                handle: "mitchelcajatol.amparado.9",
                miniAvatarUrl: imageMap["mini_amparado.jpg"],
                avatarUrl: imageMap["amparado.png"],
                onContactClick: "https://www.facebook.com/mitchelcajatol.amparado.9"
            },
        ],
    },

    {
        title: "Committee Heads",
        persons: [
            {
                name: "Julian Maurice P. Marte",
                title: "Committee Head Internal",
                handle: "julianmaurice.marte",
                miniAvatarUrl: imageMap["mini_marte.jpg"],
                avatarUrl: imageMap["marte.png"],
                onContactClick: "https://www.facebook.com/julianmaurice.marte"
            },
            {
                name: "Johncarl C. Escleto",
                title: "Committee Head External",
                handle: "carljohn.escleto",
                miniAvatarUrl: imageMap["mini_escleto.jpg"],
                avatarUrl: imageMap["escleto.png"],
                onContactClick: "https://www.facebook.com/carljohn.escleto"
            },
            {
                name: "Constantine Jay P. Limbu",
                title: "Committee Head Publication",
                handle: "constantinejaylimbu",
                miniAvatarUrl: imageMap["mini_limbu.jpg"],
                avatarUrl: imageMap["limbu.png"],
                onContactClick: "https://www.facebook.com/constantinejaylimbu"
            },
        ],
    },

    {
        title: "Year Level Representatives",
        persons: [
            {
                name: "Client Michael Juyad",
                title: "1st Year Representative",
                handle: "klint.jzd",
                miniAvatarUrl: imageMap["mini_juyad.png"],
                avatarUrl: imageMap["juyad.png"],
                onContactClick: "https://www.facebook.com/klint.jzd"
            },
            {
                name: "Rafael Sofian O. Guipetacio",
                title: "2nd Year Representative",
                handle: "rafaelsofian.guipetacio.9",
                miniAvatarUrl: imageMap["mini_guipetacio.jpg"],
                avatarUrl: imageMap["guipetacio.png"],
                onContactClick: "https://www.facebook.com/rafaelsofian.guipetacio.9"
            },
            {
                name: "Ken F. Tabianan",
                title: "3rd Year Representative",
                handle: "kentabianan.f",
                miniAvatarUrl: imageMap["mini_tabianan.jpg"],
                avatarUrl: imageMap["tabianan.png"],
                onContactClick: "https://www.facebook.com/kentabianan.f"
            },
            {
                name: "Daven R. Alajid",
                title: "4th Year Representative",
                handle: "davenvinci.alajid",
                miniAvatarUrl: imageMap["mini_alajid.jpg"],
                avatarUrl: imageMap["alajid.png"],
                onContactClick: "https://www.facebook.com/davenvinci.alajid"
            },
        ],
    },

    {
        title: "Advisers",
        persons: [
            {
                name: "Flordeliza N. Aguirre",
                title: "Adviser",
                handle: "liza.nacaituna",
                miniAvatarUrl: imageMap["mini_aguirre.jpg"],
                avatarUrl: imageMap["aguirre.png"],
                onContactClick: "https://www.facebook.com/liza.nacaituna"
            },
            {
                name: "Ronnel A. Cabarles",
                title: "Adviser",
                handle: "gonhunter25",
                miniAvatarUrl: imageMap["mini_cabarles.jpg"],
                avatarUrl: imageMap["cabarles.png"],
                onContactClick: "https://www.facebook.com/gonhunter25"
            },
            {
                name: "Neil John J. Jomaya",
                title: "Adviser",
                handle: "yinjenxie",
                miniAvatarUrl: imageMap["mini_jomaya.jpg"],
                avatarUrl: imageMap["jomaya.png"],
                onContactClick: "https://www.facebook.com/yinjenxie"
            },
        ],
    },

    {
        title: "Volunteers",
        persons: [
            {
                name: "Aiza M. Bacolod",
                title: "Internal Volunteer",
                handle: "ayzsami",
                miniAvatarUrl: imageMap["mini_bacolod.jpg"],
                avatarUrl: imageMap["bacolod.png"],
                onContactClick: "https://www.facebook.com/ayzsami"
            },
            {
                name: "Lance Lyster O. Balubar",
                title: "External Volunteer",
                handle: "lance.balubar.1",
                miniAvatarUrl: imageMap["mini_balubar.jpg"],
                avatarUrl: imageMap["balubar.png"],
                onContactClick: "https://www.facebook.com/lance.balubar.1"
            },
            {
                name: "Auvergne C. Cabardo",
                title: "Internal Volunteer",
                handle: "vvwuua",
                miniAvatarUrl: imageMap["mini_cabardo.jpg"],
                avatarUrl: imageMap["cabardo.png"],
                onContactClick: "https://www.facebook.com/vvwuua"
            },
            {
                name: "Rea Adreanne R. Caday",
                title: "External Volunteer",
                handle: "reaadreanne",
                miniAvatarUrl: imageMap["mini_caday.jpg"],
                avatarUrl: imageMap["caday.png"],
                onContactClick: "https://www.facebook.com/reaadreanne"
            },
            {
                name: "Rigeel G. Daguplo",
                title: "Internal Volunteer",
                handle: "rigeel.daguplo",
                miniAvatarUrl: imageMap["mini_daguplo.jpg"],
                avatarUrl: imageMap["daguplo.png"],
                onContactClick: "https://www.facebook.com/profile.php?id=61577931878977"
            },
            {
                name: "Althea Mae T. Docoy",
                title: "External Volunteer",
                handle: "glenlanderojr",
                miniAvatarUrl: imageMap["mini_docoy.jpg"],
                avatarUrl: imageMap["docoy.png"],
                onContactClick: "https://www.facebook.com/glenlanderojr"
            },
            {
                name: "Destiny Gonzaga",
                title: "Publication Volunteer",
                handle: "sh1zu.1",
                miniAvatarUrl: imageMap["mini_gonzaga.jpg"],
                avatarUrl: imageMap["gonzaga.png"],
                onContactClick: "https://www.facebook.com/sh1zu.1"
            },
            {
                name: "Vince Alzer C. Lumbay",
                title: "Internal Volunteer",
                handle: "vincenzo.lumbay",
                miniAvatarUrl: imageMap["mini_lumbay.jpg"],
                avatarUrl: imageMap["lumbay.png"],
                onContactClick: "https://www.facebook.com/vincenzo.lumbay"
            },
            {
                name: "John Carlo C. Magno",
                title: "External Volunteer",
                handle: "janjankaloy",
                miniAvatarUrl: imageMap["mini_magno.jpg"],
                avatarUrl: imageMap["magno.png"],
                onContactClick: "https://www.facebook.com/janjankaloy"
            },
            {
                name: "Bon Kierby L. Ortizano",
                title: "Publication Volunteer",
                handle: "bonnzziue",
                miniAvatarUrl: imageMap["mini_ortizano.jpg"],
                avatarUrl: imageMap["ortizano.png"],
                onContactClick: "https://www.facebook.com/bonnzziue"
            },
            {
                name: "Johayrah M. Osmeña",
                title: "External Volunteer",
                handle: "johayrah.169453",
                miniAvatarUrl: imageMap["mini_osmena.jpg"],
                avatarUrl: imageMap["osmena.png"],
                onContactClick: "https://www.facebook.com/johayrah.169453"
            },
            {
                name: "Ivan Kient Purol",
                title: "Publication Volunteer",
                handle: "ivan.purol.7",
                miniAvatarUrl: imageMap["mini_purol.png"],
                avatarUrl: imageMap["purol.png"],
                onContactClick: "https://www.facebook.com/ivan.purol.7"
            },
            {
                name: "Jose Gilberto F. Sadicon",
                title: "Internal Volunteer",
                handle: "jose.sadicon",
                miniAvatarUrl: imageMap["mini_sadicon.jpg"],
                avatarUrl: imageMap["sadicon.png"],
                onContactClick: "https://www.facebook.com/jose.sadicon"
            },
            {
                name: "Shekinah Myrrh O. Solon",
                title: "Publication Volunteer",
                handle: "kaiideharaz",
                miniAvatarUrl: imageMap["mini_solon.jpg"],
                avatarUrl: imageMap["solon.png"],
                onContactClick: "https://www.facebook.com/kaiideharaz"
            },
            {
                name: "Jethro Uayan",
                title: "Publication Volunteer",
                handle: "jethers.uayan.5",
                miniAvatarUrl: imageMap["mini_uayan.jpg"],
                avatarUrl: imageMap["uayan.png"],
                onContactClick: "https://www.facebook.com/jethers.uayan.5"
            },
        ],
    },
]


export default function Team() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 px-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />

            <div className="relative z-10">
                {/* Main Title */}
                <h1 className="text-5xl font-extrabold mb-4 text-center 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-green-400 to-yellow-400 
                     dark:from-green-300 dark:to-yellow-300 
                     animate-pulse-slow leading-snug">
                    CSCO Officers and Volunteers
                </h1>

                {/* Sections */}
                {sections.map((section) => (
                    <section key={section.title} className="max-w-7xl mx-auto mb-20">
                        <div className="text-center mb-16">
                            <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold tracking-tight
                 bg-clip-text text-transparent
                 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300
                 drop-shadow-md">
                                {section.title}
                                {/* Animated glowing underline */}
                                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2
                     w-2/3 h-1 rounded-full
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                     opacity-60 blur-md"></span>
                            </h2>

                            {/* Optional subtle separator line */}
                            <div className="mt-6 h-1 w-24 mx-auto rounded-full
                  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                  opacity-50"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {section.persons.map((person, idx) => (
                                <ProfileCard
                                    key={idx}
                                    name={person.name}
                                    title={person.title}
                                    handle={person.handle}
                                    miniAvatarUrl={person.miniAvatarUrl}
                                    avatarUrl={person.avatarUrl}
                                    iconUrl={card_bg}
                                    showUserInfo
                                    enableMobileTilt
                                    enableTilt
                                    onContactClick={() => {
                                        if (person.onContactClick) {
                                            window.open(person.onContactClick, "_blank", "noopener,noreferrer")
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}