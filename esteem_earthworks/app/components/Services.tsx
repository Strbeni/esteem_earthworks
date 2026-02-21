const services = [
  {
    image: "https://static.wixstatic.com/media/d69f20184cf54a40a9632c4d33ceb2bb.jpg",
    title: "New Builds",
    description: "From concept to completion, we specialize in crafting new structures that reflect your unique vision and requirements, ensuring quality and attention to detail at every step."
  },
  {
    image: "https://static.wixstatic.com/media/11062b_01db33b21351425693312b6d98011544~mv2.jpg",
    title: "Expansions",
    description: "Need to expand your current space? Our expansion services are tailored to seamlessly integrate new additions into existing structures, maintaining the integrity of your property."
  },
  {
    image: "https://static.wixstatic.com/media/11062b_89e3c683421247d38633125f14bc0210~mv2.jpg",
    title: "Commercial Constructions",
    description: "For commercial projects, we offer expertise in designing and constructing functional and appealing spaces that meet the specific needs of your business."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold tracking-tight text-brand-black mb-20 text-left">Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-black">{service.title}</h3>
              <p className="text-[14px] leading-relaxed text-zinc-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
