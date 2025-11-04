import React from 'react'

const AppFeatures = () => {
  const features = [
    {
      id: 'create-offers',
      title: 'Create Your Offers',
      description: 'Set your own exchange rates and terms. Post offers for the currencies you want to trade.',
      image: '/screen2.png',
      reverse: false,
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      id: 'match-offers',
      title: 'Browse & Match Trades',
      description: 'Explore available offers from verified users. Find the perfect match for your currency exchange needs.',
      image: '/screen3.png',
      reverse: true,
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Track Your Trades',
      description: 'Monitor all your active and completed trades in one place. Stay organized and in control.',
      image: '/screen4.png',
      reverse: false,
      gradient: 'from-pink-500/20 to-blue-500/20',
    },
    {
      title: 'Accept or Decline',
      description: 'Review matched trades and make informed decisions. Accept offers that work for you.',
      image: '/screen5.png',
      reverse: true,
      gradient: 'from-cyan-500/20 to-purple-500/20',
    },
    {
      id: 'in-discussion',
      title: 'Chat & Coordinate',
      description: 'Communicate securely with your trading partners. Coordinate exchange details easily.',
      image: '/screen6.png',
      reverse: false,
      gradient: 'from-purple-500/20 to-blue-500/20',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple & Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to trade currencies peer-to-peer
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              id={feature.id}
              className="group relative"
            >
              {/* Glassmorphic container */}
              <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div
                  className={`relative flex flex-col ${
                    feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-12 lg:gap-16`}
                >
                  {/* Image with zoom effect */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10 pointer-events-none`}></div>

                      <div className="w-72 sm:w-80 md:w-96 h-auto transform group-hover:scale-110 transition-transform duration-700">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className={`w-20 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppFeatures
