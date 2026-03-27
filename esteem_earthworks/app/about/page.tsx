import { ArrowRight, ShieldCheck, Zap, HardHat, Cog, Truck, Construction } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-zinc-900">
      
      {/* Hero Section - 1/3 VH Breadcrumb Style */}
      <section className="relative w-full h-[33.33vh] min-h-[350px] overflow-hidden flex items-end pb-12 px-6 md:px-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-[0.4]" 
            src="/construction_equipments/martin-martz-9xZDwua_etc-unsplash.jpg" 
            alt="Company Overview Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
            Company Overview
          </h1>
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
            <a href="/" className="hover:text-brand-yellow transition-colors">Home</a>
            <span className="text-brand-orange">•</span>
            <span className="text-white">Company Overview</span>
          </div>
        </div>
      </section>

      {/* Dual Image Mission Section - PRESERVED AS REQUESTED */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.4em] text-brand-orange uppercase">Our Foundational Belief</h2>
              <p className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter text-brand-black uppercase font-inter">
                We don't move dirt. <br />
                <span className="text-zinc-300">We build stability.</span>
              </p>
            </div>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl font-inter">
              Founded by the Esteem family, our journey began with a single mission: to bring civil-grade precision to every site cut. Today, we utilize NASA-grade GPS integration and a massive internal fleet to ensure that the ground beneath your project is as solid as your vision.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 group">
                <Zap className="w-6 h-6 text-brand-orange" />
                <span className="font-bold text-[11px] tracking-widest uppercase">GPS Guided</span>
              </div>
              <div className="flex items-center gap-4 group">
                <Cog className="w-6 h-6 text-brand-orange" />
                <span className="font-bold text-[11px] tracking-widest uppercase">In-House Maintenance</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl">
              <img src="/construction_equipments/luke-besley-k5l-zbRSPds-unsplash.jpg" alt="High precision site work" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-2/3 aspect-video bg-brand-yellow p-1 shadow-2xl hidden md:block border-4 border-white">
               <img src="/construction_equipments/caspar-rae-ti4MG1kbpUk-unsplash.jpg" alt="Site leveling" className="w-full h-full object-cover brightness-90 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise and Capabilities - MATCHING IMAGE */}
      <section className="py-24 px-6 md:px-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <div className="bg-white p-10 md:p-20 shadow-2xl border-l-[12px] border-brand-orange relative overflow-hidden w-full lg:w-4/5">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/5 rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-black uppercase mb-8 leading-none tracking-tight">Expertise and <br/><span className="text-brand-orange">Capabilities</span></h2>
            <p className="text-zinc-600 leading-relaxed text-base md:text-lg mb-10 max-w-2xl font-inter">
              With a robust fleet of heavy-duty machinery and equipment, we possess the expertise and capacity to handle projects across varied complexity. Our experienced engineers, project managers and specialized teams collaborated closely to execute projects which are technically sound, building on our core strengths in civil and commercial earthworks.
            </p>
            <button className="bg-brand-orange text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-black hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      {/* Provide Quality Services - MATCHING IMAGE */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase mb-6 tracking-tight">Provide Quality Services From 10 Years!</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-20 uppercase tracking-[0.3em] font-bold text-[10px] md:text-xs">
            Our company customizes building services to the unique needs of our clients across the diverse portfolio of Melbourne projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="group overflow-hidden rounded-sm shadow-xl">
              <img src="/construction_equipments/corey-willett-TmnnwturBdQ-unsplash.jpg" className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Construction focus" />
            </div>
            <div className="group overflow-hidden rounded-sm shadow-xl">
              <img src="/construction_equipments/jason-jarrach-QN50uuCf6UY-unsplash.jpg" className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Heavy machinery" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
            {[
              { title: "Expert Team", desc: "Our professionals work with a mindset of excellence, ensuring every project is delivered with precision." },
              { title: "Quality Control", desc: "We adhere to the highest industry standards, ensuring top-tier safety and durability in every excavation." },
              { title: "Client Satisfaction", desc: "We bridge the gap between imagination and reality, ensuring our clients' needs are met at every step." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-2xl font-black uppercase text-brand-black flex items-center gap-4">
                  <div className="w-8 h-[3px] bg-brand-orange"></div>
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-inter">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Grid - MATCHING IMAGE (Earth Movers, etc) */}
      <section className="bg-zinc-900 py-32 px-6 md:px-20 text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: "Earth Movers", img: "/construction_equipments/karolis-vaiciulis-ZlKz2B__EZs-unsplash.jpg", desc: "Precision earthworks for large-scale commercial developments and residential estates." },
             { title: "Infrastructure Development", img: "/construction_equipments/troy-mortier-VOsusERAbSo-unsplash.jpg", desc: "Specialized in road construction, drainage systems and civil site подготовки." },
             { title: "Land Development", img: "/construction_equipments/troy-mortier-tq3ay5TKqzE-unsplash.jpg", desc: "End-to-end site remediation and leveling for infrastructure projects across Victoria." }
           ].map((item, i) => (
             <div key={i} className="group flex flex-col">
               <div className="aspect-[3/4] overflow-hidden mb-8 border-b-8 border-brand-orange relative">
                 <img src={item.img} className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
               </div>
               <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">{item.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Values & Commitment Grid - MATCHING IMAGE CIRCLES */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {[
            { title: "Company Overview", desc: "Our legacy of excellence spans over three decades in earthmoving and civil engineering." },
            { title: "Quality and Innovation", desc: "We utilize latest GPS technology and maintenance protocols to ensure project precision." },
            { title: "Our Expertise", desc: "Our team brings specialized knowledge in bulk excavation and retention systems." },
            { title: "Client Satisfaction", desc: "We build long-term relationships based on transparency, reliability, and results." },
            { title: "Our Experience", desc: "From tier-1 infrastructure to private developments, we've delivered it all." },
            { title: "Our Commitment", desc: "Unwavering commitment to safety, compliance, and environmental stewardship." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-black text-white rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase text-brand-black tracking-tight leading-none group-hover:text-brand-orange transition-colors">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final 1/3 VH Contact Card - AS REQUESTED */}
      <section className="relative w-full h-[33.33vh] min-h-[350px] overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="/construction_equipments/martin-martz-9xZDwua_etc-unsplash.jpg" 
            alt="Contact background"
          />
          <div className="absolute inset-0 bg-brand-yellow/90 group-hover:bg-brand-orange/90 transition-all duration-700"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-5xl md:text-8xl font-black text-brand-black uppercase tracking-tighter mb-10 leading-none">
             CONTACT <span className="opacity-30">US TODAY</span>
          </h2>
          <a href="/contact" className="bg-brand-black text-white px-12 py-5 font-black uppercase text-sm tracking-[0.3em] transition-all hover:bg-zinc-800 hover:-translate-y-1">
            LET'S WORK TOGETHER
          </a>
        </div>
      </section>

    </main>
  );
}
