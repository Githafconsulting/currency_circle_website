import { Link } from 'react-router-dom'
import { Home, Search, HelpCircle } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[200px] font-bold text-gradient mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-2xl"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
          <Link
            to="/help"
            className="backdrop-blur-xl bg-white/10 border-2 border-white/20 hover:bg-white hover:border-white text-white hover:text-black px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-xl"
          >
            <HelpCircle size={20} />
            Get Help
          </Link>
        </div>

        {/* Quick Links */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Search size={20} />
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              to="/security"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Security
            </Link>
            <Link
              to="/compliance"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Compliance
            </Link>
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
