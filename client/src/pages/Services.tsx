import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Services() {
  return (
    <div className="w-full pb-32">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-32 pb-24 border-b border-border">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8">Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We operate at the intersection of capital strategy, product intelligence, and narrative architecture.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 md:px-12">
        {/* Fundraising Strategy */}
        <section className="py-24 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">01 &mdash; Capital Strategy</div>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
                Raising capital is not about access. It's about precision.
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We position your company as a strategic advisory partner, not intro brokering. We focus on preparing you structurally and narratively for institutional investors.
              </p>
              <ul className="space-y-6">
                {["Investor narrative construction", "Series A positioning", "Financial storytelling alignment", "Cross-border capital strategy", "Strategic preparation for institutional investors"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Growth & Product Strategy */}
        <section className="py-24 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">02 &mdash; Growth Architecture</div>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
                Building is easy. Knowing what to build next is hard.
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Product and growth are inseparable. We design systems where what you build directly drives distribution and retention.
              </p>
              <ul className="space-y-6">
                {["Revenue-informed roadmap design", "Behavioral psychology lens to product", "Workflow audits", "High-leverage growth experiments", "Product + GTM alignment"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Narrative Strategy */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">03 &mdash; Narrative & Category Design</div>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
                Identical products win or lose based on positioning.
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We focus on strategic narrative architecture, not tactical marketing. We ensure you are perceived differently in a crowded market.
              </p>
              <ul className="space-y-6">
                {["Messaging architecture", "Category framing", "Partnership persuasion strategy", "Creative growth systems", "Top-of-mind recall strategy"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}