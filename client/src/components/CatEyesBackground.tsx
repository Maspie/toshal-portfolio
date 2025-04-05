import { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function GlowingClockBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const clockCenter = useRef<Position>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const isHovered = useRef(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDarkMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      clockCenter.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight * 0.3, // Top-ish position
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const distance = Math.hypot(
        e.clientX - clockCenter.current.x,
        e.clientY - clockCenter.current.y
      );

      isHovered.current = distance < 100; // Glow more when near clock
    };

    const drawClock = () => {
      const { x, y } = clockCenter.current;
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.1;

      const now = new Date();
      const hourAngle =
        ((now.getHours() % 12) + now.getMinutes() / 60) * (Math.PI / 6);
      const minuteAngle =
        Math.atan2(
          mousePos.current.y - y,
          mousePos.current.x - x
        ) + Math.PI / 2; // Minute hand tracks mouse

      const glowIntensity = isHovered.current ? 35 : 15;
      const clockOpacity = isHovered.current ? 0.7 : 0.4;

      // Background subtle fade circle
      ctx.beginPath();
      ctx.arc(x, y, radius * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(60, 20, 80, ${clockOpacity * 0.1})`;
      ctx.fill();

      // Outer glowing clock circle
      ctx.shadowColor = 'rgba(147, 51, 234, 0.6)';
      ctx.shadowBlur = glowIntensity;
      ctx.strokeStyle = `rgba(255, 255, 255, ${clockOpacity})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Hour Hand (Short)
      ctx.strokeStyle = `rgba(255, 255, 255, ${clockOpacity})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(
        x + Math.cos(hourAngle - Math.PI / 2) * (radius * 0.5),
        y + Math.sin(hourAngle - Math.PI / 2) * (radius * 0.5)
      );
      ctx.stroke();

      // Minute Hand (Long, tracks mouse)
      ctx.strokeStyle = `rgba(180, 100, 255, ${clockOpacity})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(
        x + Math.cos(minuteAngle) * (radius * 0.8),
        y + Math.sin(minuteAngle) * (radius * 0.8)
      );
      ctx.stroke();

      // Center point
      ctx.fillStyle = `rgba(255, 255, 255, ${clockOpacity})`;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawClock();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isDarkMode]);

  if (!isDarkMode) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-transparent transition-opacity duration-300"
    />
  );
}
