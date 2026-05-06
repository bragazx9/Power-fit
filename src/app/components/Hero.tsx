import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Gym Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
        <div className="max-w-5xl">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="font-black tracking-tight mb-2" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: '1' }}>
              POWER FIT
            </h1>
            <p className="text-[#d25815] tracking-[0.3em] uppercase" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
              Pampulha
            </p>
          </div>

          {/* Main Tagline */}
          <h2 className="mb-8 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)', fontWeight: 600, lineHeight: '1.3' }}>
            Transforme seu corpo na <span className="text-[#d25815]">melhor versão de você</span>
          </h2>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
            {['Musculação', 'Cardio', 'Personal', 'Aulas'].map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#d25815] rounded-full" />
                {item}
                {index < 3 && <span className="text-gray-600 ml-2">•</span>}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#d25815] hover:bg-[#e66820] text-white px-12 py-4 rounded-lg uppercase tracking-wider transition-colors duration-300" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', fontWeight: 700 }}>
            Começar Agora
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8">
          <ChevronDown className="w-8 h-8 text-[#d25815]" />
        </div>
      </div>
    </section>
  );
}
