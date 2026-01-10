import ProfileCard from '@/components/profile-card/ProfileCard'
import avatar from '@/assets/images/csco_space_avatar.png'
import mini_avatar from '@/assets/images/mini_avatar.jpg'
import card_bg from '@/assets/images/csco_space_card_bg.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 py-12 px-4">

      {/* Advisers Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 dark:from-green-300 dark:to-yellow-300 mb-2">
            Advisers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <ProfileCard
            name='Daven R. Alajid'
            title='4th Year Representative'
            handle='davenvinci.alajid'
            miniAvatarUrl={mini_avatar}
            contactText='FB'
            avatarUrl={avatar}
            iconUrl={card_bg}
            showUserInfo
            enableMobileTilt
            enableTilt />

          <ProfileCard
            name='Daven R. Alajid'
            title='4th Year Representative'
            handle='davenvinci.alajid'
            miniAvatarUrl={mini_avatar}
            contactText='FB'
            avatarUrl={avatar}
            iconUrl={card_bg}
            showUserInfo
            enableMobileTilt
            enableTilt />

          <ProfileCard
            name='Daven R. Alajid'
            title='4th Year Representative'
            handle='davenvinci.alajid'
            miniAvatarUrl={mini_avatar}
            contactText='FB'
            avatarUrl={avatar}
            iconUrl={card_bg}
            showUserInfo
            enableMobileTilt
            enableTilt />
        </div>
      </section>

      {/* Officers Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 mb-2">
            Officers
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
          {Array.from({ length: 32 }).map((_, index) => (
            <ProfileCard
              key={index}
              name='Daven R. Alajid'
              title='4th Year Representative'
              handle='davenvinci.alajid'
              miniAvatarUrl={mini_avatar}
              contactText='FB'
              avatarUrl={avatar}
              iconUrl={card_bg}
              showUserInfo
              enableMobileTilt
              enableTilt />
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CSCo. All rights reserved.
      </footer>
    </div>
  )
}

export default App