import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function CaseStudies() {
  return (
    <div className="w-full pb-32">
      <section className="container mx-auto px-6 md:px-12 pt-32 pb-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl border-b border-border pb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Real outcomes driven by deliberate strategic positioning.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-32"
        >
          {caseStudies.map((study, idx) => (
            <motion.article key={idx} variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Case Study 0{idx + 1}</div>
                  <h2 className="text-3xl font-serif mb-6">{study.client}</h2>
                  <div className="text-sm bg-muted inline-block px-3 py-1 mb-8">{study.industry}</div>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Context</h3>
                    <p className="text-foreground leading-relaxed">{study.context}</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Problem</h3>
                    <p className="text-foreground leading-relaxed">{study.problem}</p>
                  </div>
                </div>
                
                <div className="bg-muted p-8 md:p-12">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Intervention</h3>
                  <p className="text-foreground leading-relaxed text-lg">{study.intervention}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-12">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Outcome</h3>
                    <p className="text-foreground leading-relaxed">{study.outcome}</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Strategic Insight</h3>
                    <p className="text-foreground font-serif text-lg leading-relaxed italic">{study.insight}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

const caseStudies = [
  {
    client: "Global FinTech Platform",
    industry: "FinTech",
    context: "A rapidly growing cross-border payments infrastructure preparing for a Series B.",
    problem: "Investors perceived them as a regional player rather than a global infrastructure layer. Valuation expectations were misaligned with the founders' vision.",
    intervention: "Redesigned the narrative architecture to frame them as the 'AWS for emerging market liquidity'. Shifted focus from transaction volume to API adoption among enterprise clients.",
    outcome: "Successfully raised a $45M Series B at a premium valuation, led by top-tier global investors.",
    insight: "Your narrative sets the anchor for your valuation. If you sound like a local tool, you get priced like one."
  },
  {
    client: "Enterprise AI Infrastructure",
    industry: "Generative AI",
    context: "Post-seed startup selling complex AI orchestration layers to Fortune 500s.",
    problem: "Sales cycles were 12+ months. The product was overly technical and failed to communicate business value to non-technical executives.",
    intervention: "Rebuilt the GTM messaging around 'Revenue-first AI'. Created a ROI-calculator framework and simplified the product positioning to focus entirely on productivity gains.",
    outcome: "Reduced enterprise sales cycle by 40% and closed three Fortune 500 pilots within a single quarter.",
    insight: "Enterprise buyers don't buy algorithms; they buy efficiency and risk mitigation."
  },
  {
    client: "Global Education Network",
    industry: "EdTech",
    context: "An established higher education network expanding into global remote learning.",
    problem: "Struggling with student acquisition costs and low perceived prestige in their new digital offerings.",
    intervention: "Designed a new curriculum framework and partnership strategy. Forged strategic alliances with industry leaders to act as credibility anchors.",
    outcome: "Decreased CAC by 35% and increased global enrollment applications by 150% in 6 months.",
    insight: "In education, prestige is the primary growth driver. Partnerships can manufacture prestige overnight."
  }
];