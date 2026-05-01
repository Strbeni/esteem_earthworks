"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const serviceList = [
  { name: "BULK EARTHWORKS", href: "/services" },
  { name: "RETENTION PACKAGES", href: "/services" },
  { name: "SITE CUTS", href: "/services" },
  { name: "COMPACTION", href: "/services" },
  { name: "CARTAGE", href: "/services" },
  { name: "PILING", href: "/services" },
  { name: "SITE LEVELING", href: "/services" },
  // { name: "DEMOLITION", href: "/services" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-brand-yellow h-[70px] flex items-center px-6 md:px-10 sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 z-50">
          <img 
            src="/esteem_Earthworks.png" 
            alt="Esteem Earthworks" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2">
          <Link 
            href="/" 
            className="px-6 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors"
          >
            Home
          </Link>
          
          <div className="relative group">
            <Link 
              href="/services"
              className="px-6 py-3.5 bg-brand-black text-white text-[14px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors flex items-center gap-2 h-full"
            >
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 w-64 bg-brand-black text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl z-50">
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
            </div>
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

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-brand-black z-50 hover:bg-black/5 transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 bg-brand-yellow z-40 transition-transform duration-500 ease-in-out flex flex-col pt-24 px-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col gap-6">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black uppercase text-brand-black tracking-tighter hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
           </div>
           
           <div className="mt-auto pb-12 space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Contact Us</div>
              <div className="text-xl font-black text-brand-black">+61 400 000 000</div>
              <a href="mailto:estimates@esteemearth.com.au" className="block text-brand-orange font-bold uppercase text-xs tracking-widest underline underline-offset-4">
                 Get an Estimate
              </a>
           </div>
        </div>
      </div>
    </header>
  );
}
