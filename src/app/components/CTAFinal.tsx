import { ArrowRight } from 'lucide-react';

export function CTAFinal() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1734189605012-f03d97a4d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Gym motivation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div>
          {/* Main Headline */}
          <h2 className="mb-6 uppercase tracking-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, lineHeight: '1.1' }}>
            Seu resultado<br />
            <span className="text-[#d25815]">começa hoje.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.375rem)' }}>
            Não deixe para amanhã a transformação que você pode começar agora.
            Junte-se à <span className="text-white font-bold">Power Fit Pampulha</span> e descubra seu verdadeiro potencial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-[#d25815] hover:bg-[#e66820] text-white px-10 py-4 rounded-lg uppercase tracking-wider transition-colors duration-300 flex items-center gap-3" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Matricular Agora
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="bg-transparent border-2 border-[#d25815] hover:bg-[#d25815] text-white px-10 py-4 rounded-lg uppercase tracking-wider transition-colors duration-300" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Agendar Visita
            </button>
          </div>

          {/* Additional Info */}
          <p className="mt-10 text-gray-400" style={{ fontSize: '0.9375rem' }}>
            🔥 Primeira semana grátis para novos alunos
          </p>
        </div>
      </div>
    </section>
  );
}
