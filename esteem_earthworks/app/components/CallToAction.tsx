import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-brand-black overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
         <img src="/construction_equipments/martin-martz-9xZDwua_etc-unsplash.jpg" alt="Background Action" className="w-full h-full object-cover opacity-20 grayscale brightness-50" />
         <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/40 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 space-y-12">
         <h2 className="text-4xl md:text-8xl font-black text-white hover:text-brand-orange transition-colors duration-700 tracking-tighter uppercase leading-[0.85]">
           Contact <span className="opacity-30">with us!</span>
         </h2>
         <p className="text-zinc-500 font-black uppercase text-xs md:text-sm tracking-[0.4em] max-w-2xl mx-auto">
            Ready to start your next infrastructure project? Get a civil-grade estimate within 24 hours.
         </p>
         <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-brand-black px-12 py-5 text-sm font-black uppercase tracking-[0.4em] hover:bg-brand-orange hover:text-white transition-all shadow-2xl hover:-translate-y-2 transform"
            >
              Get Started Now
            </Link>
         </div>
      </div>

      {/* Border Accents */}
      <div className="absolute top-0 left-0 w-24 h-[2px] bg-brand-orange"></div>
      <div className="absolute bottom-0 right-0 w-24 h-[2px] bg-brand-orange"></div>
    </section>
  );
}
