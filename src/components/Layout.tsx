import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Dock } from "./ui/Dock";


export const Layout = ({ children }: { children: React.ReactNode }) => {
    const { theme, toggleTheme } = useTheme();
    const pointerRef = React.useRef({ x: 0, y: 0 });
    const rafRef = React.useRef<number | null>(null);
    const currentYear = new Date().getFullYear();

    React.useEffect(() => {
        const root = document.documentElement;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        pointerRef.current = {
            x: Math.round(window.innerWidth / 2),
            y: Math.round(window.innerHeight / 2)
        };
        root.style.setProperty("--spotlight-x", `${pointerRef.current.x}px`);
        root.style.setProperty("--spotlight-y", `${pointerRef.current.y}px`);

        if (prefersReducedMotion) {
            return;
        }

        const paintPointerPosition = () => {
            root.style.setProperty("--spotlight-x", `${pointerRef.current.x}px`);
            root.style.setProperty("--spotlight-y", `${pointerRef.current.y}px`);
            rafRef.current = null;
        };

        const updatePointerPosition = (event: PointerEvent) => {
            pointerRef.current = { x: event.clientX, y: event.clientY };
            if (rafRef.current === null) {
                rafRef.current = requestAnimationFrame(paintPointerPosition);
            }
        };

        window.addEventListener("pointermove", updatePointerPosition, { passive: true });

        return () => {
            window.removeEventListener("pointermove", updatePointerPosition);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, []);

    return (
        <div className="min-h-screen relative isolate">

            {/* Pixel/Dot Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500"
                style={{
                    backgroundImage: "radial-gradient(var(--grid-line-color) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            />
            {/* Spotlight Glow */}
            <div
                className="fixed inset-0 z-[1] pointer-events-none transition-opacity duration-300 motion-reduce:opacity-0"
                style={{
                    background: "radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), var(--glow-color), transparent 40%)"
                }}
            />
            <main className="flex-grow pt-10 md:pt-12 pb-20 relative z-10">
                <div className="container mx-auto px-6 max-w-[800px]">
                    {children}

                    {/* Global Footer */}
                    <footer className="mt-16 pt-12 border-t border-border text-center">
                        <div className="mb-4 font-bold text-lg tracking-tight">
                            Design & Developed by{" "}
                            <span className="text-text-primary">Shubham</span>
                        </div>
                        <div className="text-text-secondary text-sm">© {currentYear}. All rights reserved.</div>
                    </footer>
                </div>
            </main>

            {/* Floating Dock */}
            <Dock theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
};
