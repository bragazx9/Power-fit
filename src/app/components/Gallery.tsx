const images = [
  {
    url: 'https://images.unsplash.com/photo-1771586791190-97ed536c54af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Modern gym equipment',
    size: 'large',
  },
  {
    url: 'https://images.unsplash.com/photo-1775993167276-743bbcde77e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Gym interior',
    size: 'medium',
  },
  {
    url: 'https://images.unsplash.com/photo-1775993719568-290840203239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Weight training area',
    size: 'medium',
  },
  {
    url: 'https://images.unsplash.com/photo-1775993703558-e7afab02b7bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Dumbbell rack',
    size: 'small',
  },
  {
    url: 'https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Gym with city view',
    size: 'small',
  },
  {
    url: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Modern gym space',
    size: 'small',
  },
];

export function Gallery() {
  return (
    <section className="py-24 px-4 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            Nossa <span className="text-[#d25815]">Estrutura</span>
          </h2>
          <div className="w-24 h-1 bg-[#d25815] mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.size === 'large' ? 'col-span-2 row-span-2' : image.size === 'medium' ? 'col-span-2' : ''}`}>
              {/* Image */}
              <div className="relative aspect-square">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40" />

                {/* Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d25815] transition-colors duration-300 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
