import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "ThinkFuture Technologies",
    period: "March 2021 - June 2023",
    duration: "> 2 yrs",
    description:
      "Developed AI-driven metamorphic testing frameworks, boosting edge-case coverage by 20% and uncovering hidden defects in complex queries. Implemented ML-based test case selection, reducing manual effort by 30% and accelerating regression cycles. Mentored junior engineers, reducing onboarding time by 25% and improving team productivity by 20%.",
  },
  {
    title: "Data Analyst Intern",
    company: "Pratham Software",
    period: "May 2020 - September 2020",
    duration: "< 1 yr",
    description:
      "Created interactive dashboards and visualizations using Python, Seaborn, and Tableau, improving decision-making efficiency by 15%. Optimized Azure Blob Storage architecture, increasing data efficiency by 30% and ensuring 99.9% uptime.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* vertical line with short top segment */}
          <div className="absolute left-[1.25rem] top-[-16px] bottom-0 w-[2px] bg-purple-500 z-0" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20 pb-16 last:pb-0"
            >
              {/* Floating Duration Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                className="absolute left-0 top-2 bg-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-10"
              >
                {exp.duration}
              </motion.div>

              {/* Experience Card */}
              <div className="z-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
