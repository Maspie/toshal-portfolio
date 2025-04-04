import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Particles from "@tsparticles/react";
import { ParticlesBackground } from "./ParticlesBackground";
import { useTheme } from "@/lib/theme";

export function Hero() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 relative ${
        theme === "light" ? "bg-[#f9f5ff]" : "bg-background"
      }`}
    >
      {theme === "dark" && <ParticlesBackground />}
      {theme === "light" && (
        <Particles
          id="tsparticles-light"
          options={{
            background: { color: "#f9f5ff" },
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              color: { value: "#d1d5db" },
              links: {
                enable: true,
                color: "#e5e7eb",
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto grid md:grid-cols-2 gap-8 items-center pt-16 relative z-10"
      >
        <div className="text-left space-y-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg text-primary mb-2">Welcome to my portfolio</h2>
            <div className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Toshal Warke", 2000,
                  "A Machine Learning Engineer", 2000,
                  "An AI Researcher", 2000,
                  "A Software Developer", 2000
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-primary to-purple-500 dark:to-blue-500 text-transparent bg-clip-text"
                style={{ backgroundSize: "200% 200%" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground h-[60px]"
          >
            <TypeAnimation
              sequence={[
                "Building AI-driven solutions", 2000,
                "Enhancing Machine Learning models", 2000,
                "Developing NLP & Computer Vision applications", 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about solving real-world problems with AI, Deep Learning, and Natural Language Processing. 
            With expertise in Python, TensorFlow, PyTorch, and cloud technologies like AWS & Azure, I build AI models 
            that enhance efficiency and drive innovation.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gap-2 relative overflow-hidden group">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <a href="/Toshal_Warke_Resume.pdf" download>Download CV</a>
                <span className="absolute inset-0 w-full h-full bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" className="gap-2 relative overflow-hidden group">
                <Send className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <a href="mailto:twarke1@asu.edu">Contact Me</a>
                <span className="absolute inset-0 w-full h-full bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/*image section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative hidden md:flex justify-center items-center"
        >
          <div className="relative w-[90%] h-[500px] rounded-lg overflow-hidden mx-auto my-8 bg-card shadow-md flex items-center justify-center">
            <img
              src="/client/image.jpeg"
              alt="Toshal Warke"
              className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
