import Header from './components/Header';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Services from './components/Services';
import Packages from './components/packages/Packages';
import Testimonials from './components/Testimonials';
import CTAFooter from './components/CTAFooter';
import Footer from './components/Footer';
import TermsofService from './components/tos';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Services />
        <Packages />
        <Testimonials />
        <CTAFooter />
        <TermsofService />
      </main>
      <Footer />
    </div>
  );
}