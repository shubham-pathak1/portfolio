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

            {/* Fixed Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500"
                style={{
                    backgroundImage: `
            linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)
          `,
                    backgroundSize: "30px 30px",
                }}
            />
            {/* Spotlight Glow */}
            <div
                className="fixed inset-0 z-[1] pointer-events-none transition-opacity duration-300 motion-reduce:opacity-0"
                style={{
                    background: "radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), var(--glow-color), transparent 40%)"
                }}
            />
            <main className="max-w-[900px] mx-auto px-6 py-10 pb-32 relative z-10">
                {children}

                {/* Quote Section */}
                <div className="mt-32 py-16 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="text-center max-w-2xl mx-auto px-4">
                        <blockquote className="text-lg md:text-xl font-medium text-text-primary leading-relaxed tracking-tight">
                            "Programs must be written for people to read, and only incidentally for machines to execute."
                        </blockquote>
                        <cite className="block mt-6 text-xs font-mono uppercase tracking-widest text-text-secondary/50">— Hal Abelson</cite>
                    </div>
                </div>

                {/* Global Footer */}
                <footer className="mt-16 pt-12 border-t border-border text-center">
                    <div className="mb-4 font-bold text-lg tracking-tight">
                        Design & Developed by{" "}
                        <span className="text-text-primary">Shubham</span>
                    </div>
                    <div className="text-text-secondary text-sm">© {currentYear}. All rights reserved.</div>
                </footer>
            </main>

            {/* Floating Dock */}
            <Dock theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
};
