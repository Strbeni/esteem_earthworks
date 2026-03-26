import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    role: "Propest Real Estate Developers",
    quote: "Esteem Earthworks exceeded my expectations with their professionalism and attention to detail. The quality of their work speaks volumes about their commitment to excellence."
  },
  {
    name: "Jane Smith",
    role: "City Infrastructure Lead",
    quote: "The team was incredibly efficient and the result was exactly what we envisioned. Highly recommended for any large scale projects."
  },
  {
    name: "Michael Brown",
    role: "Director, Urban Growth",
    quote: "Professional, reliable, and top-tier craftsmanship. They transformed our commercial space into something truly remarkable."
  }
];

export default function Testimonials() {
  return (
    <section className="relative z-20 py-32 px-6 bg-brand-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-accent mb-4 block">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Client Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-10 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
              <Quote size={40} className="text-brand-accent/20 absolute -top-4 -left-4" />
              <p className="text-lg text-slate-300 italic leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
              <div>
                <p className="font-bold text-brand-accent tracking-wide uppercase text-xs">{t.name}</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap z-0 pointer-events-none uppercase">
        Esteem
      </div>
    </section>
  );
}
