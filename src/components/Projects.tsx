import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Branding" | "Digital" | "Motion" | "Experiment";
  subtitle: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Meshwork Studio",
    category: "Branding",
    subtitle: "Custom Brand Strategy & Architecture",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "de_tutor.ai",
    category: "Digital",
    subtitle: "Next-Gen AI Interactive Learning Platform",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Kinetic",
    category: "Motion",
    subtitle: "Fluid Physics & High-Framerate 3D Interactions",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "V-Media",
    category: "Branding",
    subtitle: "High-Performance Digital Marketing Studio",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Nume",
    category: "Experiment",
    subtitle: "Minimalistic Interface for Decentralized Finance",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Jenkos",
    category: "Digital",
    subtitle: "Immersive Agency Landing & Project Showcases",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200&auto=format&fit=crop",
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Projects() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Handle infinite wrapping of indices
  const projectIndex = ((page % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
  const project = PROJECTS[projectIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDotClick = (index: number) => {
    const newDirection = index > projectIndex ? 1 : -1;
    // Calculate how many pages to skip to get to the clicked dot
    // If we're at page 0 (index 0) and click dot 2, we want to go to page 2
    // We adjust the page by the difference between target index and current index
    const pageDifference = index - projectIndex;
    setPage([page + pageDifference, newDirection]);
  };

  return (
    <section id="projects-section" className="w-full h-screen p-[20px] pt-[100px] flex flex-col bg-white overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0f172a] mb-5 text-center tracking-tight shrink-0">
        Selected Projects
      </h2>

      {/* Main Slide Container - fills remaining space */}
      <div className="relative w-full flex-1 min-h-0 rounded-[24px] overflow-hidden bg-slate-50 border border-[#e5e7eb] shadow-sm">
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing group"
            >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.02] pointer-events-none"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold font-heading shadow-sm tracking-wide w-fit">
                  {project.category}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-200 text-sm sm:text-base md:text-xl font-medium max-w-xl">
                  {project.subtitle}
                </p>
              </div>
              
              <button className="bg-white text-[#171717] px-6 py-3.5 rounded-[14px] font-semibold text-[15px] hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group/btn w-full md:w-auto shadow-sm">
                View Project
                <ArrowUpRight className="w-5 h-5 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Apple-style Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-2">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className="p-2 -m-2 cursor-pointer focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`h-2 rounded-full ${
                  idx === projectIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
