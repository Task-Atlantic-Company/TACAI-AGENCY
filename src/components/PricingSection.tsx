export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the package that fits your needs. All packages require 50% deposit upfront.
          </p>
        </div>

        <div className="space-y-12">
          {/* Tier 1 Pricing */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200">
            <div className="bg-blue-600 text-white px-8 py-4">
              <h3 className="text-2xl font-bold">Tier 1 - Quick Wins</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Starter</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$1,500<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 8 blog posts/month</li>
                    <li>• 20 social media posts</li>
                    <li>• 10 AI graphics</li>
                    <li>• 2 revisions included</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Professional</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$2,500<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 16 blog posts/month</li>
                    <li>• 40 social media posts</li>
                    <li>• 20 AI graphics</li>
                    <li>• Unlimited revisions</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Premium</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$4,000<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 24 blog posts/month</li>
                    <li>• 60 social media posts</li>
                    <li>• 30 AI graphics</li>
                    <li>• Unlimited revisions</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 Pricing */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-400">
            <div className="bg-green-600 text-white px-8 py-4">
              <h3 className="text-2xl font-bold">Tier 2 - Growth</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Starter</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$4,500<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• SEO audit + optimization</li>
                    <li>• 1 ad campaign</li>
                    <li>• Basic chatbot setup</li>
                    <li>• All Tier 1 Starter</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Professional</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$7,000<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advanced SEO</li>
                    <li>• 3 ad campaigns</li>
                    <li>• Advanced chatbot</li>
                    <li>• All Tier 1 Professional</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Premium</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$10,000<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enterprise SEO</li>
                    <li>• Unlimited campaigns</li>
                    <li>• Custom chatbot AI</li>
                    <li>• All Tier 1 Premium</li>
                    <li>• Dedicated manager</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3 Pricing */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-200">
            <div className="bg-orange-600 text-white px-8 py-4">
              <h3 className="text-2xl font-bold">Tier 3 - Enterprise</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Starter</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$12,000<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI strategy consultation</li>
                    <li>• Basic BI dashboard</li>
                    <li>• AI HR tools setup</li>
                    <li>• All Tier 2 Starter</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Professional</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">$20,000<span className="text-lg text-gray-500">/mo</span></p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full AI integration</li>
                    <li>• Custom BI dashboards</li>
                    <li>• Advanced HR automation</li>
                    <li>• All Tier 2 Professional</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Premium</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-4">Custom</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enterprise AI transformation</li>
                    <li>• Multi-department integration</li>
                    <li>• Custom analytics suite</li>
                    <li>• All Tier 2 Premium</li>
                    <li>• White-glove service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}