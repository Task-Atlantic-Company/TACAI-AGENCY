export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple, transparent process from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
            <p className="text-gray-600">
              We learn about your business, goals, and challenges to create a tailored strategy
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proposal</h3>
            <p className="text-gray-600">
              Receive a detailed proposal with scope, timeline, and pricing. 50% deposit to start
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery</h3>
            <p className="text-gray-600">
              We execute the plan, keeping you updated with regular progress reports and reviews
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
            <p className="text-gray-600">
              Continuous monitoring and improvements to maximize ROI and performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}