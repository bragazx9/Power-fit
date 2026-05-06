import { Clock, Calendar } from 'lucide-react';

const schedules = [
  { day: 'Segunda a Sexta', hours: '05h00 - 23h00' },
  { day: 'Sábados', hours: '07h00 - 20h00' },
  { day: 'Domingos e Feriados', hours: '08h00 - 14h00' },
];

const classes = [
  { name: 'Funcional', time: 'Seg, Qua, Sex - 07h00 e 18h30' },
  { name: 'Jump', time: 'Ter, Qui - 06h30 e 19h00' },
  { name: 'Spinning', time: 'Seg a Sex - 06h00, 12h00 e 19h00' },
  { name: 'Yoga', time: 'Qua, Sáb - 08h00' },
];

export function Schedule() {
  return (
    <section className="py-24 px-4 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            Horários de <span className="text-[#d25815]">Funcionamento</span>
          </h2>
          <div className="w-24 h-1 bg-[#d25815] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gym Hours */}
          <div className="bg-[#0A0A0A] border border-[#d25815]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#d25815]/10 rounded-lg flex items-center justify-center border border-[#d25815]/30">
                <Clock className="w-6 h-6 text-[#d25815]" />
              </div>
              <h3 className="uppercase tracking-wide" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                Academia
              </h3>
            </div>

            <div className="space-y-4">
              {schedules.map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-[#d25815]/10 last:border-0">
                  <span className="text-gray-300" style={{ fontSize: '0.9375rem' }}>{schedule.day}</span>
                  <span className="text-[#d25815]" style={{ fontSize: '1rem', fontWeight: 700 }}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Class Hours */}
          <div className="bg-[#0A0A0A] border border-[#d25815]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#d25815]/10 rounded-lg flex items-center justify-center border border-[#d25815]/30">
                <Calendar className="w-6 h-6 text-[#d25815]" />
              </div>
              <h3 className="uppercase tracking-wide" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                Aulas Coletivas
              </h3>
            </div>

            <div className="space-y-4">
              {classes.map((classItem) => (
                <div key={classItem.name} className="py-3 border-b border-[#d25815]/10 last:border-0">
                  <div className="text-white mb-1" style={{ fontSize: '1rem', fontWeight: 700 }}>
                    {classItem.name}
                  </div>
                  <div className="text-gray-400" style={{ fontSize: '0.875rem' }}>
                    {classItem.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
