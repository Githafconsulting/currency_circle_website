import { Fragment } from 'react'
import { Users, Globe, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: '2K+',
      label: 'Active Users',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      value: '20+',
      label: 'Countries',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      value: '$10M+',
      label: 'Exchanged',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Rounded separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats with Dividers */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-0">
          {stats.map((stat, index) => {
            return (
              <Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex-1 flex flex-col items-center text-center space-y-1 sm:space-y-2 px-2 sm:px-4 lg:px-8"
                >
                  {/* Value */}
                  <div className={`text-2xl sm:text-3xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-xs sm:text-sm lg:text-xl xl:text-2xl font-semibold text-white">{stat.label}</p>
                </motion.div>

                {/* Vertical Divider */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block relative h-64 mx-8">
                    <div className={`absolute inset-0 w-px bg-gradient-to-b from-transparent via-${stat.gradient.split(' ')[1].replace('to-', '')} to-transparent opacity-30`}></div>
                    <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20 blur-sm"></div>
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
