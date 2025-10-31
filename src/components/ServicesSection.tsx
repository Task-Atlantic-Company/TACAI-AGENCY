export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tailored AI Solutions for Every Stage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting or scaling enterprise-wide, we have the right package to accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tier 1 - Quick Wins */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TIER 1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Wins</h3>
            <p className="text-gray-600 mb-6">
              Perfect for businesses looking to get immediate results with AI-powered content and social media automation
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">AI-Generated Blog Posts & Articles</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Social Media Content & Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">AI-Powered Graphics & Visuals</span>
              </li>
            </ul>

            <div className="border-t border-blue-200 pt-6">
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$1,500</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Turnaround: 5-7 business days</p>
              <a
                href="#pricing"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View Package Details
              </a>
            </div>
          </div>

          {/* Tier 2 - Growth */}
          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-400 rounded-2xl p-8 hover:shadow-2xl transition-all relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-1.5 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TIER 2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Growth</h3>
            <p className="text-gray-600 mb-6">
              Scale your business with comprehensive SEO, paid advertising, and intelligent customer service automation
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Complete SEO Audits & Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Paid Ad Campaign Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">AI Chatbot for Customer Service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Includes all Tier 1 services</span>
              </li>
            </ul>

            <div className="border-t border-green-200 pt-6">
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$4,500</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Turnaround: 7-10 business days</p>
              <a
                href="#pricing"
                className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                View Package Details
              </a>
            </div>
          </div>

          {/* Tier 3 - Enterprise */}
          <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TIER 3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise</h3>
            <p className="text-gray-600 mb-6">
              Full-scale AI transformation with strategic integration, advanced analytics, and intelligent HR solutions
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">AI Strategy & System Integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">Custom BI Dashboards & Analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">AI-Powered HR & Recruitment</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">Includes all Tier 1 & 2 services</span>
              </li>
            </ul>

            <div className="border-t border-orange-200 pt-6">
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$12,000</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Turnaround: Custom timeline</p>
              <a
                href="#pricing"
                className="block text-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                View Package Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}