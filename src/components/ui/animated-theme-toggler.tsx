"use client";

import { useRef } from "react";
import { flushSync } from "react-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface AnimatedThemeTogglerProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export function AnimatedThemeToggler({
    theme,
    toggleTheme,
}: AnimatedThemeTogglerProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const handleToggle = async () => {
        // Fallback for browsers that don't support View Transitions
        if (
            !document.startViewTransition ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            toggleTheme();
            return;
        }

        const button = ref.current;
        if (!button) return;

        // Take a snapshot of the current state
        await document.startViewTransition(() => {
            // Force synchronous update ensuring the DOM changes before the snapshot
            flushSync(() => {
                toggleTheme();
                // Manually toggle the class to ensure it catches the change immediately, 
                // in case the React effect is slightly delayed
                const root = document.documentElement;
                if (theme === "light") {
                    root.classList.add("dark");
                    root.setAttribute("data-theme", "dark");
                } else {
                    root.classList.remove("dark");
                    root.setAttribute("data-theme", "light");
                }
            });
        }).ready.then(() => {
            // Calculate distance to furthest corner
            const { top, left, width, height } = button.getBoundingClientRect();
            const x = left + width / 2;
            const y = top + height / 2;
            const right = window.innerWidth - left;
            const bottom = window.innerHeight - top;
            const maxRadius = Math.hypot(
                Math.max(left, right),
                Math.max(top, bottom)
            );

            const isDark = theme === "light"; // We just toggled to this state (because theme prop is old)

            // Animate the circle clip path
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: isDark
                        ? "::view-transition-new(root)"
                        : "::view-transition-old(root)",
                }
            );
        });
    };

    return (
        <motion.button
            ref={ref}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className={`relative w-11 h-11 rounded-xl grid place-items-center transition-all duration-200 hover:bg-surface-hover hover:-translate-y-1 ${theme === "dark"
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
                }`}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 0 : 1,
                    rotate: theme === "dark" ? 180 : 0,
                    opacity: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 grid place-items-center"
            >
                <Moon className="w-5 h-5 fill-current" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : -180,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 grid place-items-center"
            >
                <Sun className="w-5 h-5 fill-current" />
            </motion.div>
        </motion.button>
    );
}
