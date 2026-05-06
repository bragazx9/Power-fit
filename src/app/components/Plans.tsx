import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Mensal',
    price: 'R$ 149',
    period: '/mês',
    features: [
      'Acesso ilimitado à musculação',
      'Área de cardio completa',
      'Vestiários climatizados',
      'Avaliação física inicial',
    ],
    popular: false,
  },
  {
    name: 'Trimestral',
    price: 'R$ 129',
    period: '/mês',
    features: [
      'Acesso ilimitado à musculação',
      'Área de cardio completa',
      'Vestiários climatizados',
      'Avaliação física mensal',
      '1 aula experimental',
    ],
    popular: true,
  },
  {
    name: 'Anual',
    price: 'R$ 99',
    period: '/mês',
    features: [
      'Acesso ilimitado à musculação',
      'Área de cardio completa',
      'Vestiários climatizados',
      'Avaliação física mensal',
      'Aulas coletivas inclusas',
      'Desconto em personal',
    ],
    popular: false,
  },
];

export function Plans() {
  return (
    <section className="py-24 px-4 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            Escolha seu <span className="text-[#d25815]">Plano</span>
          </h2>
          <div className="w-24 h-1 bg-[#d25815] mx-auto" />
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative bg-[#0A0A0A] rounded-lg p-8 border-2 transition-colors duration-300 ${plan.popular ? 'border-[#d25815]' : 'border-[#d25815]/20 hover:border-[#d25815]'}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d25815] text-white px-6 py-1.5 rounded-full uppercase tracking-wider" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                  <Zap className="w-3 h-3 inline mr-1" />
                  Mais Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="mb-6 uppercase tracking-wide text-center" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[#d25815]" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900 }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400" style={{ fontSize: '1.125rem' }}>{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#d25815] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300" style={{ fontSize: '0.9375rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3.5 rounded-lg uppercase tracking-wider transition-colors duration-300 ${plan.popular ? 'bg-[#d25815] hover:bg-[#e66820] text-white' : 'bg-[#1A1A1A] hover:bg-[#d25815] text-white border border-[#d25815]/30'}`} style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                Matricular Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
