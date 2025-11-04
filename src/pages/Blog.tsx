import React from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      title: '5 Tips for Safe Currency Exchange',
      excerpt: 'Learn how to protect yourself and make the most secure trades on our peer-to-peer platform.',
      category: 'Safety',
      date: 'January 15, 2025',
      readTime: '5 min read',
      image: '/blog-1.jpg',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Understanding Exchange Rates: A Complete Guide',
      excerpt: 'Discover how exchange rates work and how to get the best value when exchanging currencies.',
      category: 'Education',
      date: 'January 12, 2025',
      readTime: '8 min read',
      image: '/blog-2.jpg',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'The Future of P2P Currency Exchange',
      excerpt: 'Explore how peer-to-peer platforms are revolutionizing the way people exchange money globally.',
      category: 'Industry',
      date: 'January 10, 2025',
      readTime: '6 min read',
      image: '/blog-3.jpg',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'How to Verify Your Identity Quickly',
      excerpt: 'A step-by-step guide to completing KYC verification and getting started on Currency Circle.',
      category: 'Getting Started',
      date: 'January 8, 2025',
      readTime: '4 min read',
      image: '/blog-4.jpg',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Building Trust in Online Currency Trading',
      excerpt: 'Learn about our reputation system and how to identify trustworthy trading partners.',
      category: 'Safety',
      date: 'January 5, 2025',
      readTime: '7 min read',
      image: '/blog-5.jpg',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Currency Circle Year in Review: 2024',
      excerpt: 'A look back at our achievements, growth, and the amazing community that makes it all possible.',
      category: 'Company News',
      date: 'January 1, 2025',
      readTime: '10 min read',
      image: '/blog-6.jpg',
      gradient: 'from-pink-500 to-purple-500',
    },
  ]

  const categories = ['All', 'Safety', 'Education', 'Industry', 'Getting Started', 'Company News']

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white px-6 py-3 rounded-full text-sm font-semibold border border-purple-500/30">
              Latest Updates
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Currency Circle
            <span className="block text-gradient mt-2">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, tips, and news about peer-to-peer currency exchange
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                } px-6 py-2 rounded-full font-semibold transition-all`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                {/* Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent text-sm font-semibold`}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-white hover:text-gradient font-semibold transition-all group/btn">
                    Read More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Get the latest articles, tips, and updates delivered to your inbox
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
