import { motion } from "framer-motion";
import { Link } from "wouter";

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

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 pt-32 pb-40">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-serif text-foreground">
            In a world where building is cheap, growth is the only moat.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Ikigai partners with founders and executives to align capital, product, narrative, and AI into a single growth engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/services">
              <a className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-sm tracking-wide hover:bg-primary transition-all duration-300" data-testid="button-work-with-us">
                Work With Us
              </a>
            </Link>
            <Link href="/case-studies">
              <a className="inline-flex items-center justify-center border border-border bg-transparent text-foreground px-8 py-4 text-sm tracking-wide hover:border-foreground transition-all duration-300" data-testid="button-view-case-studies">
                View Case Studies
              </a>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Positioning Statement Section */}
      <section className="bg-foreground text-background py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-12 text-background">
              Today, we are not building software.<br />
              We are designing behavioral change at scale.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              As the cost and speed of building declines, distribution, persuasion, and positioning become the true competitive advantage. Ikigai operates at the intersection of capital strategy, product intelligence, and narrative architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do (4 Pillars Section) */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {pillars.map((pillar, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group">
              <div className="text-sm text-muted-foreground mb-6 font-medium tracking-widest border-b border-border pb-4">
                0{idx + 1} &mdash; {pillar.title}
              </div>
              <ul className="space-y-4">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Who We Work With & Credibility */}
      <section className="border-t border-border pt-32 pb-32">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Who We Work With</h3>
            <ul className="space-y-4 mb-12 text-2xl font-serif">
              <li>AI & Generative AI</li>
              <li>FinTech</li>
              <li>EdTech</li>
              <li>HealthTech</li>
              <li>Select DeepTech</li>
              <li>Global-first B2C</li>
            </ul>
            <p className="text-muted-foreground max-w-md">
              <strong className="text-foreground font-medium">Our sweet spot:</strong> companies building for global markets from day one.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-muted p-12 flex flex-col justify-center"
          >
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-12">Credibility</h3>
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <div className="font-serif text-xl border-l border-border pl-6">Ex-Founders</div>
              <div className="font-serif text-xl border-l border-border pl-6">Stanford Alumni</div>
              <div className="font-serif text-xl border-l border-border pl-6">Former CEOs & C-Level Operators</div>
              <div className="font-serif text-xl border-l border-border pl-6">Forbes 30 Under 30</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 bg-foreground text-background text-center px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-12 text-background">
            If you're building for the world, build deliberately.
          </h2>
          <a href="mailto:hello@ikigai.com" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 text-sm tracking-wide hover:bg-white hover:text-foreground transition-all duration-300" data-testid="button-start-conversation">
            Start a Conversation
          </a>
        </motion.div>
      </section>
    </div>
  );
}

const pillars = [
  {
    title: "Capital Strategy",
    items: [
      "Seed to Series B fundraising positioning",
      "Series A specialty",
      "Cross-border capital strategy (US, Europe, India, Singapore)",
      "Investor narrative architecture",
      "Term sheet strategy"
    ]
  },
  {
    title: "Growth Architecture",
    items: [
      "Revenue-informed product roadmap design",
      "Behavioral psychology application",
      "Workflow optimization",
      "High-impact growth experiments",
      "Founder decision clarity"
    ]
  },
  {
    title: "Narrative & Category Design",
    items: [
      "Strategic positioning",
      "Category framing",
      "Partnership persuasion strategy",
      "Creative growth frameworks"
    ]
  },
  {
    title: "AI as a Revenue Engine",
    items: [
      "Use-case-first AI transformation",
      "Vendor evaluation & selection",
      "Integration roadmaps",
      "Revenue & productivity alignment",
      "Measurable ROI"
    ]
  }
];