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
      staggerChildren: 0.15
    }
  }
};

export default function Team() {
  return (
    <div className="w-full pb-32">
      <section className="container mx-auto px-6 md:px-12 pt-32 pb-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl border-b border-border pb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8">Operators. Builders. Strategists.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A selective team bringing profound operational experience to strategic advisory.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group">
              <div className="aspect-square bg-muted mb-8 w-full relative overflow-hidden flex items-center justify-center">
                {/* Minimalist placeholder for the photo as requested (no stock photos, minimalist) */}
                <div className="absolute inset-0 bg-secondary flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-4xl font-serif text-muted-foreground/30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <h2 className="text-3xl font-serif mb-2">{member.name}</h2>
              <div className="text-sm font-medium tracking-wide text-foreground mb-4">{member.role}</div>
              <div className="flex flex-wrap gap-2 mb-6">
                {member.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs border border-border px-2 py-1 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {member.summary}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Systems Advisory Sub-section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-40 bg-foreground text-background p-12 md:p-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-background">
                Education Systems Advisory
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We operate a specialized capability unit focused on the modernization and growth of institutional education providers on a global scale.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Core Capabilities</h3>
              <ul className="space-y-4">
                {["Curriculum redesign", "Placement growth strategy", "Student acquisition systems", "Study abroad partnerships", "Institutional AI integration"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-background">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const team = [
  {
    name: "Elena Rostova",
    role: "Managing Partner",
    summary: "Strategic architect behind 4 category-defining companies. Focuses on founder narrative and structural positioning.",
    tags: ["Ex-Founder", "Stanford Alumni", "Forbes 30 Under 30"]
  },
  {
    name: "Marcus Chen",
    role: "Partner, Capital Strategy",
    summary: "Orchestrated over $400M in venture funding across global markets. Specializes in cross-border Series A/B term sheet strategy.",
    tags: ["Former C-Level Operator", "Stanford Alumni"]
  },
  {
    name: "Sarah Jenkins",
    role: "Partner, AI & Product",
    summary: "Led product for a global AI platform. Designs revenue-informed integration roadmaps for enterprise clients.",
    tags: ["Ex-Founder", "Forbes 30 Under 30"]
  },
  {
    name: "David Al-Fayed",
    role: "Director, Growth Architecture",
    summary: "Behavioral psychology expert applying growth systems to global B2C and EdTech companies. Focuses on measurable ROI.",
    tags: ["Former CEO"]
  }
];