import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="TASK ATLANTIC COMPANY LIMITED"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
              Case Studies
            </a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">
              Process
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="#pricing"
              className="hidden sm:inline-block text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              See Pricing
            </a>
            <a
              href="#booking"
              className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book Free Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}