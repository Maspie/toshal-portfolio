import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import { ThemeProvider, useTheme } from "./lib/theme";
import { ParticlesBackground } from "@/components/ParticlesBackground";

function AppWrapper() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global particles behind everything */}
      {theme === "dark" && <ParticlesBackground />}
      <Router base="/toshal-portfolio">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppWrapper />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
