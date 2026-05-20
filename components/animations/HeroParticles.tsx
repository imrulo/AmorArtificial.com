"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  isHeart: boolean;
  opacity: number;
};

/**
 * Subtle canvas particle field: floating nodes + heart-shaped accents
 * connected by neural-network-style lines. Kept lightweight for Lighthouse.
 */
export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      const count = Math.min(48, Math.floor(canvas.offsetWidth / 24));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1,
        isHeart: Math.random() > 0.75,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const drawHeart = (x: number, y: number, size: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#FF2D95";
      ctx.beginPath();
      const s = size * 3;
      ctx.moveTo(x, y + s / 4);
      ctx.bezierCurveTo(x, y, x - s / 2, y, x - s / 2, y + s / 4);
      ctx.bezierCurveTo(x - s / 2, y + s / 2, x, y + (s * 3) / 4, x, y + s);
      ctx.bezierCurveTo(x, y + (s * 3) / 4, x + s / 2, y + s / 2, x + s / 2, y + s / 4);
      ctx.bezierCurveTo(x + s / 2, y, x, y, x, y + s / 4);
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        if (p.isHeart) {
          drawHeart(p.x, p.y, p.size, p.opacity);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
          ctx.fill();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(123, 44, 191, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(tick);
    };

    resize();
    initParticles();
    tick();

    const onResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden
    />
  );
}
