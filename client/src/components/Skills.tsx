import { motion } from "framer-motion";
import {
  Brain,
  Database,
  GitBranch,
  Cloud,
  BarChart3,
  Layers,
} from "lucide-react";
import { useTheme } from "@/lib/theme";
import { ParticlesBackground } from "./ParticlesBackground";
import Particles from "@tsparticles/react";

const skills = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "TensorFlow, PyTorch, Keras, OpenCV, Scikit-Learn",
  },
  {
    icon: Database,
    title: "Data Engineering & Databases",
    description: "SQL, PostgreSQL, MongoDB, Apache Spark, PySpark",
  },
  {
    icon: Layers,
    title: "Deep Learning & Computer Vision",
    description: "CNNs, YOLOv8, Image Segmentation, Object Detection",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    description: "Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Microsoft Azure, Docker, CI/CD, Kubernetes",
  },
  {
    icon: GitBranch,
    title: "Version Control & Collaboration",
    description: "Git, GitHub, GitLab, JIRA, Asana",
  },
];

export function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Particle background */}
      {theme === "dark" && <ParticlesBackground />}
      {theme === "light" && (
        <Particles
          id="tsparticles-skills-light"
          options={{
            background: { color: "#f9f5ff" },
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              color: { value: "#9c81ff" },
              links: {
                enable: true,
                color: "#9c81ff",
                distance: 120,
                opacity: 0.4,
              },
              move: { enable: true, speed: 1 },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 2 },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />
      )}

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <skill.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
