export default function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">How does pricing work?</h3>
            <p className="text-gray-600">
              All packages require a 50% deposit upfront, with the remaining balance due upon completion. 
              Monthly retainers are billed at the start of each month.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">What are the typical timelines?</h3>
            <p className="text-gray-600">
              Tier 1 projects: 5-7 business days. Tier 2 projects: 7-10 business days. 
              Tier 3 projects: Custom timeline based on scope and complexity.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Who owns the IP and content?</h3>
            <p className="text-gray-600">
              You own all deliverables once final payment is received. We retain no rights to the work we create for you.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">What is your revision policy?</h3>
            <p className="text-gray-600">
              Most packages include 2 rounds of revisions. Premium packages include unlimited revisions. 
              Additional revisions can be purchased if needed.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">What data do you need from us?</h3>
            <p className="text-gray-600">
              We'll need access to relevant platforms (social media, analytics, CRM), brand guidelines, 
              and any existing assets. Exact requirements depend on your chosen package.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">How do you handle confidentiality?</h3>
            <p className="text-gray-600">
              We sign NDAs for all clients and maintain strict confidentiality protocols. 
              Your data and business information are always protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}