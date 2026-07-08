import { useState, useEffect } from 'react';
import { Navbar1 } from './components/ui/navbar-1';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Cta from './components/Cta';
import ProjectsPage from './components/ProjectsPage';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');

  // Smooth scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

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
      
      <Navbar1 currentView={currentView} onViewChange={(view) => setCurrentView(view as 'home' | 'projects')} />

      <main className="flex-1 w-full relative z-10">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col"
            >
              {/* Hero section wrapping: full or nearly full viewport height */}
              <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 pt-32 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
                <Hero />
              </div>

              {/* Selected Projects section */}
              <div className="relative w-full bg-white border-y border-slate-100">
                <Projects />
              </div>

              {/* Brand CTA section */}
              <div className="relative w-full">
                <Cta />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <ProjectsPage onBackToHome={() => setCurrentView('home')} />
              
              {/* Brand CTA section */}
              <div className="relative w-full">
                <Cta />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
