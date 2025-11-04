import { CheckCircle, FileText, Globe, Shield } from 'lucide-react'

const Compliance = () => {
  const complianceItems = [
    {
      icon: Shield,
      title: 'Anti-Money Laundering (AML)',
      description: 'We implement comprehensive AML policies and procedures to detect and prevent money laundering activities.',
    },
    {
      icon: CheckCircle,
      title: 'Know Your Customer (KYC)',
      description: 'All users must complete identity verification to ensure compliance with international KYC standards.',
    },
    {
      icon: FileText,
      title: 'Financial Regulations',
      description: 'We comply with financial regulations in all jurisdictions where we operate, including licensing requirements.',
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'Our compliance program meets FATF recommendations and international best practices for financial services.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white px-6 py-3 rounded-full text-sm font-semibold border border-green-500/30">
              Regulatory Compliance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Compliance &
            <span className="block text-gradient mt-2">Regulatory Framework</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Currency Circle is committed to the highest standards of regulatory compliance and ethical business practices.
          </p>
        </div>
      </div>

      {/* Compliance Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {complianceItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Detailed Compliance Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Our Commitment to Compliance</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Currency Circle operates with full transparency and in strict accordance with all applicable laws and regulations. We believe that robust compliance practices are essential for building trust with our users and partners.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our compliance team works continuously to monitor regulatory changes and ensure our platform adapts to meet evolving requirements across all jurisdictions where we operate.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Know Your Customer (KYC) Process</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All users must complete identity verification before they can use our platform. Our KYC process includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Government-issued photo ID verification (passport, driver's license, or national ID)</li>
              <li>Proof of address verification (utility bill, bank statement, or official document)</li>
              <li>Selfie verification to match photo ID</li>
              <li>Enhanced due diligence for high-risk jurisdictions or large transactions</li>
              <li>Ongoing monitoring of user activity for suspicious patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Anti-Money Laundering (AML) Program</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our comprehensive AML program includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Transaction monitoring and analysis using advanced algorithms</li>
              <li>Suspicious Activity Report (SAR) filing with relevant authorities</li>
              <li>Regular risk assessments and program updates</li>
              <li>Staff training on AML procedures and red flags</li>
              <li>Screening against international sanctions lists and PEP databases</li>
              <li>Record keeping and audit trail maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Regulatory Licenses and Registrations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Currency Circle holds the necessary licenses and registrations to operate legally in each jurisdiction. We work closely with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Financial Conduct Authority (FCA) in the United Kingdom</li>
              <li>FinCEN registration in the United States</li>
              <li>Local financial regulators in all operating jurisdictions</li>
              <li>Data protection authorities for GDPR and privacy compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Transaction Limits and Monitoring</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To ensure compliance with international regulations, we implement:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Daily and monthly transaction limits based on verification level</li>
              <li>Enhanced verification requirements for large transactions</li>
              <li>Real-time monitoring of all platform activity</li>
              <li>Automated alerts for unusual transaction patterns</li>
              <li>Source of funds verification for high-value exchanges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We comply with comprehensive data protection regulations including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>General Data Protection Regulation (GDPR) in the European Union</li>
              <li>California Consumer Privacy Act (CCPA) in the United States</li>
              <li>Personal Data Protection Act (PDPA) in Singapore and similar regulations globally</li>
              <li>Data minimization and purpose limitation principles</li>
              <li>Right to access, correction, and deletion of personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Sanctions Compliance</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We screen all users and transactions against:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>OFAC (Office of Foreign Assets Control) sanctions lists</li>
              <li>UN Security Council sanctions</li>
              <li>EU sanctions lists</li>
              <li>UK HM Treasury financial sanctions</li>
              <li>Country-specific prohibited jurisdictions</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Users from sanctioned countries or appearing on sanctions lists cannot use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Reporting and Transparency</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We maintain transparent relationships with regulators through:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Regular reporting to financial authorities</li>
              <li>Cooperation with law enforcement investigations</li>
              <li>Prompt filing of required regulatory reports</li>
              <li>Annual compliance audits by independent third parties</li>
              <li>Publication of transparency reports (where permitted by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Our Compliance Team</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For compliance-related inquiries, regulatory questions, or to report suspicious activity:
            </p>
            <div className="backdrop-blur-xl bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <p className="text-white font-semibold mb-2">Compliance Department:</p>
              <p className="text-gray-300">Email: compliance@currencycircle.com</p>
              <p className="text-gray-300">Phone: +1 (800) 555-0123</p>
              <p className="text-gray-300 text-sm mt-4">
                Our compliance team is available Monday-Friday, 9 AM - 6 PM (GMT)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Compliance
