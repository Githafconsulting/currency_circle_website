import React from 'react'
import { UserPlus, Search, MessageCircle, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Sign Up & Verify',
      description:
        'Create your account in minutes. Complete quick verification with your ID and proof of address to join our trusted community.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Search,
      title: 'Post Your Offer',
      description:
        'List the currency you have and what you want. Set your preferred exchange rate and let our algorithm find perfect matches.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: MessageCircle,
      title: 'Connect & Discuss',
      description:
        'Review matched users and their ratings. Chat directly to discuss details and arrange the best time and method for exchange.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Complete & Review',
      description:
        'Execute the exchange and mark complete. Rate your experience and build your reputation for future trades.',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple Process,
            <span className="text-gradient"> Powerful Results</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get started in 4 easy steps and join thousands exchanging currencies the smart way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-24 w-0.5 h-32 bg-gradient-to-b from-primary to-purple-300 hidden lg:block"></div>
                )}

                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Side */}
                  <div className="flex-1 text-center lg:text-left">
                    <div
                      className={`inline-block px-4 py-1 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-semibold mb-4`}
                    >
                      Step {step.number}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon Side */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div
                        className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="text-white" size={48} />
                      </div>
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg font-bold text-primary text-xl">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            onClick={() => {
              const element = document.getElementById('download')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Start Your First Exchange
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
