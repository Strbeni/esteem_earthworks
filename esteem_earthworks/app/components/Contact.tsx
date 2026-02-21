export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 bg-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-brand-black mb-12">Contact Us</h2>
          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-[13px] uppercase tracking-widest text-brand-black mb-4">Phone</h4>
              <p className="text-2xl font-medium">123-456-7890</p>
            </div>
            <div>
              <h4 className="font-bold text-[13px] uppercase tracking-widest text-brand-black mb-4">Email</h4>
              <p className="text-2xl font-medium">info@mysite.com</p>
            </div>
          </div>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <input type="text" placeholder="First Name *" className="w-full py-4 border-b border-brand-black focus:outline-none placeholder:text-zinc-400 text-lg" required />
            <input type="text" placeholder="Last Name *" className="w-full py-4 border-b border-brand-black focus:outline-none placeholder:text-zinc-400 text-lg" required />
          </div>
          <input type="tel" placeholder="Phone Number" className="w-full py-4 border-b border-brand-black focus:outline-none placeholder:text-zinc-400 text-lg" />
          <input type="email" placeholder="Email *" className="w-full py-4 border-b border-brand-black focus:outline-none placeholder:text-zinc-400 text-lg" required />
          <textarea placeholder="Message" rows={4} className="w-full py-4 border-b border-brand-black focus:outline-none placeholder:text-zinc-400 text-lg resize-none"></textarea>
          <button type="submit" className="w-full bg-brand-black text-white py-4 text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-8">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
