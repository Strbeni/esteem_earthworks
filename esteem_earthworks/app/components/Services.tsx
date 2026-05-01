import Link from 'next/link';
import { Settings } from 'lucide-react';

const serviceList = [
  "BULK EARTHWORKS",
  "RETENTION PACKAGES",
  "SITE CUTS",
  "COMPACTION",
  "CARTAGE",
  "PILING",
  "SITE LEVELING",
  // "DEMOLITION"
];

export default function Services() {
  return (
    <section id="services" className="relative z-20 py-20 md:py-32 px-6 md:px-20 bg-[#f9f9f9]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Content Side - Precise Di Martino aesthetic */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-black leading-[0.9] uppercase">
              Tailored <br className="hidden md:block" /> solutions <br />
              for <span className="relative inline-block text-brand-orange">
                every project.
                <div className="absolute -bottom-1 left-0 w-[50%] h-1.5 bg-brand-orange rounded-full"></div>
              </span>
            </h2>
            <p className="text-zinc-500 font-inter text-sm md:text-base max-w-lg leading-relaxed pt-2">
              We provide all-in-one earthworks solutions that give you peace of mind 
              on site. Our capabilities include specialized services such as:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {serviceList.map((service, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <Settings className="w-5 h-5 text-brand-orange group-hover:rotate-90 transition-transform duration-500 flex-shrink-0" strokeWidth={3} />
                <span className="font-inter text-[13px] font-bold text-zinc-800 tracking-widest uppercase">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link 
              href="/services" 
              className="inline-block bg-brand-orange text-white px-10 py-5 text-[14px] font-black uppercase tracking-widest hover:bg-brand-black transition-all shadow-lg w-full sm:w-auto text-center"
            >
              See our full range
            </Link>
          </div>
        </div>

        {/* Visual Side - High Impact 50/50 */}
        <div className="lg:col-span-7 h-[50vh] lg:h-[80vh] relative">
          <div className="w-full h-full overflow-hidden shadow-2xl">
            <img 
              src="https://www.topconpositioning.com/content/dam/topconpositioning/industry-application/heros/Earthmoving_HeroImage_web_hero.jpg" 
              alt="Excavator at work" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Technical Corner Element */}
          <div className="absolute top-0 left-0 bg-brand-black text-white px-8 py-6 hidden xl:block">
            <div className="font-mono-custom text-[10px] uppercase tracking-[0.3em] opacity-50 mb-1">Standardized</div>
            <div className="font-mono-custom text-[16px] font-bold">ISO 9001:2015</div>
          </div>
        </div>

      </div>
    </section>
  );
}
