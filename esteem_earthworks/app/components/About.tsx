export default function About() {
  return (
    <section id="about" className="relative z-20 min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Text Content - Minimalist & Geometric */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-24">
        <div className="max-w-xl">
          <div className="w-12 h-1 bg-brand-black mb-8"></div>
          <h2 className="text-6xl md:text-[100px] font-black tracking-tighter text-brand-black leading-none mb-12 uppercase">
            About Us
          </h2>
          
          <div className="font-mono-custom text-sm md:text-[15px] leading-relaxed text-zinc-900 space-y-8 mb-16 max-w-[450px]">
            <p>
              At Esteem Earthworks, we bring your construction projects to life with a focus on precision and quality. Our commitment to excellence ensures that every structure we build reflects our dedication to craftsmanship and innovation.
            </p>
            <p>
              We specialize in complex foundations and precision earthworks, ensuring every project begins with a baseline of reliability.
            </p>
          </div>

          <a 
            href="#contact" 
            className="inline-block border-[1.5px] border-brand-black px-12 py-4 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Pictorial Content - High Impact Vertical Visual */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative group overflow-hidden">
        <img 
          src="https://static.wixstatic.com/media/d2dcc1d3d4644ff581bc25eb7e6405b5.jpg" 
          alt="Technical construction perspective" 
          className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        
        {/* Enhanced Pictorial Elements: Stats & Overlays */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
        
        <div className="absolute bottom-12 right-12 text-right text-white drop-shadow-lg">
          <div className="font-mono-custom text-[50px] font-black leading-none">25+</div>
          <div className="font-mono-custom text-[12px] uppercase tracking-[0.3em] font-bold">Years of Excellence</div>
        </div>

        <div className="absolute top-12 left-12">
          <div className="w-24 h-[1px] bg-white/50 mb-4"></div>
          <div className="font-mono-custom text-[10px] text-white/70 uppercase tracking-widest">
            Site Reference: EST-2024-X
          </div>
        </div>
      </div>
    </section>
  );
}
