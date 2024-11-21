export default function WhyBlockchain() {
  return (
    <section id="why-blockchain" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Why Premoza Uses Blockchain
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Solving traditional real estate challenges through innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-[#ff5757] transition-all duration-300">
            <h3 className="text-[#ff5757] text-2xl font-bold mb-6">Traditional Challenges</h3>
            <ul className="space-y-4">
              {[
                "Lengthy and complex transaction processes",
                "High intermediary costs",
                "Lack of transparency",
                "Limited accessibility to real estate investments",
                "Paper-based documentation risks"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-300">
                  <span className="text-[#ff5757] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-[#ff5757] transition-all duration-300">
            <h3 className="text-[#ff5757] text-2xl font-bold mb-6">Blockchain Solutions</h3>
            <ul className="space-y-4">
              {[
                "Smart contracts for automated, secure transactions",
                "Reduced costs through disintermediation",
                "Immutable transaction records",
                "Fractional ownership opportunities",
                "Digital, secure documentation"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-300">
                  <span className="text-[#ff5757] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}