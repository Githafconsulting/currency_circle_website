import React from 'react'
import {
  Sparkles,
  Shield,
  MessageSquare,
  TrendingUp,
  Clock,
  Users,
  Lock,
  Zap,
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Set Your Own Rate',
      description:
        'You control the exchange rate. No more accepting unfavorable bank rates - negotiate directly with other users.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Verified Users Only',
      description:
        'Every user is verified with ID and proof of address. Trade with confidence knowing your counterparty is genuine.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: 'Built-in Chat',
      description:
        'Communicate securely with matched traders. Discuss details, share payment info, and coordinate your exchange.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Real-time Matching',
      description:
        'Our smart algorithm matches your offer with compatible users instantly. See the best matches for your currency needs.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      title: 'Fast Transactions',
      description:
        'Average completion time under 24 hours. Exchange currencies quickly without the typical bank delays.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Peer Review System',
      description:
        'Rate and review your trading partners. Build your reputation and trade with confidence based on user feedback.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description:
        'End-to-end encryption for all communications. Your data and transactions are protected with bank-level security.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Zero Hidden Fees',
      description:
        'Transparent pricing with no surprise charges. Pay a small match fee only when you complete a successful trade.',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-gradient"> Exchange with Confidence</span>
          </h2>
          <p className="text-xl text-gray-600">
            Currency Circle puts you in control with powerful features designed for secure,
            efficient peer-to-peer currency exchange.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
