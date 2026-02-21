export default function Header() {
  return (
    <header className="w-full bg-brand-yellow h-24 flex items-center px-8 sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo Icon - Matching the specific Wix template style */}
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-[3px]">
              <div className="w-[18px] h-[18px] bg-brand-black"></div>
              <div className="w-[18px] h-[18px] bg-brand-black"></div>
            </div>
            <div className="flex gap-[3px]">
              <div className="w-[18px] h-[18px] bg-brand-black"></div>
              <div className="w-[3px] h-[3px] bg-brand-black self-start mt-[1px] ml-[1px]"></div>
            </div>
          </div>
          
          <div className="text-[20px] font-bold leading-[1.1] tracking-tighter text-brand-black flex flex-col uppercase">
            <span>T. LAV</span>
            <span>& NGUYEN</span>
          </div>
        </div>
        
        <nav className="flex gap-1.5">
          <a 
            href="#about" 
            className="px-8 py-3 bg-brand-black text-white text-[13px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-brand-black text-white text-[13px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
