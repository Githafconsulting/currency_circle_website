import React, { useState } from 'react'
import { Search, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react'

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    {
      title: 'Getting Started',
      icon: HelpCircle,
      articles: [
        'How to create an account',
        'Completing identity verification',
        'Setting up two-factor authentication',
        'Understanding Currency Circle fees',
      ],
    },
    {
      title: 'Making Trades',
      icon: MessageCircle,
      articles: [
        'How to create a currency offer',
        'Finding and accepting matches',
        'Communicating with your trading partner',
        'Completing a safe exchange',
      ],
    },
    {
      title: 'Account & Security',
      icon: Mail,
      articles: [
        'Changing your password',
        'Managing trusted devices',
        'Reporting suspicious activity',
        'Recovering your account',
      ],
    },
    {
      title: 'Troubleshooting',
      icon: Phone,
      articles: [
        'My verification was rejected',
        'I cannot access my account',
        'Dispute resolution process',
        'How to contact support',
      ],
    },
  ]

  const popularArticles = [
    'How does Currency Circle work?',
    'Is Currency Circle safe?',
    'How long does verification take?',
    'What currencies can I exchange?',
    'How do I report a problem with my trade?',
    'What are the transaction limits?',
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How Can We
            <span className="block text-gradient mt-2">Help You?</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Search our knowledge base or browse categories below
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, index) => (
              <button
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition-all group"
              >
                <p className="text-white group-hover:text-gradient transition-all">{article}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <button className="text-gray-300 hover:text-white transition-colors text-left">
                          {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300">
              Our support team is here to assist you 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 text-sm mb-4">
                Average response time: 2 minutes
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all">
                Start Chat
              </button>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-300 text-sm mb-4">
                Average response time: 24 hours
              </p>
              <a
                href="mailto:support@currencycircle.com"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Send Email
              </a>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300 text-sm mb-4">
                Mon-Fri, 9 AM - 6 PM GMT
              </p>
              <a
                href="tel:+18005550123"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter
