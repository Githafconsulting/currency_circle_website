import React from 'react'
import { Smartphone, ArrowRight } from 'lucide-react'

const AppShowcase = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience The App
            <span className="text-gradient"> In Action</span>
          </h2>
          <p className="text-xl text-gray-600">
            Beautiful, intuitive interface designed for effortless currency exchange on the go.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* App Screenshots */}
          <div className="flex-1 relative">
            <div className="flex justify-center gap-6">
              {/* Phone 1 */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="text-center">
                        <Smartphone className="text-primary mx-auto mb-4" size={64} />
                        <p className="text-gray-600 font-medium">Dashboard Screen</p>
                        <p className="text-gray-400 text-sm mt-2">Add your app screenshot here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 (Featured) */}
              <div className="transform scale-110 hover:scale-115 transition-transform duration-300 -mt-8 hidden md:block">
                <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="text-center">
                        <Smartphone className="text-primary mx-auto mb-4" size={64} />
                        <p className="text-gray-600 font-medium">Trading Screen</p>
                        <p className="text-gray-400 text-sm mt-2">Add your app screenshot here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 */}
              <div className="transform hover:scale-105 transition-transform duration-300 hidden lg:block">
                <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="text-center">
                        <Smartphone className="text-primary mx-auto mb-4" size={64} />
                        <p className="text-gray-600 font-medium">Chat Screen</p>
                        <p className="text-gray-400 text-sm mt-2">Add your app screenshot here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex-1 space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Instant Match Notifications
                  </h3>
                  <p className="text-gray-600">
                    Get notified immediately when someone matches your offer. Never miss an
                    opportunity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Exchange Rates</h3>
                  <p className="text-gray-600">
                    See live market rates and compare with your offers. Make informed decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Trade History</h3>
                  <p className="text-gray-600">
                    Track all your exchanges in one place. Export reports for your records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
