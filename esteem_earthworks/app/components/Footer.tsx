import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-zinc-900 py-24 px-6 md:px-20 text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
        <div className="col-span-1 space-y-8 group">
          <img 
            src="/esteem_earthworks (1).jpeg" 
            alt="Esteem Earthworks" 
            className="h-16 w-auto object-contain brightness-200 group-hover:brightness-100 transition-all duration-500"
          />
          <p className="text-zinc-500 text-xs leading-relaxed max-w-xs uppercase tracking-widest font-bold">
            Precision and Reliability Defined. Providing civil-grade earthmoving solutions across Victoria.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-brand-orange">Headquarters</h4>
          <p className="text-[14px] leading-relaxed text-zinc-400 font-bold uppercase tracking-wide">
            West Melbourne, <br/>
            Victoria, Australia 3003
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-brand-orange">Contact</h4>
          <div className="space-y-2">
            <a href="tel:0447800413" className="block text-[18px] font-black text-white hover:text-brand-orange transition-colors">0447 800 413</a>
            <a href="mailto:manageree@icloud.com" className="text-zinc-400 text-sm font-bold lowercase tracking-wider hover:text-white transition-colors">manageree@icloud.com</a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-[11px] uppercase tracking-[0.4em] text-brand-orange">Navigation</h4>
          <div className="flex flex-col gap-3 text-[12px] font-bold text-zinc-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-black">
          © {new Date().getFullYear()} Esteem Earthworks. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] text-zinc-600 uppercase tracking-widest font-black">
           <a href="#" className="hover:text-white transition-colors">Privacy</a>
           <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
