import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Innovation from './components/Innovation';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <main className="bg-[#fefefe] text-brand-black font-inter overflow-x-hidden">
      <Hero />
      <Innovation />
      <About />
      <Features />
      <Services />
      <CallToAction />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </main>
  );
}