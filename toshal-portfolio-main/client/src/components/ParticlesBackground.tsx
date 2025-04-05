import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    // console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: true, zIndex: -15 },
            background: {
              color: {
                value: "#0A0212", // Dark purple shade
              },
            },
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#A855F7", // Purple shade
              },
              links: {
                enable: true,
                distance: 150,
                color: "#A855F7",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
              },
              opacity: {
                value: 0.6,
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                },
                push: {
                  quantity: 3,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
