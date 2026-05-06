import { Hero } from './components/Hero';
import { About } from './components/About';
import { Plans } from './components/Plans';
import { Modalities } from './components/Modalities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Schedule } from './components/Schedule';
import { Location } from './components/Location';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Hero />
      <About />
      <Plans />
      <Modalities />
      <Gallery />
      <Testimonials />
      <Schedule />
      <Location />
      <CTAFinal />
      <Footer />
    </div>
  );
}
