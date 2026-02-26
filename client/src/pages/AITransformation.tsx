import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function AITransformation() {
  return (
    <div className="w-full pb-32">
      <section className="container mx-auto px-6 md:px-12 pt-32 pb-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-8 leading-[1.1]">
            AI is not a tool. <br />
            It is an operating model shift.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-16">
            Most enterprises are overwhelmed by vendors and noise. We cut through the hype to find what actually drives value.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          className="bg-foreground text-background p-12 md:p-20 mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-12 max-w-3xl text-background">
            AI must increase revenue or efficiency. It cannot become experimentation theatre.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border/20 pt-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">What We Provide</h3>
              <ul className="space-y-6">
                {["Identification of high-leverage AI use cases", "Vendor evaluation and selection", "Revenue-first integration roadmap", "Productivity optimization", "Measurable ROI tracking"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-background">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-muted-foreground text-lg italic border-l border-primary/50 pl-6">
                "Our approach aligns enterprise AI initiatives directly with measurable business outcomes. We are the partners for larger companies and enterprise leaders who demand results, not just technological novelties."
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}