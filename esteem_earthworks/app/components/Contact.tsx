export default function Contact() {
  return (
    <section id="contact" className="relative z-20 py-20 md:py-32 px-6 md:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-black leading-tight uppercase">Contact Us</h2>
          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest text-zinc-400 mb-2">Direct Line</h4>
              <a href="tel:0447800413" className="text-2xl md:text-3xl font-black text-brand-black tracking-tight hover:text-brand-orange transition-colors">0447 800 413</a>
            </div>
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest text-zinc-400 mb-2">Email Desk</h4>
              <a href="mailto:manageree@icloud.com" className="text-2xl md:text-3xl font-black text-brand-black tracking-tight hover:text-brand-orange transition-colors">manageree@icloud.com</a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group shadow-md p-8 md:p-12 bg-brand-black">
           <div className="absolute inset-0 z-0">
              <img src="https://www.topconpositioning.com/content/dam/topconpositioning/industry-application/heros/Earthmoving_HeroImage_web_hero.jpg" alt="Form Background" className="w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
           </div>
           <form className="space-y-8 relative z-10 w-full h-full">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <input type="text" placeholder="First Name *" className="w-full bg-transparent py-4 border-b-2 border-zinc-700 text-white focus:border-brand-orange focus:outline-none placeholder:text-zinc-600 text-lg font-bold transition-colors" required />
               <input type="text" placeholder="Last Name *" className="w-full bg-transparent py-4 border-b-2 border-zinc-700 text-white focus:border-brand-orange focus:outline-none placeholder:text-zinc-600 text-lg font-bold transition-colors" required />
             </div>
             <input type="tel" placeholder="Phone Number" className="w-full bg-transparent py-4 border-b-2 border-zinc-700 text-white focus:border-brand-orange focus:outline-none placeholder:text-zinc-600 text-lg font-bold transition-colors" />
             <input type="email" placeholder="Email *" className="w-full bg-transparent py-4 border-b-2 border-zinc-700 text-white focus:border-brand-orange focus:outline-none placeholder:text-zinc-600 text-lg font-bold transition-colors" required />
             <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-transparent py-4 border-b-2 border-zinc-700 text-white focus:border-brand-orange focus:outline-none placeholder:text-zinc-600 text-lg font-bold transition-colors resize-none"></textarea>
             <button type="submit" className="w-full bg-brand-orange text-white py-5 text-[14px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-brand-black transition-all mt-8 border border-brand-orange hover:border-black">
               Submit Request
             </button>
           </form>
        </div>
      </div>
    </section>
  );
}
