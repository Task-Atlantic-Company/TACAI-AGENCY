export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600">
            See how we've helped businesses transform with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Content & Social
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">E-Commerce Brand</h3>
            <p className="text-gray-600 mb-4">
              Automated content creation and social media management for a growing online retail business
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Engagement Rate</span>
                <span className="font-bold text-green-600">+150%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Content Output</span>
                <span className="font-bold text-green-600">+300%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Time Saved</span>
                <span className="font-bold text-green-600">20hrs/week</span>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              SEO & Growth
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">SaaS Startup</h3>
            <p className="text-gray-600 mb-4">
              Complete SEO overhaul and AI chatbot implementation for customer support automation
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Organic Traffic</span>
                <span className="font-bold text-green-600">+240%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Support Tickets</span>
                <span className="font-bold text-green-600">-60%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Lead Generation</span>
                <span className="font-bold text-green-600">+180%</span>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Enterprise AI
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
            <p className="text-gray-600 mb-4">
              Custom BI dashboards and AI-powered HR recruitment system for enterprise client
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Hiring Time</span>
                <span className="font-bold text-green-600">-45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Data Insights</span>
                <span className="font-bold text-green-600">Real-time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Cost Savings</span>
                <span className="font-bold text-green-600">$50k/year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}