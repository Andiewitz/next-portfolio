import { motion } from "motion/react";

export default function Cta() {
  return (
    <section className="w-full bg-[#fcfcfa] py-16 sm:py-24 md:py-32 px-4 flex flex-col items-center justify-center border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Title text matches portfolio theme */}
        <motion.h2 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-semibold text-[38px] sm:text-[54px] md:text-[68px] text-[#0f172a] leading-[1.08] tracking-[-0.035em] text-balance max-w-3xl"
        >
          Turn your boldest ideas <br /> into digital reality
        </motion.h2>

        {/* Subtitle text matches portfolio theme */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-7 text-[15px] sm:text-[17px] font-sans font-normal text-slate-700 tracking-[-0.01em]"
        >
          Currently available for new projects and collaborations.
        </motion.p>

        {/* Actions side by side centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 flex flex-row items-center gap-3 sm:gap-4 flex-wrap justify-center font-heading"
        >
          <a
            href="#contact-section"
            className="inline-flex items-center justify-center gap-2 px-[26px] py-[13px] sm:px-[30px] sm:py-[15px] text-[15px] sm:text-[16px] font-semibold text-white bg-black hover:bg-neutral-900 transition-all rounded-[14px] cursor-pointer shadow-sm active:scale-[0.98]"
          >
            Let's work together <span className="text-[17px] font-normal leading-[1] translate-y-[0.5px]">&rarr;</span>
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-[26px] py-[13px] sm:px-[30px] sm:py-[15px] text-[15px] sm:text-[16px] font-semibold text-[#0a0a0a] bg-white border border-[#0a0a0a]/90 hover:bg-slate-50 transition-all rounded-[14px] cursor-pointer active:scale-[0.98]"
          >
            View my resume <span className="text-[17px] font-normal leading-[1] translate-y-[0.5px]">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
