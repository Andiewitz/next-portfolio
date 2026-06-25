import { motion } from "motion/react";

const projects = [
  { 
    id: 1, 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", 
    rotate: -15, 
    z: 10, 
    y: "15%", 
    x: "-120%" 
  },
  { 
    id: 2, 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop", 
    rotate: -7.5, 
    z: 20, 
    y: "7%", 
    x: "-60%" 
  },
  { 
    id: 3, 
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop", 
    rotate: 0, 
    z: 30, 
    y: "0%", 
    x: "0%" 
  },
  { 
    id: 4, 
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop", 
    rotate: 7.5, 
    z: 20, 
    y: "7%", 
    x: "60%" 
  },
  { 
    id: 5, 
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop", 
    rotate: 15, 
    z: 10, 
    y: "15%", 
    x: "120%" 
  },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-0 text-center relative">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl px-4 flex-shrink-0 mt-auto origin-bottom"
      >
        <h1 className="text-[clamp(2.5rem,6vh,5rem)] md:text-[clamp(3.5rem,8vh,6rem)] font-bold font-heading text-[#0f172a] leading-[1.05] tracking-tight">
          Designing the unseen <br className="hidden md:block"/> digital experiences.
        </h1>
      </motion.div>

      {/* Fanned Cards */}
      <motion.div 
        className="relative w-full max-w-4xl mx-auto flex-1 flex justify-center items-center min-h-[20vh] max-h-[45vh] my-4 sm:my-[4vh]"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: "100%", x: "0%", rotate: 0 }}
            animate={{ 
              opacity: 1, 
              y: project.y, 
              x: project.x, 
              rotate: project.rotate 
            }}
            whileHover={{ 
              y: `calc(${project.y} - 10%)`, 
              scale: 1.05,
              zIndex: 50,
              transition: { duration: 0.3 }
            }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1, 
              type: "spring", 
              bounce: 0.35 
            }}
            className="absolute w-[clamp(110px,22vh,260px)] aspect-[4/5] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl shadow-black/10 border-[3px] md:border-[6px] border-white bg-slate-100 cursor-pointer"
            style={{ zIndex: project.z, transformOrigin: 'center center' }}
          >
            <img src={project.image} alt={`Project ${project.id}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Subheadline and Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-2xl px-4 flex-shrink-0 flex flex-col items-center mb-auto origin-top"
      >
        <p className="text-[#475569] text-[clamp(0.875rem,2vh,1.15rem)] font-medium mb-4 sm:mb-[3vh] text-balance">
          I'm a multidisciplinary designer and engineer specializing in brand strategy, immersive web architectures, and seamless interactions.
        </p>
        
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap font-heading">
          <a href="#projects-section" className="inline-flex items-center justify-center gap-2 px-[26px] py-[13px] sm:px-[30px] sm:py-[15px] text-[15px] sm:text-[16px] font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-[14px] cursor-pointer shadow-lg shadow-blue-600/20 active:scale-[0.98]">
            View Work
          </a>
          <a href="#contact-section" className="inline-flex items-center justify-center gap-2 px-[26px] py-[13px] sm:px-[30px] sm:py-[15px] text-[15px] sm:text-[16px] font-semibold text-[#0a0a0a] bg-white border border-[#0a0a0a]/90 hover:bg-slate-50 transition-all rounded-[14px] cursor-pointer active:scale-[0.98]">
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
