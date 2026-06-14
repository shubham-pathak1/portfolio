import { useEffect, useRef } from "react";

interface VintageBgProps {
  theme: "light" | "dark";
}

export const VintageBg = ({ theme }: VintageBgProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isDark = theme === "dark";

    // Mathematical formula to generate organic, layered mountain ridges
    const getRidgeY = (x: number, baseline: number, frequency: number, amplitude: number) => {
      const swell1 = Math.sin(x * frequency) * amplitude;
      const swell2 = Math.cos(x * frequency * 2.3) * (amplitude * 0.35);
      const swell3 = Math.sin(x * frequency * 5.7) * (amplitude * 0.12);
      return baseline + swell1 + swell2 + swell3;
    };

    const drawEtching = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";

      // --- 1. Draw the Astronomical Sun ---
      const drawSun = (centerX: number, centerY: number, radius: number) => {
        // Draw the core of the sun with multiple imperfect concentric circles
        ctx.strokeStyle = isDark
          ? "rgba(230, 229, 227, 0.11)"
          : "rgba(28, 26, 23, 0.11)";
        
        for (let rOffset = -2; rOffset <= 2; rOffset += 1.5) {
          ctx.beginPath();
          ctx.lineWidth = Math.random() * 0.4 + 0.4;
          const r = radius + rOffset;
          const steps = 100;
          for (let i = 0; i <= steps; i++) {
            const angle = (i / steps) * Math.PI * 2;
            const jitterX = (Math.random() - 0.5) * 0.4;
            const jitterY = (Math.random() - 0.5) * 0.4;
            const x = centerX + Math.cos(angle) * r + jitterX;
            const y = centerY + Math.sin(angle) * r + jitterY;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Draw medieval wavy rays radiating outwards
        const rayCount = 20;
        for (let i = 0; i < rayCount; i++) {
          const baseAngle = (i / rayCount) * Math.PI * 2;
          ctx.beginPath();
          
          // Randomly make some rays longer than others
          const isLongRay = i % 2 === 0;
          const rayStart = radius + 10;
          const rayEnd = radius + (isLongRay ? 85 : 50);

          ctx.lineWidth = isLongRay ? 0.75 : 0.45;
          ctx.strokeStyle = isDark
            ? `rgba(230, 229, 227, ${isLongRay ? 0.13 : 0.09})`
            : `rgba(28, 26, 23, ${isLongRay ? 0.13 : 0.09})`;

          const steps = 30;
          for (let s = 0; s <= steps; s++) {
            const r = rayStart + (s / steps) * (rayEnd - rayStart);
            // Add waves to the rays
            const waveAngle = Math.sin(r * 0.09) * 0.08;
            const angle = baseAngle + waveAngle;
            
            const jitterX = (Math.random() - 0.5) * 0.3;
            const jitterY = (Math.random() - 0.5) * 0.3;

            const x = centerX + Math.cos(angle) * r + jitterX;
            const y = centerY + Math.sin(angle) * r + jitterY;

            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      };

      // --- 2. Draw Mountain Ridges (Back, Middle, Front) ---
      const drawRidge = (
        baseline: number,
        frequency: number,
        amplitude: number,
        hatchSpacing: number,
        hatchLengthBase: number,
        opacity: number,
        lineWidth: number
      ) => {
        // Draw the main ridge boundary line
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = isDark
          ? `rgba(230, 229, 227, ${opacity * 1.35})`
          : `rgba(28, 26, 23, ${opacity * 0.95})`;

        for (let x = 0; x <= width; x += 5) {
          const y = getRidgeY(x, baseline, frequency, amplitude);
          const jitterY = (Math.random() - 0.5) * 0.45;
          if (x === 0) {
            ctx.moveTo(x, y + jitterY);
          } else {
            ctx.lineTo(x, y + jitterY);
          }
        }
        ctx.stroke();

        // Draw vertical letterpress hatching shading lines
        for (let x = 0; x <= width; x += hatchSpacing) {
          const yTop = getRidgeY(x, baseline, frequency, amplitude);
          // Let hatch length fade organically
          const hatchLength = Math.random() * (hatchLengthBase * 0.4) + (hatchLengthBase * 0.8);
          const yBottom = yTop + hatchLength;

          ctx.beginPath();
          ctx.lineWidth = lineWidth * 0.75;
          ctx.strokeStyle = isDark
            ? `rgba(230, 229, 227, ${opacity * 0.85})`
            : `rgba(28, 26, 23, ${opacity * 0.65})`;

          const jitterX1 = (Math.random() - 0.5) * 0.7;
          const jitterX2 = (Math.random() - 0.5) * 0.7;

          ctx.moveTo(x + jitterX1, yTop);
          ctx.lineTo(x + jitterX2, yBottom);
          ctx.stroke();
        }
      };

      // Draw the Astronomical Sun in the top-right
      drawSun(width * 0.82, height * 0.22, 38);

      // Draw three layered woodcut mountain ridges
      // Back Ridge (High frequency, small waves, dense fine hatches)
      drawRidge(height * 0.68, 0.0035, 30, 14, 25, 0.09, 0.45);
 
      // Middle Ridge (Medium waves, medium hatches)
      drawRidge(height * 0.78, 0.0022, 45, 11, 40, 0.11, 0.6);
 
      // Front Ridge (Bold waves, sparse thick hatches)
      drawRidge(height * 0.88, 0.0015, 60, 9, 65, 0.14, 0.75);
    };

    drawEtching();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawEtching();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <>
      {/* Inline SVG displacement map to generate realistic ink bleed on paper fibers */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          pointerEvents: "none",
          visibility: "hidden",
        }}
      >
        <defs>
          <filter id="ink-bleed">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.14"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="blur"
              in2="noise"
              scale="2.0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10 bg-bg pointer-events-none transition-colors duration-500"
        style={{ filter: "url(#ink-bleed)" }}
      />
    </>
  );
};
