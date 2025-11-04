import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const FAQSection = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer'),
    },
    {
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer'),
    },
    {
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer'),
    },
    {
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer'),
    },
    {
      question: t('faq.questions.q5.question'),
      answer: t('faq.questions.q5.answer'),
    },
    {
      question: t('faq.questions.q6.question'),
      answer: t('faq.questions.q6.answer'),
    },
    {
      question: t('faq.questions.q7.question'),
      answer: t('faq.questions.q7.answer'),
    },
    {
      question: t('faq.questions.q8.question'),
      answer: t('faq.questions.q8.answer'),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-black relative overflow-hidden">
      {/* Rounded separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border border-purple-500/30">
              {t('faq.badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('faq.title')}
            <span className="block text-gradient mt-2">{t('faq.titleGradient')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            {t('faq.description')}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between text-left transition-all"
              >
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white pr-4 sm:pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus className="text-white" size={20} />
                  ) : (
                    <Plus className="text-white" size={20} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">{t('faq.stillHaveQuestions')}</p>
          <button
            onClick={() => {
              const element = document.getElementById('download')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="backdrop-blur-xl bg-white/10 border-2 border-white/20 hover:bg-white hover:border-white text-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {t('faq.getStartedButton')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
