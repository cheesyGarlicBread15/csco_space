import ProfileCard from '@/components/profile-card/ProfileCard'
import avatar from '@/assets/images/csco_space_avatar.png'
import mini_avatar from '@/assets/images/mini_avatar.jpg'
import card_bg from '@/assets/images/csco_space_card_bg.png'
import { ArrowLeft, Facebook, FacebookIcon, Linkedin, Loader2, LucideFacebook } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 py-12 px-4 relative overflow-hidden">

      {/* Animated background circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

      {/* Content wrapper */}
      <div className="relative z-10">

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
                avatarUrl={avatar}
                iconUrl={card_bg}
                showUserInfo
                enableMobileTilt
                enableTilt
                onContactClick={() => {
                  console.log('nav to social media')
                }} />
            ))}
          </div>
        </section>

        <div className="absolute top-10 left-10 w-24 h-24 bg-green-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

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


        <footer className="mt-16 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} CSCo. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App