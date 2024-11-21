export default function Features() {
  const features = [
    {
      title: "Smart Contracts",
      description: "Automated and secure property transactions with blockchain-based smart contracts.",
      icon: "🔒"
    },
    {
      title: "Tokenization",
      description: "Fractional property ownership through real estate tokenization.",
      icon: "🏢"
    },
    {
      title: "Transparency",
      description: "Complete transaction history and property documentation on blockchain.",
      icon: "📋"
    },
    {
      title: "Global Access",
      description: "Invest in real estate from anywhere in the world.",
      icon: "🌍"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Features of Premoza
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Revolutionary blockchain solutions for real estate
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} 
              className="relative bg-black rounded-xl p-8 border border-gray-800 hover:border-[#ff5757] 
                transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff5757] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}