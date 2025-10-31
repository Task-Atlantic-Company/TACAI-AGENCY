export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          AI Services That Ship{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-orange-500">
            ROI Fast
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto">
          From content to chatbots to analytics—tiered packages for every stage of your AI transformation journey
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#pricing"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-blue-600 font-semibold text-lg"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}