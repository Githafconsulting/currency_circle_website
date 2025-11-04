import { useTranslation } from 'react-i18next'

const ChatWithMatchSection = () => {
  const { t } = useTranslation()
  return (
    <section id="chat-match" className="relative py-12 sm:py-16 lg:py-32 bg-black overflow-hidden">
      {/* Rounded separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8">
          {/* Left - Phone Mockup with slide animation */}
          <div className="flex justify-center lg:justify-end animate-slide-from-center-left">
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl scale-75" />

              {/* Phone mockup with animation */}
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/chat.png"
                  alt="Chat with Match Screen"
                  className="w-full max-w-[280px] sm:max-w-xs lg:max-w-sm h-auto drop-shadow-2xl"
                />
                {/* Dark gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Vertical Divider Line */}
          <div className="hidden lg:block relative h-96 mx-4">
            <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-80"></div>
            <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>
          </div>

          {/* Right Content with slide animation */}
          <div className="max-w-xl space-y-4 sm:space-y-6 animate-slide-from-center-right text-center lg:text-left">
            <div className="inline-block">
              <span className="bg-cyan-500/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-500/30">
                {t('chat.badge')}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              {t('chat.title')}
              <span className="block text-gradient mt-2">{t('chat.titleGradient')}</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {t('chat.description')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Slide from center (divider) to left */
        @keyframes slideFromCenterLeft {
          0% {
            opacity: 0;
            transform: translateX(50%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Slide from center (divider) to right */
        @keyframes slideFromCenterRight {
          0% {
            opacity: 0;
            transform: translateX(-50%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-from-center-left {
          animation: slideFromCenterLeft 1s ease-out forwards;
        }

        .animate-slide-from-center-right {
          animation: slideFromCenterRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default ChatWithMatchSection
