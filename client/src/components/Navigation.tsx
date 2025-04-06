import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Navigation() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.label === "Home" ? (
              <button
                key={item.href}
                onClick={scrollToTop}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
