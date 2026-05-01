import { ArrowRight, CheckCircle2, Truck, HardHat, Drill, Settings, Ruler, Building2, MapPin } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      
      {/* Hero Section - Consistent with About page */}
      <section className="relative w-full h-[40vh] min-h-[400px] overflow-hidden flex items-end pb-16 px-6 md:px-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-[0.3]" 
            src="/construction_equipments/karolis-vaiciulis-ZlKz2B__EZs-unsplash.jpg" 
            alt="Services Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="inline-block px-4 py-1 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-lg">
            What We Do
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Our <span className="text-brand-orange">Services</span>
          </h1>
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
            <a href="/" className="hover:text-brand-yellow transition-colors">Home</a>
            <span className="text-brand-orange">•</span>
            <span className="text-white">Professional Services</span>
          </div>
        </div>
      </section>

      {/* Intro Section - Comprehensive Solutions (Inspiration Image 2) */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
              <img 
                src="/construction_equipments/corey-willett-TmnnwturBdQ-unsplash.jpg" 
                className="w-full h-full object-cover" 
                alt="Construction site overview"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-yellow p-10 hidden xl:block shadow-2xl">
               <div className="text-4xl font-black text-brand-black tracking-tighter">30+ Years</div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Engineering Excellence</div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-brand-black uppercase leading-none tracking-tight">
              Comprehensive <br />Site <span className="text-brand-orange underline underline-offset-8">Solutions.</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed font-inter max-w-xl">
              At Esteem Earthworks, we handle every aspect of your project with precision and reliability. Our expertise covers full-scale civil and commercial earthmoving services including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                "Bulk Earthworks", "Retention Packages", "Site Cuts", 
                "Compaction", "Cartage", "Piling", 
                "Rock Breaking", "Civil Infrastructure", "GPS Grading"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-zinc-800">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <a href="/contact" className="bg-brand-orange text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all shadow-xl inline-block">
                GET IN TOUCH TODAY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid (Inspiration Image 1) */}
      <section className="py-24 px-6 md:px-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tight">Genuine Expertise In Every Sector</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             {[
               { title: "Excavation", icon: Ruler, desc: "Precision digging for foundations, trenches and complex site requirements." },
               { title: "Grading & Leveling", icon: Settings, desc: "Advanced laser-guided grading to ensure perfectly level surfaces for development." },
               { title: "Earth Hauling", icon: Truck, desc: "Reliable transport and disposal of materials with our fleet of heavy-duty haulers." },
               { title: "Site Preparation", icon: HardHat, desc: "Clearing, grubbing and stabilizing the ground before any construction begins." },
               { title: "Site Development", icon: Building2, desc: "Transforming raw land into construction-ready sites for residential or commercial use." },
              //  { title: "Demolition", icon: Drill, desc: "Safe and efficient removal of existing structures with complete debris management." }
             ].map((service, i) => (
               <div key={i} className="bg-white p-12 border border-zinc-100 group hover:bg-brand-orange transition-all duration-500 hover:transform hover:-translate-y-2">
                 <service.icon className="w-12 h-12 text-brand-orange mb-8 group-hover:text-white transition-colors" />
                 <h4 className="text-xl font-black uppercase text-brand-black mb-4 group-hover:text-white transition-colors tracking-tight">{service.title}</h4>
                 <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                   {service.desc}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* High-Impact Service Tiers (Inspiration Image 3) */}
      <section className="bg-white py-32 px-6 md:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto space-y-32">
          
          {/* Site Excavation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
               <div className="relative group overflow-hidden">
                 <img src="/IMG-20260330-WA0009.jpg" className="w-full aspect-video object-cover brightness-75 transition-all duration-1000 group-hover:brightness-100 group-hover:scale-105" alt="Bulk Earthworks" />
                 <div className="absolute top-6 left-6 bg-brand-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Tier 01 // Industrial</div>
               </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-4xl md:text-6xl font-black text-brand-black uppercase tracking-tighter leading-none">Bulk <br />Earthworks</h3>
              <p className="text-zinc-500 leading-relaxed font-inter max-w-sm">
                Mass scale topography alteration, micro-level cut and fill operations for large-scale industrial complexes and logistics hubs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-50 p-4 border-l-4 border-brand-orange">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Max Tonnage</div>
                  <div className="text-2xl font-black text-brand-black tracking-tighter">450.0 t</div>
                </div>
                <div className="bg-zinc-50 p-4 border-l-4 border-brand-orange">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Precision</div>
                  <div className="text-2xl font-black text-brand-black tracking-tighter">&lt; 1.5 cm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Precision Grading */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
             <div className="lg:col-span-5 order-2 lg:order-1 space-y-8 lg:text-right">
              <h3 className="text-4xl md:text-6xl font-black text-brand-black uppercase tracking-tighter leading-none">Precision <br />Grading</h3>
              <div className="flex justify-start lg:justify-end">
                <p className="text-zinc-500 leading-relaxed font-inter max-w-sm">
                  Final surface optimization through LiDAR-integrated blade control, achieving impermeable slopes for optimal stability.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-50 p-4 border-l-4 border-brand-orange order-2 lg:order-1">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Grade Tolerance</div>
                  <div className="text-2xl font-black text-brand-black tracking-tighter">±0.01%</div>
                </div>
                <div className="bg-zinc-50 p-4 border-l-4 border-brand-orange order-1 lg:order-2">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">LiDAR Rate</div>
                  <div className="text-2xl font-black text-brand-black tracking-tighter">100 hz</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
               <div className="relative group overflow-hidden">
                 <img src="/construction_equipments/jason-jarrach-QN50uuCf6UY-unsplash.jpg" className="w-full aspect-video object-cover brightness-75 transition-all duration-1000 group-hover:brightness-100 group-hover:scale-105" alt="Advanced Grading" />
                 <div className="absolute top-6 right-6 bg-brand-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Tier 02 // Precision</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase (Inspiration Image 2) */}
      <section className="py-32 px-6 md:px-20 bg-zinc-900 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-xs font-bold text-brand-orange uppercase tracking-[.8em]">Operational Assets</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic underline-offset-8">Our <span className="text-brand-yellow/80">Fleet.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Excavators", desc: "Ranging from 1.6 tonnes to 35 tonnes. GPS-enabled high-efficiency units for any scale project.", icon: Building2 },
              { title: "Posi-Tracks", desc: "Versatile 4-in-1 bucket loaders equipped for landscaping, concrete preparation and small site work.", icon: Settings },
              { title: "Cartage fleet", desc: "Optimized for safe, efficient removal. Fleet inkludes single-axle, tandem and semi-tippers.", icon: Truck }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-8 group">
                <div className="mx-auto w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-all duration-500">
                   <item.icon className="w-10 h-10 text-brand-yellow group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-black uppercase tracking-tight">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto group-hover:text-zinc-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
                <div className="w-8 h-[2px] bg-brand-orange mx-auto opacity-50 group-hover:w-20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <a href="/projects" className="bg-brand-orange text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-2xl inline-block">
              VIEW FLEET CATALOGUE
            </a>
          </div>
        </div>
      </section>

      {/* Local Coverage Section (Inspiration Image 1 - Map Concept) */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <MapPin className="w-8 h-8 text-brand-orange" />
               <h2 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tight">Victoria Wide Coverage</h2>
            </div>
            <p className="text-zinc-600 text-lg leading-relaxed font-inter max-w-lg">
              Based in Melbourne, we provide specialized earthmoving and civil engineering services across all major Victorian districts. From the inner suburbs to regional development hubs, our fleet is ready to deploy.
            </p>
            <div className="grid grid-cols-2 gap-8 text-sm font-black uppercase tracking-widest">
              <div className="space-y-3">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-orange"></div> Melbourne Metro</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-orange"></div> Geelon Range</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-orange"></div> Mornington</div>
              </div>
              <div className="space-y-3">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-orange"></div> Ballarat Area</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-orange"></div> Yarra Valley</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-orange"></div> Bendigo District</div>
              </div>
            </div>
            <div className="pt-4">
              <button className="text-brand-orange font-black uppercase text-sm flex items-center gap-4 group">
                CONTACT US FOR SITE VISIT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] bg-zinc-100 flex items-center justify-center overflow-hidden border border-zinc-200">
                {/* Mockup for a map or high impact machinery image */}
                <img src="/construction_equipments/troy-mortier-VOsusERAbSo-unsplash.jpg" className="w-full h-full object-cover opacity-80" alt="Operational Area" />
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay"></div>
             </div>
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-orange"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-orange"></div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <section className="bg-brand-yellow py-10 px-6 md:px-20">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <h3 className="text-2xl md:text-3xl font-black text-brand-black uppercase tracking-tight text-center md:text-left">
               Ready to Transform Your Landscape?
            </h3>
            <a href="/contact" className="bg-brand-black text-white px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
               REQUEST A FREE ESTIMATE
            </a>
         </div>
      </section>

    </main>
  );
}
