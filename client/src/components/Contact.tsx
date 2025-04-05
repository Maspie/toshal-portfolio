import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // TODO: Implement form submission (Send email via backend or API)
  };

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
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">twarke1@asu.edu</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card hover:bg-primary/10 p-3 rounded-full transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 rounded-lg border"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className={`bg-background ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">Name is required</span>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className={`bg-background ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">Valid email is required</span>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                  className={`bg-background min-h-[150px] ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                />
                {errors.message && (
                  <span className="text-sm text-red-500">Message is required</span>
                )}
              </div>

              <Button type="submit" className="w-full gap-2 group">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
