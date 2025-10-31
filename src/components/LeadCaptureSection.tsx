export default function LeadCaptureSection() {
  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600">
            Book a free strategy call or request a custom quote
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Quote Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Quote</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>$1,500 - $5,000/month</option>
                  <option>$5,000 - $10,000/month</option>
                  <option>$10,000+/month</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Service Interested</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Tier 1 - Quick Wins</option>
                  <option>Tier 2 - Growth</option>
                  <option>Tier 3 - Enterprise</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Request Quote
              </button>
            </form>
          </div>

          {/* Calendar Embed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book a Free Call</h3>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">
                Calendly embed will go here
                <br />
                <span className="text-sm">Add your Calendly URL</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}