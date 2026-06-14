import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface Ring {
  vertices: Point[];
  width: number;
  opacityMultiplier: number;
}

interface SuminagashiBgProps {
  theme: "light" | "dark";
}

// A fast, lightweight 2D Perlin noise implementation for organic water drift
const createNoise2D = () => {
  const perm = new Uint8Array(512);
  const lookup = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];
  
  // Seed the permutation table
  for (let i = 0; i < 256; i++) {
    const val = Math.floor(Math.random() * 256);
    perm[i] = val;
    perm[i + 256] = val;
  }
  
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (t: number, a: number, b: number) => a + t * (b - a);
  const grad = (hash: number, x: number, y: number) => {
    const g = lookup[hash & 7];
    return g[0] * x + g[1] * y;
  };

  return (x: number, y: number) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    
    const aa = perm[perm[X] + Y];
    const ab = perm[perm[X] + Y + 1];
    const ba = perm[perm[X + 1] + Y];
    const bb = perm[perm[X + 1] + Y + 1];
    
    const x1 = lerp(u, grad(aa, xf, yf), grad(ba, xf - 1, yf));
    const x2 = lerp(u, grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1));
    return lerp(v, x1, x2);
  };
};

export const SuminagashiBg = ({ theme }: SuminagashiBgProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ringsRef = useRef<Ring[]>([]);
  const themeRef = useRef(theme);
  
  const mouseRef = useRef({
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    vx: 0,
    vy: 0,
    isMoved: false,
  });

  const rafIdRef = useRef<number | null>(null);
  const noise = useRef(createNoise2D());

  // Update theme reference when prop changes
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Track original size
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize simulation with beautiful starting pre-swirled rings
    const initSimulation = (w: number, h: number) => {
      const rings: Ring[] = [];

      const localAddDrop = (centerX: number, centerY: number, radiusRange: number) => {
        // 1. Push existing vertices outward (area conservation)
        for (let i = 0; i < rings.length; i++) {
          const ring = rings[i];
          for (let j = 0; j < ring.vertices.length; j++) {
            const v = ring.vertices[j];
            const dx = v.x - centerX;
            const dy = v.y - centerY;
            const d2 = dx * dx + dy * dy;
            if (d2 > 0) {
              const d = Math.sqrt(d2);
              const newD = Math.sqrt(d * d + radiusRange * radiusRange);
              const scale = newD / d;
              v.x = centerX + dx * scale;
              v.y = centerY + dy * scale;
            }
          }
        }

        // 2. Add new drop's concentric rings
        const ringCount = Math.floor(Math.random() * 4) + 6; // 6 to 9 rings
        for (let r = 0; r < ringCount; r++) {
          const ringRadius = (r + 1) * 14;
          const vertices: Point[] = [];
          const pointsCount = 160;
          for (let p = 0; p < pointsCount; p++) {
            const angle = (p / pointsCount) * Math.PI * 2;
            vertices.push({
              x: centerX + Math.cos(angle) * ringRadius,
              y: centerY + Math.sin(angle) * ringRadius,
            });
          }
          rings.push({
            vertices,
            width: Math.random() * 0.7 + 0.3, // variation in line width
            opacityMultiplier: Math.random() * 0.5 + 0.5,
          });
        }
      };

      // Seed with initial drops across the screen
      localAddDrop(w * 0.5, h * 0.45, 120);
      localAddDrop(w * 0.25, h * 0.3, 90);
      localAddDrop(w * 0.75, h * 0.6, 100);
      localAddDrop(w * 0.4, h * 0.75, 80);

      // Pre-swirl the initial canvas state to make it look marbled on load
      const swirlCount = 6;
      for (let s = 0; s < swirlCount; s++) {
        const sx = Math.random() * w;
        const sy = Math.random() * h;
        const sRadius = Math.random() * 180 + 120;
        const sStrength = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 1.2 + 0.6);

        for (let i = 0; i < rings.length; i++) {
          const ring = rings[i];
          for (let j = 0; j < ring.vertices.length; j++) {
            const v = ring.vertices[j];
            const dx = v.x - sx;
            const dy = v.y - sy;
            const d2 = dx * dx + dy * dy;
            if (d2 < sRadius * sRadius && d2 > 0) {
              const d = Math.sqrt(d2);
              const factor = 1 - d / sRadius;
              const angle = factor * factor * sStrength;
              const cos = Math.cos(angle);
              const sin = Math.sin(angle);
              v.x = sx + (dx * cos - dy * sin);
              v.y = sy + (dx * sin + dy * cos);
            }
          }
        }
      }

      ringsRef.current = rings;
    };

    initSimulation(width, height);

    // Handle resizing (scaling points to maintain canvas proportions)
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      const scaleX = newWidth / width;
      const scaleY = newHeight / height;

      ringsRef.current.forEach((ring) => {
        ring.vertices.forEach((v) => {
          v.x *= scaleX;
          v.y *= scaleY;
        });
      });

      width = canvas.width = newWidth;
      height = canvas.height = newHeight;
    };

    window.addEventListener("resize", handleResize);

    // Ink drop on click/pointerdown
    const handlePointerDown = (e: PointerEvent) => {
      const centerX = e.clientX;
      const centerY = e.clientY;
      const radiusRange = Math.random() * 20 + 35; // Size of drop

      const rings = ringsRef.current;

      // 1. Displace existing vertices
      for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        for (let j = 0; j < ring.vertices.length; j++) {
          const v = ring.vertices[j];
          const dx = v.x - centerX;
          const dy = v.y - centerY;
          const d2 = dx * dx + dy * dy;
          if (d2 > 0) {
            const d = Math.sqrt(d2);
            const newD = Math.sqrt(d * d + radiusRange * radiusRange);
            const scale = newD / d;
            v.x = centerX + dx * scale;
            v.y = centerY + dy * scale;
          }
        }
      }

      // 2. Insert new concentric rings at click
      const newRings: Ring[] = [];
      const ringCount = Math.floor(Math.random() * 3) + 5; // 5 to 7 rings
      for (let r = 0; r < ringCount; r++) {
        const ringRadius = (r + 1) * 10;
        const vertices: Point[] = [];
        const pointsCount = 140;
        for (let p = 0; p < pointsCount; p++) {
          const angle = (p / pointsCount) * Math.PI * 2;
          vertices.push({
            x: centerX + Math.cos(angle) * ringRadius,
            y: centerY + Math.sin(angle) * ringRadius,
          });
        }
        newRings.push({
          vertices,
          width: Math.random() * 0.6 + 0.4,
          opacityMultiplier: Math.random() * 0.4 + 0.6,
        });
      }

      // Cap rings array to prevent performance loss
      let combined = [...rings, ...newRings];
      if (combined.length > 90) {
        combined = combined.slice(combined.length - 90);
      }
      ringsRef.current = combined;
    };

    window.addEventListener("pointerdown", handlePointerDown);

    // Track mouse coordinates & velocity for fluid swirl
    const handlePointerMove = (e: PointerEvent) => {
      const mouse = mouseRef.current;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Calculate velocity
      mouse.vx = mouse.x - mouse.px;
      mouse.vy = mouse.y - mouse.py;
      
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      
      mouse.isMoved = true;
    };

    window.addEventListener("pointermove", handlePointerMove);

    // Main animation loop running at 60 FPS
    const loop = (timestamp: number) => {
      const time = timestamp * 0.001; // seconds
      const mouse = mouseRef.current;

      // 1. Physics: Apply fluid swirl/vortex from mouse movements
      if (mouse.isMoved) {
        const mx = mouse.x;
        const my = mouse.y;
        const vx = mouse.vx;
        const vy = mouse.vy;
        
        const speed = Math.sqrt(vx * vx + vy * vy);
        
        if (speed > 0.2) {
          const rings = ringsRef.current;
          const swirlRadius = 140;
          // Swirl strength proportional to mouse speed (capped)
          const baseStrength = Math.min(speed * 0.04, 0.22);
          // Direction of swirl alternates or matches motion
          const direction = vx > 0 ? 1 : -1;

          for (let i = 0; i < rings.length; i++) {
            const ring = rings[i];
            for (let j = 0; j < ring.vertices.length; j++) {
              const v = ring.vertices[j];
              const dx = v.x - mx;
              const dy = v.y - my;
              const d2 = dx * dx + dy * dy;
              
              if (d2 < swirlRadius * swirlRadius && d2 > 0) {
                const d = Math.sqrt(d2);
                const factor = 1 - d / swirlRadius;
                
                // Rotational swirl angle
                const angle = factor * factor * baseStrength * direction;
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                
                // Rotate base point around mouse cursor
                const rx = dx * cos - dy * sin;
                const ry = dx * sin + dy * cos;
                
                // Add a small drag force in the direction of mouse movement
                const drag = factor * 0.3;
                v.x = mx + rx + vx * drag;
                v.y = my + ry + vy * drag;
              }
            }
          }
        }

        // Dampen velocity to prevent infinite swirling
        mouse.vx *= 0.93;
        mouse.vy *= 0.93;
        if (Math.abs(mouse.vx) < 0.02 && Math.abs(mouse.vy) < 0.02) {
          mouse.isMoved = false;
        }
      }

      // 2. Rendering
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === "dark";
      const rings = ringsRef.current;
      const noiseFn = noise.current;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        if (ring.vertices.length < 2) continue;

        ctx.beginPath();
        ctx.lineWidth = ring.width;

        // Base opacity: light and dark mode specific adjustments for text readability
        const alpha = 0.075 * ring.opacityMultiplier;
        ctx.strokeStyle = isDark
          ? `rgba(244, 244, 245, ${alpha * 1.6})`  // Subtle white/zinc
          : `rgba(24, 24, 27, ${alpha * 0.95})`;    // Subtle black/zinc

        // Draw vertices with organic noise drift
        const points = ring.vertices.map((v) => {
          // Continuous micro-deformation wave using 2D noise over time
          const nVal = noiseFn(v.x * 0.0015, v.y * 0.0015 + time * 0.1) * Math.PI * 2;
          const driftX = Math.cos(nVal) * 6; // 6px maximum current drift
          const driftY = Math.sin(nVal) * 6;
          return {
            x: v.x + driftX,
            y: v.y + driftY,
          };
        });

        // Use quadratic curves between midpoints for extreme path smoothing
        const startPoint = points[0];
        ctx.moveTo(startPoint.x, startPoint.y);

        for (let j = 1; j < points.length - 1; j++) {
          const curr = points[j];
          const next = points[j + 1];
          const midX = (curr.x + next.x) / 2;
          const midY = (curr.y + next.y) / 2;
          ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
        }

        // Close the loop smoothly
        const last = points[points.length - 1];
        ctx.quadraticCurveTo(last.x, last.y, startPoint.x, startPoint.y);

        ctx.stroke();
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-500 bg-bg"
      style={{ mixBlendMode: "normal" }}
    />
  );
};
