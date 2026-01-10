import ProfileCard from '@/components/profile-card/ProfileCard'
import avatar from '@/assets/images/csco_space_avatar.png'
import mini_avatar from '@/assets/images/mini_avatar.jpg'
import card_bg from '@/assets/images/csco_space_card_bg.png'

type Person = {
    name: string
    title: string
    handle: string
    miniAvatarUrl: string
    avatarUrl: string
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
                name: "Daven R. Alajid",
                title: "CSCO Chairperson",
                handle: "davenvinci.alajid",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
            },
        ],
    },

    {
        title: "Secretariat",
        persons: [
            {
                name: "Jane D. Cruz",
                title: "Secretary",
                handle: "jane.cruz",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
            },
        ],
    },

    {
        title: "Finance",
        persons: [
            {
                name: "Mark A. Santos",
                title: "Treasurer",
                handle: "mark.santos",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
            },
        ],
    },

    {
        title: "Committee Heads",
        persons: [
            {
                name: "Angela M. Reyes",
                title: "Events Committee Head",
                handle: "angela.reyes",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
            },
        ],
    },

    {
        title: "Year Level Representatives",
        persons: [
            {
                name: "Joshua P. Lim",
                title: "4th Year Representative",
                handle: "joshua.lim",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
            },
        ],
    },

    {
        title: "Advisers",
        persons: [
            {
                name: "Engr. Maria L. Gomez",
                title: "Faculty Adviser",
                handle: "maria.gomez",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
            },
        ],
    },

    {
        title: "Volunteers",
        persons: [
            {
                name: "Kevin T. Ramos",
                title: "Volunteer",
                handle: "kevin.ramos",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
            },
        ],
    },

    {
        title: "Members",
        persons: [
            {
                name: "Sophia R. Tan",
                title: "CSCO Member",
                handle: "sophia.tan",
                miniAvatarUrl: mini_avatar,
                avatarUrl: avatar,
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
                                />
                            ))}
                        </div>
                    </section>
                ))}

                {/* Footer */}
                <footer className="mt-16 text-center text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} CSCo. All rights reserved.
                </footer>
            </div>
        </div>
    )
}