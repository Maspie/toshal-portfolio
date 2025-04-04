import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "ThinkFuture Technologies",
    period: "March 2021 - June 2023",
    description: "Developed AI-driven metamorphic testing frameworks, boosting edge-case coverage by 20% and uncovering hidden defects in complex queries. Implemented ML-based test case selection, reducing manual effort by 30% and accelerating regression cycles. Mentored junior engineers, reducing onboarding time by 25% and improving team productivity by 20%.",
  },
  {
    title: "Data Analyst Intern",
    company: "Pratham Software",
    period: "May 2020 - September 2020",
    description: "Created interactive dashboards and visualizations using Python, Seaborn, and Tableau, improving decision-making efficiency by 15%. Optimized Azure Blob Storage architecture, increasing data efficiency by 30% and ensuring 99.9% uptime.",
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

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l border-primary last:pb-0"
            >
              <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1.5" />
              
              <div className="bg-card p-6 rounded-lg border hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-primary mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
