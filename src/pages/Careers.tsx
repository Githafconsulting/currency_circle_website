import React from 'react'
import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart, Zap } from 'lucide-react'

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and scale our peer-to-peer currency exchange platform using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'London, UK / Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive experiences for millions of users exchanging currencies worldwide.',
    },
    {
      title: 'Compliance Officer',
      department: 'Legal & Compliance',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Ensure Currency Circle meets all regulatory requirements and maintains the highest compliance standards.',
    },
    {
      title: 'Customer Support Specialist',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help users navigate the platform, resolve issues, and provide exceptional customer service.',
    },
    {
      title: 'Data Analyst',
      department: 'Data',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze user behavior, transaction patterns, and business metrics to drive data-informed decisions.',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'New York, US / Remote',
      type: 'Full-time',
      description: 'Lead our marketing efforts to grow our user base and establish Currency Circle as the leading P2P exchange.',
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and async communication',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Salary',
      description: 'Above-market compensation with equity options for all employees',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs',
    },
    {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Professional development budget and opportunities to learn new skills',
    },
  ]

  const values = [
    {
      title: 'User-First',
      description: 'We build everything with our users in mind, prioritizing their safety and experience.',
    },
    {
      title: 'Transparency',
      description: 'We operate with openness and honesty in all our internal and external communications.',
    },
    {
      title: 'Innovation',
      description: 'We challenge the status quo and constantly seek better ways to serve our community.',
    },
    {
      title: 'Inclusion',
      description: 'We celebrate diversity and create an environment where everyone can thrive.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white px-6 py-3 rounded-full text-sm font-semibold border border-green-500/30">
              Join Our Team
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Build the Future of
            <span className="block text-gradient mt-2">Currency Exchange</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Join a passionate team revolutionizing how people exchange money around the world
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all whitespace-nowrap self-start lg:self-auto">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300 leading-relaxed">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            We're always looking for talented people. Send us your resume and let us know how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@currencycircle.com"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              Email Your Resume
            </a>
            <button className="backdrop-blur-xl bg-white/10 border-2 border-white/20 hover:bg-white hover:border-white text-white hover:text-black px-8 py-4 rounded-xl font-semibold transition-all">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">50+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">15+</div>
              <p className="text-gray-300">Countries</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">100%</div>
              <p className="text-gray-300">Remote-Friendly</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">4.8/5</div>
              <p className="text-gray-300">Employee Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers
