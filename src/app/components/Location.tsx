import { MapPin, Phone, Instagram, Mail } from 'lucide-react';

export function Location() {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            Onde nos <span className="text-[#d25815]">Encontrar</span>
          </h2>
          <div className="w-24 h-1 bg-[#d25815] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative rounded-lg overflow-hidden border-2 border-[#d25815]/20 h-[400px] hover:border-[#d25815] transition-colors duration-300">
            <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.4877898765!2d-43.9976!3d-19.8510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUxJzAzLjYiUyA0M8KwNTknNTEuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-[#1A1A1A] border border-[#d25815]/20 rounded-lg p-6 hover:border-[#d25815] transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d25815]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#d25815]/30">
                  <MapPin className="w-6 h-6 text-[#d25815]" />
                </div>
                <div>
                  <h4 className="mb-2 uppercase tracking-wide" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    Endereço
                  </h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                    Av. Otacílio Negrão de Lima, 8000<br />
                    Pampulha - Belo Horizonte/MG<br />
                    CEP: 31365-450
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#1A1A1A] border border-[#d25815]/20 rounded-lg p-6 hover:border-[#d25815] transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d25815]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#d25815]/30">
                  <Phone className="w-6 h-6 text-[#d25815]" />
                </div>
                <div>
                  <h4 className="mb-2 uppercase tracking-wide" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    WhatsApp
                  </h4>
                  <p className="text-gray-300" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    (31) 99999-9999
                  </p>
                  <p className="text-gray-400 mt-1" style={{ fontSize: '0.875rem' }}>
                    Atendimento de Seg a Sex, 08h-20h
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#1A1A1A] border border-[#d25815]/20 rounded-lg p-6 hover:border-[#d25815] transition-colors duration-300">
              <h4 className="mb-4 uppercase tracking-wide" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#d25815]/10 rounded-lg flex items-center justify-center border border-[#d25815]/30 hover:bg-[#d25815] hover:border-[#d25815] transition-colors duration-300 group">
                  <Instagram className="w-6 h-6 text-[#d25815] group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#d25815]/10 rounded-lg flex items-center justify-center border border-[#d25815]/30 hover:bg-[#d25815] hover:border-[#d25815] transition-colors duration-300 group">
                  <Mail className="w-6 h-6 text-[#d25815] group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
