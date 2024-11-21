'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex ">
          
            <Link href="/" className="text-2xl font-bold text-[#ff5757]">
            <img src="/assets/logo.png"/> 
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#features" className="text-white hover:text-[#ff5757] transition-colors">
                Features
              </Link>
              <Link href="#why-blockchain" className="text-white hover:text-[#ff5757] transition-colors">
                Why Blockchain
              </Link>
              <Link href="#team" className="text-white hover:text-[#ff5757] transition-colors">
                Team
              </Link>
              <button className="bg-[#ff5757] text-white px-6 py-2 rounded-full hover:bg-[#ff4747] transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" 
              className="text-white hover:text-[#ff5757] block px-3 py-2 rounded-md text-base font-medium">
              Features
            </Link>
            <Link href="#why-blockchain"
              className="text-white hover:text-[#ff5757] block px-3 py-2 rounded-md text-base font-medium">
              Why Blockchain
            </Link>
            <Link href="#team"
              className="text-white hover:text-[#ff5757] block px-3 py-2 rounded-md text-base font-medium">
              Team
            </Link>
            <button className="w-full text-center bg-[#ff5757] text-white px-6 py-2 rounded-full hover:bg-[#ff4747] transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}