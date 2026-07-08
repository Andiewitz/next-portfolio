import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, ArrowLeft, Filter } from "lucide-react";

interface GridProject {
  id: number;
  title: string;
  category: "Branding" | "Digital" | "Motion" | "Experiment";
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  link?: string;
  role: string;
}

const GRID_PROJECTS: GridProject[] = [
  {
    id: 1,
    title: "Kinetic Fluidics",
    category: "Motion",
    subtitle: "Fluid Physics & High-Framerate Shaders",
    description: "An interactive laboratory web experience exploring high-performance canvas physics, real-time particle fluid dynamics, and complex 3D vector math running on GPU shaders. Designed to react dynamically to music frequencies and user pointer positions with zero frame latency.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    tags: ["WebGL", "Three.js", "GLSL Shaders", "Fluid Dynamics"],
    client: "Kinetic Labs",
    year: "2025",
    role: "Lead Creative Technologist"
  },
  {
    id: 2,
    title: "V-Media Brandspace",
    category: "Branding",
    subtitle: "High-Performance Digital Branding System",
    description: "A complete brand strategy, visual identity system, and responsive web portal redesign for a futuristic multi-media production agency. Engineered with custom-built flexible grid layouts, dynamic typography scaling, and high-performance SVG animation engines.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Visual Identity", "Brand Strategy", "Design System", "Figma Design"],
    client: "V-Media Group",
    year: "2026",
    role: "Brand Architect & Designer"
  },
  {
    id: 3,
    title: "Nume Protocol",
    category: "Experiment",
    subtitle: "Minimalist Crypto Visual Interface",
    description: "A high-fidelity dashboard and interface reimagining how users interact with decentralized cryptocurrency liquidity pools. Strips away complex ledger noise to expose pure interactive metrics, flowing SVG charts, and seamless one-click transaction flows.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop",
    tags: ["DeFi", "Fintech Dashboard", "UX/UI Design", "TailwindCSS"],
    client: "Nume Foundation",
    year: "2025",
    role: "Principal Product Designer"
  },
  {
    id: 4,
    title: "Jenkos Studio",
    category: "Digital",
    subtitle: "Cinematic Web Experience & Immersive Showcases",
    description: "A slick, content-focused portfolio ecosystem designed for modern creative agencies to display deep case studies. Features custom smooth scrolling mechanics, cinematic page-turn transitions, and real-time WebGL image displacement mouse interactions.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Premium Frontend"],
    client: "Jenkos AG",
    year: "2026",
    role: "Senior Full Stack Engineer"
  },
  {
    id: 5,
    title: "Aether Acoustics",
    category: "Experiment",
    subtitle: "Interactive Audio Waveform Synthesis Canvas",
    description: "A Web Audio API experiment where microtonal waveforms map directly to interactive coordinate spaces, letting users paint atmospheric ambient soundscapes with active mouse movements or touch-screen gestures.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Web Audio API", "Interactive Canvas", "Signal Processing"],
    client: "Soundwave Collective",
    year: "2025",
    role: "Audio Systems Developer"
  },
  {
    id: 6,
    title: "Orbit Spatial",
    category: "Motion",
    subtitle: "Interactive Gravity & Spatial Mechanics Simulator",
    description: "An educational simulation platform modeling solar gravity mechanics. Built to run smoothly on high-DPI displays with fully customizable planetary mass variables, interactive orbits, and comprehensive velocity data logs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    tags: ["Physics Simulation", "HTML5 Canvas", "STEM Education"],
    client: "Spatial Sciences Inst.",
    year: "2024",
    role: "Simulation Engineer"
  }
];

interface ProjectsPageProps {
  onBackToHome: () => void;
}

export default function ProjectsPage({ onBackToHome }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<GridProject | null>(null);

  const categories = ["All", "Branding", "Digital", "Motion", "Experiment"];

  const filteredProjects = selectedCategory === "All"
    ? GRID_PROJECTS
    : GRID_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full min-h-screen pt-28 pb-20 px-4 sm:px-8 bg-[#fcfcfa] text-[#0f172a] relative">
      {/* Back button */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Page Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-heading">
              Our Archive
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#0f172a] tracking-tight mt-2 leading-[1.1]">
              Explore all digital creations
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              A curated selection of design systems, fluid simulations, DeFi applications, and custom creative installations.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-2 md:pb-0 md:border-none">
            <Filter className="w-4 h-4 text-slate-400 mr-2 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  selectedCategory === cat
                    ? "text-white bg-slate-900"
                    : "text-slate-600 hover:text-black hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-white rounded-[24px] border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
              >
                {/* Project Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-800 border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon on hover */}
                  <div className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-slate-400 font-medium tracking-wide">
                    {project.year} &bull; {project.client}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#0f172a] tracking-tight mt-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal mt-2 line-clamp-2 flex-1">
                    {project.subtitle}
                  </p>

                  {/* Inline Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-50">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-md">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if no projects match */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white border border-slate-100 rounded-[24px]">
            <p className="text-slate-500 font-medium">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Detail Drawer/Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto"
            >
              {/* Close Button & Title header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 flex items-center justify-between z-20">
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">
                    {selectedProject.category} Case Study
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-[#0f172a] mt-1">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 md:p-8 flex flex-col gap-8 flex-1">
                {/* Hero Image */}
                <div className="w-full aspect-[16/10] rounded-[20px] overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50 border border-slate-100 rounded-[20px]">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Client
                    </span>
                    <span className="text-sm font-semibold text-slate-800 mt-1 block">
                      {selectedProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Year
                    </span>
                    <span className="text-sm font-semibold text-slate-800 mt-1 block">
                      {selectedProject.year}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Role
                    </span>
                    <span className="text-sm font-semibold text-slate-800 mt-1 block">
                      {selectedProject.role}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Category
                    </span>
                    <span className="text-sm font-semibold text-slate-800 mt-1 block">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Descriptions */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold font-heading text-[#0f172a]">
                    Project Overview
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies / Tags */}
                <div>
                  <h3 className="text-sm font-bold font-heading text-[#0f172a] mb-3 uppercase tracking-wider">
                    Technologies & Disciplines
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200/50 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6 flex justify-end gap-3 z-20">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-black hover:bg-slate-50 rounded-[12px] transition-colors"
                >
                  Close Details
                </button>
                <button
                  onClick={() => alert("Redirecting to project sandbox prototype...")}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-[12px] shadow-sm shadow-blue-600/10"
                >
                  Launch Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
