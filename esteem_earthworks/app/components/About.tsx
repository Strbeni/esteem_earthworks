import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="relative z-20 flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Text Content - Minimalist & Geometric */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 py-20 md:py-32">
        <div className="max-w-xl">
          <div className="w-16 h-1 bg-brand-black mb-10"></div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-black leading-[0.9] mb-12 uppercase">
            About <br className="hidden md:block" /> Us
          </h2>
          
          <div className="font-mono-custom text-sm md:text-base leading-relaxed text-zinc-900 space-y-8 mb-16 max-w-[450px]">
            <p>
              At Esteem Earthworks, we bring your construction projects to life with a focus on precision and quality. Our commitment to excellence ensures that every structure we build reflects our dedication to craftsmanship and innovation.
            </p>
            <p>
              We specialize in complex foundations and precision earthworks, ensuring every project begins with a baseline of reliability.
            </p>
          </div>

          <Link 
            href="/about" 
            className="inline-block border-[1.5px] border-brand-black px-12 py-5 text-[13px] font-black uppercase tracking-[0.3em] hover:bg-brand-black hover:text-white transition-all text-center w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Pictorial Content - High Impact Vertical Visual */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative group overflow-hidden">
        <img 
          src="https://static.wixstatic.com/media/d2dcc1d3d4644ff581bc25eb7e6405b5.jpg" 
          alt="Technical construction perspective" 
          className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        
        {/* Enhanced Pictorial Elements: Stats & Overlays */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
        
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right text-white drop-shadow-xl">
          <div className="font-mono-custom text-4xl md:text-[60px] font-black leading-none">25+</div>
          <div className="font-mono-custom text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-bold">Years of Excellence</div>
        </div>

        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="w-16 md:w-24 h-[1px] bg-white/50 mb-4"></div>
          <div className="font-mono-custom text-[10px] text-white/70 uppercase tracking-widest">
            Site Reference: EST-2024-X
          </div>
        </div>
      </div>
    </section>
  );
}
