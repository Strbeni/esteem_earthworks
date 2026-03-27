import { ShieldCheck, HardHat, Clock, Zap, DollarSign, Award } from 'lucide-react';

export default function Features() {
  const features = [
    { title: "Low Price Range", desc: "Competitive site-cut pricing without compromising civil grade precision or site safety protocols.", icon: DollarSign },
    { title: "Safety Guaranteed", desc: "Full EHS compliance and OHS specialized risk management for all high-risk infrastructure projects.", icon: ShieldCheck },
    { title: "Reliability Focus", desc: "24/7 client communication and guaranteed deployment windows for tier-1 development sites.", icon: Clock },
    { title: "Precision Expert", desc: "Digital site modeling and LiDAR-integrated grading to achieving sub-centimeter site tolerances.", icon: Zap },
    { title: "Best Services", desc: "End-to-end site preparation, bulk earthworks, and retention packages from a single regional provider.", icon: Award },
    { title: "Certified Crew", desc: "Every excavator operator is fully ticketed and undergoes periodic specialized machine retraining.", icon: HardHat }
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 space-y-4">
           <h2 className="text-[10px] font-black tracking-[0.6em] text-brand-orange uppercase">Our Commitment</h2>
           <h3 className="text-4xl md:text-6xl font-black text-brand-black tracking-tighter uppercase leading-none">Why Esteem <br className="md:hidden" /> Is The Best.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {features.map((feature, i) => (
            <div key={i} className="group relative">
               <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-b-4 border-brand-orange shadow-lg flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                     <feature.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-xl font-black text-brand-black uppercase tracking-tight group-hover:text-brand-orange transition-colors duration-300 leading-none">{feature.title}</h4>
                     <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-inter">
                        {feature.desc}
                     </p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
