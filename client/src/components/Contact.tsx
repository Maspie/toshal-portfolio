import { motion } from "framer-motion";
import { Send, Github, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTheme } from "@/lib/theme";

export function Contact() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Maspie", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/toshal-warke", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-background/30 backdrop-blur-md border border-border hover:bg-primary/10 p-3 rounded-full transition-colors shadow-md"
                >
                  <link.icon className="w-6 h-6 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-xl"
          >
            <form
              action="https://formsubmit.co/twarke1@asu.edu"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://maspie.github.io/toshal-portfolio/#contact"
              />

              <Input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="rounded-xl px-4 py-3 bg-background/80 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <Input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="rounded-xl px-4 py-3 bg-background/80 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <Textarea
                name="message"
                required
                placeholder="Your Message"
                className="rounded-xl px-4 py-3 bg-background/80 border border-border min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              {/* Button adjusts per theme */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border shadow-md backdrop-blur-md transition-all ${
                  theme === "light"
                    ? "border-gray-300 bg-white text-black hover:bg-gray-100"
                    : "border-white/10 bg-white/5 text-white hover:bg-primary/20"
                }`}
              >
                <Send className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
