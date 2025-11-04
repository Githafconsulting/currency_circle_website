import React from 'react'
import { Apple, PlayCircle, QrCode } from 'lucide-react'

const CTA = () => {
  return (
    <section id="download" className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Save on Your Next
            <br />
            Currency Exchange?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12">
            Join 10,000+ users exchanging currencies the smart way. Download now and get started in
            minutes.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl">
              <Apple size={28} />
              <div className="text-left">
                <div className="text-xs text-gray-600">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </button>

            <button className="group bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl">
              <PlayCircle size={28} />
              <div className="text-left">
                <div className="text-xs text-gray-600">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </button>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                <QrCode className="text-primary" size={64} />
              </div>
            </div>
            <p className="text-blue-100 text-sm">Scan to download</p>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <p className="text-blue-100">To Download & Sign Up</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Instant</div>
              <p className="text-blue-100">Account Verification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
