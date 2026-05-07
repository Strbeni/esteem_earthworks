import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    role: "Propest Real Estate Developers",
    quote: "Esteem Earthworks exceeded my expectations with their professionalism and attention to detail. The quality of their work speaks volumes about their commitment to excellence.",
    image: "/testimonial_1.png"
  },
  {
    name: "Jane Smith",
    role: "City Infrastructure Lead",
    quote: "The team was incredibly efficient and the result was exactly what we envisioned. Recommended for any large scale projects.",
    image: "/testimonial_2.png"
  },
  {
    name: "Michael Brown",
    role: "Director, Urban Growth",
    quote: "Professional, reliable, and top-tier craftsmanship. They transformed our commercial space into something truly remarkable.",
    image: "/testimonial_3.png"
  }
];

export default function Testimonials() {
  return (
    <section className="relative z-20 py-32 px-6 bg-brand-black text-white overflow-hidden">
      {/* Vector UI Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-brand-yellow mb-8"></div>
            <span className="font-mono-custom text-[10px] font-black tracking-[0.3em] uppercase text-brand-yellow mb-4 block">Feedback Archive</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              Client <br /> Testimonials
            </h2>
          </div>
          <div className="font-mono-custom text-[10px] text-zinc-500 uppercase tracking-widest border-l border-zinc-800 pl-6 hidden md:block">
            Verified Site <br /> Execution Reviews
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative bg-zinc-950/50 border border-zinc-900 p-8 pt-16 transition-all duration-500 hover:border-brand-yellow/30">
              {/* Profile Image - Vector UI Style Frame */}
              <div className="absolute -top-8 left-8 w-20 h-20 overflow-hidden border-2 border-brand-yellow bg-brand-black grayscale group-hover:grayscale-0 transition-all duration-500 z-20">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              <Quote size={32} className="text-brand-yellow/10 absolute top-8 right-8 group-hover:text-brand-yellow/20 transition-colors duration-500" />
              
              <div className="mb-10">
                <div className="font-mono-custom text-[11px] font-bold text-brand-yellow uppercase tracking-[0.15em] mb-1">{t.name}</div>
                <div className="font-mono-custom text-[9px] text-zinc-500 uppercase tracking-widest">{t.role}</div>
              </div>

              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light italic relative z-10">
                "{t.quote}"
              </p>

              {/* Decorative Vector UI elements */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow/20"></div>
              <div className="absolute bottom-0 left-0 w-12 h-[1px] bg-zinc-800 group-hover:w-full group-hover:bg-brand-yellow/30 transition-all duration-700"></div>
              
              {/* Tech Spec number */}
              <div className="absolute -bottom-4 -right-2 font-mono-custom text-[40px] font-black text-white/[0.03] italic select-none group-hover:text-brand-yellow/[0.05] transition-colors">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute -bottom-10 -left-10 text-[25vw] font-black text-white/[0.015] whitespace-nowrap z-0 pointer-events-none uppercase tracking-tighter select-none">
        Excellence
      </div>
    </section>
  );
}

