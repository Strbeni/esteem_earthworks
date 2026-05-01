import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      
      {/* Hero Section - Consistent with site theme */}
      <section className="relative w-full h-[40vh] min-h-[400px] overflow-hidden flex items-end pb-16 px-6 md:px-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-[0.3]" 
            src="/construction_equipments/martin-martz-9xZDwua_etc-unsplash.jpg" 
            alt="Contact Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="inline-block px-4 py-1 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-lg">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Contact <span className="text-brand-orange">Us</span>
          </h1>
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
            <a href="/" className="hover:text-brand-yellow transition-colors">Home</a>
            <span className="text-brand-orange">•</span>
            <span className="text-white">Reach Our Team</span>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-brand-black uppercase leading-none tracking-tight">
                Let's Build <br />Something <span className="text-brand-orange italic">Great.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed font-inter max-w-md">
                Whether you have a query about a site cut or need a full infrastructure retention package, our team is ready to provide a detailed estimate.
              </p>
            </div>

            <div className="space-y-8">
               {/* Contact Cards */}
               <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div className="space-y-1">
                   <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest">Call Us Directly</h4>
                   <p className="text-xl font-black text-brand-black">+61 400 000 000</p>
                   <p className="text-zinc-500 text-sm">Mon - Sat: 7:00 AM - 6:00 PM</p>
                 </div>
               </div>

               <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div className="space-y-1">
                   <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest">Email Our Desk</h4>
                   <p className="text-xl font-black text-brand-black">estimates@esteemearth.com.au</p>
                   <p className="text-zinc-500 text-sm">Response within 24 business hours</p>
                 </div>
               </div>

               <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div className="space-y-1">
                   <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest">Office Location</h4>
                   <p className="text-xl font-black text-brand-black">West Melbourne, VIC 3003</p>
                   <p className="text-zinc-500 text-sm">Main Depot & Administrative Headquarters</p>
                 </div>
               </div>
            </div>

            <div className="pt-8 flex gap-6">
              <a href="#" className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-brand-black p-8 md:p-16 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://www.topconpositioning.com/content/dam/topconpositioning/industry-application/heros/Earthmoving_HeroImage_web_hero.jpg" 
                className="w-full h-full object-cover opacity-20"
                alt="Form Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full -mr-16 -mt-16"></div>
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-transparent border-b-2 border-zinc-700 text-white py-4 px-0 focus:border-brand-orange focus:outline-none transition-colors font-bold text-lg placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border-b-2 border-zinc-700 text-white py-4 px-0 focus:border-brand-orange focus:outline-none transition-colors font-bold text-lg placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+61 000 000 000" 
                    className="w-full bg-transparent border-b-2 border-zinc-700 text-white py-4 px-0 focus:border-brand-orange focus:outline-none transition-colors font-bold text-lg placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Service Required</label>
                  <select className="w-full bg-transparent border-b-2 border-zinc-700 text-white py-4 px-0 focus:border-brand-orange focus:outline-none transition-colors font-bold text-lg appearance-none">
                     <option className="bg-brand-black text-white">Bulk Earthworks</option>
                     <option className="bg-brand-black text-white">Site Grading</option>
                     {/* <option className="bg-brand-black text-white">Demolition</option> */}
                     <option className="bg-brand-black text-white">Infrastructure</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project requirements..." 
                  className="w-full bg-transparent border-b-2 border-zinc-700 text-white py-4 px-0 focus:border-brand-orange focus:outline-none transition-colors font-bold text-lg resize-none placeholder:text-zinc-600"
                ></textarea>
              </div>

              <button className="w-full bg-brand-orange text-white py-6 font-black uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-brand-black transition-all flex items-center justify-center gap-4 group mt-4">
                SUBMIT PROJECT INQUIRY
                <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[50vh] w-full bg-zinc-100 flex items-center justify-center relative overflow-hidden contrast-125">
         <img 
            src="/construction_equipments/karolis-vaiciulis-ZlKz2B__EZs-unsplash.jpg" 
            className="w-full h-full object-cover opacity-30" 
            alt="Map background"
         />
         <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply"></div>
         <div className="relative z-10 text-center space-y-4">
            <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
               <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="bg-white p-6 shadow-2xl border-b-4 border-brand-orange">
               <h4 className="font-black uppercase text-brand-black">Esteem Headquarters</h4>
               <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Melbourne, Victoria</p>
            </div>
         </div>
      </section>

      {/* Quick Contact Footer Strip */}
      <section className="bg-brand-black py-16 px-6 md:px-20 text-white">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
               <h5 className="flex items-center gap-3 font-black uppercase text-brand-orange text-sm md:justify-start justify-center">
                  <Clock className="w-5 h-5" /> 24/7 Response
               </h5>
               <p className="text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                  Our emergency earthmoving support line is open for critical infrastructure failures across Melbourne.
               </p>
            </div>
            <div className="space-y-4 border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0 px-8">
               <h5 className="font-black uppercase text-brand-orange text-sm">Site Estimates</h5>
               <p className="text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                  We conduct site visits within 48 hours to ensure accurate quoting for complex developments.
               </p>
            </div>
            <div className="space-y-4">
               <h5 className="font-black uppercase text-brand-orange text-sm">Safety First</h5>
               <p className="text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                  All site inquiries are reviewed for OHS compliance before deployment of any heavy machinery.
               </p>
            </div>
         </div>
      </section>

    </main>
  );
}
