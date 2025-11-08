import cscoLogo from './assets/new_csco_logo_no_bg.png'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gray-100 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">

      {/* Custom animations */}
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

      {/* Floating logo */}
      <div className="relative flex flex-col items-center">
        <img
          src={cscoLogo}
          alt="CSCO Logo"
          className="w-48 h-auto mb-8 animate-bounce-slow z-10"
        />
        {/* Ground shadow */}
        <div className="w-36 h-12 bg-black/40 dark:bg-black/70 rounded-full -mt-6 animate-shadow z-0 blur"></div>
      </div>

      {/* Gradient Heading */}
      <h1 className="text-5xl font-extrabold mb-4 text-center 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-green-400 to-yellow-400 
                     dark:from-green-300 dark:to-yellow-300 
                     animate-pulse-slow leading-snug">
        Coming Soon
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-center max-w-md mb-8">
        Our website is under construction. Stay tuned for updates!
      </p>

      {/* Floating background circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-green-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

      <footer className="mt-16 text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CSCo. All rights reserved.
      </footer>
    </div>
  )
}

export default App
