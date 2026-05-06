import { Dumbbell, Users, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Equipamentos Modernos',
    description: 'Aparelhos de última geração para seu treino de alta performance',
  },
  {
    icon: Zap,
    title: 'Ambiente Climatizado',
    description: 'Conforto total para você treinar com máxima intensidade',
  },
  {
    icon: Users,
    title: 'Treino Personalizado',
    description: 'Acompanhamento individualizado para resultados reais',
  },
  {
    icon: Award,
    title: 'Atendimento Premium',
    description: 'Equipe especializada comprometida com sua transformação',
  },
];

export function About() {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            Sobre a <span className="text-[#d25815]">Power Fit</span>
          </h2>
          <div className="w-24 h-1 bg-[#d25815] mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-[#1A1A1A] border border-[#d25815]/20 rounded-lg p-6 hover:border-[#d25815] transition-colors duration-300">
              <div className="w-14 h-14 bg-[#d25815]/10 rounded-lg flex items-center justify-center mb-4 border border-[#d25815]/30">
                <feature.icon className="w-7 h-7 text-[#d25815]" />
              </div>
              <h3 className="mb-2 uppercase tracking-wide" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed" style={{ fontSize: '0.875rem' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Description */}
        <div className="bg-[#1A1A1A] border border-[#d25815]/20 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <p className="text-gray-300 leading-relaxed mb-6" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            A <span className="text-[#d25815] font-bold">Power Fit Pampulha</span> é mais do que uma academia.
            É um espaço dedicado à sua <span className="font-bold text-white">transformação completa</span>.
          </p>
          <p className="text-gray-400 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
            Com infraestrutura de ponta, profissionais especializados e um ambiente motivador,
            oferecemos tudo que você precisa para alcançar seus objetivos e superar seus limites.
          </p>
        </div>
      </div>
    </section>
  );
}
