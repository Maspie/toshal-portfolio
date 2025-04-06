import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Cross-Camera Action & Identity Recognition",
    description:
      "Developed an action recognition model using TensorFlow, JAX, and XLA, increasing detection accuracy by 25%. Built a YOLOv8 feature extractor to match individuals across multiple camera feeds without facial recognition.",
    technologies: ["TensorFlow", "JAX", "YOLOv8", "Cloud Deployment"],
    github: "https://github.com/Maspie/cross-camera-recognition",
    live: "",
  },
  {
    title: "Enhancing Experience of Micro Blogging Sites",
    description:
      "Created a K-means clustering algorithm for Twitter disaster data, improving user engagement by 40%. Designed an auto-summary generator for tweets, enhancing comprehension by 30%.",
    technologies: ["Python", "LangChain", "NLP", "Clustering"],
    github: "https://github.com/Maspie/microblogging-ai",
    live: "",
  },
  {
    title: "Customer Lifetime Value Prediction",
    description:
      "Optimized insurance data analysis efficiency by 25%, achieving 89.7% accuracy in customer lifetime value prediction using advanced regression models and PCA-based segmentation.",
    technologies: ["Python", "Seaborn", "PCA", "Regression"],
    github: "https://github.com/Maspie/customer-ltv-prediction",
    live: "",
  },
  {
    title: "Neurodegenerative Disease Detection",
    description:
      "Developed a deep learning model to classify MRI and PET scans for neurodegenerative diseases. Improved feature extraction with CNNs, achieving higher diagnostic accuracy.",
    technologies: ["Python", "Keras", "OpenCV", "Medical Imaging"],
    github: "https://github.com/Maspie/neuro-disease-detection",
    live: "",
  },
  {
    title: "Error-Correcting Image Codec",
    description:
      "Developed an image compression and transmission error resilience toolkit using Discrete Cosine Transform (DCT) for compression and Reed-Solomon coding for error correction.",
    technologies: ["Python", "NumPy", "SciPy", "Reed-Solomon", "DCT", "Matplotlib"],
    github: "https://github.com/Maspie/Error-Correcting-Image-Codec",
    live: "",
  },
  {
    title: "Emotion Detection from Video Streaming",
    description:
      "Built a deep learning-based emotion detection system using facial expression recognition in real-time video streams, leveraging OpenCV and TensorFlow.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Computer Vision"],
    github: "https://github.com/Maspie/Emotion-Detection-from-a-video-streaming",
    live: "",
  },
  {
    title: "Face Detection & Recognition for User Authentication",
    description:
      "Developed a face recognition system for secure authentication using OpenCV, Haarcascade, and deep learning techniques. Trained on custom images extracted from ID documents.",
    technologies: ["Python", "OpenCV", "Face Recognition", "Deep Learning"],
    github: "https://github.com/Maspie/Face-Detection-and-Recognition-for-User-Authentication",
    live: "",
  },
  {
    title: "Java File Security System",
    description:
      "Implemented a secure file storage system using DES encryption. Users can encrypt, store, and share files using email authentication, security keys, and remote access verification.",
    technologies: ["Java", "DES Encryption", "File Security", "Email Authentication"],
    github: "https://github.com/Maspie/Java-File-Security-System",
    live: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card p-6 rounded-lg border overflow-hidden hover:border-primary transition-colors"
            >
              {/* Radial glow background */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: "radial-gradient(circle at top center, rgba(147, 51, 234, 0.08), transparent 70%)",
                  maskImage: "radial-gradient(circle, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 100%)",
                }}
              />

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
