import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#d25815]/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="mb-4 uppercase tracking-wider" style={{ fontSize: '2rem', fontWeight: 900 }}>
              POWER FIT
              <span className="block text-[#d25815] tracking-[0.2em]" style={{ fontSize: '1rem' }}>
                Pampulha
              </span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Transformando vidas através do fitness. Equipamentos modernos, profissionais qualificados e resultados garantidos.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#d25815]/10 rounded-lg flex items-center justify-center border border-[#d25815]/30 hover:bg-[#d25815] hover:border-[#d25815] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-[#d25815] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#d25815]/10 rounded-lg flex items-center justify-center border border-[#d25815]/30 hover:bg-[#d25815] hover:border-[#d25815] transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-[#d25815] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 uppercase tracking-wide" style={{ fontSize: '1rem', fontWeight: 700 }}>
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {['Sobre', 'Planos', 'Modalidades', 'Horários', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#d25815] transition-colors duration-300"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 uppercase tracking-wide" style={{ fontSize: '1rem', fontWeight: 700 }}>
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400" style={{ fontSize: '0.875rem' }}>
                <MapPin className="w-4 h-4 text-[#d25815] flex-shrink-0 mt-0.5" />
                <span>Av. Otacílio Negrão de Lima, 8000<br />Pampulha - BH/MG</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400" style={{ fontSize: '0.875rem' }}>
                <Phone className="w-4 h-4 text-[#d25815] flex-shrink-0" />
                <span>(31) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d25815]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-left" style={{ fontSize: '0.875rem' }}>
              © 2026 Power Fit Pampulha. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-center md:text-right" style={{ fontSize: '0.875rem' }}>
              Horário: Seg-Sex 05h-23h | Sáb 07h-20h | Dom 08h-14h
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d25815] to-transparent" />
    </footer>
  );
}
