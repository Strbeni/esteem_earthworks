export default function Footer() {
  return (
    <footer className="bg-[#DFE1D5] py-24 px-10">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-20">
        <div className="col-span-1 space-y-6">
          <div className="text-2xl font-bold tracking-tighter text-brand-black flex flex-col uppercase">
            <span>T. LAV</span>
            <span>& NGUYEN</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-[13px] uppercase tracking-widest text-brand-black">Headquarters</h4>
          <p className="text-[14px] leading-relaxed text-zinc-700">
            500 Terry Francine St.<br/>
            San Francisco, CA 94158
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-[13px] uppercase tracking-widest text-brand-black">Contact</h4>
          <p className="text-[14px] leading-relaxed text-zinc-700">
            123-456-7890<br/>
            info@mysite.com
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-[13px] uppercase tracking-widest text-brand-black">Follow</h4>
          <div className="flex flex-col gap-2 text-[14px] text-zinc-700">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-black/10">
        <p className="text-[12px] text-zinc-500 uppercase tracking-widest">
          © {new Date().getFullYear()} by T. Lav & Nguyen.
        </p>
      </div>
    </footer>
  );
}
