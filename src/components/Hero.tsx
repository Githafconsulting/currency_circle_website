import React from 'react'
import { Sparkles, Play } from 'lucide-react'
import AppleIcon from '@mui/icons-material/Apple'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Left side - Hero image */}
          <div className="flex-1 flex justify-center animate-slide-in-left w-full lg:w-auto">
            <div className="relative w-full max-w-sm lg:max-w-3xl">
              {/* Flare effect behind image */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <img
                  src="/flare.webp"
                  alt=""
                  className="w-full h-auto opacity-80 scale-150"
                />
              </div>
              {/* Hero image */}
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="Currency Circle App"
                  className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl relative z-10"
                />
                {/* Dark gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl sm:rounded-3xl pointer-events-none z-20"></div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 text-white space-y-6 sm:space-y-8 max-w-xl animate-slide-in-right text-center lg:text-left">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
              <Sparkles className="text-yellow-300" size={18} />
              <span className="text-xs sm:text-sm font-medium">{t('hero.badge')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {t('hero.title1')}
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                {t('hero.title2')}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              {t('hero.description')}
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
              {/* App Store Button with Coming Soon */}
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => {
                    const element = document.getElementById('download')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group bg-white hover:bg-gray-100 text-black px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all flex items-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <div className="bg-black/10 p-1.5 sm:p-2 rounded-lg">
                    <AppleIcon sx={{ fontSize: 20 }} className="sm:text-[24px]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">{t('hero.appStore')}</div>
                    <div className="text-sm sm:text-base font-bold">{t('hero.appStoreButton')}</div>
                  </div>
                </button>
                <span className="text-xs text-purple-400 font-medium">{t('hero.comingSoon')}</span>
              </div>

              {/* Play Store Button */}
              <button
                onClick={() => {
                  const element = document.getElementById('download')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group bg-white hover:bg-gray-100 text-black px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all flex items-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <div className="bg-black/10 p-1.5 sm:p-2 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">{t('hero.googlePlay')}</div>
                  <div className="text-sm sm:text-base font-bold">{t('hero.googlePlayButton')}</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero
