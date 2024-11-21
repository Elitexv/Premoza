import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-black pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#ff5757] opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block mb-2">Blockchain Powered</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff5757] to-[#ff8f8f]">
            Real estate e-commerce platform.
            </span>
          </h1>
          <p className="mt-6 text-base text-gray-300 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl">
          A cutting-edge real estate e-commerce platform, powered by Solana
          allowing users to buy, rent, or sell properties and book hotels worldwide with a single click.</p>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="https://app.premoza.com/" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#ff5757] to-[#ff4747] hover:from-[#ff4747] hover:to-[#ff3737] transform hover:scale-105 transition-all duration-200 shadow-lg">
              Launch App
            </a>
            <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-[#ff5757] text-base font-medium rounded-full text-[#ff5757] hover:bg-[#ff5757] hover:text-white transform hover:scale-105 transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}