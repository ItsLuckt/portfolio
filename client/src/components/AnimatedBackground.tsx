import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/use-theme";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isDark = theme === "dark" || theme === "system";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle system
    const PARTICLE_COUNT = 60;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      alphaDir: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      alphaDir: Math.random() > 0.5 ? 0.003 : -0.003,
    }));

    // Grid lines
    const GRID_SIZE = 80;
    let gridOffset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background base
      if (isDark) {
        const bg = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) * 0.8);
        bg.addColorStop(0, "rgba(30,8,55,1)");
        bg.addColorStop(1, "rgba(5,1,16,1)");
        ctx.fillStyle = bg;
      } else {
        const bg = ctx.createRadialGradient(width / 2, height * 0.3, 0, width / 2, height * 0.3, Math.max(width, height) * 0.8);
        bg.addColorStop(0, "rgba(245,240,255,1)");
        bg.addColorStop(1, "rgba(250,248,255,1)");
        ctx.fillStyle = bg;
      }
      ctx.fillRect(0, 0, width, height);

      // Animated perspective grid
      gridOffset = (gridOffset + 0.3) % GRID_SIZE;
      const gridAlpha = isDark ? 0.07 : 0.06;
      ctx.strokeStyle = isDark
        ? `rgba(147,51,234,${gridAlpha})`
        : `rgba(109,40,217,${gridAlpha})`;
      ctx.lineWidth = 1;

      // Horizontal lines scrolling down
      for (let y = -GRID_SIZE + gridOffset; y < height + GRID_SIZE; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      // Vertical lines
      for (let x = 0; x < width + GRID_SIZE; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Glowing orbs
      const orbs = isDark
        ? [
            { x: width * 0.2, y: height * 0.2, r: 350, color: "rgba(147,51,234," },
            { x: width * 0.8, y: height * 0.5, r: 300, color: "rgba(168,85,247," },
            { x: width * 0.4, y: height * 0.85, r: 400, color: "rgba(99,102,241," },
          ]
        : [
            { x: width * 0.2, y: height * 0.2, r: 350, color: "rgba(167,139,250," },
            { x: width * 0.8, y: height * 0.5, r: 300, color: "rgba(196,181,253," },
            { x: width * 0.4, y: height * 0.85, r: 400, color: "rgba(165,180,252," },
          ];

      const t = Date.now() * 0.0005;
      orbs.forEach((orb, i) => {
        const ox = orb.x + Math.sin(t + i * 1.3) * 60;
        const oy = orb.y + Math.cos(t * 0.8 + i * 0.9) * 40;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, orb.color + (isDark ? "0.12)" : "0.18)"));
        grad.addColorStop(1, orb.color + "0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Floating particles with connection lines
      const particleColor = isDark ? "rgba(167,139,250," : "rgba(109,40,217,";
      particles.forEach((p) => {
        // Update
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;
        if (p.alpha > 0.6 || p.alpha < 0.05) p.alphaDir *= -1;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor + p.alpha + ")";
        ctx.fill();
      });

      // Draw connection lines between nearby particles
      const MAX_DIST = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const lineAlpha = (1 - dist / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particleColor + lineAlpha + ")";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Top beam
      const beam = ctx.createLinearGradient(width * 0.1, 0, width * 0.9, 0);
      beam.addColorStop(0, "transparent");
      beam.addColorStop(0.5, isDark ? "rgba(168,85,247,0.5)" : "rgba(139,92,246,0.3)");
      beam.addColorStop(1, "transparent");
      ctx.strokeStyle = beam;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width * 0.1, 0);
      ctx.lineTo(width * 0.9, 0);
      ctx.stroke();

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ display: "block" }}
    />
  );
}
