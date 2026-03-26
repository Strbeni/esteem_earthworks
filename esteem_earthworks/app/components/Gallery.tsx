const images = [
  {
    src: "https://static.wixstatic.com/media/11062b_eed7d82e476b426ab7e22819a32fc367~mv2.jpg",
    className: "row-span-2"
  },
  {
    src: "https://static.wixstatic.com/media/d2dcc1d3d4644ff581bc25eb7e6405b5.jpg",
    className: ""
  },
  {
    src: "https://static.wixstatic.com/media/d69f20184cf54a40a9632c4d33ceb2bb.jpg",
    className: ""
  },
  {
    src: "https://static.wixstatic.com/media/11062b_01db33b21351425693312b6d98011544~mv2.jpg",
    className: "col-span-2"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-20 py-32 px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold tracking-tight text-brand-black mb-20 text-left">Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {/* Main vertical image */}
          <div className="row-span-2 col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800" 
              alt="Project" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Horizontal top */}
          <div className="col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800" 
              alt="Project" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Another square */}
          <div className="col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800" 
              alt="Project" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Large main feature bottom */}
          <div className="col-span-2 row-span-1">
            <img 
              src="https://static.wixstatic.com/media/11062b_2b8186e453274746b34f0192fb30129c~mv2.jpg" 
              alt="Project" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
