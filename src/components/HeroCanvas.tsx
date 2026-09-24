"use client";
import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseOpacity: number;
  phase: number;
  gold: boolean;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let dots: Dot[] = [];
    const SPACING = 56;

    function buildDots(w: number, h: number) {
      dots = [];
      const cols = Math.ceil(w / SPACING) + 2;
      const rows = Math.ceil(h / SPACING) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING - (SPACING / 2);
          const y = r * SPACING - (SPACING / 2);
          const gold = Math.random() < 0.04;
          dots.push({
            x, y,
            baseOpacity: 0.12 + Math.random() * 0.18,
            phase: Math.random() * Math.PI * 2,
            gold,
          });
        }
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width  = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
      buildDots(w, h);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;
    function draw() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      t += 0.006;

      for (const d of dots) {
        const pulse = Math.sin(t + d.phase) * 0.5 + 0.5;
        const opacity = d.baseOpacity + pulse * 0.12;

        if (d.gold) {
          // Gold accent dot with soft glow
          const glowR = 6;
          const grad = ctx!.createRadialGradient(d.x, d.y, 0, d.x, d.y, glowR);
          grad.addColorStop(0, `rgba(201,162,39,${opacity * 0.6})`);
          grad.addColorStop(1, "rgba(201,162,39,0)");
          ctx!.beginPath();
          ctx!.arc(d.x, d.y, glowR, 0, Math.PI * 2);
          ctx!.fillStyle = grad;
          ctx!.fill();

          ctx!.beginPath();
          ctx!.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(201,162,39,${opacity})`;
          ctx!.fill();
        } else {
          ctx!.beginPath();
          ctx!.arc(d.x, d.y, 1, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255,255,255,${opacity * 0.4})`;
          ctx!.fill();
        }
      }

      // Radial fade vignette
      const vgW = w, vgH = h;
      const vg = ctx!.createRadialGradient(
        vgW / 2, vgH / 2, 0,
        vgW / 2, vgH / 2, Math.max(vgW, vgH) * 0.72
      );
      vg.addColorStop(0, "rgba(8,8,8,0)");
      vg.addColorStop(0.6, "rgba(8,8,8,0.2)");
      vg.addColorStop(1, "rgba(8,8,8,0.85)");
      ctx!.fillStyle = vg;
      ctx!.fillRect(0, 0, vgW, vgH);

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
