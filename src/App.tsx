import { Navbar1 } from './components/ui/navbar-1';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Cta from './components/Cta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfa] text-[#0f172a] relative overflow-y-auto overflow-x-hidden font-sans flex flex-col">
      {/* Background dot pattern matching the image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      <Navbar1 />

      {/* Hero section wrapping: full or nearly full viewport height */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-32 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
        <Hero />
      </div>

      {/* Selected Projects section */}
      <div id="projects-section" className="relative z-10 w-full bg-[#fcfcfa]/80 backdrop-blur-[2px]">
        <Projects />
      </div>

      {/* Brand CTA section */}
      <div className="relative z-10 w-full">
        <Cta />
      </div>
    </div>
  );
}
