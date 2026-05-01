export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* <source src="/Earthworks.mp4" type="video/mp4" /> */}
          <source src="https://res.cloudinary.com/daxynr4ep/video/upload/f_auto:video/Earthwork_cs1ae7?_s=vp" type="video/mp4" />
        </video>
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
        <img src="/esteem_Earthworks.png" alt="Branding Mark" className="w-24 h-auto brightness-200" />
      </div>
    </section>
  );
}
