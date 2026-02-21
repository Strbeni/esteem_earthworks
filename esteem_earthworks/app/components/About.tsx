export default function About() {
  return (
    <section id="about" className="py-32 px-10 bg-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-10">
          <h2 className="text-5xl font-bold tracking-tight text-brand-black">About Us</h2>
          <div className="space-y-6 max-w-lg">
            <p className="text-[17px] leading-relaxed text-zinc-900 font-medium tracking-tight">
              At T. Lav & Nguyen, we bring your construction projects to life with a focus on precision and quality. Our commitment to excellence ensures that every structure we build reflects our dedication to craftsmanship and innovation.
            </p>
            <p className="text-[17px] leading-relaxed text-zinc-900 font-medium tracking-tight">
              We specialize in complex foundations and precision earthworks, ensuring every project begins with a baseline of reliability.
            </p>
          </div>
          <a 
            href="#contact" 
            className="inline-block border-[1.5px] border-brand-black px-10 py-3 text-[13px] font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all"
          >
            Learn More
          </a>
        </div>

        <div className="w-full">
          <img 
            src="https://static.wixstatic.com/media/d2dcc1d3d4644ff581bc25eb7e6405b5.jpg" 
            alt="Construction workers" 
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
    </section>
  );
}
