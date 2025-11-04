import React, { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const TestimonialsSection = () => {
  const { t } = useTranslation()
  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      location: t('testimonials.testimonial1.location'),
      image: '/testimonial-1.jpg',
      rating: 5,
      text: t('testimonials.testimonial1.text'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: t('testimonials.testimonial2.name'),
      location: t('testimonials.testimonial2.location'),
      image: '/testimonial-2.jpg',
      rating: 5,
      text: t('testimonials.testimonial2.text'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: t('testimonials.testimonial3.name'),
      location: t('testimonials.testimonial3.location'),
      image: '/testimonial-3.jpg',
      rating: 5,
      text: t('testimonials.testimonial3.text'),
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: t('testimonials.testimonial4.name'),
      location: t('testimonials.testimonial4.location'),
      image: '/testimonial-4.jpg',
      rating: 5,
      text: t('testimonials.testimonial4.text'),
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: t('testimonials.testimonial5.name'),
      location: t('testimonials.testimonial5.location'),
      image: '/testimonial-5.jpg',
      rating: 5,
      text: t('testimonials.testimonial5.text'),
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      name: t('testimonials.testimonial6.name'),
      location: t('testimonials.testimonial6.location'),
      image: '/testimonial-6.jpg',
      rating: 5,
      text: t('testimonials.testimonial6.text'),
      gradient: 'from-blue-500 to-purple-500',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  // Get visible testimonials with looping
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], key: `${index}-${currentIndex}` })
    }
    return visible
  }

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-black relative overflow-hidden border-t border-white/5">
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
            <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border border-yellow-500/30">
              {t('testimonials.badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('testimonials.title')}
            <span className="block text-gradient mt-2">{t('testimonials.titleGradient')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.key}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all relative"
              >
                {/* Quote Icon */}
                <div className={`absolute top-6 right-6 w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center opacity-20`}>
                  <Quote size={20} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-300 mb-6 text-lg">
            {t('testimonials.joinText')}
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('download')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-2xl hover:scale-105"
          >
            {t('testimonials.ctaButton')}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
