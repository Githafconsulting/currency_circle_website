import React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white font-medium"
      aria-label="Switch language"
    >
      <Globe size={18} />
      <span className="text-sm font-semibold uppercase">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  )
}

export default LanguageSwitcher
