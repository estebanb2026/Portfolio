"use client";
import { useEffect, useRef } from "react";

const CODE = `import { useState, useEffect } from 'react'
export default function HeroSection() {
const [open, setOpen] = useState(false)
return <motion.div className="glass-card">
tools.map((tool) => <GlassCard key={tool.id} />)
projects.filter((p) => p.featured === true)
<AnimatePresence mode="wait">
<FAQAccordion items={faqData} />
</AnimatePresence>
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
className="flex flex-col gap-4 px-5 md:px-16"
// Designed for humans. Built with AI.
export const metadata = { title: 'Esteban Barrera' }
<NavSidebar sections={navItems} activeSection={active} />
framer-motion · tailwindcss · next.js 14
`.repeat(40);

export default function CursorSpotlight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const w = window.innerWidth;
      const h = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x, y } = mouse.current;
      if (x < 0) {
        raf.current = requestAnimationFrame(draw);
        return;
      }

      const scrollY = window.scrollY;
      const gx = x;
      const gy = y + scrollY;
      const radius = 220;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(110, 231, 183, 0.22)";
      ctx.font = "11px 'DM Mono', monospace";

      const lines = CODE.split("\n");
      const lineHeight = 20;
      lines.forEach((line, i) => {
        const yPos =
          ((i * lineHeight) + scrollY) %
          Math.max(canvas.height, lineHeight);
        ctx.fillText(line, 20, yPos);
      });

      ctx.globalCompositeOperation = "destination-in";
      const maskGradient = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius);
      maskGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      maskGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = maskGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "source-over";

      raf.current = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      const nextH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );
      if (canvas.height !== nextH) {
        resize();
      }
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(draw);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onMove = (x: number, y: number) => {
      mouse.current = { x, y };
    };

    const onMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchEnd = () => { mouse.current = { x: -9999, y: -9999 }; };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("touchend", onTouchEnd);

    raf.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export { CursorSpotlight };
