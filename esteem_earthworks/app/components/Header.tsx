export default function Header() {
  return (
    <header className="w-full bg-brand-yellow h-[70px] flex items-center px-10 sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-[22px] font-black leading-[0.95] tracking-tighter text-brand-black flex flex-col uppercase">
            <span>Esteem</span>
            <span>Earthworks</span>
          </div>
        </div>
        
        <nav className="flex gap-2">
          <a 
            href="#about" 
            className="px-9 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="px-9 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
