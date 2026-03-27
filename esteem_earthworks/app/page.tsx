import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}