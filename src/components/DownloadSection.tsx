import React from 'react'
import AppleIcon from '@mui/icons-material/Apple'
import { Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const DownloadSection = () => {
  const { t } = useTranslation()
  return (
    <section id="download" className="relative py-12 sm:py-16 lg:py-32 bg-black overflow-hidden">
      {/* Rounded separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Heading */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border border-purple-500/30">
                {t('download.badge')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {t('download.title')}
              <span className="block text-gradient mt-2">{t('download.titleGradient')}</span>
            </h2>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 w-full sm:w-auto px-4">
            {/* App Store Button with Coming Soon */}
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="group hover:opacity-80 transition-opacity w-full sm:w-auto"
              >
                <div className="bg-black text-white border border-white/20 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[200px] hover:bg-gray-900 transition-colors">
                  <AppleIcon sx={{ fontSize: 40 }} />
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">{t('download.appStore')}</div>
                    <div className="text-xl font-semibold leading-tight">{t('download.appStoreButton')}</div>
                  </div>
                </div>
              </a>
              <span className="text-sm text-purple-400 font-medium">{t('download.comingSoon')}</span>
            </div>

            {/* Play Store Button */}
            <a
              href="#"
              className="group hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              <div className="bg-black text-white border border-white/20 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[200px] hover:bg-gray-900 transition-colors">
                <Play className="w-10 h-10" fill="currentColor" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight">{t('download.googlePlay')}</div>
                  <div className="text-xl font-semibold leading-tight">{t('download.googlePlayButton')}</div>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="pt-8">
            <p className="text-gray-400">
              {t('download.info')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
