import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Nomad',
      location: 'United States → Portugal',
      rating: 5,
      text: 'Saved over $500 compared to my bank when moving to Portugal. The process was so simple and I felt safe the entire time. Highly recommend!',
      avatar: 'SJ',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      location: 'Singapore → UK',
      rating: 5,
      text: 'As someone who regularly needs to exchange large amounts, Currency Circle has been a game-changer. Better rates, faster service, and complete transparency.',
      avatar: 'MC',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Student',
      location: 'Spain → Australia',
      rating: 5,
      text: "Perfect for students abroad! No hidden fees and I got to chat with my exchange partner first. It's like having a friend help you with currency exchange.",
      avatar: 'ER',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'David Williams',
      role: 'Freelancer',
      location: 'Canada → Germany',
      rating: 5,
      text: 'The verification process was quick and the matching algorithm is brilliant. Found a perfect match within hours and completed my exchange smoothly.',
      avatar: 'DW',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Priya Patel',
      role: 'Software Engineer',
      location: 'India → USA',
      rating: 5,
      text: 'I was skeptical at first, but the peer review system and verification gave me confidence. Now I use it for all my currency exchanges!',
      avatar: 'PP',
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'James Anderson',
      role: 'Retiree',
      location: 'UK → France',
      rating: 5,
      text: 'Moving to France meant exchanging a significant amount. Currency Circle saved me thousands compared to traditional methods. Exceptional service!',
      avatar: 'JA',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by Thousands
            <span className="text-gradient"> Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join our growing community of satisfied users who've discovered a better way to exchange
            currency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-200" size={48} />

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium mt-1">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-green-500 text-green-500" size={20} />
              ))}
            </div>
            <span className="text-gray-900 font-semibold">
              4.9/5 Average Rating from 2,500+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
