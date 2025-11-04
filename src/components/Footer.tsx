import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Currency Circle" className="h-10 w-auto" />
              <span className="text-xl font-bold">Currency Circle</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>


          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition">
                  {t('footer.termsOfService')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  {t('footer.cookiePolicy')}
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-white transition">
                  {t('footer.security')}
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-400 hover:text-white transition">
                  {t('footer.compliance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">support@currencycircle.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 Currency Circle. {t('footer.rights')}
            </p>

            {/* Language Selector with Flags */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-gray-400 text-xs font-medium">{t('footer.selectLanguage')}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    i18n.language === 'en'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">🇬🇧</span>
                  <span className="text-sm font-semibold">EN</span>
                </button>
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    i18n.language === 'fr'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">🇫🇷</span>
                  <span className="text-sm font-semibold">FR</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link to="/help" className="text-gray-400 hover:text-white text-sm transition">
                {t('footer.helpCenter')}
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-white text-sm transition">
                {t('footer.blog')}
              </Link>
              <Link to="/careers" className="text-gray-400 hover:text-white text-sm transition">
                {t('footer.careers')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
