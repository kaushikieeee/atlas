import { useEffect, useRef } from "react";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  angle: number;
  speed: number;
  distance: number;
  scale: number;
}

function createStar(w: number, h: number): Star {
  const side = Math.floor(Math.random() * 4);
  let x: number, y: number;
  switch (side) {
    case 0: x = Math.random() * w; y = 0; break;
    case 1: x = w; y = Math.random() * h; break;
    case 2: x = Math.random() * w; y = h; break;
    default: x = 0; y = Math.random() * h; break;
  }
  return {
    x, y,
    angle: Math.atan2(h / 2 - y, w / 2 - x) * (180 / Math.PI),
    speed: Math.random() * 30 + 5,
    distance: 0,
    scale: 1,
  };
}

export function ShootingStars({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 4200,
  maxDelay = 8700,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 80,
  starHeight = 2,
  className,
}: ShootingStarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const schedule = () => {
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      return setTimeout(() => {
        stars.push(createStar(canvas.width, canvas.height));
        if (stars.length > 30) stars = stars.slice(-30);
        schedule();
      }, delay);
    };
    const timeout = schedule();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars = stars
        .map((s) => ({
          ...s,
          distance: s.distance + s.speed * 0.5,
          scale: Math.max(0, 1 - s.distance / 300),
        }))
        .filter((s) => s.scale > 0);

      const rad = (deg: number) => (deg * Math.PI) / 180;
      const len = starWidth;

      for (const s of stars) {
        const cos = Math.cos(rad(s.angle));
        const sin = Math.sin(rad(s.angle));

        const gradient = ctx.createLinearGradient(
          s.x + cos * len * s.scale,
          s.y + sin * len * s.scale,
          s.x,
          s.y
        );
        gradient.addColorStop(0, trailColor + "00");
        gradient.addColorStop(0.3, trailColor);
        gradient.addColorStop(1, starColor);

        ctx.beginPath();
        ctx.moveTo(s.x + cos * len * s.scale, s.y + sin * len * s.scale);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = starHeight * s.scale;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timeout);
      window.removeEventListener("resize", resize);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starColor, trailColor, starWidth, starHeight]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
    />
  );
}
