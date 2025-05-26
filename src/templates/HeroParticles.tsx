import { useCallback, useEffect, useRef } from 'react';

// Prosty, lekki system cząsteczek na canvas
const PARTICLE_COUNT = 60;
const COLORS = ['#fff', '#00FFD0', '#00A3FF', '#FF00E0', '#FFD600'];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth * dpr;
    const height = canvas.offsetHeight * dpr;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    // @ts-ignore
    if (!canvas.particles) {
      // @ts-ignore
      canvas.particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: random(0, width),
        y: random(0, height),
        r: random(1.5, 3.5),
        color: COLORS[Math.floor(random(0, COLORS.length))],
        dx: random(-0.7, 0.7),
        dy: random(-0.7, 0.7),
        alpha: random(0.5, 1),
      }));
    }
    // @ts-ignore
    const { particles } = canvas;
    for (const p of particles) {
      const { x, y, r, color, dx, dy, alpha } = p;
      p.x += dx;
      p.y += dy;
      if (p.x < 0 || p.x > width) p.dx *= -1;
      if (p.y < 0 || p.y > height) p.dy *= -1;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    }
  }, []);

  const animate = useCallback(() => {
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [drawParticles]);

  useEffect(() => {
    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-30 size-full"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
};

export { HeroParticles };
