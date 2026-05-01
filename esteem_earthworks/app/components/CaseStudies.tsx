import { ExternalLink } from 'lucide-react';

export default function CaseStudies() {
  const projects = [
    { title: "West Melbourne Hub", img: "/construction_equipments/martin-martz-9xZDwua_etc-unsplash.jpg", category: "Commercial" },
    { title: "Precision Site Cut", img: "/IMG-20260330-WA0009.jpg", category: "Residential" },
    { title: "Bulk Earthworks X", img: "/construction_equipments/jason-jarrach-QN50uuCf6UY-unsplash.jpg", category: "Civil" },
    { title: "Infrastructure Hub", img: "/construction_equipments/luke-besley-k5l-zbRSPds-unsplash.jpg", category: "Public" },
    { title: "Site Development", img: "/construction_equipments/martin-martz-9xZDwua_etc-unsplash.jpg", category: "Industrial" },
    { title: "Complex Foundations", img: "/construction_equipments/karolis-vaiciulis-ZlKz2B__EZs-unsplash.jpg", category: "Civil Engineering" }
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto space-y-24">
         <div className="text-center space-y-4">
            <h2 className="text-[10px] font-black tracking-[0.6em] text-brand-orange uppercase">Our Work History</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-black tracking-tighter uppercase leading-none">Explore Our <br /> Case Studies.</h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-black shadow-2xl">
                 <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                 
                 {/* Project Info Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-12 flex flex-col justify-end">
                    <div className="space-y-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">{project.category}</span>
                       <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{project.title}</h4>
                    </div>
                 </div>

                 {/* Corner Action */}
                 <div className="absolute top-8 right-8 w-12 h-12 bg-brand-orange text-white flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ExternalLink className="w-6 h-6" />
                 </div>
              </div>
            ))}
         </div>

         <div className="text-center">
            <button className="bg-brand-orange text-white px-12 py-5 text-sm font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl">
               See All Projects
            </button>
         </div>
      </div>
    </section>
  );
}
