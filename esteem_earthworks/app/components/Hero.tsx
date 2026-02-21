export default function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://static.wixstatic.com/media/11062b_2b8186e453274746b34f0192fb30129c~mv2.jpg')" }}
      >
        {/* Subtle overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-10 flex flex-col justify-end pb-24">
        <div className="max-w-4xl text-white">
          <h1 className="text-7xl md:text-[140px] font-bold leading-[0.85] tracking-tight mb-12">
            Precision <br />
            and Reliability <br />
            Defined
          </h1>
          <div className="font-mono-custom text-base md:text-[22px] tracking-wider leading-tight">
            <p>Building Dreams,</p>
            <p>Creating Reality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
