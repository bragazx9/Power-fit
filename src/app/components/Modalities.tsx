import { Dumbbell, Heart, Zap, User, Users } from 'lucide-react';

const modalities = [
  {
    icon: Dumbbell,
    name: 'Musculação',
    description: 'Equipamentos completos para hipertrofia e ganho de força',
    image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    icon: Heart,
    name: 'Cardio',
    description: 'Esteiras, bikes e elípticos de última geração',
    image: 'https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    icon: Zap,
    name: 'Funcional',
    description: 'Treinos dinâmicos para performance e condicionamento',
    image: 'https://images.unsplash.com/photo-1758875569612-94d5e0f1a35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    icon: User,
    name: 'Personal Trainer',
    description: 'Acompanhamento individual com resultados garantidos',
    image: 'https://images.unsplash.com/photo-1573858129122-33bdb25d6950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    icon: Users,
    name: 'Aulas Coletivas',
    description: 'Energia em grupo para motivação máxima',
    image: 'https://images.unsplash.com/photo-1758875569866-62f54fdfd281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
];

export function Modalities() {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            Nossas <span className="text-[#d25815]">Modalidades</span>
          </h2>
          <div className="w-24 h-1 bg-[#d25815] mx-auto" />
        </div>

        {/* Modalities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalities.map((modality) => (
            <div key={modality.name} className="group bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#d25815]/20 hover:border-[#d25815] transition-colors duration-300">
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={modality.image}
                  alt={modality.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#d25815] rounded-lg flex items-center justify-center">
                  <modality.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 uppercase tracking-wide" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                  {modality.name}
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                  {modality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
