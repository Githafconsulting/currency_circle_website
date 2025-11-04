import { Apple, Smartphone, Download as DownloadIcon, Shield, Users, Zap, Lock } from 'lucide-react'

const Download = () => {
  const features = [
    { icon: Shield, text: 'Bank-level security' },
    { icon: Users, text: 'Verified users only' },
    { icon: Zap, text: 'Instant matching' },
    { icon: Lock, text: 'End-to-end encryption' },
  ]

  return (
    <section id="download" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3 rounded-full shadow-lg mb-4">
            <DownloadIcon className="text-blue-400" size={20} />
            <span className="text-sm font-medium text-white">Get Started Today</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Download Currency Circle
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Available on iOS and Android. Start trading currencies today.
          </p>

          {/* Features List - Black and White */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                <feature.icon size={20} className="text-black" />
                <span className="font-medium text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            {/* App Store Button */}
            <a
              href="#"
              className="group backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-5 rounded-2xl font-semibold transition-all flex items-center gap-4 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[220px]"
            >
              <div className="bg-white/20 p-2 rounded-xl">
                <Apple size={32} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>

            {/* Play Store Button */}
            <a
              href="#"
              className="group backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-5 rounded-2xl font-semibold transition-all flex items-center gap-4 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[220px]"
            >
              <div className="bg-white/20 p-2 rounded-xl">
                <Smartphone size={32} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="pt-8">
            <p className="text-gray-400 text-sm">
              Join thousands of users already trading worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
