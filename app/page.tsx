import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyBlockchain from './components/WhyBlockchain';
import Team from './components/Team';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <WhyBlockchain />
      <Team />
      <Footer />
    </main>
  );
}