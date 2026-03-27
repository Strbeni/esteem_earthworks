import { ArrowRight, Drill, Truck } from 'lucide-react';

export default function Innovation() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs font-black tracking-[0.4em] text-brand-orange uppercase">Modern Infrastructure</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-black leading-tight tracking-tighter uppercase">
              Innovative Solutions <br /> For Earthmoving.
            </h3>
          </div>
          <p className="text-zinc-500 font-inter text-base md:text-lg leading-relaxed max-w-xl">
            We leverage the latest GPS-guided technology and tier-1 maintenance protocols to handle complex terrain and deep foundations. Our approach minimizes material waste while maximizing site stability.
          </p>
          <div className="pt-4">
             <button className="bg-brand-orange text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl">
               Learn Our Methods
             </button>
          </div>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="group space-y-6">
             <div className="aspect-[4/3] overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src="/construction_equipments/caspar-rae-ti4MG1kbpUk-unsplash.jpg" alt="Technological grading" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-orange"></div>
                  <h4 className="text-xl font-black uppercase text-brand-black">Project Planning</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-inter">Precision site mapping and drainage analysis using LiDAR data streams.</p>
             </div>
           </div>

           <div className="group space-y-6">
             <div className="aspect-[4/3] overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src="/construction_equipments/jason-jarrach-QN50uuCf6UY-unsplash.jpg" alt="Heavy equipment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-orange"></div>
                  <h4 className="text-xl font-black uppercase text-brand-black">Fleet Execution</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-inter">Deployment of specialized machinery for bulk civil and residential earthworks.</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
