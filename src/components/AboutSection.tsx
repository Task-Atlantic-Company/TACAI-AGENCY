export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          About TASK ATLANTIC
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We're an AI services agency focused on delivering measurable ROI through intelligent automation and cutting-edge technology. 
          Our mission is to make enterprise-grade AI accessible to businesses of all sizes.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          With expertise spanning content creation, SEO, customer service automation, and enterprise AI integration, 
          we help companies transform their operations and accelerate growth. Our tiered approach ensures you get exactly 
          what you need, when you need it—no more, no less.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">Fast</h3>
            <p className="text-gray-600">Quick turnaround times without compromising quality</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">Quality</h3>
            <p className="text-gray-600">Premium deliverables that drive real business results</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-600 mb-2">ROI-Focused</h3>
            <p className="text-gray-600">Every solution designed to maximize your return</p>
          </div>
        </div>
      </div>
    </section>
  );
}