import { Shield, Lock, Eye, FileCheck, Smartphone, AlertTriangle } from 'lucide-react'

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Encryption',
      description: '256-bit SSL encryption protects all data transmission and storage on our platform.',
    },
    {
      icon: Lock,
      title: 'Two-Factor Authentication',
      description: 'Mandatory 2FA for all accounts adds an extra layer of security to your login process.',
    },
    {
      icon: Eye,
      title: 'Identity Verification',
      description: 'Comprehensive KYC process ensures all users are verified with government-issued ID.',
    },
    {
      icon: FileCheck,
      title: 'Regular Security Audits',
      description: 'Third-party security experts regularly audit our systems to identify and fix vulnerabilities.',
    },
    {
      icon: Smartphone,
      title: 'Device Management',
      description: 'Monitor and manage all devices with access to your account, with instant notifications.',
    },
    {
      icon: AlertTriangle,
      title: 'Fraud Detection',
      description: 'AI-powered systems monitor transactions 24/7 to detect and prevent fraudulent activity.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white px-6 py-3 rounded-full text-sm font-semibold border border-blue-500/30">
              Your Safety is Our Priority
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Security at
            <span className="block text-gradient mt-2">Currency Circle</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            We employ industry-leading security measures to protect your data, funds, and privacy at every step.
          </p>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Additional Security Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Data Protection</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All sensitive data is encrypted both in transit and at rest using AES-256 encryption. Our servers are hosted in secure, SOC 2 certified data centers with 24/7 monitoring and physical security.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We never store your passwords in plain text. All passwords are hashed using industry-standard algorithms, and we enforce strong password requirements for all accounts.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Transaction Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every transaction is monitored in real-time by our fraud detection systems. Suspicious activity triggers immediate alerts and may require additional verification before proceeding.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We maintain detailed audit logs of all platform activity, which helps us investigate any security incidents and improve our defenses over time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Privacy and Compliance</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We comply with GDPR, CCPA, and other international privacy regulations. Your data is never sold to third parties, and we only share information as required by law or with your explicit consent.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our privacy practices are regularly audited by independent third parties to ensure compliance with the highest standards.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Security Best Practices for Users</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Enable two-factor authentication on your account</li>
              <li>Use a strong, unique password that you don't use elsewhere</li>
              <li>Never share your password or 2FA codes with anyone</li>
              <li>Be cautious of phishing attempts via email or messages</li>
              <li>Only conduct exchanges in safe, public locations</li>
              <li>Verify the identity of your trading partner before exchanging</li>
              <li>Report suspicious activity immediately to our support team</li>
              <li>Keep your device and apps updated with the latest security patches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Incident Response</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In the unlikely event of a security incident, we have a comprehensive incident response plan in place. Our security team is available 24/7 to respond to threats and minimize any potential impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We commit to transparent communication and will notify affected users within 72 hours of discovering any data breach, in compliance with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Report a Security Issue</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you discover a security vulnerability in our platform, please report it to our security team immediately. We take all reports seriously and investigate them promptly.
            </p>
            <div className="backdrop-blur-xl bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <p className="text-white font-semibold mb-2">Security Contact:</p>
              <p className="text-gray-300">Email: security@currencycircle.com</p>
              <p className="text-gray-300 text-sm mt-2">
                Please do not disclose security issues publicly until we have had a chance to address them.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Security
