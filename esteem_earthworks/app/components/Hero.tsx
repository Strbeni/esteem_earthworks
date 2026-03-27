export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image - Exact URL provided by user */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        // style={{ backgroundImage: "url('https://static.wixstatic.com/media/11062b_8e5c4a60c46a462a8971a111f2a8a0c8~mv2.jpg/v1/fill/w_1901,h_995,fp_0.38_0.40,q_85,usm_0.66_1.00_0.01,enc_auto/Construction%20Site%20View.jpg')" }}
        style={{ backgroundImage: "url('https://www.topconpositioning.com/content/dam/topconpositioning/industry-application/heros/Earthmoving_HeroImage_web_hero.jpg')" }}
        // style={{ backgroundImage: "url('/image2.png')" }}
      >
        {/* Subtle dark overlay on the left focusing on the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto -ml-1 px-6 flex flex-col justify-end pb-2">
        <div className="max-w-4xl text-white">
          <h1 className="text-3xl md:text-8xl font-medium leading-[0.85] tracking-tight mb-2 drop-shadow-sm">
            Precision <br />
            and Reliability <br />
            Defined
          </h1>
          <div className="font-mono-custom text-base md:text-[20px] tracking-wider leading-[1.4] opacity-100">
            <p className="mb-0.5">Building Dreams,</p>
            <p>Creating Reality</p>
          </div>
        </div>
      </div>

      {/* Decorative Branding Mark */}
      <div className="absolute top-10 right-10 hidden lg:block opacity-20 hover:opacity-50 transition-opacity">
        <img src="/esteem_Earthworks.png" alt="Branding Mark" className="w-24 h-auto grayscale brightness-200" />
      </div>
    </section>
  );
}
