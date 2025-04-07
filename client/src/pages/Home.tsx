import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import GlowingClockBackground from "@/components/CatEyesBackground";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
// import ChatbotLauncher from "@/components/ChatbotLauncher"; //  Temporarily removed

export default function Home() {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="min-h-screen">
      <GlowingClockBackground />
      <Navigation />

      <main>
        {/* Smooth Scroll Effect for Hero Section */}
        <motion.div style={{ y: translateY }}>
          <Hero />
        </motion.div>

        {/* Scroll Reveal Effects for Sections */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Skills />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Experience />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Projects />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Contact />
        </motion.div>
      </main>

      {/* <ChatbotLauncher />  Removed temporarily */}
    </div>
  );
}
