import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const serviceList = [
  { name: "BULK EARTHWORKS", href: "/#services" },
  { name: "RETENTION PACKAGES", href: "/#services" },
  { name: "SITE CUTS", href: "/#services" },
  { name: "COMPACTION", href: "/#services" },
  { name: "CARTAGE", href: "/#services" },
  { name: "PILING", href: "/#services" },
  { name: "SITE LEVELING", href: "/#services" },
  { name: "DEMOLITION", href: "/#services" }
];

export default function Header() {
  return (
    <header className="w-full bg-brand-yellow h-[70px] flex items-center px-10 sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="text-[22px] font-black leading-[0.95] tracking-tighter text-brand-black flex flex-col uppercase">
            <span>Esteem</span>
            <span>Earthworks</span>
          </div>
        </Link>
        
        <nav className="flex gap-2">
          <Link 
            href="/" 
            className="px-6 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors hidden md:block"
          >
            Home
          </Link>
          
          <div className="relative group hidden md:block">
            <Link 
              href="/services"
              className="px-6 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors flex items-center gap-2 h-full"
            >
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            {/* <div className="absolute top-full left-0 w-64 bg-brand-black text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl z-50">
              <div className="py-2">
                {serviceList.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.href} 
                    className="block px-6 py-3 text-[11px] font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors border-b border-zinc-800 last:border-0"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>

          <Link 
            href="/about" 
            className="px-6 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
