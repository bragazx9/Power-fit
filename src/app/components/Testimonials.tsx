import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    result: '-15kg em 4 meses',
    comment: 'A Power Fit mudou minha vida! O acompanhamento dos professores e a estrutura moderna me motivaram a alcançar resultados que eu achava impossíveis.',
    rating: 5,
  },
  {
    name: 'Marina Costa',
    result: 'Ganho de massa muscular',
    comment: 'Treino aqui há 6 meses e os resultados são incríveis. O ambiente é motivador e os equipamentos são de primeira linha. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Rafael Mendes',
    result: 'Transformação completa',
    comment: 'Melhor academia da região! Profissionais capacitados, ambiente limpo e climatizado. Finalmente encontrei um lugar onde me sinto motivado a treinar todos os dias.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            Resultados <span className="text-[#d25815]">Reais</span>
          </h2>
          <div className="w-24 h-1 bg-[#d25815] mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative bg-[#1A1A1A] border border-[#d25815]/20 rounded-lg p-8 hover:border-[#d25815] transition-colors duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#d25815]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d25815] text-[#d25815]" />
                ))}
              </div>

              {/* Result Badge */}
              <div className="inline-block bg-[#d25815]/10 border border-[#d25815]/30 rounded-full px-4 py-1.5 mb-4">
                <span className="text-[#d25815] uppercase tracking-wide" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                  {testimonial.result}
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10" style={{ fontSize: '0.9375rem' }}>
                "{testimonial.comment}"
              </p>

              {/* Name */}
              <div className="border-t border-[#d25815]/20 pt-4">
                <p className="uppercase tracking-wide" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
