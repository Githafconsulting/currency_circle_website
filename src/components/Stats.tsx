import { TrendingUp, Users, Globe, Shield } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '2K+',
      label: 'Active Users',
      description: 'Growing community worldwide',
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries',
      description: 'Global currency exchange network',
    },
    {
      icon: TrendingUp,
      value: '$50M+',
      label: 'Exchanged',
      description: 'Total volume traded',
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Success Rate',
      description: 'Verified secure transactions',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                    <p className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by users worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-400">Forbes</div>
            <div className="text-2xl font-bold text-gray-400">Bloomberg</div>
            <div className="text-2xl font-bold text-gray-400">Reuters</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
